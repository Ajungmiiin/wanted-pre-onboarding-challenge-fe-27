import { Link, useNavigate } from 'react-router-dom';
import AuthFormInput from './AuthFormInput';
import { useEffect, useState } from 'react';
import { authMode } from '../../types/AuthMode';
import { useAuth } from '../../hooks/useAuth';
import useInput from '../../hooks/useInput';

interface AuthFormProps {
  mode: authMode;
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const navigate = useNavigate();

  let authMode: 'login' | 'create' = mode === 'login' ? 'login' : 'create';

  const { mutate, isPending, error, isError, isSuccess } = useAuth(authMode);

  // Input Value
  const { value: emailValue, onChange: emailValueChangeHandler } = useInput('');
  const { value: passwordValue, onChange: passwordValueChangeHandler } =
    useInput('');

  // Form Validation
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (
      emailValue.includes('@') &&
      emailValue.includes('.') &&
      passwordValue.length >= 8
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [emailValue, passwordValue]);

  // 로그인이나 회원가입에 성공하면 Home 으로 리다이렉트
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  const authFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email: emailValue, password: passwordValue });
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
      {isError && (
        <p className="text-red-400 font-bold px-4 text-lg">{error?.message}</p>
      )}
      <form
        onSubmit={authFormHandler}
        className="flex flex-col gap-4 p-4 w-[600px]"
      >
        <AuthFormInput
          type="text"
          name="user-id"
          id="user-id"
          placeholder="아이디"
          value={emailValue}
          onChange={emailValueChangeHandler}
        />
        <AuthFormInput
          type="password"
          name="user-password"
          id="user-password"
          placeholder="비밀번호"
          value={passwordValue}
          onChange={passwordValueChangeHandler}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-4 rounded-md text-2xl hover:bg-opacity-90 transition-colors disabled:bg-opacity-40 disabled:cursor-not-allowed"
          disabled={!formIsValid || isPending}
        >
          {mode === 'login' ? '로그인' : '회원가입'}
        </button>
      </form>
      <p className="text-right px-4 text-blue-500 font-medium">
        <Link
          to={mode === 'login' ? '/auth?mode=sign-up' : '/auth?mode=login'}
          className="hover:text-blue-700 transition-colors"
        >
          {mode === 'login'
            ? '혹시 아이디가 없으신가요?'
            : '이미 아이디가 있으신가요?'}
        </Link>
      </p>
    </>
  );
};

export default AuthForm;
