import { useState } from 'react';

interface AuthFormInputProps {
  placeholder: string;
  type: string;
  name: string;
  id: string;
}

const AuthFormInput = ({ placeholder, type, name, id }: AuthFormInputProps) => {
  const [value, setValue] = useState<string>('');

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      className="transition-colors border p-4 outline-none rounded-md text-xl focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={inputChangeHandler}
    />
  );
};

export default AuthFormInput;
