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
            <MenuButton style={{alignSelf:'start'}}>아카이브!</MenuButton>
            <MenuButton style={{alignSelf:'center'}}>아카이브!</MenuButton>
            <MenuButton style={{alignSelf:'end'}}>아카이브!</MenuButton>
            <MenuPannelSmall>자신만의 시각적 어휘를 기르기 위한 기초 작업</MenuPannelSmall>

            <MenuPannel onClick={(e)=>onclickAccordion(1, e)} className='menupannel'>프로젝트 개요</MenuPannel>
            <MenuAccordion ref={Accordion1} className='menuaccordion'>
                <p className='text'>창작자 혹은 디자이너와 그를 둘러싼 주변부를 살펴보면 흥미로운 부분이 눈에 띈다. 자신이 하는 일과 관심사로 물리적으로 구축된 그 작은 세계(아카이브)는 창작행위에 필요한 각종 재료와 도구 그리고 이를 이용해 만들어진 창작물이 혼합된 결과다. 양태는 제각각 다르지만, 주로 각종 물건을 자신만의 규칙에 의거해 손이 잘 닿는 위치에 저장해두었다가 시시때때로 창작활동에 소환되거나 영감을 주기도 한다. 이번 워크숍에서는 라면 박스 정도의 크기의 상자에 자신의 관심사에 기반한 물리적 아카이브를 처음으로 구축해 보는 워크숍을 진행한다. 물론 단순히 물건을 모으는 것만으로는 아카이브라는 행위가 성립되지 않는다. 개별 품목들의 배경과 역사 그리고 자신만의 관점으로 그 물건을 선택한 명확한 근거와 이유가 있어야 하며, 모인 물건들 전체가 한 가지의 소실점으로 귀결되어야 한다. 부연하자면, 한 가지의 관점을 물리적으로 구현하는 목록으로서 물건들의 집합이어야 하는 것이다. 타이포그래피 역시 문자로 소통하고자 하는 인간의 욕망을 구현해 주기 위한 수단으로서 개별 활자의 조합으로 단어, 문장, 문단, 글로 확장될 수 있듯이, 아카이브라는 행위는 자신만의 시각적 세계를 완성시키기 위한 기초 작업이라면 비약일까?</p>
                <p className='text'>워크숍 기획 및 진행: 신신<br></br>소모임장: 안연수, 김세희<br></br>웹 개발: 안연수, 현재</p>
            </MenuAccordion>
            <MenuPannel onClick={(e)=>onclickAccordion(2, e)} style={{marginTop:'10px'}} className='menupannel'>참여자</MenuPannel>
            <MenuAccordion ref={Accordion2} className='menuaccordion'>                
                <p className='text2'>김경수<br></br>김경준<br></br>김나현<br></br>김예진<br></br>김유진<br></br>김준호<br></br>도현서<br></br>박서현<br></br>양찬주<br></br>양희수<br></br>윤지수<br></br>이정빈<br></br>정승훈<br></br>정지민<br></br>이하림<br></br>채지민<br></br>한유진<br></br>이가영<br></br>안연수<br></br>김세희</p>
            </MenuAccordion>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    padding: 15px;

    /* 미디어쿼리 넣을 예정 */
`
const MenuButton = styled.button`
    // inner item
    display: flex;
    justify-content: center;
    align-items: center;

    // box
    border: none;
    background: black;
    padding: 0.7rem 0.9rem 0.7rem 0.9rem;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.8);

    // font
    color: white;
    font-family: SM3 TGothic;
    font-weight: 400;
    /* font-size: 30px; */
    font-size: 3vh;
    line-height: 1.5;
    word-break: keep-all;

    &:hover{
        background: white;
        color:black;
    }
`
const MenuPannel = styled.div`

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