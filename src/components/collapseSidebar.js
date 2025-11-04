export function collapseSidebar() {
    const collapser = document.getElementById('collapse-btn');
    const body = document.body;

    collapser.addEventListener('click', () => {
        body.classList.toggle('collapsed');
        collapser.classList.toggle('flip');
    });
}