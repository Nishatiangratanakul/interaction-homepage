const foodCombinations = [
    {
        combo: 'Icecream and French Fries',
        images: ['assets/images/icecream.png', 'assets/images/french_fries.png']
    },
    {
        combo: 'Chips and Chocolate',
        images: ['assets/images/chips.jpg', 'assets/images/chocolate.jpeg']
    },
    {
        combo: 'Mango and Tajin',
        images: ['assets/images/mango.jpg', 'assets/images/tanjin.png']
    },
    {
        combo: 'Peanut Butter and Bacon Sandwich',
        images: ['assets/images/peanut_butter.jpeg', 'assets/images/bacon_sandwich.jpeg']
    },
    {
        combo: 'Pineapple and Pizza',
        images: ['assets/images/pineapple.jpeg', 'assets/images/pizza.jpeg']
    },
    {
        combo: 'Orange Juice and Cereal',
        images: ['assets/images/orange_juice.jpeg', 'assets/images/cereal.jpeg']
    },
    {
        combo: 'Strawberry and Chocolate',
        images: ['assets/images/strawberry.jpeg', 'assets/images/chocolate.jpeg']
    },
    {
        combo: 'Sushi and Cream Cheese',
        images: ['assets/images/sushi.jpeg', 'assets/images/cream_cheese.jpeg']
    },
    {
        combo: 'Cheese and Pie',
        images: ['assets/images/cheese.jpeg', 'assets/images/pie.jpeg']
    },
    {
        combo: 'Ketchup and Eggs',
        images: ['assets/images/ketchup.jpeg', 'assets/images/eggs.jpeg']
    },
];

let currentIndex = 0;

function loadFoodCard(index) {
    const foodCardContainer = document.getElementById('food-card-container');
    const currentCombo = foodCombinations[index];

    const foodCardHTML = `
        <div class="food-card">
            <img class="image-container" src="${currentCombo.images[0]}" alt="Image 1">
            <img class="image-container" src="${currentCombo.images[1]}" alt="Image 2">
        </div>
    `;

    foodCardContainer.innerHTML = foodCardHTML;
}

function handleSwipe(liked) {
    const foodCards = document.querySelectorAll('.food-card');
    foodCards.forEach(card => {
        card.style.transform = liked ? 'translateX(100%)' : 'translateX(-100%)';
    });

    currentIndex++;
    if (currentIndex < foodCombinations.length) {
        setTimeout(() => {
            loadFoodCard(currentIndex);
            foodCards.forEach(card => {
                card.style.transform = 'translateX(0)';
            });
        }, 300);
    } else {
        // Handle the end of the food list
        alert('You reached the end of the food combinations!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadFoodCard(currentIndex);
});