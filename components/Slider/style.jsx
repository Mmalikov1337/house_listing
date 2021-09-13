import styled from "styled-components";
import {primary} from "../common";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`
export const Slide = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: ${(props) => props.active ? 1 : 0};
  transition: all .5s;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    object-fit: cover;
  }
`
export const SlideButton = styled.button`
  width: 60px;
  height: 100%;
  border: none;
  outline: none;
  position: absolute;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.02);

  svg {
    fill: white;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`
export const SlideButtonNext = styled(SlideButton)`
  right: 0;
`
export const SlideButtonPrev = styled(SlideButton)`
  left: 0;
`
export const DotsContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`
export const Dot = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.55);
  margin: 0 5px;
  background: ${(props) => props.active ? primary : "#f3f3f38c"};
  transition: all .5s;

  &:hover {
    background: #f3f3f3;

  }
`