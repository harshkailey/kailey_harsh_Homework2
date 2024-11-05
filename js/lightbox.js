function openLightbox(heroId) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const heroName = document.getElementById('hero-name');
    const heroAge = document.getElementById('hero-age');
    const heroLocation = document.getElementById('hero-location');

    // Hero data object with corrected paths for images
    const heroData = {
        cap: {
            img: "../images/cap.jpeg",  // Adjusted path for images folder
            title: "Captain America",
            name: "Steve Rogers",
            age: "101",
            location: "New York (Earth-616)"
        },
        carol: {
            img: "../images/carol.jpeg",  // Adjusted path for images folder
            title: "Captain Marvel",
            name: "Carol Danvers",
            age: "34",
            location: "Boston (Earth-616)"
        },
        clint: {
            img: "../images/clint.jpeg",  // Adjusted path for images folder
            title: "Hawkeye",
            name: "Clint Barton",
            age: "41",
            location: "Waverly, Iowa (Earth-616)"
        },
        hulk: {
            img: "../images/hulk.jpeg",  // Adjusted path for images folder
            title: "Hulk",
            name: "Bruce Banner",
            age: "49",
            location: "Dayton, Ohio (Earth-616)"
        },
        thor: {
            img: "../images/thor.jpeg",  // Adjusted path for images folder
            title: "Thor",
            name: "Thor Odinson",
            age: "1500+",
            location: "Asgard"
        },
        widow: {
            img: "../images/widow.jpeg",  // Adjusted path for images folder
            title: "Black Widow",
            name: "Natasha Romanoff",
            age: "35",
            location: "Stalingrad, Russia (Earth-616)"
        }
    };

    // Get data for the selected hero
    const hero = heroData[heroId];

    // Set image, title, and additional info
    if (hero) {
        lightboxImg.src = hero.img;
        lightboxTitle.textContent = hero.title;
        heroName.textContent = hero.name;
        heroAge.textContent = hero.age;
        heroLocation.textContent = hero.location;

        // Show the lightbox
        lightbox.classList.add('show');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}
