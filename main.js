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

// let number = 2;
// let output;

// switch(number){
//     case 1:
//         output = 'bir';
//         break;

//     case 2:
//         output = 'ikki';
//         break;
        
//     case 3:
//         output = 'uch';
//         break;
        
//     default:
//         output = 'uxxx';
//         break;
// }

// console.log(`Qiymat: ${output}`);

// 1) let, var, const, ninig hoisting xatti xarakati qanday farq qiladi har birini misol bilan tshuntiring!

// console.log(a);
// let a = "bottom";

// let - hoisting ishlamaydi sababi o'zgaruvchiga qiymat berilmasdan avval o'zgaruvchi ostida nima yotganini ko'rib bo'lmaydi

// 2) Quyidagi kodni taxlil qiling va natijani tshuntiring!

// console.log(a);
// var a = bottom;

// bizda consoleda qiymat ko'rinmaydi sababi biz natijani o'zgaruvchiga qiymat bermasdan turib ko'raolmaymiz

// 3) nega const bilan obyekt berilsa unga property qo'shish mumkin emas misol keltiring

// aytaylik bizda o'zgaruvchi const va object bor biz biz constga tegmagan xolda obyektni o'zgartirishimmmiz mumkin misol

//  const user = {
//     ism: "hilola"
// }

// console.log(user);

// 4) java scriptda == va === farqini tushuntiring va quyidagilarni natijasini ayting

// 0 == "0"
// 0 === "0"
// null == undefined
// null === undefined

// 0 == "0" true
// 0 === "0" false
// null == undefined true
// null === undefined false

// 5) quyidagi kodni tshuntiring

// let result = true + false + 10
// console.log(result);

// natija 11 chiqishing sababi java scriptda type correction bor bu true "1" false esa "0" agar biz 1 + 0 = 1
// shu sabab xam result "11"

// 6) logical OR || va nullish coalescing ?? operatorlari o'rtasidagi farq 

// || qiymatlar orasidan true qidiradi agar ikki qiymat teng bo'lsa chap tarafdagini oladi
// ?? bu faqat nullish qiymatlarni qidiradi bizga "salom" va null qiymati berilgan bo'lsa ?? faqat null o'ziga oladi

// 7) quyidagi kodni taxlil qiling "x" ning qaysi qiymatlarida console.log("Yes") chiqadi?

// let x = 0;
// if(x || x === 0){
//     console.log("Yes");
// }

// biz x ga 0 qiymat bersak shunda javob yes bo'ladi

// 8) quyidagicha yozilgan kodda qanday muommo bor 

// if (score = 100){
// console.log("perfext") }

// bu yerda avvalo biz score ga qiymat berib olishimmiz kerak yani

// let score = 100;
// if(score = 100){
//     console.log("perfect");
    
// }

// 9) quyidagi if / else blockini ternary operator yordamida yozing

// if (age >= 18){
//message = allowed}
//else{
//message = "denied"};

// let age = 19
// let canSignin = age >= 18 ? "Allowed" : "Denied"
// console.log(canSignin);

// 10) funksiya deklaratsiya va expression o'rtasidagi farqni tshuntiring va misol keltirin

// orasidagi farq xali tshuntirilmadi

// 11) quyidagi funksiya nima qiladi

// (function(a,b){
//     console.log(a + b);
// })(2,3)

// quyidagi funksiya bizga a ni 2 ga b ni esa 3 tenglab beradi va ikki sonni bir biriga qo'shadi

// 12) quyidagi function ishlaydimi? nega?

// sayHi();
// let sayHi = function(){
//     console.log("hi")
// }

// yo'q ishlamaydi chunki birinchidan sayHi bu function emas va biz functionni boshda elon qilishimmiz kerak

// 13) quyidagi kodni taxlil qiling 

// function foo(a, b = 2, c){
//     console.log(a, b, c);
    
// }
// foo(1, undefined, 3)

// ozgina chatGPT dan maslaxat oldim chunki bu narsani bilmasdim bu yerda default ishga tushgani sabab undefined 2 ga o'tib ketdi va natija 1,2,3
// bo'ldi

// 14) Recursive function nima 
// JAvobini bilmayman chunki mavzu o'tmaganmiz

// 15) Java scriptda nimaga Typeof null nima sababdan object bo;lib chiqadi

// bu 1980 yilda JS asoschilari tomonidan qilingan bug ammo buni to'g'irlashga xarakat qilishsa dunyodagi millionlab saytlar rasvo bo'ladi

// 16) ------------------------------------------

// 17) Quyidagi kod natijasini tshuntiring 

// let obj1 = {name: "Bekzod"};
// let obj2 = obj1
// obj2.name ="Akmal";
// console.log(obj1.name);

// chunki biz obj1 namesini obj2 ga obj2 namesini obj1 ga tenglab qo'ydik

// 18) -----------------------------------------

// 19) Js da NaN nima quyidagi kodni tshuntiring:

// console.log(typeof NaN);
// console.log(NaN === NaN);

// NaN type bu number ammo toliq manosi Not a Number 
// NaN bu xuddi nomalum sondek va biz ikki nomalum narsani bir biri bilan solishtira olmaymiz va bizga natija false bo'ladi

// 20) -------------------------------------------------------
