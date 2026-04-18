export type Professional = {
  id: string;
  name: string;
  specialty: string;
  coren: string;
  city: string;
  price: number;
  rating: number;
  bio: string;
  tags: string[];
};

export type ServiceRequest = {
  id: string;
  client: string;
  professional: string;
  date: string;
  status: 'pending' | 'accepted' | 'done';
  value: number;
};

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Ana Carolina Souza',
    specialty: 'Técnica de enfermagem',
    coren: 'COREN-RJ 123456-TE',
    city: 'Niterói - RJ',
    price: 120,
    rating: 4.9,
    bio: 'Atendimento humanizado em domicílio, curativos, medicação e acompanhamento de rotina.',
    tags: ['Curativos', 'Medicação', 'Adulto'],
  },
  {
    id: '2',
    name: 'Bruna Martins',
    specialty: 'Enfermeira',
    coren: 'COREN-RJ 998877-ENF',
    city: 'São Gonçalo - RJ',
    price: 180,
    rating: 4.8,
    bio: 'Experiência com cuidados pós-operatórios, idosos e supervisão domiciliar.',
    tags: ['Pós-operatório', 'Idoso', 'Plantão'],
  },
  {
    id: '3',
    name: 'Carlos Henrique Lima',
    specialty: 'Técnico de enfermagem',
    coren: 'COREN-RJ 445566-TE',
    city: 'Rio de Janeiro - RJ',
    price: 140,
    rating: 4.7,
    bio: 'Apoio em administração de medicamentos, sinais vitais e suporte a pacientes crônicos.',
    tags: ['Sinais vitais', 'Crônico', 'Home care'],
  },
];

export const serviceRequests: ServiceRequest[] = [
  {
    id: 'OS-1001',
    client: 'Mariana Costa',
    professional: 'Ana Carolina Souza',
    date: '20/04/2026 - 14:00',
    status: 'pending',
    value: 120,
  },
  {
    id: 'OS-1002',
    client: 'João Pedro',
    professional: 'Bruna Martins',
    date: '21/04/2026 - 09:00',
    status: 'accepted',
    value: 180,
  },
  {
    id: 'OS-1003',
    client: 'Fernanda Alves',
    professional: 'Carlos Henrique Lima',
    date: '18/04/2026 - 19:00',
    status: 'done',
    value: 140,
  },
];
