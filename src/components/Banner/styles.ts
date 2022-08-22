import styled from "styled-components";

export const Body = styled.div`
    aspect-ratio: 2.0193846153846153846153846153846;
    height: 325px;
    width: auto;

    position: relative;

    cursor: pointer;

    margin: 0 18px 0 0;

    *{
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }

    div.body{
        position: absolute;
        left: 24px;
        bottom: 24px;

        height: auto;
        width: calc(100% - 48px);

        z-index: 2;

        h2{
            color: ${({ theme }) => theme.colors.text};

            font-size: 25px;
            font-weight: 600;

            text-transform: uppercase;

            line-height: 32px;

            margin: 0;
        }

        h3{
            color: ${({ theme }) => theme.colors.text};

            font-size: 16px;
            font-weight: 400;

            line-height: 24px;

            margin: 4px 0 0 0;

            opacity: 0.9;
        }
    }
`;

export const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 90%);

    width: 100%;
    height: 100%;
    
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 8px;

    z-index: 1;
`;