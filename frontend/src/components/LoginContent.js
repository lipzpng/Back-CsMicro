import React from "react";
import "./styles/LoginContent.css";
import { useNavigate } from "react-router-dom";

export default function LoginContent() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="login-container">
                <h2 id="titleLogin">Login</h2>
                <form id="login-form" onSubmit={() => navigate('/perfil')} method="POST">
                    <div className="input-group">
                        <label htmlFor="username">Usuário:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <button className="btn-entrar-login" type="submit">Entrar</button>

                    <div id="alignCadastro" onClick={() => navigate("/cadastro")}>
                        <p id="labelCadastro">Criar uma conta</p>
                    </div>
                </form>
            </div>
        </div>
    );
}