import styled from 'styled-components';
import Modal from 'react-modal';
import {useState, useEffect} from 'react'

// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../details.json'
import title from '../title.json'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArtBox = ({color, artist, contents, boxtype}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([])
    const titles = title[artist]
    const details = data[artist]
    
    const [video,setVideo] = useState(null)
    

    const handleModal = (flag) => {
        setIsOpen(flag)
        if(flag === false){
            const back = document.getElementsByClassName('Background')[0]
            back.style.background = null 

            const scrollY = document.body.style.top
            document.body.style.position = ''
            document.body.style.top = ''
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }

    const afterOpenModal = () => {
        // 배경색을 해당 박스 색으로 바꾼다
        
        const back = document.getElementsByClassName('Background')[0]
        back.style.background = color

        document.body.style.top = `-${window.scrollY}px`
        document.body.style.position = 'fixed'

    }
     
    useEffect(()=>{
        let tempArr = []
        for(let i=1; i<=contents; i++){
            let temp = artist + i
            tempArr = [...tempArr, temp]
        }
        setItems(tempArr)
    },[artist, contents])

    useEffect(()=>{
        if(artist === '안연수' || artist === '김세희' || artist === '김경수'){
            // 비디오명이 안연수.mp4 일 경우
            let videoName = artist
            setVideo(videoName)
        }
    },[artist])

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width:'95%',
            maxWidth: '1142px',
            height:'90%',
            borderRadius: '4px',
            border: 'none',
            padding: '0',
            background: color,
            zIndex: '999',
            boxShadow: '15px 8px 15px 0px rgb(0 0 0 / 40%)'
        },
    
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: '999'
        }
      }



    return(
        <>
            <BoxContainer url={'img/'+boxtype+'.png'} onClick={()=>handleModal(true)} hoverimg={'img/'+items[0]+'.png'}/>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={()=>handleModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
                id="modal"
                // className="Modal"
                // overlayClassName="Overlay"

            >
            <div style={{background:'black', width: '100%',zIndex:'1',height:'400px', position: 'absolute', top: '-100px'}}>
            </div>
            <div style={{background:'none', display:'flex', width: '100%', justifyContent: 'end', position: 'sticky', zIndex:'999', top: '0.7rem'}}>
                <button className='closebutton' onClick={()=>handleModal(false)}>
                    Close!
                </button>
            </div>
                <Swiper
                    navigation={{clickable:true}}
                    pagination={{clickable:true}}
                    style={{height:'75%', backgroundColor: 'black'}}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    loop={true}
                >
                    {items.map((element,idx)=>(
                        <SwiperSlide key={idx} style={{alignItems:'center', justifyContent:'center'}}>
                            <ArtworkImage url={'img/'+element+'.png'}>
                            </ArtworkImage>
                        </SwiperSlide>
                    ))}
                    {video &&
                    <SwiperSlide style={{alignItems:'center', justifyContent:'center'}}>
                            <video controls preload="none" autoPlay muted loop playsInline width="100%" height="100%">
                                <source src={'img/'+video+'.mp4'} type={'video/mp4'}/>
                            </video>
                    </SwiperSlide>
                    }
                </Swiper>
                <Content style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex'}}>
                    <Headings>{titles}</Headings>
                    </div       >
                    <div style={{display: 'flex'}}>
                    <Names>{artist}</Names>
                    <SubHeadings>{details}</SubHeadings>
                    </div>
                </Content>
            </Modal>
        </>
    )
}

const Content = styled.span`
    padding: 1.2rem;
`

const Headings = styled.span`
    font-family: SM3 TGothic, SuisseIntl;
    font-size: 0.9rem;
    line-height: 1.1;
    display: flex;
    color: #000000;
    margin-bottom:1em;
`

const Names = styled.span`
    width: 50rem;
    padding-right: 15px;
    font-family: SM3 TGothic, SuisseIntl;
    font-size: 0.9rem;
    line-height: 1.6;
    display: flex;
    color: #000000;
    margin-bottom:1em;
    letter-spacing: 0.03em;


    @media (max-width: 800px) {
        width: 20%;
        font-size: 0.8rem;
    }
`


const SubHeadings = styled.span`
    font-family: SM3 TGothic, SuisseIntl;
    font-size: 0.9rem;
    line-height: 1.6;
    word-break: keep-all;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: #000000;
    white-space: pre-wrap;

    @media (max-width: 800px) {
        font-size: 0.8rem;
        width: 80%;
    }
`

const ArtworkImage = styled.div`
    display: flex;
    background-image: url(${props => props.url});
    background-color: black;

    height: 100%;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const BoxContainer = styled.div`
    @media (max-width: 800px) {
        position: static;
        margin: 1.5px 1.5px 1.5px 1.5px;
        width: 120px;
        height: 190px;
    }

    background-image: url(${props => props.url});
    background-size: 100% 100%;
    width: 180px;
    height: 283px;
    display: inline-block;
    position: absolute;
    box-shadow: 15px 8px 15px 0px rgb(0 0 0 / 40%);
    border-radius: 0.2rem;
    box-sizing: border-box;
    cursor: grab;

    /* hover시 썸네일 */
    &:hover{  
        background-color: black;
        background-image: url(${props => props.hoverimg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        z-index: 3;
    }
`

  

export default ArtBox