document.addEventListener('DOMContentLoaded', () => {
   const links = document.querySelectorAll('.nav__link');
   const header = document.getElementById('header');

   links.forEach((link) => {
      link.addEventListener('click', (e) => {
         // hentikan aksi default 
         e.preventDefault();

         const target = e.target.getAttribute('href').substr(1);
         const sectionElement = document.getElementById(target);

         addActiveClass(e.target);
         scrollToElement(sectionElement)
      });
   });

   // fungsi untuk menambahkan class active  pada nav link yg diklik
   function addActiveClass(navlink) {
      links.forEach(link => link.classList.remove('active'));
      navlink.classList.add('active');
   }

   // fungsi untuk ngescroll secara halus ke section element yang dituju
   function scrollToElement(element) {
      const headerHeight = header.getBoundingClientRect().height;
      const position = element.offsetTop - headerHeight;

      window.scrollTo({
         top: position,
         behavior: 'smooth'
      })
   }
});