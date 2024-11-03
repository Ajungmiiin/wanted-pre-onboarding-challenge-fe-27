import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useState } from 'react';

interface todoFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  updateTitle?: string;
  updateContent?: string;
  isPending?: boolean;
}

const TodoForm = ({
  onSubmit,
  updateTitle,
  updateContent,
  isPending,
}: todoFormProps) => {
  const navigate = useNavigate();

  const { value: title, onChange: titleChangeHandler } = useInput(
    updateTitle || ''
  );
  const [content, setContent] = useState(updateContent || '');

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const closeForm = () => {
    navigate('/');
  };

  return (
    <form className="w-full h-full" onSubmit={onSubmit}>
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        placeholder="할 일을 입력하세요."
        className="border p-4 text-center w-full rounded-lg outline-none focus:border-gray-400 text-xl transition-colors mb-4"
        value={title}
        onChange={titleChangeHandler}
      />
      <textarea
        name="todo-content"
        id="todo-content"
        className="resize-none w-full border min-h-[340px] p-4 text-xl rounded-lg outline-none focus:border-gray-400  transition-colors mb-4 "
        value={content}
        onChange={contentChangeHandler}
      ></textarea>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={closeForm}
          className="border w-full py-4 rounded-md text-xl hover:bg-gray-50 transition-colors"
        >
          닫기
        </button>
        <button
          disabled={isPending || title.length === 0}
          className="bg-blue-500 text-white w-full py-4 rounded-md text-xl hover:bg-blue-600 transition-colors disabled:bg-opacity-50"
        >
          {updateTitle ? '수정하기' : '추가하기'}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
