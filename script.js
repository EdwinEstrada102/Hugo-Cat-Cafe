const tipP = document.querySelector("#studying-tip");
//haha long array go brrrrrrrrrr
const studyingTips = [
  "Vary your study locations: Changing up where you study keeps things fresh, helps you focus, and improves retention. Instead of spending hours in one place, move around to different rooms. Try going to a café or the library. It is good, however, to study in a familiar place, so when you do vary your study locations, choose places you know, and frequent those places consistently.",
  "Take lots of breaks:  Studies show “cramming” hinders retention and makes it difficult to process information. Instead of studying for a long block of time, break it into shorter sessions with frequent breaks in between to refresh and refocus.",
  "Snack healthily: There’s a reason it’s called “brain food”! Healthy snacks like fruits and nuts, and well-rounded meals are better for your body and high in energy, which helps improve cognitive function. Snack often, perhaps during your study breaks while you switch up your location.",
  "Chew gum: According to scientists, the act of chewing stimulates your mind and keeps you focused. Chewing gum while studying can give your brain a much needed boost.",
  "Take a walk: On one of your periodic study breaks, instead of going on Facebook or taking a short nap, go for a walk. Try some quick fitness routines. Keeping your body physically active will keep your mind stimulated.",
  "Study before bed: It’s widely known that a full-night’s sleep is important to overall brain function and improves memory . Studies also suggest studying before bed helps you process and absorb information more thoroughly. Try studying the most difficult material before sleep (but not when you’re too tired that you fall asleep studying), and avoid all-nighters (especially the night before the test) because this prevents you from properly retaining information.",
  "Recopy your notes: You should take notes during classes and as you’re studying, but actually rewriting these notes afterwards reinforces the information in your mind. Don’t type your notes— writing them by hand forces you to focus more closely on what you’re writing, and if you used shorthand the first time, write everything out so it’s clearer when you reread your notes.",
  "Write in different colored ink: Varied colors are good for visual memory, so using different colored sticky notes, index cards, and other visual aids is good for studying. However, you can also study effectively by writing your notes in different colors. This helps break up information and make your notes more visually stimulating. Also, put the highlighter away! Studies show that highlighting can have the opposite effect.",
  "Use apps or programs to avoid distractions: Do you find yourself drifting towards Facebook, your emails, and other digital distractions? There’s an app for that! Some websites, tools, and apps will block certain sites from your devices for a period of time. Check out some of these great ways to unplug and avoid the sites that keep you from focusing.",
  "Listen to low, classical music: Many people say that listening music helps them study better. Loud music with fast, multilayered melodies can, however, detract from your focus. If listening to music, choose an instrumental piece—something classical or jazz—and play it lowly in the background so it does not interfere with your work.",
  "Studying for final: Space out your learning schedule. Do a little each day and focus on the concepts that you need to review on. However, do not get distracted by your phone or other things, but devote your full effort to learning into the amount of time that you have set for yourself. Study smarter, not harder.",
  "Sleepy or tired when studying? Go ahead and close your device and rest. Come back to study with a conscious mind and determination to succeed. The more you force yourself when you are not in your best mood will only waste your time.", 
  "Feeling unmotivated to study: Find someone you can study with whether it be a friend or a family member. Have them work on their stuff while you work on yours. You seeing them do work will motivate you to study too.",
  "Set up before studying: Have your supplies (ex: markers, highlighters, pencils) ready with you before studying. Choose a table with good space where you can place your items. Having everything you need with you will not make you lose your momentum of studying and makes it more convenient."
]

function randomTip() {
  randomInt = Math.floor(Math.random() * studyingTips.length);
  tipP.innerHTML = "Cool Tip: " + studyingTips[randomInt];
}

const dictButton = document.querySelector("#dictionary-button");
const dictQuery = document.querySelector("#dictionary-query");
//lmao
const dictHolder = document.querySelector("#dictionary-holder");

dictButton.addEventListener("click", async (e) => {
  let definition = dictQuery.value;
  let queryResults = `https://api.dictionaryapi.dev/api/v2/entries/en/${definition}`;
  const response = await fetch(queryResults);
  const responseJson = await response.json();
  let result = "";
  if(responseJson.title=="No Definitions Found"){
    result = "Word/phrase is invalid, try another word!"
  }
  else {
    let listOfDefinitions = responseJson[0].meanings;
  for (x of listOfDefinitions) {
    result += `<h2>` + x.partOfSpeech + `</h2>`
    for (let i = 0; i < x.definitions.length; i++) {
      result += `<p>` + (i + 1) + ". " + x.definitions[i].definition + '</p>';
    }
  }
  }
  dictHolder.innerHTML = result;


})

//create close button for to do list
/*var nodeList = document.getElementsByTagName("li");
console.log(nodeList)
for (var i = 0; i < nodeList.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  nodeList[i].appendChild(span);
}
//actually close
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/

toDoButton = document.querySelector("#new-element");

toDoButton.addEventListener("click", (e) => {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("empty node");
  } else {
    //console.log("its breaking here")
    document.querySelector("#list-append").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  //console.log("u got some issues here")
  span.appendChild(text);
  li.appendChild(span);
  let close = document.querySelectorAll(".close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }


})



//Drinking Water Section 
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${68 - (8.5 * fullCups)}oz`;
  }
}

//noooooooooooooo not another long liiiiiiiiiiiiiiiist
const playlistList = [
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdbXrPNafg9d?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYcDQ1hSjOpY?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVFeEut75IAL?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
]
let r = 0;
const musicHolder = document.querySelector("#music-holder");

function nextPlaylist() {
  if(r==playlistList.length-1){
    r = 0;
  }
  else {
    r++;
  }
  musicHolder.innerHTML = playlistList[r];
}

function prevPlaylist() {
  if(r==0){
    r = playlistList.length-1;
  }
  else {
    r--;
  }
  musicHolder.innerHTML = playlistList[r];
}

//reminder feature
const timeHolders = document.querySelectorAll(".time");
const addTaskHolder = document.querySelector("#reminders");
const taskHolder = document.querySelector("#reminder-holder");
const sound = new Audio('videoplayback.mp3');

function remind(){
  let timeNow = new Date();
  let hourNow = timeNow.getHours();
  let minuteNow = timeNow.getMinutes();
  let secondNow = timeNow.getSeconds();
  let task = addTaskHolder.value;
  console.log("Reminding")
  let time = 0;
  let factor = 3600000;
  for(let i=0; i<timeHolders.length; i++) {
    if(timeHolders[i].value==""){
      timeHolders[i].value = 0;
    }
    time += timeHolders[i].value * factor;
    factor /= 60;
  }
  hourNow += parseInt(timeHolders[0].value);
  minuteNow += parseInt(timeHolders[1].value);
  secondNow += parseInt(timeHolders[2].value);
  let mON = "";
  if(hourNow<12) {
    mON = "AM";
  }
  else {
    mON = "PM";
  }
  while(secondNow >= 60) {
    secondNow -= 60;
    minuteNow++;
  }
  while(minuteNow >= 60) {
    minuteNow -= 60;
    hourNow++;
  }
  while(hourNow > 12) {
    hourNow -= 12;
  }
  let result = `<p>Alarm will ring for \"` + task + ` \" at `;
  if(hourNow == 0){
    result += `12:`;
  }
  else{
    if(hourNow<10){
      result += `0`;
    }
    result += hourNow + `:`;
  }
  if(minuteNow<10){
    result += `0`;
  }
  result += minuteNow + ` ` + mON + `</p>`;
  taskHolder.innerHTML += result;
  console.log(time)
  setTimeout(() => {
        sound.play();
        alert(task);
    }, time);
}


//converter 
function lengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;
}

//GUIs
const main = document.querySelector("#cats");
const cat1 = document.querySelector("#cat1");
const cat2 = document.querySelector("#cat2");
const cat3 = document.querySelector("#cat3");
const cat4 = document.querySelector("#cat4");
const cat5 = document.querySelector("#cat5");
const cat6 = document.querySelector("#cat6");

function toMain() {
  const sectionList = document.querySelectorAll("section");
  for(x of sectionList){
    if(!x.classList.contains("hidden")){
      x.classList.add("hidden");
      main.classList.remove("hidden")
    }
  }
}

cat1.addEventListener('click', () => {
  const cat1GUI = document.querySelector("#cat1GUI");
  cats.classList.add("hidden");
  cat1GUI.classList.remove("hidden");
});

cat2.addEventListener('click', () => {
  const cat2GUI = document.querySelector("#cat2GUI");
  cats.classList.add("hidden");
  cat2GUI.classList.remove("hidden");
});

cat3.addEventListener('click', () => {
  const cat3GUI = document.querySelector("#cat3GUI");
  cats.classList.add("hidden");
  cat3GUI.classList.remove("hidden");
});

cat4.addEventListener('click', () => {
  const cat4GUI = document.querySelector("#cat4GUI");
  cats.classList.add("hidden");
  cat4GUI.classList.remove("hidden");
});

cat5.addEventListener('click', () => {
  const cat5GUI = document.querySelector("#cat5GUI");
  cats.classList.add("hidden");
  cat5GUI.classList.remove("hidden");
});

cat6.addEventListener('click', () => {
  const cat6GUI = document.querySelector("#cat6GUI");
  const lengthDiv = document.querySelector("#lengthDiv");
  const calcDiv = document.querySelector("#calculatorDiv");
  cats.classList.add("hidden");
  cat6GUI.classList.remove("hidden");
  lengthDiv.classList.remove("hidden");
  calcDiv.classList.remove("hidden");
});

function showCalculator() {
  const calculator = document.querySelector("#calculator");
  const calcDiv = document.querySelector("#calculatorDiv");
  calculator.classList.remove("hidden");
  calcDiv.classList.add("hidden");
}

function showLength() {
  const length = document.querySelector("#length");
  const lengthDiv = document.querySelector("#lengthDiv");
  length.classList.remove("hidden");
  lengthDiv.classList.add("hidden");
}

let feet = document.getElementById("feet");
let meter = document.getElementById("meter");
let inch = document.getElementById("inches");
let cm = document.getElementById("cm");
let yard = document.getElementById("yards");
let km = document.getElementById("km");
let mile = document.getElementById("miles");

function feetToOther(val){
  meter.value = val/3.2808; 
  inch.value = val*12;   
  cm.value = val/0.032808; 
  yard.value = val*0.33333;  
  km.value = val/3280.8; 
  mile.value = val*0.00018939;       
}
function meterToOther(val){
  feet.value = val*3.2808;
  inch.value = val*39.370;  
  cm.value = val/0.01;
  yard.value = val*1.0936; 
  km.value = val/1000;
  mile.value = val*0.00062137;
}
function inchesToOther(val){
  feet.value = val*0.083333;
  meter.value = val/39.370;  
  cm.value = val/0.39370;
  yard.value = val*0.027778; 
  km.value = val/39370;
  mile.value = val*0.000015783;
}
function cmToOther(val){
  feet.value = val*0.032808;
  meter.value = val/100;  
  inch.value = val*0.39370;
  yard.value = val*0.010936; 
  km.value = val/100000 ;
  mile.value = val*0.0000062137;
}
function yardsToOther(val){
  feet.value = val*3;
  inch.value = val*36;  
  cm.value = val/0.010936;
  meter.value = val/1.0936; 
  km.value = val/1093.6;
  mile.value = val*0.00056818;
}
function kmToOther(val){
  feet.value = val*3280.8;
  inch.value = val*39370;  
  cm.value = val*100000;
  yard.value = val*1093.6; 
  meter.value = val*1000;
  mile.value = val*0.62137;
}
function milesToOther(val){
  feet.value = val*5280;
  inch.value = val*63360;  
  cm.value = val/0.0000062137;
  yard.value = val*1760; 
  km.value = val/0.62137;
  meter.value = val/0.00062137;
}

function convertToOthers(convertFrom,value){    
  switch(convertFrom){
    case "feet" : feetToOther (parseFloat(value)); break;
    case "meter": meterToOther(parseFloat(value)); break;
    case "inch" : inchesToOther(parseFloat(value)); break;
    case "cm"   : cmToOther(parseFloat(value)); break;
    case "yard" : yardsToOther (parseFloat(value)); break;
    case "km"   : kmToOther (parseFloat(value)); break;
    case "mile" : milesToOther(parseFloat(value)); break;
  }
}