function initNavegaMenu() {
    const navHamburguer = document.querySelector('.nav-hamburguer');
    const hamburguer = document.querySelector('.hamburguer');
    const itemMenu = document.querySelectorAll('.nav-hamburguer a')
    
    function atualizarMenu() {
        navHamburguer.classList.toggle('mostrarNav');
        hamburguer.classList.toggle('ativo');
    }
    
    itemMenu.forEach(item => {
        item.onclick = atualizarMenu;
    })

    hamburguer.onclick = atualizarMenu;
}
initNavegaMenu();
