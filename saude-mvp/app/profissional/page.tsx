import Link from 'next/link';
import { professionals } from '@/lib/mock-data';

export default async function ProfessionalPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const professional = professionals.find((item) => item.id === id) ?? professionals[0];

  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ display: 'grid', gap: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow">Perfil profissional</span>
              <h1 style={{ marginTop: 14 }}>{professional.name}</h1>
              <p className="lead" style={{ marginTop: 12 }}>{professional.specialty} • {professional.city}</p>
            </div>
            <div className="tag">⭐ {professional.rating.toFixed(1)}</div>
          </div>

          <div className="grid-2">
            <div className="card">
              <h3>Sobre</h3>
              <p className="muted">{professional.bio}</p>
              <div className="inline-tags">
                {professional.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Dados principais</h3>
              <p className="muted"><strong>COREN:</strong> {professional.coren}</p>
              <p className="muted"><strong>Valor inicial:</strong> R$ {professional.price}</p>
              <p className="muted"><strong>Atuação:</strong> Atendimento domiciliar e suporte assistencial.</p>
              <div className="actions" style={{ marginTop: 18 }}>
                <Link className="btn" href={`/solicitar?id=${professional.id}`}>Solicitar atendimento</Link>
                <Link className="btn-secondary" href="/profissionais">Voltar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
