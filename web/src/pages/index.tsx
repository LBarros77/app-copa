import Image from 'next/image'
import webPreviewImg from '../assets/app-preview-cellphone.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from "../assets/icon-check.png";
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react'

interface HomeProps {
  pollCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
  const [pollTitle, setPollTitle] = useState('')

  async function createPoll(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post('/polls', {
        title: pollTitle
      })

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      alert('Bolão criado com sucesso, o códico foi copiado para área de transferência!');
      setPollTitle('')
    } catch (err) {
      console.log(err);
      alert('Falha ao criar o bolão, tente novamente!')
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        
        <h1 className="mt-14 text-white text-5xl font-bold loading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        
        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.userCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form onSubmit={createPoll} className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text"
            required
            placeholder="Qual o nome do seu bolão?"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit">
              Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar o seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-4">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span>+{props.pollCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />
          
          <div className="flex items-center gap-4">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span>+{props.guessCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>
        </div>

      </main>

      <Image
        src={webPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
        quality={100}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  const [pollCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('polls/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])

  return {
    props: {
      pollCount: pollCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  }
}
