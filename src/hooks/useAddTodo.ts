import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../routes';

interface addTodo {
  title: string;
  content: string;
}

export const useAddTodo = (token: string) => {
  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationFn: async ({ title, content }: addTodo) => {
      const response = await fetch(`http://localhost:8080/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({
          title,
          content,
        }),
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
