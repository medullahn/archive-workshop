import styled from 'styled-components';
import Modal from 'react-modal';
import {useState, useEffect} from 'react'

// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../details.json'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArtBox = ({color, artist, contents, boxtype}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([])

    const details = data[artist]
    

    const handleModal = (flag) => {
        setIsOpen(flag)
        if(flag === false){
            const window = document.getElementsByClassName('test')[0]
            window.style.background = null 
        }
    }

    const afterOpenModal = () => {
        // 배경색을 해당 박스 색으로 바꾼다
        const window = document.getElementsByClassName('test')[0]
        window.style.background = color
    }

    useEffect(()=>{
        let tempArr = []
        for(let i=1; i<=contents; i++){
            let temp = artist + i
            tempArr = [...tempArr, temp]
        }
        setItems(tempArr)
    },[artist, contents])



    return(
        <>
            <BoxContainer url={'img/'+boxtype+'.png'} onClick={()=>handleModal(true)}/>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={()=>handleModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Swiper
                    navigation={{clickable:true}}
                    pagination={{clickable:true}}
                    style={{height:'70%'}}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    loop={true}
                >
                    {items.map((element,idx)=>(
                        <SwiperSlide key={idx} style={{display:'flex', alignItems:'center', justifyContent:'center', }}>
                            <ArtworkImage url={'img/'+element+'.png'}/>
                            {/* {'img/'+element+'.png'} */}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div style={{background: color}}>
                    <div style={{width:'300px'}}>
                    <Headings>반반 아카이브</Headings>
                    </div>
                    <div>
                    <Headings>{artist}</Headings>
                    <SubHeadings>{details}</SubHeadings>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const Headings = styled.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 130%;

    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    color: #000000;

    margin-bottom:1em;
`
const SubHeadings = styled.span`
    font-size: 13px;
    line-height: 155.5%;

    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    color: #000000;
`

const ArtworkImage = styled.div`
    display: flex;
    background-image: url(${props => props.url});
    background-color:black ;

    width: 100%;
    height: 100%;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const BoxContainer = styled.div`
    @media (max-width: 800px) {
        position: static;
    }

    background-image: url(${props => props.url});
    background-size: 100% 100%;
    width: 180px;
    height: 290px;
    display: inline-block;
    position: absolute;
    box-shadow: 15px 8px 15px 0px rgb(0 0 0 / 40%);
    border-radius: 0.2rem;
    box-sizing: border-box;

    /* hover시 썸네일 */
    &:hover{  
        transform: scale(1.1);
        transition: 0.1s linear;
        z-index: 998;
    }
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'70vw',
        height:'67vh',
        borderRadius: 'none',
        border: 'none',
        padding: '0',
        background: 'none',

    // 모바일일 경우 미디어쿼리로 modal 크기 조정
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };
  

export default ArtBox