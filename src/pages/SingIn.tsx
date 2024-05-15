import { Link } from 'react-router-dom';
import InputForms from '../components/InputForms';
import Button from '../components/Button';

export default function SingIn() {
  return (
    <main className="pt-16 bg-black h-screen flex items-center justify-center">
      <section className="-translate-y-16 bg-lightBlack px-12 py-3 flex flex-col items-center rounded-3xl">
        <h3 className="font-bold text-white text-xl">Login</h3>
        <form>
          <InputForms
            title={'Email'}
            nameInput={"email"}
            type={'email'}
            placeholder={'exemple@exemple.com'}
          />
          <InputForms
            title={'Senha'}
            nameInput={"password"}
            type={'password'}
            placeholder={'password'}
          />
          <div className="flex justify-center pt-7">
            <Button title="Entrar" isBigger={false} />
          </div>
        </form>
        <Link
          to=""
          className="text-fonts w-full align-center text-[0.7rem] hover:text-darkGreen hover:underline -translate-y-16"
        >
          Esqueceu a senha?
        </Link>
        <Link to="/singup" className='text-center leading-tight text-white hover:text-darkGreen hover:underline text-xs mt-1'>Não tem uma conta? <br /> Cadastra-se</Link>
        <h4 className='font-bold text-white text-lg mt-4'>Faça login também com:</h4>
     
      </section>
    </main>
  );
}
