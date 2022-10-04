const search = document.querySelector(".search");
const li = document.querySelectorAll("li");
const searchEngine = e => {
    const text = e.target.value.toLowerCase();
    console.log(text);
    console.log(search.textContent);
    li.forEach(el => {
 
        if(el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display ='block';
            
        }
        else {
            el.style.display ='none';
        }
        console.log(el);
    })

}
search.addEventListener('keyup',searchEngine);