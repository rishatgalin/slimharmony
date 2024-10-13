window.onload = () => {
  const input = document.querySelector("#phone");
  if (input && window.intlTelInput) {
    window.intlTelInput(input, {
      loadUtilsOnInit:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
    });
  }
};

(function () {
  const buyButtons = document.querySelectorAll(".b-buy-button");
  const formPopup = document.querySelector("#formPopup");
  if (buyButtons && formPopup) {
    for (const btn of buyButtons) {
      btn.addEventListener("click", () => {
        formPopup.classList.add("b-popup--opened");
        document.body.classList.add("hidden");
      });
    }
  }

  const popups = document.querySelectorAll(".b-popup");
  if (popups) {
    for (const popup of popups) {
      const close = popup.querySelector(".b-popup__close");
      close.addEventListener("click", () => {
        popup.classList.remove("b-popup--opened");
        document.body.classList.remove("hidden");
      });
    }
  }
})();
