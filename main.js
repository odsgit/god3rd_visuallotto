const PIXABAY_API_KEY = 'YOUR_PIXABAY_API_KEY'; // IMPORTANT: Replace with your actual Pixabay API key

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
        lottoInfoTitle: "로또 재미있는 사실 & 팁",
        lottoMathTitle: "로또 번호 뒤에 숨겨진 놀라운 수학",
        lottoMathContent: "많은 사람들이 로또 번호는 순전히 무작위라고 믿지만, 관찰할 수 있는 흥미로운 수학적 패턴이 있습니다. 이러한 패턴 이 승리를 보장하지는 않지만, 번호 선택 과정을 더 흥미롭게 만들 수 있습니다. 예를 들어, 일부 연구에 따르면 홀수와 짝수는 균형있게 추첨되는 경향이 있습니다. 이것은 우연의 수학의 많은 매혹적인 측면 중 하나일 뿐입니다. 이러한 미묘한 경향을 이해하면 승률을 크게 높이지 않더라도 복권 경험에 또 다른 즐거움을 더할 수 있습니다.",
        lottoDreamsTitle: "당신의 꿈이 정말 로또 번호를 예측할 수 있을까요?",
        lottoDreamsContent: "역사를 통틀어 사람들은 복권 선택을 안내하기 위해 표시와 상징을 찾아왔습니다. 꿈은 영감의 일반적인 원천입니다. 꿈이 당첨 번호를 예측할 수 있다는 생각을 뒷받침하는 과학적 증거는 없지만, 많은 플레이어들은 번호를 선택하는 재미있고 흥미로운 방법이라고 생 각합니다. 우리의 '꿈' 카테고리는 당신이 선택하는 번호에서 개인적인 의미를 찾는 오랜 전통에서 영감을 받았습니다. 그것은 모두 당신의 복권 선택 과정에 개인적인 감각과 약간의 신비감을 더하는 것에 관한 것입니다.",
        aboutTitle: "About Us",
        aboutContent: "비주얼 로또 픽커는 로또 번호 선택을 더욱 재미있고 특별한 경험으로 만들고자 합니다. 저희는 단순한 숫자 선택을 넘어, 다양한 시각적 테마와 인공지능 기술을 활용하여 사용자에게 영감을 주는 번호 선택 방식을 제공합니다. 꿈, 영화배우, 동물 등 여러분의 관심사를 로또 번호와 연결해보세요. 로또가 단순한 게임을 넘어 즐거운 상상과 기대의 시간이 될 수 있도록 돕는 것이 저희의 목표입니다. 행운을 빌며, 책임감 있는 게임을 장려합니다!",
        privacyTitle: "Privacy Policy",
        privacyContent: "저희는 사용자의 개인정보 보호를 최우선으로 생각합니다. 저희 웹사이트에서 수집되는 모든 정보는 사용자 동의 하에 투명하게 처리되며, 서비스 제공 및 개선 목적으로만 사용됩니다. 개인정보 처리 방침을 자세히 읽어보시고 궁금한 점이 있으시면 언제든지 문의해주세요."
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
        animalTab: "Animals",
        lottoInfoTitle: "Lotto Fun Facts & Tips",
        lottoMathTitle: "The Surprising Math Behind Lotto Numbers",
        lottoMathContent: "Many people believe that lotto numbers are purely random, but there are some interesting mathematical patterns that can be observed. While these patterns don't guarantee a win, they can make the number selection process more interesting. For example, some studies have shown that odd and even numbers tend to be drawn in a balanced way. This is just one of many fascinating aspects of the mathematics of chance. Understanding these subtle tendencies can add another layer of enjoyment to your lottery experience, even if it doesn't shift the odds significantly in your favor.",
        lottoDreamsTitle: "Can Your Dreams Really Predict Lotto Numbers?",
        lottoDreamsContent: "Throughout history, people have looked for signs and symbols to guide their lottery picks. Dreams are a common source of inspiration. While there is no scientific evidence to support the idea that dreams can predict winning numbers, many players find it a fun and exciting way to choose their numbers. Our 'Dream' category is inspired by this long-standing tradition of finding personal meaning in the numbers you choose. It's all about adding a personal touch and a bit of mystique to your lottery selection process.",
        aboutTitle: "About Us",
        aboutContent: "Visual Lotto Picker is a fun and interactive way to choose your lottery numbers. We believe that choosing your numbers should be an exciting experience. Our website uses a variety of visual themes to help you find your lucky numbers. Whether you're inspired by your dreams, your favorite actor, or the colors of a national flag, our visual picker can help you make a choice that feels right for you. Our goal is to make the lottery more engaging and enjoyable for everyone.",
        privacyTitle: "Privacy Policy",
        privacyContent: "Your privacy is important to us. It is Visual Lotto Picker's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We don’t share any personally identifying information publicly or with third-parties, except when required to by law. Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
        lottoInfo_1_title: "1. Purchase and Draw Times",
        lottoInfo_1_p1: "Lotto tickets can be purchased all year round, but sales close earlier on Saturdays, which are draw days.",
        lottoInfo_1_p2_1: "Purchase available: Daily 06:00 ~ 24:00 (Sunday ~ Friday)",
        lottoInfo_1_p2_2: "Saturday sales: 06:00 ~ 20:00 close",
        lottoInfo_1_p2_3: "Draw time: Every Saturday around 8:35 PM (MBC 'Live Happy Dream Lotto 6/45')",
        lottoInfo_1_p2_4: "Sales suspension: Sales are suspended from 8:00 PM on Saturday until 6:00 AM on Sunday.",
        lottoInfo_2_title: "2. How to Purchase (Offline & Online)",
        lottoInfo_2_p1_1: "Offline: Available only with cash at official retailers nationwide, such as convenience stores and lottery stands.",
        lottoInfo_2_p1_2: "Online: Can be purchased on the official Donghaeng Lottery website.",
        lottoInfo_2_p1_3: "Limit: Limited to <strong>5,000 KRW (5 games) per person</strong> per draw.",
        lottoInfo_2_p1_4: "Method: After charging a deposit (e.g., bank transfer), you can purchase via PC. (Mobile is officially restricted, but some use PC version viewing.)",
        lottoInfo_3_title: "3. Winning Conditions and Probabilities",
        lottoInfo_3_p1: "The method is to match 6 numbers out of 1 to 45.",
        lottoInfo_3_th_rank: "Rank",
        lottoInfo_3_th_condition: "Winning Condition",
        lottoInfo_3_th_probability: "Winning Probability",
        lottoInfo_3_th_note: "Note",
        lottoInfo_3_td_1_rank: "1st Prize",
        lottoInfo_3_td_1_condition: "All 6 numbers match",
        lottoInfo_3_td_1_probability: "Approx. 1/8,145,060",
        lottoInfo_3_td_1_note: "Prize distribution",
        lottoInfo_3_td_2_rank: "2nd Prize",
        lottoInfo_3_td_2_condition: "5 numbers + bonus number match",
        lottoInfo_3_td_2_probability: "Approx. 1/1,357,510",
        lottoInfo_3_td_2_note: "Prize distribution",
        lottoInfo_3_td_3_rank: "3rd Prize",
        lottoInfo_3_td_3_condition: "5 numbers match",
        lottoInfo_3_td_3_probability: "Approx. 1/35,724",
        lottoInfo_3_td_3_note: "Prize distribution",
        lottoInfo_3_td_4_rank: "4th Prize",
        lottoInfo_3_td_4_condition: "4 numbers match",
        lottoInfo_3_td_4_probability: "1/733",
        lottoInfo_3_td_4_note: "Fixed prize (50,000 KRW)",
        lottoInfo_3_td_5_rank: "5th Prize",
        lottoInfo_3_td_5_condition: "3 numbers match",
        lottoInfo_3_td_5_probability: "1/45",
        lottoInfo_3_td_5_note: "Fixed prize (5,000 KRW)",
        lottoInfo_4_title: "4. Prize Receipt and Taxes",
        lottoInfo_4_p1: "The place of receipt and taxes vary depending on the prize money.",
        lottoInfo_4_p2_1: "Receipt Location",
        lottoInfo_4_p2_2: "1st Prize: Nonghyup Bank Main Branch (Seoul)",
        lottoInfo_4_p2_3: "2nd, 3rd Prize: Each branch of Nonghyup Bank",
        lottoInfo_4_p2_4: "4th, 5th Prize: General retailers or each branch of Nonghyup Bank",
        lottoInfo_4_p3_1: "Tax Calculation",
        lottoInfo_4_p3_2: "Lotto prize money is classified as 'other income' and taxes are withheld at source.",
        lottoInfo_4_p3_3: "Up to 2 million KRW: Tax-exempt (no tax)",
        lottoInfo_4_p3_4: "Over 2 million KRW ~ up to 300 million KRW: 22% (Income tax 20% + Local income tax 2%)",
        lottoInfo_4_p3_5: "Over 300 million KRW: 33% (Income tax 30% + Local income tax 3%)",
        lottoInfo_5_title: "5. Tips for Checking Winning Numbers",
        lottoInfo_5_p1_1: "QR Code Scan: Scan the QR code on the upper right of the lottery ticket with your smartphone camera or Donghaeng Lottery app to quickly check if you've won.",
        lottoInfo_5_p1_2: "Official Website: You can check winning numbers by round and information on lucky stores (winning retailers) on the Donghaeng Lottery website.",
        lottoInfo_6_title: "6. Lucky Store Locations (Address, Phone, Features)",
        lottoInfo_6_p1: "... (Content to be added)",
        lottoInfo_7_title: "7. Winner Testimonials",
        lottoInfo_7_p1: "Testimonials from Lotto winners offer both hope and curiosity to many. Analyzing the actual experiences of winners reveals some interesting common characteristics. We've summarized them based on real cases posted on Donghaeng Lottery or communities.",
        lottoInfo_7_p2_title: "Foreboding Signs' mentioned by Winners",
        lottoInfo_7_p2_1: "The most commonly mentioned are 'dreams' and 'feelings'.",
        lottoInfo_7_p2_2: "Ancestor Dreams: A typical case where many won after dreaming of deceased parents or ancestors appearing with bright expressions, telling them numbers, or giving them bundles.",
        lottoInfo_7_p2_3: "Money or Filth Dreams: Dreams of going to the bathroom, getting filth on their bodies, or a big fire at home are frequently mentioned.",
        lottoInfo_7_p2_4: "Special Feelings: Many testimonials say they followed their intuition, such as 'I especially wanted to buy a lottery ticket that day' or 'I wanted to go a different way than usual'.",
        lottoInfo_7_p3_title: "Emotional Changes Immediately After Winning",
        lottoInfo_7_p3_1: "The emotions felt at the moment of confirming prize money ranging from tens of millions to billions of won are generally similar.",
        lottoInfo_7_p3_2: "Denial and Repeated Confirmation: At first, they doubt their eyes and reconfirm the numbers dozens of times. 'I checked with the app QR code but couldn't believe it, so I searched newspapers and portals,' is a common sentiment.",
        lottoInfo_7_p3_3: "Tension and Anxiety: They can't sleep for fear of losing the ticket, or repeatedly check it deep in their wallet. 'I held my bag all the way on the train to receive the prize money,' is also a famous testimonial.",
        lottoInfo_7_p4_title: "Life After Receiving Prize Money",
        lottoInfo_7_p4_1: "The most impressive part of the testimonials is 'where the money was spent'.",
        lottoInfo_7_p4_2: "1st Priority is Debt Repayment: Many say 'I can finally breathe' after paying off debts such as loans or jeonse (lump-sum deposit for rent) funds.",
        lottoInfo_7_p4_3: "To Tell or Not to Tell Others: Most testimonial writers advise, 'Only tell your family or don't tell anyone.' This is to avoid strained relationships due to endless requests for money from acquaintances.",
        lottoInfo_7_p4_4: "Maintaining Daily Life: Surprisingly, many winners continue to work and do not quit their jobs. They unanimously agree that 'living as usual to not lose the purpose of life' is the secret to long-term happiness.",
        lottoInfo_7_p5_title: "Winning Tips' from Winners",
        lottoInfo_7_p5_1: "At the end of the testimonials, there are usually personal tips.",
        lottoInfo_7_p5_2: "Consistently Small Amounts: Instead of spending a large amount at once, it's important to enjoy it consistently, buying 5,000 to 10,000 KRW per week.",
        lottoInfo_7_p5_3: "Auto vs. Manual: Statistically, auto-generated numbers are more common, but among testimonials, there are quite a few manual winners who 'stuck with their own fixed numbers for over 10 years'.",
        lottoInfo_7_quote: "Lotto winning is not the end of life, but a solid insurance for a new beginning.",
        lottoInfo_8_title: "8. Fund Utilization",
        lottoInfo_8_p1: "The lottery fund, created from the sale of lottery tickets including Lotto, plays a very important role in unseen areas of our society. According to the Lottery Act, approximately <strong>41%</strong> of the total revenue is accumulated as a fund and utilized in two main ways.",
        lottoInfo_8_p2_title: "Statutory Distribution Projects (35%)",
        lottoInfo_8_p2_1: "Funds are preferentially distributed to institutions specified in the Lottery Act and used for each institution's unique purpose.",
        lottoInfo_8_p2_2: "Science and Technology Promotion Fund: Support for nurturing scientific and technological talent and R&D.",
        lottoInfo_8_p2_3: "Repayment of Small and Medium Business Promotion Bonds: Securing funds for supporting small and medium-sized enterprises.",
        lottoInfo_8_p2_4: "Community Chest of Korea: Support projects for low-income and underprivileged groups.",
        lottoInfo_8_p2_5: "Local Governments: Regional balanced development and local welfare projects.",
        lottoInfo_8_p2_6: "Others: Support for 10 statutory institutions including the special account for the establishment of Jeju Province and free international city development.",
        lottoInfo_8_p3_title: "Public Interest Projects (65%)",
        lottoInfo_8_p3_1: "Used for promoting national welfare, focusing on the four priority support areas selected by the Lottery Committee.",
        lottoInfo_8_p3_2_1: "① Support for Housing Stability for Low-Income Households",
        lottoInfo_8_p3_2_2: "Multi-family housing purchase and lease: Provision of rental housing for low-income citizens.",
        lottoInfo_8_p3_2_3: "Existing housing jeonse (lump-sum deposit for rent) lease: When low-income households choose a house, the state signs a jeonse contract and re-leases it at a low price.",
        lottoInfo_8_p3_3_1: "② Promotion of Welfare for Underprivileged Groups",
        lottoInfo_8_p3_3_2: "Support for the Disabled: Operation of residential facilities for the disabled and activity support services.",
        lottoInfo_8_p3_3_3: "Support for Children and Youth: After-school care services, Dream Ladder Scholarship (support for excellent students from low-income families).",
        lottoInfo_8_p3_3_4: "Support for Multicultural Families: Korean language education and social adaptation programs.",
        lottoInfo_8_p3_4_1: "③ Culture, Arts, and Patriotism Projects",
        lottoInfo_8_p3_4_2: "Expansion of Cultural Rights: Establishment of libraries, support for museums and art galleries, cultural touring performances in underserved areas.",
        lottoInfo_8_p3_4_3: "Treatment for Patriots and Veterans: Establishment of veterans' hospitals and operation of welfare facilities for national merit recipients.",
        lottoInfo_8_p3_5_1: "④ Disaster and Safety Support",
        lottoInfo_8_p3_5_2: "Recently, it has also contributed to emergency livelihood support for vulnerable groups and expansion of quarantine infrastructure during national disasters like COVID-19.",
        lottoInfo_8_p4_title: "How to Check Fund Utilization Transparency",
        lottoInfo_8_p4_1: "If you are curious about how your single Lotto ticket was specifically used, you can check through the following paths.",
        lottoInfo_8_p4_2: "Donghaeng Lottery Website: Anyone can view the annual fund operation plan and business performance under the 'Lottery Fund' menu.",
        lottoInfo_8_p4_3: "Fund Promotion Slogan: When welfare facilities are built, you can often see the phrase 'This facility was built with the support of the lottery fund' at the building entrance."
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
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    if(element) {
        document.querySelectorAll('.nav-btns button, .top-bar button').forEach(btn => {
            btn.classList.remove('active');
        });
        if(element.classList.contains('util-btn') === false) {
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