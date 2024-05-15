import { Link } from 'react-router-dom';
import InputForms from '../components/InputForms';
import Button from '../components/Button';

export default function SingUp() {
  return (
    <main className="pt-16 bg-black h-screen flex items-center justify-center">
      <section className="-translate-y-16 bg-lightBlack px-12 py-3 flex flex-col items-center rounded-3xl">
        <h3 className="font-bold text-white text-xl">Cadastro</h3>
        <form>
          <InputForms
            title={'Nome'}
            type={'text'}
            nameInput={'name'}
            placeholder={'Vitor Mendonça'}
          />
          <InputForms
            title={'Apelido'}
            type={'text'}
            nameInput={'username'}
            placeholder={'VitorMendonca62'}
          />
          <InputForms
            title={'Email'}
            type={'email'}
            nameInput={'email'}
            placeholder={'exemple@exemple.com'}
          />
          <InputForms
            title={'Senha'}
            type={'password'}
            nameInput={'password'}
            placeholder={'password'}
          />
          <InputForms
            title={'Confirmar enha'}
            type={'password'}
            nameInput={'confirmPassword'}
            placeholder={'password'}
          />
          <div className="flex justify-center pt-7">
            <Button title="Cadastrar" isBigger={false} />
          </div>
        </form>
        <Link
          to="/singin"
          className="text-center leading-tight text-white hover:text-darkGreen hover:underline text-xs mt-6"
        >
          Já tem uma conta? <br /> Faça login
        </Link>
      </section>
    </main>
  );
}
