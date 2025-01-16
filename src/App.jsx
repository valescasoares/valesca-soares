import './index.css'
import Foto1 from './assets/foto1.png'
import contatoMobile from './assets/CONTATOMOBILE.png'
import contato from './assets/CONTATO.png'
import Main from './component/Main.jsx'
import FeedBacks from './component/FeedBacks.jsx'
import AboutMe from './component/AboutMe.jsx'
import { useState } from 'react'
import Card1 from './assets/cards/1.jpg'
import Card2 from './assets/cards/2.jpg'
import Card3 from './assets/cards/3.jpg'
import Card4 from './assets/cards/4.jpg'
import fb1 from './assets/feedbacks/1.jpg'
import fb2 from './assets/feedbacks/2.jpg'
import fb3 from './assets/feedbacks/3.jpg'
import fb4 from './assets/feedbacks/4.jpg'
import fb5 from './assets/feedbacks/5.jpg'
import fb6 from './assets/feedbacks/6.jpg'

function App() {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      alt: "FeedBacks de clientes",
      image: fb1
    },
    {
      id: 2,
      alt: "FeedBacks de clientes",
      image: fb2
    },
    {
      id: 3,
      alt: "FeedBacks de clientes",
      image: fb3
    },
    {
      id: 4,
      alt: "FeedBacks de clientes",
      image: fb4
    },
    {
      id: 5,
      alt: "FeedBacks de clientes",
      image: fb5
    },
    {
      id: 6,
      alt: "FeedBacks de clientes",
      image: fb6
    }
  ])
  const [categorias, setCategorias] = useState([
    {
      title: "BRIGAS EXCESSIVAS",
      description: "Relacionamentos sólidos são construídos através da boa comunicação. Confrontos e desentendimentos geram desarmonia e sofrimento nas relações, onde os laços correm risco de ter prazo de validade. Na terapia buscaremos compreender a raiz do conflito e como fazer para prevenir e resolvê-los, trazendo para sua relação mais cumplicidade, alegria e leveza. ",
      image: Card1
    },
    {
      title: "TRAIÇÃO",
      description: "A traição em um relacionamento é um dos momentos mais difíceis da vida a dois, a sensação de estar vivendo com um estranho, sentimentos de solidão, revolta e tristeza são experimentados nesse momento. Depois de uma traição você precisa tomar uma decisão, perdoar ou não? continuar ou não? E nesse momento que irei te dar suporte para que você passe por esse momento e tome a sua decisão, para viver sem o peso de uma culpa ou rancor, para que possa construir uma nova vida ou reconstruir seu relacionamento.",
      image: Card2
    },
    {
      title: "CIÚMES E INSEGURANÇAS",
      description: "Alguns dizem que o ciúmes no relacionamento é um tempero, enquanto outros dizem que ele só atrapalha a relação. Em todo caso, sentir-se desconfiado é algo que deixa qualquer pessoa angustiada. Na terapia irei trabalhar de forma individual a melhora na autoestima e a inteligência emocional e com o casal iremos trabalhar crenças e a empatia, para que possam experimentar a sensação de paz e de conforto no relacionamento.",
      image: Card3
    },
    {
      title: "CONFLITOS FAMILIARES",
      description: "Interferências no casamento além de ser algo desrespeitoso é muito prejudicial para ambas as partes, a relação com a família é prejudicada e o relacionamento do casal se desgasta. Na terapia irei guiar para que essa demanda seja resolvida de forma cuidadosa e com maturidade usando sempre uma boa comunicação.",
      image: Card4
    }
    
  ])
  return (
    <div className="w-screen h-auto bg-[#F2F2E7]">
      <div className="w-full h-[800px] max-[1200px]:py-10 max-[1200px]:h-auto rounded-b-[100px] max-[1200px]:rounded-b-[50px] flex px-10 max-[1200px]:px-5 bg-[#686C53] max-[1200px]:flex-col max-[1200px]:items-center">
        <div className='static hidden max-[1200px]:block'>
          <div className='w-full h-[300px] mt-[100px] rounded-br-[100px] rounded-tl-[100px] bg-[#F5F5DC]'></div>
          <img className='w-[380px] h-auto mt-[-500px] max-[450px]:mt-[-420px]' src={Foto1} alt="Valesca-Soares" />
        </div>
        <div className='hidden max-[1200px]:block text-white'>
          <h1 className='font-extrabold text-3xl'>
            Quer fortalecer seu relacionamento e evitar que os problemas se
            agravem?
          </h1>
          <p className='text-2xl mb-10'>
            Através de ferramentas e estratégias eficazes, podemos te ajudar a construir uma relação mais sólida e feliz.
          </p>
          <a className='bg-[#434638] py-1 flex justify-center items-center rounded-[100px] text-2xl font-bold text-[#7AD06D] hover:shadow-md hover:shadow-[#7AD06D]' target='_blank' href="https://wa.me/5511940530360?text=Ol%C3%A1,%20fiquei%20interessado(a)%20em%20seu%20servi%C3%A7o!">
            ENTRE EM CONTATO
            <img className='size-[50px]' src={contatoMobile} alt="Clique-para-contato" />
          </a>
        </div>
        <div className='max-[1200px]:hidden pt-[200px] max-[1200px]:px-2 max-[1200px]:w-screen pl-10 text-white'>
          <h1 className='w-[800px] max-[1200px]:w-screen font-extrabold text-4xl max-[1200px]:text-3xl max-[1200px]:px-2'>
            Quer fortalecer seu relacionamento e evitar que os problemas se
            agravem?
          </h1>
          <p className='w-[750px] max-[700px]:w-screen text-4xl max-[1200px]:text-2xl mb-10 max-[1200px]:px-2'>
            Através de ferramentas e estratégias eficazes, podemos te ajudar a construir uma relação mais sólida e feliz.
          </p>
          <a className='bg-[#434638] py-3 max-[1200px]:py-1 flex justify-center items-center rounded-[100px] text-4xl max-[1200px]:text-2xl font-bold text-[#7AD06D] hover:shadow-md hover:shadow-[#7AD06D]' target='_blank' href="">
            ENTRE EM CONTATO
            <img className='size-[100px] max-[1200px]:size-[50px] ml-5' src={contato} alt="Clique-para-contato" />
          </a>
        </div>
        <div className='max-[1200px]:hidden'>
          <div className='w-[335px] h-[540px] right-[70px] mt-[100px] ml-10 rounded-br-[100px] rounded-tl-[100px] bg-[#F5F5DC]'></div>
          <img className='w-[580px] z-10 top-[-100px] right-[60px] absolute' src={Foto1} alt="Valesca-Soares" />
        </div>
      </div>
      <Main categorias={categorias} />
      <div className="w-[100%] h-[2px] bg-[#023C40]"></div>
      <FeedBacks feedbacks={feedbacks} />
      <div className="w-[100%] h-[2px] bg-[#023C40]"></div>
      <AboutMe />
    </div>
  );
}

export default App;
