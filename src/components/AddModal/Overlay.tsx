import styled from "@emotion/styled";

const OverlayContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  animation: fade-in-overlay 150ms ease-out forwards;
`;
type Props = {
  onClickHandle: () => void;
};

const Overlay = ({ onClickHandle }: Props) => {
  return <OverlayContainer onClick={onClickHandle}></OverlayContainer>;
};

export default Overlay;
