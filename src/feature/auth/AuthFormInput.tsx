interface AuthFormInputProps {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthFormInput = ({
  placeholder,
  type,
  name,
  id,
  onChange,
  value,
}: AuthFormInputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="transition-colors border p-4 outline-none rounded-md text-xl focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthFormInput;
