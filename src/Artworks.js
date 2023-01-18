import React, { useRef, useEffect } from 'react';
import ArtBox from './components/ArtBox';
import {blue, yellow, gray} from './constants/colors'
import { getRandomInt } from './utils/randomGen';
import {getDisplayInfo} from './utils/getResolution'

const Artworks = () => {
    // 랜덤으로 들어갈 상자의 컨테이너를 접근하기 위해 선언
    const ArtBoxContainer = useRef(null);

    // 사람 명수 만큼 artbox 생성을 위한 배열
    const participants = ['안연수','테스트']
    const contents = [15, 2]
    const boxcolor = [blue, yellow, gray]

    // ArtBoxContainer 내부에서 랜덤으로 위치를 부여하는 함수
    useEffect(()=>{
        let idx = -1
        const colorPalette = [blue, yellow, gray]
        // 랜덤으로 부여될 컨테이너의 길이와 높이를 가져옴
        const {width, height} = getDisplayInfo(ArtBoxContainer.current)

        // 각 상자의 길이와 높이를 뺀 위치를 랜덤으로 설정하여 xy에 배당
        for (const child of ArtBoxContainer.current.children) {
            let x = getRandomInt(200, width - 100) + "px"
            let y = getRandomInt(0, height - 100) + "px"

            // 위의 설정한 xy을 값을 css styling으로 top/left에 배당
            child.style.top = y
            child.style.left = x
 
            idx = (idx + 1) % 3

            child.style.backgroundColor = colorPalette[idx]
        }
    },[])

    return(
        <div style={{width:'100%', height:'100%'}} ref={ArtBoxContainer}>
            {
                participants.map((element,index)=>(
                    <ArtBox color={boxcolor[index]} artist={element} contents={contents[index]} key={index}/>
                ))
            }
            
        </div>
    )
}

export default Artworks;