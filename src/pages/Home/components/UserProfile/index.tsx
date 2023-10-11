import { UserProfileContainer } from './styles'
import { UserProfileContext } from '../../../../contexts/UserProfileContext'
import { useContextSelector } from 'use-context-selector'

export function UserProfile() {
  debugger

  const userProfile = useContextSelector(UserProfileContext, (context) => {
    return context.userProfile
  })

  console.log(userProfile.fullName)

  return (
    <UserProfileContainer>
      <div className="img-container">
        <img src="" alt="" />
      </div>
    </UserProfileContainer>
  )
}
