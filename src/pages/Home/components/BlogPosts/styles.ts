import styled from 'styled-components'

export const BlogPostsContainer = styled.div`
  margin-top: 72px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .post-card {
    padding: 32px;
    border-radius: 10px;

    header {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-weight: bold;
        font-size: 20px;
        color: ${(props) => props.theme['base-title']};
      }

      span {
        font-size: 14px;
        color: ${(props) => props.theme['base-span']};
      }
    }

    main {
      color: ${(props) => props.theme['base-text']};
      font-size: 16px;
    }
  }
`
