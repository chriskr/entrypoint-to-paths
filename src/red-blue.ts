export type Vertex = string;
export type Graph = Map<Vertex, Vertex[]>;
export type ColorMap = Map<Vertex, Color>;

const getConnected = (graph: Graph, vertex: Vertex): Vertex[] =>
  graph.get(vertex) || [];

export enum Color {
  RED = 1,
  BLUE,
}

const getVerticesCount = (graph: Graph) =>
  new Set([...Array.from(graph.keys()), ...Array.from(graph.values()).flat()])
    .size;

const getVisitor = (graph: Graph, colorMap: ColorMap) => {
  const getRedBlueSubgraphsInner = (
    vertex: Vertex,
    targetColor: Color = Color.BLUE
  ): boolean => {
    if (colorMap.has(vertex)) return colorMap.get(vertex) === targetColor;

    colorMap.set(vertex, targetColor);

    return getConnected(graph, vertex).every((connectedVertex) =>
      getRedBlueSubgraphsInner(
        connectedVertex,
        targetColor === Color.BLUE ? Color.RED : Color.BLUE
      )
    );
  };
  return getRedBlueSubgraphsInner;
};

export const getRedBlueSubgraphs = (graph: Graph) => {
  const keys = Array.from(graph.keys());
  const colorMap = new Map<Vertex, Color>();
  if (keys.length === 0) {
    return { error: 'empty graph', colorMap };
  }
  const isRedBlueColorable = getVisitor(graph, colorMap)(keys[0], Color.RED);
  const isConnected = getVerticesCount(graph) === colorMap.size;
  const error = !isConnected
    ? 'not connected graph'
    : !isRedBlueColorable
    ? 'is not red blue colorable'
    : '';
  return { error, colorMap };
};
