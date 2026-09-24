'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// One realistic pipeline: schedule -> ingest -> api -> interface, with the
// failure alert that triggers a retry back at the scheduler.
const desktopNodes = [
  { id: 'schedule', label: 'SCHEDULE', note: 'jobs · queue', x: 20, y: 30, w: 160, h: 64 },
  { id: 'ingest', label: 'INGEST', note: 'scrape · normalize', x: 330, y: 30, w: 160, h: 64 },
  { id: 'api', label: 'API', note: 'REST / JSON', x: 640, y: 30, w: 160, h: 64 },
  {
    id: 'interface',
    label: 'INTERFACE',
    note: 'this page',
    x: 950,
    y: 30,
    w: 180,
    h: 64,
    live: true,
  },
  { id: 'alert', label: 'ALERT', note: 'monitor', x: 175, y: 210, w: 160, h: 64 },
];

const desktopEdges = [
  { from: 'schedule', to: 'ingest', style: 'solid', label: 'trigger · retry(3)', d: 'M180,62 L330,62' },
  { from: 'ingest', to: 'api', style: 'solid', label: 'clean data', d: 'M490,62 L640,62' },
  { from: 'api', to: 'interface', style: 'solid', label: 'REST / JSON', d: 'M800,62 L950,62' },
  {
    from: 'ingest',
    to: 'alert',
    style: 'dashed',
    label: 'on failure',
    d: 'M410,94 L255,210',
  },
  {
    from: 'alert',
    to: 'schedule',
    style: 'dashed',
    label: 'retry',
    d: 'M175,242 C 110,242 80,160 100,94',
  },
];

const mobileNodes = [
  { id: 'schedule', label: 'SCHEDULE', note: 'jobs · queue', x: 20, y: 20, w: 220, h: 56 },
  { id: 'ingest', label: 'INGEST', note: 'scrape · normalize', x: 20, y: 160, w: 220, h: 56 },
  { id: 'api', label: 'API', note: 'REST / JSON', x: 20, y: 300, w: 220, h: 56 },
  {
    id: 'interface',
    label: 'INTERFACE',
    note: 'this page',
    x: 20,
    y: 440,
    w: 240,
    h: 56,
    live: true,
  },
  { id: 'alert', label: 'ALERT', note: 'monitor', x: 270, y: 90, w: 100, h: 56 },
];

const mobileEdges = [
  { from: 'schedule', to: 'ingest', style: 'solid', label: 'trigger', d: 'M130,76 L130,160' },
  { from: 'ingest', to: 'api', style: 'solid', label: 'data', d: 'M130,216 L130,300' },
  { from: 'api', to: 'interface', style: 'solid', label: 'REST', d: 'M130,356 L140,440' },
  {
    from: 'ingest',
    to: 'alert',
    style: 'dashed',
    label: 'on failure',
    d: 'M240,188 L300,146',
  },
  {
    from: 'alert',
    to: 'schedule',
    style: 'dashed',
    label: 'retry',
    d: 'M270,118 C 255,100 250,70 240,48',
  },
];

const edgeVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2, delay: 0.15 + i * 0.12 } },
  }),
};

// Dashed edges are drawn in by animating a solid path inside a mask, because
// animating pathLength directly overwrites strokeDasharray and leaves them solid.
const groupVariants = { hidden: {}, show: {} };

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function DiagramSvg({ viewBox, nodes, edges, className, idPrefix }) {
  const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);
  const active = pinned ?? hovered;

  const isEdgeActive = (edge) =>
    !active || edge.from === active || edge.to === active;
  const isNodeActive = (id) => !active || id === active;

  const togglePin = (id) => setPinned((p) => (p === id ? null : id));
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePin(id);
    }
  };

  return (
    <svg
      viewBox={viewBox}
      className={className}
      role="group"
      onClick={(e) => {
        if (e.target === e.currentTarget) setPinned(null);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setPinned(null);
      }}
      aria-label="Diagram of a typical pipeline Dhia builds: schedule, ingest, API, interface, with an alert-and-retry loop on failure. Select a node to highlight its connections. Press Escape to clear.">
      <defs>
        <marker id={`${idPrefix}-arrow-solid`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-ink" />
        </marker>
        <marker id={`${idPrefix}-arrow-dashed`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-accent" />
        </marker>
      </defs>

      {edges.map((edge, i) => {
        if (edge.style === 'dashed') {
          const maskId = `${idPrefix}-mask-${edge.from}-${edge.to}`;
          return (
            <motion.g
              key={`${edge.from}-${edge.to}`}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={groupVariants}>
              <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={vbWidth} height={vbHeight}>
                <motion.path
                  d={edge.d}
                  fill="none"
                  stroke="white"
                  strokeWidth={10}
                  custom={i}
                  variants={edgeVariants}
                />
              </mask>
              <path
                d={edge.d}
                fill="none"
                className="stroke-accent"
                strokeWidth={1.5}
                strokeDasharray="5 4"
                markerEnd={`url(#${idPrefix}-arrow-dashed)`}
                mask={`url(#${maskId})`}
                style={{ opacity: isEdgeActive(edge) ? 1 : 0.2 }}
              />
            </motion.g>
          );
        }
        return (
          <g
            key={`${edge.from}-${edge.to}`}
            style={{ opacity: isEdgeActive(edge) ? 1 : 0.2 }}>
            <motion.path
              d={edge.d}
              fill="none"
              className="stroke-ink"
              strokeWidth={1.75}
              markerEnd={`url(#${idPrefix}-arrow-solid)`}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={edgeVariants}
            />
          </g>
        );
      })}

      {edges.map((edge) => {
        // label position: midpoint of the path's start and end points
        const pts = edge.d.match(/-?[\d.]+/g).map(Number);
        const mx = (pts[0] + pts[pts.length - 2]) / 2;
        const my = (pts[1] + pts[pts.length - 1]) / 2;
        const labelWidth = edge.label.length * 5.6 + 10;
        return (
          <g key={`label-${edge.from}-${edge.to}`} style={{ opacity: isEdgeActive(edge) ? 1 : 0.2 }}>
            <rect
              x={mx - labelWidth / 2}
              y={my - 18}
              width={labelWidth}
              height={14}
              className="fill-paper"
            />
            <text
              x={mx}
              y={my - 8}
              textAnchor="middle"
              className={`font-mono ${edge.style === 'dashed' ? 'fill-accent' : 'fill-muted'}`}
              style={{ fontSize: 10 }}>
              {edge.label}
            </text>
          </g>
        );
      })}

      {nodes.map((node, i) => (
        <g key={node.id} style={{ opacity: isNodeActive(node.id) ? 1 : 0.2 }}>
          <motion.g
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={nodeVariants}
            className="diagram-node"
            tabIndex={0}
            role="button"
            aria-pressed={pinned === node.id}
            aria-label={`${node.label}, ${node.note}. Select to highlight its connections.`}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(node.id)}
            onBlur={() => setHovered(null)}
            onClick={() => togglePin(node.id)}
            onKeyDown={(e) => handleKeyDown(e, node.id)}
            style={{ cursor: 'pointer' }}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx={4}
              className={node.live ? 'fill-accent-dim stroke-accent' : 'fill-paper stroke-ink'}
              strokeWidth={node.live ? 1.75 : 1.5}
            />
            <circle
              cx={node.x + node.w - 14}
              cy={node.y + 14}
              r={4}
              className={`stroke-accent ${node.live ? 'fill-accent animate-pulse-dot' : 'fill-none'}`}
              strokeWidth={1.5}
              style={node.live ? { transformBox: 'fill-box', transformOrigin: 'center' } : undefined}
            />
            <text
              x={node.x + 14}
              y={node.y + node.h / 2 - 4}
              className="fill-ink font-mono"
              style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.04em' }}>
              {node.label}
            </text>
            <text
              x={node.x + 14}
              y={node.y + node.h / 2 + 14}
              className="fill-muted font-mono"
              style={{ fontSize: 10 }}>
              {node.note}
            </text>
          </motion.g>
        </g>
      ))}
    </svg>
  );
}

const SystemDiagram = () => {
  return (
    <div className="w-full rounded-lg border border-line bg-paper p-4 sm:p-6">
      <DiagramSvg
        viewBox="0 0 1150 300"
        nodes={desktopNodes}
        edges={desktopEdges}
        idPrefix="desktop"
        className="hidden w-full lg:block"
      />
      <DiagramSvg
        viewBox="0 0 380 520"
        nodes={mobileNodes}
        edges={mobileEdges}
        idPrefix="mobile"
        className="mx-auto block w-full max-w-[380px] lg:hidden"
      />
    </div>
  );
};

export default SystemDiagram;
