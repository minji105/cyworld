import styels from './styling/Ring.module.css';

function Ring() {
  return (
    <div className='rings'>
      <div className={styels.ring} style={{top: '200px'}}></div>
      <div className={styels.ring} style={{top: '250px'}}></div>
      <div className={styels.ring} style={{top: '500px'}}></div>
      <div className={styels.ring} style={{top: '550px'}}></div>
    </div>
  )
}

export default Ring;