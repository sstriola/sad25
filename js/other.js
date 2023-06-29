// sidebar toggle

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const fixedSidebarToggle = document.querySelector('.fixed-sidebar-toggle');
const sidebarHeight = sidebar.offsetHeight;

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

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
    cardDetailsTitle1.textContent = 'Заведующий' ;
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
  }else if (cardId === 5) {
    cardDetailsTitle1.textContent = 'Повар';
    cardDetailsDescription1.textContent = 'Готовит настолько вкусно, что мамы наших детей берут рецепты.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Белорусский аграрно-технический университет, инженер-механик. Курсы повара 4-го разряда. Участие в мастер-классах по итальянской и японской кухне.';
  }else if (cardId === 6) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = 'Воспитатель старшей группы. Специализация на подготовке детей к школе. Диплом 3 степени Фонда Президента РБ среди студенческих научных работ.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Международный гуманитарно-экономический университет, психолог, преподаватель психологии. Сертификат гештальт-терапевта Московского гештальт-института.';
  }else if (cardId === 7) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = 'Воспитатель средней группы. Специализация на гуманитарных направлениях развития детей (развитие речи, грамота, чтение).';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Минский государственный лингвистический университет, лингвист, преподаватель иностранных языков (английский, немецкий).';
  }else if (cardId === 8) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = 'Опыт преподавания английского языка различным возрастным группам. Автор научно-исследовательских работ. 2-ое место на областной олимпиаде по английскому языку среди школьников Гомельской области.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Мозырский государственный педагогический университет им. И.П. Шамякина, учитель английского языка. Сертификаты International House и CELTA.';
  }else if (cardId === 9) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = 'Воспитатель средней группы. Специализация на развитии элементарных математических представлений, проектной и исследовательской деятельности дошкольников. Большой опыт работы воспитателем. Профессионально увлекается фитнесом, Zumba. Участник конкурса «Воспитатель года». Ведущая методических объединений для воспитателей г.Минска.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Белорусский государственный университет имени М.Танка, дошкольное образование. Дипломы «Инструктор детского фитнеса” (Grantello Fitness School), “Фитнес инструктор групповых программ” (Академия фитнеса).';
  }else if (cardId === 10) {
    cardDetailsTitle1.textContent = 'Учитель дефектолог';
    cardDetailsDescription1.textContent = 'Учитель-дефектолог 1 категории. Автор пособия «Игры по формированию правильного звукопроизношения у дошкольников»';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Минский государственный педагогический институт им. М. Горького, учитель-логопед, логопед дошкольных учреждений. Курсы повышения квалификации.';
  }else if (cardId === 11) {
    cardDetailsTitle1.textContent = 'Учитель музыки, вокала и фортепиано';
    cardDetailsDescription1.textContent = 'Опыт работы учителем музыки, музыкальным руководителем. Участие в многочисленных конкурсах в качестве педагога, призовые места учеников (в т.ч. гран-при). Призовые места в вокальных конкурсах учителей музыки. Автор песни для отборочного тура детского Евровидения.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Витебский государственный университет им.П.М Машерова, учитель музыки. Магистр педагогики';
  }else if (cardId === 12) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = '9 лет обучения в заслуженном ансамбле танца "ЗУБРЁНОК" на звание хореограф. Работает в лучших детских студиях г. Минска. Постоянный дипломированный тренер международных танцевальных сборов SummerDanceCamp от Белорусской Лиги Танцев. Действующий танцор в составе команды PowerRangers (бывшие StreetMasters). Многочисленные награды как танцора брейк-данса';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Школа с хореографическим уклоном. Высшее незаконченное. Белорусский государственный университет, физик-нанотехнолог. Получил звание брейк-данс танцора в школе StreetMasters.';
  }else if (cardId === 13) {
    cardDetailsTitle1.textContent = 'Педиатр';
    cardDetailsDescription1.textContent = 'Профессиональный врач-педиатр. Опыт работы участковым педиатром в детской поликлинике, действующий педиатр Детской инфекционной больницы. Вторая квалификационная категория.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Минский государственный медицинский университет, врач-педиатр';
  }else if (cardId === 14) {
    cardDetailsTitle1.textContent = 'Воспитатель';
    cardDetailsDescription1.textContent = 'Опытный воспитатель младшей и средней группы.';
    cardDetailsTitle2.textContent = 'Образование';
    cardDetailsDescription2.textContent = 'Высшее. Минский государственный педагогический институт им. М. Горького';
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
