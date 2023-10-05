import { ReactNode, createContext, useCallback, useState } from 'react'

interface UserProfile {
  fullName: string
  userName: string
  bio: string
  avatarUrl: string
  company: string | null
  htmlUrl: string
  followersCount: number
}

interface UserProfileContextType {
  userProfile: UserProfile
}

interface UserProfileProviderProps {
  children: ReactNode
}

export const UserProfileContext = createContext({} as UserProfileContextType)

export const UserProfileProvider({ children }: UserProfileProviderProps) {
    const [userProfile, setUserProfile] = useState<UserProfile>()

    const fetchUserProfile = useCallback(async () => {
        const response = await fetch('https://api.github.com/users/clodoaldofavaro')
        const userProfileData = await response.json();

    }, [])

    const parseUserProfileData = (userProfileData) => {
        return {
            fullName: userProfileData.name
        }
    }
}
