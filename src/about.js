export default function loadPageAbout() {
    const contentDiv = document.getElementById('content');

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    contentDiv.appendChild(headline);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Telefon
    const phoneP = document.createElement('p');
    phoneP.textContent = "📞 123 456 789";
    contactContainer.appendChild(phoneP);

    // Adresa
    const addressP = document.createElement('p');
    addressP.textContent = "🏠 123 Forest Drive, Forestville, Maine";
    contactContainer.appendChild(addressP);

    // Placeholder
    const mapPlaceholder = document.createElement('div');
    mapPlaceholder.textContent = "[Map Placeholder]";
    mapPlaceholder.style.backgroundColor = "#ccc";
    mapPlaceholder.style.height = "200px";
    mapPlaceholder.style.display = "flex";
    mapPlaceholder.style.alignItems = "center";
    mapPlaceholder.style.justifyContent = "center";
    
    contactContainer.appendChild(mapPlaceholder);

    contentDiv.appendChild(contactContainer);
}