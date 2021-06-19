import React from 'react';
import { Color } from './types';
import { NodeList, Node } from './Atoms';

export const Part = ({ nodes, color }: { nodes: string[]; color: Color }) => (
  <NodeList>
    {nodes.map((node, index) => (
      <Node key={index} nodeColor={color}>
        {node}
      </Node>
    ))}
  </NodeList>
);
