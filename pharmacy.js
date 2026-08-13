/* ==========================================
   COMMUNITY HEALTH CONNECT
   PHARMACY & CONSULTATION
========================================== */


/* ==========================================
   MEDICINE DATA
========================================== */

const medicines = [

    {
        name: "Paracetamol",
        category: "Pain Relief",
        icon: "fa-pills",
        description:
            "A commonly used medicine for temporary relief of mild to moderate pain and fever.",
        uses:
            "Commonly used for headaches, fever and minor aches.",
        dosage:
            "Use only according to the product instructions or professional advice.",
        precautions:
            "Avoid exceeding the recommended amount and check other medicines for overlapping ingredients.",
        sideEffects:
            "Some people may experience nausea, rash or other reactions."
    },

    {
        name: "Amoxicillin",
        category: "Antibiotics",
        icon: "fa-capsules",
        description:
            "An antibiotic used for certain bacterial infections.",
        uses:
            "Used for bacterial infections when prescribed by an appropriate healthcare professional.",
        dosage:
            "Take only according to the prescription and instructions provided by a healthcare professional.",
        precautions:
            "Do not use antibiotics without appropriate professional guidance.",
        sideEffects:
            "Possible effects include nausea, diarrhoea or allergic reactions."
    },

    {
        name: "Vitamin C",
        category: "Vitamins",
        icon: "fa-tablets",
        description:
            "A vitamin supplement commonly used to support normal nutritional needs.",
        uses:
            "Used as a dietary supplement when additional vitamin C is needed.",
        dosage:
            "Follow the product label or professional advice.",
        precautions:
            "Do not exceed recommended amounts unless advised by a professional.",
        sideEffects:
            "Large amounts may cause stomach discomfort or diarrhoea."
    },

    {
        name: "Children's Paracetamol",
        category: "Children's Medicines",
        icon: "fa-bottle-droplet",
        description:
            "A children's formulation intended for appropriate age groups.",
        uses:
            "May be used for pain or fever in children when appropriate.",
        dosage:
            "Children's dosing depends on the specific product and child. Follow professional or product guidance.",
        precautions:
            "Always check the product's age and dosing instructions.",
        sideEffects:
            "Possible reactions may include nausea or allergic reactions."
    },

    {
        name: "Antiseptic Solution",
        category: "First Aid",
        icon: "fa-prescription-bottle",
        description:
            "An antiseptic product used as part of basic first-aid care.",
        uses:
            "Used according to product directions for appropriate first-aid situations.",
        dosage:
            "Follow the product instructions.",
        precautions:
            "Avoid inappropriate use and follow the product label.",
        sideEffects:
            "Some people may experience skin irritation."
    },

    {
        name: "Multivitamins",
        category: "Supplements",
        icon: "fa-capsules",
        description:
            "A supplement containing a combination of vitamins and sometimes minerals.",
        uses:
            "Used to supplement nutritional intake.",
        dosage:
            "Follow the instructions provided on the specific product.",
        precautions:
            "Avoid taking multiple supplements with overlapping ingredients without professional advice.",
        sideEffects:
            "Some people may experience stomach discomfort."
    },

    {
        name: "Ibuprofen",
        category: "Pain Relief",
        icon: "fa-tablets",
        description:
            "A medicine commonly used for temporary relief of certain types of pain and inflammation.",
        uses:
            "May be used for certain aches, pains and inflammatory symptoms.",
        dosage:
            "Follow the product instructions or professional advice.",
        precautions:
            "Some people should avoid this type of medicine. Seek professional advice when unsure.",
        sideEffects:
            "Possible effects include stomach discomfort and other reactions."
    },

    {
        name: "Oral Rehydration Salts",
        category: "Supplements",
        icon: "fa-droplet",
        description:
            "A preparation designed to help replace fluids and electrolytes.",
        uses:
            "Used to help replace fluids and electrolytes during dehydration.",
        dosage:
            "Prepare and use according to the product instructions.",
        precautions:
            "Seek medical care when dehydration is severe or symptoms persist.",
        sideEffects:
            "Incorrect preparation or use may cause problems."
    }

];


/* ==========================================
   DOM ELEMENTS
========================================== */

const medicineGrid =
    document.getElementById("medicineGrid");

const medicineSearch =
    document.getElementById("medicineSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const noResults =
    document.getElementById("noResults");


/* ==========================================
   DISPLAY MEDICINES
========================================== */

function displayMedicines(list) {

    medicineGrid.innerHTML = "";

    if (list.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    list.forEach((medicine, index) => {

        const card =
            document.createElement("article");

        card.className = "pharmacy-card";


        card.innerHTML = `

            <div class="pharmacy-card-image">

                <i class="fa-solid ${medicine.icon}"></i>

            </div>


            <div class="pharmacy-card-content">

                <span class="pharmacy-card-category">
                    ${medicine.category}
                </span>

                <h3>
                    ${medicine.name}
                </h3>

                <p>
                    ${medicine.description}
                </p>

                <div class="availability">

                    <span></span>

                    Information Available

                </div>

                <button
                    class="view-medicine"
                    onclick="openMedicineModal(${index})"
                >

                    View Details

                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            </div>

        `;


        medicineGrid.appendChild(card);

    });

}


/* ==========================================
   SEARCH + FILTER
========================================== */

function filterMedicines() {

    const searchTerm =
        medicineSearch.value
            .toLowerCase()
            .trim();

    const selectedCategory =
        categoryFilter.value;


    const filtered =
        medicines.filter((medicine) => {

            const matchesSearch =
                medicine.name
                    .toLowerCase()
                    .includes(searchTerm) ||

                medicine.category
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =
                selectedCategory === "all" ||

                medicine.category === selectedCategory;


            return matchesSearch && matchesCategory;

        });


    displayMedicines(filtered);

}


medicineSearch.addEventListener(
    "input",
    filterMedicines
);


categoryFilter.addEventListener(
    "change",
    filterMedicines
);


/* ==========================================
   MEDICINE MODAL
========================================== */

const medicineModal =
    document.getElementById("medicineModal");

const modalClose =
    document.getElementById("modalClose");


function openMedicineModal(index) {

    const medicine =
        medicines[index];


    document.getElementById("modalCategory")
        .textContent =
        medicine.category;


    document.getElementById("modalName")
        .textContent =
        medicine.name;


    document.getElementById("modalDescription")
        .textContent =
        medicine.description;


    document.getElementById("modalUses")
        .textContent =
        medicine.uses;


    document.getElementById("modalDosage")
        .textContent =
        medicine.dosage;


    document.getElementById("modalPrecautions")
        .textContent =
        medicine.precautions;


    document.getElementById("modalSideEffects")
        .textContent =
        medicine.sideEffects;


    medicineModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeMedicineModal() {

    medicineModal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeMedicineModal
);


medicineModal.addEventListener(
    "click",
    (event) => {

        if (event.target === medicineModal) {

            closeMedicineModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMedicineModal();

        }

    }
);


/* ==========================================
   CONSULTATION SCROLL
========================================== */

function scrollToConsultation() {

    const section =
        document.getElementById("consultation");


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ==========================================
   CHARACTER COUNTER
========================================== */

const symptoms =
    document.getElementById("symptoms");

const symptomCount =
    document.getElementById("symptomCount");


symptoms.addEventListener(
    "input",
    () => {

        symptomCount.textContent =
            symptoms.value.length;

    }
);


/* ==========================================
   CONSULTATION FORM
========================================== */

const consultationForm =
    document.getElementById("consultationForm");

const formMessage =
    document.getElementById("formMessage");


consultationForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const consultationData = {

            fullName:
                document.getElementById("fullName").value.trim(),

            age:
                document.getElementById("age").value,

            gender:
                document.getElementById("gender").value,

            phone:
                document.getElementById("phone").value.trim(),

            email:
                document.getElementById("email").value.trim(),

            symptoms:
                document.getElementById("symptoms").value.trim(),

            duration:
                document.getElementById("duration").value.trim(),

            medication:
                document.getElementById("medication").value.trim(),

            allergies:
                document.getElementById("allergies").value.trim(),

            submittedAt:
                new Date().toISOString()

        };


        /* ==========================
           BASIC VALIDATION
        ========================== */

        if (
            consultationData.fullName === "" ||
            consultationData.age === "" ||
            consultationData.gender === "" ||
            consultationData.phone === "" ||
            consultationData.email === "" ||
            consultationData.symptoms === "" ||
            consultationData.duration === ""
        ) {

            showFormMessage(
                "Please complete all required fields.",
                false
            );

            return;

        }


        /* ==========================
           SAVE TO LOCAL STORAGE
        ========================== */

        const existingRequests =
            JSON.parse(
                localStorage.getItem(
                    "consultationRequests"
                )
            ) || [];


        existingRequests.push(
            consultationData
        );


        localStorage.setItem(
            "consultationRequests",
            JSON.stringify(existingRequests)
        );


        /* ==========================
           SUCCESS MESSAGE
        ========================== */

        showFormMessage(
            "Your consultation request has been saved successfully.",
            true
        );


        consultationForm.reset();

        symptomCount.textContent = "0";

    }
);


/* ==========================================
   FORM MESSAGE
========================================== */

function showFormMessage(
    message,
    success
) {

    formMessage.textContent =
        message;

    formMessage.classList.add("show");


    if (!success) {

        formMessage.style.background =
            "#fff0f0";

        formMessage.style.color =
            "#a13d3d";

    } else {

        formMessage.style.background =
            "#e8f8f0";

        formMessage.style.color =
            "#17764f";

    }


    setTimeout(() => {

        formMessage.classList.remove(
            "show"
        );

    }, 5000);

}


/* ==========================================
   INITIAL LOAD
========================================== */

displayMedicines(medicines);


console.log(
    "Community Health Connect Pharmacy loaded."
);