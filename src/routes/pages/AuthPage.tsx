import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthForm from '../../feature/auth/AuthForm';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const authMode = searchParams.get('mode');

  useEffect(() => {
    if (authMode !== 'login' && authMode !== 'sign-up') {
      navigate('/');
    }
  }, []);

  return (
    <section>
      <AuthForm mode={authMode as string} />
    </section>
  );
};

export default AuthPage;
