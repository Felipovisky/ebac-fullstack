document.addEventListener("DOMContentLoaded", () => {
    const username = "Felipovisky";

    async function carregarDadosUsuario() {
        const url = `https://api.github.com/users/${username}`;

        try {
            const resposta = await fetch(url);

            if (!resposta.ok) {
                throw new Error(`Erro ao buscar dados: ${resposta.status}`);
            }

            const dados = await resposta.json();

            document.getElementById("name").textContent = dados.name || "Nome não disponível";
            document.getElementById("username").textContent = `@${dados.login}`;
            document.getElementById("repos").textContent = dados.public_repos;
            document.getElementById("followers").textContent = dados.followers;
            document.getElementById("following").textContent = dados.following;
            document.getElementById("avatar").src = dados.avatar_url;
            document.getElementById("profileLink").href = dados.html_url;

        } catch (erro) {
            console.error("Erro ao carregar os dados do usuário:", erro);
            alert("Erro ao carregar perfil do GitHub. Verifique o nome de usuário ou sua conexão.");
        }
    }

    carregarDadosUsuario();
});
