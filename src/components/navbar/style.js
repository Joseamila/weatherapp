import styled from "styled-components";
import { Container } from '@/components/generalStyles'


export const LayoutContainer = styled(Container)`
    background: #1E213A;
    height:100vh;
    width: 100%;
    flex-direction: column;
`
export const HeaderLayout = styled(Container)`
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-top: 20px;
`
export const CenterContainer = styled(Container)`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const RainTypeContainer = styled(Container)`
    width: 100%;
    justify-content: center;
`
export const FooterLayout = styled(Container)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`