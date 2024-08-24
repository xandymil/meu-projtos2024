// Preloader
window.addEventListener("load", function() {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

// Mensagem de boas-vindas
window.onload = function() {
    alert('Bem-vindo ao meu portfólio!');
};

// Mostrar botão "Voltar ao Topo" ao rolar a página
window.onscroll = function() {
    var backToTopBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Rolar até o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alternar tema claro/escuro
var currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(currentTheme + "-theme");

document.getElementById("toggleTheme").addEventListener("click", function() {
    var bodyClass = document.body.classList;
    if (bodyClass.contains("light-theme")) {
        bodyClass.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark");
    } else {
        bodyClass.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light");
    }
});

// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Impede o envio do formulário
    }
});
