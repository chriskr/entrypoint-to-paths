import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Path = styled.li``;

type PathsProps = {
  paths: string[][];
};
const Paths = ({ paths }: PathsProps) => {
  return (
    <List>
      {paths.map((path) => (
        <Path>{path.join(" - ")}</Path>
      ))}
    </List>
  );
};

export default Paths;
