import styled, { ThemeProps } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 32px;
    background-color: ${props => props.theme.colors};
`
