// Домашнее задание №1

// let str = "строка";
// let int1 = 10;
// let int2 = 20;
// let bool = true;
//
//
// console.log("переменная str","Тип - "+typeof str, "Значение - "+str);
// console.log("переменная int1","Тип - "+typeof int1, "Значение - "+int1);
// console.log("переменная int2","Тип - "+typeof int2, "Значение - "+int2);
// console.log("переменная bool","Тип - "+typeof bool, "Значение - "+bool);
//
// let summ = int1 + int2;
// let ruzn = int2 - int1;
// let proiz = int1 * int2;
// let div = int2 / int1;
// let stepen = int1 ** int2;
//
// console.log ("Сумма int1 и int2 =", summ);
// console.log("Разность int2 и int1 =", ruzn);
// console.log("Произведение int1 и int2 =", proiz);
// console.log("Частное int2 и int1 =", div);
// console.log("Частное int1 в сетпени int2 =", stepen);
//
// let strs = "Несколько простых слов";
// let arrStrings = strs.split(" ");
//
// console.log("Массив слов из переменной strs", arrStrings);

// Домашнее задание №2
//функция запускаемая кнопкой для вывода пароля
function vuewPass() {
    let len =  document.getElementById('num_let').value;        //получаем значение количства символов из инпута
    let elForVuewPass = document.getElementById('gen_pass');    //получаем елемент для вывода сгенерированного пароля

    if(!len || len <1){                                                 //проверяем что в поле указано количество символов меньше 0 и вывоодим ошибку
        elForVuewPass.innerHTML = "<b>Нужно выбрать количество символов для пароля больше 1!</b>";
        return
    }

    console.log("Генерируем пароль из "+len+" символов");

    let pass = generatePass(len);                                       //генерируем новый пароль и сохраняем его в переменную pass
    elForVuewPass.innerHTML = "Ваш новый пароль - <b>"+pass+"</b>";     //выводим новый пароль с описанием в html блок для вывода
}

//функция для умножения двух чисел
function multipli(a,b){
    //проверяем если переданы не числа
    if(typeof a !='number' || typeof b !='number'){
        return "Аргументы должны быть числом";
    }
    //возвращаем результат
    return a*b;
}

//функция проверки простого числа
function testNum(a){
    //если число делится на 1 и на само себя
    if(a/1 == a && a/a == 1){
        //возвращаем истину
        return true;
    }else{
        //иначе возвращаем ложь
        return false
    }
}

//функция генератор паролей
function generatePass(len){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";   //набор символов для генерации пароля
    let passArr = [];                                                                           //массив для хранения выбранных символов
    for(let i=0; i<len; i++){                                                                   //проходим циклом. Количество проходом равно количеству символов пароля
        let rand = Math.floor(Math.random() * chars.length);                                 //генерируем рандомное число от 0 до количества симфолов для генерации и округляем в меншую сторону
        passArr.push(chars[rand]);                                                              //выбираем символ с индексом равным сгенерированному числу и добавляем символ в массив
    }
    return passArr.join('');                                                                    //возвращаем массив символов объенный в строку с пустым разделителем
}

