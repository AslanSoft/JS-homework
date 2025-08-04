// let ism = null;
// console.log(ism??"laylo");

// bu yerda agar ism null yoki undifined teng bo'lsa ismni o'rniga layloni chiqaradi sababi ?? bu operator nullish operatori hisoblanadi.
// va null yoki undifinedni qidiradi

// let num = 14;
// console.log(num??"laylo");
// // bu yerda laylo chiqadi


// let name = undefined;
// console.log(name?? "bosit");

// let ism = null
// console.log("baxrom" ?? ism);

// let name = "bobur";
// console.log(name || null);


// let num = 14;
// console.log(num || undefined);

// let ism = "aslan";
// console.log(null || ism);

// let yosh = 10;

// if(yosh>11){
//     console.log("Katta");
// }
// else if(yosh == 10){
//     console.log("suring maktabga");
// }
// else{
//     console.log("kichik");
// }

// const isEqual = 15 === 5;
// console.log(isEqual);

// let num = 8;
// console.log(num % 4);


// let x = 45;
// let y = 15;
// let result = x * y;
// console.log(result);

// let num = 49;
// num++;
// console.log(num);


// let ism = "aslanov";

// if(ism <= 5){
//     console.log("ism teng emas");
// }
// else{
//     console.log("teng");
// }


// let num = 5;
// let son = 7;
// console.log(num = son);


// console.log(null || "salom" && undefined);

// function mushukkaovqatberish(ism, idish){
//     console.log(`${ism}ga bugun ${idish} berildi`);
    
// }

// mushukkaovqatberish ("faris", "korm");

// function ishgaborish(ish, manzil){
//     console.log(`${ish}ga ertalab borish kerak adresi esa ${manzil}`);
    
// }
// ishgaborish("Fargo", "Navoiy ko'chasi");

// function telnizaryadlash(tel, usb){
//     console.log(`men xar kuni kechqurun ${tel}imni uxlashdan oldin ${usb}ga qo'yib uxlayman`);
// }
// telnizaryadlash("telefon", "zaryadlash qurilmasi");

// const isAdult = true;
// const hasTicket = true;
// console.log(isAdult && hasTicket);

// const isAdult = true;
// const hasTicket = false;
// // console.log(isAdult || hasTicket);
// const age = 20;
// const hasTicket = true;

// console.log(age >= 18 && hasTicket);

// const result = 10 + 5 * 2;
// console.log(result);

// let ism = "jaxon"
// let num = 15
// console.log(undefined || null);

// let global_scope = 15
// console.log(global_scope);

// local scope

// function Hello(){
//     let salom = "salom"
// }
// console.log("salom");

// function evenOrOdd(number) {
//  let number = 14;
//  if( >= 16){
//    console.log(biggest);
//  }
//   else{
//     console.log(smallest);
//   }
// }
// evenOrOdd();

// let productPrice = 100;
// let hasTicket = true;
// let memberTicket = true;

// if (productPrice + hasTicket - 0.90){
//     console.log("chegirma qo'shildi" + productPrice);
// }

let number = 2;
let output;

switch(number){
    case 1:
        output = 'bir';
        break;

    case 2:
        output = 'ikki';
        break;
        
    case 3:
        output = 'uch';
        break;
        
    default:
        output = 'uxxx';
        break;
}

console.log(`Qiymat: ${output}`);
