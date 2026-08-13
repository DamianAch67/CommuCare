/* ==========================================
   COMMUNITY HEALTH CONNECT
   HEALTH HUB
========================================== */


/* ==========================================
   HEALTH ARTICLES
========================================== */

const articles = [

    {
        title: "Building Healthy Daily Habits",
        category: "Healthy Living",
        icon: "fa-person-running",
        description:
            "Explore simple lifestyle habits that can support general health and wellbeing."
    },

    {
        title: "Understanding Balanced Nutrition",
        category: "Nutrition",
        icon: "fa-carrot",
        description:
            "Learn about the importance of balanced meals and making informed food choices."
    },

    {
        title: "Supporting Mental Wellbeing",
        category: "Mental Health",
        icon: "fa-brain",
        description:
            "General information about healthy habits that can support emotional wellbeing."
    },

    {
        title: "Healthy Habits for Children",
        category: "Child Health",
        icon: "fa-child",
        description:
            "Explore general areas of health and wellbeing that are important during childhood."
    },

    {
        title: "Understanding Women's Health",
        category: "Women's Health",
        icon: "fa-venus",
        description:
            "Discover general information about health and wellbeing topics relevant to women."
    },

    {
        title: "Men's Health and Wellness",
        category: "Men's Health",
        icon: "fa-mars",
        description:
            "Explore general health and lifestyle information relevant to men's wellbeing."
    },

    {
        title: "Why Staying Active Matters",
        category: "Healthy Living",
        icon: "fa-person-walking",
        description:
            "Learn why regular physical activity can be an important part of a healthy lifestyle."
    },

    {
        title: "The Importance of Hydration",
        category: "Nutrition",
        icon: "fa-glass-water",
        description:
            "Learn about hydration and why adequate fluid intake is important."
    },

    {
        title: "Sleep and Everyday Wellness",
        category: "Healthy Living",
        icon: "fa-bed",
        description:
            "Understand how healthy sleep habits can contribute to everyday wellbeing."
    }

];


const articleGrid =
    document.getElementById("articleGrid");

const articleSearch =
    document.getElementById("articleSearch");

const articleCategory =
    document.getElementById("articleCategory");

const articleNoResults =
    document.getElementById("articleNoResults");


/* ==========================================
   DISPLAY ARTICLES
========================================== */

function displayArticles(list) {

    articleGrid.innerHTML = "";


    if (list.length === 0) {

        articleNoResults.style.display = "block";

        return;

    }


    articleNoResults.style.display = "none";


    list.forEach((article) => {

        const card =
            document.createElement("article");

        card.className = "article-card";


        card.innerHTML = `

            <div class="article-image">

                <i class="fa-solid ${article.icon}"></i>

            </div>


            <div class="article-content">

                <span>
                    ${article.category}
                </span>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.description}
                </p>

            </div>

        `;


        articleGrid.appendChild(card);

    });

}


/* ==========================================
   ARTICLE FILTER
========================================== */

function filterArticles() {

    const search =
        articleSearch.value
            .toLowerCase()
            .trim();

    const category =
        articleCategory.value;


    const filtered =
        articles.filter((article) => {

            const matchesSearch =
                article.title
                    .toLowerCase()
                    .includes(search) ||

                article.description
                    .toLowerCase()
                    .includes(search) ||

                article.category
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =
                category === "all" ||

                article.category === category;


            return matchesSearch && matchesCategory;

        });


    displayArticles(filtered);

}


articleSearch.addEventListener(
    "input",
    filterArticles
);


articleCategory.addEventListener(
    "change",
    filterArticles
);


displayArticles(articles);



/* ==========================================
   DISEASE INFORMATION
========================================== */

const diseaseData = {

    Malaria: {

        overview:
            "Malaria is a disease associated with infection by malaria parasites and can cause significant illness.",

        symptoms:
            "Symptoms can include fever, chills, headache and weakness.",

        prevention:
            "Prevention may involve reducing mosquito exposure and following appropriate local malaria prevention guidance.",

        medical:
            "Seek professional medical attention for suspected malaria, particularly when symptoms are severe or worsening."

    },


    Typhoid: {

        overview:
            "Typhoid is a bacterial infection that can cause significant illness.",

        symptoms:
            "Symptoms may include prolonged fever, weakness, headache and digestive symptoms.",

        prevention:
            "Safe food, safe drinking water and appropriate hygiene practices can help reduce risk.",

        medical:
            "Persistent or severe symptoms should be assessed by an appropriate healthcare professional."

    },


    Cholera: {

        overview:
            "Cholera is an illness that can cause severe diarrhoea and rapid dehydration.",

        symptoms:
            "Severe watery diarrhoea can be a major symptom, with dehydration developing rapidly.",

        prevention:
            "Safe water, sanitation, food hygiene and appropriate community health measures can reduce risk.",

        medical:
            "Severe diarrhoea or signs of dehydration require urgent medical attention."

    },


    Diabetes: {

        overview:
            "Diabetes is a chronic condition involving blood glucose regulation.",

        symptoms:
            "Possible symptoms can include increased thirst, frequent urination and unexplained changes in weight.",

        prevention:
            "Healthy lifestyle habits and appropriate healthcare monitoring can help reduce certain risks.",

        medical:
            "Persistent or concerning symptoms should be evaluated by a healthcare professional."

    },


    Hypertension: {

        overview:
            "Hypertension refers to persistently elevated blood pressure.",

        symptoms:
            "High blood pressure may not cause noticeable symptoms, which is why regular monitoring can be important.",

        prevention:
            "Healthy lifestyle habits and regular health checks can support blood pressure management.",

        medical:
            "Very high blood pressure or concerning symptoms require immediate professional assessment."

    },


    Asthma: {

        overview:
            "Asthma is a condition involving the airways that can cause breathing difficulties.",

        symptoms:
            "Symptoms may include wheezing, coughing, chest tightness and shortness of breath.",

        prevention:
            "Identifying triggers and following an appropriate management plan can help reduce symptoms.",

        medical:
            "Severe difficulty breathing requires urgent medical attention."

    }

};


const diseaseModal =
    document.getElementById("diseaseModal");


function showDisease(name) {

    const disease =
        diseaseData[name];


    if (!disease) return;


    document.getElementById(
        "diseaseModalTitle"
    ).textContent = name;


    document.getElementById(
        "diseaseOverview"
    ).textContent = disease.overview;


    document.getElementById(
        "diseaseSymptoms"
    ).textContent = disease.symptoms;


    document.getElementById(
        "diseasePrevention"
    ).textContent = disease.prevention;


    document.getElementById(
        "diseaseMedical"
    ).textContent = disease.medical;


    diseaseModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeDisease() {

    diseaseModal.classList.remove("show");

    document.body.style.overflow = "";

}


diseaseModal.addEventListener(
    "click",
    (event) => {

        if (event.target === diseaseModal) {

            closeDisease();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeDisease();

        }

    }
);



/* ==========================================
   FAQ ACCORDION
========================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach((question) => {

    question.addEventListener(
        "click",
        () => {

            const currentItem =
                question.parentElement;


            document
                .querySelectorAll(".faq-item")
                .forEach((item) => {

                    if (item !== currentItem) {

                        item.classList.remove(
                            "active"
                        );

                    }

                });


            currentItem.classList.toggle(
                "active"
            );

        }
    );

});



/* ==========================================
   BMI CALCULATOR
========================================== */

function calculateBMI() {

    const height =
        Number(
            document.getElementById(
                "heightInput"
            ).value
        );


    const weight =
        Number(
            document.getElementById(
                "weightInput"
            ).value
        );


    const result =
        document.getElementById(
            "bmiResult"
        );


    if (
        !height ||
        !weight ||
        height <= 0 ||
        weight <= 0
    ) {

        result.textContent =
            "Please enter valid height and weight values.";

        return;

    }


    const heightMeters =
        height / 100;


    const bmi =
        weight /
        (heightMeters * heightMeters);


    let category;


    if (bmi < 18.5) {

        category = "Below the commonly used BMI range";

    }
    else if (bmi < 25) {

        category = "Within the commonly used BMI range";

    }
    else if (bmi < 30) {

        category = "Above the commonly used BMI range";

    }
    else {

        category = "Well above the commonly used BMI range";

    }


    result.innerHTML = `

        Your BMI:
        <strong>${bmi.toFixed(1)}</strong>

        <br>

        ${category}.

        <br><br>

        BMI is a general screening measure and
        does not provide a diagnosis.

    `;

}



/* ==========================================
   WATER INTAKE CALCULATOR
========================================== */

function calculateWater() {

    const weight =
        Number(
            document.getElementById(
                "waterWeight"
            ).value
        );


    const result =
        document.getElementById(
            "waterResult"
        );


    if (
        !weight ||
        weight <= 0
    ) {

        result.textContent =
            "Please enter a valid weight.";

        return;

    }


    /*
        General educational estimate:
        approximately 30 ml per kg.
    */

    const millilitres =
        weight * 30;


    const litres =
        millilitres / 1000;


    result.innerHTML = `

        Estimated daily intake:
        <strong>${litres.toFixed(1)} L</strong>

        <br><br>

        This is only a general estimate.
        Individual fluid needs vary.

    `;

}



/* ==========================================
   FEATURED ARTICLE SLIDER
========================================== */

const featuredArticles = [

    {
        title:
            "Healthy Habits for Everyday Life",

        description:
            "Simple lifestyle habits can contribute to better overall wellbeing."
    },

    {
        title:
            "Understanding Balanced Nutrition",

        description:
            "A balanced diet can provide important nutrients needed for normal health."
    },

    {
        title:
            "The Importance of Staying Hydrated",

        description:
            "Adequate fluid intake is an important part of maintaining normal hydration."
    }

];


let currentSlide = 0;


const sliderTitle =
    document.getElementById(
        "sliderTitle"
    );


const sliderDescription =
    document.getElementById(
        "sliderDescription"
    );


const sliderNumber =
    document.getElementById(
        "sliderNumber"
    );


const sliderNext =
    document.getElementById(
        "sliderNext"
    );


function updateSlider() {

    const article =
        featuredArticles[currentSlide];


    sliderTitle.textContent =
        article.title;


    sliderDescription.textContent =
        article.description;


    sliderNumber.textContent =
        String(currentSlide + 1)
            .padStart(2, "0");

}


sliderNext.addEventListener(
    "click",
    () => {

        currentSlide++;

        if (
            currentSlide >=
            featuredArticles.length
        ) {

            currentSlide = 0;

        }


        updateSlider();

    }
);


/* ==========================================
   AUTO SLIDE
========================================== */

setInterval(() => {

    currentSlide++;

    if (
        currentSlide >=
        featuredArticles.length
    ) {

        currentSlide = 0;

    }


    updateSlider();

}, 6000);


console.log(
    "Community Health Connect Health Hub loaded."
);