import { UserProfileContainer } from './styles'
import { UserProfileContext } from '../../../../contexts/UserProfileContext'
import { useContextSelector } from 'use-context-selector'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

export function UserProfile() {
  const userProfile = useContextSelector(UserProfileContext, (context) => {
    return context.userProfile
  })

  return (
    <UserProfileContainer>
      <div className="img-container">
        <img src={userProfile.avatarUrl} alt="" />
      </div>
      <div className="profile-content">
        <header>
          <h2>{userProfile.fullName}</h2>

          <a href={userProfile.htmlUrl} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowSquareOut />
          </a>
        </header>
        <main>
          <p>{userProfile.bio}</p>
        </main>
        <footer>
          <div className="footer-item">
            <GithubLogo size={24} />
            <span>{userProfile.userName}</span>
          </div>
          <div className="footer-item">
            <Buildings size={24} />
            <span>{userProfile.company}</span>
          </div>
          <div className="footer-item">
            <Users size={24} />
            <span>{userProfile.followersCount} seguidores</span>
          </div>
          <span></span>
        </footer>
      </div>
    </UserProfileContainer>
  )
}
