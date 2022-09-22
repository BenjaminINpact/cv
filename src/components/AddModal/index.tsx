import styled from "@emotion/styled";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import DataForm from "../../models/dataForm";
import Overlay from "./Overlay";

type Props = {
  title: string;
  onCloseModal: () => void;
  onAddItem: (datas: DataForm) => void;
};

const ModalContainer = styled.div`
  position: fixed;
  width: 400px;
  height: 200px;
  background-color: #52599f;
  top: calc(50vh - 200px);
  left: calc(50vw - 200px);
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  text-align: center;
  animation: slide-down 300ms ease-out forwards;
`;

const Button = styled.button`
  outline: inherit;
  cursor: pointer;
  border: none;
  width: 100px;
  padding: 3px;
  margin-left: 20px;
  border-radius: 5px;
  background-color: #bbc0ee;
  &:hover {
    background-color: #fff;
  }
`;

const MyInput = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  margin: 36px auto 20px auto;
  outline: none;
  display: block;
`;
const AddModal = ({ title, onCloseModal, onAddItem }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputValid, setIsInputValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.currentTarget.value);
    setIsInputValid(enteredValue.trim().length >= 3);
  };

  const onBlurInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.currentTarget.value);
    setIsInputValid(enteredValue.trim().length >= 3);
  };

  const submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (enteredValue.trim().length < 3) {
      setIsInputValid(false);
      focusOnInput();
      return;
    }
    const datas = new DataForm(title, enteredValue);
    onAddItem(datas);
    setEnteredValue("");
  };

  useEffect(() => {
    focusOnInput();
  }, [isInputValid]);

  const focusOnInput = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <React.Fragment>
      <Overlay onClickHandle={onCloseModal} />
      <ModalContainer>
        <h3>Ajouter à {title}</h3>
        <form onSubmit={(ev: React.FormEvent) => submitHandler(ev)}>
          <label htmlFor={title}></label>
          <MyInput
            className={!isInputValid ? "input-error" : ""}
            id={title}
            value={enteredValue}
            onChange={onChangeInput}
            onBlur={onBlurInput}
            ref={inputRef}
          />
          <Button type="button" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </form>
      </ModalContainer>
    </React.Fragment>
  );
};

export default AddModal;
