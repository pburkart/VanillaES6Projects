const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelector = document.getElementById('movie');

let ticketPrice = +movieSelector.value;

// Update Totals
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
}

movieSelector.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount(); 
});

container.addEventListener('click', (e) =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

