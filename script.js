const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const xBtn=document.getElementById('x');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

// Show loading
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

// Hide loading
function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}

// Show new quote
function newQuote() {
    loading();
    // Choosing random quotes from the list
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent=quote.author;
    // Check quote length to determine styling
    if(quote.text.length > 30){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //Set quote, hide loader
    quoteText.textContent=quote.text;
    complete();
}

// Open X
function xQuote() {
    const xUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(xUrl, '_blank');
}

// Event listener
newQuoteBtn.addEventListener('click', newQuote);
xBtn.addEventListener('click', xQuote);

// Quote On
newQuote();