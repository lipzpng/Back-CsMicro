import "./UsadoSection.css"

export default function UsadoSection(props) { //props é um objeto javascript quem tras title e subtitle
    return (
        <div>
            <div id="alignContent">
                <h1>{props.title}</h1>
                <div class="itemGrid">
                    {props.children} {/*o clhidren pega tds os components q estao dentro da pai <Section /> e coloca aq*/}
                </div>
            </div>
        </div>
    );
}