import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  color: white;
  height: ${({ height }) => height}px;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ AlignItems }) => AlignItems};
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "none")};
  margin: ${({ margin }) => margin}px;
  padding: ${({ padding }) => padding}px;
`;
export const EmptyContainer = styled.div``;

export const Titles = styled.h1`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  margin-right: ${({ marginRight }) => marginRight}px;
`;
export const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;
export const InnerContainer = styled.div`
  padding: 0 20px;
  width: 100%;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  border: 1px solid transparent;
  align-items: center;
  color: white;
  font-size: 16px;
  margin: 0 5px;

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  background: none;
  border: 1px solid #616475;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  align-items: center;
  padding: 10px;
  margin: 0 5px;
`;
