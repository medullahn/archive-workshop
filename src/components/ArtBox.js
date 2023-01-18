import styled from 'styled-components';
import Modal from 'react-modal';
import {useState, useEffect} from 'react'

// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArtBox = ({color, artist, contents}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([])

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
            <BoxContainer onClick={()=>handleModal(true)}/>
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
                        <SwiperSlide key={idx} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <ArtworkImage url={'img/'+element+'.png'}/>
                            {/* {'img/'+element+'.png'} */}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div style={{width:'100%', height:'30%', background:color}}>
                    
                </div>
            </Modal>
        </>
    )
}
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
    position: absolute;
    display: inline-block;
    width: 200px;
    height: 100px;
    box-shadow: 15px 0px 15px 0px rgb(0 0 0 / 28%);
    border-radius: 0.2rem;

    /* hover시 썸네일 */
    &:hover{  
        color : red;
    }
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        width:'70vw',
        height:'67vh'

    // 모바일일 경우 미디어쿼리로 modal 크기 조정

    },
  };
  

export default ArtBox