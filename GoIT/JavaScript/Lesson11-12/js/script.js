
  $(function() {

  	var html = $('#CV').html();
  	var data = {
      name: 'Фуринець Ксенія Вікторівна',
  		img: '"img/me.jpg"',
  		speciality: 'Начальник отдела ценных бумаг',
  		firstLine: 'Хочу работать фриланс!',
  		secondLine: 'Мечтаю путешествовать по миру',
  		thirdLine: 'Чуствую невероятное влечение к тегам!',
      phoneNumber: '+380662084026',
  		vk: '"http://vk.com/ksu_ferik"',
  		feedback: 'Расскажу и научу, как и где прыгать роупджампинг,объясню систему навески и даже покажу несколько узлов',
  	};
   	var content = tmpl(html, data);
   
  	$('body').append(content);
  	
    $('.carousel-hider').carousel();
  });