import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 42px;

    border-radius: 8px;

    h1{
        color: ${({ theme }) => theme.colors.text};

        font-size: 22px;
        font-weight: 700;

        margin: 0;
    }

    h3{
        color: ${({ theme }) => theme.colors.text};

        font-size: 15px;
        font-weight: 400;

        line-height: 19px;

        margin: 4px 0 16px 0;
    }
`;