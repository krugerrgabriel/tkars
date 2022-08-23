import styled from "styled-components";

export const Subtext = styled.p`
    color: ${({ theme }) => theme.colors.text};

    font-size: 9px;
    font-weight: 500;

    margin: 0 0 4px 8px;

    opacity: 0.5;
`;

export const ImageWrapper = styled.div`
    position: relative;

    display: none;

    &.desktop{
        aspect-ratio: 3.8396850957237430667382358203614;
    }
    &.mobile{
        aspect-ratio: 1.6619718309859154929577464788732;
    }
    
    width: 100%;
    height: auto;

    *{
        border-radius: 8px;
    }

    @media (min-width: 768px){
        &.desktop{
            display: block;
        }
    }
    @media (max-width: 768px){
        &.mobile{
            display: block;
        }
    }
`;