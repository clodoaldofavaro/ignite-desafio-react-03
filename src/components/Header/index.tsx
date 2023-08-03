import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import rectangleLeft from '../../assets/rectangles-left.svg'
import rectangleRight from '../../assets/rectangles-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={rectangleLeft} alt="" />
      <img src={logoImg} alt="" />
      <img src={rectangleRight} alt="" />
    </HeaderContainer>
  )
}
