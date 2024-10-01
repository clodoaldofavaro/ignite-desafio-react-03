import styled from 'styled-components'

export const BlogPostHeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  height: 168px;
  width: 100%;
  max-width: 960px;
  top: 200px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 32px 32px 32px 40px;
  z-index: 4;

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-span']};

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .header-links {
    display: flex;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme['base-blue']};
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;

      &:visited {
        color: ${(props) => props.theme['base-blue']};
      }

      svg {
        position: relative;
        left: 8px;
        top: 1px;
      }

      &:first-child {
        svg {
          margin-right: 8px;
        }
      }
    }
  }
`
