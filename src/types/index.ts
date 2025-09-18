export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
  createdAt: Date;
  userId: string;
}

export interface Event {
  id: string;
  name: string;
  type: 'wedding' | 'debutante' | 'birthday' | 'graduation' | 'other';
  date: Date;
  location: string;
  clientId: string;
  clientName: string;
  status: 'planning' | 'confirmed' | 'completed' | 'canceled';
  contractTotal: number;
  details?: string;
  createdAt: Date;
  userId: string;
  contractUrl?: string;
  contractFileName?: string;
}

export interface Payment {
  id: string;
  eventId: string;
  eventName: string;
  amount: number;
  paymentDate: Date;
  method: 'pix' | 'card' | 'boleto' | 'cash';
  notes?: string;
  received: boolean;
  installmentNumber?: number;
  totalInstallments?: number;
  installmentGroup?: string; // UUID to group related installments
  createdAt: Date;
  userId: string;
}

export interface FinancialSummary {
  totalReceivedMonth: number;
  totalPending: number;
  upcomingEvents: Event[];
  upcomingPayments: Payment[];
}
  contractUrl?: string;
  contractFileName?: string;