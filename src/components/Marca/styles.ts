import styled from "styled-components";

export const Body = styled.div<{ small?: boolean }>`
    &, a{

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        width: 124px;
        height: 124px;
    }

    background-color: ${({ theme }) => theme.colors.gray};

    
    margin: 0 20px 0 0;
    padding: 16px 0;

    position: relative;

    border-radius: 8px;

    cursor: pointer;

    *{
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }

    div.wrapper{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 64px;
    }

    h4{
        color: ${({ theme }) => theme.colors.text};

        font-size: 15px;
        font-weight: 500;

        margin: 0;
    }

    @media (max-width: 992px) {
        margin: 0 16px 0 0;
        padding: 12px 0;
        
        &, a{
            width: 98px;
            height: 98px;
        }

        div.wrapper{
            height: 42px;
        }

        h4{
            font-size: 12px;
        }
    }
`;

export const LogoWrapper = styled.div<{ small?: boolean }>`
    position: relative;

    &.hyundai,
    &.chevrolet,
    &.ford{
        width: 82px;
        height: auto;

        @media (max-width: 992px) {
            width: 64px;
        }
    }
    &.mitsubishi,
    &.honda,
    &.volkswagen,
    &.citroen,
    &.nissan,
    &.mercedez,
    &.bmw,
    &.pegeout{
        width: 64px;
        height: auto;

        @media (max-width: 992px) {
            width: 48px;
        }
    }
    &.renault{
        width: auto;
        height: 58px;

        @media (max-width: 992px) {
            width: 38px;
        }
    }
    &.fiat{
        width: 72px;
        height: auto;

        @media (max-width: 992px) {
            width: 52px;
        }
    }
`;