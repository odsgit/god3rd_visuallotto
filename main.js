let picked = [];
let currentMode = 'number';
let isEnglish = false;
const gridDiv = document.getElementById('grid');
const ballDiv = document.getElementById('selectedBalls');
const modeTitle = document.getElementById('modeTitle');
const searchInput = document.getElementById('customInput');

// 45개 직업 리스트
const jobs = ['doctor','scientist','programmer','astronaut','pilot','chef','artist','teacher','judge','architect','firefighter','police','dentist','musician','athlete','lawyer','nurse','designer','farmer','baker','mechanic','photographer','journalist','diplomat','barista','soldier','professor','reporter','carpenter','diver','florist','magician','painter','tailor','videographer','physicist','geologist','librarian','dancer','model','actor','sailor','coach','writer','dentist'];

const langData = {
    ko: {
        lottoPickerTab: "로또 선택기",
        animalTestTab: "동물상 테스트",
        contactUsTab: "문의하기",
        lottoInfoTab: "로또 정보",
        aboutUsTab: "회사소개",
        privacyPolicyTab: "개인정보 처리방침",
        lottoPickerDesc: "사진을 통해 나만의 행운의 로또 번호를 선택하세요! 숫자를 직접 선택하거나, 다양한 테마의 이미지를 클릭하여 무작위 번호를 뽑을 수 있습니다. 또한, 특정 키워드를 검색하여 관련 이미지로 번호를 선택하는 색다른 경험을 할 수 있습니다. 매주 업데이트되는 다양한 이미지 테마와 함께 당신의 행운을 시험해보세요!",
        animalTestDesc: "웹캠을 사용하여 내 얼굴이 어떤 동물상에 가까운지 테스트해보세요! 인공지능이 여러분의 얼굴 특징을 분석하여 강아지상, 고양이상, 토끼상 등 다양한 동물상 중 가장 닮은 유형을 찾아드립니다. '시작' 버튼을 누르고 카메라를 응시하면 흥미로운 결과를 바로 확인할 수 있습니다. 친구들과 함께 누가 더 재미있는 동물상이 나오는지 비교해보세요!",
        contactDesc: "비주얼 로또 픽커에 대한 제휴 문의, 서비스 개선 제안, 기술 협력 등 다양한 의견을 기다립니다. 아래 양식을 작성하여 보내주시면 담당자가 신속하게 검토 후 연락드리겠습니다. 여러분의 소중한 의견은 더 나은 서비스를 만드는 데 큰 도움이 됩니다.",
        lottoFactsTipsDesc: "로또는 단순한 운 이상의 재미있는 이야기와 통계가 숨어 있습니다. 이곳에서 로또의 흥미로운 사실들과 당첨 확률을 높일 수 있는 몇 가지 팁을 알아보세요. 하지만 로또는 언제나 오락으로 즐겨야 한다는 것을 잊지 마세요!",
        aboutUsDesc: "비주얼 로또 픽커는 로또 번호 선택을 더욱 재미있고 특별한 경험으로 만들고자 합니다. 저희는 단순한 숫자 선택을 넘어, 다양한 시각적 테마와 인공지능 기술을 활용하여 사용자에게 영감을 주는 번호 선택 방식을 제공합니다. 꿈, 영화배우, 동물 등 여러분의 관심사를 로또 번호와 연결해보세요. 로또가 단순한 게임을 넘어 즐거운 상상과 기대의 시간이 될 수 있도록 돕는 것이 저희의 목표입니다. 행운을 빌며, 책임감 있는 게임을 장려합니다!",
        privacyPolicyDesc: "비주얼 로또 픽커는 사용자의 개인정보 보호를 최우선으로 생각합니다. 저희 웹사이트에서 수집되는 모든 정보는 사용자 동의 하에 투명하게 처리되며, 서비스 제공 및 개선 목적으로만 사용됩니다. 개인정보 처리 방침을 자세히 읽어보시고 궁금한 점이 있으시면 언제든지 문의해주세요.",

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
        numberTab: "숫자",
        dreamTab: "꿈 (직업)",
        actorTab: "영화배우",
        flagTab: "나라(국기)",
        animalTab: "동물",

        lottoFunFactsTitle: "로또 재미있는 사실 & 팁",
        lottoMathTitle: "로또 번호 뒤에 숨겨진 놀라운 수학",
        lottoMathContent: "많은 사람들이 로또 번호는 순전히 무작위라고 믿지만, 관찰할 수 있는 흥미로운 수학적 패턴이 있습니다. 이러한 패턴이 승리를 보장하지는 않지만, 번호 선택 과정을 더 흥미롭게 만들 수 있습니다. 예를 들어, 일부 연구에 따르면 홀수와 짝수는 균형있게 추첨되는 경향이 있습니다. 이것은 우연의 수학의 많은 매혹적인 측면 중 하나일 뿐입니다. 이러한 미묘한 경향을 이해하면 승률을 크게 높이지 않더라도 복권 경험에 또 다른 즐거움을 더할 수 있습니다.",
        lottoDreamsTitle: "당신의 꿈이 정말 로또 번호를 예측할 수 있을까요?",
        lottoDreamsContent: "역사를 통틀어 사람들은 복권 선택을 안내하기 위해 표시와 상징을 찾아왔습니다. 꿈은 영감의 일반적인 원천입니다. 꿈이 당첨 번호를 예측할 수 있다는 생각을 뒷받침하는 과학적 증거는 없지만, 많은 플레이어들은 번호를 선택하는 재미있고 흥미로운 방법이라고 생각합니다. 우리의 '꿈' 카테고리는 당신이 선택하는 번호에서 개인적인 의미를 찾는 오랜 전통에서 영감을 받았습니다. 그것은 모두 당신의 복권 선택 과정에 개인적인 감각과 약간의 신비감을 더하는 것에 관한 것입니다.",
        lottoTipsTitle: "로또 번호 선택 팁",
        lottoTipsContent: "로또는 주로 운에 좌우되는 게임이지만, 일부 플레이어는 번호를 선택하기 위해 다양한 전략을 사용합니다. 일반적인 접근 방식에는 중요한 날짜(생일, 기념일) 사용, 오랫동안 나타나지 않은 번호 선택(과거 결과가 미래 추첨에 영향을 미치지 않음에도 불구하고), 또는 복권 용지에 특정 패턴으로 번호 선택 등이 있습니다. 일부는 당첨될 경우 잠재적으로 상금을 늘리기 위해 일반적으로 선택되는 번호를 피하는 것을 제안하기도 합니다. 궁극적으로 가장 좋은 팁은 운이 좋다고 느끼게하는 번호를 선택하고 책임감있게 게임을 즐기는 것입니다!",
        
        aboutUsTitle: "회사소개",
        ourMissionTitle: "우리의 미션",
        ourMissionContent: "우리의 미션은 사람들이 복권과 상호 작용하는 방식을 혁신하는 것입니다. 시각적 요소와 대화형 도구를 통합하여 숫자 선택이라는 평범한 작업을 매력적이고 개인화된 경험으로 전환하고자 합니다. 우리는 기술이 일상 활동을 향상시킬 수 있다고 믿으며, 로또 선택도 예외는 아닙니다. 우리는 항상 책임감있는 게임 습관을 장려하면서 재미 있고 사용하기 쉬운 플랫폼을 제공하기 위해 최선을 다하고 있습니다.",
        ourVisionTitle: "미래에 대한 우리의 비전",
        ourVisionContent: "우리는 로또 플레이어들이 개인적인 의미와 시각적 영감에 이끌려 자신의 번호 선택에 더 연결되어 있다고 느끼는 미래를 구상합니다. 우리는 시각적 테마를 지속적으로 확장하고, 개인화된 추천을위한 고급 AI 기능을 통합하며, 사용자가 자신의 경험과 행운의 선택을 공유 할 수있는 커뮤니티를 구축 할 계획입니다. 우리의 장기 목표는 전 세계적으로 매력적이고 책임감있는 복권 참여를위한 최고의 플랫폼이되는 것입니다.",

        privacyPolicyTitle: "개인정보 처리방침",
        infoCollectionTitle: "정보 수집 및 사용",
        infoCollectionContent: "당사는 귀하가 당사 웹 사이트를 방문 할 때 특정 정보를 수집하며, 주로 사용자 경험을 개선하고 분석 목적으로 사용됩니다. 여기에는 IP 주소, 브라우저 유형, 운영 체제 및 조회 한 페이지와 같은 개인 식별이 불가능한 정보가 포함될 수 있습니다. 당사는이 데이터를 사용하여 사용자가 당사 사이트와 상호 작용하는 방식을 이해하고 기술적 인 문제를 진단하며 콘텐츠 및 기능을 최적화합니다. 당사 연락처 양식을 통해 제공 할 수있는 것과 같은 개인 식별 정보는 명시적인 동의가있는 경우에만 수집되며 제공된 목적으로 만 사용됩니다.",
        dataSecurityTitle: "데이터 보안 및 보존",
        dataSecurityContent: "당사는 귀하가 개인 정보를 입력, 제출 또는 액세스 할 때 개인 정보의 안전을 유지하기 위해 다양한 보안 조치를 구현합니다. 이러한 조치에는 데이터 암호화, 보안 서버 및 액세스 제어가 포함됩니다. 당사는 요청 된 서비스를 제공하거나 법적 의무를 준수하는 데 필요한 기간 동안 수집 된 정보를 보유합니다. 더 이상 필요하지 않으면 데이터를 안전하게 삭제하거나 익명으로 처리합니다. 당사는 귀하의 개인 식별 정보를 외부 당사자에게 판매, 거래 또는 이전하지 않습니다.",
        thirdPartyLinksTitle: "제 3 자 링크",
        thirdPartyLinksContent: "당사 웹 사이트에는 당사가 운영하지 않는 제 3 자 웹 사이트 링크가 포함될 수 있습니다. 당사는 이러한 사이트의 내용과 관행을 통제 할 수 없으며 해당 개인 정보 보호 정책에 대해 책임을 질 수 없습니다. 방문하는 모든 제 3 자 사이트의 개인 정보 보호 정책을 검토하는 것이 좋습니다. 이러한 링크를 포함한다고해서 해당 사이트에서 제공하는 콘텐츠 나 서비스를 보증하는 것은 아닙니다.",
        changesToPolicyTitle: "본 개인 정보 보호 정책의 변경",
        changesToPolicyContent: "당사는 개인 정보 보호 정책을 수시로 업데이트 할 수 있습니다. 이 페이지에 새 개인 정보 보호 정책을 게시하여 변경 사항을 통지합니다. 변경 사항에 대해이 개인 정보 보호 정책을 주기적으로 검토하는 것이 좋습니다. 이 개인 정보 보호 정책의 변경 사항은이 페이지에 게시 될 때 효력이 발생합니다. 개인 정보 보호 정책 수정 후 서비스를 계속 사용하면 수정 사항을 인정하고 수정 된 개인 정보 보호 정책을 준수하고 구속된다는 데 동의하는 것으로 간주됩니다."

    },
    en: {
        lottoPickerTab: "Lotto Picker",
        animalTestTab: "Animal Face Test",
        contactUsTab: "Contact Us",
        lottoInfoTab: "Lotto Info",
        aboutUsTab: "About Us",
        privacyPolicyTab: "Privacy Policy",
        lottoPickerDesc: "Choose your lucky lottery numbers through images! You can either pick numbers directly or click on images of various themes to get random numbers. You can also search for specific keywords to select numbers with related images, offering a unique experience. Try your luck with various image themes updated weekly!",
        animalTestDesc: "Use your webcam to test which animal face you resemble! Our AI analyzes your facial features to find the closest match among various animal types like dog, cat, or rabbit faces. Press 'Start' and look into the camera to get immediate interesting results. Compare with your friends to see who gets a more amusing animal face!",
        contactDesc: "We welcome partnership inquiries, service improvement suggestions, technical collaboration, and various other feedback regarding Visual Lotto Picker. Please fill out the form below, and our team will promptly review it and get back to you. Your valuable feedback greatly helps us create a better service.",
        lottoFactsTipsDesc: "Lotto holds interesting stories and statistics beyond simple luck. Discover fascinating facts about lotto here and a few tips that might increase your chances of winning. But always remember that lotto should be enjoyed as entertainment!",
        aboutUsDesc: "Visual Lotto Picker aims to make lottery number selection a more fun and unique experience. Beyond simple number picking, we provide inspiring ways to choose numbers by utilizing diverse visual themes and AI technology. Connect your interests—dreams, movie stars, animals—to your lotto numbers. Our goal is to help lotto become more than just a game, transforming it into a time of enjoyable imagination and anticipation. We wish you good luck and encourage responsible gaming!",
        privacyPolicyDesc: "Visual Lotto Picker prioritizes user privacy. All information collected on our website is handled transparently with user consent and used solely for service provision and improvement purposes. Please read our privacy policy in detail and feel free to contact us with any questions.",

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
        numberTab: "Number",
        dreamTab: "Dream (Career)",
        actorTab: "Actors",
        flagTab: "Flags",
        animalTab: "Animals",

        lottoFunFactsTitle: "Lotto Fun Facts & Tips",
        lottoMathTitle: "The Surprising Math Behind Lotto Numbers",
        lottoMathContent: "Many people believe that lotto numbers are purely random, but there are some interesting mathematical patterns that can be observed. While these patterns don't guarantee a win, they can make the number selection process more interesting. For example, some studies have shown that odd and even numbers tend to be drawn in a balanced way. This is just one of many fascinating aspects of the mathematics of chance. Understanding these subtle tendencies can add another layer of enjoyment to your lottery experience, even if it doesn't shift the odds significantly in your favor.",
        lottoDreamsTitle: "Can Your Dreams Really Predict Lotto Numbers?",
        lottoDreamsContent: "Throughout history, people have looked for signs and symbols to guide their lottery picks. Dreams are a common source of inspiration. While there is no scientific evidence to support the idea that dreams can predict winning numbers, many players find it a fun and exciting way to choose their numbers. Our 'Dream' category is inspired by this long-standing tradition of finding personal meaning in the numbers you choose. It's all about adding a personal touch and a bit of mystique to your lottery selection process.",
        lottoTipsTitle: "Tips for Choosing Your Lotto Numbers",
        lottoTipsContent: "While lotto is primarily a game of chance, some players employ various strategies to pick their numbers. Common approaches include using significant dates (birthdays, anniversaries), choosing numbers that haven't appeared in a long time (though past results don't influence future draws), or even picking numbers in a specific pattern on the lottery slip. Some also suggest avoiding commonly picked numbers to potentially increase the payout if you do win. Ultimately, the best tip is to pick numbers that make you feel lucky and enjoy the game responsibly!",

        aboutUsTitle: "About Us",
        ourMissionTitle: "Our Mission",
        ourMissionContent: "Our mission is to innovate the way people interact with lotteries. By integrating visual elements and interactive tools, we hope to transform the mundane task of number selection into an engaging and personalized experience. We believe that technology can enhance everyday activities, and lotto picking is no exception. We are committed to providing a platform that is both entertaining and easy to use, while always promoting responsible gaming habits.",
        ourVisionTitle: "Our Vision for the Future",
        ourVisionContent: "We envision a future where lotto players feel more connected to their number choices, driven by personal meaning and visual inspiration. We plan to continuously expand our visual themes, integrate more advanced AI features for personalized recommendations, and build a community where users can share their experiences and lucky picks. Our long-term goal is to be the leading platform for engaging and responsible lottery participation worldwide.",

        privacyPolicyTitle: "Privacy Policy",
        infoCollectionTitle: "Information Collection and Use",
        infoCollectionContent: "We collect certain information when you visit our website, primarily to improve your user experience and for analytical purposes. This may include non-personally identifiable information such as your IP address, browser type, operating system, and pages viewed. We use this data to understand how our users interact with our site, diagnose technical issues, and optimize our content and features. Any personally identifiable information, such as what you might provide through our contact form, is collected only with your explicit consent and used only for the purpose for which it was provided.",
        dataSecurityTitle: "Data Security and Retention",
        dataSecurityContent: "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. These measures include data encryption, secure servers, and access controls. We retain collected information for as long as necessary to provide you with your requested service or to comply with legal obligations. Once no longer needed, we securely delete or anonymize your data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.",
        thirdPartyLinksTitle: "Third-Party Links",
        thirdPartyLinksContent: "Our website may contain links to third-party websites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. We encourage you to review the privacy policies of any third-party sites you visit. Our inclusion of such links does not imply endorsement of the content or services offered on those sites.",
        changesToPolicyTitle: "Changes to This Privacy Policy",
        changesToPolicyContent: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of the service after any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy."
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
        if (key && langObj[key]) {
            el.innerText = langObj[key];
        }
    });

    if(document.getElementById('mainTitle')) {
      document.getElementById('mainTitle').innerText = langObj.title;
    }
    if(document.getElementById('searchBtn')) {
      document.getElementById('searchBtn').innerText = langObj.search;
    }
    if(document.getElementById('resetBtn')) {
      document.getElementById('resetBtn').innerText = langObj.reset;
    }
    if(searchInput) searchInput.placeholder = langObj.placeholder;

    if (isEnglish) {
        document.getElementById('langBtn').innerText = "🇰🇷 한국어";
    } else {
        document.getElementById('langBtn').innerText = "🇺🇸 English";
    }
    updateModeTitle();
}


function toggleLanguage() {
    const lang = isEnglish ? 'ko' : 'en';
    setLanguage(lang);
}


function updateModeTitle() {
    if(!modeTitle) return;
    const lang = isEnglish ? 'en' : 'ko';
    modeTitle.innerText = currentMode === 'number' ? langData[lang].numMsg : langData[lang].randMsg;
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
    // Set initial language based on browser language
    const userLang = navigator.language || navigator.userLanguage; 
    setLanguage(userLang.startsWith('en') ? 'en' : 'ko');
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
    modeTitle.innerText = isEnglish ? `Click "${val}" photos!` : `"${val}" 사진을 클릭하세요!`;
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