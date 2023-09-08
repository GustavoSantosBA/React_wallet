import { Link } from 'react-router-dom'
import './navBar.module.css'
import { useState } from 'react';
import { UseNotifyAPI } from './useNotifyApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function NavBar() {
  const { data } = UseNotifyAPI<NotifyModel[]>()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/usuarios">Usuários</Link>
        <Link to="/carteira">Carteiras</Link>
        <Link to="/sobre">Sobre</Link>
        <button onClick={handleShow}>Abrir Modal</button>
      </nav>
      <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <h4 style={{ textAlign: 'center' }}>Notificações do Sistema</h4>
                    <hr />
                    <ul>
                        {data?.map(r => {
                            return (
                                <li key={r.id}>
                                    <span style={{ fontWeight: 'bolder' }}>{r.title}</span>
                                    <p>{r.body}</p>
                                </li>
                            )
                        })}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}