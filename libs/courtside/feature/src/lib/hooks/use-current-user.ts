import { BaseUserDto } from '@courtside/entities';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type CurrentUserState = {
  user: BaseUserDto;
  isLoggedIn: boolean;
  login: (user: BaseUserDto) => void;
};

export const useCurrentUser = create<CurrentUserState>()(
  persist((set) => ({
    user: {
      firstName: '',
      lastName: '',
      email: '',
    },
    isLoggedIn: false,
    login: (user) => set(() => ({ user, isLoggedIn: true })),
  }))
);
