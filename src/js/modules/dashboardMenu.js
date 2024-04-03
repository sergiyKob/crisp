const dashboardMenu = document.querySelector('.dashboard-menu-btn');
const dashboardNav = document.querySelector('.dashboard-nav');

dashboardMenu.addEventListener('click', function () {
  dashboardMenu.classList.toggle('is-active');
  dashboardNav.classList.toggle('is-open');
});

export default dashboardMenu;
