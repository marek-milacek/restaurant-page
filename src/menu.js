// menu.js

export default function loadPageMenu() {
    const contentDiv = document.getElementById('content');

    // Nadpis stránky
    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    headline.classList.add('menu-title');
    contentDiv.appendChild(headline);

    // Seznam jídel
    const menuItems = [
        {
            name: "Honey Tea",
            price: "$2",
            description: "A warm, sweet tea made with the highest quality honey."
        },
        {
            name: "Beary Tea",
            price: "$3",
            description: "Comforting chai tea mixed with honey and berries."
        },
        {
            name: "Toast and Jam",
            price: "$4",
            description: "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam."
        },
        {
            name: "Fresh Fruit",
            price: "$3",
            description: "A small bowl of fresh fruit."
        }
    ];

    // Vytvoření elementů pro každé jídlo
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const nameElement = document.createElement('h2');
        nameElement.textContent = item.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;

        const priceElement = document.createElement('h3');
        priceElement.textContent = item.price;

        itemDiv.appendChild(nameElement);
        itemDiv.appendChild(descriptionElement);
        itemDiv.appendChild(priceElement);

        contentDiv.appendChild(itemDiv);
    });
}