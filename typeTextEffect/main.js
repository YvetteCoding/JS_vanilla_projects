const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.Type();
    this.isDeliting(false);

}
// type method ??? 
TypeWriter.prototype.type(){
    

    set.Timeout(() => this.type(), 500);
}
// init on DOM load

document.addEventListener("DOMContentLoaded", init);

// init app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txt.txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // init TypeWriter
    new TypeWriter(txtElement, words, wait)
    
}