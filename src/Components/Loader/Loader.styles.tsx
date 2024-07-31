import styled from "styled-components";

export const LoaderStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .loader {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .spinner {
      animation: rotation 1s infinite linear;
      border: 3px solid var(--grey-lighter);
      border-radius: 50%;
      border-top-color: var(--indigo-light);
      height: 5em;
      width: 5em;

      @keyframes rotation {
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;
