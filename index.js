let gods = [
    {
        name: 'Zeus',
        image: "./zeus.jpeg",
        ability: 'lightning-manipulation',
        occupation: 'god-king',
        description: 'Zeus was the king of the gods in ancient Greek mythology. He was the god of the sky, thunder, lightning, law, and order. As the chief Greek deity, he ruled over Mount Olympus and all the other gods and goddesses.' 
    },
    {
        name: 'Apollo',
        image: './apollo.jpeg',
        ability: 'prophecy',
        occupation: 'sun-god',
        description: 'Apollo was the Greek god of many things, including music, poetry, prophecy, healing, and archery. He was known for his beauty and his association with light and the sun.'
    },
    {
        name: 'Hercules',
        image: './hercules.jpeg',
        ability: 'strength',
        occupation: 'demi-god',
        description: 'Hercules was a legendary Greek hero, son of the god Zeus and the mortal Alcmene. He was known for his immense strength and his completion of twelve seemingly impossible tasks, known as the Twelve Labors of Hercules.'
    }
];

function displayGods({name, image, ability, occupation, description}, index) {
    const isLiked = localStorage.getItem(`like-status-${index}`) === "true";
    return `
    <div class="gods-card">
        <div class="god-profile">
            <h1>${name}</h1>
            <img src="${image}" alt="${name}"/>
            <h2>${ability},</h2>
            <h4>${occupation}</h4>
            <p><strong>${description}</strong></p>
            <i class="fas fa-thumbs-up like-icon" id="like-${index}" style="color: ${isLiked ? 'blue' : 'black'};" data-index="${index}"></i>
        </div>
    </div>                
    `;
}

let cardContainer = document.getElementById("card-container");

let godsCard = gods.map((divinity, index) => displayGods(divinity, index));


cardContainer.innerHTML = godsCard.join('');


const likeIcons = document.querySelectorAll('.like-icon');

likeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        const isLiked = localStorage.getItem(`like-status-${index}`) === "true";
        
        
        const newLikeStatus = !isLiked;
        localStorage.setItem(`like-status-${index}`, newLikeStatus);
        
        
        this.style.color = newLikeStatus ? 'blue' : 'black'; 
    });
});
