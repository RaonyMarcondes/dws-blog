import styled from "styled-components";

export const FiltersBar = styled.nav`
  max-width: 314px;
  background-color: var(--grey-lightest);
  box-shadow: var(--grey-light) 0px 3px 24px;
  padding: 16px;
  border-radius: 16px;

  .icon {
    float: left;
    margin: 6px 10px 0 0;
    color: var(--primary-darkest);
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary-darkest);
  }
`;
