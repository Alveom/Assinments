function login() {
  const pass = document.getElementById("password");

  const loginBtn = document.getElementById("login-btn");
  loginBtn.addEventListener("click", () => {
    const text = document.getElementById("text");
    if (text.value === "") {
      alert("Please, Enter your name");
    }
    if (pass.value == "123456") {
      showHiddenItems();
      getLasson();
    } else {
      alert("Your Entered Password Is Wrong, Please conteact the admin");
    }
  });
}

function hide(itemHide) {
  itemHide.classList.remove("display");
  itemHide.classList.add("hidden");
}
function show(showItems) {
  showItems.classList.add("display");
  showItems.classList.remove("hidden");
}

function showHiddenItems() {
  const visiable = document.getElementById("visiable");
  const faq = document.getElementById("faq");
  const navBer = document.getElementById("nav-ber");
  const learn = document.getElementById("learn");
  const wordsContainer = document.getElementById("words-container");
  hide(visiable);
  my_modal_1.showModal();
  show(faq);
  show(navBer);
  show(learn);
  show(wordsContainer);
}

function logout() {
  const visiable = document.getElementById("visiable");
  const navBer = document.getElementById("nav-ber");
  const faq = document.getElementById("faq");
  const learn = document.getElementById("learn");
  const wordsContainer = document.getElementById("words-container");
  show(visiable);
  hide(faq);
  hide(navBer);
  hide(learn);
  hide(wordsContainer);
}

async function getLasson() {
  try {
    const Url = "https://openapi.programming-hero.com/api/levels/all";
    const res = await fetch(Url);
    const datas = await res.json();
    datas.data.forEach((data) => {
      return lasson(data.level_no);
    });
  } catch {
    console.log("error!!");
  }
}

function lasson(lassonData) {
  const div = document.createElement("div");
  const addLasson = document.getElementById("learn-collection");

  div.innerHTML = `
      
       <button id="btn-${lassonData}"  onclick='display(${lassonData})' class="btn w-35 active select-content border-purple-800  hover:bg-purple-800 hover:text-white">
          <div class="px-2">
            <img src="assets/Symbol.png" alt="" />
          </div>
        
          lesson-${lassonData}
        
    <button>
    
  `;
  addLasson.appendChild(div);
}

function removeActive() {
  const active = document.getElementsByClassName("active");
  for (let btn of active) {
    btn.classList.remove("bg-purple-800", "text-white");
  }
}
// <div class="p-10 bg-white text-center poppins">
//   <div class="">
//     <h3 class="text-xl py-2 font-bold">WORD</h3>
//     <h3 class="text-gray-700 font-light">meaning/pronounce</h3>
//     <h3 class="atma text-3xl text-gray-400 font-semibold py-2">
//       sdfsdf/sddsd
//     </h3>
//     <div class="flex justify-between w-ful items-center py-2">
//       <div class="bg-[#1a90ff4f]">
//         <img src="assets/Vector.png" alt="" />
//       </div>
//       <div class="bg-[#1a90ff3f]">
//         <img src="assets/fi-sr-volume.png" alt="" />
//       </div>
//     </div>
//   </div>
// </div>
async function display(id) {
  try {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    removeActive();
    const btnData = document.getElementById(`btn-${id}`);
    btnData.classList.add("bg-purple-800", "text-white");

    return showWordContant(data.data);
  } catch {
    console.log("error");
  }
}

function showWordContant(data) {
  const wordContainer = document.getElementById("words-container");
  wordContainer.innerHTML = "";

  if (!data || data.length === 0) {
    const div = document.createElement("div");
    wordContainer.classList.remove("grid", "gap-2", "gap-y-5", "grid-cols-3");
    div.innerHTML = `
       <div class="flex items-center flex-col text-center py-6">
          <div>
            <img src="assets/alert-error.png" alt="" />
          </div>
          <div>
            <h3 class="atma font-light text-lg">
              এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </h3>
            <h3 class="siliguri font-bold text-xl">নেক্সট Lesson এ যান</h3>
          </div>
        </div>
    `;
    wordContainer.appendChild(div);
  } else {
    data.forEach((info) => {
      const div = document.createElement("div");

      wordContainer.classList.add("grid", "gap-2", "gap-y-5", "grid-cols-3");
      div.innerHTML = `

    <div class="p-10 bg-white text-center poppins">
          <div class="">
            <h3 class="text-xl py-2 font-bold">${info.word}</h3>
            <h3 class="text-gray-700 font-light">meaning/pronunciation</h3>
            <h3 class="atma text-xl text-gray-400 font-semibold py-2">
              ${info.meaning ? info.meaning : " অর্থ নেই"}/${info.pronunciation}
            </h3>
            <div class="flex justify-between w-ful items-center p-2">
              <div  onclick="my_modal_2.showModal(), getDetails('${
                info.id
              }')" class="bg-[#1a90ff4f] p-2 rounded-lg">
                <img src="assets/Vector.png" alt="" />
              </div>
              <div onclick= "pronounceWord('${
                info.word
              }')" class="bg-[#1a90ff3f]  p-2 rounded-lg">
                <img src="assets/fi-sr-volume.png" alt="" />
              </div>
            </div>
          </div>
        </div>
  `;
      wordContainer.appendChild(div);
    });
  }
}

async function getDetails(id) {
  try {
    const url = `https://openapi.programming-hero.com/api/word/${id} `;
    const res = await fetch(url);
    const info = await res.json();
    return details(info.data);
  } catch {
    console.log("get details function error");
  }
}

// id
// :
// 20
// level
// :
// 6
// meaning
// :
// "শান্ত / নিরিবিলি"
// partsOfSpeech
// :
// "adjective"
// points
// :
// 4
// pronunciation
// :
// "ট্রাঙ্কুইল"
// sentence
// :
// "The park was a tranquil place to relax."
// synonyms
// :
// (3) ['peaceful', 'calm', 'serene']
// word
// :
// "Tranquil"
// [[Prototype]]
// :
// Object

function details(info) {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
   <div class="flex font-semibold text-2xl">
            <h3 class="px-1">${info.word}</h3>
            <div>
              <h3 class="flex px-1">
                (
                <img class="px-1" src="assets/fi-ss-microphone.png" alt="" />:
                <span class="px-1 atma">${info.pronunciation}</span> )
              </h3>
            </div>
          </div>

          <div class="py-9 font-medium">
            <h3>Meaning</h3>
            <h3 class="atma">${info.meaning ? info.meaning : "অর্থ নেই"}</h3>
          </div>
          <div>
            <h3 class="font-medium">Example</h3>
            <h3 class="font-light text-gray-500">${info.sentence}</h3>
          </div>
          <div class="py-9">
            <h3 class="font-medium text-lg atam">সমার্থক শব্দ গুলো</h3>
            <div class="flex">
              <h3 class="bg-[#EDF7FF] p-2">${info.synonyms}</h3>
            </div>
          </div>
  `;
  console.log(info);
  detailsContainer.appendChild(div);
}

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

login();
