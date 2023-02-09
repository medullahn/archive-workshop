import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import ArtBox from './components/ArtBox';
import {blue, yellow, gray} from './constants/colors'
import { getRandomInt } from './utils/randomGen';
import {getDisplayInfo} from './utils/getResolution'
import useWindowDimensions from './utils/getWindowSize'

const Artworks = () => {
    // 랜덤으로 들어갈 상자의 컨테이너를 접근하기 위해 선언
    const ArtBoxContainer = useRef(null);


    // 사람 명수 만큼 artbox 생성을 위한 배열
    const participants = ['윤지수','박서현','양찬주','이하림','김세희','정승훈','이가영','김경수','양희수','안연수','이정빈','김예진','김준호','김유진','김나현','김경준','한유진','정지민','채지민','도현서']
    const contents = [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
    const boxcolor = [blue, yellow, gray, yellow, gray, blue, gray, yellow, blue, blue, gray, yellow, blue, yellow, gray, yellow, blue, gray, gray, blue] 
    const boxtype = ['box_blue', 'box_yellow', 'box_grey', 'box_yellow', 'box_grey', 'box_blue', 'box_grey', 'box_yellow', 'box_blue', 'box_blue', 'box_grey', 'box_yellow','box_blue', 'box_yellow', 'box_grey', 'box_yellow', 'box_blue', 'box_grey', 'box_grey', 'box_blue']
    const { height, width } = useWindowDimensions();
    
    
    // ArtBoxContainer 내부에서 랜덤으로 위치를 부여하는 함수
    useEffect(()=>{
        let idx = -1
        // 랜덤으로 부여될 컨테이너의 길이와 높이를 가져옴
        const {width, height} = getDisplayInfo(ArtBoxContainer.current)

        // 각 상자의 길이와 높이를 뺀 위치를 랜덤으로 설정하여 xy에 배당

        if(width < 600){
            
        }else{
            for (const child of ArtBoxContainer.current.children) {
                let x = getRandomInt(0, width - 200) + "px"
                let y = getRandomInt(20, height - 300) + "px"

                // 위의 설정한 xy을 값을 css styling으로 top/left에 배당
                child.style.top = y
                child.style.left = x
    
                idx = (idx + 1) % 3

            }
    }
    },[height, width])

    return(
        
        <Artwork ref={ArtBoxContainer}>
            {
                participants.map((element,index)=>(
                    <ArtBox color={boxcolor[index]} artist={element} contents={contents[index]} key={index} boxtype={boxtype[index]}/>

                ))
            }
            
        </Artwork>
        
    )
}

const Artwork = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top:20px
`


export default Artworks;