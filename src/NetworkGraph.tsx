import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { DataSet } from "vis-data";
import { Network } from "vis-network";

const GraphContainer = styled.div`
  width: 500px;
  height: 500px;
`;

const idGetter = () => {
  let id = 1;
  return () => id++;
};

type RawNode = {
  id: number;
  label: string;
  color: string;
};

type RawEdge = {
  from: number;
  to: number;
  color: string;
  id: number;
};

type Graph = Map<string, string[]>;

const getNodesAndEdges = (graph: Graph) => {
  const getId = idGetter();

  const { nodes: rawNodes, labelMap } = Array.from(graph.entries()).reduce(
    ({ nodes, labelMap }, [node, linkedNodes]) => {
      const newNodes = [node, ...linkedNodes]
        .filter((label) => !labelMap.has(label))
        .map((label) => {
          const id = getId();
          labelMap.set(label, id);
          return {
            id,
            label,
            color: `hsla(${(Math.random() * 360) | 0}, 100%, 50%, .3)`,
          };
        });

      return { nodes: [...nodes, ...newNodes], labelMap };
    },
    { nodes: [], labelMap: new Map() } as {
      nodes: RawNode[];
      labelMap: Map<string, number>;
    }
  );

  const { edges: rawEdges } = Array.from(graph.entries()).reduce(
    ({ edges, edgeIds }, [node, linkedNodes]) => {
      const nodeId = labelMap.get(node)!;
      const newEdges = linkedNodes
        .filter((linkedNode) => {
          const linkedNodeId = labelMap.get(linkedNode)!;
          return !isEdgeProcessed(nodeId, linkedNodeId, edgeIds);
        })
        .map((linkedNode) => {
          const linkedNodeId = labelMap.get(linkedNode)!;
          edgeIds.add(`${nodeId}-${linkedNodeId}`);
          return {
            from: nodeId,
            to: linkedNodeId,
            color: "black",
            id: getId(),
          };
        });
      return { edges: [...edges, ...newEdges], edgeIds };
    },
    {
      edges: [],
      edgeIds: new Set(),
    } as {
      edges: RawEdge[];
      edgeIds: Set<string>;
    }
  );

  const nodes = new DataSet(rawNodes);
  const edges = new DataSet(rawEdges);

  return { nodes, edges, rawNodes };
};

const isEdgeProcessed = (
  nodeId: number,
  linkedNodeId: number,
  edgeIds: Set<string>
) =>
  edgeIds.has(`${nodeId}-${linkedNodeId}`) ||
  edgeIds.has(`${linkedNodeId}-${nodeId}`);

type NetworkGraphProps = {
  graph: Graph;
  onNodeSelected: (label: string) => void;
};

const NetworkGraph = ({ graph, onNodeSelected }: NetworkGraphProps) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const data = getNodesAndEdges(graph);
    const map = new Map(data.rawNodes.map((node) => [node.id, node]));
    const options = {
      nodes: {
        shape: "circle",
      },
      edges: {
        smooth: false,
      },
      interaction: {
        selectConnectedEdges: false,
        zoomView: false,
      },
      physics: {
        enabled: false,
      },
    };
    const network = new Network(container.current!, data, options);
    network.on("click", (e) => {
      const node = map.get(e.nodes[0]);
      if (node) onNodeSelected(node.label);
    });
  }, [graph, onNodeSelected]);

  return <GraphContainer ref={container} />;
};

export default NetworkGraph;
