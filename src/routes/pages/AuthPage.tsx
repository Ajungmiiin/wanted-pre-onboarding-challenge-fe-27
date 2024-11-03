import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthForm from '../../feature/auth/AuthForm';
import { authMode } from '../../types/AuthMode';
import { getToken } from '../../utils/getToken';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const authMode = searchParams.get('mode');
  const token = getToken();
  useEffect(() => {
    if (token) {
      navigate('/');
    }

    if (authMode !== 'login' && authMode !== 'sign-up') {
      navigate('/auth?mode=login');
    }
  }, []);

  return (
    <section>
      <AuthForm mode={authMode as authMode} />
    </section>
  );
};

export default AuthPage;
