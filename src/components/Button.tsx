interface IButton {
  title: string;
  isBigger: boolean
}

export default function Button(props: IButton){
  return (
    <button className={`bg-white text-black hover:bg-darkGreen hover:text-white font-bold rounded-3xl ${props.isBigger ? "px-10 py-3" : "px-7 py-1 text-sm"}`}>{props.title}</button>
  )
}
