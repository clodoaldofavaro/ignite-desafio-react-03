import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  height: 212px;
  width: 100%;
  max-width: 960px;
  margin-top: -88px;
  padding: 32px 32px 32px 40px;
  z-index: 2;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  .profile-content {
    flex-grow: 1;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      h2 {
        font-size: 24px;
        font-weight: bold;
        color: ${(props) => props.theme['base-title']};
      }

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
      }
    }

    main {
      font-size: 16px;
      color: ${(props) => props.theme['base-text']};
      margin-bottom: 24px;
    }

    footer {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: 16px;
      color: ${(props) => props.theme['base-subtitle']};

      .footer-item {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
