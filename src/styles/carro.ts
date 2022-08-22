import styled from "styled-components";

export const BannerBox = styled.div`
    display: flex;

    width: 100%;
    height: auto;

    div.wrapper{
        aspect-ratio: 1.7706666666666666666666666666667;
        width: 664px;
        height: auto;

        position: relative;

        margin: 0 12px 0 0;
    }
`;

export const InfoBox = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    width: 100%;
    height: max-content;

    padding: 32px;
    margin: 32px 0 0 0;

    border-radius: 8px;

    div.marca{
        display: flex;
        align-items: center;

        p{
            color: ${({ theme }) => theme.colors.text};

            font-size: 14px;
            font-weight: 600;

            text-transform: uppercase;

            margin: 0;

            opacity: 0.8;
        }

        div.marca-wrapper{
            position: relative;

            height: 10px;
            width: auto;

            margin: 0 0 2px 12px;
        }
    }

    div.icon-wrapper{
        svg{
            fill: ${({ theme }) => theme.colors.text};

            margin: 0 0 0 32px;
        }
    }

    h1{
        color: ${({ theme }) => theme.colors.text};

        font-size: 26px;
        font-weight: 700;

        text-transform: uppercase;

        margin: 2px 0 6px 0;
    }

    h3{
        color: ${({ theme }) => theme.colors.text};

        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;

        margin: 0 0 42px 0;

        opacity: 0.9;
    }

    div.items{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        div.item{
            margin: 0 42px 42px 0;
            
            div{
                display: flex;
                align-items: center;
                flex-direction: row;
                
                svg{
                    fill: ${({ theme }) => theme.colors.text};
                }
                
                & > p{
                    color: ${({ theme }) => theme.colors.text};

                    font-size: 14px;
                    font-weight: 600;

                    text-transform: uppercase;

                    margin: 0 0 0 8px;
                }
            }

            & > p{
                color: ${({ theme }) => theme.colors.text};

                font-size: 14px;
                font-weight: 500;

                text-transform: uppercase;

                margin: 2px 0 0 0;

                opacity: 0.75;
            }

            div.item-wrapper{
                position: relative;

                width: 14px;
                height: 14px;
            }
        }
    }

    p.ipva{
        color: ${({ theme }) => theme.colors.text};

        font-size: 16px;
        font-weight: 700;

        text-transform: uppercase;

        margin: 0;

        b{
            font-weight: 800;
        }
    }

    div.ficha-tecnica{
        div.header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;

            margin: 0 0 24px 0;

            cursor: pointer;

            p{
                color: ${({ theme }) => theme.colors.text};

                font-size: 24px;
                font-weight: 700;

                margin: 0;
            }

            svg{
                fill: ${({ theme }) => theme.colors.text};

                transform: rotate(180deg);

                transition: 0.3s;
            }
        }

        &.show div.header svg{
            transform: rotate(0);
        }

        div.reveal{
            font-size: 0;

            transition: 0.2s;

            p{
                margin: 0;

                transition: 0.1s;
            }

            &.show{
                font-size: unset;

                p{
                    margin-bottom: 1rem;
                }
            }
        }

        .fr-view{
            color: ${({ theme }) => theme.colors.text};

            word-wrap: break-word;
        }
    }
`;

export const FloatingBox = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    position: sticky;
    top: 120px;
    left: 0;

    width: 100%;
    height: max-content;

    padding: 32px;
    margin: 32px 0 0 0;

    border-radius: 8px;
    
    p.label{
        color: ${({ theme }) => theme.colors.text};

        font-size: 13px;
        font-weight: 500;

        opacity: 0.85;

        margin: 0;
    }
    
    h2{
        color: ${({ theme }) => theme.colors.text};
    
        font-size: 36px;
        font-weight: 600;

        margin: 1px 0 24px 0;
    }
    
    h3{
        color: ${({ theme }) => theme.colors.text};
    
        font-size: 18px;
        font-weight: 700;

        line-height: 28px;
    
        margin: 0;
    }

    p.description{
        color: ${({ theme }) => theme.colors.text};
    
        font-size: 14px;
        font-weight: 500;

        text-align: justify;

        line-height: 24px;

        opacity: 0.85;
    
        margin: 8px 0 16px 0;
    }
`;

export const Wrapper = styled.div`
    position: relative;

    aspect-ratio: 1.7706666666666666666666666666667;
    width: 664px;
    height: auto;

    margin: 0 12px 0 0;
`;