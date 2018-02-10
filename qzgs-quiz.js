var preload = [
    "images/host.jpg",
	"images/wzx.jpg",
	"images/finger.png",
	"images/empty.png"
];

var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

var script;                 // this variable will hold our script
var wzx;
var host;
var n;

function prepareNovel()
{
    novel.imagePath = "images/"; 
    novel.audioPath = ""; 
    
    // initialize yur characters, positions, and text blocks here
    host = new Character("Ведущий",
        {
            image: "host.jpg",
			color: "#ff0",
            position: new Position(0.03, .75, 0, 1)
        }
    );
    wzx = new Character("Ван Цзеси",
        {
            image: "wzx.jpg",
			color: "#9f9",
            position: new Position(0.04, .75, 0, 1)
        }
    );
    n = new Character("");
    
    // and put your script commands into this array
    script = [
        sub, "showWzx",
        show, wzx,
        hide, host,
        endSub, "",
        
        sub, "showHost",
        hide, wzx,
        show, host,
        endSub, "",
		
        label, "start",
        scene, "empty.png",
        n, "Кто лучше всего вам подходит??<br />Проверьте!!",
		
		call, "showHost",
		host, "Сегодня у нас особый гость! Капитан команды &ldquo;Маленькая Трава&rdquo;, увенчанный титулом &ldquo;Волшебник&rdquo;, великий Бог Ван Цзеси согласился провести со мной эту часть программы!",
		
		call, "showWzx",
		wzx, "Привет всем.",
		
		call, "showHost",
		host, "Я слышал, что Бог Цзеси необычайно искусен в гаданиях и предсказаниях. Мы надеемся, что вы поделитесь с нами своими особыми умениями.",
		
		call, "showWzx",
		wzx, "Это просто любимое хобби, я далеко не профессионал.",
		hide, wzx,
		
		label, "quest",
        menu, [
            "Пожалуйста, выберите свой пол.",
            "Женщина", [jump, "quest2"],
            "Мужчина", [jump, "quest28"],
			"Догадайтесь", [jump, "quest1"]
        ],
		
		label, "quest1",
		menu, [
            "Вам стоило бы выбрать. Теперь читайте этот вопрос.",
            "Да", [jump, "quest10"],
            "Нет!<br><i>(Поздно, вы уже прочитали)</i>", [jump, "quest4"],
        ],
		
		label, "quest2",
		menu, [
            "Какая форма вам нравится?",
            "<b>&#9651;</b> - треугольник", [jump, "quest6"],
            "<b>&#9675;</b> - круг", [jump, "quest3"],
			"<b>&#9633;</b> - квадрат", [jump, "quest7"],
        ],
				
		label, "quest3",
		menu, [
			"Вы пришли на встречу с другом на час раньше, чем договаривались. Чем вы займетесь?",
			"Буду сидеть в том месте, где мы должны встретиться", [jump, "quest5"],
			"Найду Интернет-кафе и поиграю, пока не выйдет время", [jump, "quest4"],
			"Я никогда не прихожу рано", [jump, "quest9"],
			"Буду сидеть у выхода из метро и развлекаться играми на телефоне, доставая друга просьбами приехать побыстрее", [jump, "quest8"],
			"Прогуляюсь по окрестностям", [jump, "quest11"],
		],
		
		label, "quest4",
		menu, [
			"Ваша скорость печати на клавиатуре…",
			"В четыре-шесть раз быстрее, чем у Юй Вэньчжоу. Я как бушующий шторм: разбиваю клавиатуру вдребезги", [jump, "quest15"],
			"Наверное, такая же, как у Юй Вэньчжоу. Я обычный человек", [jump, "quest17"],
			"Пожалуйста, назовите среднюю скорость печати Юй Вэньчжоу, чтобы я знал, с чем сравнивать", [jump, "quest10"],
			"Мне не нужно знать свою скорость! Я и одним пальцем все завоюю…", [jump, "quest18"],
		],
		
		label, "quest5",
		menu, [
			"Вы когда-нибудь выигрывали что-нибудь в лотерее?",
			"Да", [jump, "quest11"],
			"Нет", [jump, "quest12"],
			"Никогда не участвовал. Говорят, пить выигрываемые в лотерее напитки опасно для жизни", [jump, "quest20"],
		],
		
		label, "quest6",
		menu, [
			"Согласно хиромантии, линии на вашей ладони упорядочены?",
			"Да", [jump, "quest22"],
			"Нет", [jump, "quest23"],
			"Я не понимаю, о чем вы говорите", [jump, "quest19"],
			"Я не суеверен! Хиромантия, говорите? Ага, херомантия!", [jump, "quest12"],
		],
		
		label, "quest7",
		menu, [
			"Как вы отреагируете, если обнаружите потерянный кошелек?",
			"Отдам его полиции", [jump, "quest11"],
			"Это суперспособность старины Ханя", [jump, "quest16"],
			"Это ловушка!", [jump, "quest17"],
			"Посмотрю, что внутри, а потом напишу пост о потерянном кошельке на Weibo", [jump, "quest25"],
		],
		
		label, "quest8",
		menu, [
			"Какой стиль вы предпочитаете в одежде?",
			"Милый", [jump, "quest14"],
			"Крутой", [jump, "quest10"],
			"Зрелый", [jump, "quest13"],
			"У меня нет определенного стиля. Ношу то, что подходит мне по размеру", [jump, "quest15"],
		],
		
		label, "quest9",
		menu, [
			"В воскресенье такая прекрасная погода, вы…",
			"Буду спать", [jump, "quest15"],
			"Выйду и поиграю на улице", [jump, "quest10"],
			"Останусь дома", [jump, "quest17"],
		],
		
		label, "quest10",
		menu, [
			"<img src="images/finger.png" alt="finger" /><br />Глядя на эту картинку, вы думаете о…",
			"=&#9633;= Нажать-нажать-нажать-нажать-нажать (или почесаться)", [jump, "quest16"],
			"Это средний палец Хуан Шаотяня?", [jump, "quest23"],
			"Откуда там лишняя линия? Ошибка типографии?", [jump, "quest18"],
		],

		label, "quest11",
		menu, [
			"Какие упражнения вы делаете чаще всего?",
			"Ходьба", [jump, "quest17"],
			"Бег", [jump, "quest14"],
			"Приседания", [jump, "quest20"],
		],		
		
		label, "quest12",
		menu, [
			"Какие упражнения вы делаете чаще всего?",
			"Ходьба", [jump, "quest17"],
			"Бег", [jump, "quest14"],
			"Приседания", [jump, "quest20"],
		],	

    ];
}
