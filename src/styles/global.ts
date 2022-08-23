import styled, { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus-visible {
        outline: -webkit-focus-ring-color auto 0;
    }

    a{
        text-decoration: unset;
    }
    
    html { 
        scroll-behavior: auto !important;
    }

    body{
        background-color: #121212;

        font-family: Outfit, sans-serif;

        overflow-x: hidden;
    }

    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
        transition: 0.2s;
    }
    ::-webkit-scrollbar-thumb {
        background: #971915;
        border: 0px none #000000;
        border-radius: 0px;
        transition: 0.2s;
    }
    ::-webkit-scrollbar-track {
        background: #000000;
        border: 0px none #ffffff;
        border-radius: 0px;
        transition: 0.2s;
    }
    ::selection {
        color: #ffffff;
        background: #971915;
    }

    .border-radius-8px{
        border-radius: 8px;
    }

    .react-horizontal-scrolling-menu--scroll-container{
        overflow-x: hidden;
    }

    .margin-64px{
        margin: 64px 0;
    }

    .margin-left-12px{
        margin-left: 12px;
    }

    .margin-top-12px{
        margin-top: 12px;
    }
    .margin-top-12px{
        margin-top: 12px;
    }
    .margin-top-16px{
        margin-top: 16px;
    }
    .margin-top-24px{
        margin-top: 24px;
    }
    .margin-top-42px{
        margin-top: 42px;
    }
    .margin-top-64px{
        margin-top: 64px;
    }

    .padding-0{
        padding: 0;
    }

    &.hyundai{
        aspect-ratio: 1.9491323983836463037794152602805;
    }
    &.chevrolet{
        aspect-ratio: 3.6558181007579135086937137761926;
    }
    &.mitsubishi{
        aspect-ratio: 1.159420289855072463768115942029;
    }
    &.honda{
        aspect-ratio: 1.2305325898865602768698327244761;
    }
    &.renault{
        aspect-ratio: 0.76172413793103448275862068965517;
    }
    &.fiat{
        aspect-ratio: 1.6249153689911983750846310088016;
    }
    &.ford{
        aspect-ratio: 2.6666666666666666666666666666667;
    }
    &.volkswagen{
        aspect-ratio: 1;
    }
    &.citroen{
        aspect-ratio: 1.1107254425546685178757375911142;
    }
    &.nissan{
        aspect-ratio: 1.1951447245564892623716153127918;
    }
    &.mercedez{
        aspect-ratio: 1;
    }
    &.bmw{
        aspect-ratio: 1;
    }
    &.pegeout{
        aspect-ratio: 0.91038406827880512091038406827881;
    }

    .show-768px{
        display: none;
    }
    @media (min-width: 1920px){
        .width-unset-1920px{
            width: unset;
        }
    }
    @media(max-width: 1400px){
        .justify-content-end-1400pxmax{
            justify-content: end;
        }
    }
    @media (max-width: 768px) {
        .hide-768px{
            display: none !important;
        }

        .show-768px{
            display: flex !important;
        }
    }
    @media (max-width: 576px) {
        .container{
            padding: 0 24px !important;
        }
    }
    @media(max-width: 480px){
        .margin-64px{
            margin: 42px 0;
        }
    }
`;

const loader = keyframes`
    to {
        background-position-x: -200%;
    }
`;
export const Loader = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(100deg, #2d2d2d 8%, #3b3b3b 18%, #2d2d2d 33%);
    background-size: 200% 300%;

    -webkit-animation: 1.5s ${loader} linear infinite;
    animation: 1.5s ${loader} linear infinite;

    z-index: 400;
`;

export const Button = styled.div<{ type?: string; }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.type == 'whatsapp' ? '#25D366' : props.type == 'secondary' ? props.theme.colors.secondary : props.theme.colors.primary};

    height: 44px;
    width: ${({ type }) => type == 'whatsapp' ? '375px' : type == 'small' ? '44px' : '100%'};
    ${({ type }) => type == 'small' ? 'min-width: 44px;' : '0'};

    ${({ type }) => type == 'small' ? 'margin: 0 0 0 16px;' : '0'};

    border-radius: 8px;

    cursor: pointer;

    box-shadow: 0 1px 24px rgba(68, 15, 16, 0.15);

    transition: 0.2s;

    &:hover{
        box-shadow: 0 1px 24px rgba(68, 15, 16, 0.5);
    }

    &:active{
        transform: scale(0.99);
    }

    svg{
        fill: ${({ theme }) => theme.colors.text};

        width: 16px;
        height: auto;

        ${({ type }) => type == 'small' ? '' : 'margin: 0 0 2px 0;'};
    }

    p{
        color: ${({ theme }) => theme.colors.text};

        font-size: 15px;
        font-weight: 600;

        margin: 0 0 0 14px;
    }

    @media(max-width: 468px){
        width: ${({ type }) => type == 'whatsapp' ? '100%' : type == 'small' ? '44px' : '100%'};

        svg{
            width: 14px;
            height: auto;

            ${({ type }) => type == 'small' ? '' : 'margin: 0 0 1px 0;'};
        }
        
        p{
            font-size: 14px;

            margin: 0 0 0 12px;
        }
    }
`;

export const FilterToggle = styled.div`
    display: flex;
    align-items: center;

    margin: 14px 0 0 0;

    cursor: pointer;

    svg{
        fill: ${({ theme }) => theme.colors.text};
    }

    p{
        color: ${({ theme }) => theme.colors.text};

        font-size: 16px;
        font-weight: 600;

        margin: 0 0 0 8px;
    }
`;

export const Title = styled.h5`
    color: ${({ theme }) => theme.colors.text};

    font-size: 26px;
    font-weight: 700;

    margin: 0 0 12px 0;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const Subtitle = styled.p`
    display: flex;
    align-items: end;

    color: ${({ theme }) => theme.colors.text};

    font-size: 14px;
    font-weight: 500;

    margin: 0 0 10px 32px;

    opacity: 0.75;

    @media(max-width: 768px){
        font-size: 12px;

        margin: 0 0 10px 24px;
    }
`;

export const Divider = styled.hr<{ full?: boolean }>`
    background-color: ${({ theme }) => theme.colors.text};

    height: 3px;
    width: ${({ full }) => full ? '100%' : '175px'};

    margin: 32px 0;

    opacity: 0.25;
`;

export const Box = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    width: 100%;
    height: auto;

    padding: 32px;

    border-radius: 8px;

    & > p:first-of-type, h3{
        color: ${({ theme }) => theme.colors.text};

        font-size: 22px;
        font-weight: 700;

        margin: 0;
    }

    & > p:last-of-type, h6{
        color: ${({ theme }) => theme.colors.text};

        font-size: 14px;
        font-weight: 500;

        line-height: 26px;

        margin: 0 0 24px 0;

        opacity: 0.8;
    }

    @media (max-width: 992px){
        padding: 18px 24px;

        & > p:first-of-type, h3{
            font-size: 18px;
        }

        & > p:last-of-type, h6{
            font-size: 12px;

            line-height: 24px;

            margin: 0 0 18px 0;
        }
    }

    @media(max-width: 768px){
        &.ad{
            display: none;
        }
    }
`;