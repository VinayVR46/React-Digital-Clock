import React, {useState} from 'react'

function Clock() {
    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);
   const  updateTime = ()=>{
        setCurrentTime(time);
    }
    setInterval(updateTime,1000)

  return (
    <div>
        <h1>{currentTime}</h1>
    </div>
  )
}

export default Clock