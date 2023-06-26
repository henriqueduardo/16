// sempre isolar códigos para evitar erros
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  // fallback - search
  // * verificar se esse código deve ser usado na página atual(se existe elemento em tabContent e tabMenu) -- jogar dentro de um if e verificar com .lenght *
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    // percorrer a lista e adicionar um evento de acordo com o índice -->> clicar na imagem 3 = exibir texto atribuido a imagem 3
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const activeClass = "ativo";
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass); // abrir ao clicar, fechar ao clicar
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

// scroll suave
function initScroll() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      //
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // const top = section.offsetTop;
      // window.scrollTo({
      //   top: top,
      //   behavior: "smooth"
      // });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}

initScroll();

// animação descer página
function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const visibleContent = window.innerHeight * 0.6;
    // distância de cada elemento do topo - cada > forEach
    function animarScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - visibleContent < 0;
        if (sectionVisible) {
          section.classList.add("active");
        }
      });
    }
  }

  animarScroll();
  window.addEventListener("scroll", animarScroll);
}

initAnimationScroll();
