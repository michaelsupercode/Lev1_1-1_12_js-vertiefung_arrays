//Lev1_1_1//
let adress = [
    `Wellingerstr`,
    73274,
    `Kirchheim`,
    `Baden-Württemberg`
]

let bestFr = [
    `Pontus`,
    `Paula`,
    `Flitzie`
]

let pers = [
    `Michael`,
    `Hanel`,
    59,
    `Badminton`,
    `Stuttgart`
]

let person = [
    [`Michael`, `Hanel`, 59, `Badminton`, `Stuttgart`],
    [`Wellingerstr`, 73274, `Kirchheim`, `Baden-Württemberg`],
    [`Pontus`, `Paula`, `Flitzie`]
]
console.log(person);
console.log(person[2]);

//Lev1_1_2//
console.log(person.length); //3
console.log(person[2]); //5//4//3//

//Lev1_2_js_arrays_3//
let meineTrainer1 = [
    `Eric`,
    `Steffen`,
    `Simon`,
    `Ahmed`
]
console.log(meineTrainer1);

let meineTrainer2 = new Array(`Eric`, `Steffen`, `Simon`, `Ahmed`);
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = `Simon`;
meineTrainer3[1] = `Steffen`;
meineTrainer3[2] = `Finn`;
console.log(meineTrainer3);

//Lev1_3//
let numberArray = [
    5, 6, 7, 8, 9, 10
]
console.log(numberArray);
console.log(numberArray[5]);

//Lev1_4//
let meinTxt1 = (`Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.`);
let meinTxt2 = (`Wie geht es dir heute?`);
let meinTxt3 = (`Heute ist ein großer Tag für uns.`);
console.log(meinTxt3);

let split1 = meinTxt1.split();
let split2 = meinTxt1.split("");
let split3 = meinTxt1.split(" ");
console.log(split3);

//Lev1_5_1//
let songs = [`Bohemian Rhapsody`, `Stairway to Heaven`, `Hotel California`]
songs.push(`Sweet child of mine`);
songs.push(`Hey Jude`, `Smells like teen spirit`);
console.log(songs);

let soccer = [`Lionel Messi`, `Pele`, `Maradona`, `Ronaldo`, `Zidane`]
soccer.push(`Buffon`, `Casillas`, `Kahn`);
console.log(soccer);

const artists = [`michael`, `elvis`]
artists.push(`charlie`, `justin`);
artists.push(`Simeone`, `Trappatoni`, `Klopp`);
console.log(artists);

//Lev1_5_2//
let heroAndEnemy = [
    [`Batman`, `the Joker`],
    [`Professor X`, `Magneto`],
    [`Thor`, `Loki`]
]
heroAndEnemy.push(
    [`Superman`, `Lex Luther`], [`Wolverine`, `Sabretooth`], [`Ghost Rider`, `Mephisto`]
)
console.log(heroAndEnemy);

//Lev1_6//
console.log(songs);
cutSong = songs.pop();
console.log(songs);
console.log(cutSong);

console.log(soccer);
cutSocc = soccer.pop();
console.log(cutSocc);
cutSocc = soccer.pop();
cutSocc = soccer.pop();
cutSocc = soccer.pop();
console.log(soccer); //da fehlt wohl noch was!!

//Lev1_7//
let deutscheGerichte = [
    `Speckkuchen`,
    `Thüringer Rostbratwurst`,
    `Quarkkeulchen`,
    `Sauerbraten`
]
deutscheGerichte.unshift(`Rindsrouladen`, `Kohlrouladen`, `Schweinebraten`, `Wiener Schnitzel`, `Bratkartoffeln`);
console.log(deutscheGerichte);

//Lev1_8//
deutscheGerichte.shift(),
    deutscheGerichte.shift(),
    deutscheGerichte.shift();
let nichtGut = [
    `Rindsrouladen`,
    `Kohlrouladen`,
    `Schweinebraten`
]
console.log(nichtGut);

//Lev1_9//
let numbers = [23, 54, 75]
numbers.push(11, 32, 42, 5, 71);
numbers.unshift(1, 3, 7, 8, 14);
numbers.pop(), numbers.pop();
numbers.shift(), numbers.shift(),
    console.log(numbers);

//Lev1_10//
let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
]
let delImg1 = array.splice(4, 4);
let delImg2 = array.splice(6, 5);
console.log(delImg2);
console.log(array);
let delImg3 = array.splice(2);
console.log(delImg3);
console.log(array);

//Lev1_11//
var array5 = [`imageTeilnehmer000supercode.jpg`, `imageTeilnehmer001supercode.jpg`];
array5.splice(2, 0, `imageTeilnehmer008supercode.jpg`, `imageTeilnehmer009supercode.jpg`, `imageTeilnehmer010supercode.jpg`);
array5.splice(5, 0, `imageTeilnehmer014supercode.jpg`, `imageTeilnehmer015supercode.jpg`, `imageTeilnehmer016supercode.jpg`, `imageTeilnehmer017supercode.jpg`, `imageTeilnehmer018supercode.jpg`, `imageTeilnehmer019supercode.jpg`);
array5.splice(2, 0, `imageTeilnehmer002supercode.jpg`, `imageTeilnehmer003supercode.jpg`, `imageTeilnehmer004supercode.jpg`, `imageTeilnehmer005supercode.jpg`, `imageTeilnehmer006supercode.jpg`, `imageTeilnehmer007supercode.jpg`);
array5.splice(5, 0, `imageTeilnehmer011supercode.jpg`, `imageTeilnehmer012supercode.jpg`, `imageTeilnehmer013supercode.jpg`);
array5.sort();
console.log(array5);

//Lev1_12//
let array6 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
let copyImg1 = array6.slice(7, 15);
let copyImg2 = array6.slice(6, 12);
console.log(copyImg1);