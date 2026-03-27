import styled from "styled-components";

export const Wrapper = styled.div`
min-height: 100vh;
min-width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const MainTexts = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin: 10px 0 20px 0;

& h1 {
    font-size: 2.5rem;
    color: #1F2A28;
}
`

export const Subtitle = styled.p`
font-size: 1.2rem;
color: #818048;
`

export const Main = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50%;
`

export const Cards = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;

& div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 90%;
}
`

export const Parameters = styled.div`
display: flex;
padding: 30px;
max-width: 100%;

& h2 {
    margin-right: 300px;
    color: var(--color-tertiary);

}

& span {
    color: gray;
}
`

export const Button = styled.button`
width: 15%;
padding: 10px;
border-radius: 30px;
border: none;
outline: none;
color: var(--color-tertiary);
background-color: var(--color-secondary);

`

export const ClimateButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 65%;
margin: 50px 0 20px 0;
padding: 10px;
border-radius: 30px;
border: none;
color: var(--color-neutral);
background-color: var(--color-primary);
`

export const ResetButton = styled.button``

export const CurrentWeather = styled.section``

export const Sugestion = styled.div``