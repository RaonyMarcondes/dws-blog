import styled from "styled-components";

export const NavBar = styled.header`
  h1 {
    display: inline-block;
    margin: 36px 0;
    font-size: 36px;
    font-weight: bold;
    color: var(--primary-darkest);
  }

  .sort-by {
    float: right;
    margin-top: 50px;

    h5 {
      font-size: 16px;
      font-weight: 600;
      color: var(--grey-darker);
      float: left;
    }

    button {
      cursor: pointer;
      min-width: 150px;
      float: right;
      background-color: transparent;
      border: none;
      padding: 13px 10px 13px 13px;
      font-size: 16px;
      font-weight: 600;
      margin: -13px 0 0 3px;
      border-radius: 32px;
      transition: background-color 200ms linear;

      .icon {
        float: right;
        margin: 0 0 0 6px;
        color: var(--teal-medium);
      }

      &:hover {
        cursor: pointer;
        background-color: var(--teal-medium);

        color: var(--grey-lighter);

        .icon {
          color: var(--grey-lighter);
        }
      }
    }
  }
`;
