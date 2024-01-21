const wrapper = document.querySelector(".wrapper");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const initialGif = document.getElementById("initial-gif");
const confirmationGif = document.getElementById("confirmation-gif");
const question = document.querySelector(".question");
const confirmationMessage = document.querySelector(".confirmation-message");

yesBtn.addEventListener("click", () => {
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    question.style.display = "none";
    initialGif.style.display = "none";
    confirmationGif.style.display = "block";
    confirmationMessage.style.display = "block";
});

noBtn.addEventListener("click", () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
