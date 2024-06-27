import ContatoContent from "../components/ContatoContent";
import { useState, useEffect } from 'react';
import AlertOrcamen from '../components/AlertOrcamen';

export default function Contato() {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => { // Faz com que o alerta so apareça qnd o ContatoContent aparecer na tela
            setShowAlert(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div>
            <ContatoContent />
            {showAlert && <AlertOrcamen onClose={handleCloseAlert} />}
        </div>
    );
}