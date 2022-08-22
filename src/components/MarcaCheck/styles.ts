import styled from "styled-components";

export const Body = styled.div<{ small?: boolean; active: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    background-color: ${(props) => props.active ? props.theme.colors.secondary : '#3D3D3D'};

    width: 78px;
    height: 78px;

    margin: 0 12px 0 0;
    padding: 8px 0;

    position: relative;

    border-radius: 8px;

    cursor: pointer;

    transition: 0.2s;

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
        height: 48px;
    }

    h4{
        color: ${({ theme }) => theme.colors.text};

        font-size: 10px;
        font-weight: 500;

        margin: 0;
    }
`;

export const LogoWrapper = styled.div<{ small?: boolean }>`
    position: relative;

    &.hyundai,
    &.chevrolet,
    &.ford{
        width: 54px;
        height: auto;
    }
    &.mitsubishi,
    &.honda,
    &.volkswagen,
    &.citroen,
    &.nissan,
    &.mercedez,
    &.bmw,
    &.pegeout{
        width: 38px;
        height: auto;
    }
    &.renault{
        width: auto;
        height: 40px;
    }
    &.fiat{
        width: 42px;
        height: auto;
    }
`;