import styled from 'styled-components';
import { Color } from './types';
import github from './github.svg';
import wiking from './wiking.svg';
import logo from './logo.svg';

export const Center = styled.div`
  align-items: center;
  background-color: rgb(248, 240, 231);
  background-image: url(${logo});
  background-position: center center;
  background-repeat: no-repeat;
  box-sizing: border-box;
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
  font-size: 5vh;
  margin: 0;
  padding: 80px 0 0 0;
`;

export const H2 = styled.h2`
  font: inherit;
  font-size: 24px;
  margin: 36px 0 24px 0;
  padding: 0;
`;

export const PLACEHODER_TEXT = `v 1 - v 2 - v 3,
v 3 - v 4`;
export const TEXTAREA_PADDING = 12;
export const TEXTAREA_HEIGHT = 56;

export const TextareaContainer = styled.div<{ targetHeight: number }>`
  display: flex;
  flex-direction: row;
  margin-top: -12px;
  & > span {
    font-size: ${(props) => props.targetHeight}px;
    height: ${(props) => props.targetHeight}px;
    line-height: ${(props) => props.targetHeight * 0.91}px;
    padding: ${TEXTAREA_PADDING}px 0;
  }
`;

const StyledTextarea = styled.textarea<{ targetHeight?: number }>``;
export const Textarea = styled(StyledTextarea).attrs({
  spellCheck: false,
})`
  background-color: transparent;
  border: 0px solid hsl(0, 0%, 85%);
  font: inherit;
  font-size: 24px;
  height: ${(props) => props.targetHeight}px;
  overflow: hidden;
  padding: ${TEXTAREA_PADDING}px;
  resize: none;
  width: 300px;
  &:active,
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: hsl(0, 0%, 50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:active::placeholder,
  &:focus::placeholder {
    opacity: 1;
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
  margin-top: 48px;
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
