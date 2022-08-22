import styled from "styled-components";

export const Body = styled.div<{ margin?: boolean; }>`
    background-color: ${({ theme }) => theme.colors.gray};

    width: 100%;
    /* width: 310px; */
    height: auto;

    border-radius: 8px;

    ${({ margin }) => margin ? 'margin: 0 0 18px 0' : '' };
`;

export const ImageWrapper = styled.div`
    position: relative;

    aspect-ratio: 1.3382352941176470588235294117647;
    width: 100%;
    height: auto;

    *{
        border-radius: 8px 8px 0 0;
    }
`;

export const Info = styled.div`
    width: 100%;
    height: 100%;

    padding: 18px 14px 14px 14px;

    h3{
        color: ${({ theme }) => theme.colors.text};

        font-size: 11px;
        font-weight: 600;

        text-transform: uppercase;

        margin: 0;

        opacity: 0.8;
    }

    h1{
        color: ${({ theme }) => theme.colors.text};

        font-size: 19px;
        font-weight: 700;

        text-transform: uppercase;

        margin: 6px 0 6px 0;
    }

    h4{
        color: ${({ theme }) => theme.colors.text};

        font-size: 12px;
        font-weight: 500;

        margin: 0 0 16px 0;

        min-height: 28.78px;

        opacity: 0.9;
    }

    h2{
        color: ${({ theme }) => theme.colors.text};

        font-size: 24px;
        font-weight: 600;

        margin: 0 0 6px 0;
    }

    div.more-info{
        display: flex;
        justify-content: space-between;

        p{
            color: ${({ theme }) => theme.colors.text};

            font-size: 11px;
            font-weight: 500;

            margin: 0;

            opacity: 0.8;
        }
    }
`;

export const MarcaWrapper = styled.div`
    position: relative;

    width: auto;
    height: 8px;

    margin: 0 0 3px 8px;

    &.renault,&.volkswagen,&.nissan,&.fiat{
        height: 10px;
    }
`;