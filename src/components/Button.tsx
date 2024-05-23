// FAZER O BUTTON DISABLED


import { useRef } from 'react';

interface IButton {
  title: string;
  isBigger: boolean;
  type: 'submit' | 'reset' | 'button' | undefined;
  buttonIsDisabled?: boolean;
}

export default function Button(props: IButton) {
  const buttonRef = useRef(null);

  if (buttonRef.current && props.buttonIsDisabled != undefined) {
    (buttonRef.current as HTMLButtonElement).disabled = props.buttonIsDisabled;
  }

  return (
    <button
      className={`bg-white text-black hover:bg-darkGreen hover:text-white font-bold rounded-3xl ${
        props.isBigger ? 'px-10 py-3' : 'px-7 py-1 text-sm'
      }`}
      type={props.type}
      ref={buttonRef}
    >
      {props.title}
    </button>
  );
}
