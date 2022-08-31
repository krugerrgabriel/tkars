import styled from "styled-components";

export const Body = styled.div`
    display: flex;

    overflow-x: scroll;

    width: 100%;

    div.arrow{
        background-color: rgba(255, 255, 255, 0.35);

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;

        width: 32px;
        height: 32px;

        padding: 2px;

        border-radius: 4px;

        cursor: pointer;

        transition: 0.2s;

        z-index: 1;

        &:hover{
            background-color: rgba(255, 255, 255, 0.5);
        }

        &.left{
            left: 24px;
        }
        &.right{
            right: 24px;
        }

        svg{
            fill: ${({ theme }) => theme.colors.text};

            width: 24px;
            height: 24px;
        }
    }

    &::-webkit-scrollbar {
        height: 0px;
    }

    & > *{
        flex-shrink: 0; 
    }
`;