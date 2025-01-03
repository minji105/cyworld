import React, { useEffect, useState } from 'react';

function Visitor() {
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    fetch('/api/visit')
      .then(response => response.json())
      .then(data => {
        setTodayVisitors(data.todayVisitors);
        setTotalVisitors(data.totalVisitors);
      })
      .catch(error => console.error('방문자 데이터를 가져오는 중 오류 발생:', error));
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '47%',
        transform: 'translateX(-50%)',
        textWrap: 'nowrap',
        fontSize: '16px',
        display: 'flex'
      }}>
      TODAY<span style={{ color: 'orangered', fontSize: '20px' }}>{todayVisitors}</span>&nbsp;|&nbsp;
      TOTAL<span style={{ fontSize: '20px' }}>{totalVisitors}</span>
    </div>
  );
};

export default Visitor;