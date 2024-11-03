export const getToken = () => {
  const token = localStorage.getItem('accessToken') || null;

  return token;
};
