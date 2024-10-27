document.addEventListener("DOMContentLoaded", function () {

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';

  hamburgerMenu.addEventListener('click', () => {
      sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
  });


  const searchButton = document.querySelector('.search-button');
  const searchBar = document.querySelector('.search-bar');

  searchButton.addEventListener('click', () => {
      const searchText = searchBar.value.trim();
      alert(searchText ? `You searched for: ${searchText}` : "Please enter a search term.");
  });


  const createIcon = document.getElementById("createIcon");
  const createMenu = document.getElementById("menu");

  createIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      createMenu.style.display = createMenu.style.display === "block" ? "none" : "block";
  });


  const profileIcon = document.getElementById("profileIcon");
  const profileDropdown = document.getElementById("profileDropdown");

  profileIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      profileDropdown.style.display = profileDropdown.style.display === "block" ? "none" : "block";
  });


  document.addEventListener("click", (event) => {
      if (!createIcon.contains(event.target) && !createMenu.contains(event.target)) {
          createMenu.style.display = "none";
      }
      if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
          profileDropdown.style.display = "none";
      }
  });
});
