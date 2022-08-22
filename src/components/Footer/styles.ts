import styled from "styled-components";

export const Body = styled.div`
    width: 100%;

    margin: 64px 0 0 0;

    div.first{
        background-color: ${({ theme }) => theme.colors.primary};

        height: 42px;
        width: 100%;

        div:not(.wrapper){
            display: flex;
            align-items: center;
            justify-content: end;

            div.wrapper{
                display: flex;
                align-items: center;
                justify-content: center;

                height: 100%;
                
                p{
                    color: ${({ theme}) => theme.colors.text};

                    font-size: 12px;
                    font-weight: 500;
                    
                    margin: 0;
                }
            }
        }
    }

    div.second{
        background-color: ${({ theme }) => theme.colors.secondary};

        height: 42px;

        p{
            color: ${({ theme}) => theme.colors.text};

            font-size: 12px;
            font-weight: 500;
            
            margin: 0;
        }
    }
`;

export const Wrapper = styled.div`
    position: relative;

    aspect-ratio: 3.55;
    height: 19px;
    width: auto;

    margin: 0 0 0 12px;
`;