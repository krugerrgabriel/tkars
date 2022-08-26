import styled from "styled-components";

export const Body = styled.div`
    display: flex;

    overflow-x: scroll;

    width: 100%;

    &::-webkit-scrollbar {
        height: 0px;
    }

    & > *{
        flex-shrink: 0; 
    }
`;