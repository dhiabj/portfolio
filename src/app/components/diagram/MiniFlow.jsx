'use client';
import React, { useId } from 'react';
import { motion } from 'framer-motion';

const NODE_W = 148;
const NODE_H = 44;
const GAP = 56;

const edgeVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.5, delay: 0.1 + i * 0.1 }, opacity: { duration: 0.15, delay: 0.1 + i * 0.1 } },
  }),
};

const groupVariants = { hidden: {}, show: {} };

const nodeVariants = {
  hidden: { opacity: 0, y: 6 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.35, delay: i * 0.07 } }),
};

/**
 * A small labeled data-flow diagram: one project's real pipeline, drawn in the
 * same node/edge grammar as the hero SystemDiagram.
 * steps: string[]
 * loop: { from: number, to: number, label: string } | null: a dashed retry/alert edge
 */
const MiniFlow = ({ steps, loop = null }) => {
  const width = steps.length * NODE_W + (steps.length - 1) * GAP + 8;
  const hasLoop = Boolean(loop);
  const height = hasLoop ? 130 : NODE_H + 16;
  const rowY = 8;

  const nodeX = (i) => i * (NODE_W + GAP) + 4;

  const uid = useId().replace(/:/g, '');
  const loopMaskId = `${uid}-loop-mask`;
  const arrowId = `${uid}-arrow`;
  const arrowAccentId = `${uid}-arrow-accent`;
  const loopPath = loop
    ? `M${nodeX(loop.from) + NODE_W / 2},${rowY + NODE_H} C ${nodeX(loop.from) + NODE_W / 2},${rowY + NODE_H + 40} ${nodeX(loop.to) + NODE_W / 2},${rowY + NODE_H + 40} ${nodeX(loop.to) + NODE_W / 2},${rowY + NODE_H}`
    : '';

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ minWidth: width }}
      className="h-auto"
      role="img"
      aria-label={`Pipeline: ${steps.join(' to ')}${loop ? `, with ${loop.label} back to ${steps[loop.to]}` : ''}`}>
      <defs>
        <marker id={arrowId} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-ink" />
        </marker>
        <marker id={arrowAccentId} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-accent" />
        </marker>
      </defs>

      {steps.slice(0, -1).map((_, i) => {
        const x1 = nodeX(i) + NODE_W;
        const x2 = nodeX(i + 1);
        const y = rowY + NODE_H / 2;
        return (
          <motion.path
            key={`edge-${i}`}
            d={`M${x1},${y} L${x2},${y}`}
            className="stroke-ink"
            strokeWidth={1.5}
            markerEnd={`url(#${arrowId})`}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-20px' }}
            variants={edgeVariants}
          />
        );
      })}

      {hasLoop && (
        <>
          <motion.g
            custom={steps.length}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-20px' }}
            variants={groupVariants}>
            <mask id={loopMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
              <motion.path
                d={loopPath}
                fill="none"
                stroke="white"
                strokeWidth={10}
                custom={steps.length}
                variants={edgeVariants}
              />
            </mask>
            <path
              d={loopPath}
              fill="none"
              className="stroke-accent"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              markerEnd={`url(#${arrowAccentId})`}
              mask={`url(#${loopMaskId})`}
            />
          </motion.g>
          <text
            x={(nodeX(loop.from) + nodeX(loop.to)) / 2 + NODE_W / 2}
            y={rowY + NODE_H + 56}
            textAnchor="middle"
            className="fill-accent font-mono"
            style={{ fontSize: 10 }}>
            {loop.label}
          </text>
        </>
      )}

      {steps.map((label, i) => (
        <motion.g
          key={label}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-20px' }}
          variants={nodeVariants}>
          <rect
            x={nodeX(i)}
            y={rowY}
            width={NODE_W}
            height={NODE_H}
            rx={4}
            className="fill-paper stroke-ink"
            strokeWidth={1.25}
          />
          <text
            x={nodeX(i) + NODE_W / 2}
            y={rowY + NODE_H / 2 + 4}
            textAnchor="middle"
            className="fill-ink font-mono"
            style={{ fontSize: 11 }}>
            {label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
};

export default MiniFlow;
