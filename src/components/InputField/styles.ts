import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 42px;

    padding: 13px;

    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 8px;

    svg{
        width: 16px;
        height: 16px;

        margin: 0 12px 0 0;

        fill: ${({ theme }) => theme.colors.text};
    }
    div.svg{
        margin: 0 0 6px 0;
    }

    input{
        background-color: transparent;

        color: ${({ theme }) => theme.colors.text};

        font-size: 13px;
        font-weight: 400;
        
        border: 0;

        width: 100%;

        &::placeholder{
            color: ${({ theme }) => theme.colors.text};

            font-weight: 500;
        }
    }
`;