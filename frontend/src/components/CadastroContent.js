import { useEffect } from "react";
import "./styles/CadastroContent.css"

export default function CadastroContent() { // Componentização do conteudo da pagina de cadastro
    useEffect(() => {
        const addForm = document.querySelector(".formCadastro")

        const inputNomeComp = document.querySelector("#inputNome");
        const inputNomeUser = document.querySelector("#inputNomeUser");
        const inputPhone = document.querySelector("#inputPhone");
        const inputEmail = document.querySelector("#inputEmail");
        const inputSenha = document.querySelector("#inputSenha");
        const inputSenhaConfirm = document.querySelector("#inputSenhaConfirm");

        const addUser = async (event) => {
            event.preventDefault();

            const userNovo = {
                nome_completo: inputNomeComp.value,
                nome_user: inputNomeUser.value,
                cell_user: inputPhone.value,
                email_user: inputEmail.value,
                senha_user: inputSenhaConfirm.value
            };

            if (inputSenha.value === inputSenhaConfirm.value) {
                await fetch("http://localhost:3333/user", {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(userNovo)
                });
            };
        };

        addForm.addEventListener("submit", addUser);
    });

    return (
        <div class="ajustCadastroContent//">
            <p id="titleCadastro">Criar conta</p>
            <div class="cadastro">
                <div class="contentCadastro">
                    <div class="logoCadastro">
                        <div>
                            <img src="assets/img/csicon.png" alt="logo" />
                            <p>CASA DO MICROONDAS</p>
                        </div>
                    </div>

                    <p id="descCadastro">Cadastre-se aqui!</p>

                    <form class="formCadastro">
                        <div class="linha1">
                            <div class="ajustCadastroSmall">
                                <p>Nome completo</p>
                                <input id="inputNome" class="inputCadastro" type="text" placeholder="Nome" required />
                            </div>
                            <div class="ajustCadastroSmall">
                                <p>Nome de usuário</p>
                                <input id="inputNomeUser" class="inputCadastro" type="text" placeholder="Usuário" required />
                            </div>
                        </div>

                        <div class="linha1">
                            <div class="ajustCadastroSmall">
                                <p>Celular</p>
                                <input type="tel" class="inputCadastro" id="inputPhone" placeholder="99 99999-9999" /*pattern="(\[0-9]{2}\)\s?([0-9]{5})-([0-9]{4})"*/
                                    title="Número de telefone precisa ser no formato (99) 99999-9999" required />
                            </div>
                            <div class="ajustCadastroSmall">
                                <p>Email</p>
                                <input id="inputEmail" class="inputCadastro" type="text" placeholder="Email" required />
                            </div>
                        </div>

                        <div class="linha1">
                            <div class="ajustCadastroSmall">
                                <p>Senha</p>
                                <input id="inputSenha" class="inputCadastro" type="password" placeholder="Senha" required />
                            </div>

                            <div class="ajustCadastroSmall">
                                <p>Confirmar senha</p>
                                <input id="inputSenhaConfirm" class="inputCadastro" type="password" placeholder="Senha" required />
                            </div>
                        </div>

                        <button class="btnCadastro" type="submit">Criar conta<span class="material-symbols-outlined">north_east</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
}