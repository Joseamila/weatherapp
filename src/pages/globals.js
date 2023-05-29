import styled from "styled-components"

export const ParentContainer= styled.div`
    display: grid;
    grid-template-areas: "Layout Layout Home";
    font-family: 'Raleway', sans-serif;
`
export const Layout= styled.div`
    grid-area: Layout;
`
export const Home= styled.div`
    grid-area: Home;
`