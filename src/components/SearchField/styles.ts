import styled from "styled-components";

export const Body = styled.div`
    display: flex;

    width: 100%;

    div.corpse{
        display: flex;
        align-items: center;
    
        width: 100%;
        height: 42px;
    
        padding: 13px;
    
        border: 2px solid ${({ theme }) => theme.colors.text};
        border-radius: 8px;
    
        svg{
            width: 16px;
            height: 16px;
    
            margin: 0 12px 0 0;
    
            fill: ${({ theme }) => theme.colors.text};
        }
    
        input{
            background-color: transparent;
    
            color: ${({ theme }) => theme.colors.text};
    
            font-size: 13px;
            font-weight: 400;
            
            border: 0;
    
            width: 100%;
    
            &::placeholder{
                color: ${({ theme }) => theme.colors.text};
    
                font-weight: 500;
            }
        }
    }

    div.button{
        min-width: 44px;
        width: 44px;
        height: 44px;

        margin: 0 0 0 14px;
    }
`;