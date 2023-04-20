document.addEventListener('DOMContentLoaded', ()=>{
  const humbergerMenu = document.querySelector('.burger img');
  const mainContent = document.querySelector('.main');
  const mobilePopUpMenue = document.createElement('div');
  const mobileMenuUl = document.createElement('ul');
  const mobileMenuUlLi = document.createElement('li');
  const navlinks = document.querySelectorAll('.nav-div ul li');
  const sections = document.querySelectorAll('section');
  const headerNav = document.querySelectorAll('.nav');
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
  
  const addEventListerToLinks = () => {
    const mobileMenulinks = document.querySelectorAll('.mobile-menu > ul > li > a');
    console.log(mobileMenulinks);
    mobileMenulinks.forEach((link) => {
      link.addEventListener('click', toggleMobileMenu);
    });
  };

  const toggleMobileMenu = () => {
    createLeftavBar();
    mobilePopUpMenue.classList.toggle('hide');
    humbergerMenu.classList.toggle('close-icon');
    sections.forEach((section) => {
      section.classList.toggle('hide');
    });
    sections[0].classList.toggle('left-navigation-backgound');
    sections[0].classList.toggle('hide');
    addEventListerToLinks();
  };
  
  humbergerMenu.addEventListener('click', toggleMobileMenu);
  
  
  const speakers = [
    {
      name: 'Yochai Bankler',
      image: 'assets/img/guests/speaker-1.png',
      job: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
      experience: 'Benkler studies commons-based peer production, and pushed his seminal book The Welth of Networks in 2006.',
    },
    {
      name: 'Yochai Bankler',
      image: 'assets/img/guests/speaker-2.png',
      job: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
      experience: 'Benkler studies commons-based peer production, and pushed his seminal book The Welth of Networks in 2006.',
    },
    {
      name: 'Yochai Bankler',
      image: 'assets/img/guests/speaker-3.png',
      job: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
      experience: 'Benkler studies commons-based peer production, and pushed his seminal book The Welth of Networks in 2006.',
    },
    {
      name: 'Yochai Bankler',
      image: 'assets/img/guests/speaker-4.png',
      job: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
      experience: 'Benkler studies commons-based peer production, and pushed his seminal book The Welth of Networks in 2006.',
    },
    {
      name: 'Yochai Bankler',
      image: 'assets/img/guests/speaker-5.png',
      job: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
      experience: 'Benkler studies commons-based peer production, and pushed his seminal book The Welth of Networks in 2006.',
    },
    {
      name: 'Yochai Bankler',
      image: 'assets/img/guests/speaker-6.png',
      job: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
      experience: 'Benkler studies commons-based peer production, and pushed his seminal book The Welth of Networks in 2006.',
    },
  ];

  // Create guests/speaker
  const moreSpeaker = document.querySelector('.more-speaker');
  const createSpeaker = (speaker) => {

    const newSpeaker = document.createElement('div');
    const newSpeakerImage = document.createElement('div');
    const newSpeakerimg = document.createElement('img');
    const newSpeakerDescriptions = document.createElement('div');
    const newSpeakerDescriptionsH2 = document.createElement('h2');
    const newSpeakerDescriptionsSpan1 = document.createElement('span');
    const newSpeakerDescriptionsSpan2 = document.createElement('span');
    const newSpeakerDescriptionsSpan3 = document.createElement('span');

    // Add classes
    newSpeaker.className = 'speaker';
    newSpeakerImage.className = 'speaker-image';
    // newSpeakerimg.alt = 'Speaker';
    newSpeakerDescriptions.className = 'speaker-description';
    newSpeakerDescriptionsH2.className = 'name';
    newSpeakerDescriptionsSpan1.className = 'job-title';
    newSpeakerDescriptionsSpan2.className = 'line';
    newSpeakerDescriptionsSpan3.className = 'experience';

    // Assign values
    newSpeakerimg.src = `${speaker.image}`;
    newSpeakerDescriptionsH2.textContent = speaker.name;
    newSpeakerDescriptionsSpan1.textContent = speaker.job;
    newSpeakerDescriptionsSpan3.textContent = speaker.experience;

    // Construct a speaker div
    newSpeakerDescriptions.appendChild(newSpeakerDescriptionsH2);
    newSpeakerDescriptions.appendChild(newSpeakerDescriptionsSpan1);
    newSpeakerDescriptions.appendChild(newSpeakerDescriptionsSpan2);
    newSpeakerDescriptions.appendChild(newSpeakerDescriptionsSpan3);
    newSpeakerImage.appendChild(newSpeakerimg);
    newSpeaker.appendChild(newSpeakerImage);
    newSpeaker.appendChild(newSpeakerDescriptions);

    return newSpeaker;
  };

  speakers.forEach((speaker) => {
    moreSpeaker.insertAdjacentElement('beforebegin', createSpeaker(speaker));
  });
});