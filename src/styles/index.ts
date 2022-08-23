import styled from "styled-components";

export const BannerWrapper = styled.div`
    margin: 0;
    
    div.margin-banner-0{
        margin: 0 0 0 42px;
    }
    div.margin-banner-3{
        margin: 0 24px 0 0;
    }

    @media (max-width: 618px){
        div.margin-banner-0{
            margin: 0 0 0 24px;
        }
        div.margin-banner-3{
            margin: 0 24px 0 0;
        }   
    }
    @media (max-width: 360px){
        div.margin-banner-0{
            margin: 0 0 0 12px;
        }
        div.margin-banner-3{
            margin: 0 12px 0 0;
        }   
    }
`;