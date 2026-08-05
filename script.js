/* ==========================================
   BIRTHDAY SURPRISE V6
   SCRIPT PART 1
========================================== */

// ===============================
// PAGES
// ===============================

const pages = document.querySelectorAll(".page");

const loadingPage = document.getElementById("loadingPage");
const welcomePage = document.getElementById("welcomePage");
const passwordPage = document.getElementById("passwordPage");
const countdownPage = document.getElementById("countdownPage");
const birthdayPage = document.getElementById("birthdayPage");
const letterPage = document.getElementById("letterPage");
const journeyPage = document.getElementById("journeyPage");
const galleryPage = document.getElementById("galleryPage");
const favoritePage = document.getElementById("favoritePage");
const proposalPage = document.getElementById("proposalPage");
const giftPage = document.getElementById("giftPage");
const finalPage = document.getElementById("finalPage");

// ===============================
// SHOW PAGE
// ===============================

function showPage(page){

pages.forEach(p=>{

p.classList.remove("active");

});

page.classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ===============================
// LOADING
// ===============================

const loadingProgress =
document.getElementById("loadingProgress");

const loadingText =
document.getElementById("loadingText");

let progress = 0;

const loadingInterval = setInterval(()=>{

progress++;

loadingProgress.style.width =
progress + "%";

loadingText.innerHTML =
progress + "%";

if(progress >= 100){

clearInterval(loadingInterval);

setTimeout(()=>{

showPage(welcomePage);

},500);

}

},30);

// ===============================
// START BUTTON
// ===============================

const startBtn =
document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

showPage(passwordPage);

});

// ===============================
// MUSIC
// ===============================

const bgMusic =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click",()=>{

if(musicPlaying){

bgMusic.pause();

musicBtn.innerHTML="🎵";

musicPlaying=false;

}

else{

bgMusic.play().catch(()=>{});

musicBtn.innerHTML="⏸";

musicPlaying=true;

}

});

/* ==========================================
   PASSWORD
========================================== */

const PASSWORD = "Shavish";

const passwordInput =
document.getElementById("passwordInput");

const passwordError =
document.getElementById("passwordError");

const unlockBtn =
document.getElementById("unlockBtn");

unlockBtn.addEventListener("click",checkPassword);

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

function checkPassword(){

const value=passwordInput.value.trim();

if(value===PASSWORD){

passwordError.innerHTML="";

showPage(countdownPage);

if(!musicPlaying){

bgMusic.play().catch(()=>{});

musicBtn.innerHTML="⏸";

musicPlaying=true;

}

startCountdown();

}

else{

passwordError.innerHTML="Wrong Password ❤️";

passwordInput.style.animation="shake .4s";

setTimeout(()=>{

passwordInput.style.animation="";

},400);

}

}

/* ==========================================
   COUNTDOWN
========================================== */

// CHANGE THIS DATE

const birthday = new Date("2026-08-08T00:00:00").getTime();

const days=
document.getElementById("days");

const hours=
document.getElementById("hours");

const minutes=
document.getElementById("minutes");

const seconds=
document.getElementById("seconds");

let countdownTimer=null;

function startCountdown(){

updateCountdown();

clearInterval(countdownTimer);

countdownTimer=setInterval(

updateCountdown,

1000

);

}

function updateCountdown(){

const now=new Date().getTime();

const distance=

birthday-now;

if(distance<=0){

clearInterval(countdownTimer);

showPage(birthdayPage);

return;

}

days.innerHTML=

Math.floor(

distance/

(1000*60*60*24)

);

hours.innerHTML=

Math.floor(

(distance%

(1000*60*60*24))

/

(1000*60*60)

);

minutes.innerHTML=

Math.floor(

(distance%

(1000*60*60))

/

(1000*60)

);

seconds.innerHTML=

Math.floor(

(distance%

(1000*60))

/

1000

);

}

/* ==========================================
   LETTER PAGE
========================================== */

const letterBtn =
document.getElementById("letterBtn");

const journeyBtn =
document.getElementById("journeyBtn");

const typewriter =
document.getElementById("typewriter");

const letterText = `Happy Birthday My Beautiful Laaduu ❤️

Today is your special day...

And I wanted to make something
that you will always remember.

Thank you...

For every smile...

Every laugh...

Every hug...

Every beautiful memory.

You are not just
my girlfriend...

You are my best friend...

My peace...

My happiness...

My home...

No matter what happens,

I will always choose you.

I will always respect you.

I will always love you.

Happy Birthday

My Beautiful Laaduu ❤️

Forever Yours,

Bravish ❤️`;

let typingStarted = false;

let letterIndex = 0;

function typeLetter(){

if(letterIndex >= letterText.length){

return;

}

typewriter.innerHTML +=

letterText.charAt(letterIndex);

letterIndex++;

setTimeout(typeLetter,35);

}

/* ==========================
   Birthday -> Letter
========================== */

letterBtn.addEventListener("click",()=>{

showPage(letterPage);

if(!typingStarted){

typingStarted=true;

typeLetter();

}

});

/* ==========================
   Letter -> Journey
========================== */

journeyBtn.addEventListener("click",()=>{

showPage(journeyPage);

});

/* ==========================================
   GALLERY
========================================== */

const galleryBtn =
document.getElementById("galleryBtn");

const favoriteBtn =
document.getElementById("favoriteBtn");

const galleryImage =
document.getElementById("galleryImage");

const dots =
document.querySelectorAll(".dot");

const photos=[

"photo1.jpeg",

"photo2.jpeg",

"photo3.jpeg",

"photo4.jpeg",

"photo5.jpeg",

"photo6.jpeg",

"photo7.jpeg",

"photo8.jpeg"

];

let currentPhoto=0;

function updateDots(){

dots.forEach(dot=>{

dot.classList.remove("active");

});

if(dots[currentPhoto]){

dots[currentPhoto].classList.add("active");

}

}

function showPhoto(index){

galleryImage.classList.add("fade");

setTimeout(()=>{

galleryImage.src=photos[index];

galleryImage.classList.remove("fade");

updateDots();

},300);

}

function nextPhoto(){

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

showPhoto(currentPhoto);

}

/* ==========================
   Journey -> Gallery
========================== */

galleryBtn.addEventListener("click",()=>{

showPage(galleryPage);

showPhoto(currentPhoto);

});

/* ==========================
   Auto Slider
========================== */

setInterval(()=>{

if(galleryPage.classList.contains("active")){

nextPhoto();

}

},2500);

/* ==========================
   Favourite
========================== */

favoriteBtn.addEventListener("click",()=>{

showPage(favoritePage);

});

/* ==========================
   Preload Images
========================== */

photos.forEach(src=>{

const img=new Image();

img.src=src;

});

/* ==========================================
   PROPOSAL MODULE
========================================== */

const proposalBtn =
document.getElementById("proposalBtn");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

/* ==========================
   Favourite -> Proposal
========================== */

proposalBtn.addEventListener("click",()=>{

showPage(proposalPage);

});

/* ==========================
   NO BUTTON MOVE
========================== */

function moveNoButton(){

const parent=
document.querySelector(".proposalButtons");

const maxX=
parent.clientWidth-
noBtn.offsetWidth;

const maxY=
parent.clientHeight-
noBtn.offsetHeight;

const x=Math.random()*maxX;

const y=Math.random()*maxY;

noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

noBtn.addEventListener(

"mouseenter",

moveNoButton

);

noBtn.addEventListener(

"touchstart",

(e)=>{

e.preventDefault();

moveNoButton();

},

{passive:false}

);

/* ==========================
   YES BUTTON
========================== */

yesBtn.addEventListener("click",()=>{

showPage(giftPage);

});

/* ==========================================
   GIFT + FINAL PAGE
========================================== */

const giftBox =
document.getElementById("giftBox");

const replayBtn =
document.getElementById("replayBtn");

/* ==========================
   GIFT OPEN
========================== */

giftBox.addEventListener("click",()=>{

giftBox.style.pointerEvents="none";

giftBox.style.transition=".8s";

giftBox.style.transform="scale(1.25) rotate(15deg)";

giftBox.style.opacity="0";

setTimeout(()=>{

showPage(finalPage);

startConfetti();

},900);

});

/* ==========================
   REPLAY STORY
========================== */

replayBtn.addEventListener("click",()=>{

currentPhoto=0;

typingStarted=false;

letterIndex=0;

typewriter.innerHTML="";

passwordInput.value="";

passwordError.innerHTML="";

showPage(welcomePage);

});

/* ==========================
   PAGE FADE EFFECT
========================== */

document.querySelectorAll(".page").forEach(page=>{

page.addEventListener("transitionend",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});

/* ==========================================
   CONFETTI ENGINE
========================================== */

const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

function resizeCanvas(){

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let confettiPieces = [];

function createConfetti(){

confettiPieces = [];

const colors = [
"#FFD700",
"#ffffff",
"#ff4d6d",
"#00e676",
"#4dabff"
];

for(let i=0;i<180;i++){

confettiPieces.push({

x:Math.random()*confettiCanvas.width,

y:Math.random()*-confettiCanvas.height,

size:Math.random()*8+4,

speed:Math.random()*4+2,

angle:Math.random()*360,

rotate:Math.random()*8,

color:colors[Math.floor(Math.random()*colors.length)]

});

}

}

function drawConfetti(){

ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);

confettiPieces.forEach(c=>{

ctx.save();

ctx.translate(c.x,c.y);

ctx.rotate(c.angle*Math.PI/180);

ctx.fillStyle=c.color;

ctx.fillRect(
-c.size/2,
-c.size/2,
c.size,
c.size
);

ctx.restore();

c.y+=c.speed;

c.angle+=c.rotate;

if(c.y>confettiCanvas.height+20){

c.y=-20;

}

});

}

let confettiAnimation;

function startConfetti(){

createConfetti();

cancelAnimationFrame(confettiAnimation);

function animate(){

drawConfetti();

confettiAnimation=requestAnimationFrame(animate);

}

animate();

/* Auto Stop after 6 sec */

setTimeout(()=>{

cancelAnimationFrame(confettiAnimation);

ctx.clearRect(
0,
0,
confettiCanvas.width,
confettiCanvas.height
);

},6000);

}

/* ==========================================
   LUXURY BACKGROUND EFFECTS
========================================== */

const heartsContainer =
document.getElementById("hearts");

const goldContainer =
document.getElementById("goldParticles");

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart =
document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "%";

heart.style.fontSize =
(Math.random()*18+14)+"px";

heart.style.animationDuration =
(Math.random()*4+5)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,900);

/* ==========================
   GOLD PARTICLES
========================== */

function createGold(){

const gold =
document.createElement("div");

gold.className = "gold";

gold.style.left =
Math.random()*100 + "%";

gold.style.width =
(Math.random()*5+3)+"px";

gold.style.height =
gold.style.width;

gold.style.animationDuration =
(Math.random()*4+5)+"s";

goldContainer.appendChild(gold);

setTimeout(()=>{

gold.remove();

},9000);

}

setInterval(createGold,350);

/* ==========================
   SHOOTING STAR
========================== */

function shootingStar(){

const star =
document.createElement("div");

star.style.position="fixed";

star.style.top=
Math.random()*40+"%";

star.style.left="-150px";

star.style.width="140px";

star.style.height="2px";

star.style.zIndex="999";

star.style.pointerEvents="none";

star.style.background=
"linear-gradient(90deg,#FFD700,transparent)";

star.style.boxShadow=
"0 0 18px #FFD700";

star.style.transform=
"rotate(-25deg)";

star.style.transition=
"transform 1.8s linear,left 1.8s linear";

document.body.appendChild(star);

requestAnimationFrame(()=>{

star.style.left="120%";

star.style.transform=
"translateY(250px) rotate(-25deg)";

});

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,8000);
