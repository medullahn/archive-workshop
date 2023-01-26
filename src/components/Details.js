import styled from 'styled-components';
import data from '../details.json'

const Details = ({artist}) => {
    const details = data[artist]
    return(
        <Container>
            <div style={{width:'300px'}}>
                <Headings>반반 아카이브</Headings>
            </div>
            <div>
                <Headings>{artist}</Headings>
                <SubHeadings>{details}</SubHeadings>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 30%;
`
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
export default Details