import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  display: flex;
  gap: 32px;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  height: 212px;
  width: 100%;
  margin-top: -88px;
  padding: 32px;
  z-index: 2;

  .img-container {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`
