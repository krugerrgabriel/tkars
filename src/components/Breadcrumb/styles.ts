import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;

    margin: 0 0 20px 0;

    svg{
        fill: ${({ theme }) => theme.colors.text};

        height: 11px;
        width: auto;

        margin: 0 4px 6px 0;
    }

    p{
        color: ${({ theme }) => theme.colors.text};

        font-size: 12px;
        font-weight: 600;

        text-transform: uppercase;

        margin: 0;
    }
`;