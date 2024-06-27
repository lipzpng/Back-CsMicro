import "./styles/CadastroContent.css"

export default function CadastroContent() { // Componentização do conteudo da pagina de cadastro
    return (
        <div>
            <p id="titleCadastro">Criar conta</p>
            <div class="cadastro">
                <div class="contentCadastro">
                    <div class="logoCadastro">
                        <div>
                            <img src="assets/img/csicon.png" alt="logo"/>
                            <p>CASA DO MICROONDAS</p>
                        </div>
                    </div>
                    
                    <p id="descCadastro">Cadastre-se aqui!</p>
                    
                    <form class="formCadastro">
                        <div class="linha1">
                            <div class="ajustCadastroSmall">
                                <p>Nome completo</p>
                                <input id="inputNome" class="inputCadastro" type="text" placeholder="Nome" required/>
                            </div>
                            <div class="ajustCadastroSmall">
                                <p>Celular</p>
                                <input type="tel" class="inputCadastro" id="phone" placeholder="99 9999-9999" pattern="(\[0-9]{2}\)\s?([0-9]{5})-([0-9]{4})" 
                                title="Número de telefone precisa ser no formato (99) 9999-9999" required/>
                            </div>
                        </div>

                        <div class="ajustCadastro">
                            <p>Email</p>
                            <input id="inputEmail" class="inputCadastro" type="text" placeholder="Email" required/>
                        </div>
                        <div class="ajustCadastro">
                            <p>Senha</p>
                            <input id="inputSenha" class="inputCadastro" type="text" placeholder="Senha" required/>
                        </div>

                        <div class="ajustCadastro">
                            <p>Confirmar senha</p>
                            <input id="inputSenha" class="inputCadastro" type="text" placeholder="Senha" required/>
                        </div>
                        
                        <button class="btnCadastro" type="submit">Criar conta<span class="material-symbols-outlined">north_east</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
}