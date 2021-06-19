import styled from 'styled-components';
import { Color } from './red-blue';

export const Textarea = styled.textarea.attrs({
  spellCheck: false,
})`
  background-color: hsl(0, 0%, 95%);
  border: 0px solid hsl(0, 0%, 85%);
  border-radius: 72px;
  font: inherit;
  font-size: 24px;
  height: 120px;
  padding: 12px 72px;
  resize: none;
  width: 300px;
  &:active,
  &:focus {
    outline: none;
  }
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
  margin: 0 0 10px 0;
  padding: 0 16px;
  text-align: center;
`;
export const NodeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Center = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  font: inherit;
  font-size: 48px;
  margin: 72px 0 24px 0;
  padding: 0;
`;
export const H2 = styled.h2`
  font: inherit;
  font-size: 24px;
  margin: 24px 0 12px 0;
  padding: 0;
`;
export const Error = styled(H2)`
  color: red;
`;
export const BiPartiteGraph = styled.div`
  display: flex;
  flex-direction: row;
`;
