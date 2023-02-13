import './App.css';
import Artworks from './Artworks';
import Menus from './components/Menus';
import styled from 'styled-components';
import ReactModal from 'react-modal';

function App() {
  ReactModal.setAppElement('#root');

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <Main className='Background'>
      <MainContainer>
        <Menus/>
      </MainContainer>
      <Artworks/>
      <Hover>
      <Vp className='Vp' onClick={refreshPage}><p style={{display: 'flex',alignItems: 'center'}}>소실점</p></Vp>
        {/* <VpHover className='Vphover'>
          <Hovertext style={{left:'5%', top:'14%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'7%', top:'28%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'7%', top:'87%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'20%', top:'96%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'93%', top:'93%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'87%', top:'63%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'95%', top:'21%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'83%', top:'9%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'76%', top:'97%', scale:'0.9'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'15%', top:'68%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'64%', top:'85%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'37%', top:'87%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'36%', top:'18%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'68%', top:'21%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'52%', top:'12%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'22%', top:'25%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'76%', top:'74%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'81%', top:'26%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'22%', top:'74%', scale:'0.8'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'23%', top:'38%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'64%', top:'68%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'49%', top:'75%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'33%', top:'68%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'28%', top:'52%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'68%', top:'45%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'68%', top:'45%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'64%', top:'34%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'35%', top:'32%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'47%', top:'27%', scale:'0.7'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'54%', top:'60%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'43%', top:'62%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'40%', top:'42%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'38%', top:'50%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'58%', top:'48%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'57%', top:'40%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'49%', top:'39%', scale:'0.6'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'47%', top:'56%', scale:'0.4'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'53%', top:'52%', scale:'0.4'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'52%', top:'46%', scale:'0.4'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
          <Hovertext style={{left:'43%', top:'47%', scale:'0.4'}}><p style={{margin:'0'}}>아카이브!</p></Hovertext>
        </VpHover> */}
      </Hover>
      <LeftText>
        <p className='Maintext' style={{alignSelf:'start'}}>관심사</p>
        <p className='Maintext' style={{alignSelf:'center'}}>물리적 아카이브</p>
        <p className='Maintext' style={{alignSelf:'center'}}>개별품목</p>
        <p className='Maintext' style={{alignSelf:'start'}}>배경과 역사</p>
        <p className='Maintext' style={{alignSelf:'center'}}>근거와 이유</p>
        <p className='Maintext' style={{alignSelf:'start'}}>귀결</p>
      </LeftText>
      <RightText>
        <p className='Maintext' style={{alignSelf:'center'}}>타이포그래피</p>
        <p className='Maintext' style={{alignSelf:'end'}}>개별 활자의 조합</p>
        <p className='Maintext' style={{alignSelf:'end'}}>수단</p>
        <p className='Maintext' style={{alignSelf:'end'}}>단어, 문장, 문단, 글</p>
        <p className='Maintext' style={{alignSelf:'end'}}>확장</p>
      </RightText>
      <BottomText>
      <p className='Footer' style={{alignSelf:'center'}}>소모임 여름 워크숍</p>
      <p className='Footer' style={{alignSelf:'center'}}>아카이빙 웹사이트</p>
      </BottomText>
    </Main>
  );
}

const Vp = styled.div`
`
const Hover = styled.div`
`

// const Hovertext = styled.div`
// justify-content: center;
// display: flex;
// padding: 0rem 0.3rem 0rem 0.3rem;
// margin: 0;
// position: fixed;
// top:50%;
// left:50%;
// border: none;
// background: white;
// box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
// color: black;
// font-family: SM3 TGothic;
// font-size: 1.3rem;
// line-height: 1.1;
// word-break: keep-all;
// z-index: 997;
// transform: translate(-50%, -50%);
// `


const Main = styled.div`
background: #101010;
transition: 1s;
width: 100%;
min-height: 100vh;
overflow-x: hidden;
overflow-y: hidden;
`

// const VpHover = styled.div`
// `

const MainContainer = styled.div`
`

const LeftText = styled.div`
position: fixed;
display: flex;
flex-direction: column;
width: 20%;
left: 0;
top: 43%;
`

const RightText = styled.div`
position: fixed;
display: flex;
flex-direction: column;
width: 20%;
left: 100%;
top: 43%;
transform:translateX(-100%);
`

const BottomText = styled.div`
position: fixed;
display: flex;
flex-direction: column;
left: 50%;
top: 100%;
transform:translate(-50%, -100%);
`

export default App;

