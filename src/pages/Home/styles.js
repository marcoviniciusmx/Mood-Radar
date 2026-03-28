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
width: 80%;
`

export const Cards = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
`

export const Parameters = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
max-width: 100%;
gap: 20px;

& h2 {
    margin-right: 300px;
    color: #5C605A;

}

& span {
    color: gray;
}
`

export const Choices = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 20px;
`

export const Button = styled.button`
width: 120px;
padding: 10px;
border-radius: 30px;
border: none;
outline: none;
color: #71593C;
background-color: #c8ffd49d;
font-weight: bold;
cursor: pointer;
transition: transform 0.25s ease-in-out;

&:hover {
    transform: scale(1.08);
}

&.active {
    background-color: #6dacff;
}
`

export const ClimateButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 450px;
margin: 50px 0 20px 0;
padding: 10px;
border-radius: 30px;
border: none;
color: var(--color-neutral);
font-weight: 700;
background-color: #2A667E;
cursor: pointer;
transition: background-color 0.25s ease-in-out;

&:hover {
  background-color: #1f4c5e;
}
`

export const ResetButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
width: 450px;
padding: 10px;
border-radius: 30px;
border: none;
cursor: pointer;
transition: background-color 0.25s ease-in-out;

&:hover {
    background-color: #ebe270;
}
`

export const CurrentWeather = styled.section`
display: flex;
flex-direction: column;
margin: 80px 0;
justify-content: center;
align-items: flex-start;
width: 40%;
`

export const Current = styled.p`
margin-bottom: 12px;
font-size: .8rem;
color: #9c9c9c;
font-weight: 500;
`

export const Diagnosis = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 15px;

& h3 {
background-color: #2A667E;
color: #A9E2FF;
padding: 10px 15px;
border-radius: 10px;
font-size: 1.5rem;
}

& span {
    color: #2A667E;
    font-size: 2.1rem;
}

`

export const Description = styled.p`
font-size: .9rem;
width: 98%;
margin-bottom: 40px;
color: #7e7e7e;
font-weight: 500;
`

export const Sugestion = styled.div`
display: flex;
gap: 12px;
justify-content: center;
align-items: center;

& span {
    color: #b17c21;
    font-weight: 500;
}

& p {
    color: #b17c21;
    font-size: .9rem;
    font-weight: 500;
}
`