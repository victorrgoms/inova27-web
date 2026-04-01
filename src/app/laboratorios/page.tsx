'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

import agrarias from '@/data/laboratorios/laboratorios-ciencias-agrarias.json';
import biologicas from '@/data/laboratorios/laboratorios-ciencias-biologicas.json';
import saude from '@/data/laboratorios/laboratorios-ciencias-da-saude.json';
import exatas from '@/data/laboratorios/laboratorios-ciencias-exatas-e-da-terra.json';
import humanas from '@/data/laboratorios/laboratorios-ciencias-humanas.json';
import sociais from '@/data/laboratorios/laboratorios-ciencias-sociais-aplicadas.json';

const areasDisponiveis = [
  "Ciências Agrárias",
  "Ciências Biológicas",
  "Ciências da Saúde",
  "Ciências Exatas e da Terra",
  "Ciências Humanas",
  "Ciências Sociais Aplicadas"
];

const formatarTexto = (texto?: string) => {
  if (!texto || texto === "-") return "Não informada";
  const limpo = String(texto).trim().replace(/\.$/, '');
  return limpo.charAt(0).toUpperCase() + limpo.slice(1);
};

// agrupa todos os laboratórios em um array
const laboratoriosData = [
  ...agrarias.map(lab => ({ ...lab, areaNorm: "Ciências Agrárias" })),
  ...biologicas.map(lab => ({ ...lab, areaNorm: "Ciências Biológicas" })),
  ...saude.map(lab => ({ ...lab, areaNorm: "Ciências da Saúde" })),
  ...exatas.map(lab => ({ ...lab, areaNorm: "Ciências Exatas e da Terra" })),
  ...humanas.map(lab => ({ ...lab, areaNorm: "Ciências Humanas" })),
  ...sociais.map(lab => ({ ...lab, areaNorm: "Ciências Sociais Aplicadas" }))
].map((lab, index) => ({
  ...lab,
  // combina o id existente com o índice do loop para evitar duplicações vindas dos jsons
  id: lab.id ? `${lab.id}-${index}` : `lab-gerado-${index}`,
  naturezaNorm: formatarTexto(lab.natureza)
}));

const naturezasDisponiveis = Array.from(new Set(laboratoriosData.map(lab => lab.naturezaNorm))).sort();

export default function LaboratoriosPage() {
  const [buscaTexto, setBuscaTexto] = useState('');
  const [areasSelecionadas, setAreasSelecionadas] = useState<string[]>([]);
  const [naturezasSelecionadas, setNaturezasSelecionadas] = useState<string[]>([]);

  const toggleFiltro = (valor: string, listaAtual: string[], setLista: (novaLista: string[]) => void) => {
    if (listaAtual.includes(valor)) {
      setLista(listaAtual.filter(item => item !== valor)); 
    } else {
      setLista([...listaAtual, valor]); 
    }
  };

  const laboratoriosFiltrados = laboratoriosData.filter((lab) => {
    const nome = lab.nome || '';
    const bateTexto = nome.toLowerCase().includes(buscaTexto.toLowerCase());
    
    const bateArea = areasSelecionadas.length === 0 || areasSelecionadas.includes(lab.areaNorm);
    const bateNatureza = naturezasSelecionadas.length === 0 || naturezasSelecionadas.includes(lab.naturezaNorm);
    
    return bateTexto && bateArea && bateNatureza;
  });

  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-50">
      
      <section className="bg-purple-900 text-white pt-24 pb-12 px-6 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Laboratórios</h1>
        <p className="text-purple-200 mb-8 max-w-3xl">
          Encontre o que procura de forma simples! Digite aqui uma palavra-chave para localizar laboratórios da Universidade. Exemplos: “energia solar”, “biotecnologia”, “laboratório de química”.
        </p>
        
        <div className="flex w-full max-w-xl bg-white rounded-md overflow-hidden shadow-md">
          <input 
            type="text" 
            value={buscaTexto}
            onChange={(e) => setBuscaTexto(e.target.value)}
            placeholder="Pesquise por nome do laboratório..." 
            className="w-full px-6 py-3 rounded-l-md text-black focus:outline-none" 
          />
          <button className="bg-orange-500 px-6 py-3 rounded-r-md hover:bg-orange-600 transition-colors">
            🔍
          </button>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg text-purple-900">Filtro</h2>
              <button 
                onClick={() => { setAreasSelecionadas([]); setNaturezasSelecionadas([]); setBuscaTexto(''); }}
                className="text-sm text-gray-500 hover:text-orange-500 transition-colors cursor-pointer hover:underline" 
              >
                Limpar filtros
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3 text-sm">Natureza do Laboratório</h3>
              <div className="space-y-2">
                {naturezasDisponiveis.map(nat => (
                  <label key={nat} className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={naturezasSelecionadas.includes(nat)}
                      onChange={() => toggleFiltro(nat, naturezasSelecionadas, setNaturezasSelecionadas)}
                      className="rounded text-purple-600 focus:ring-purple-500 "
                    />
                    <span className="text-sm text-gray-600">{nat}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="my-4 border-gray-100" />

            <div>
              <h3 className="font-semibold text-gray-700 mb-3 text-sm">Área do Conhecimento</h3>
              <div className="space-y-2">
                {areasDisponiveis.map(area => (
                  <label key={area} className="flex items-center space-x-2 ">
                    <input 
                      type="checkbox" 
                      checked={areasSelecionadas.includes(area)}
                      onChange={() => toggleFiltro(area, areasSelecionadas, setAreasSelecionadas)}
                      className="rounded text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-600">{area}</span>
                  </label>
                ))}
              </div>
            </div>
            
          </div>
        </aside>

        <main className="w-full md:w-2/3 lg:w-3/4">
          <div className="mb-6 text-gray-600 font-medium">
            {laboratoriosFiltrados.length} resultados encontrados
          </div>

          {/* Container com rolagem */}
          <div className="space-y-4 max-h-[90vh] overflow-y-auto pr-2 pb-4">
            {laboratoriosFiltrados.map(lab => (
              <Card key={lab.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{lab.nome}</h3>
                    <div className="flex flex-col flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-semibold text-gray-700">Área:</span> {lab.areaNorm}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-semibold text-gray-700">Natureza:</span> {lab.naturezaNorm}
                      </span>
                      {lab.vinculado && (
                        <span className="items-center gap-1">
                          <span className="font-semibold text-gray-700 ">Vinculado a:</span> {lab.vinculado}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition-colors w-full md:w-auto whitespace-nowrap">
                    Ver detalhes
                  </button>

                </CardContent>
              </Card>
            ))}

            {laboratoriosFiltrados.length === 0 && (
              <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
                Nenhum laboratório encontrado com os filtros selecionados.
              </div>
            )}
          </div>
        </main>

      </section>
    </div>
  );
}