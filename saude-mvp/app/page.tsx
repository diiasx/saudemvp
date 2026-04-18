import Link from 'next/link';
import { professionals } from '@/lib/mock-data';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { hasSupabaseEnv } from '@/lib/supabase';

export default function HomePage() {
  return (
    <main>
      <div className="container hero">
        <section className="hero-card">
          <span className="eyebrow">Marketplace de saúde domiciliar</span>
          <h1>Encontre profissionais da saúde com poucos toques.</h1>
          <p className="lead">
            Um MVP web responsivo para clientes contratarem técnicos e enfermeiros, e profissionais gerenciarem solicitações com rapidez.
          </p>

          <div className="actions">
            <Link href="/profissionais" className="btn">Ver profissionais</Link>
            <Link href="/cadastro" className="btn-secondary">Criar conta</Link>
            <Link href="/painel" className="btn-ghost">Acessar painel</Link>
          </div>

          <div className="stat-grid">
            <div className="stat">
              <strong>24h</strong>
              Suporte e solicitações rápidas
            </div>
            <div className="stat">
              <strong>{professionals.length}+</strong>
              Profissionais em destaque no MVP
            </div>
            <div className="stat">
              <strong>{hasSupabaseEnv ? 'ON' : 'MODO DEMO'}</strong>
              {hasSupabaseEnv ? 'Conexão pronta com Supabase' : 'Funciona visualmente sem banco'}
            </div>
          </div>
        </section>

        <aside className="hero-side">
          <div className="card quick-card">
            <h3>Para clientes</h3>
            <p>Busque por especialidade, compare valores e peça atendimento em casa de forma simples.</p>
          </div>
          <div className="card quick-card">
            <h3>Para profissionais</h3>
            <p>Monte seu perfil, informe COREN, disponibilidade e receba solicitações direto no painel.</p>
          </div>
          <div className="card quick-card">
            <h3>Pronto para evoluir</h3>
            <p>Esse MVP já nasce preparado para chat, avaliação, pagamento e aprovação manual de cadastro.</p>
          </div>
        </aside>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <div>
              <h2>Profissionais em destaque</h2>
              <p className="muted">Exemplo de vitrine inicial com cards responsivos.</p>
            </div>
            <Link href="/profissionais" className="btn-secondary">Ver todos</Link>
          </div>

          <div className="grid-3">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
