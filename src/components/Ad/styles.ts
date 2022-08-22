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

    aspect-ratio: 3.8396850957237430667382358203614;
    width: 100%;
    height: auto;

    *{
        border-radius: 8px;
    }
`;