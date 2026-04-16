"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function HeroSearch() {
  // guarda o que o cara digitou no input
  const [query, setQuery] = useState("");
  const router = useRouter();

  // segura o reload da pagina e faz o redirecionamento via next
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/busca?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* imagem de fundo */}
      <Image
        src="/imagens/purple.jpg"
        alt="Laboratório da UECE"
        fill
        className="object-cover z-0 brightness-80"
        priority
        loading="eager"
      />

      

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* conteudo que fica por cima */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">

        <Image
          src="/imagens/Marca_aginhorizontal_fundoazul.png"
          alt="Marca da UECE"
          width={500}
          height={200}
          className="-mb-10"
          loading="eager"
        />

        <h1 className="text-lg font-medium mb-6 w-2/3">
        Explore as mais diversas informações sobre inovação 
        e empreendedorismo na Universidade Estadual do Ceará
        </h1>

        <form onSubmit={handleSearch} className="flex w-full max-w-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquise Aqui"
            className="w-full px-4 py-2 rounded-l-full text-black focus:outline-none bg-white"
          />
          <button
            type="submit"
            className="bg-orange-500 px-4 py-2 rounded-r-full hover:bg-orange-700 transition-colors cursor-pointer"
          >
            Buscar
          </button>
        </form>
        <p className="mt-4 text-sm font-medium max-w-3xl">
          Você pode navegar usando as abas específicas ou fazer uma busca geral utilizando palavras-chave.
        </p>
        
      </div>
    </section>
  );
}
