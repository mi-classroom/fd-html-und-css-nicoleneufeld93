// Hauptmenu-Element und Hamburger-Icon auswählen
const mainMenu = document.querySelector(".main-menu");
const menuIcon = document.querySelector(".menu");

// Klick-Event für das Hamburger-Icon hinzufügen
menuIcon.addEventListener("click", () => {
  // Prüfen, ob das Hauptmenu bereits sichtbar ist
  const menuVisible = mainMenu.classList.contains("is-active");

  // Wenn das Hauptmenu sichtbar ist, ausblenden, ansonsten einblenden
  if (menuVisible) {
    mainMenu.classList.remove("is-active");
    menuIcon.textContent = "menu"; // Hamburger-Icon anzeigen
  } else {
    mainMenu.classList.add("is-active");
    menuIcon.textContent = "close"; // X-Icon anzeigen
  }
});
