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
        height: 82px;
    }
`;

export const LogoWrapper = styled.div`
    position: relative;

    aspect-ratio: 1.6845238095238095238095238095238;
    height: 82px;
    width: auto;

    @media(max-width: 480px){
        height: 64px;
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

export const Sidenav = styled.div<{ active: boolean; }>`
    background-color: ${({ theme }) => theme.colors.gray};

    width: 325px;
    height: 100%;

    position: fixed;
    top: 0;
    right: ${({ active }) => active ? '0' : '-200%'};

    padding: 64px 42px;

    box-shadow: -2px 0 6px rgba(0, 0, 0, 0.08);

    transition: 0.2s;

    z-index: 600;

    div.logo-wrapper{
        position: relative;

        aspect-ratio: 1.6845238095238095238095238095238;
        width: 150px;
        height: auto;
    }

    div.links{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        height: 100%;

        padding: 42px 0 0 0;

        p{
            color: ${({ theme }) => theme.colors.text};

            font-size: 18px;
            font-weight: 500;

            margin: 0 0 24px 0;

            cursor: pointer;

            i{
                font-style: unset;
                font-size: 14px;
                font-weight: 400;
            }

            svg{
                width: 18px;
                height: auto;

                margin: 0 12px 5px 0;
            }

            @media (max-width: 576px) {
                font-size: 16px;
            }
        }
    }

    @media(max-width: 325px){
        width: 100%;
    }
`;

export const CloseWrapper = styled.div<{ active: boolean; }>`
    position: fixed;
    top: 24px;
    right: ${({ active }) => active ? '24px' : '-200%'};

    cursor: pointer;

    transition: 0.2s;

    z-index: 601;
`;

export const OverlaySidenav = styled.div<{ active: boolean }>`
    @media(max-width: 768px){
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
    
        position: fixed;
        top: 0;
        right: ${({ active }) => active ? '0' : '-200%'};
        
        width: 100%;
        height: 100%;
    
        transition: 0.2s;
    
        z-index: 501;
    }
`;