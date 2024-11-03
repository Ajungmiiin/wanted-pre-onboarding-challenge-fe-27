import { useEffect } from 'react';
import TodoForm from '../../feature/todo/TodoForm';
import { useAddTodo } from '../../hooks/useAddTodo';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/getToken';

const AddTodo = () => {
  const navigate = useNavigate();
  const token = getToken() as string;

  useEffect(() => {
    if (!token) navigate('/auth');
  }, []);

  const { mutate, isPending, isError, isSuccess } = useAddTodo(token);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoData = {
      title: formData.get('todo-title') as string,
      content: (formData.get('todo-content') as string) || '',
    };
    mutate(todoData);
  };

  useEffect(() => {
    if (!isError && isSuccess) {
      navigate('/');
    }
  }, [isError, isSuccess, navigate]);

  return (
    <>
      <TodoForm onSubmit={handleSubmit} isPending={isPending} />
      {isError && <p className="py-4 text-red-500 text-xl">내용이 없습니다.</p>}
    </>
  );
};

export default AddTodo;
