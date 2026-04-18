# Saúde em Casa - MVP Web

Projeto web responsivo em Next.js para conectar clientes e profissionais da saúde.

## Páginas prontas
- `/` Home
- `/profissionais` Lista de profissionais
- `/profissional?id=1` Perfil do profissional
- `/solicitar?id=1` Solicitar atendimento
- `/cadastro` Cadastro
- `/login` Login
- `/painel` Painel de solicitações

## Como rodar
1. Copie `.env.example` para `.env.local`
2. Preencha as variáveis do Supabase
3. Rode:

```bash
npm install
npm run dev
```

## Banco
Rode o arquivo `supabase-schema.sql` no SQL Editor do Supabase.

## Próximas evoluções
- autenticação real
- criação de perfil em tabela `profiles`
- filtros reais de busca
- chat interno
- pagamentos
- painel admin
