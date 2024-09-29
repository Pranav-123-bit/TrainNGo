const trains = [
    { name: "CST", from: "Karnataka", to: "Goa", timings: "10:00 AM - 2:00 PM", ac: true },
    { name: "Banglore", from: "Maharastra", to: "kerala", timings: "1:00 AM - 3:00 PM", ac: false },
    { name: "Rajadani express", from: "Goa ", to: "kashmir", timings: "3:00 AM - 2:00 PM", ac: true },
    { name: "local", from: "madhya pradesh", to: "rajasthan", timings: "1:00 AM - 10:00 PM", ac: false },
    { name: "Mangala express", from: "tamil nadu", to: "Goa", timings: "10:30 AM - 6:00 PM", ac: true },
    { name: "Duronto express", from: "karnataka", to: "rajasthan", timings: "11:00 AM - 3:30 PM", ac: false },
    { name: "Gatimaan express", from: "dehli", to: "karnataka", timings: "12:00 AM - 12:00 PM", ac: true },
    { name: "vande barata", from: "bihar", to: "karntaka", timings: "7:00 AM - 3:00 AM", ac: false },
    { name: "Suvidha express", from: "kerala", to: "maharastra", timings: "8:00 AM - 6:00 PM", ac: true },
    { name: "Ahimsa express", from: "maharastra", to: "kashmir", timings: "4:00 AM - 10:00 PM", ac: false },
    { name: "nizamudin express", from: "andhra pradesh", to: "rajasthan", timings: "10:50 AM - 9:00 PM", ac: true },
    { name: "sadhana express", from: "bihar", to: "goa", timings: "9:30 AM - 1:30 PM", ac: false },
    { name: "lata express", from: "karnataka", to: "kerala", timings: "10:40 AM - 7:30 PM", ac: true }
];

const trainList = document.getElementById('train-list');
const trainDetails = document.getElementById('train-details');

trains.forEach(train => {
    const li = document.createElement('li');
    li.textContent = train.name;
    li.addEventListener('click', () => {
        trainDetails.textContent = `From: ${train.from}, To: ${train.to}, Timings: ${train.timings}, AC: ${train.ac ? 'Yes' : 'No'}`;
    });
    trainList.appendChild(li);
});
