// jscadastrar.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário

        // Coleta os dados do formulário
        const formData = new FormData(form);
        
        // Cria um objeto para armazenar os dados
        const data = {};
        
        // Processa cada campo do formulário
        formData.forEach((value, key) => {
            if (key === 'logo') {
                // Lê o arquivo da imagem
                const file = value;
                const reader = new FileReader();
                reader.onload = function(e) {
                    data[key] = e.target.result; // Converte a imagem para URL de dados
                    localStorage.setItem('ongData', JSON.stringify(data));
                    window.location.href = 'visualizacao.html'; // Redireciona após o armazenamento
                };
                reader.readAsDataURL(file);
            } else {
                data[key] = value;
            }
        });
    });
});
