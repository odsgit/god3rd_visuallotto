let picked = [];
let currentMode = 'number';
const gridDiv = document.getElementById('grid');
const ballDiv = document.getElementById('selectedBalls');
const modeTitle = document.getElementById('modeTitle');
const searchInput = document.getElementById('customInput');

// 45개 직업 리스트
const jobs = ['doctor','scientist','programmer','astronaut','pilot','chef','artist','teacher','judge','architect','firefighter','police','dentist','musician','athlete','lawyer','nurse','designer','farmer','baker','mechanic','photographer','journalist','diplomat','barista','soldier','professor','reporter','carpenter','diver','florist','magician','painter','tailor','videographer','physicist','geologist','librarian','dancer','model','actor','sailor','coach','writer','dentist'];

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('modeBtn').innerText = isDark ? "☀️ 라이트 모드" : "🌙 다크 모드";
}

function updateModeTitle() {
    if(!modeTitle) return;
    modeTitle.innerText = currentMode === 'number' ? "숫자를 직접 선택하세요!" : "사진을 클릭하면 랜덤 번호 추출!";
}

if(searchInput) {
    searchInput.addEventListener("keyup", (e) => { if (e.key === "Enter") handleSearch(); });
}

function setFavicon() {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.font = '28px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🍀', 16, 16);
    link.href = canvas.toDataURL('image/png');
}

window.onload = () => {
    const page = window.location.pathname.split("/").pop();
    if(page === 'index.html' || page === '') {
        if(document.querySelector('.nav-btns button')) {
            changeTab('number', document.querySelector('.nav-btns button')); // Initialize lotto picker sub-tabs
        }
    }
    setFavicon();
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
    if(!val) return;
    currentMode = 'search';
    modeTitle.innerText = `"${val}" 사진을 클릭하세요!`;
    render(val);
}

function render(keyword) {
    if(!gridDiv) return;
    gridDiv.innerHTML = '';
    for (let i = 1; i <= 45; i++) { // 45번까지
        const box = document.createElement('div');
        box.className = 'item';
        box.onclick = () => (currentMode === 'number') ? addNum(i) : pickRandom();

        if (currentMode === 'number') {
            box.innerHTML = `<div class="num-label">${i}</div>`;
        } else {
            const img = document.createElement('img');
            let finalTag = currentMode === 'dream' ? jobs[i-1] : keyword;
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
    if(!ballDiv) return;
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

// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/D4JCk5RcS/";

let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    try {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        const webcamContainer = document.getElementById("webcam-container");
        if(webcamContainer) {
            webcamContainer.appendChild(webcam.canvas);
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"));
            }
        }
    } catch (error) {
        alert("동물상 테스트를 시작하는 데 문제가 발생했습니다. 웹캠 접근을 허용하거나, 최신 브라우저를 사용 중인지 확인해주세요. 오류: " + error.message);
        console.error("Error initializing animal face test:", error);
    }
}

async function loop() {
    if(webcam) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        if(labelContainer && labelContainer.childNodes[i]) {
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }
}