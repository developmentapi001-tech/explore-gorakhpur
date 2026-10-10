/* =====================================================
   TOURIST PLACE SEARCH
===================================================== */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


const touristPlaces = [

    {
        name: "Gorakhnath Temple",
        keywords: [
            "gorakhnath",
            "gorakhnath temple",
            "gorkhnath"
        ],
        page: "gorakhnath.html"
    },

    {
        name: "Ramgarh Taal",
        keywords: [
            "ramgarh",
            "ramgarh taal",
            "ramgarh lake"
        ],
        page: "ramgarh-taal.html"
    },

    {
        name: "Gita Press",
        keywords: [
            "gita press",
            "geeta press"
        ],
        page: "gita-press.html"
    },

    {
        name: "Rail Museum",
        keywords: [
            "rail museum",
            "railway museum",
            "rail museum gorakhpur"
        ],
        page: "rail-museum.html"
    },

    {
        name: "Vishnu Temple",
        keywords: [
            "vishnu temple"
        ],
        page: "vishnu-temple.html"
    },

    {
        name: "Geeta Vatika",
        keywords: [
            "geeta vatika",
            "gita vatika"
        ],
        page: "geeta-vatika.html"
    },

    {
        name: "Mahadev Jharkhandi Mandir",
        keywords: [
            "mahadev jharkhandi",
            "jharkhandi mandir"
        ],
        page: "mahadev-jharkhandi.html"
    },

    {
        name: "Tarkulha Devi Temple",
        keywords: [
            "tarkulha",
            "tarkulha devi",
            "tarkulha devi temple"
        ],
        page: "tarkulha-devi.html"
    },

    {
        name: "Budhiya Mai Mandir",
        keywords: [
            "budhiya mai",
            "budhiya mai mandir"
        ],
        page: "budhiya-mai.html"
    },

    {
        name: "Panchmukhi Hanuman Mandir",
        keywords: [
            "panchmukhi hanuman",
            "panchmukhi hanuman mandir"
        ],
        page: "panchmukhi-hanuman.html"
    },

    {
        name: "Golghar Kali Mandir",
        keywords: [
            "golghar kali",
            "golghar kali mandir"
        ],
        page: "golghar-kali-mandir.html"
    },

    {
        name: "ISKCON Temple",
        keywords: [
            "iskcon",
            "iskcon temple",
            "iskcon gorakhpur"
        ],
        page: "iskcon-gorakhpur.html"
    },

    {
        name: "Prachin Mansarovar Mandir",
        keywords: [
            "mansarovar",
            "mansarovar mandir",
            "prachin mansarovar"
        ],
        page: "prachin-mansarovar.html"
    },

    {
        name: "Shri Hanuman Mandir Betiahata",
        keywords: [
            "hanuman mandir betiahata",
            "betiahata hanuman"
        ],
        page: "hanuman-mandir-betiahata.html"
    },

    {
        name: "Sankat Mochan Hanuman Mandir",
        keywords: [
            "sankat mochan",
            "sankat mochan hanuman"
        ],
        page: "sankat-mochan-hanuman.html"
    },


    /* =================================================
       NATURE & PARKS
    ================================================= */

    {
        name: "Shaheed Ashfaq Ullah Khan Prani Udyan",
        keywords: [
            "gorakhpur zoo",
            "gorakhpur zoological park",
            "shaheed ashfaq ullah khan prani udyan",
            "ashfaq ullah khan zoo",
            "zoo"
        ],
        page: "gorakhpur-zoo.html"
    },

    {
        name: "Nauka Vihar",
        keywords: [
            "nauka vihar",
            "nauka"
        ],
        page: "nauka-vihar-list.html"
    },

    {
        name: "Nauka Vihar 2.0",
        keywords: [
            "nauka vihar 2.0",
            "nauka 2.0"
        ],
        page: "nauka-vihar-2.html"
    },

    {
        name: "Nauka Vihar 3.0",
        keywords: [
            "nauka vihar 3.0",
            "nauka 3.0"
        ],
        page: "nauka-vihar-3.html"
    },

    {
        name: "Kusumhi Vinod Van",
        keywords: [
            "kusumhi",
            "kusumhi vinod van",
            "kusmhi van",
            "kusumhi forest"
        ],
        page: "kusmhi-van.html"
    },

    {
        name: "Vindhyavasini Park",
        keywords: [
            "vindhyavasini park",
            "v park",
            "government v park",
            "vindhyavasini"
        ],
        page: "v-park.html"
    },

    {
        name: "Indira Bal Vihar",
        keywords: [
            "indira bal vihar",
            "bal vihar"
        ],
        page: "indra-bal-vihar.html"
    },

    {
        name: "Munshi Premchand Park",
        keywords: [
            "munshi premchand park",
            "premchand park",
            "munshi premchand"
        ],
        page: "munshi-prem-chandra-park.html"
    },

    {
        name: "Nehru Entertainment Park",
        keywords: [
            "nehru entertainment park",
            "nehru park"
        ],
        page: "nehru-park.html"
    },

    {
        name: "Pt. Deen Dayal Upadhyay Park",
        keywords: [
            "pt deen dayal upadhyay park",
            "deen dayal park",
            "deen dayal upadhyay park",
            "pt deen dayal"
        ],
        page: "pt-deen-dayal-park.html"
    },

    {
        name: "Champa Devi Park",
        keywords: [
            "champa devi park",
            "champa devi"
        ],
        page: "champa-devi-park.html"
    },

    {
        name: "Ambedkar Park",
        keywords: [
            "ambedkar park",
            "dr ambedkar park"
        ],
        page: "ambedkar-park.html"
    },

    {
        name: "Herbal Garden",
        keywords: [
            "herbal garden",
            "aiims herbal garden",
            "herbal garden aiims"
        ],
        page: "herbal-garden.html"
    },


    /* =================================================
       HISTORICAL
    ================================================= */

    {
        name: "Chauri Chaura Shaheed Smarak",
        keywords: [
            "chauri chaura",
            "chauri chaura shaheed smarak"
        ],
        page: "chauri-chaura.html"
    },

    {
        name: "Dohariya Shaheed Smarak",
        keywords: [
            "dohariya",
            "dohariya shaheed smarak"
        ],
        page: "dohariya-shaheed-smarak.html"
    },

    {
        name: "Imambara",
        keywords: [
            "imambara"
        ],
        page: "imambara.html"
    },

    {
        name: "Maghar",
        keywords: [
            "maghar",
            "sant kabir maghar"
        ],
        page: "maghar.html"
    },


    /* =================================================
       MUSEUMS
    ================================================= */

    {
        name: "Bauddha Museum",
        keywords: [
            "bauddha museum",
            "buddha museum",
            "government bauddha museum"
        ],
        page: "bauddha-museum.html"
    },

    {
        name: "Purvayatana Archaeological Museum",
        keywords: [
            "purvayatana",
            "purvayatana museum",
            "archaeological museum"
        ],
        page: "purvayatana-museum.html"
    },

    {
        name: "Rahul Sangrahalaya",
        keywords: [
            "rahul sangrahalaya",
            "rahul museum"
        ],
        page: "rahul-sangrahalaya.html"
    },

    {
        name: "Botany Museum",
        keywords: [
            "botany museum"
        ],
        page: "botany-museum.html"
    },

    {
        name: "Zoological Museum",
        keywords: [
            "zoological museum",
            "zoology museum"
        ],
        page: "zoolical-museum.html"
    },


    /* =================================================
       FAMILY & FUN
    ================================================= */

    {
        name: "Orion Mall",
        keywords: [
            "orion mall",
            "orion"
        ],
        page: "orian-mall.html"
    },

    {
        name: "City Mall",
        keywords: [
            "city mall"
        ],
        page: "city-mall.html"
    },

    {
        name: "Venus Mall",
        keywords: [
            "venus mall"
        ],
        page: "venus-mall.html"
    },

    {
        name: "AD Mall",
        keywords: [
            "ad mall",
            "a d mall"
        ],
        page: "ad-mall.html"
    }

];


/* =====================================================
   SEARCH FUNCTION
===================================================== */

function searchTouristPlace() {

    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    if (searchText === "") {

        alert("Please enter a tourist place");

        return;

    }


    const foundPlace =
        touristPlaces.find(function (place) {

            return place.keywords.some(function (keyword) {

                return keyword.includes(searchText) ||
                       searchText.includes(keyword);

            });

        });


    if (foundPlace) {

        window.location.href =
            foundPlace.page;

    }
    else {

        alert(
            "No tourist place found for: " +
            searchInput.value
        );

    }

}


/* =====================================================
   SEARCH BUTTON
===================================================== */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchTouristPlace
    );

}


/* =====================================================
   SEARCH ENTER KEY
===================================================== */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchTouristPlace();

            }

        }
    );

}


/* =====================================================
   PLACE DETAILS BUTTONS
===================================================== */

const detailButtons =
    document.querySelectorAll(".details-btn");


detailButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const place =
                button.getAttribute("data-place");


            if (place === "Gorakhnath Temple") {

                window.location.href =
                    "gorakhnath.html";

            }

            else if (place === "Ramgarh Taal") {

                window.location.href =
                    "ramgarh-taal.html";

            }

            else if (place === "Gita Press") {

                window.location.href =
                    "gita-press.html";

            }

            else if (place === "Rail Museum") {

                window.location.href =
                    "rail-museum.html";

            }

            else if (place === "Taramandal") {

                window.location.href =
                    "taramandal.html";

            }

        }
    );

});


/* =====================================================
   GOOGLE MAP
===================================================== */

const mapBtn =
    document.getElementById("mapBtn");


if (mapBtn) {

    mapBtn.addEventListener(
        "click",
        function () {

            window.open(
                "https://www.google.com/maps/search/Gorakhpur+tourist+places",
                "_blank"
            );

        }
    );

}


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("show");

        }
    );


    const navLinks =
        navbar.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove("show");

            }
        );

    });

}


/* =====================================================
   HERO IMAGE SLIDER
===================================================== */

const heroSlides =
    document.querySelectorAll(".hero-slide");

const heroDots =
    document.querySelectorAll(".dot");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


let currentSlide = 0;

let autoSlide;


/* =====================================================
   SHOW SLIDE
===================================================== */

function showHeroSlide(index) {

    if (heroSlides.length === 0) {

        return;

    }


    heroSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    heroDots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    heroSlides[index].classList.add("active");


    if (heroDots[index]) {

        heroDots[index].classList.add("active");

    }


    currentSlide = index;

}


/* =====================================================
   NEXT SLIDE
===================================================== */

function nextHeroSlide() {

    if (heroSlides.length === 0) {

        return;

    }


    currentSlide++;


    if (currentSlide >= heroSlides.length) {

        currentSlide = 0;

    }


    showHeroSlide(currentSlide);

}


/* =====================================================
   PREVIOUS SLIDE
===================================================== */

function previousHeroSlide() {

    if (heroSlides.length === 0) {

        return;

    }


    currentSlide--;


    if (currentSlide < 0) {

        currentSlide =
            heroSlides.length - 1;

    }


    showHeroSlide(currentSlide);

}


/* =====================================================
   AUTO SLIDER
===================================================== */

function startAutoSlide() {

    clearInterval(autoSlide);


    if (heroSlides.length > 1) {

        autoSlide =
            setInterval(
                function () {

                    nextHeroSlide();

                },
                4000
            );

    }

}


/* =====================================================
   NEXT BUTTON
===================================================== */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        function () {

            nextHeroSlide();

            startAutoSlide();

        }
    );

}


/* =====================================================
   PREVIOUS BUTTON
===================================================== */

if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        function () {

            previousHeroSlide();

            startAutoSlide();

        }
    );

}


/* =====================================================
   HERO DOTS
===================================================== */

heroDots.forEach(function (dot) {

    dot.addEventListener(
        "click",
        function () {

            const slideNumber =
                Number(
                    dot.getAttribute("data-slide")
                );


            showHeroSlide(slideNumber);

            startAutoSlide();

        }
    );

});


/* =====================================================
   START HERO SLIDER
===================================================== */

showHeroSlide(0);

startAutoSlide()