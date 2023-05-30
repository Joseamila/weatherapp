import styled from "styled-components"

export const ParentContainer= styled.div`
    display: grid;
    grid-template-areas: "Layout Home Home";
    grid-template-columns: 1fr 1fr 1fr;
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
`
export const Layout= styled.div`
    grid-area: Layout;
`
export const Home= styled.div`
    grid-area: Home;
`