function evaluateXPath(aNode, aExpr) {
    var xpe = new XPathEvaluator();
    var nsResolver = xpe.createNSResolver(aNode.ownerDocument == null ?
      aNode.documentElement : aNode.ownerDocument.documentElement);
    var result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
    var found = [];
    var res;
    while (res = result.iterateNext())
      found.push(res);
    return found;
  }
       
  
  
  var xmlCont = chrome.runtime.getURL("/thirdParty/spa-eng.tei"); //this returns the FULL_PATH of the .xml file [NOT THE XML NODES]
  // console.log(xmlCont) //You can see it here
  
  var input = "INPUT YOUR SHIT HERE YOU APES";
  
function getTranslation(input){
  
  $.ajax({                    
        type: "GET" , 
        url: xmlCont,//Place that FULL_PATH here 
        dataType: "xml" , //This too is important 
  
       success: function(xml) { 
  
        console.log(xml)// see the ajax results if your curious
  
      //var xmlDoc = $.parseXML( xml );//NOT NEED FOR THIS
  
      //console.log(xmlDoc);// if you parseXML it returns null
  
      var entries = $(xml).find('body').find('entry'); //Show the text between the <title> tags
  
      // var regex = new RegExp("^Europa$");
      // speedy
      // $(entries).filter(function () {
      //     return regex.test($(this).text()); 
      // });
  
      // for (i = 0; i < spanish.length; i++){
      //    console.log(spanish[i].textContent)
      // }
      
  
       for (i = 0; i < entries.length; i++){
          var entry = entries[i];
          var spanish = entry.getElementsByTagName("form")[0].getElementsByTagName("orth")[0].textContent; 
          var englishes = entry.getElementsByTagName("sense"); 
          var english_list = []
           for (j = 0; j < englishes.length; j++) {
               var english = englishes[j].getElementsByTagName("cit")[0].getElementsByTagName("quote")[0].textContent;
               english_list.push(english);
           }
  
           if (spanish === input){
               console.log(english_list);
               return console.log(english_list.toString());
           }
       }
  
      //var entry = title.getElementsByTagName('entry').text(); //Show the text between the <title> tags
  
  }    
      });
  }
  
  
//TODO: getTheMeaningOfTheWord should return the meaning of the word
//hover should make a div that displays everything
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
  
      // do your things
  
    
window.addEventListener("load", function() {
    let allPs = document.querySelectorAll("p");
    for (let i = 0; i < allPs.length; i++) {
        console.log(allPs[i])
        let currentList = allPs[i].innerHTML.split(" ");
        allPs[i].innerHTML = "";
        for (let j = 0; j < currentList.length; j++) {
            let content = "Word: " +  getTranslation(currentList[j]);  
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
}
})
