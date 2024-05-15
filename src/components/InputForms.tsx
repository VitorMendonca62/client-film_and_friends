type TypesInput = 'text' | 'password' | 'email';

interface IPropsInputForms {
  title: string;
  type: TypesInput;
  placeholder: string;
  nameInput: string;
}

export default function InputForms(props: IPropsInputForms) {
  const { title, type, placeholder, nameInput } = props;
  return (
    <div className="flex flex-col py-2">
      <label htmlFor={`${title}-${type}`} className="mb-1 text-fonts text-sm">{title}</label>
      <input id={`${title}-${type}`} type={type} placeholder={placeholder} name={nameInput}  className="rounded-3xl p-2 w-72 text-xs border-solid border-transparent focus:border-darkGreen border-2  outline-0"/>
    </div>
  );
}
