const search = document.querySelector(".search");
const li = document.querySelectorAll("li");
const searchEngine = e => {
    const text = e.target.value;
    console.log(text);
    li.forEach(el => {
        console.log(el);
    })

}
search.addEventListener('keyup',searchEngine);