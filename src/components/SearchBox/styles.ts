import styled from "styled-components";

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.gray};

    padding: 42px;

    border-radius: 8px;

    h1{
        color: ${({ theme }) => theme.colors.text};

        font-size: 22px;
        font-weight: 700;

        margin: 0;
    }

    h3{
        color: ${({ theme }) => theme.colors.text};

        font-size: 15px;
        font-weight: 400;

        line-height: 19px;

        margin: 4px 0 16px 0;
    }

    @media (max-width: 1200px) {
        padding: 32px 42px;

        h1{
            font-size: 20px
        }

        h3{
            font-size: 14px
        }
    }

    @media (max-width: 768px) {
        padding: 24px;
        
        h3{
            font-size: 14px;

            line-height: 24px;
        }

        .margin-top-12px-768px{
            margin-top: 12px;
        }
    }

    @media (max-width: 480px) {
        h1{
            font-size: 18px;
        }

        h3{
            font-size: 12px;
        }
    }
`;