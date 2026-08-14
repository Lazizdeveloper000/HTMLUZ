// ============================================================
// DATA
// ============================================================
const SUBJECTS = [
  { id:'html', label:'HTML', icon:'📄', color:'var(--html)', btnColor:'#e44d26', btnText:'#fff' },
  { id:'css',  label:'CSS',  icon:'🎨', color:'#5b8ef0',    btnColor:'#264de4', btnText:'#fff' },
  { id:'js',   label:'JavaScript', icon:'⚡', color:'var(--js)', btnColor:'#f0db4f', btnText:'#111' },
];

const QUESTIONS = {
html: [
// Oson 1-35
{q:"HTML nima?",o:["Dasturlash tili","Ma'lumotlar bazasi","Veb sahifa yaratish uchun belgilash tili","Operatsion tizim"],a:2,lvl:"Oson"},
{q:"HTML qisqartmasi nimani anglatadi?",o:["HyperText Markup Language","HyperText Making Language","High Tech Modern Language","Home Tool Markup Language"],a:0,lvl:"Oson"},
{q:"HTML faylining kengaytmasi qanday?",o:[".css",".js",".html",".txt"],a:2,lvl:"Oson"},
{q:"`<html>` tegi vazifasi nima?",o:["Sahifa nomini ko'rsatadi","Butun HTML hujjatini o'rab oladi","Sarlavha yozadi","Rasm ko'rsatadi"],a:1,lvl:"Oson"},
{q:"`<head>` tegi nima uchun ishlatiladi?",o:["Sahifa kontentini ko'rsatish","Meta ma'lumotlar va bog'liqliklarni saqlash","Rasm qo'shish","Havola yaratish"],a:1,lvl:"Oson"},
{q:"`<body>` tegi nima uchun kerak?",o:["Sahifaning ko'rinadigan kontenti uchun","Sahifa sarlavhasi uchun","CSS ulanishi uchun","Skript yozish uchun"],a:0,lvl:"Oson"},
{q:"`<title>` tegi qayerda yoziladi?",o:["<body> ichida","<footer> ichida","<head> ichida","<section> ichida"],a:2,lvl:"Oson"},
{q:"`<h1>` tegi nima qiladi?",o:["Eng kichik sarlavha yozadi","Eng katta sarlavha yozadi","Paragraf yozadi","Havola qo'shadi"],a:1,lvl:"Oson"},
{q:"`<h6>` tegi nima qiladi?",o:["Eng katta sarlavha","Eng kichik sarlavha","O'rtacha sarlavha","Qalin matn"],a:1,lvl:"Oson"},
{q:"`<p>` tegi nima uchun ishlatiladi?",o:["Rasm qo'shish","Paragraf yozish","Havola yaratish","Jadval yaratish"],a:1,lvl:"Oson"},
{q:"`<br>` tegi vazifasi nima?",o:["Gorizontal chiziq","Yangi qator","Paragraf","Bo'shliq"],a:1,lvl:"Oson"},
{q:"`<hr>` tegi nima qiladi?",o:["Yangi qator qo'shadi","Gorizontal chiziq chizadi","Sarlavha qo'shadi","Matn qalinlashtiradi"],a:1,lvl:"Oson"},
{q:"HTML kommentariyasi qanday yoziladi?",o:["// komment","/* komment */","<!-- komment -->","# komment"],a:2,lvl:"Oson"},
{q:"`<a>` tegi nima uchun ishlatiladi?",o:["Rasm ko'rsatish","Havola (link) yaratish","Jadval yaratish","Ro'yxat yaratish"],a:1,lvl:"Oson"},
{q:"`href` atributi nima?",o:["Rasmning manzili","Havolaning manzili","Matn rangi","Sahifa sarlavhasi"],a:1,lvl:"Oson"},
{q:"`<img>` tegi nima qiladi?",o:["Video qo'shadi","Audio qo'shadi","Rasm ko'rsatadi","Jadval yaratadi"],a:2,lvl:"Oson"},
{q:"`src` atributi nima?",o:["Matn kattaligi","Rasm yoki media faylining manzili","Havolaning rangi","Element identifikatori"],a:1,lvl:"Oson"},
{q:"`alt` atributi nima uchun kerak?",o:["Rasm rangi uchun","Rasm yuklanmasa ko'rsatiladigan matn","Rasm o'lchami","Rasm nomi"],a:1,lvl:"Oson"},
{q:"`<ul>` tegi nima?",o:["Tartiblangan ro'yxat","Tartibsiz ro'yxat","Jadval","Havola"],a:1,lvl:"Oson"},
{q:"`<ol>` tegi nima?",o:["Tartibsiz ro'yxat","Rasm","Tartiblangan ro'yxat","Paragraf"],a:2,lvl:"Oson"},
{q:"`<li>` tegi nima?",o:["Havola elementi","Ro'yxat elementi","Jadval elementi","Sarlavha elementi"],a:1,lvl:"Oson"},
{q:"`<table>` tegi nima uchun ishlatiladi?",o:["Ro'yxat uchun","Jadval yaratish uchun","Forma uchun","Rasm uchun"],a:1,lvl:"Oson"},
{q:"`<tr>` tegi nima?",o:["Jadval ustuni","Jadval qatori","Jadval sarlavhasi","Jadval kaptipi"],a:1,lvl:"Oson"},
{q:"`<td>` tegi nima?",o:["Jadval qatori","Jadval sarlavha yacheykasi","Jadval ma'lumot yacheykasi","Jadval kaptioni"],a:2,lvl:"Oson"},
{q:"`<th>` tegi nima?",o:["Oddiy yacheyka","Sarlavha yacheykasi","Jadval qatori","Jadval ramkasi"],a:1,lvl:"Oson"},
{q:"`<form>` tegi nima?",o:["Rasm uchun","Foydalanuvchi ma'lumot kiritishi uchun forma","Video uchun","Ro'yxat uchun"],a:1,lvl:"Oson"},
{q:"`<input>` tegi nima qiladi?",o:["Matn ko'rsatadi","Foydalanuvchidan ma'lumot kiritish maydonini yaratadi","Rasm ko'rsatadi","Jadval yaratadi"],a:1,lvl:"Oson"},
{q:"`type='text'` nima?",o:["Parol maydoni","Elektron pochta maydoni","Oddiy matn kiritish maydoni","Fayl yuklash"],a:2,lvl:"Oson"},
{q:"`type='password'` nima?",o:["Matn maydoni","Parol maydoni (yashirin ko'rinish)","Fayl yuklash","Raqam maydoni"],a:1,lvl:"Oson"},
{q:"`type='email'` nima?",o:["Parol maydoni","Telefon maydoni","Elektron pochta manzili maydoni","Raqam maydoni"],a:2,lvl:"Oson"},
{q:"`<button>` tegi nima?",o:["Kiritish maydoni","Bosib bosiladigan tugma","Havola","Rasm"],a:1,lvl:"Oson"},
{q:"`<label>` tegi nima uchun kerak?",o:["Rasm nomini ko'rsatish","Input maydoniga nom berish","Jadval sarlavhasi","Havola nomi"],a:1,lvl:"Oson"},
{q:"`<textarea>` tegi nima qiladi?",o:["Bitta qatorli matn maydoni","Ko'p qatorli matn kiritish maydoni","Parol maydoni","Jadval"],a:1,lvl:"Oson"},
{q:"`<select>` tegi nima?",o:["Matn maydoni","Ro'yxatdan tanlash (dropdown) elementi","Checkbox","Radio tugma"],a:1,lvl:"Oson"},
{q:"`<option>` tegi nima?",o:["Select elementi ichidagi tanlov variantlari","Jadval elementi","Ro'yxat elementi","Forma elementi"],a:0,lvl:"Oson"},
// O'rta 36-70
{q:"`<div>` tegi nima?",o:["Inline element","Blok-darajadagi konteyner","Ro'yxat elementi","Havola"],a:1,lvl:"O'rta"},
{q:"`<span>` tegi nima?",o:["Blok element","Inline (qatorichi) konteyner","Sarlavha","Paragraf"],a:1,lvl:"O'rta"},
{q:"HTML atributi nima?",o:["Teglarga qo'shimcha ma'lumot beruvchi xususiyat","CSS uslubi","JavaScript kodi","Sahifa tuzilmasi"],a:0,lvl:"O'rta"},
{q:"`class` atributi nima?",o:["Elementning noyob identifikatori","CSS uslublari guruhi uchun nom","Elementning rang","Elementning o'lchami"],a:1,lvl:"O'rta"},
{q:"`id` atributi nima?",o:["Bir nechta elementga beriluvchi nom","Elementning noyob identifikatori","CSS class","Stil nomi"],a:1,lvl:"O'rta"},
{q:"CSS HTML ga qanday ulanadi?",o:["<style> yoki <link> tegi orqali","<div> tegi orqali","<p> tegi orqali","<img> tegi orqali"],a:0,lvl:"O'rta"},
{q:"JavaScript HTML ga qanday ulanadi?",o:["<css> tegi orqali","<script> tegi orqali","<link> tegi orqali","<meta> tegi orqali"],a:1,lvl:"O'rta"},
{q:"`<script>` tegi nima uchun kerak?",o:["CSS ulanishi uchun","JavaScript kodi yoki fayl ulanishi uchun","Rasm qo'shish uchun","Meta ma'lumot uchun"],a:1,lvl:"O'rta"},
{q:"`<link>` tegi nima qiladi?",o:["Sahifaga havola yaratadi","Tashqi resurs (CSS fayl) ni ulaydi","Video qo'shadi","Forma yaratadi"],a:1,lvl:"O'rta"},
{q:"`<meta>` tegi nima?",o:["Ko'rinadigan kontent elementi","Sahifa haqida meta ma'lumot beruvchi teg","Sarlavha elementi","Ro'yxat elementi"],a:1,lvl:"O'rta"},
{q:"Responsive sayt nima?",o:["Faqat kompyuterda chiroyli ko'rinuvchi sayt","Turli qurilmalar ekraniga moslashuvchan sayt","Animatsiyali sayt","Tezkor yuklanuvchi sayt"],a:1,lvl:"O'rta"},
{q:"Semantik HTML nima?",o:["Ko'proq div ishlatish","Ma'no bildiruvchi teglarni to'g'ri ishlatish","Faqat stil uchun teglar","Skript yozish usuli"],a:1,lvl:"O'rta"},
{q:"`<header>` tegi nima?",o:["Jadval sarlavhasi","Sahifa yoki bo'limning yuqori qismi","Footer elementi","Nav elementi"],a:1,lvl:"O'rta"},
{q:"`<footer>` tegi nima?",o:["Sahifa yuqori qismi","Navigatsiya","Sahifa yoki bo'limning quyi qismi","Asosiy kontent"],a:2,lvl:"O'rta"},
{q:"`<nav>` tegi nima vazifani bajaradi?",o:["Rasm galereyasi","Navigatsiya havolalari guruhini belgilaydi","Yon panel","Maqola"],a:1,lvl:"O'rta"},
{q:"`<main>` tegi nima?",o:["Sarlavha elementi","Sahifaning asosiy kontenti","Yon panel","Footer"],a:1,lvl:"O'rta"},
{q:"`<section>` tegi nima?",o:["Inline element","Sahifaning mantiqiy bo'limi","Jadval","Forma"],a:1,lvl:"O'rta"},
{q:"`<article>` tegi nima?",o:["Yon panel","Mustaqil kontent (maqola, xabar)","Navigatsiya","Header"],a:1,lvl:"O'rta"},
{q:"`<aside>` tegi nima?",o:["Asosiy kontent","Yon panel yoki qo'shimcha kontent","Footer","Nav"],a:1,lvl:"O'rta"},
{q:"`<figure>` tegi nima?",o:["Jadval","Mustaqil media kontent (rasm, diagramma)","Havola","Ro'yxat"],a:1,lvl:"O'rta"},
{q:"`<figcaption>` tegi nima?",o:["Rasm manzili","Figure elementining izohi","Rasm o'lchami","Alt matni"],a:1,lvl:"O'rta"},
{q:"`<audio>` tegi nima?",o:["Rasm ko'rsatadi","Video ko'rsatadi","Ovoz faylini o'ynaydi","Animatsiya qo'shadi"],a:2,lvl:"O'rta"},
{q:"`<video>` tegi nima?",o:["Rasm ko'rsatadi","Video ko'rsatadi","Audio o'ynaydi","Canvas yaratadi"],a:1,lvl:"O'rta"},
{q:"`controls` atributi nima?",o:["Avtomatik o'ynash","Media elementiga boshqaruv tugmalarini qo'shadi","Ovozni o'chiradi","Takrorlaydi"],a:1,lvl:"O'rta"},
{q:"`<iframe>` tegi nima?",o:["Rasm qo'shadi","Boshqa sahifani joriy sahifaga joylashtiradi","Video o'ynaydi","Forma yaratadi"],a:1,lvl:"O'rta"},
{q:"`placeholder` atributi nima?",o:["Input maydonidagi qiymat","Input maydonidagi maslahat matn","Input nomi","Input ID si"],a:1,lvl:"O'rta"},
{q:"`required` atributi nima?",o:["Maydonni o'chiradi","Maydonni majburiy qiladi","Maydonni yashiradi","Maydonni faqat o'qish uchun qiladi"],a:1,lvl:"O'rta"},
{q:"`readonly` atributi nima?",o:["Maydonni o'chiradi","Faqat o'qish rejimi (tahrir qilib bo'lmaydi)","Maydonni yashiradi","Majburiy maydon"],a:1,lvl:"O'rta"},
{q:"`disabled` atributi nima?",o:["Elementni ko'rsatmaydi","Elementni faolsizlashtiradi","Elementni kattalashtiradi","Elementni ko'chiradi"],a:1,lvl:"O'rta"},
{q:"`<canvas>` tegi nima?",o:["Rasm ko'rsatadi","JavaScript orqali grafika chizish uchun area","Video o'ynaydi","Jadval yaratadi"],a:1,lvl:"O'rta"},
{q:"`<svg>` nima?",o:["Piksel asosidagi rasm","Vektorli grafika uchun HTML tegi","Video format","Audio format"],a:1,lvl:"O'rta"},
{q:"HTML5 nima?",o:["HTML ning 3-versiyasi","HTML ning 4-versiyasi","HTML ning zamonaviy 5-versiyasi","HTML ning birinchi versiyasi"],a:2,lvl:"O'rta"},
{q:"DOM nima?",o:["CSS fayl formati","Document Object Model — HTML strukturasining ob'ektlar daraxti","JavaScript kutubxonasi","Veb-server"],a:1,lvl:"O'rta"},
// Qiyin 71-100
{q:"`type='radio'` nima?",o:["Ko'p tanlash","Bitta tanlash tugmasi (radio button)","Fayl yuklash","Parol maydoni"],a:1,lvl:"Qiyin"},
{q:"`type='checkbox'` nima?",o:["Bitta tanlov","Belgilash katakchasi (ko'p tanlash mumkin)","Parol","Raqam"],a:1,lvl:"Qiyin"},
{q:"`type='file'` nima?",o:["Matn maydoni","Fayl yuklash maydoni","Raqam maydoni","Email maydoni"],a:1,lvl:"Qiyin"},
{q:"`type='submit'` nima?",o:["Maydonni tozalash tugmasi","Formani serverga yuborish tugmasi","Parol maydoni","Checkbox"],a:1,lvl:"Qiyin"},
{q:"Brauzer HTML ni qanday o'qiydi?",o:["Pastdan yuqoriga","Yuqoridan pastga, chapdan o'ngga","O'ngdan chapga","Tasodifiy tartibda"],a:1,lvl:"Qiyin"},
{q:"`<meta charset='UTF-8'>` nima uchun kerak?",o:["Sahifa rangini belgilash","Sahifa kodlashini UTF-8 qilish","Sahifa muallifi","Sahifa tavsifi"],a:1,lvl:"Qiyin"},
{q:"`<meta name='viewport'>` nima?",o:["SEO uchun","Mobil qurilmalarda to'g'ri ko'rsatish uchun","Rang sxemasi","Favikonka"],a:1,lvl:"Qiyin"},
{q:"HTML da `target='_blank'` nima qiladi?",o:["Havolani joriy oynada ochadi","Havolani yangi tabda/oynada ochadi","Havolani yopadi","Havolani o'chiradi"],a:1,lvl:"Qiyin"},
{q:"`colspan` atributi nima?",o:["Jadval qatorlarini birlashtiradi","Jadval ustunlarini birlashtiradi","Jadval kengligini belgilaydi","Jadval balandligini belgilaydi"],a:1,lvl:"Qiyin"},
{q:"`rowspan` atributi nima?",o:["Ustunlarni birlashtiradi","Qatorlarni birlashtiradi","Jadval sarlavhasi","Jadval kaptioni"],a:1,lvl:"Qiyin"},
{q:"HTML da `data-*` atributlari nima uchun?",o:["Stil berish uchun","Element uchun maxsus ma'lumot saqlash uchun","Rasm qo'shish uchun","Havola yaratish uchun"],a:1,lvl:"Qiyin"},
{q:"HTML validatsiyasi nima?",o:["CSS tekshiruvi","HTML kodining to'g'riligini tekshirish","JavaScript xatolari","Server javobi"],a:1,lvl:"Qiyin"},
{q:"`<!DOCTYPE html>` nima uchun kerak?",o:["CSS qo'shish","Brauzerga HTML5 versiyasini bildirish","JavaScript ulash","Server sozlash"],a:1,lvl:"Qiyin"},
{q:"Self-closing teg nima? Misol keltiring.",o:["<div></div>","<p></p>","<br> yoki <img>","<section></section>"],a:2,lvl:"Qiyin"},
{q:"HTML da `tabindex` atributi nima?",o:["Jadval indeksi","Tab tugmasi bilan navigatsiya tartibini belgilaydi","Rasm indeksi","Sahifa indeksi"],a:1,lvl:"Qiyin"},
{q:"`aria-label` atributi nima uchun?",o:["Rasm uchun alt matn","Ekran o'quvchilar uchun maxsus nom","CSS klasi","JavaScript uchun ID"],a:1,lvl:"Qiyin"},
{q:"Web Accessibility (WCAG) nima?",o:["Veb saytni tezlashtirish","Veb kontentni hamma uchun qulay qilish standartlari","SEO qoidalari","CSS framework"],a:1,lvl:"Qiyin"},
{q:"`<details>` tegi nima qiladi?",o:["Jadval yarataadi","Yashirin/ko'rsatiladigan kontent bloki","Forma yarataadi","Rasm galereyasi"],a:1,lvl:"Qiyin"},
{q:"`<summary>` tegi nima?",o:["Jadval xulosasi","<details> elementining sarlavhasi","Rasm izohi","Maqola xulosasi"],a:1,lvl:"Qiyin"},
{q:"`<template>` tegi nima?",o:["CSS shabloni","JavaScript tomonidan ishlatish uchun HTML shabloni","Sahifa shabloni","Forma shabloni"],a:1,lvl:"Qiyin"},
{q:"HTML da `autocomplete` atributi nima?",o:["Forma avtomatik yuborilishi","Brauzerning avtomatik to'ldirish xususiyati","Maydon tozalash","Parol saqlash"],a:1,lvl:"Qiyin"},
{q:"`<progress>` tegi nima?",o:["Jadval","Jarayon indikatori (progress bar)","Forma","Ro'yxat"],a:1,lvl:"Qiyin"},
{q:"`<meter>` tegi nima?",o:["O'lchov qurilmasi","Ma'lum diapazonda skalyar qiymat ko'rsatuvchi element","Jadval","Forma"],a:1,lvl:"Qiyin"},
{q:"HTML entitiyasi nima? `&nbsp;` nima?",o:["CSS qiymati","HTML da maxsus belgilarni ifodalash; &nbsp; bo'shliq belgisi","JavaScript funksiyasi","Meta ma'lumot"],a:1,lvl:"Qiyin"},
{q:"`<datalist>` tegi nima?",o:["Ma'lumotlar jadvali","Input uchun tavsiya variantlari ro'yxati","Select elementi","Forma maydonlari"],a:1,lvl:"Qiyin"},
{q:"Inline element va blok element farqi nima?",o:["Farq yo'q","Blok yangi qatordan boshlanadi, inline esa yo'q","Inline kattaroq","Blok ranglidir"],a:1,lvl:"Qiyin"},
{q:"`rel='noopener noreferrer'` nima uchun?",o:["SEO uchun","Xavfsizlik: yangi oynadan bog'lanishni cheklash","Havola rang","Havola o'lchami"],a:1,lvl:"Qiyin"},
{q:"HTML da lazy loading nima?",o:["Sahifani sekin yuklash","Rasm/resurslarni faqat ko'rish maydoniga kirganida yuklash","Server keshi","CSS animatsiya"],a:1,lvl:"Qiyin"},
{q:"`<picture>` tegi nima uchun?",o:["Rasm galereyasi","Turli ekran o'lchamlari uchun turli rasm ko'rsatish","Video o'ynash","Canvas yaratish"],a:1,lvl:"Qiyin"},
{q:"Open Graph meta teglari nima uchun?",o:["CSS uchun","Ijtimoiy tarmoqlarda sahifa ko'rinishi uchun","SEO reytingi","JavaScript uchun"],a:1,lvl:"Qiyin"},
],

css: [
// Oson 1-35
{q:"CSS nima?",o:["Dasturlash tili","Belgilash tili","HTML elementlariga uslub beruvchi til","Ma'lumotlar bazasi tili"],a:2,lvl:"Oson"},
{q:"CSS nimaning qisqartmasi?",o:["Cascading Style Sheets","Creative Style System","Computer Style Sheets","Colorful Style Script"],a:0,lvl:"Oson"},
{q:"CSS nima uchun ishlatiladi?",o:["Sahifa tuzilmasi uchun","Sahifa ko'rinishi va dizayni uchun","Server bilan muloqot uchun","Ma'lumot saqlash uchun"],a:1,lvl:"Oson"},
{q:"CSS fayllari qanday kengaytmaga ega?",o:[".html",".js",".css",".txt"],a:2,lvl:"Oson"},
{q:"Inline CSS qanday yoziladi?",o:["<link> tegi","<style> tegi","style='...' atributi orqali to'g'ridan-to'g'ri elementda","Alohida .css fayl"],a:2,lvl:"Oson"},
{q:"Internal CSS qayerda yoziladi?",o:["<body> ichida","<head> ichida <style> tegida","Alohida .css faylda","<footer> ichida"],a:1,lvl:"Oson"},
{q:"External CSS qanday ulanadi?",o:["<script src=''>","<link rel='stylesheet' href=''>","<css href=''>","<style src=''>"],a:1,lvl:"Oson"},
{q:"`color` xossasi nima qiladi?",o:["Fon rangini o'zgartiradi","Matn rangini o'zgartiradi","Chegara rangini o'zgartiradi","Elementni ko'rsatadi"],a:1,lvl:"Oson"},
{q:"`background-color` nima qiladi?",o:["Matn rangini belgilaydi","Element fon rangini belgilaydi","Chegara rangini belgilaydi","Rasm qo'shadi"],a:1,lvl:"Oson"},
{q:"`font-size` nima uchun ishlatiladi?",o:["Shrift oilasini belgilash","Shrift qalinligini belgilash","Shrift o'lchamini belgilash","Shrift rangini belgilash"],a:2,lvl:"Oson"},
{q:"`font-family` nima?",o:["Shrift o'lchami","Shrift qalinligi","Shrift oilasi (turi)","Shrift rangi"],a:2,lvl:"Oson"},
{q:"`text-align` nima qiladi?",o:["Matnni qalinlashtiradi","Matnni gorizontal hizalantirishini belgilaydi","Matnni italik qiladi","Matn o'lchamini o'zgartiradi"],a:1,lvl:"Oson"},
{q:"`margin` nima?",o:["Element ichki bo'shliqi","Element tashqi bo'shliqi","Element chegarasi","Element o'lchami"],a:1,lvl:"Oson"},
{q:"`padding` nima?",o:["Element tashqi bo'shliqi","Element ichki bo'shliqi","Element chegarasi","Fon rangi"],a:1,lvl:"Oson"},
{q:"`border` nima?",o:["Tashqi bo'shliq","Ichki bo'shliq","Element chegarasi (qirrasi)","Fon rangi"],a:2,lvl:"Oson"},
{q:"`width` nima qiladi?",o:["Element balandligini belgilaydi","Element kengligini belgilaydi","Fon o'lchamini belgilaydi","Matn o'lchamini belgilaydi"],a:1,lvl:"Oson"},
{q:"`height` nima qiladi?",o:["Element kengligini belgilaydi","Element balandligini belgilaydi","Chegara o'lchamini belgilaydi","Bo'shliq miqdorini belgilaydi"],a:1,lvl:"Oson"},
{q:"`px` o'lchov birligi nima?",o:["Protsent","Foydali bo'shliq","Piksel — ekran punkti","Em birlik"],a:2,lvl:"Oson"},
{q:"`%` o'lchov birligi nima?",o:["Piksel","Ota elementga nisbatan foiz","Viewport eni","Em birlik"],a:1,lvl:"Oson"},
{q:"`id` selektori CSS da qanday yoziladi?",o:[".idnomi","#idnomi","*idnomi","idnomi"],a:1,lvl:"Oson"},
{q:"`class` selektori qanday yoziladi?",o:["#klassnomi",".klassnomi","*klassnomi","klassnomi"],a:1,lvl:"Oson"},
{q:"Universal selektor qaysi belgi bilan yoziladi?",o:["#",".",">","*"],a:3,lvl:"Oson"},
{q:"`display: block` nima?",o:["Element inline ko'rsatiladi","Element yangi qatordan boshlanib to'liq kenglikni egallaydi","Element yashiriladi","Element grid bo'ladi"],a:1,lvl:"Oson"},
{q:"`display: inline` nima?",o:["Yangi qatordan boshlanadi","Element qator ichida joylashadi","Flex container yaratadi","Grid yaratadi"],a:1,lvl:"Oson"},
{q:"`cursor: pointer` nima qiladi?",o:["Kursorni yashiradi","Kursorni qo'l ko'rinishiga o'zgartiradi","Kursorni olib qo'yadi","Kursorni rasm qiladi"],a:1,lvl:"Oson"},
{q:"`opacity` nima?",o:["Rangni belgilaydi","Element shaffofligi (0=ko'rinmas, 1=to'liq ko'rinadi)","Fon rangi","O'lcham"],a:1,lvl:"Oson"},
{q:"CSS kommentariyasi qanday yoziladi?",o:["// komment","<!-- komment -->","/* komment */","# komment"],a:2,lvl:"Oson"},
{q:"`background-image` nima qiladi?",o:["Fon rangini o'zgartiradi","Elementga fon rasm qo'shadi","Rasm elementini qo'shadi","Rasm o'lchamini belgilaydi"],a:1,lvl:"Oson"}
],

js: [
// Oson va boshqalar
{q:"JavaScript nima?",o:["Veb sahifalarga interaktivlik beruvchi dasturlash tili","Stil beruvchi til","Ma'lumotlar bazasi","Belgilash tili"],a:0,lvl:"Oson"},
{q:"JavaScript qayerda bajariladi?",o:["Faqat serverda","Faqat brauzerda","Ham brauzerda, ham serverda (Node.js)","Faqat operatsion tizimda"],a:2,lvl:"Oson"},
{q:"`console.log()` nima qiladi?",o:["Oyna ochadi","Konsolga ma'lumot chiqaradi","Xatolik beradi","O'zgaruvchi yaratadi"],a:1,lvl:"Oson"}
]
};

let currentSubject = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = false;

// LocalStorage helpers
function getProgress() {
    try {
        return JSON.parse(localStorage.getItem('htmluz_prog') || '{}');
    } catch(e) { return {}; }
}
function saveProgress(subId, data) {
    const p = getProgress();
    p[subId] = data;
    localStorage.setItem('htmluz_prog', JSON.stringify(p));
}

function initHome() {
    const row = document.getElementById('cards-row');
    row.innerHTML = '';
    const prog = getProgress();

    SUBJECTS.forEach(sub => {
        const qList = QUESTIONS[sub.id] || [];
        const total = qList.length;
        const subProg = prog[sub.id] || { completed: false, score: 0, correct: 0 };
        const pct = total > 0 ? Math.round((subProg.correct / total) * 100) : 0;

        const card = document.createElement('div');
        card.className = `subject-card ${sub.id}`;
        card.innerHTML = `
            <div class="card-icon">${sub.icon}</div>
            <div class="card-title">${sub.label}</div>
            <div class="card-info">Savollar soni: ${total} ta</div>
            <div class="card-levels">
                <span class="level-badge badge-easy">Oson</span>
                <span class="level-badge badge-mid">O'rta</span>
                <span class="level-badge badge-hard">Qiyin</span>
            </div>
            <div class="card-progress">
                <div class="card-progress-label">
                    <span>O'zlashtirish</span>
                    <span>${pct}%</span>
                </div>
                <div class="card-progress-bar">
                    <div class="card-progress-fill" style="width: ${pct}%"></div>
                </div>
            </div>
            <button class="start-btn" style="margin-top: 1.2rem;" onclick="startQuiz('${sub.id}')">Testni boshlash</button>
        `;
        row.appendChild(card);
    });
}

function startQuiz(subId) {
    currentSubject = subId;
    currentQuestions = QUESTIONS[subId] || [];
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;

    document.getElementById('home').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('all-done').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');

    const sub = SUBJECTS.find(s => s.id === subId);
    document.getElementById('quiz-title').textContent = `${sub.icon} ${sub.label} Testi`;
    
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];
    const total = currentQuestions.length;

    document.getElementById('q-num').textContent = `Savol ${currentIndex + 1} / ${total}`;
    document.getElementById('q-level').textContent = `Daraja: ${q.lvl}`;
    document.getElementById('q-text').textContent = q.q;

    const fill = document.getElementById('progress-fill');
    fill.style.width = `${((currentIndex) / total) * 100}%`;

    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';

    q.o.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        const letters = ['A', 'B', 'C', 'D', 'E'];
        btn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
        `;
        btn.onclick = () => selectOption(idx, btn);
        optionsEl.appendChild(btn);
    });

    document.getElementById('feedback').className = 'hidden';
    document.getElementById('next-btn').className = 'next-btn hidden';
    document.getElementById('score-display').textContent = score;
}

function selectOption(selectedIdx, btnEl) {
    if (answered) return;
    answered = true;

    const q = currentQuestions[currentIndex];
    const optionBtns = document.querySelectorAll('.option-btn');

    optionBtns.forEach(b => b.disabled = true);

    const feedbackEl = document.getElementById('feedback');
    feedbackEl.classList.remove('hidden');

    if (selectedIdx === q.a) {
        btnEl.classList.add('correct');
        score += 10;
        correctCount++;
        feedbackEl.className = 'feedback-row ok';
        feedbackEl.innerHTML = `✅ To'g'ri! Barakalla!`;
    } else {
        btnEl.classList.add('wrong');
        optionBtns[q.a].classList.add('correct');
        wrongCount++;
        feedbackEl.className = 'feedback-row err';
        feedbackEl.innerHTML = `❌ Noto'g'ri. To'g'ri javob: <b>${q.o[q.a]}</b>`;
    }

    document.getElementById('score-display').textContent = score;
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    const total = currentQuestions.length;
    const pct = Math.round((correctCount / total) * 100);

    document.getElementById('res-score').textContent = score;
    document.getElementById('res-correct').textContent = correctCount;
    document.getElementById('res-wrong').textContent = wrongCount;
    document.getElementById('res-pct').textContent = `${pct}%`;

    let badgeName = "Ajoyib natija!";
    let badgeSub = "Bilimlaringizni yanada mustahkamlang.";
    let trophyEmoji = "🏆";

    if (pct === 100) {
        badgeName = "Mukammal natija! 🌟";
        badgeSub = "Siz bu mavzuni mukammal o'zlashtirg ekansiz!";
        trophyEmoji = "👑";
    } else if (pct >= 80) {
        badgeName = "Juda yaxshi! 🚀";
        badgeSub = "Bilimingiz yuqori darajada.";
    } else if (pct < 50) {
        badgeName = "Yana harakat qiling! 📚";
        badgeSub = "Xatolarni ko'rib chiqib, qayta urinib ko'ring.";
        trophyEmoji = "💡";
    }

    document.getElementById('trophy').textContent = trophyEmoji;
    document.getElementById('badge-name').textContent = badgeName;
    document.getElementById('badge-sub').textContent = badgeSub;

    saveProgress(currentSubject, {
        completed: true,
        score: score,
        correct: correctCount
    });
}

function retryQuiz() {
    startQuiz(currentSubject);
}

function goHome() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('all-done').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    initHome();
}

window.onload = () => {
    initHome();
};