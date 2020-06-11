import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState([{
    name: "홍길동",
    phone: "000000",
  }]);

  const initialData = {
    name: "",
    phone: "",
  };
  const [data, setData] = useState(initialData);
  const [keyword, setKeyword] = useState("");

  const addContact = () => {
    setList([
      ...list,
      data
    ]);
    setData(initialData);
  }

  const changeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  }

  const changePhone = (e) => {
    setData({
      ...data,
      phone: e.target.value,
    });
  }

  const deleteData = (name) => {
    setList(list.filter(o => o.name !== name));
  }

  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  } 

  return (
    <div>
      <input placeholder="이름" value={data.name} onChange={changeName}/>
      <input placeholder="전화번호" value={data.phone} onChange={changePhone}/>
      <button onClick={addContact}>등록</button>
      <input placeholder="검색" value={keyword} onChange={changeKeyword}/>
      {list
      .filter(o => o.name.indexOf(keyword) > -1)
      .map(item => (
        <div key={item.name}>
          <div>{item.name}</div>
          <div>{item.phone}</div>
          <button onClick={deleteData.bind(null, item.name)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default App;
