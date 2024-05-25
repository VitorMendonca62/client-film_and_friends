import Select from 'react-select';
import { Controller } from 'react-hook-form';

interface IPropsSelect {
  title: string;
  placeholder: string;
  nameInput: string;
  setValue: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}

export default function SelectComponent(props: IPropsSelect) {
  const { title, placeholder, nameInput, options, control, setValue } = props;

  return (
    <div className="flex flex-col py-3">
      <label htmlFor={`${title}}`} className="mb-1 text-fonts text-sm">
        {title}
      </label>
      <Controller
        name={nameInput}
        control={control}
        render={({ field }) => (
          <>
            <Select
              {...field}
              options={options}
              required
              placeholder={placeholder}
              onChange={(option) => field.onChange(option.value)}
              value={options.find((option) => option.value === field.value)}
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: '22px',
                }),
                placeholder: (base) => ({
                  ...base,
                  fontSize: '0.75rem',
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: '#111111',
                }),
                option: (base) => ({
                  ...base,
                  backgroundColor: '#111111',
                  borderRadius: '1rem',
                  margin: '0.25rem',
                  width: '95%',
                  cursor: 'pointer',
                  fontSize: '14px',
                  ':hover': {
                    backgroundColor: 'rgb(37,169,108)',
                  },
                }),
              }}
            />
          </>
        )}
      />

      <span
        data-name={nameInput}
        className="absolute translate-y-[3.75rem] text-xs text-[#F00]"
      ></span>
      <input type="hidden" className="border-red" />
    </div>
  );
}
