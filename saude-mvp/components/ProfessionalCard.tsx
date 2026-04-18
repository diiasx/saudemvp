import Link from 'next/link';
import type { Professional } from '@/lib/mock-data';

export function ProfessionalCard({ professional }: { professional: Professional }) {
  const initials = professional.name
    .split(' ')
    .map((name) => name[0])
    .slice(0, 2)
    .join('');

  return (
    <article className="card professional-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'start' }}>
        <div style={{ display: 'flex', gap: 14 }}>
          <div className="avatar">{initials}</div>
          <div>
            <h3>{professional.name}</h3>
            <p className="muted" style={{ margin: '6px 0 0' }}>{professional.specialty}</p>
            <p className="muted" style={{ margin: '6px 0 0' }}>{professional.city}</p>
          </div>
        </div>
        <span className="tag">⭐ {professional.rating.toFixed(1)}</span>
      </div>

      <p className="muted" style={{ margin: 0 }}>{professional.bio}</p>

      <div className="tag-row">
        {professional.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <div className="price">R$ {professional.price}</div>
          <div className="list-subtle">por atendimento base</div>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href={`/profissional?id=${professional.id}`} className="btn-secondary">Ver perfil</Link>
          <Link href={`/solicitar?id=${professional.id}`} className="btn">Contratar</Link>
        </div>
      </div>
    </article>
  );
}
