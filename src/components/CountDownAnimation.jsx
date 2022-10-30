import { useContext } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {SettingContext} from '../context/SettingContext'

export default function CountDownAnimation({ key, timer, animate, children }) {
    const {stopAnimate} = useContext(SettingContext)
  return (
    <div>
      <CountdownCircleTimer 
        key={key}
        isPlaying={animate}
        duration={timer * 60}  
        colors={[["#fe6f68", 0.33], ["#fe6f68", 0.33], ["#fe6f68", 0.33]]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={() => {stopAnimate()}}
      >
        {children}
      </CountdownCircleTimer>
    </div>
  )
}
