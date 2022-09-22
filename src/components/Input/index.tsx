import styled from "@emotion/styled";
import React, { useRef } from "react";

const MyInput = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  margin: 36px auto 20px auto;
  outline: none;
  display: block;
`;

type Props = {
  id: string;
  type: string;
  onChange: (value: string) => void;
};

const Input = ({ id, type, onChange }: Props) => {
  const enteredValueRef = useRef<HTMLInputElement>(null);
  return (
    <React.Fragment>
      <label htmlFor={id}></label>
      <MyInput
        ref={enteredValueRef}
        type={type}
        id={id}
        onChange={() => onChange(enteredValueRef.current!.value)}
      />
    </React.Fragment>
  );
};

export default Input;
