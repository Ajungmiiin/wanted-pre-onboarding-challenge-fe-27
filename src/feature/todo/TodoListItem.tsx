import { NavLink } from 'react-router-dom';
import { Todo } from '../../types/Todo';

const TodoListItem = ({ todo }: { todo: Todo }) => {
  return (
    <li key={todo.id} className="text-xl hover:bg-gray-100">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'block bg-gray-100 py-4' : 'block  py-4 transition-colors'
        }
        to={`/${todo.id}`}
      >
        {todo.title}
      </NavLink>
    </li>
  );
};

export default TodoListItem;
