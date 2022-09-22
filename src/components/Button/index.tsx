import styled from "@emotion/styled";

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  border: none;
  outline: inherit;
  cursor: pointer;
  position: absolute;
  top: 26px;
  right: 26px;
  background-color: #363a5e;
  color: white;
  &:hover {
    background-color: #71759c;
  }
`;

type Props = {
  onClick: (id: string) => void;
  target: string;
};

const Button = ({ onClick, target }: Props) => {
  return <AddButton onClick={() => onClick(target)}>Add</AddButton>;
};

export default Button;
