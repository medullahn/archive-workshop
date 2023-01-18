import './App.css';
import Artworks from './Artworks';
import Menus from './components/Menus';
import RightMenus from './components/RightMenus';
import styled from 'styled-components';
import { getRandomInt } from './utils/randomGen';
import ReactModal from 'react-modal';

function App() {
  ReactModal.setAppElement('#root');

  return (
    <WindowContainer className='test' url={'background' + String(getRandomInt(1,4))+'.png' }>
      <Menus/>
      <RightMenus/>
      <Artworks/>
    </WindowContainer>
    
  );
}

const WindowContainer = styled.div`
display: flex;
/* background-image: url(${props => props.url}); */
width: 100vw;
height: 100vh;
/* background-attachment: fixed;
background-size: 100% 100%; */
`
export default App;

