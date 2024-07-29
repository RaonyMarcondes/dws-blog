import styled from "styled-components";

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 314px; */
  background-color: var(--grey-lightest);
  box-shadow: var(--grey-light) 0px 3px 24px;
  padding: 16px;
  margin: 0 24px 24px 0;
  border-radius: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 314px;
  }

  .icon {
    float: left;
    margin: 6px 10px 0 0;
    color: var(--primary-darkest);
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-darkest);
    margin-bottom: 16px;
  }

  .categories,
  .authors {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    ul {
      float: left;
      clear: both;
      margin: 5px 0 16px 0;

      li {
        display: block;
        list-style: none;
        border-top: 1px solid var(--grey-lightest);
        border-left: 1px solid var(--grey-lightest);
        border-right: 1px solid var(--grey-lightest);
        border-bottom: 1px solid var(--grey-lighter);
        padding: 11px 8px;
        font-size: 14px;
        margin-bottom: 3px;

        &:hover {
          background-color: var(--teal-lightest);
          border-bottom: 1px solid var(--teal-medium);
        }

        &.active {
          background-color: var(--teal-lightest);
          border: 1px solid var(--teal-medium);
          border-radius: 8px;
        }
      }
    }
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-darkest);
  }

  button {
    cursor: pointer;
    width: 100%;
    background-color: var(--pink-medium);
    border: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    color: var(--grey-lightest);
    border-radius: 42px;
    transition: background-color 200ms linear;

    &:hover {
      background-color: var(--pink-dark);
    }
  }
`;
