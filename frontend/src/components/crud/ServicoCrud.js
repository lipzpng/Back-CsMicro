export default function ServicoCrud() {
    const tbody = document.querySelector("tbody");
    const addForm = document.querySelector(".add-form");

    const inputServico = document.querySelector(".input-servico");
    const inputDesc = document.querySelector(".input-desc");
    const inputImg = document.querySelector(".input-img");
    const inputOrdem = document.querySelector(".input-ordem");
    const inputUrl = document.querySelector(".input-url");

    if (!tbody) {
        console.error("Elemento <tbody> não encontrado!");
        return;
    }

    const fetchServicos = async () => {
        const res = await fetch("http://localhost:3333/servico");
        const servicos = await res.json();
        return servicos;
    }

    const addServico = async (event) => {
        event.preventDefault();

        const servico = {
            title: inputServico.value,
            desc: inputDesc.value,
            img: inputImg.value,
            ordem: inputOrdem.value,
            url: inputUrl.value
        };

        await fetch("http://localhost:3333/servico", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(servico)
        })

        loadServicos();
        addForm.value = "";
        inputServico.value = "";
        inputDesc.value = "";
        inputImg.value = "";
        inputOrdem.value = "";
        inputUrl.value = "";
    }

    const delServico = async (id_servico) => {
        await fetch(`http://localhost:3333/servico/${id_servico}`, {
            method: "delete"
        });
        console.log(id_servico);

        loadServicos();
    }

    const upServico = async (id_servico, title, desc, img, ordem, url) => {

        await fetch(`http://localhost:3333/servico/${id_servico}`, {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, desc, img, ordem, url }),
        });

        loadServicos();
    }

    const createElement = (tag, innerText = "", innerHTML = "") => { // cria tag
        const element = document.createElement(tag);

        if (innerText) {
            element.innerText = innerText;
        }

        if (innerHTML) {
            element.innerHTML = innerHTML;
        }

        return element;
    }

    const createRow = (servico) => {
        const { id_servico, titulo, desc_servico, img, ordem_apresentacao, url/*, ativo*/ } = servico;

        // if (ativo === 0) return null;

        const tr = createElement("tr");

        const tdTitle = createElement("td", titulo);
        const tdDesc = createElement("td", desc_servico);
        const tdImg = createElement("td", img);
        const tdOrdem = createElement("td", ordem_apresentacao);
        const tdUrl = createElement("td", url);

        const tdActions = createElement("td");

        const editBtn = createElement("button", "", '<span class="material-symbols-outlined">edit</span>');
        const delBtn = createElement("button", "", '<span class="material-symbols-outlined">delete</span>');

        // UPDATE ->

        const editForm = createElement("form");
        const editInput = createElement("input");

        editInput.value = titulo;
        editForm.appendChild(editInput);

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            upServico(id_servico, editInput.value, desc_servico, img, ordem_apresentacao, url);
        })

        editBtn.addEventListener("click", () => {
            tdTitle.innerText = "";
            tdTitle.appendChild(editForm);
        })

        // <- UPDATE

        editBtn.classList.add("btn-action");
        delBtn.classList.add("btn-action");

        delBtn.addEventListener("click", () => delServico(id_servico));

        tdActions.appendChild(editBtn);
        tdActions.appendChild(delBtn);

        tr.appendChild(tdTitle);
        tr.appendChild(tdDesc);
        tr.appendChild(tdImg);
        tr.appendChild(tdOrdem);
        tr.appendChild(tdUrl);
        tr.appendChild(tdActions);

        return tr;
    }

    const loadServicos = async () => {
        const servicos = await fetchServicos();

        tbody.innerHTML = "";

        servicos.forEach((servico) => {
            const tr = createRow(servico);
            /*if (tr)*/ tbody.appendChild(tr); // Verifica se o tr nao é null, se tiver algo faz o tbody
        });
    }

    addForm.addEventListener("submit", addServico);

    loadServicos();
}