import { useEffect, useState } from 'react';
import useGetTodoById from '../../hooks/useGetTodoById';
import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import TodoForm from '../../feature/todo/TodoForm';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';

const TodoDetail = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const token = useRouteLoaderData('loot') as string;
  const { id } = useParams();
  const { data: todo, isPending } = useGetTodoById(token, id as string);

  const { mutate: updateTodo, isPending: isUpdatePending } = useUpdateTodo(
    token,
    id as string
  );

  const { mutate: deleteTodo, isPending: isDeletePending } = useDeleteTodo(
    token,
    id as string
  );

  useEffect(() => {
    setEdit(false);
  }, [id]);

  const openEditForm = () => {
    setEdit(true);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoData = {
      title: formData.get('todo-title') as string,
      content: (formData.get('todo-content') as string) || '',
    };
    updateTodo(todoData);

    setEdit(false);
  };

  const deleteTodoHandler = () => {
    deleteTodo();
    navigate('/');
  };

  return (
    <div className="w-full border rounded-lg p-4">
      {!edit ? (
        isPending ? (
          <p>불러오는 중</p>
        ) : (
          <>
            <h3 className="px-4 pb-4 text-2xl border-b">{todo!.title}</h3>
            <p className="h-[340px] mb-4 p-4 text-xl">{todo!.content}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={deleteTodoHandler}
                disabled={isDeletePending}
                className="border py-4 w-full rounded-md text-lg text-white bg-red-500 font-medium"
              >
                삭제하기
              </button>
              <button
                onClick={openEditForm}
                className="border py-4 w-full rounded-md text-lg text-white bg-blue-500 font-medium"
              >
                수정하기
              </button>
            </div>
          </>
        )
      ) : (
        <TodoForm
          onSubmit={onSubmit}
          updateTitle={todo!.title}
          updateContent={todo!.content}
          isPending={isUpdatePending}
          closeEdit={setEdit}
        />
      )}
    </div>
  );
};

export default TodoDetail;
