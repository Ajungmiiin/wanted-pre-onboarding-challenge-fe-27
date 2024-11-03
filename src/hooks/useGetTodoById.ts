import { useQuery } from '@tanstack/react-query';
import { Todo } from '../types/Todo';

const useGetTodoById = (token: string, id: string) => {
  const { data, isPending } = useQuery<Todo>({
    queryKey: ['todos', id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/todos/${id}`, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });
      const { data: todo } = await response.json();
      return todo as Todo;
    },
  });

  return { data, isPending };
};

export default useGetTodoById;
