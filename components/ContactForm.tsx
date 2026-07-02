'use client';

import { useEffect, useState } from 'react';
import { courses } from '@/data/courses';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  municipio: string;
  cargo: string;
  curso: string;
  mensagem: string;
}

const initialForm: FormData = {
  nome: '',
  email: '',
  telefone: '',
  municipio: '',
  cargo: '',
  curso: '',
  mensagem: '',
};

interface ContactFormProps {
  preselectedCourse?: string;
}

export default function ContactForm({ preselectedCourse }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setForm((prev) => ({ ...prev, curso: preselectedCourse }));
    }
  }, [preselectedCourse]);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.nome.trim()) newErrors.nome = 'Nome obrigatório';
    if (!form.email.trim()) newErrors.email = 'E-mail obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'E-mail inválido';
    if (!form.telefone.trim()) newErrors.telefone = 'Telefone obrigatório';
    if (!form.municipio.trim()) newErrors.municipio = 'Município/Instituição obrigatório';
    if (!form.mensagem.trim()) newErrors.mensagem = 'Mensagem obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-green-100 rounded-2xl shadow-sm p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">Mensagem enviada!</h3>
        <p className="text-gray-600 mb-6">
          Recebemos sua mensagem. Nossa equipe entrará em contato em breve.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="px-6 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-accent transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-2.5 border rounded-xl text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition ${
      hasError ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white focus:border-brand-accent'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-sm font-medium text-brand-dark">Nome completo *</label>
          <input type="text" name="nome" id="nome" value={form.nome} onChange={handleChange} autoComplete="name" className={inputCls(!!errors.nome)} placeholder="Seu nome completo" />
          {errors.nome && <span className="text-xs text-red-600">{errors.nome}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-brand-dark">E-mail *</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange} autoComplete="email" className={inputCls(!!errors.email)} placeholder="seu@email.com" />
          {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefone" className="text-sm font-medium text-brand-dark">Telefone / WhatsApp *</label>
          <input type="tel" name="telefone" id="telefone" value={form.telefone} onChange={handleChange} autoComplete="tel" className={inputCls(!!errors.telefone)} placeholder="(00) 00000-0000" />
          {errors.telefone && <span className="text-xs text-red-600">{errors.telefone}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="municipio" className="text-sm font-medium text-brand-dark">Município / Instituição *</label>
          <input type="text" name="municipio" id="municipio" value={form.municipio} onChange={handleChange} className={inputCls(!!errors.municipio)} placeholder="Ex: Prefeitura de São Paulo" />
          {errors.municipio && <span className="text-xs text-red-600">{errors.municipio}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cargo" className="text-sm font-medium text-brand-dark">Cargo</label>
        <input type="text" name="cargo" id="cargo" value={form.cargo} onChange={handleChange} className={inputCls(false)} placeholder="Ex: Secretário de Finanças" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="curso" className="text-sm font-medium text-brand-dark">Curso de interesse</label>
        <select name="curso" id="curso" value={form.curso} onChange={handleChange} className={inputCls(false)}>
          <option value="">Selecione um curso (opcional)</option>
          {courses.map((c) => (
            <option key={c.id} value={c.slug}>{c.title}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-sm font-medium text-brand-dark">Mensagem *</label>
        <textarea name="mensagem" id="mensagem" rows={5} value={form.mensagem} onChange={handleChange} className={`${inputCls(!!errors.mensagem)} resize-none`} placeholder="Como podemos ajudar você?" />
        {errors.mensagem && <span className="text-xs text-red-600">{errors.mensagem}</span>}
      </div>

      <button type="submit" className="w-full py-3 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-accent transition-colors text-sm shadow-sm hover:shadow-md">
        Enviar mensagem
      </button>
    </form>
  );
}
