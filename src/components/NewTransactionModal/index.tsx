import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionProps) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />

        <input type="number" placeholder="Valor" />

        {/* <button type="submit">Entrada</button>
        <button type="submit">Saída</button> */}

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
} 