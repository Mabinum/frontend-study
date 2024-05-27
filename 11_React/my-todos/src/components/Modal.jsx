import styled from "styled-components"
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);

  .header{
    display: flex;
    width: 20rem;
    height: 10rem;
    margin: auto;
    background: white;
    border: 3px solid black;
    border-radius: 10px;
  }



`;


function Modal(props) {
  const {CloseModal , editTodo, setEditTodo, handleSubmit} = props;

  const handleChange = (e) => {
    setEditTodo({
      ...editTodo,
      text: e.target.value,
    })
  };

  return (
    <ModalWrapper>
      <div className="header">
        <div className="header_title">
          수정
        </div>
        <div onClick={()=>CloseModal()}>
          <IoMdCloseCircle />
        </div>

        <input type="text" value={editTodo.text} onChange={handleChange}
        />

        <button type="button" onClick={handleSubmit}>
          확인
        </button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;