import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;

    margin: 0 0 20px 0;

    div.wrapper{
        position: relative;

        height: 11px;
        width: 11px;

        margin: 0 4px 3px 0;
    }

    p{
        color: ${({ theme }) => theme.colors.text};

        font-size: 12px;
        font-weight: 600;

        text-transform: uppercase;

        margin: 0 0 0 4px;
    }
`;