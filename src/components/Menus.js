import styled from 'styled-components'
import {useRef} from 'react'
import './Menus.css';

const Menus = () => {

    const Accordion = useRef(null)
    const Accordion1 = useRef(null)
    const Accordion2 = useRef(null)

    const onclickAccordion = (number) => {
        let target = null;
        let other1 = null;
        let other2 = null;

        switch (number) {
            case 1:
                target = Accordion.current;
                other1 = Accordion1.current;
                other2 = Accordion2.current;
                break;

            case 2:
                other1 = Accordion.current;
                target = Accordion1.current;
                other2 = Accordion2.current;
                break;
            
            case 3:
                other1 = Accordion.current;
                other2 = Accordion1.current;
                target = Accordion2.current;
                break;

            default: // Do nothing
        }

        
        if(target.style.maxHeight){
            // 접을 때, 누른 애만 접히면 됨
            target.style.maxHeight = null;
            setTimeout(()=>{target.style.border = '0px'}, 400);
            }

            // 열려 있던 border 원상복구
        else{
            // 펼칠 때, 이미 열려 있는 애가 있다면 걔를 접어줘야 함
            target.style.maxHeight = target.scrollHeight + "px";
            other1.style.maxHeight = null;
            other2.style.maxHeight = null;
            target.style.border = '1px solid white'
            setTimeout(()=>{other1.style.border = '0px'}, 400);
            setTimeout(()=>{other2.style.border = '0px'}, 400);
            // 펼친 element의 border 위를 제외하고 세 군데 생성
            // 펼친 pannel의 pannel border 아래를 생성

    }
}

    return(
        <MenuContainer>
            <Title>
                <KrTitle style={{width: '25%'}}>
                    <p className='MenuButton' style={{alignSelf:'start'}}>아카이브!</p>
                    <p className='MenuButton' style={{alignSelf:'center'}}>아카이브!</p>
                    <p className='MenuButton' style={{alignSelf:'start'}}>아카이브!</p>
                </KrTitle>
                <EnTitle style={{width: '25%'}}>
                    <p className='MenuButtonEn' style={{alignSelf:'start'}}>Archive!</p>
                    <p className='MenuButtonEn' style={{alignSelf:'center'}}>Archive!</p>
                    <p className='MenuButtonEn' style={{alignSelf:'start'}}>Archive!</p>
                </EnTitle>
                <KrTitle style={{width: '50%'}}>
                    <p className='MenuButton' style={{alignSelf:'start'}}>: 자신만의</p>
                    <p className='MenuButton' style={{alignSelf:'center'}}>시각적 어휘를</p>
                    <p className='MenuButton' style={{alignSelf:'end'}}>기르기 위한 기초 작업</p>
                </KrTitle>
            </Title>
            <Menu> 
            <ProjectSummary>
                <MenuPannel onClick={(e)=>onclickAccordion(1)}>
                    <p className='Caption'>프로젝트 개요</p>
                </MenuPannel>
                <MenuAccordion ref={Accordion} className='menuaccordion'>
                    <p className='text'>아카이브! 아카이브! 아카이브!<br></br>: 자신만의 시각적 어휘를 기르기 위한 기초 작업</p>
                    <p className='text'>창작자 혹은 디자이너와 그를 둘러싼 주변부를 살펴보면 흥미로운 부분이 눈에 띈다. 자신이 하는 일과 관심사로 물리적으로 구축된 그 작은 세계 아카이브는 창작행위에 필요한 각종 재료와 도구 그리고 이를 이용해 만들어진 창작물이 혼합된 결과다. 양태는 제각각 다르지만, 주로 각종 물건을 자신만의 규칙에 의거해 손이 잘 닿는 위치에 저장해두었다가 시시때때로 창작활동에 소환되거나 영감을 주기도 한다.<br></br>&nbsp;&nbsp;&nbsp;이번 워크숍에서는 라면 박스 정도의 크기의 상자에 자신의 관심사에 기반한 물리적 아카이브를 처음으로 구축해 보는 워크숍을 진행한다. 물론 단순히 물건을 모으는 것만으로는 아카이브라는 행위가 성립되지 않는다. 개별 품목들의 배경과 역사 그리고 자신만의 관점으로 그 물건을 선택한 명확한 근거와 이유가 있어야 하며, 모인 물건들 전체가 한 가지의 소실점으로 귀결되어야 한다. 부연하자면, 한 가지의 관점을 물리적으로 구현하는 목록으로서 물건들의 집합이어야 하는 것이다. 타이포그래피 역시 문자로 소통하고자 하는 인간의 욕망을 구현해 주기 위한 수단으로서 개별 활자의 조합으로 단어, 문장, 문단, 글로 확장될 수 있듯이, 아카이브라는 행위는 자신만의 시각적 세계를 완성시키기 위한 기초 작업이라면 비약일까?</p>
                    <p className='text'>워크숍 기획 및 진행: 신신(Shin-Shin)<br></br>소모임장: 김세희, 안연수<br></br>웹사이트 개발 및 디자인: 안연수<br></br>개발 도움: 김현재</p>
                </MenuAccordion>
            </ProjectSummary>
            <Person>
                <MenuPannel onClick={(e)=>onclickAccordion(2)}>
                    <p className='Person'>참여자</p>
                </MenuPannel>
                <MenuAccordion ref={Accordion1} className='menuaccordion'>
                    <p className='text' style={{display:'block', textAlign:'center'}}>김경수 김경준 김나현 김예진 김유진 김준호 도현서 박서현 양찬주 양희수 윤지수 이정빈 정승훈 정지민 이하림 채지민 한유진 이가영 안연수 김세희</p>     
                </MenuAccordion>
            </Person>
            <Somoim>
                <MenuPannel className='somoim' onClick={(e)=>onclickAccordion(3)}>
                    <p className='Konkuk'>건국대학교</p>
                    <p className='Typo'>타이포그래피</p>
                    <p className='Somoim'>소모임</p>
                </MenuPannel>
                <MenuAccordion ref={Accordion2} className='menuaccordion'>
                    <p className='text'>건국대학교 예술디자인대학 커뮤니케이션디자인학과의 타이포그래피 소모임입니다. 구성원들 각자의 시각으로 타이포그래피와 그래픽디자인을 해석하며 여러가지 재밌는 작업을 하고 있습니다.</p>
                    <p className='text'>@somoim_kucd</p>
                </MenuAccordion>
            </Somoim>
            </Menu>
        </MenuContainer>
    )
}

// const Project = styled.div`
//     box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
//     border-radius: 5px;

//     &:hover{
//         cursor: grab;
//         background: white;
//         color:black;
//         z-index: 999;
//     }

// `
const MenuContainer = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: 800px) {
    flex-direction: column;
    }
`

const Title = styled.div`
    display: flex;
    width: 35%;
    &:hover{
        z-index: 999;
    }
@media (max-width: 1280px) {
width: 45%;
}
@media (max-width: 800px) {
width: 100%;
padding-bottom: 3rem;
}
`

const Menu = styled.div`
    display: flex;
    width: 65%;
    @media (max-width: 1280px) {
    width: 55%;
    @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    }
}
`

const ProjectSummary = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
    width: 100%;
    }
`

const Person = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
    width: 100%;
    }
`
const Somoim = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
    width: 100%;
    }
`

const KrTitle = styled.div`
    display: flex;
    flex-direction: column;
`
const EnTitle = styled.div`
    display: flex;
    flex-direction: column;
`

const MenuPannel = styled.div`
    display: flex;
    flex-direction: column;
&:hover{
        font-size: 3.5vh;
    }

`

const MenuAccordion = styled.div`
    z-index: 998;
    @media (max-width: 1280px) {
    font-size: 0.8rem;
    }

`




export default Menus