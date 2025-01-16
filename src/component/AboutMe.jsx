import Foto3 from "../assets/foto3.png";

export default function AboutMe() {
  return (
    <div className="w-full h-auto pb-[200px]">
      <section className="flex justify-center items-center mt-[100px] max-[1200px]:hidden">
        <div>
          <h3 className="text-4xl text-center">
            Olá, sou <strong className="text-5xl">Valesca Soares</strong>
          </h3>
          <h1 className="text-9xl font-bold text-[#686C53] drop-shadow-2xl">
            Psicóloga
          </h1>
          <div className="w-full h-[5px] mt-6 bg-[#00B89F]"></div>
          <p className="w-[600px] text-justify text-3xl my-5">
            Sou psicóloga, casada e mãe de dois filhos. Minha história pessoal e
            profissional me levou a acreditar profundamente no poder
            transformador de um relacionamento saudável e no valor da família
            como base para uma vida plena e equilibrada.
          </p>
        </div>
        <div>
          <img className="mt-[-200px]" src={Foto3} alt="Valesca-Soares" />
          <div className="w-[350px] h-[400px] bg-[#686C53] rounded-br-[100px] rounded-tl-[100px] mt-[-410px] ml-11"></div>
        </div>
      </section>
      <section className="hidden max-[1200px]:block max-[1200px]:flex-col max-[1200px]:items-center ">
        <div className="mt-11">
          <img className="mt-[-200px]" src={Foto3} alt="Valesca-Soares" />
          <div className="w-full h-[400px] bg-[#686C53] rounded-br-[100px] rounded-tl-[100px] mt-[-410px]"></div>
        </div>
        <div className="mt-11">
          <h3 className="text-2xl text-center">
            Olá, sou <strong className="text-3xl">Valesca Soares</strong>
          </h3>
          <h1 className="text-7xl font-bold text-center text-[#686C53] drop-shadow-2xl">
            Psicóloga
          </h1>
          <div className="w-full h-[5px] mt-6 bg-[#00B89F]"></div>
          <p className="w-full px-6 text-justify text-2xl my-5">
            Sou psicóloga, casada e mãe de dois filhos. Minha história pessoal e
            profissional me levou a acreditar profundamente no poder
            transformador de um relacionamento saudável e no valor da família
            como base para uma vida plena e equilibrada.
          </p>
        </div>
      </section>
      <div className="px-[220px] text-justify max-[1200px]:px-6">
        <p className="text-3xl mt-5 max-[1200px]:text-2xl">
          Como terapeuta de casais, vejo diariamente que um relacionamento feliz
          não é aquele sem conflitos ou problemas, mas sim aquele em que ambos
          os parceiros escolhem, dia após dia, lutar para estarem juntos. Um
          relacionamento saudável é construído na parceria, no respeito e na
          disposição de compreender o outro, mesmo nas diferenças.
          <br />
          <br />
          Meu propósito é ajudar casais a resgatarem a conexão e a redescobrirem
          a leveza que um relacionamento pode trazer, mesmo em meio aos
          desafios. Acredito que, com as ferramentas certas, é possível
          transformar conflitos em oportunidades de crescimento e criar uma
          relação onde ambos se sintam valorizados, ouvidos e amados. <br />
          <br />
          Se você também acredita que a felicidade está em construir juntos e
          deseja fortalecer a sua relação, estou aqui para caminhar ao seu lado
          nessa jornada.
        </p>
      </div>
    </div>
  );
}
