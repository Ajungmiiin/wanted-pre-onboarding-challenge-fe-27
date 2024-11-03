import { useMutation } from '@tanstack/react-query';
import { UserInfo } from '../types/User';

export const useAuth = (mode: 'login' | 'create') => {
  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ email, password }: UserInfo) => {
      const response = await fetch(`http://localhost:8080/users/${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const responseMessage = await response.json();
        throw new Error(responseMessage.details);
      }

      return response.json();
    },
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.token);
    },
  });

  return { mutate, error, isPending, isError, isSuccess };
};
