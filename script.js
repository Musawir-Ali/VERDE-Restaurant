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

const reserveForm = document.querySelector(".reserve-form");
reserveForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = reserveForm.querySelector('input[name="name"]');
    const guestName = nameInput.value;

    reserveForm.innerHTML = `
        <div class="reserve-success">
            <h3>Thank you, ${guestName}.</h3>
            <p>We've received your request and will confirm your reservation by email.</p>
        </div>
    `;
})