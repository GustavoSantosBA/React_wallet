import React, { useEffect, useState } from 'react';
import { UseNotifyAPI } from './useNotifyApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NotificacoesModal({ initialShow }: { initialShow: boolean }) {
    const { data } = UseNotifyAPI<NotifyModel[]>()

    const [show, setShow] = useState(initialShow);

    useEffect(() => {
        setShow(initialShow);
    }, [initialShow]);

    const handleClose = () => setShow(false);
    return (
        <>
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
    );
}

export default NotificacoesModal;