const PIXABAY_API_KEY = 'YOUR_PIXABAY_API_KEY'; // IMPORTANT: Replace with your actual Pixabay API key and consider replacing loremflickr/unsplash with hosted images.

const fruits = [
    { "name": "Apple" },
    { "name": "Banana" },
    { "name": "Orange" },
    { "name": "Grape" },
    { "name": "Strawberry" },
    { "name": "Watermelon" },
    { "name": "Pineapple" },
    { "name": "Mango" },
    { "name": "Peach" },
    { "name": "Cherry" },
    { "name": "Blueberry" },
    { "name": "Raspberry" },
    { "name": "Kiwi" },
    { "name": "Lemon" },
    { "name": "Lime" },
    { "name": "Coconut" },
    { "name": "Pomegranate" },
    { "name": "Avocado" }
];
const slotSymbols = ['🍒', '🍋', '🍊', '🍇', '🍉', '🍓', '🔔', 'BAR', '7️⃣'];
const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Monkey', 'Kangaroo', 'Panda', 'Koala', 'Grizzly Bear', 'Polar Bear', 'Wolf', 'Fox', 'Eagle', 'Owl', 'Dolphin', 'Whale', 'Shark', 'Penguin', 'Crocodile', 'Snake', 'Turtle', 'Frog', 'Horse', 'Cow', 'Pig', 'Sheep', 'Goat', 'Chicken', 'Dog', 'Cat', 'Rabbit', 'Hamster', 'Goldfish', 'Butterfly', 'Bee', 'Ant', 'Spider', 'Scorpion', 'Ladybug', 'Dragonfly', 'Seahorse', 'Jellyfish', 'Octopus', 'Starfish'];
const jobs = ['doctor', 'scientist', 'programmer', 'astronaut', 'pilot', 'chef', 'artist', 'teacher', 'judge', 'architect', 'firefighter', 'police', 'dentist', 'musician', 'athlete', 'lawyer', 'nurse', 'designer', 'farmer', 'baker', 'mechanic', 'photographer', 'journalist', 'diplomat', 'barista', 'soldier', 'professor', 'reporter', 'carpenter', 'diver', 'florist', 'magician', 'painter', 'tailor', 'videographer', 'physicist', 'geologist', 'librarian', 'dancer', 'model', 'actor', 'sailor', 'coach', 'writer', 'dentist'];



const langData = {
    ko: {
        title: "🍀 비주얼 로또/파워볼 픽커",
        search: "검색",
        reset: "초기화",
        placeholder: "검색어 입력 (Enter)",
        numMsg: "",
        randMsg: "사진을 클릭하면 랜덤 번호 추출!",
        animalTestTitle: "동물상 테스트",
        startBtn: "시작",
        contactTitle: "제휴 문의",
        nameLabel: "이름:",
        emailLabel: "이메일:",
        messageLabel: "메시지:",
        submitBtn: "보내기",
        lottoPickerTab: "로또 선택기",
        animalTestTab: "동물상 테스트",
        contactTab: "문의하기",
        lottoInfoTab: "로또 정보",
        aboutTab: "회사소개",
        privacyTab: "개인정보 처리방침",
        numberTab: "숫자",
        dreamTab: "꿈 (직업)",
        fruitTab: "과일",
        slotTab: "슬롯머신",
        animalTab: "동물",
    },
    en: {
        title: "🍀 Visual Lotto/Powerball Picker",
        search: "Search",
        reset: "Reset",
        placeholder: "Enter keyword (Enter)",
        numMsg: "",
        randMsg: "Click a photo for a random number!",
        animalTestTitle: "Animal Face Test",
        startBtn: "Start",
        contactTitle: "Contact Us",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        submitBtn: "Submit",
        lottoPickerTab: "Lotto Picker",
        animalTestTab: "Animal Face Test",
        contactTab: "Contact Us",
        lottoInfoTab: "Lotto Info",
        aboutTab: "About Us",
        privacyTab: "Privacy Policy",
        numberTab: "Number",
        dreamTab: "Dream (Career)",
        fruitTab: "Fruits",
        slotTab: "Slot Machine",
        animalTab: "Animals"
    }
};

let picked = [];
let pickedPowerball = [];
let gameMode = 'lotto'; // 'lotto' or 'powerball'
let currentMode = 'number';
let isEnglish = false;

const gridDiv = document.getElementById('lotto-grid');
const powerballGridDiv = document.getElementById('powerball-grid');
const ballDiv = document.getElementById('selectedBalls');
const modeTitle = document.getElementById('modeTitle');
const searchInput = document.getElementById('customInput');

// For animal face test
const URL = "https://teachablemachine.withgoogle.com/models/D4JCk5RcS/";
let model, webcam, labelContainer, maxPredictions;




function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('modeBtn').innerText = isDark ? "☀️ Light" : "🌙 Dark";
}

function setGameMode(mode) {
    gameMode = mode;
    document.getElementById('lottoBtn').classList.toggle('active', mode === 'lotto');
    document.getElementById('powerballBtn').classList.toggle('active', mode === 'powerball');
    showSection('lotto-picker-section', document.getElementById(mode === 'lotto' ? 'lottoBtn' : 'powerballBtn'));
    changeTab('number', document.querySelector('.nav-btns button'));
    resetAll();
}

function setLanguage(lang) {
    isEnglish = (lang === 'en');
    const langObj = langData[lang];

    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (langObj[key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = langObj[key];
            } else {
                el.innerHTML = langObj[key]; // Changed innerText to innerHTML to handle strong tags
            }
        }
    });

    updateModeTitle();
    document.getElementById('langBtn').innerText = isEnglish ? "🇰🇷" : "🇺🇸";
}

function toggleLanguage() {
    const newLang = isEnglish ? 'ko' : 'en';
    setLanguage(newLang);
}

function updateModeTitle() {
    const lang = isEnglish ? 'en' : 'ko';
    if(modeTitle) {
        modeTitle.innerText = currentMode === 'number' ? langData[lang].numMsg : langData[lang].randMsg;
    }
}

function showSection(sectionId, element) {
    // Only show/hide sections if they are part of the main application flow
    if (sectionId === 'lotto-picker-section' || sectionId === 'animal-face-test-section') {
        document.querySelectorAll('.tab-content').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';

        // Manage active state for internal navigation buttons
        if (element) {
            document.querySelectorAll('.top-bar button').forEach(btn => {
                btn.classList.remove('active');
            });
            element.classList.add('active');
        }
    }
}


if(searchInput) {
    searchInput.addEventListener("keyup", (e) => { if (e.key === "Enter") handleSearch(); });
}

window.onload = () => {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('en') ? 'en' : 'ko');
    showSection('lotto-picker-section', document.getElementById('lottoBtn'));
    document.getElementById('lottoBtn').classList.add('active');
};

function changeTab(mode, btn) {
    currentMode = mode;
    document.querySelectorAll('.nav-btns button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateModeTitle();

    let keywords;
    switch(mode) {
        case 'number':
            keywords = '';
            break;
        case 'dream':
            keywords = jobs;
            break;
        case 'fruit':
            keywords = fruits;
            break;
        case 'slot':
            keywords = slotSymbols;
            break;
        case 'animal':
            keywords = animals;
            break;
        default:
            keywords = '';
    }
    render(keywords);
}

function handleSearch() {
    const val = searchInput.value.trim().toLowerCase();
    if (!val) return;

    if (currentMode === 'fruit') {
        const results = fruits.filter(item => item.name.toLowerCase().includes(val));
        if (results.length > 0) {
            render(results);
        } else {
            gridDiv.innerHTML = '<p>No results found</p>';
        }
    } else {
        currentMode = 'search';
        const lang = isEnglish ? 'en' : 'ko';
        modeTitle.innerText = langData[lang].randMsg;
        render(val);
    }
}

async function render(keywords) {
    if (!gridDiv) return;
    gridDiv.innerHTML = '';
    powerballGridDiv.innerHTML = '';
    document.getElementById('powerball-grid-container').style.display = 'none';

    if (currentMode === 'number') {
        if (gameMode === 'lotto') {
            for (let i = 1; i <= 45; i++) {
                const box = document.createElement('div');
                box.className = 'item';
                box.innerHTML = `<div class="ball">${i}</div>`;
                box.onclick = () => addNum(i);
                gridDiv.appendChild(box);
            }
        } else { // powerball
            document.getElementById('powerball-grid-container').style.display = 'block';
            for (let i = 1; i <= 69; i++) {
                const box = document.createElement('div');
                box.className = 'item';
                box.innerHTML = `<div class="ball white-ball">${i}</div>`;
                box.onclick = () => addNum(i, false);
                gridDiv.appendChild(box);
            }
            for (let i = 1; i <= 26; i++) {
                const box = document.createElement('div');
                box.className = 'item powerball';
                box.innerHTML = `<div class="ball powerball">${i}</div>`;
                box.onclick = () => addNum(i, true);
                powerballGridDiv.appendChild(box);
            }
        }
    } else if (currentMode === 'fruit') {
        for (let i = 0; i < 45; i++) {
            const box = document.createElement('div');
            box.className = 'item';
            
            const fruit = keywords[Math.floor(Math.random() * keywords.length)];
            const finalTag = fruit.name;

            box.onclick = () => {
                pickRandom();
            };

            const img = document.createElement('img');
            img.src = `https://loremflickr.com/200/200/${finalTag}?lock=${i}`; 
            
            img.onerror = () => { 
                img.src = `https://loremflickr.com/200/200/${finalTag}?lock=${i}`; 
            };
            box.appendChild(img);
            gridDiv.appendChild(box);
        }
    } else if (currentMode === 'slot') {
        for (let i = 0; i < 45; i++) {
            const box = document.createElement('div');
            box.className = 'item';
            box.innerHTML = `<div class="num-label" style="font-size: 50px;">${keywords[i % keywords.length]}</div>`;
            box.onclick = () => pickRandom();
            gridDiv.appendChild(box);
        }
    }
    else {
        for (let i = 0; i < keywords.length; i++) {
            const box = document.createElement('div');
            box.className = 'item';
            
            const finalTag = keywords[i];

            box.onclick = () => {
                pickRandom();
            };

            const img = document.createElement('img');
            img.src = `https://source.unsplash.com/200x200/?${finalTag}`;
            
            img.onerror = () => { 
                img.src = `https://loremflickr.com/200/200/${finalTag}?lock=${i}`; 
            };
            box.appendChild(img);
            gridDiv.appendChild(box);
        }
    }
}

function addNum(n, isPowerball = false) {
    if (gameMode === 'lotto') {
        if (picked.length >= 6 || picked.includes(n)) return;
        picked.push(n);
    } else { // powerball
        if(isPowerball) {
            if (pickedPowerball.length >= 1) return;
            pickedPowerball = [n];
        } else {
            if (picked.length >= 5 || picked.includes(n)) return;
            picked.push(n);
        }
    }
    updateUI();
}

function pickRandom() {
    if (gameMode === 'lotto') {
        if (picked.length >= 6) return;
        let r;
        do { r = Math.floor(Math.random() * 45) + 1; } while (picked.includes(r));
        picked.push(r);
    } else { // powerball
        if (picked.length >= 5 && pickedPowerball.length >= 1) return;
        if(picked.length < 5) {
            let r;
            do { r = Math.floor(Math.random() * 69) + 1; } while (picked.includes(r));
            picked.push(r);
        }
        if(pickedPowerball.length < 1) {
            pickedPowerball = [Math.floor(Math.random() * 26) + 1];
        }
    }
    updateUI();
}

function updateUI() {
    if (!ballDiv) return;
    ballDiv.innerHTML = '';

    if (gameMode === 'lotto') {
        picked.sort((a,b) => a - b).forEach(n => {
            const b = document.createElement('div');
            b.className = 'ball';
            b.innerText = n;
            ballDiv.appendChild(b);
        });
    } else { // powerball
        picked.sort((a,b) => a - b).forEach(n => {
            const b = document.createElement('div');
            b.className = 'ball white-ball';
            b.innerText = n;
            ballDiv.appendChild(b);
        });
        if(pickedPowerball.length > 0) {
            const b = document.createElement('div');
            b.className = 'ball powerball';
            b.innerText = pickedPowerball[0];
            ballDiv.appendChild(b);
        }
    }
}

function resetAll() {
    picked = [];
    pickedPowerball = [];
    if(ballDiv) ballDiv.innerHTML = '';
}

async function init() {
    try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        const flip = true;
        webcam = new tmImage.Webcam(200, 200, flip);
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }
    } catch (error) {
        alert("동물상 테스트를 시작하는 데 문제가 발생했습니다. 웹캠 접근을 허용하거나, 최신 브라우저를 사용 중인지 확인해주세요. 오류: " + error.message);
        console.error("Error initializing animal face test:", error);
    }
}

async function loop() {
    if (webcam) {
        webcam.update();
        await predict();
        window.requestAnimationFrame(loop);
    }
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        if (labelContainer.childNodes[i]) {
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }
}