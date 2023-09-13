const url = `https://api.unplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acceskey}`;

const secretkey ="0MgOGnrIJDgdDA9zv9IC4VmuZq2wpwA1F7WwKSy5BQY"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("searach-input")
const searchResults = document.querySelector(".searach-results")
const showMore = document.getElementById("show-more")

let inputData = ""
let page = 1

async function searchimages() {
  inputData = inputE1.value;
  const url = `https://api.unplash.com/search/photos?page=$(page)&query=$(inputData)&client_id=${acceskey}`;

  const response = await fetch(url)
  const data = await response.json()

  const results = data.results

  if (page === 1) {
    searchResults.innerHTML = ""
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result")
    const image = document.createElement("img")
    image.src = result.url.small
    image.alt = result.alt_description
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html
    imageLink.target = "blank"
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResults.appendChild(imageWrapper)

  });

  page++;
  if (page > 1) {
    showMore.style.display = "block"
  }
}

formE1.addEventListener("submit", (event) => {
  event.preventDefault()
  page = 1;
  searchimages()
})

showMore.addEventListener("click", (event) => {
  searchimages()
});

