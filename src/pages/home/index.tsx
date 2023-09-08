import styles from './home.module.css'
import Card from 'react-bootstrap/Card';

export function Home() {
    return (
        <div>
            <h5>Dashboard</h5>
            <div className={styles.baseCards}>
                <Card bg='Info' text='dark' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                        <Card.Title>Saldo Inicial</Card.Title>
                        <Card.Text>
                            <div>
                                <span>R$ 1.000.000,00</span>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='primary' text='light' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                        <Card.Title>Entradas</Card.Title>
                        <Card.Text>
                            <div>
                                <span>R$ 10.000,00</span>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='danger' text='light' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                        <Card.Title>Saídas</Card.Title>
                        <Card.Text>
                            <div>
                                <span>R$ 8.000,00</span>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='success' text='light' style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                        <Card.Title>Saldo Final</Card.Title>
                        <Card.Text>
                            <div>
                                <span>R$ 1.002.000,00</span>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}