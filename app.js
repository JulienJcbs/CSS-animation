const sidebarBtnToggle = document.getElementById("sidebarBtnToggle");
// ajouter le script pour ajouter une class "open" pour la sidebar

sidebarBtnToggle.addEventListener('click', function() {
    openSideBar()
});

function openSideBar() {
    if (!document.getElementById('sidebar').classList.toggle('open')) {
        document.getElementById('sidebar').classList.add('close');
    } else {
        document.getElementById('sidebar').classList.remove('close');
    }
}

const modalBtn = document.getElementById("modalBtn");

const modalBtnClose = document.getElementById('clode-modal-btn');

modalBtnClose.addEventListener('click', function() {
    openModal();
});

modalBtn.addEventListener('click', function() {
    openModal();
});

function openModal() {
    document.getElementById('modal-element').classList.toggle('visible');
}