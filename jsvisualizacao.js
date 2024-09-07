document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do localStorage
    const data = JSON.parse(localStorage.getItem('ongData'));

    if (data) {
        // Exibe os dados na página
        document.getElementById('nome').textContent = data.nome || 'Não informado';
        document.getElementById('cnpj').textContent = data.cnpj || 'Não informado';
        document.getElementById('area').textContent = data.area || 'Não informado';
        document.getElementById('responsavel').textContent = data.responsavel || 'Não informado';
        document.getElementById('email').textContent = data.email || 'Não informado';
        document.getElementById('instaONG').textContent = data.instaONG || 'Não informado';
        document.getElementById('faceONG').textContent = data.faceONG || 'Não informado';
        document.getElementById('descricao').textContent = data.descricao || 'Não informado';

        // Exibe o logotipo se estiver disponível
        if (data.logo) {
            const img = document.createElement('img');
            img.src = data.logo; // Usar diretamente a URL de dados
            img.alt = 'Logotipo da ONG';
            document.getElementById('logo-container').appendChild(img);
        } else {
            document.getElementById('logo-container').textContent = 'Logotipo não informado';
        }
    } else {
        // Exibe uma mensagem se não houver dados
        document.getElementById('visualizacao').textContent = 'Nenhuma ONG cadastrada.';
    }
});
