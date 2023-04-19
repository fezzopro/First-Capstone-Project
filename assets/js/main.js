document.addEventListener('DOMContentLoaded', ()=>{
  const humbergerMenu = document.querySelector('.burger img');
  const mainContent = document.querySelector('.main');
  const mobilePopUpMenue = document.createElement('div');
  const mobileMenuUl = document.createElement('ul');
  const navlinks = document.querySelectorAll('.nav-div ul li');
  const sections = document.querySelectorAll('section');
  const headerNav = document.querySelectorAll('.nav');
  const mobileMenulinks = document.querySelectorAll('.nav-link');
  mobilePopUpMenue.className = 'left-navigation mobile-menu hide';
  const introduction = document.querySelector('.introduction');
  mobilePopUpMenue.style.height = `${introduction.clientHeight}px`;
  mobilePopUpMenue.style.transition = 'all 1s ease-in-out 0s';


  const createLeftavBar = () => {
    navlinks.forEach((li) => {
      if (!mobilePopUpMenue.classList.contains('hide')) {
        headerNav[0].appendChild(li)
      } else {
        mobileMenuUl.appendChild(li);
      }
    });
  };
  mobilePopUpMenue.appendChild(mobileMenuUl);
  mainContent.appendChild(mobilePopUpMenue);
  
  const toggleMobileMenu = () => {
    createLeftavBar();
    mobilePopUpMenue.classList.toggle('hide');
    humbergerMenu.classList.toggle('close-icon');
    sections.forEach((section) => {
      section.classList.toggle('hide');
    });
    sections[0].classList.toggle('left-navigation-backgound');
    sections[0].classList.toggle('hide');
  };

  humbergerMenu.addEventListener('click', toggleMobileMenu);
  mobileMenulinks.forEach((link) => {
    link.addEventListener('click', toggleMobileMenu);
  });
  
  // Create guests/speaker
  const createSpeaker = () => {};
});