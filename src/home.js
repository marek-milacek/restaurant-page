export default function loadPageHome() {
    const contentDiv = document.getElementById('content');

    // Nadpis
    const headline = document.createElement('h1');
    headline.textContent = "Beary's Breakfast Bar";
    headline.classList.add('h1-home');
    contentDiv.appendChild(headline);

    // První box - Popis
    const firstBox = document.createElement('div');
    firstBox.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    firstBox.classList.add('info-box');
    contentDiv.appendChild(firstBox);

    // Druhý box - Otevírací doba
    const secondBox = document.createElement('div');
    secondBox.classList.add('info-box');
    
    const hoursH2 = document.createElement('h2');
    hoursH2.textContent = "Hours";
    secondBox.appendChild(hoursH2);

    const hoursList = document.createElement('ul');
    const hours = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ];

    hours.forEach(day => {
        const li = document.createElement('li');
        li.textContent = day;
        hoursList.appendChild(li);
    });

    secondBox.appendChild(hoursList);
    contentDiv.appendChild(secondBox);

    // Třetí box - Lokace
    const thirdBox = document.createElement('div');
    thirdBox.classList.add('info-box');

    const locationH2 = document.createElement('h2');
    locationH2.textContent = "Location";
    thirdBox.appendChild(locationH2);

    const locationText = document.createElement('p');
    locationText.textContent = "123 Forest Drive, Forestville, Maine";
    thirdBox.appendChild(locationText);

    contentDiv.appendChild(thirdBox);
}