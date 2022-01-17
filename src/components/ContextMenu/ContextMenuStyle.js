import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  visibility: hidden;

  width: 20rem;
  height: 24rem;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const MenuList = styled.ul`
  width: 100%;
  padding: 1.5rem;
  list-style: none;
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MeunItem = styled.li`
  font-size: 2.4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  cursor: pointer;
  :hover {
    background-color: #d8d8d8;
  }
`
export const PlusMenuItem = styled(MenuList)`
opacity: 0;
background-color: #fff;
border-radius: 1.4rem;
position: absolute;
left: 100%;
top: 10%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const PlusMenuList = styled(MeunItem)`
  font-size: 2.4rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  span{
    font-size: 2.4rem;
  }
  :hover{
    ${PlusMenuItem}{
      opacity: 1;
      pointer-events: auto; //auto 시 event동작
    }
  }
  
`
