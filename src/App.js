import './App.css';
import Artworks from './Artworks';
import Menus from './components/Menus';
import styled from 'styled-components';
import { getRandomInt } from './utils/randomGen';
import ReactModal from 'react-modal';

function App() {
  ReactModal.setAppElement('#root');

  return (
    <Main className='test' url={'img/background'+ String(getRandomInt(1,4))+'.png'}>
      <MainContainer>
        <Menus/>
      </MainContainer>
      <Artworks/>
    </Main>
  );
}

const Main = styled.div`
/* background: url(${props => props.url}) no-repeat center fixed; */
background: #1A1A1A;
transition: 1s;
background-attachment: fixed;
background-size: cover;
display: block;
height: 100vh;
`

const MainContainer = styled.div`
display: block;
`

export default App;

