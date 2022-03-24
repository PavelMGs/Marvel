import React, { memo, useEffect, useState } from 'react'
import s from './home.module.scss'

interface IProps {}

const Home: React.FC<IProps> = () => {
  const [shadowOffset, setShadowOffset] = useState({ x: 15, y: 15 })

  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window
    const { clientX, clientY } = e
    const maxOffset = 30

    let newXOffset = 0
    let newYOffset = 0
    if (clientX > innerWidth / 2) {
      newXOffset = maxOffset / (innerWidth / (clientX - innerWidth / 2) / 2) * -1
    } else {
      newXOffset = maxOffset / (innerWidth / (innerWidth / 2 - clientX) / 2)
    }
    if (clientY > innerHeight / 2) {
      newYOffset = maxOffset / (innerHeight / (clientY - innerHeight / 2) / 2) * -1
    } else {
      newYOffset = maxOffset / (innerHeight / (innerHeight / 2 - clientY) / 2)
    }
    setShadowOffset({ x: newXOffset, y: newYOffset })
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={s.root}>
      <span className={s.backgroundText} style={{ textShadow: `${shadowOffset.x}px ${shadowOffset.y}px 3px black` }}>MARVEL</span>
      <span className={s.docsText}>docs.</span>
    </div>
  )
}

export default memo(Home)
