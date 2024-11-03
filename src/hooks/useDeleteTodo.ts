import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../routes';

export const useDeleteTodo = (token: string, id: string) => {
  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationFn: async () => {
      const response = await fetch(`http://localhost:8080/todos/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: token },
      });

      if (!response.ok) {
        console.log('error');
        const responseMessage = await response.json();
        throw new Error(responseMessage.details);
      }

      return response.json();
    },
    onSuccess: async () =>
      queryClient.invalidateQueries({ queryKey: ['todos'] }),
    retry: 0,
  });

  return { mutate, error, isPending, isError, isSuccess };
};
