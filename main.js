    const nav = document.getElementById('navbar');
    const brandText = document.getElementById('navBrandText');
    const navLinks = document.querySelectorAll('.navLink');
    const cta = document.getElementById('ctaBtn');
    const navPill = document.getElementById('navPill');

    function onScroll(){
      if (window.scrollY > 50){
        nav.classList.add('nav-scrolled');
        nav.classList.remove('nav-transparent');

        brandText?.classList.remove('text-white');
        brandText?.classList.add('text-accent');

        navPill?.classList.add('pill-on-white');

        navLinks.forEach(l=>{
          l.classList.remove('text-white');
          l.classList.add('text-accent');
        });

        if (cta){
          cta.classList.remove('btn-light');
          cta.classList.add('btn-primary');
        }
      } else {
        nav.classList.remove('nav-scrolled');
        nav.classList.add('nav-transparent');

        brandText?.classList.add('text-white');
        brandText?.classList.remove('text-accent');

        navPill?.classList.remove('pill-on-white');

        navLinks.forEach(l=>{
          l.classList.add('text-white');
          l.classList.remove('text-accent');
        });

        if (cta){
          cta.classList.add('btn-light');
          cta.classList.remove('btn-primary');
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth'});
      });
    });
