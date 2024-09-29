
document.getElementById('search').addEventListener('click', function() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>Searching for trains...</p>';
    resultsDiv.style.display = 'block';

    // Simulate a delay for searching trains
    setTimeout(() => {
        // Mock train data
        const trains = [
            { id: 1, name: 'CST', time: '10:00 AM' },
            { id: 2, name: 'Banglore', time: '12:00 PM' },
            { id: 3, name: 'Rajadani express', time: '02:00 PM' },
            { id: 4, name: 'local', time: '10:00 AM' },
            { id: 5, name: 'Mangala express', time: '11:00 PM' },
            { id: 6, name: 'Duronto express', time: '6:00 AM' },
            { id: 7, name: 'Gatimaan express', time: '3:00 PM' },
            { id: 8, name: 'vande barata', time: '1:00 AM' },
            { id: 9, name: 'Suvidha express', time: '8:00 PM' },
            { id: 10, name: 'Ahimsa express', time: '5:00 PM' }
        ];

        resultsDiv.innerHTML = '<h2>Available Trains</h2>';
        trains.forEach(train => {
            const trainDiv = document.createElement('div');
            trainDiv.innerHTML = `<input type="radio" name="train" value="${train.id}" data-name="${train.name}" data-time="${train.time}"> ${train.name} - ${train.time}`;
            resultsDiv.appendChild(trainDiv);
        });
    }, 2000); // 2-second delay to simulate searching
});

document.getElementById('results').addEventListener('change', function() {
    const passengerDetailsDiv = document.getElementById('passenger-details');
    const passengerFormsDiv = document.getElementById('passenger-forms');
    passengerFormsDiv.innerHTML = '';

    const numPassengers = document.getElementById('passengers').value;
    for (let i = 0; i < numPassengers; i++) {
        const passengerForm = document.createElement('div');
        passengerForm.innerHTML = `
            <label>Passenger ${i + 1} Name:</label>
            <input type="text" required>
            <label>Passenger ${i + 1} Age:</label>
            <input type="number" required>
            <label>Passenger ${i + 1} Gender:</label>
            <select required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        `;
        passengerFormsDiv.appendChild(passengerForm);
    }

    passengerDetailsDiv.style.display = 'block';
});

document.getElementById('proceed-payment').addEventListener('click', function() {
    document.getElementById('payment').style.display = 'block';
});

document.getElementById('pay').addEventListener('click', function() {
    const selectedTrain = document.querySelector('input[name="train"]:checked');
    const trainName = selectedTrain.getAttribute('data-name');
    const trainTime = selectedTrain.getAttribute('data-time');

    const ticketDetails = `
        <p>Pickup Point: ${document.getElementById('pickup').value}</p>
        <p>Dropping Point: ${document.getElementById('drop').value}</p>
        <p>Date: ${document.getElementById('date').value}</p>
        <p>Number of Passengers: ${document.getElementById('passengers').value}</p>
        <p>Train: ${trainName} - ${trainTime}</p>
        <p>Payment Method: ${document.getElementById('payment-method').value}</p>
    `;

    document.getElementById('ticketDetails').innerHTML = ticketDetails;
    document.getElementById('ticket').style.display = 'block';
});
