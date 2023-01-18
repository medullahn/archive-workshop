import styled from 'styled-components'

const RightMenus = () => {
    return(
        <MenuContainer>
            건국대학교 타이포그래피 소모임
        </MenuContainer>
    )
}
const MenuContainer = styled.div`
    position: fixed;
    top: 8px;
    right: 16px;
    background: cyan;
    opacity: 0.8;
    
    width: 67%;

    /* 미디어쿼리 넣을 예정 */
`
export default RightMenus