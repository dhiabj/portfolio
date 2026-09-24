import React from 'react';
import SystemDiagram from './diagram/SystemDiagram';
import DiagramLegend from './diagram/DiagramLegend';

const PipelineFigure = () => {
  return (
    <section className="pb-8 lg:pb-14">
      <figure>
        <figcaption className="mb-3 font-mono text-xs text-faint">
          fig. 1: the shape of what I ship
        </figcaption>
        <SystemDiagram />
        <div className="mt-3">
          <DiagramLegend />
        </div>
      </figure>
    </section>
  );
};

export default PipelineFigure;
