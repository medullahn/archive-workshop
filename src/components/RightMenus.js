import styled from 'styled-components'
import { useRef } from 'react'
import './Menus.css';

const Menus = () => {
    const Accordion1 = useRef(null)
    const Accordion2 = useRef(null)

    const onclickAccordion = (flag, e) => {
        // 바로 밑의 div의 heigth를 바꾼다.
        const target = (flag===1 ? Accordion1.current : Accordion2.current);
        const sibling = (flag===1 ? Accordion2.current : Accordion1.current);  
                if(target.style.maxHeight){
                // 접을 때, 누른 애만 접히면 됨
                target.style.maxHeight = null;

                // 열려 있던 border 원상복구
            }else{
                // 펼칠 때, 이미 열려 있는 애가 있다면 걔를 접어줘야 함
                target.style.maxHeight = target.scrollHeight + "px";
                sibling.style.maxHeight = null;

                // 펼친 element의 border 위를 제외하고 세 군데 생성
                // 펼친 pannel의 pannel border 아래를 생성
                target.style.border = '1px solid white'
                target.style.borderWidth = '0px 1px 1px 1px'



            }
    }

    return(
        <MenuContainer>
            <MenuPannelSmall onClick={(e)=>onclickAccordion(1, e)} className='menupannel'>건국대학교 타이포그래피 소모임</MenuPannelSmall>
            <MenuAccordion ref={Accordion1} className='menuaccordion'>
                <p className='text'>가나다라마바사</p>
                <p className='text'>워크숍 기획 및 진행: 신신<br></br>소모임장: 안연수, 김세희<br></br>웹 개발: 안연수, 현재</p>
            </MenuAccordion>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    padding: 15px 15px 15px 0px;

    /* 미디어쿼리 넣을 예정 */
`

const MenuPannelSmall = styled.div`
    // inner item
    display: flex;
    justify-content: center;
    align-items: center;

    // box
    border: none;
    background: black;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    text-align: center;

    // font
    color: white;
    font-family: SM3 TGothic;
    /* font-size: 30px; */
    font-size: 1.6vh;
    line-height: 1.5;
    letter-spacing: 0.03em;
    text-align: center;
    word-break: keep-all;
`

const MenuAccordion = styled.div`

`



export default Menus