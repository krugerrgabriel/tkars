import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    align-items: center;

    input[type=checkbox]{
        display: inline-block;

        position: relative;
        
        width: 16px;
        height: 16px;
        
        margin: 0 0 2px 0;

        border: 2px solid ${({ theme }) => theme.colors.primary};
        border-radius: 4px;

        -webkit-appearance: none;

        &:checked{
            color: #99a1a7;
            background-color: ${({ theme }) => theme.colors.primary};

            :after{
                color: #fff;
                
                content: 'x';

                font-size: 14px;
                font-weight: 500;

                position: absolute;
                top: -5.1px;
                left: 2.1px;
            }
        }
    }
    
    p{
        color: ${({ theme }) => theme.colors.text};

        font-size: 14px;
        font-weight: 600;

        margin: 0 0 0 8px;
    }
`;