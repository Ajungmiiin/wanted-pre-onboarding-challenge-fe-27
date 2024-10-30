import { Link } from 'react-router-dom';
import AuthFormInput from './AuthFormInput';

const AuthForm = ({ mode }: { mode: string }) => {
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="p-4">
        <Link to="/" className="place-items-center text-blue-500 font-normal">
          처음으로
        </Link>
        <h3 className="text-2xl text-center">
          {mode === 'login' ? '로그인' : '회원가입'}
        </h3>
      </div>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-4 w-[700px] p-4"
      >
        <AuthFormInput
          type="text"
          name="user-id"
          id="user-id"
          placeholder="아이디"
        />
        <AuthFormInput
          type="text"
          name="user-password"
          id="user-password"
          placeholder="비밀번호"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-4 rounded-md text-2xl hover:bg-opacity-90 transition-colors"
        >
          {mode === 'login' ? '로그인' : '회원가입'}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
