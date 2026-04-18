export default function LoginPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card form-card">
          <span className="eyebrow">Entrar</span>
          <h1 style={{ marginTop: 16 }}>Acesse sua conta</h1>
          <p className="lead">Tela de login pronta para integrar com Supabase Auth.</p>

          <form className="form" style={{ marginTop: 20 }}>
            <div className="field">
              <label>E-mail</label>
              <input type="email" placeholder="seu@email.com" />
            </div>
            <div className="field">
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha" />
            </div>
            <button type="submit" className="btn">Entrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
