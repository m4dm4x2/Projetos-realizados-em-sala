async function inrerirRegistros() {
    const nome = document.getElementById("nome").valeu;
    const sexo = document.getElementById("sexo").valeu;
    const cpf = document.getElementById("cpf").valeu;
    const nascimento = document.getElementById("nascimento").valeu;
    const status = document.getElementById("status").valeu;
    const formacao = document.getElementById("formacao").valeu;
    const Admissao = document.getElementById("Admissao").valeu;
    const obs = document.getElementById("obs").valeu;
    const email = document.getElementById("email").valeu;
    const telefone = document.getElementById("telefone").valeu;
    const cep = document.getElementById("cep").valeu;
    const logradouro = document.getElementById("logradouro").valeu;
    const numero = document.getElementById("numero").valeu;
    const complemento = document.getElementById("complemento").valeu;
    const bairro = document.getElementById("bairro").valeu;
    const cidade = document.getElementById("cidade").valeu;
    const estado = document.getElementById("estado").valeu;
    
    try {
        const resposta = await fetch (`http://localhost:3000/professor/` ,
            {
                method: "POST",
                headers: {"Content-Type": "apllication/json"},
                body: JSON.stringify({
                    nome: nome,
                    sexo: sexo,
                    cpf: cpf,
                    nascimento: nascimento,
                    status: status,
                    formacao: formacao,
                    Admissao: Admissao,
                    obs: obs,
                    email: email,
                    telefone: telefone,
                    cep: cep,
                    logradouro: logradouro,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado
                })
            });
    } catch (error) {
        alert(`falha ao conectar com a porra da API: ${error}`);
    }
}