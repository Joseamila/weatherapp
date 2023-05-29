import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    color: white;
    height: ${({height}) => height}px;
    justify-content: ${({justifyContent}) => justifyContent};
    align-items: ${({AlignItems}) =>AlignItems};
    flex-direction: ${({isColumn}) => isColumn ? "column" : "none"};
    margin: ${({margin}) => margin}px;
    padding: ${({padding}) => padding}px;
`
export const EmptyContainer = styled.div``

export const Titles = styled.h1`
    font-weight: ${({weight}) => weight};
    font-size: ${({size}) => size}px;
    color: ${({color}) => color};
    margin-right: ${({marginRight}) => marginRight}px;
`
export const Text = styled.p`
    color:${({color}) => color};
    font-size:${({size}) => size}px;
`
export const InnerContainer = styled.div`
    padding: 0 20px;
`