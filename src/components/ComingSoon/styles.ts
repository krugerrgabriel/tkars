import styled from 'styled-components';

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};

  width: 100%;
  height: 100%;

  padding: 0;

  border-radius: 8px;

  @media (min-width: 1920px) {
    width: 310px;
  }

  @media (max-width: 768px) {
    a {
      display: flex;
    }
  }

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  /* aspect-ratio: 1.3382352941176470588235294117647; */
  aspect-ratio: 1.75;
  width: 100%;
  height: auto;

  * {
    border-radius: 8px 8px 0 0;

    @media (max-width: 768px) {
      border-radius: 8px 0 0 8px;
    }
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;

  padding: 18px 14px 14px 14px;

  p {
    margin: 0;
  }

  p:first-of-type {
    color: ${({ theme }) => theme.colors.text};

    font-size: 19px;
    font-weight: 700;

    line-height: 29px;

    text-transform: uppercase;

    margin: 6px 0 6px 0;
  }

  p:last-of-type {
    color: ${({ theme }) => theme.colors.text};

    font-size: 15px;
    font-weight: 500;

    line-height: 25px;

    margin: 0 0 16px 0;

    opacity: 0.9;
  }

  @media (max-width: 1400px) {
    p:last-of-type {
      font-size: 14px;
    }
  }

  @media (max-width: 1200px) {
    p:first-of-type {
      font-size: 16px;

      line-height: 24px;
    }

    p:last-of-type {
      font-size: 12px;

      line-height: 21px;

      margin: 0;
    }
  }

  @media (max-width: 768px) {
    p:first-of-type {
      font-size: 19px;
    }

    p:last-of-type {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    p:first-of-type {
      font-size: 18px;
    }

    p:last-of-type {
      font-size: 15px;
    }
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
`;
