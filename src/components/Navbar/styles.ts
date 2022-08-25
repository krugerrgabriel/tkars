import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    height: 96px;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    box-shadow: 0 0 24px rgba(151, 25, 21, 0.20);

    z-index: 500;

    div.container-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;

        div.search-wrapper{
            width: 425px;
        }
    }

    @media(max-width: 992px){
        div.container-wrapper{
            div.search-wrapper{
                width: 325px;
            }
        }
    }
    @media(max-width: 480px){
        height: 72px;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 1.6845238095238095238095238095238;
    height: 42px;
    width: auto;

    @media(max-width: 480px){
        height: 28px;
    }
`;

export const SidenavWrapper = styled.div`
    svg{
        fill: ${({ theme }) => theme.colors.text};

        cursor: pointer;

        @media(max-width: 480px){
            height: 18px;
        }
    }
`;

export const NavbarMargin = styled.div`
    margin: 0 0 138px 0;

    @media (max-width: 480px) {
        margin: 0 0 112px 0;
    }
`;

export const SearchWrapper = styled.div`
    cursor: pointer;
    
    @media(max-width: 480px){
        height: 18px;
    }
`;

export const Sidenav = styled.div<{ active: boolean; }>``;

export const SearchReveal = styled.div<{ active: boolean; }>`
    background-color: ${({ theme }) => theme.colors.gray};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    left: 0;
    top: ${({ active }) => active ? '0' : '-200%'};

    height: 96px;
    width: 100%;

    transition: 0.2s;

    z-index: 502;

    div.button-style{
        background-color: ${({ theme }) => theme.colors.secondary};

        min-width: 44px;
        width: 44px;
        height: 44px;

        margin: 0 0 0 32px;

        svg{
            margin: 0;
        }

        @media(max-width: 496px){
            margin: 0 0 0 14px;
        }
    }

    @media(max-width: 480px){
        height: 86px;
    }
`;

export const SearchOverlay = styled.div<{ active: boolean }>`
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);

    position: fixed;
    left: 0;
    top: ${({ active }) => active ? '0' : '-200%'};

    width: 100vw;
    height: 100vh;

    transition: 0.2s;

    z-index: 501;
`;