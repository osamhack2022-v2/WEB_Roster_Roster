import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const LeftPart_Style = styled.div`
  width : 30%;
  height : 100%;
`;

const Button_Style = styled.button`
  cursor : pointer;
`;

function List_Maker({ Worker, onRemove }) {
  return (
    <p key={Worker.id}>
      {Worker.name}
      <Button_Style onClick={() => onRevise(Worker.id)}>수정</Button_Style>
      <Button_Style onClick={() => onRemove(Worker.id)}>삭제</Button_Style>
    </p>
  );
}

export default function LeftPart() {
  const [Worker, setWorker] = useState({
    name: '',
    id: '',
  });
  const [Worker_list, setWorker_list] = useState([]);

  const nextId = useRef(0);
  const focus = useRef();

  const { name } = Worker;

  const onChange = (e) => {
    const { value } = e.target;
    setWorker({
      ...Worker,
      name: value,
    });
  };

  const onClick = () => {
    const Work = {
      name,
      id: nextId.current,
    };
    setWorker_list([...Worker_list, Work]);

    setWorker({
      name: '',
      id: '',
    });
    nextId.current += 1;
    focus.current.focus();
  };

  const onRemove = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setWorker_list(Worker_list.filter((Worker) => Worker.id !== id));
      alert('삭제되었습니다');
    }
  };

  // const onRevise = (id) => {
  //   if (window.confirm('수정하시겠습니까?')) {
  //     const Revised = prompt('수정하실사항을 입력하세요');
  //     setWorker({
  //       ...Worker,
  //       name: Revised,
  //       id: id,
  //     });

  //     let Copy = Worker_list.filter((Worker) => Worker.id !== id);

  //     setWorker_list(Copy.concat(Worker));

  //     debugger;

  //     setWorker({
  //       name: '',
  //       id: '',
  //     });

  //     focus.current.focus();

  //   }
  // };

  return (
    <LeftPart_Style>
      <input type="text" id="name" onChange={onChange} ref={focus} />
      <Button_Style onClick={onClick}>입력</Button_Style>
      <p>
        근무자 명단 :
        {Worker_list.map((Worker) => (
          <List_Maker Worker={Worker} onRemove={onRemove} />
        ))}
      </p>
    </LeftPart_Style>
  );
}
