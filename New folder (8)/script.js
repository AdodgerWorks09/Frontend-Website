const cars = [
    { title: "Toyota Camry", description: "A reliable sedan.", posterPath: "./assets/images/toyota-camry.jpg", downloadLink: "#" },
    { title: "Honda Accord", description: "A spacious and comfortable car.", posterPath: "./assets/images/honda-accord.jpg", downloadLink: "#" },
    { title: "Ford Mustang", description: "A classic sports car.", posterPath: "./assets/images/ford-mustang.jpg", downloadLink: "#" },
    // Add more cars as needed
];

// Function to display cars
function displayCars() {
    const carsContainer = document.getElementById('cars');
    carsContainer.innerHTML = ''; // Clear previous cars

    cars.forEach(car => {
        const carEl = document.createElement('div');
        carEl.classList.add('car');
        carEl.innerHTML = `
            <h3>${car.title}</h3>
            <p>${car.description}</p>
            <img src="${car.posterPath}" alt="${car.title}" />
            <a href="${car.downloadLink}" target="_blank">Rent Now</a>
        `;
        carsContainer.appendChild(carEl);
    });
}

// Search functionality
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredCars = cars.filter(car => car.title.toLowerCase().includes(searchInput));
    displayFilteredCars(filteredCars);
});

// Function to display filtered cars
function displayFilteredCars(filteredCars) {
    const carsContainer = document.getElementById('cars');
    carsContainer.innerHTML = ''; // Clear previous cars

    filteredCars.forEach(car => {
        const carEl = document.createElement('div');
        carEl.classList.add('car');
        carEl.innerHTML = `
            <h3>${car.title}</h3>
            <p>${car.description}</p>
            <img src="${car.posterPath}" alt="${car.title}" />
            <a href="${car.downloadLink}" target="_blank">Rent Now</a>
        `;
        carsContainer.appendChild(carEl);
    });
}

// Initial display of cars
displayCars();
