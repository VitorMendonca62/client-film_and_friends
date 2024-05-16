type TypesInput = 'text' | 'password' | 'email';

interface IPropsInputForms {
  title: string;
  type: TypesInput;
  placeholder: string;
  nameInput: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export default function InputForms(props: IPropsInputForms) {
  const { title, type, placeholder, nameInput, register } = props;
  return (
    <div className="flex flex-col py-3">
      <label htmlFor={`${title}-${type}`} className="mb-1 text-fonts text-sm">
        {title}
      </label>
      <input
        id={`${title}-${type}`}
        type={type}
        placeholder={placeholder}
        name={nameInput}
        className="rounded-3xl p-2 w-72 text-xs border-solid border-transparent focus:border-darkGreen border-2  outline-0"
        {...register(nameInput.toString())}
      />
      <span name={nameInput} className="absolute translate-y-[3.75rem] text-xs text-[#F00]"></span>
    </div>
  );
}
