import styels from './styling/Ring.module.scss';

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