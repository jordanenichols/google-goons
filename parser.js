//TODO: getTheMeaningOfTheWord should return the meaning of the word
//hover should make a div that displays everything

window.addEventListener("load", function() {
    let allPs = document.querySelectorAll("p");
    for (let i = 0; i < allPs.length; i++) {
        console.log(allPs[i])
        let currentList = allPs[i].innerHTML.split(" ");
        allPs[i].innerHTML = "";
        for (let j = 0; j < currentList.length; j++) {
            let content = "Word: " +  currentList[j];  
            allPs[i].innerHTML += "<span data-html='true' class='superhover' data-tooltip data-original-title='"+ content +"'>" + currentList[j] + "</span> ";
        }
    }
    let spans = document.querySelectorAll("span.superhover");
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener("mouseover", getTheMeaningOfTheWord);
        spans[i].addEventListener("click", read);
    }
})
function getTheMeaningOfTheWord(element){
    // element.target.innerHTML = 
}

function spanCreator(current) {
    //Get all their junk
    let out = "<span ><ul><li>Translation</li><p id = 'translatorpara'>" + translation + "</p><li>Synonyms</li><p id = 'synonym'>" + synonym + "</p><li>Sentence Examples</li><p id = 'example'>" + example + "</p></ul></span>";
    return out;
}

function read(element) {
    let t_lang = "en";
    let t_element = element.target.innerHTML;
    let url = "http://translate.google.com/translate_tts?ie=UTF-8&tl=" + t_lang + "&client=tw-ob&q=" + t_element;
    var myAudio = new Audio(url);
    myAudio.type = 'audio/mp3';
    myAudio.play();

}
