import React, { useEffect, useRef, useState } from 'react'

import { FaAngleRight } from 'react-icons/fa'
// styled
import {
  Container,
  MenuList,
  MeunItem,
  PlusMenuItem,
  PlusMenuList
} from './ContextMenuStyle'

/*
isOpen state를 통해 styled- components로 재구성합시다.
 */

const ContextMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef() // context meun 컨테이너
  const plusMenuRef = useRef() // context menu 안에 새로운 menu

  const handleOpenCtxMenu = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
    containerRef.current.style.visibility = 'visible'
    let x = e.offsetX
    let y = e.offsetY

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const contextMenuWidth = containerRef.current.offsetWidth
    const contextMenuHeight = containerRef.current.offsetHeight

    // contextmenu가 window를 넘어갔을 때 안넘어가게 표현
    const criteriaWidth = windowWidth - contextMenuWidth
    const criteriaHeight = windowHeight - contextMenuHeight

    // 기준선 넘었는지 판단
    if (x > criteriaWidth) {
      x = x - (x - criteriaWidth)
    }
    if (y > criteriaHeight) {
      y = y - (y - criteriaHeight)
    }
    if (x > criteriaWidth - plusMenuRef.current.offsetWidth) {
      plusMenuRef.current.style.left = '-100%'
    } else {
      plusMenuRef.current.style.left = '100%'
    }

    containerRef.current.style.top = `${y}px`
    containerRef.current.style.left = `${x}px`
  }

  const handleCloseCtxMenu = () => {
    setIsOpen(!isOpen)
    containerRef.current.style.visibility = 'hidden'
  }

  useEffect(() => {
    document.addEventListener('contextmenu', handleOpenCtxMenu)
    document.addEventListener('click', handleCloseCtxMenu)
  }, [])
  return (
    <div>
      <h1>Context Menu</h1>
      <Container ref={containerRef}>
        <MenuList>
          <PlusMenuList>
            <span>First</span>
            <FaAngleRight />
            <PlusMenuItem ref={plusMenuRef}>
              <MeunItem>Third</MeunItem>
              <MeunItem>Fourth</MeunItem>
            </PlusMenuItem>
          </PlusMenuList>
          <MeunItem>Second</MeunItem>
          <MeunItem>Third</MeunItem>
          <MeunItem>Fourth</MeunItem>
        </MenuList>
      </Container>
    </div>
  )
}

export default ContextMenu
