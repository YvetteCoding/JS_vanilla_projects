const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 20);
    this.type();
    this.isDeleting = false;

}
// type method ??? 
TypeWriter.prototype.type = function () {
    // current index of word

    const current = this.wordIndex % this.words.length;

    // get full text of current word

    const fullTxt = this.words[current]
    // check if is deleting

    if (this.isDeleting) {
        // remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // add charcter
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //initial type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // if word is complete

    if (!this.isDeleting && this.txt === fullTxt) {
        //make a pause at the end
        typeSpeed = this.wait;

        // det delete to true
        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //move to next word
        this.wordIndex ++;
        // pause before start typing new word
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}
// init on DOM load

document.addEventListener("DOMContentLoaded", init);

// init app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // init TypeWriter
    new TypeWriter(txtElement, words, wait)

}