import Image from 'next/image';
import Link from 'next/link';

export function ExploreSection() {
  return (
    <div className="flex flex-col w-full">
      
      {/* seção principal */}
      <section className="relative w-full py-24 md:py-32 flex flex-col justify-center items-center text-white overflow-hidden">
        
        <Image 
          src="/imagens/imagem-agin2.png" 
          alt="Pesquisa na UECE" 
          fill
          className="object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* conteúdo */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          
          <h2 className="text-3xl md:text-3xl font-bold mb-12 drop-shadow-lg">
            Aqui você encontra:
          </h2>

          {/* 1 coluna no celular, 2 colunas no pc */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            {/* cartão de tecnologias */}
            <Link href="/tecnologias" className="group">
              <div className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 group-hover:shadow-2xl flex flex-col justify-center items-center text-center cursor-pointer">
                <h3 className="text-2xl font-bold text-purple-100 mb-4">
                  Tecnologias
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Resultados de pesquisas transformados em soluções com impacto para a sociedade.
                </p>
              </div>
            </Link>

            {/* cartão de laboratórios */}
            <Link href="/laboratorios" className="group">
              <div className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20 group-hover:shadow-2xl flex flex-col justify-center items-center text-center cursor-pointer">
                <h3 className="text-2xl font-bold text-purple-100 mb-4">
                  Laboratórios
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  Espaços de pesquisa e inovação que fortalecem o desenvolvimento científico e social.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <div className="w-full bg-gray-100 py-12 flex justify-center items-center px-4">
        <a 
          href="https://www.uece.br/agin/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 text-center"
        >
          Acesse nosso site institucional
        </a>
      </div>
      
    </div>
  );
}