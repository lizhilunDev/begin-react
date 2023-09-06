import React from 'react';

export default function Hello({ name, color, isSpecial }) {
  // 이것이 하나의 컴포넌트가 된다.
  return (
    <div style={{ color }}>
      {isSpecial && <b>**</b>}
      {name}님, 안녕하세요!
    </div>
  );
}

Hello.defaultProps = {
  name: '홍길동',
};
