// Scrolling 

const track = document.querySelector('.gallery-track');
const prevBtn = document.querySelector('[data-dir="prev"]');
const nextBtn = document.querySelector('[data-dir="next"]');

nextBtn.addEventListener("click", () => {

    track.scrollBy({ left: 340, behavior: 'smooth' });

});

prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -340, behavior: "smooth" });
});