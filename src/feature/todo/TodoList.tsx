import { Todo } from '../../types/Todo';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList }: { todoList: Todo[] }) => {
  return (
    <ul className="w-full max-h-[500px] overflow-y-scroll divide-y-2 border rounded-lg">
      {todoList!.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
