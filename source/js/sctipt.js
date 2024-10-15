window.onload = () => {
  const input = document.querySelector("#phone");
  if (input && window.intlTelInput) {
    window.intlTelInput(input, {
      loadUtilsOnInit:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
    });
  }
};

document.addEventListener("resize", onScroll);

(function () {
  // FORM POPUP
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

  // STUDENTS POPUP
  const studentButtons = document.querySelectorAll(".b-student-item__button");
  if (studentButtons) {
    for (const btn of studentButtons) {
      btn.addEventListener("click", () => {
        const popupId = btn.getAttribute("data-popup-id");
        const popup = document.querySelector(`#${popupId}`);
        if (!popup) {
          return;
        }

        popup.classList.add("b-popup--opened");
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

  onScroll();
})();

function onScroll() {
  const reviews = document.querySelector(".b-reviews__wrapper--reviews");
  const results = document.querySelector(".b-reviews__wrapper--results");
  setScrollbarOffset(reviews);
  setScrollbarOffset(results);
}

function setScrollbarOffset(element) {
  const windowWidth = window.innerWidth;
  if (!element) {
    return;
  }

  const scrollElement = element.querySelector(".b-reviews__scroll");
  if (!scrollElement) {
    return;
  }

  if (windowWidth > 1100) {
    const offset = (windowWidth - 1100) / 2;
    element.style.marginLeft = `-${offset}px`;
    element.style.marginRight = `-${offset}px`;
    scrollElement.style.paddingLeft = `${offset}px`;
    scrollElement.style.paddingRight = `${offset}px`;
  } else {
    element.style.marginLeft = "-16px";
    element.style.marginRight = "-16px";
    scrollElement.style.paddingLeft = "16px";
    scrollElement.style.paddingRight = "16px";
  }
}
