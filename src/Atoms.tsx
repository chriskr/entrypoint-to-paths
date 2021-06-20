import styled from 'styled-components';
import { Color } from './types';
import github from './github.svg';
import wiking from './wiking.svg';

export const Center = styled.div`
  align-items: center;
  background-image: linear-gradient(hsl(0, 0%, 95%), hsl(0, 0%, 75%));
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 50px 0;
  &::after {
    content: '';
    flex: 1;
  }
`;

export const H1 = styled.h1`
  background-image: url(${wiking});
  background-position: 50% 8px;
  background-repeat: no-repeat;
  background-size: 48px;
  font: inherit;
  font-size: 48px;
  margin: 0 0 -12px 0;
  padding: 80px 0 0 0;
`;

export const H2 = styled.h2`
  font: inherit;
  font-size: 24px;
  margin: 48px 0 12px 0;
  padding: 0;
`;

export const placehoderText = `node 1 - node 2 - node 3,
node 3 - node 4,
node 3 - node 6`;
export const TEXTAREA_PADDING = 12;
export const TEXTAREA_HEIGHT = 84;

export const Textarea = styled.textarea.attrs({
  spellCheck: false,
})`
  background-color: hsl(0, 0%, 95%);
  border-radius: ${TEXTAREA_HEIGHT / 2 + TEXTAREA_PADDING}px;
  border: 0px solid hsl(0, 0%, 85%);
  font: inherit;
  font-size: 24px;
  height: ${TEXTAREA_HEIGHT}px;
  overflow: hidden;
  padding: ${TEXTAREA_PADDING}px 48px;
  resize: none;
  width: 300px;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const TextareaClone = styled(Textarea)`
  position: absolute;
  pointer-events: none;
  opacity: 0;
`;

export const BipartiteGraph = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NodeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const cssColor = {
  [Color.BLUE]: 'hsl(220, 100%, 70%)',
  [Color.RED]: 'hsl(15, 100%, 65%)',
};

export const Node = styled.li<{ nodeColor: Color }>`
  background-color: ${(props) => cssColor[props.nodeColor]};
  border-radius: 16px;
  color: white;
  font-size: 24px;
  height: 32px;
  line-height: 32px;
  margin: 0 0 16px 0;
  padding: 0 16px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Svg = styled.svg`
  margin: 0 -24px;
`;

export const Error = styled(H2)`
  color: red;
`;

export const RepoLink = styled.a`
  display: block;
  background-image: url(${github});
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 20px;
  padding-left: 32px;
  height: 24px;
  line-height: 24px;
  text-decoration: none;
  order: 3;
  cursor: pointer;
  color: inherit;
  &::visited,
  &:-webkit-any-link {
    color: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`;
