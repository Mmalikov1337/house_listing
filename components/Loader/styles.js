import styled, {keyframes} from "styled-components";

export const Rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`
export const Wraper = styled.div`
  width: 31px;
  height: 21px;
  display: inline-block;
`
export const Ring = styled.div`
  position: absolute;
  width: 21px;
  height: 21px;
  border: 2px solid white;
  border-radius: 21px;
`
export const Holder = styled.div`
  position: absolute;
  width: 6px;
  height: 21px;
  left: 8px;
  top: 0;
  animation-name: ${Rotate};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const Ball = styled.div`
  position: absolute;
  left: 0;
  top: -5px;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 7px;
`

