'use client';

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from 'lucide-react';

// importa os jsons da pasta de tecnologias
import desenhos from '@/data/tecnologias/desenhos-industriais.json';
import invencao from '@/data/tecnologias/patentes-invencao.json';
import utilidade from '@/data/tecnologias/patentes-utilidade.json';
import programas from '@/data/tecnologias/programas-computadores.json';
import Link from 'next/link';

// mesma função de limpeza usada na área pública
const formatarTexto = (texto?: string) => {
  if (!texto || texto === "-") return "Não informada";
  const limpo = String(texto).trim().replace(/\.$/, '');
  return limpo.charAt(0).toUpperCase() + limpo.slice(1);
};

const tecnologiasData = [
  ...desenhos.map(item => ({ ...item, tipoTecnologia: "Desenho Industrial" })),
  ...invencao.map(item => ({ ...item, tipoTecnologia: "Patente de Invenção" })),
  ...utilidade.map(item => ({ ...item, tipoTecnologia: "Patente de Modelo de Utilidade" })),
  ...programas.map(item => ({ ...item, tipoTecnologia: "Programa de Computador" }))
].map((item, index) => ({
  ...item,
  id: item.id ? `${item.id}-${index}` : `tec-gerada-${index}`,
  instituicaoNorm: formatarTexto(item.instituicao)
}));

export default function AdminTecnologias() {
  const [busca, setBusca] = useState('');

  // filtra os resultados com base no texto digitado no input de busca
  const filtrados = tecnologiasData.filter(item =>
    (item.nome || '').toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Gerenciar Tecnologias</h1>
        <Link href="/admin/tecnologias/novo">
          <Button className="bg-purple-700 hover:bg-purple-800 text-white flex items-center gap-2">
            <Plus size={16} />
            Nova Tecnologia
          </Button>
        </Link>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <Input
          placeholder="Buscar por nome da tecnologia..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="font-semibold text-slate-700">Nome</TableHead>
              <TableHead className="font-semibold text-slate-700">Tipo</TableHead>
              <TableHead className="font-semibold text-slate-700">Instituição</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtrados.length > 0 ? (
              filtrados.map((item) => (
                <TableRow key={item.id} className="hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-900 max-w-md truncate" title={item.nome}>
                    {item.nome}
                  </TableCell>
                  <TableCell className="text-slate-600 whitespace-nowrap">{item.tipoTecnologia}</TableCell>
                  <TableCell className="text-slate-600 max-w-[200px] truncate" title={item.instituicaoNorm}>
                    {item.instituicaoNorm}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-700 border-slate-200">
                        <Pencil size={16} />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 border-slate-200">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-slate-500">
                  Nenhuma tecnologia encontrada.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}