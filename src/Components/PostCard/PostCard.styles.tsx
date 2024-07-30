import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--grey-lightest);
  box-shadow: var(--grey-light) 0px 3px 24px;
  border-radius: 16px;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: var(--primary-darkest);
  }

  img {
    float: left;
    width: 100%;
    border-radius: 16px 16px 0 0;
  }

  .content {
    padding: 16px;

    .date-author {
      display: flex;
      font-size: 14px;
      color: var(--grey-darker);
    }

    h1 {
      font-weight: bold;
      font-size: 20px;
      margin: 12px 0;
    }

    .description {
      font-size: 14px;
      color: var(--grey-darkest);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    span {
      display: block;
      width: 6px;
      height: 6px;
      background-color: var(--pink-medium);
      margin: 8px;
      border-radius: 50px;
    }

    .categories {
      display: flex;
      gap: 8px;
      margin-top: 32px;
    }
  }
`;

export const CategoryPill = styled.div`
  display: inline-flex;
  background: var(--grey-lighter);
  border-radius: 42px;
  padding: 8px 16px;
  font-size: 14px;
  color: var(--grey-darker);
  justify-content: center;
  align-items: center;
  text-align: center;
`;
