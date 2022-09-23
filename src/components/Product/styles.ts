import styled from 'styled-components';

export const Body = styled.div<{
  margin?: boolean;
  fixedWidth?: boolean;
  className?: any;
}>`
  background-color: ${({ theme }) => theme.colors.gray};

  width: ${({ fixedWidth }) => (fixedWidth ? '310px' : '100%')};
  height: auto;

  padding: 0;

  border-radius: 8px;

  margin: 0 0 18px 0;
  ${({ margin }) => (margin ? 'margin: 0 18px 18px 18px' : '')};

  @media (min-width: 1920px) {
    width: 310px;
  }

  @media (max-width: 992px) {
    &.product-3 {
      display: none;
    }
  }

  @media (max-width: 768px) {
    a {
      display: flex;
    }

    & {
      margin: 0 0 12px 0;
    }
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
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;

  padding: 18px 14px 14px 14px;

  p {
    color: ${({ theme }) => theme.colors.text};

    font-size: 11px;
    font-weight: 600;

    text-transform: uppercase;

    margin: 0;

    opacity: 0.8;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};

    font-size: 19px;
    font-weight: 700;

    text-transform: uppercase;

    margin: 6px 0 6px 0;
  }

  h5 {
    color: ${({ theme }) => theme.colors.text};

    font-size: 12px;
    font-weight: 500;

    margin: 0 0 16px 0;

    min-height: 28.78px;

    opacity: 0.9;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};

    font-size: 24px;
    font-weight: 600;

    margin: 0 0 6px 0;
  }

  div.more-info {
    display: flex;
    justify-content: space-between;

    p {
      color: ${({ theme }) => theme.colors.text};

      font-size: 11px;
      font-weight: 500;

      margin: 0;

      opacity: 0.8;
    }
  }

  @media (max-width: 1200px) {
    p {
      font-size: 10px;
    }

    h2 {
      font-size: 17px;
    }

    h5 {
      font-size: 11px;

      margin: 0 0 12px 0;
    }

    h3 {
      font-size: 21px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 11px;
    }

    h2 {
      font-size: 19px;
    }

    h5 {
      font-size: 12px;
    }

    h3 {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 10px;
    }

    h2 {
      font-size: 18px;
    }

    h5 {
      font-size: 10px;
    }

    h3 {
      font-size: 18px;
    }

    div.more-info {
      p {
        font-size: 9px;
      }
    }
  }
`;

export const MarcaWrapper = styled.div`
  position: relative;

  width: auto;
  height: 8px;

  margin: 0 0 3px 8px;

  &.renault,
  &.volkswagen,
  &.nissan,
  &.fiat {
    height: 10px;
  }

  @media (max-width: 1200px) {
    height: 6px;

    &.renault,
    &.volkswagen,
    &.nissan,
    &.fiat {
      height: 8px;
    }
  }

  @media (max-width: 768px) {
    height: 7px;

    &.renault,
    &.volkswagen,
    &.nissan,
    &.fiat {
      height: 7px;
    }
  }
`;
