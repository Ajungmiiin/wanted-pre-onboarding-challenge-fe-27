import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex flex-col gap-4">
      <Link
        to="/auth?mode=login"
        className="bg-blue-500 text-white w-[300px] text-center py-4 text-2xl rounded-xl hover:bg-opacity-90 transition-colors"
      >
        로그인
      </Link>
      <Link
        to="/auth?mode=sign-up"
        className="bg-blue-500 text-white w-[300px] text-center py-4 text-2xl rounded-xl hover:bg-opacity-90 transition-colors"
      >
        회원가입
      </Link>
    </section>
  );
};

export default Home;
