import './HamburguerDetalhesModal.css';
import Modal from '../modal/Modal';

function hamburguerDetalhesModal({ hamburguer, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="hamburguerDetalhesModal">
        <div>
          <div className="hamburguerDetalhesModal__nome">
            {' '}
            {hamburguer.nome}{' '}
          </div>
          <div className="hamburguerDetalhesModal__preco">
            R$ {Number(hamburguer.preco).toFixed(2)}{' '}
          </div>
          <div className="hamburguerDetalhesModal__descricao">
            <b>Descrição:</b> {hamburguer.descricao}{' '}
          </div>
        </div>
        <img
          className="hamburguerDetalhesModal__foto"
          src={hamburguer.foto}
          alt={`hamburguer de ${hamburguer.nome}`}
        />
      </div>
    </Modal>
  );
}

export default hamburguerDetalhesModal;
