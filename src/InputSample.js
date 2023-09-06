import React, { useState, useRef } from 'react';

export default function InputSample() {
  const nameInput = useRef();

  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });

    nameInput.current.focus();
  };

  return (
    <div>
      <input
        ref={nameInput}
        name='name'
        placeholder='이름'
        onChange={onChange}
        value={name}
      />
      <input
        name='nickname'
        placeholder='닉네임'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
