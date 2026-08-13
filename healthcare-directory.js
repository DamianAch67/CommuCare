/* =========================================
   HEALTHCARE DIRECTORY
========================================= */


/* =========================================
   FACILITY DATABASE
========================================= */

const facilities = [

    {
        name:
            "Community Care Pharmacy",

        type:
            "pharmacy",

        location:
            "Kumasi",

        address:
            "24 Health Street, Kumasi",

        phone:
            "+233 24 000 0000",

        hours:
            "Monday - Saturday, 8:00 AM - 8:00 PM",

        services:
            "Prescription Services, OTC Medicines, Health Advice"

    },


    {
        name:
            "HealthFirst Pharmacy",

        type:
            "pharmacy",

        location:
            "Kumasi",

        address:
            "Adum, Kumasi",

        phone:
            "+233 20 000 0000",

        hours:
            "Monday - Sunday, 8:00 AM - 9:00 PM",

        services:
            "Prescription Services, Vitamins, Health Products"

    },


    {
        name:
            "Wellness Plus Pharmacy",

        type:
            "pharmacy",

        location:
            "Kumasi",

        address:
            "Ahodwo, Kumasi",

        phone:
            "+233 27 000 0000",

        hours:
            "Monday - Saturday, 8:00 AM - 7:00 PM",

        services:
            "OTC Medicines, Supplements, Health Advice"

    },


    {
        name:
            "Community General Hospital",

        type:
            "hospital",

        location:
            "Kumasi",

        address:
            "Central Kumasi",

        phone:
            "+233 25 000 0000",

        hours:
            "Open 24 Hours",

        services:
            "Emergency Care, Outpatient Services, Pharmacy, Laboratory"

    },


    {
        name:
            "Family Health Clinic",

        type:
            "clinic",

        location:
            "Accra",

        address:
            "Community Health Road, Accra",

        phone:
            "+233 26 000 0000",

        hours:
            "Monday - Saturday, 8:00 AM - 6:00 PM",

        services:
            "General Consultation, Maternal Health, Laboratory"

    },


    {
        name:
            "Regional Medical Centre",

        type:
            "hospital",

        location:
            "Tema",

        address:
            "Tema Community 1",

        phone:
            "+233 23 000 0000",

        hours:
            "Open 24 Hours",

        services:
            "Emergency Care, Surgery, Diagnostics, Specialist Services"

    },


    {
        name:
            "Hope Medical Clinic",

        type:
            "clinic",

        location:
            "Kumasi",

        address:
            "Bantama, Kumasi",

        phone:
            "+233 28 000 0000",

        hours:
            "Monday - Friday, 8:00 AM - 5:00 PM",

        services:
            "General Consultation, Diagnostics"

    },


    {
        name:
            "CityCare Pharmacy",

        type:
            "pharmacy",

        location:
            "Accra",

        address:
            "Osu, Accra",

        phone:
            "+233 29 000 0000",

        hours:
            "Monday - Sunday, 8:00 AM - 9:00 PM",

        services:
            "Prescription Services, First Aid, OTC Medicines"

    }

];



/* =========================================
   ELEMENTS
========================================= */

const facilityGrid =
    document.getElementById(
        "facilityGrid"
    );


const facilitySearch =
    document.getElementById(
        "facilitySearch"
    );


const facilityType =
    document.getElementById(
        "facilityType"
    );


const facilityLocation =
    document.getElementById(
        "facilityLocation"
    );


const facilityEmpty =
    document.getElementById(
        "facilityEmpty"
    );



/* =========================================
   DISPLAY FACILITIES
========================================= */

function displayFacilities(list) {

    facilityGrid.innerHTML = "";


    if (list.length === 0) {

        facilityEmpty.style.display =
            "block";

        return;

    }


    facilityEmpty.style.display =
        "none";


    list.forEach((facility) => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "facility-card";


        let icon =
            "fa-hospital";


        if (
            facility.type ===
            "pharmacy"
        ) {

            icon =
                "fa-prescription-bottle-medical";

        }


        card.innerHTML = `

            <div class="facility-card-top">

                <div class="facility-card-icon">

                    <i class="fa-solid ${icon}"></i>

                </div>

                <span class="facility-type">

                    ${facility.type.toUpperCase()}

                </span>

            </div>


            <h3>
                ${facility.name}
            </h3>


            <p>

                <i class="fa-solid fa-location-dot"></i>

                ${facility.address}

            </p>


            <p>

                <i class="fa-solid fa-phone"></i>

                ${facility.phone}

            </p>


            <p>

                <i class="fa-solid fa-clock"></i>

                ${facility.hours}

            </p>


            <button
                onclick="showFacility('${facility.name}')"
            >

                View Information

            </button>

        `;


        facilityGrid.appendChild(card);

    });

}



/* =========================================
   FILTER FACILITIES
========================================= */

function filterFacilities() {

    const search =
        facilitySearch.value
            .toLowerCase()
            .trim();


    const type =
        facilityType.value;


    const location =
        facilityLocation.value;


    const filtered =
        facilities.filter(
            (facility) => {

                const matchesSearch =

                    facility.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    facility.address
                        .toLowerCase()
                        .includes(search)

                    ||

                    facility.services
                        .toLowerCase()
                        .includes(search);


                const matchesType =

                    type === "all"

                    ||

                    facility.type === type;


                const matchesLocation =

                    location === "all"

                    ||

                    facility.location ===
                    location;


                return (

                    matchesSearch &&

                    matchesType &&

                    matchesLocation

                );

            }
        );


    displayFacilities(filtered);

}



facilitySearch.addEventListener(
    "input",
    filterFacilities
);


facilityType.addEventListener(
    "change",
    filterFacilities
);


facilityLocation.addEventListener(
    "change",
    filterFacilities
);


displayFacilities(facilities);



/* =========================================
   FACILITY MODAL
========================================= */

const facilityModal =
    document.getElementById(
        "facilityModal"
    );


function showFacility(name) {

    const facility =
        facilities.find(
            (item) =>
                item.name === name
        );


    if (!facility) return;


    const modalIcon =
        document.getElementById(
            "facilityModalIcon"
        );


    if (
        facility.type ===
        "pharmacy"
    ) {

        modalIcon.innerHTML =
            `<i class="fa-solid fa-prescription-bottle-medical"></i>`;

    }
    else {

        modalIcon.innerHTML =
            `<i class="fa-solid fa-hospital"></i>`;

    }


    document.getElementById(
        "facilityModalType"
    ).textContent =
        facility.type.toUpperCase();


    document.getElementById(
        "facilityModalTitle"
    ).textContent =
        facility.name;


    document.getElementById(
        "facilityModalAddress"
    ).textContent =
        facility.address;


    document.getElementById(
        "facilityModalPhone"
    ).textContent =
        facility.phone;


    document.getElementById(
        "facilityModalHours"
    ).textContent =
        facility.hours;


    document.getElementById(
        "facilityModalServices"
    ).textContent =
        facility.services;


    const callButton =
        document.getElementById(
            "facilityCallButton"
        );


    const phoneNumber =
        facility.phone.replace(
            /[^0-9+]/g,
            ""
        );


    callButton.href =
        `tel:${phoneNumber}`;


    facilityModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



function closeFacility() {

    facilityModal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}



facilityModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            facilityModal
        ) {

            closeFacility();

        }

    }
);



/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "Escape"
        ) {

            closeFacility();

        }

    }
);



/* =========================================
   LOAD MESSAGE
========================================= */

console.log(
    "Healthcare Directory loaded successfully."
);