$(function() {


  /* Nav Toggle on mobile
    ======================================*/

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        $("body").toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });

    $(window).on("resize", function() {
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    });



    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();


    /* Header class on scroll
    =====================================*/

    headerScroll();

    $(window).on("scroll  resize", function() {
        headerScroll();
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= (introH - headerH) ) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }



    /* Smooth Scroll to sections
    =====================================*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });




    /* ScrollSpy
    =====================================*/
    let windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }

    // ---------------intro slider--------------


    let introSlider = $("#introSlider");

    introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600
    });


    $('#introSliderPrev').on('click', function() {
        introSlider.slick('slickPrev')
    });

    $('#introSliderNext').on('click', function() {
        introSlider.slick('slickNext')
    });
    
    
      // -------------------gallery------------------
      
      /* https://kenwheeler.github.io/slick/ */
    let gallerySlider = $("#gallerySlider");

    gallerySlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600
    });


     /*  Aos.js
        https://github.com/michalsnik/aos
    ===============================================*/

    AOS.init({
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 80, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

});

//
function openCardDetails(cardId) {
  var cardDetails = document.querySelector('.card-details');
  var cardDetailsContent = document.querySelector('.card-details-content');
  var cardDetailsTitle1 = document.querySelector('#card-details-title-1');
  var cardDetailsDescription1 = document.querySelector('#card-details-description-1');
  var cardDetailsTitle2 = document.querySelector('#card-details-title-2');
  var cardDetailsDescription2 = document.querySelector('#card-details-description-2');
  var body = document.querySelector('body');

  // Установка соответствующей информации для каждой карточки
  if (cardId === 1) {
    cardDetailsTitle1.textContent = 'Директор';
    cardDetailsDescription1.textContent = 'Опыт работы социальным педагогом, педагогом-психологом с 1 курса университета. Ведущая методических объединений для администрации учреждений образования. Успешная карьера в области HR в крупнейших частных компаниях страны от рекрутера до HR-директора. Победитель в номинации «Профессионал года» в компании численностью более 5 000 сотрудников.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Витебский государственный университет им. П.М. Машерова (диплом с отличием), социальный педагог, практический психолог. Курсы по гештальт-терапии и НЛП-практике. Многочисленные курсы по управлению персоналом.';
  } else if (cardId === 2) {
    cardDetailsTitle1.textContent = 'Руководитель театральной студии';
    cardDetailsDescription1.textContent = 'Опыт участия в постановке профессиональных спектаклей, руководитель детских студий по актерскому мастерству';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Белорусская государственная академия искусств, преподаватель, режиссер';
  } else if (cardId === 3) {
    cardDetailsTitle1.textContent = 'Руководитель танцевальной студии';
    cardDetailsDescription1.textContent = 'Диплом “Инструктор детского фитнеса”, “Фитнес инструктор групповых программ” (Grantello Fitness School). Курсы по детским развивающим направлениям: “здоровая спина”, “профилактика плоскостопия”, “ползание, лазанье”, “силовой класс” в сети фитнес-клубов премиум-класса World Class (г.Москва). Обладатель лицензии по направлению “Zumba”.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Белорусский государственный университет культуры и искусств, хореографическое искусство, руководитель студии, тренер, преподаватель';
  } else if (cardId === 4) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = 'Воспитатель младшей группы. Специализация на творческом развитии и проектной деятельности детей младшего возраста. «Вторая мама» наших малышей';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Белорусский государственный университет культуры и искусств, артистка эстрады, педагог-музыкант';
  }

  cardDetails.style.display = 'block';
  cardDetailsContent.style.overflow = 'auto'; // Добавить скроллинг карточки
  body.style.overflow = 'hidden';
}


function closeCardDetails(event) {
  var cardDetails = document.querySelector('.card-details');
  var cardDetailsContent = document.querySelector('.card-details-content');
  var body = document.querySelector('body');

  if (event.target === cardDetails || event.target === cardDetailsContent) {
    cardDetails.style.display = 'none';
    cardDetailsContent.style.overflow = 'initial'; // Сбросить настройку скроллинга
    body.style.overflow = 'auto'; // Восстановить прокрутку страницы
  }
}

// intro form ----------------------
function validateForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var isValid = true;
  
  // Проверка заполненности полей
  if (name === "") {
    document.getElementById("name").classList.add("input--invalid");
    isValid = false;
  } else {
    document.getElementById("name").classList.remove("input--invalid");
  }
  
  if (phone === "") {
    document.getElementById("phone").classList.add("input--invalid");
    isValid = false;
  } else {
    document.getElementById("phone").classList.remove("input--invalid");
  }
  
  if (email === "") {
    document.getElementById("email").classList.add("input--invalid");
    isValid = false;
  } else {
    document.getElementById("email").classList.remove("input--invalid");
  }
  
  return isValid;
}



// sidebar toggle

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const fixedSidebarToggle = document.querySelector('.fixed-sidebar-toggle');
const sidebarHeight = sidebar.offsetHeight;

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
