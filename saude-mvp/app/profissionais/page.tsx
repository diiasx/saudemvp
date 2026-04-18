import { ProfessionalCard } from '@/components/ProfessionalCard';
import { professionals } from '@/lib/mock-data';

export default function ProfessionalsPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h1>Profissionais disponíveis</h1>
            <p className="muted">Página web com filtros visuais e cards de contratação.</p>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 20 }}>
          <div className="grid-4">
            <div className="field">
              <label>Especialidade</label>
              <select defaultValue="">
                <option value="">Todas</option>
                <option>Enfermeira</option>
                <option>Técnico de enfermagem</option>
              </select>
            </div>
            <div className="field">
              <label>Cidade</label>
              <input placeholder="Ex: Niterói" />
            </div>
            <div className="field">
              <label>Faixa de valor</label>
              <select defaultValue="">
                <option value="">Qualquer valor</option>
                <option>Até R$ 120</option>
                <option>Até R$ 180</option>
              </select>
            </div>
            <div className="field">
              <label>Avaliação mínima</label>
              <select defaultValue="">
                <option value="">Todas</option>
                <option>4.5+</option>
                <option>4.8+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid-3">
          {professionals.map((professional) => (
            <ProfessionalCard key={professional.id} professional={professional} />
          ))}
        </div>
      </div>
    </main>
  );
}
