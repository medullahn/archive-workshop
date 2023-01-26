import React, { useRef, useEffect } from 'react';
import ArtBox from './components/ArtBox';
import {blue, yellow, gray} from './constants/colors'
import { getRandomInt } from './utils/randomGen';
import {getDisplayInfo} from './utils/getResolution'
import useWindowDimensions from './utils/getWindowSize'

const Artworks = () => {
    // 랜덤으로 들어갈 상자의 컨테이너를 접근하기 위해 선언
    const ArtBoxContainer = useRef(null);


    // 사람 명수 만큼 artbox 생성을 위한 배열
    const participants = ['안연수','테스트','1','2','3','4','5','6','7','8','9','10','11','12','13']
    const contents = [15, 2]
    const boxcolor = [blue, yellow, gray] 
    const boxtype = ['box_blue', 'box_yellow', 'box_grey', 'box_blue', 'box_yellow', 'box_grey', 'box_blue', 'box_yellow', 'box_grey', 'box_blue', 'box_yellow', 'box_grey','box_blue', 'box_yellow', 'box_grey']
    const { height, width } = useWindowDimensions();
    
    
    // ArtBoxContainer 내부에서 랜덤으로 위치를 부여하는 함수
    useEffect(()=>{
        let idx = -1
        const colorPalette = [blue, yellow, gray]
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

                child.style.backgroundColor = colorPalette[idx]
            }
    }
    },[height, width])

    return(
        
        <div style={{width:'100%'}} ref={ArtBoxContainer}>
            {
                participants.map((element,index)=>(
                    <ArtBox color={boxcolor[index]} artist={element} contents={contents[index]} key={index} boxtype={boxtype[index]}/>

                ))
            }
            
        </div>
        
    )
}

export default Artworks;