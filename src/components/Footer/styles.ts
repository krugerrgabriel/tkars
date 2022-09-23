import styled from 'styled-components';

export const Body = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;

  z-index: 200;

  div.first {
    background-color: ${({ theme }) => theme.colors.primary};

    height: 42px;
    width: 100%;

    @media (max-width: 680px) {
      height: 40px;
    }
    @media (max-width: 480px) {
      height: 36px;
    }

    div.instagram {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        margin-top: -4px;
      }

      svg {
        width: 22px;
        height: 22px;
      }
    }

    div:not(.wrapper) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div.wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;

        p {
          color: ${({ theme }) => theme.colors.text};

          font-size: 12px;
          font-weight: 500;

          margin: 0;

          @media (max-width: 680px) {
            font-size: 10px;
          }
          @media (max-width: 480px) {
            font-size: 9px;
          }
        }
      }
    }
  }

  div.second {
    background-color: ${({ theme }) => theme.colors.secondary};

    height: 42px;

    p {
      color: ${({ theme }) => theme.colors.text};

      font-size: 12px;
      font-weight: 500;

      margin: 0;
    }

    @media (max-width: 680px) {
      height: 40px;

      p {
        font-size: 10px;
      }
    }
    @media (max-width: 480px) {
      height: 36px;

      p {
        font-size: 9px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;

  aspect-ratio: 3.55;
  height: 19px;
  width: auto;

  margin: 0 0 0 12px;

  @media (max-width: 680px) {
    height: 18px;

    margin: 0 0 0 10px;
  }
  @media (max-width: 480px) {
    height: 16px;

    margin: 0 0 0 8px;
  }
`;
