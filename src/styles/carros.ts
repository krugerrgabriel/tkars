import styled from "styled-components";

import { Row, Container } from 'react-bootstrap';

export const ProductWrapper = styled(Row)`
    display: flex;
    flex-wrap: wrap;

    margin: 42px 0 64px 0;

    @media(max-width: 992px){
        margin: 42px 0;
    }
    @media(max-width: 480px){
        margin: 42px 0 0 0;
    }
`;

export const StyledContainer = styled(Container)`
    @media (min-width: 1400px){
        max-width: unset;
    }
`;

export const BoxAppear = styled.div`
    .filter{
        margin: 0 12px 0 0;

        width: max-content;
    }

    .show-768px{
        display: none;
    }
    .show-1400px{
        display: none;
    }
    @media(max-width: 1400px){
        .show-1400px{
            display: flex;
        }
    }

    @media(max-width: 768px){
        background-color: ${({ theme }) => theme.colors.gray};

        width: 100%;
        height: auto;

        padding: 24px 32px;

        border-radius: 8px;

        .hide-768px{
            display: none;
        }
        .show-768px{
            display: block;

            margin: 14px 0 0 0;
        }
    }
`;