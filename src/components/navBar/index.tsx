import { Link } from 'react-router-dom'
import './navBar.module.css'
import { useState } from 'react';
import NotificacoesModal from '../notificacoes';

export function NavBar() {

  const [showModal, setShowModal] = useState(false);
  const showInitialModal = true;

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/usuarios">Usuários</Link>
        <Link to="/carteira">Carteiras</Link>
        <Link to="/sobre">Sobre</Link>
        <button onClick={openModal}>Abrir Modal</button>
      </nav>
      {showModal && <NotificacoesModal initialShow={showInitialModal} />}
    </>
  )
}