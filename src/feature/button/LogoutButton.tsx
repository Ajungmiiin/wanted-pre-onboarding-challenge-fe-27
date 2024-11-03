import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('accessToken');

    navigate('/auth');
  };

  return (
    <button
      onClick={logoutHandler}
      className="text-lg bg-red-400 text-white py-2 px-4 rounded-md"
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
