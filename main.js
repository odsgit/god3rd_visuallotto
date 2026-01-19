let picked = [];
let currentMode = 'number';
let isEnglish = false;

const gridDiv = document.getElementById('grid');
const ballDiv = document.getElementById('selectedBalls');
const modeTitle = document.getElementById('modeTitle');
const searchInput = document.getElementById('customInput');

const jobs = ['doctor', 'scientist', 'programmer', 'astronaut', 'pilot', 'chef', 'artist', 'teacher', 'judge', 'architect', 'firefighter', 'police', 'dentist', 'musician', 'athlete', 'lawyer', 'nurse', 'designer', 'farmer', 'baker', 'mechanic', 'photographer', 'journalist', 'diplomat', 'barista', 'soldier', 'professor', 'reporter', 'carpenter', 'diver', 'florist', 'magician', 'painter', 'tailor', 'videographer', 'physicist', 'geologist', 'librarian', 'dancer', 'model', 'actor', 'sailor', 'coach', 'writer', 'dentist'];

const langData = {
    ko: {
        title: "🍀 비주얼 로또 픽커 (1-45)",
        search: "검색",
        reset: "초기화",
        placeholder: "검색어 입력 (Enter)",
        numMsg: "숫자를 직접 선택하세요!",
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
        actorTab: "영화배우",
        flagTab: "나라(국기)",
        animalTab: "동물",
        lottoInfoTitle: "로또 재미있는 사실 & 팁",
        lottoMathTitle: "로또 번호 뒤에 숨겨진 놀라운 수학",
        lottoMathContent: "많은 사람들이 로또 번호는 순전히 무작위라고 믿지만, 관찰할 수 있는 흥미로운 수학적 패턴이 있습니다. 이러한 패턴 이 승리를 보장하지는 않지만, 번호 선택 과정을 더 흥미롭게 만들 수 있습니다. 예를 들어, 일부 연구에 따르면 홀수와 짝수는 균형있게 추첨되는 경향이 있습니다. 이것은 우연의 수학의 많은 매혹적인 측면 중 하나일 뿐입니다. 이러한 미묘한 경향을 이해하면 승률을 크게 높이지 않더라도 복권 경험에 또 다른 즐거움을 더할 수 있습니다.",
        lottoDreamsTitle: "당신의 꿈이 정말 로또 번호를 예측할 수 있을까요?",
        lottoDreamsContent: "역사를 통틀어 사람들은 복권 선택을 안내하기 위해 표시와 상징을 찾아왔습니다. 꿈은 영감의 일반적인 원천입니다. 꿈이 당첨 번호를 예측할 수 있다는 생각을 뒷받침하는 과학적 증거는 없지만, 많은 플레이어들은 번호를 선택하는 재미있고 흥미로운 방법이라고 생 각합니다. 우리의 '꿈' 카테고리는 당신이 선택하는 번호에서 개인적인 의미를 찾는 오랜 전통에서 영감을 받았습니다. 그것은 모두 당신의 복권 선택 과정에 개인적인 감각과 약간의 신비감을 더하는 것에 관한 것입니다.",
        aboutTitle: "About Us",
        aboutContent: "Visual Lotto Picker is a fun and interactive way to choose your lottery numbers. We believe that choosing your numbers should be an exciting experience. Our website uses a variety of visual themes to help you find your lucky numbers. Whether you're inspired by your dreams, your favorite actor, or the colors of a national flag, our visual picker can help you make a choice that feels right for you. Our goal is to make the lottery more engaging and enjoyable for everyone.",
        privacyTitle: "Privacy Policy",
        privacyContent: "Your privacy is important to us. It is Visual Lotto Picker's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."
    },
    en: {
        title: "🍀 Visual Lotto Picker (1-45)",
        search: "Search",
        reset: "Reset",
        placeholder: "Enter keyword (Enter)",
        numMsg: "Click a number to pick!",
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
        actorTab: "Actors",
        flagTab: "Flags",
        animalTab: "Animals",
        lottoInfoTitle: "Lotto Fun Facts & Tips",
        lottoMathTitle: "The Surprising Math Behind Lotto Numbers",
        lottoMathContent: "Many people believe that lotto numbers are purely random, but there are some interesting mathematical patterns that can be observed. While these patterns don't guarantee a win, they can make the number selection process more interesting. For example, some studies have shown that odd and even numbers tend to be drawn in a balanced way. This is just one of many fascinating aspects of the mathematics of chance. Understanding these subtle tendencies can add another layer of enjoyment to your lottery experience, even if it doesn't shift the odds significantly in your favor.",
        lottoDreamsTitle: "Can Your Dreams Really Predict Lotto Numbers?",
        lottoDreamsContent: "Throughout history, people have looked for signs and symbols to guide their lottery picks. Dreams are a common source of inspiration. While there is no scientific evidence to support the idea that dreams can predict winning numbers, many players find it a fun and exciting way to choose their numbers. Our 'Dream' category is inspired by this long-standing tradition of finding personal meaning in the numbers you choose. It's all about adding a personal touch and a bit of mystique to your lottery selection process.",
        aboutTitle: "About Us",
        aboutContent: "Visual Lotto Picker is a fun and interactive way to choose your lottery numbers. We believe that choosing your numbers should be an exciting experience. Our website uses a variety of visual themes to help you find your lucky numbers. Whether you're inspired by your dreams, your favorite actor, or the colors of a national flag, our visual picker can help you make a choice that feels right for you. Our goal is to make the lottery more engaging and enjoyable for everyone.",
        privacyTitle: "Privacy Policy",
        privacyContent: "Your privacy is important to us. It is Visual Lotto Picker's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."
    }
};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('modeBtn').innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
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
                el.innerText = langObj[key];
            }
        }
    });
    updateModeTitle();
}

function toggleLanguage() {
    const newLang = isEnglish ? 'ko' : 'en';
    setLanguage(newLang);
    document.getElementById('langBtn').innerText = isEnglish ? "🇰🇷 한국어" : "🇺🇸 English";
}

function updateModeTitle() {
    const lang = isEnglish ? 'en' : 'ko';
    if(modeTitle) {
        modeTitle.innerText = currentMode === 'number' ? langData[lang].numMsg : langData[lang].randMsg;
    }
}

function showSection(sectionId, element) {
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}


if(searchInput) {
    searchInput.addEventListener("keyup", (e) => { if (e.key === "Enter") handleSearch(); });
}

window.onload = () => {
    const userLang = navigator.language || navigator.userLanguage;
    setLanguage(userLang.startsWith('en') ? 'en' : 'ko');
    
    // Set initial active tab
    showSection('lotto-picker-section', document.querySelector('.tab-button[data-lang-key="lottoPickerTab"]'));
    changeTab('number', document.querySelector('.nav-btns button'));
};

function changeTab(mode, btn) {
    currentMode = mode;
    document.querySelectorAll('.nav-btns button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateModeTitle();

    const keywords = { number: '', dream: 'career', actor: 'portrait,actor,famous', flag: 'national,flag', animal: 'animal,wildlife' };
    render(keywords[mode]);
}

function handleSearch() {
    const val = searchInput.value.trim();
    if (!val) return;
    currentMode = 'search';
    const lang = isEnglish ? 'en' : 'ko';
    modeTitle.innerText = langData[lang].randMsg;
    render(val);
}

function render(keyword) {
    if (!gridDiv) return;
    gridDiv.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
        const box = document.createElement('div');
        box.className = 'item';
        box.onclick = () => (currentMode === 'number') ? addNum(i) : pickRandom();

        if (currentMode === 'number') {
            box.innerHTML = `<div class="num-label">${i}</div>`;
        } else {
            const img = document.createElement('img');
            let finalTag = currentMode === 'dream' ? jobs[i - 1] : keyword;
            img.src = `https://images.unsplash.com/photo-1?w=200&h=200&fit=crop&q=80&sig=${i}&${finalTag}`;
            img.onerror = () => { img.src = `https://loremflickr.com/200/200/${finalTag}?lock=${i}`; };
            box.appendChild(img);
        }
        gridDiv.appendChild(box);
    }
}

function addNum(n) {
    if (picked.length >= 6 || picked.includes(n)) return;
    picked.push(n);
    updateUI();
}

function pickRandom() {
    if (picked.length >= 6) return;
    let r;
    do { r = Math.floor(Math.random() * 45) + 1; } while (picked.includes(r));
    picked.push(r);
    updateUI();
}

function updateUI() {
    if (!ballDiv) return;
    ballDiv.innerHTML = '';
    picked.forEach(n => {
        const b = document.createElement('div');
        b.className = 'ball';
        b.innerText = n;
        ballDiv.appendChild(b);
    });
}

function resetAll() {
    picked = [];
    if(ballDiv) ballDiv.innerHTML = '';
}

const URL = "https://teachablemachine.withgoogle.com/models/D4JCk5RcS/";
let model, webcam, labelContainer, maxPredictions;

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