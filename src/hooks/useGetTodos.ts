import { useQuery } from '@tanstack/react-query';
import { Todo } from '../types/Todo';

const useGetTodos = (token: string) => {
  const { data, isPending } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8080/todos', {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });
      const { data: todoList } = await response.json();
      return todoList as Todo[];
    },
  });

  return { data, isPending };
};

export default useGetTodos;
