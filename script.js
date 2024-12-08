function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('hidden');
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');

  // Close the mobile menu
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.add('hidden');
}

function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const sections = document.querySelectorAll('.content-section');
  let found = false;

  sections.forEach(section => {
    if (section.id.toLowerCase() === query) {
      sections.forEach(sec => sec.classList.add('hidden'));
      section.classList.remove('hidden');
      found = true;
    }
  });

  if (!found) {
    alert('No matching section found. Please try "home", "about", "services", "blog", or "contact".');
  }
}
