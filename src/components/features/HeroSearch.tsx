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
        src="/imagens/imagem-agin1.png"
        alt="Laboratório da UECE"
        fill
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* conteudo que fica por cima */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
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
            className="bg-orange-500 px-4 py-2 rounded-r-full hover:bg-orange-600 transition-colors cursor-pointer"
          >
            🔍
          </button>
        </form>
        <h2 className="mt-4 text-sm font-semibold max-w-2xl">
          Coloque aqui a palavra-chave que você deseja pesquisar sobre as
          tecnologias ou laboratórios da UECE.
        </h2>
      </div>
    </section>
  );
}
