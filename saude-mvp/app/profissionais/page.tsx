'use client'

import { useEffect, useState } from 'react'
import { supabase, hasSupabaseEnv } from '@/lib/supabase'

type Profissional = {
  id: string
  nome: string
  especialidade: string
  preco_hora: number
  descricao: string
}

export default function ProfissionaisPage() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function carregarProfissionais() {
      if (!hasSupabaseEnv || !supabase) {
        setErro('As variáveis do Supabase não foram configuradas na Vercel.')
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('profissionais')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Erro ao buscar profissionais:', error)
        setErro(error.message)
      } else {
        setProfissionais(data || [])
      }

      setLoading(false)
    }

    carregarProfissionais()
  }, [])

  return (
    <main style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Profissionais disponíveis</h1>
        <p style={styles.subtitle}>
          Encontre profissionais da saúde para atendimento domiciliar.
        </p>
      </div>

      {loading && <p>Carregando profissionais...</p>}

      {!loading && erro && (
        <div style={styles.errorBox}>
          <strong>Erro:</strong> {erro}
        </div>
      )}

      {!loading && !erro && profissionais.length === 0 && (
        <div style={styles.emptyBox}>
          Nenhum profissional encontrado.
        </div>
      )}

      {!loading && !erro && profissionais.length > 0 && (
        <div style={styles.grid}>
          {profissionais.map((profissional) => (
            <div key={profissional.id} style={styles.card}>
              <div style={styles.avatar}>
                {profissional.nome?.charAt(0)?.toUpperCase() || 'P'}
              </div>

              <h2 style={styles.cardTitle}>{profissional.nome}</h2>
              <p style={styles.cardSpecialty}>{profissional.especialidade}</p>

              <p style={styles.price}>
                R$ {Number(profissional.preco_hora || 0).toFixed(2)}/hora
              </p>

              <p style={styles.description}>
                {profissional.descricao || 'Sem descrição cadastrada.'}
              </p>

              <a
                href={`/solicitar?id=${profissional.id}`}
                style={styles.button}
              >
                Contratar
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    padding: '24px',
    background: '#f7f8fc',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    maxWidth: '1200px',
    margin: '0 auto 24px auto',
  },
  title: {
    margin: 0,
    fontSize: '32px',
    color: '#1f2937',
  },
  subtitle: {
    marginTop: '8px',
    color: '#6b7280',
  },
  grid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#ffffff',
    borderRadius: '18px',
    padding: '20px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '999px',
    background: '#dbeafe',
    color: '#1d4ed8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '22px',
  },
  cardTitle: {
    margin: 0,
    fontSize: '22px',
    color: '#111827',
  },
  cardSpecialty: {
    margin: 0,
    color: '#2563eb',
    fontWeight: 600,
  },
  price: {
    margin: 0,
    color: '#059669',
    fontWeight: 700,
  },
  description: {
    margin: 0,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  button: {
    marginTop: '8px',
    textAlign: 'center',
    background: '#2563eb',
    color: '#fff',
    padding: '12px 16px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 700,
  },
  emptyBox: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '16px',
    color: '#6b7280',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
  },
  errorBox: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#fee2e2',
    color: '#991b1b',
    padding: '16px',
    borderRadius: '12px',
  },
}
