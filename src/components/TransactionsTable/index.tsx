import { useContext, useEffect, useState } from 'react';

import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const data = useContext(TransactionsContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  console.log(data);
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('CV', {
                    style: 'currency',
                    currency: 'ECV'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('CV').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
};