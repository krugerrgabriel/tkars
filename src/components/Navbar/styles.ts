import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    height: 96px;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    box-shadow: 0 0 24px rgba(151, 25, 21, 0.20);

    z-index: 500;
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 1.6845238095238095238095238095238;
    height: 42px;
    width: auto;
`;

export const SidenavWrapper = styled.div`
    svg{
        fill: ${({ theme }) => theme.colors.text};

        cursor: pointer;
    }
`;

export const NavbarMargin = styled.div`
    margin: 0 0 138px 0;
`;