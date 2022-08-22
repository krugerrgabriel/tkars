import styled from "styled-components";

export const Body = styled.div<{ active: boolean }>`
    position: relative;

    width: max-content;

    div.box{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        background-color: ${({ theme }) => theme.colors.primary};

        height: 44px;

        padding: 0 24px;

        border-radius: ${({ active }) => active ? '8px 8px 0 0' : '8px'};

        cursor: pointer;

        svg{
            fill: ${({ theme }) => theme.colors.text};

            height: 14px;
            width: auto;

            margin: 0 0 3px 0;
        }

        p{
            color: ${({ theme }) => theme.colors.text};

            font-size: 14px;
            font-weight: 600;

            margin: 0 8px 0 12px;

            i{
                font-weight: 500;
                font-style: unset;
            }
        }
    }

    div.reveal{
        display: ${({ active }) => active ? 'flex' : 'none'};
        flex-direction: column;

        background-color: ${({ theme }) => theme.colors.primary};

        position: absolute;

        width: 100%;

        padding: 24px;

        border-top: 1px solid ${({ theme }) => theme.colors.secondary};

        border-radius: 0 0 8px 8px;

        z-index: 50;

        p{
            color: ${({ theme }) => theme.colors.text};

            font-size: 14px;
            font-weight: 500;

            margin: 0 0 12px 0;

            cursor: pointer;

            transition: 0.2s;

            &:hover{
                text-decoration: underline;
            }

            &:last-of-type{
                margin: 0;
            }
        }
    }
`;