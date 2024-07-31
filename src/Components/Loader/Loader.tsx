import styled from "styled-components";

const LoaderStyled = styled.div`
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
`;

const Loader = () => (
  <LoaderStyled>
    <div className="spinner"></div>
  </LoaderStyled>
);

export default Loader;
