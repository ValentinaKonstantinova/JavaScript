function reg(){
    let email = document.getElementById('email').value;
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    let div_error = document.getElementById('form_block_error');
    if(!email){
        div_error.innerText = "Вы не ввели email";
        return;
    }
    if(!validateEmail(email)){
        div_error.innerText = "Введен некорректный email";
        return;
    }
    if(!pass1){
        div_error.innerText = "Вы не ввели пароль";
        return;
    }
    if(!pass2){
        div_error.innerText = "Вы не ввели подтверждение пароля";
        return;
    }

    if(pass1.length < 6){
        div_error.innerText = "Пароль слишком короткий";
        return;
    }
    if(pass1 != pass2){
        div_error.innerText = "Пароли не совпадают";
        return;
    }
    div_error.innerText = "Регистрация прошла успешно!";
    setTimeout(()=>{
        window.location.href = "signin.html";
    },2000);
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//функции для глубокого копирования объектов

let arrObj = {
    1:{'index':1, 'name':"test1"},
    2:{'index':2, 'name':"test2"},
    3:{'index':3, 'name':"test3"},
    4:{'index':4, 'name':"test4"},
};
//Способ 1
colorLog("Способ 1 - structuredClone()", "success");
//делаем копию массива с объектами
let copyArr1 = structuredClone(arrObj);
//изменяем 1 элемент в копии с index = 1 и name = test1 на 11 и test11 соответственно
copyArr1[1].index = 11;
copyArr1[1].name = "test11";
//проверяем результат
console.log("Основной массив arrObj 1 элемент - ", `index = ${arrObj[1].index} name = ${arrObj[1].name}`);
console.log("Скопированный массив copyArr1 1 элемент - ", `index = ${copyArr1[1].index} name = ${copyArr1[1].name}`);

//способ 2 (не сработает для функций того что не возможно преобразовать в JSON)
colorLog("Способ 2 - JSON", "success");
let copyArr2 = JSON.parse(JSON.stringify(arrObj));
//изменяем 1 элемент в копии с index = 1 и name = test1 на 11 и test11 соответственно
copyArr2[1].index = 22;
copyArr2[1].name = "test22";
//проверяем результат
console.log("Основной массив arrObj 1 элемент - ", `index = ${arrObj[1].index} name = ${arrObj[1].name}`);
console.log("Скопированный массив copyArr2 1 элемент - ", `index = ${copyArr2[1].index} name = ${copyArr2[1].name}`);

//способ 3 (не сработает для функций того что не возможно преобразовать в JSON)
colorLog("Способ 3 - рекурсия", "success");
let copyArr3 = deepCopy(arrObj);
//изменяем 1 элемент в копии с index = 1 и name = test1 на 11 и test11 соответственно
copyArr3[1].index = 33;
copyArr3[1].name = "test33";
//проверяем результат
console.log("Основной массив arrObj 1 элемент - ", `index = ${arrObj[1].index} name = ${arrObj[1].name}`);
console.log("Скопированный массив copyArr3 1 элемент - ", `index = ${copyArr3[1].index} name = ${copyArr3[1].name}`);
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Если не объект, возвращаем значение как есть
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
function colorLog(message, color = "black" ) {
    switch (color) {
        case "success":
            color = "Green";
            break;
        case "info":
            color = "DodgerBlue";
            break;
        case "error":
            color = "Red";
            break;
        case "warning":
            color = "Orange";
            break;
        default:
            color = color;
    }
    console.log("%c" + message, "color:" + color);
}