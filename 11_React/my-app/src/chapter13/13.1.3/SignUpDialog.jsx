import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    alert(value);
  };
  return (
    <Dialog
      title = '화성 탐사 프로그램'
      message='당신의 이름은?'
    >
      <input type="text" value = {value} onChange={handleChange}/>
      <button type="button" onClick={handleClick}>가입하세요!</button>
    </Dialog>
  );
};

export default SignUpDialog;