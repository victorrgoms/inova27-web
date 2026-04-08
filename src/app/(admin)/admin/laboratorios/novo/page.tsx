'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save } from 'lucide-react';

export default function NovoLaboratorio() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // intercepta o envio do formulário para tratar os dados antes de mandar para a api
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    const dadosLaboratorio = {
      nome: formData.get('nome'),
      area: formData.get('area'),
      natureza: formData.get('natureza'),
      vinculado: formData.get('vinculado'),
      descricao: formData.get('descricao'),
    };

    console.log('dados que serão enviados para a api:', dadosLaboratorio);

    setTimeout(() => {
      setIsLoading(false);
      // redireciona o user de volta para a tabela após salvar
      router.push('/admin/laboratorios');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      <div className="flex items-center gap-4">
        <Link href="/admin/laboratorios">
          <Button variant="outline" size="icon" className="border-slate-200">
            <ArrowLeft size={18} className="text-slate-600" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Novo Laboratório</h1>
          <p className="text-sm text-slate-500">Preencha os dados para cadastrar um novo espaço de pesquisa.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 space-y-8">
        
        {/* divide os campos menores em duas colunas em telas médias e grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="nome">Nome do Laboratório</Label>
            <Input 
              id="nome" 
              name="nome" 
              placeholder="Ex: LARCES" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Área do Conhecimento</Label>
            <Input 
              id="area" 
              name="area" 
              placeholder="Ex: Ciências Exatas e da Terra" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="natureza">Natureza</Label>
            <Input 
              id="natureza" 
              name="natureza" 
              placeholder="Ex: Pesquisa e Ensino" 
              required 
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="vinculado">Instituição/Centro Vinculado</Label>
            <Input 
              id="vinculado" 
              name="vinculado" 
              placeholder="Ex: Centro de Ciência e Tecnologia (CCT)" 
              required 
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="descricao">Descrição Breve</Label>
            <Textarea 
              id="descricao" 
              name="descricao" 
              placeholder="Descreva as principais atividades e objetivos do laboratório..." 
              className="min-h-[120px]"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-slate-100">
          <Link href="/admin/laboratorios">
            <Button type="button" variant="ghost">Cancelar</Button>
          </Link>
          <Button 
            type="submit" 
            className="bg-purple-700 hover:bg-purple-800 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Salvando...' : (
              <>
                <Save size={16} className="mr-2" />
                Salvar Laboratório
              </>
            )}
          </Button>
        </div>

      </form>
    </div>
  );
}