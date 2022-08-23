import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #25D366;

    width: 42px;
    height: 42px;

    position: fixed;
    right: 24px;
    bottom: 24px;

    border-radius: 8px;

    cursor: pointer;

    z-index: 700;

    transition: 0.2s;

    &:hover{
        box-shadow: 0 0 12px rgba(37, 211, 102, 0.5);
    }

    svg{
        fill: ${({ theme }) => theme.colors.text};

        width: 18px;
        height: 18px;
    }
`;