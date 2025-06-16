document.addEventListener("DOMContentLoaded", () => {
  const btnAgregar = document.querySelector(".btnAgregar");
  if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      window.location.href = "CrearCupon.html";
    });
  }

  const btnHome = document.querySelector(".btnHome");
  if (btnHome) {
    btnHome.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const colorPicker = document.getElementById("colorPicker");
  const coupons = document.querySelectorAll(".coupon");

  if (colorPicker) {
    colorPicker.addEventListener("input", () => {
      const selectedColor = colorPicker.value;
      coupons.forEach(coupon => {
        coupon.style.backgroundColor = selectedColor;
      });
    });
  }

  const input = document.getElementById("input");
  const couponText = document.querySelector(".coupon-text");

  if (input && couponText) {
    input.addEventListener("input", () => {
      couponText.textContent = input.value || "Empresa";
    });
  }
});