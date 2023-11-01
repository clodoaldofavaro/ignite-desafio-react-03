import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createContext } from 'use-context-selector'

interface UserProfile {
  fullName: string
  userName: string
  bio: string | null
  avatarUrl: string
  company: string | null
  htmlUrl: string
  followersCount: number
}

interface UserProfileResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string | null
  blog: string
  location: string | null
  email: null | string
  hireable: null | boolean
  bio: string | null
  twitter_username: null | string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

interface UserProfileContextType {
  userProfile: UserProfile
  fetchUserProfile: () => Promise<void>
}

interface UserProfileProviderProps {
  children: ReactNode
}

export const UserProfileContext = createContext({} as UserProfileContextType)

export function UserProfileProvider({ children }: UserProfileProviderProps) {
  const initialUserProfile = {
    fullName: '',
    userName: '',
    bio: '',
    avatarUrl: '',
    company: null,
    htmlUrl: '',
    followersCount: 0,
  }
  const [userProfile, setUserProfile] =
    useState<UserProfile>(initialUserProfile)

  const fetchUserProfile = useCallback(async () => {
    const response = await fetch(
      'https://api.github.com/users/clodoaldoivanfavaro',
    )
    const userProfileResponse = await response.json()
    const userProfileData = parseUserProfileResponse(userProfileResponse)

    setUserProfile(userProfileData)
  }, [])

  const parseUserProfileResponse = (
    response: UserProfileResponse,
  ): UserProfile => {
    return {
      fullName: response.name,
      userName: response.login,
      bio: response.bio,
      avatarUrl: response.avatar_url,
      company: response.company,
      htmlUrl: response.html_url,
      followersCount: response.followers,
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [fetchUserProfile])

  return (
    <UserProfileContext.Provider
      value={{
        userProfile,
        fetchUserProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  )
}
