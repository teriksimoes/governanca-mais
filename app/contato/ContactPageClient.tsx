'use client';

import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-mail',
    value: 'contato@governancamais.com.br',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '(00) 00000-0000',
  },
];

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const preselectedCourse = searchParams.get('curso') ?? undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-brand-dark mb-6">Envie sua mensagem</h2>
          <ContactForm preselectedCourse={preselectedCourse} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-4">Informações de contato</h2>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="text-brand-accent mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{item.label}</p>
                    <p className="text-sm text-brand-dark font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-light rounded-2xl p-6">
            <h3 className="font-bold text-brand-dark mb-2 text-sm">Atendemos todo o Brasil</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Oferecemos cursos presenciais, online e no formato in-company para prefeituras, câmaras municipais e órgãos públicos municipais de todo o território nacional.
            </p>
          </div>

          <div className="bg-brand-navy text-white rounded-2xl p-6">
            <h3 className="font-bold mb-2 text-sm">Precisa de uma proposta rápida?</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Preencha o formulário ao lado com o curso de interesse e retornaremos em até 24 horas úteis com uma proposta personalizada para seu município.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
