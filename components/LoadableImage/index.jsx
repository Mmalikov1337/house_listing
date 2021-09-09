import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .5s;
  opacity: ${props =>  props.vis ? 1 : 0};
  transform: scale(1);
  &:hover{
      transform: scale(1.1);
  }
`;
export default function LoadableImage(props) {
  const [loaded, setLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete && !loading) {
        setLoaded(true);
      }
    }
  }, [loading]);
  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Image
      vis={loaded}
      src={props.src}
      ref={imageRef}
      onLoad={() => setLoading(false)}
    />
  );
}
