import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  .wrapper {
    max-width: 876px;
    margin: 0 auto;

    h1 {
      margin: 42px 0 28px 0;
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-darkest);

      @media (min-width: 768px) {
        font-size: 56px;
      }
    }

    .date-author {
      display: flex;
      float: left;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 30px;

      .wrapper {
        flex-direction: column;
        margin: 8px 0 0 12px;
      }

      span {
        font-weight: bold;
      }

      .date {
        color: var(--grey-darker);
      }
    }

    .avatar {
      display: block;
      float: left;
      width: 64px;
      height: 64px;
    }

    .cover {
      width: 100%;
      border-radius: 16px;
    }

    .content {
      margin-top: 42px;
      font-size: 16px;
      line-height: 32px;
    }
  }

  .back-btn {
    float: left;
    min-width: 110px;
    display: block;
    margin: 6px 10px 0 0;
    color: var(--pink-medium);
    border: 1px solid var(--pink-medium);
    border-radius: 42px;
    text-decoration: none;
    padding: 16px 18px 16px 16px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 42px;
    transition: background-color 200ms linear;

    .icon {
      float: left;
      color: var(--pink-medium);
      margin-right: 12px;
    }

    &:hover {
      background-color: var(--pink-lightest);
    }
  }

  aside {
    max-width: 876px;
    margin: 0 auto;
    margin-top: 42px;
    padding-top: 42px;
    border-top: 1px solid var(--grey-light);

    h2 {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 24px;
    }

    .latest {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
      flex: 2;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
