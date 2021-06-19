import React, { useState } from 'react';
import { getRedBlueSubgraphs } from './red-blue';
import { Color, ColorMap, Graph } from './types';
import { parseRawGraph } from './parseRawGraph';
import { Center, H1, H2, Error, BipartiteGraph } from './Atoms';
import { Part } from './Part';
import { Edges } from './Edges';
import { ExpandingTextarea } from './ExpandingTextarea';

const placehoderText = `node 1 - node 2 - node 3,
node 3 - node 4,
node 3 - node 6`;

const RedBlueGraph = () => {
  const [{ graph, error, colorMap }, setState] = useState<{
    graph: Graph;
    error: string;
    colorMap: ColorMap;
  }>({ graph: new Map(), error: '', colorMap: new Map() });

  const redNodes = Array.from(colorMap.entries())
    .filter(([, color]) => color === Color.RED)
    .map(([node]) => node);

  const blueNodes = Array.from(colorMap.entries())
    .filter(([, color]) => color === Color.BLUE)
    .map(([node]) => node);

  const redNodesSet = new Set(redNodes);

  const redNodesGraph = new Map(
    Array.from(graph).filter(([node]) => redNodesSet.has(node))
  );

  return (
    <Center>
      <H1>is it a red blue colorable graph?</H1>
      <H2>enter some paths</H2>
      <ExpandingTextarea
        onChange={(event) => {
          const graph = parseRawGraph(event.target.value);
          const { error, colorMap } = getRedBlueSubgraphs(graph);
          setState({ graph, error, colorMap });
        }}
        placeholder={placehoderText}
      ></ExpandingTextarea>
      {error && <Error>{error}</Error>}
      {!error && redNodes.length > 0 && (
        <>
          <H2>bipartite graph</H2>
          <BipartiteGraph>
            <Part nodes={redNodes} color={Color.RED} />
            <Edges
              redNodes={redNodes}
              blueNodes={blueNodes}
              redNodesGraph={redNodesGraph}
            />
            <Part nodes={blueNodes} color={Color.BLUE} />
          </BipartiteGraph>
        </>
      )}
    </Center>
  );
};

export default RedBlueGraph;
