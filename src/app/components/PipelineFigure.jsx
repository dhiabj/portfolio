import React from 'react';
import SystemDiagram from './diagram/SystemDiagram';
import DiagramLegend from './diagram/DiagramLegend';

const PipelineFigure = () => {
  return (
    <section className="pb-8 lg:pb-14">
      <p className="mb-3 font-mono text-xs text-faint">fig. 1 — the shape of what I ship</p>
      <SystemDiagram />
      <div className="mt-3">
        <DiagramLegend />
      </div>
    </section>
  );
};

export default PipelineFigure;
