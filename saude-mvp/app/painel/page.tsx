import { serviceRequests } from '@/lib/mock-data';

function statusLabel(status: 'pending' | 'accepted' | 'done') {
  if (status === 'pending') return 'Pendente';
  if (status === 'accepted') return 'Aceito';
  return 'Finalizado';
}

export default function DashboardPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="section-title">
          <div>
            <h1>Painel de solicitações</h1>
            <p className="muted">Visão inicial para cliente e profissional acompanharem o fluxo do serviço.</p>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: 20 }}>
          <div className="card">
            <h3>Solicitações</h3>
            <p className="price" style={{ margin: '12px 0 0' }}>{serviceRequests.length}</p>
          </div>
          <div className="card">
            <h3>Em andamento</h3>
            <p className="price" style={{ margin: '12px 0 0' }}>{serviceRequests.filter((item) => item.status === 'accepted').length}</p>
          </div>
          <div className="card">
            <h3>Finalizadas</h3>
            <p className="price" style={{ margin: '12px 0 0' }}>{serviceRequests.filter((item) => item.status === 'done').length}</p>
          </div>
        </div>

        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Cliente</th>
                <th>Profissional</th>
                <th>Data</th>
                <th>Status</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.client}</td>
                  <td>{request.professional}</td>
                  <td>{request.date}</td>
                  <td>
                    <span className={`status ${request.status}`}>
                      {statusLabel(request.status)}
                    </span>
                  </td>
                  <td>R$ {request.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
