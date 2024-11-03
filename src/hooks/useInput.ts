import { useCallback, useState } from 'react';

const useInput = (initState: string) => {
  const [value, setValue] = useState(initState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  }, []);

  return {
    value,
    onChange,
  };
};

export default useInput;
