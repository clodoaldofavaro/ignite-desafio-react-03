import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  div:first-child {
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: bold;
      font-size: 18px;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
    }
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme['base-border']};
    font-size: 16px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
