import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-header']};
  position: fixed;
  top: 0;
  width: 100%;
  height: 298px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img:nth-child(2) {
    margin-top: -35px;
  }
`
