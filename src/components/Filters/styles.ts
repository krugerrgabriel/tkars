import styled from "styled-components";
import ReactSlider from "react-slider";

export const Body = styled.div<{ active: boolean; type?: string; className?: string }>`
    background-color: ${({ theme }) => theme.colors.gray};

    ${({ className }) => className ? '' : 'width: 428px'};
    height: 100vh;

    padding: 138px 32px 64px 32px;

    position: fixed;
    top: 0;
    left: ${({ active }) => active ? '0' : '-125%'};
    
    box-shadow: 0 -2px 24px rgba(68, 15, 16, 0.15);

    overflow-x: hidden;
    overflow-y: auto;

    transition: 0.2s;

    z-index: 100;

    div.filter-wrapper{
        position: relative;

        width: 100%;
        height: 100%;
    }

    div.section{
        margin: 0 0 32px 0;
        
        & > div.wrapper{
            display: flex;
            align-items: flex-end;

            margin: 0 0 12px 0;

            p.title{
                color: ${({ theme }) => theme.colors.text};

                font-size: 20px;
                font-weight: 700;

                margin: 0;
            }

            p.subtitle{
                color: ${({ theme }) => theme.colors.text};

                font-size: 12px;
                font-weight: 500;

                margin: 0 0 4px 24px;
            }
        }
    }

    div.checkboxs{
        display: flex;
        flex-wrap: wrap;

        & > *{
            margin: 0 24px 8px 0;
        }
    }

    div.button-box{
        background-color: ${({ theme }) => theme.colors.gray};

        display: flex;
        align-items: center;
        justify-content: center;

        ${({ className }) => className ? '' : 'width: 428px'};
        height: 78px;
        
        position: fixed;
        left: ${({ active }) => active ? '0' : '-125%'};
        bottom: 0;

        padding: 0 32px;

        border-radius: 8px 8px 0 0;

        box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);

        transition: 0.2s;
    }
`;

export const StyledSlider = styled(ReactSlider)`
    width: 95%;
    height: 6px;

    margin: 0 auto;
`;

export const StyledThumb = styled.div`
    background-color: #fff;
    color: transparent;

    height: 18px;
    width: 18px;

    bottom: -6px;
    
    text-align: center;
    
    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;

    cursor: grab;
`;

export const StyledTrack = styled.div<{ index: number }>`
    background: ${props => (props.index === 2 ? '#3B3B3B' : props.index === 1 ? '#971915' : '#3B3B3B')};
    top: 0;
    bottom: 0;
    
    border-radius: 999px;
`;

export const Bubble = styled.div<{ bubbleWidth: number; max:number; value: number; width: number; }>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;

    height: auto;
    width: max-content;

    padding: 3px 6px;

    border: 2px solid #ECECEC;
    border-radius: 4px;

    position: absolute;
    top: -38px;
    left: ${({ bubbleWidth, max, value, width }) => ((width*value)/max)-(bubbleWidth-(bubbleWidth/4))}px;

    p{
        color: ${({ theme }) => theme.colors.gray};

        font-size: 10px;
        font-weight: 600;

        text-align: center;

        margin: 0;
    }
`;

export const BackWrapper = styled.div<{ type: string; }>`
    position: absolute;
    top: -42px;
    left: 0;

    ${({ type }) => type == 'full' ? 'display: none;' : ''}

    div.wrapper{
        position: relative;

        width: 26px;
        height: 26px;

        cursor: pointer;
    }
`;