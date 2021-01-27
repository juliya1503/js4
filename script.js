
function info(){
let names = prompt('Введите ваше имя');
let year = +prompt('Введите год рождения');
let naweVremya = +prompt('Введите нынешний год');
let age = naweVremya - year;
    let res = names + ' Вам ' + age + ' лет ';
    return res;
}
alert(info());

console.log(info());

