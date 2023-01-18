function getDogs() {
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogs => dogs.message.forEach(dog => {
        renderDog(dog)
    })
)}
document.addEventListener('DOMContentLoaded', getDogs)

function renderDog(dog) {
    const dogPics = document.querySelector('#dog-image-container')

    const image  = document.createElement('img')
    image.src = dog

    dogPics.append(image)
}

function dogBreed() {fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(dogBreedData => Object.keys(dogBreedData.message).forEach(renderDogBreed))
}
dogBreed()

function renderDogBreed(breed) {
    const dogList = document.querySelector('#dog-breeds')

    const li = document.createElement('li')
    li.textContent = breed

    dogList.append(li)

    li.addEventListener('click', (event) => {
        let newColor = event.target.style.color
        newColor = event.target.style.color = newColor === 'red' ? 'black' : 'red'
        })
    }



// Challenge 4:

// Once we are able to load all of the dog breeds onto the page,
// add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.
// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a.
// For simplicity, the dropdown only includes the letters a-d.
// However, we can imagine expanding this to include the entire alphabet.