import { professionals } from '@/lib/mock-data';

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const professional = professionals.find((item) => item.id === id) ?? professionals[0];

  return (
    <main className="section">
      <div className="container">
        <div className="card form-card">
          <span className="eyebrow">Solicitar atendimento</span>
          <h1 style={{ marginTop: 16 }}>Contratar {professional.name}</h1>
          <p className="lead">Formulário inicial para pedido de atendimento domiciliar.</p>

          <form className="form" style={{ marginTop: 20 }}>
            <div className="grid-2">
              <div className="field">
                <label>Nome do cliente</label>
                <input placeholder="Digite seu nome" />
              </div>
              <div className="field">
                <label>Telefone</label>
                <input placeholder="(21) 99999-9999" />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label>Data desejada</label>
                <input type="date" />
              </div>
              <div className="field">
                <label>Horário</label>
                <input type="time" />
              </div>
            </div>

            <div className="field">
              <label>Tipo de atendimento</label>
              <select defaultValue="">
                <option value="">Selecione</option>
                <option>Curativo</option>
                <option>Administração de medicação</option>
                <option>Acompanhamento domiciliar</option>
                <option>Pós-operatório</option>
              </select>
            </div>

            <div className="field">
              <label>Observações</label>
              <textarea placeholder="Descreva o que precisa, endereço e detalhes importantes."></textarea>
            </div>

            <div className="card" style={{ background: 'rgba(232, 239, 255, 0.7)' }}>
              <strong>Resumo</strong>
              <p className="muted" style={{ marginBottom: 0 }}>
                Profissional: {professional.name} • Valor inicial: R$ {professional.price}
              </p>
            </div>

            <button type="submit" className="btn">Enviar solicitação</button>
          </form>
        </div>
      </div>
    </main>
  );
}
