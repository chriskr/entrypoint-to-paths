import React, { useState } from 'react';
import { Color, ColorMap, getRedBlueSubgraphs, Graph } from './red-blue';
import { parseRawGraph } from './parseRawGraph';
import {
  Center,
  H1,
  H2,
  Textarea,
  Error,
  BiPartiteGraph,
  NodeList,
  Node,
} from './Atoms';

const placehoderText = `node 1 - node 2 - node 3, 
node 3 - node 4,
node 3 - node 6`;

const Part = ({ nodes, color }: { nodes: [string, Color][]; color: Color }) => (
  <NodeList>
    {nodes.map(([node], index) => (
      <Node key={index} nodeColor={color}>
        {node}
      </Node>
    ))}
  </NodeList>
);

const RedBlueGraph = () => {
  const [{ graph, error, colorMap }, setState] = useState<{
    graph: Graph;
    error: string;
    colorMap: ColorMap;
  }>({ graph: new Map(), error: '', colorMap: new Map() });

  const redNodes = Array.from(colorMap.entries()).filter(
    ([, color]) => color === Color.RED
  );
  const blueNodes = Array.from(colorMap.entries()).filter(
    ([, color]) => color === Color.BLUE
  );

  return (
    <Center>
      <H1>is it a red blue colorable graph?</H1>
      <H2>enter some paths</H2>
      <Textarea
        onChange={(event) => {
          const graph = parseRawGraph(event.target.value);
          const { error, colorMap } = getRedBlueSubgraphs(graph);
          setState({ graph, error, colorMap });
        }}
        placeholder={placehoderText}
      ></Textarea>
      {error && <Error>{error}</Error>}
      {!error && (
        <>
          <H2>bipartite graph</H2>
          <BiPartiteGraph>
            <Part nodes={redNodes} color={Color.RED} />
            <NodeList>
              {Array.from(colorMap.entries())
                .filter(([, color]) => color === Color.BLUE)
                .map(([node], index) => (
                  <Node key={index} nodeColor={Color.BLUE}>
                    {node}
                  </Node>
                ))}
            </NodeList>
          </BiPartiteGraph>
        </>
      )}
    </Center>
  );
};

export default RedBlueGraph;
