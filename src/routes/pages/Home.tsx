import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import useGetTodos from '../../hooks/useGetTodos';

import { getToken } from '../../utils/getToken';
import TodoList from '../../feature/todo/TodoList';
import { Todo } from '../../types/Todo';
import LogoutButton from '../../feature/button/LogoutButton';

const Home = () => {
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth?mode=login');
    }
  }, []);

  const { data, isPending } = useGetTodos(token as string);

  return (
    <>
      <section className="min-w-[1024px] text-center p-4">
        <div className="p-4 border-b mb-4 relative">
          <h3 className="text-2xl text-left">ToDoS</h3>
          <div className="right-4 top-[50%] translate-y-[-50%] absolute inline-flex gap-4">
            <LogoutButton />
            <Link
              to={'/add'}
              className=" px-4 py-2  text-white bg-blue-500 text-lg rounded-md hover:bg-blue-600 transition-colors"
            >
              추가하기
            </Link>
          </div>
        </div>

        <div className="flex min-h-[500px] gap-4">
          {!isPending && data!.length === 0 && (
            <p className="w-full">할 일이 없습니다.</p>
          )}
          {!isPending && data!.length > 0 && (
            <TodoList todoList={data as Todo[]} />
          )}
          {<Outlet />}
        </div>
      </section>
    </>
  );
};

export default Home;
