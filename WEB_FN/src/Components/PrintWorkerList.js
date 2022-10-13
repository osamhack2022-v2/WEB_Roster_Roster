import React, { useContext } from 'react';
import { ReducerContext } from './Context/ReducerContext.js';
import Worker from './Worker';

export default function PrintWorkerList() {
  const { dispatch, state } = useContext(ReducerContext);

  const onRemove = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch({
        type: 'REMOVE',
        id,
      });
      alert('삭제되었습니다');
    }
  };

  const onRevise = (id) => {
    const revised = prompt('수정해주십시오');
    dispatch({
      type: 'REVISE',
      revisedWorker: {
        id,
        rankAndName: revised,
      },
    });
    alert('수정기능은 추후 제작할예정입니다');
  };

  return (
    <p>
      근무자 명단 :
      {state.workerList.map((worker) => (
        <Worker worker={worker} onRemove={onRemove} onRevise={onRevise} />
      ))}
    </p>
  );
}
