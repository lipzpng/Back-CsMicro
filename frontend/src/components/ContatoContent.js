import "./styles/ContatoContent.css"

export default function ContatoContent() { // Componentização do conteudo da pagina de contato
    return (
        <div>
            <p id="titleContato">Dúvidas - Orçamentos - Contato</p>
            <div class="contato">
                <div class="contentContato">
                    <div class="logoContato">
                        <div>
                            <img src="assets/img/csicon.png" alt="logo"/>
                            <p>CASA DO MICROONDAS</p>
                        </div>
                    </div>
                    
                    <p id="descContato">Entre em contato através de nosso formulário, lhe responderemos o mais breve possível!</p>
                    
                    <form class="formContato">
                        <div class="linha1">
                            <div class="ajustContatoSmall">
                                <p>Nome completo</p>
                                <input id="inputNome" class="inputContato" type="text" placeholder="Nome" required/>
                            </div>
                            <div class="ajustContatoSmall">
                                <p>Celular</p>
                                <input type="tel" class="inputContato" id="phone" placeholder="99 99999-9999" pattern="(\[0-9]{2}\)\s?([0-9]{5})-([0-9]{4})" 
                                title="Número de telefone precisa ser no formato (99) 99999-9999" required/>
                            </div>
                        </div>

                        <div class="ajustContato">
                            <p>Email</p>
                            <input id="inputEmail" class="inputContato" type="text" placeholder="Email" required/>
                        </div>
                        <div class="ajustContato">
                            <p>Assunto</p>
                            <input id="inputAssunto" class="inputContato" type="text" placeholder="Ex: Duvida sobre o atendimento" required/>
                        </div>
                        <div class="ajustContato">
                            <p>Mensagem</p>
                            <textarea id="inputMensagem" class="inputContato" cols="45" rows="5" required></textarea>
                        </div>
                        
                        <button class="btnContato" type="submit">Enviar<span class="material-symbols-outlined">north_east</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
}