export default function RegisterPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card form-card">
          <span className="eyebrow">Criar conta</span>
          <h1 style={{ marginTop: 16 }}>Cadastro de cliente ou profissional</h1>
          <p className="lead">Página inicial de cadastro do MVP web.</p>

          <form className="form" style={{ marginTop: 20 }}>
            <div className="grid-2">
              <div className="field">
                <label>Tipo de conta</label>
                <select defaultValue="cliente">
                  <option value="cliente">Cliente</option>
                  <option value="profissional">Profissional</option>
                </select>
              </div>
              <div className="field">
                <label>Nome completo</label>
                <input placeholder="Seu nome" />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com" />
              </div>
              <div className="field">
                <label>Senha</label>
                <input type="password" placeholder="Crie uma senha" />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label>Telefone</label>
                <input placeholder="(21) 99999-9999" />
              </div>
              <div className="field">
                <label>Cidade</label>
                <input placeholder="Ex: Niterói" />
              </div>
            </div>

            <div className="grid-2">
              <div className="field">
                <label>COREN (se profissional)</label>
                <input placeholder="COREN-RJ 000000" />
              </div>
              <div className="field">
                <label>Especialidade</label>
                <input placeholder="Ex: Técnica de enfermagem" />
              </div>
            </div>

            <button type="submit" className="btn">Criar conta</button>
          </form>
        </div>
      </div>
    </main>
  );
}
