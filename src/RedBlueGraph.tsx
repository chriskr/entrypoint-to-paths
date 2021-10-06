import React, { useCallback, useState } from "react";
import { Graph } from "./types";
import { parseRawGraph } from "./parseRawGraph";
import { Center, H2, PLACEHODER_TEXT, Flex, Result } from "./Atoms";
import { ExpandingTextarea } from "./ExpandingTextarea";
import NetworkGraph from "./NetworkGraph";
import Paths from "./Paths";

const getDFSPaths = (
  graph: Graph,
  label: string,
  path: string[] = [],
  result: string[][] = []
) => {
  const newPath = [...path, label];
  const children = (graph.get(label) || []).filter(
    (child) => !path.includes(child)
  );
  if (children.length === 0) {
    result.push(newPath);
    return result;
  }
  children.forEach((child) => getDFSPaths(graph, child, newPath, result));
  return result;
};

type Path = string[];

const getBFSPaths = (
  graph: Graph,
  labels: [string, Path][],
  visited: Set<string> = new Set(),
  result: Path[] = []
) => {
  const nextStep: [string, Path][] = [];
  labels.forEach(([label, path]) => {
    const newPath = [...path, label];

    const children = visited.has(label)
      ? []
      : (graph.get(label) || []).filter((child) => !visited.has(child));

    if (children.length === 0) {
      result.push(newPath);
      return;
    }

    children.forEach((child) => {
      nextStep.push([child, newPath]);
    });
  });

  labels.forEach(([label]) => visited.add(label));

  if (nextStep.length > 0) getBFSPaths(graph, nextStep, visited, result);

  return result;
};

const RedBlueGraph = () => {
  const [graph, setGraph] = useState<Graph>(new Map());

  const [{ entryPoint, bfsPaths, dfsPaths }, setState] = useState<{
    entryPoint: string;
    bfsPaths: Path[];
    dfsPaths: Path[];
  }>({ entryPoint: "", bfsPaths: [], dfsPaths: [] });

  const onNodeSelected = useCallback(
    (label) => {
      const dfsPaths = getDFSPaths(graph, label);
      const bfsPaths = getBFSPaths(graph, [[label, []]]);
      setState({ entryPoint: label, dfsPaths, bfsPaths });
      setState({ entryPoint: label, dfsPaths, bfsPaths });
    },
    [graph, setState]
  );

  return (
    <Center>
      <H2>enter some paths</H2>
      <ExpandingTextarea
        onChange={(event) => {
          const graph = parseRawGraph(event.target.value);
          setGraph(graph);
        }}
        placeholder={PLACEHODER_TEXT}
      ></ExpandingTextarea>
      {graph.size > 0 && (
        <Flex>
          <NetworkGraph graph={graph} onNodeSelected={onNodeSelected} />
          <Result>
            <H2>entry point: {entryPoint}</H2>
            <H2>Paths with DFS</H2>
            <Paths paths={dfsPaths} />
            <H2>Paths with BFS</H2>
            <Paths paths={bfsPaths} />
          </Result>
        </Flex>
      )}
    </Center>
  );
};

export default RedBlueGraph;
