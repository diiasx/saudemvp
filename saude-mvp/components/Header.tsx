import Link from 'next/link';

export function Header() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand">
          <span className="brand-badge">+</span>
          Saúde em Casa
        </Link>

        <nav className="nav">
          <Link href="/profissionais">Profissionais</Link>
          <Link href="/cadastro">Cadastro</Link>
          <Link href="/login">Login</Link>
          <Link href="/painel" className="btn-secondary">Painel</Link>
        </nav>
      </div>
    </header>
  );
}
