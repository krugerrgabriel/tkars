import styled from "styled-components";

const handleColor = (props) => {
    let { type, theme } = props;
    switch(type){
        case 'whatsapp':
            return '#25D366';
        break;
        case 'secondary':
            return theme.colors.secondary;
        break;
        default:
            return theme.colors.primary;
        break;
    }
}

export const Body = styled.div<{ type?: string; }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => handleColor(props)};

    height: 44px;
    width: ${({ type }) => type == 'whatsapp' ? '375px' : type == 'small' ? '44px' : '100%'};
    ${({ type }) => type == 'small' ? 'min-width: 44px;' : '0'};

    ${({ type }) => type == 'small' ? 'margin: 0 16px;' : '0'};

    border-radius: 8px;

    cursor: pointer;

    box-shadow: 0 1px 24px rgba(68, 15, 16, 0.15);

    transition: 0.2s;

    &:hover{
        box-shadow: 0 1px 24px rgba(68, 15, 16, 0.5);
    }

    &:active{
        transform: scale(0.99);
    }

    div.wrapper{
        position: relative;

        width: 16px;
        height: 16px;

        ${({ type }) => type == 'small' ? '' : 'margin: 0 0 2px 0;'};
    }

    p{
        color: ${({ theme }) => theme.colors.text};

        font-size: 15px;
        font-weight: 600;

        margin: 0 0 0 14px;
    }

    @media(max-width: 468px){
        width: ${({ type }) => type == 'whatsapp' ? '100%' : type == 'small' ? '40px' : '100%'};
        height: 40px;

        svg{
            width: 14px;
            height: auto;

            ${({ type }) => type == 'small' ? '' : 'margin: 0 0 1px 0;'};
        }
        
        p{
            font-size: 14px;

            margin: 0 0 0 12px;
        }
    }
`;