document.addEventListener("DOMContentLoaded", () => {
  
  const homeBtn = document.getElementById('home-btn');
  const notiBtn = document.getElementById('noti-btn');
  const catalogBtn = document.getElementById('catalog-btn');
  const addCouponBtn = document.getElementById('add-coupon-btn');
  const profileBtn = document.getElementById('profile-btn');

  //Boton Home
  homeBtn.addEventListener('click', function() {
    window.location.href = "index.html";
  });
    
  //Boton Notis
  notiBtn.addEventListener('click', function() {

  });
    
  //Boton Catalogo
  catalogBtn.addEventListener('click', function() {
    window.location.href = "Catalogo.html";
  });
    
  //Boton Cupon
  addCouponBtn.addEventListener('click', function() {
     window.location.href = "CrearCupon.html";
  });
    
  //Boton Perfil
  profileBtn.addEventListener('click', function() {

  });


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

  const input2 = document.getElementById("input2");
  const couponDis = document.querySelector(".coupon-dis");

  if (input2 && couponDis) {
    input2.addEventListener("input", () => {
      couponDis.textContent = input2.value || "0%";
    });
  }

  const btnCoupon = document.querySelector(".btnCoupon");
  /*if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      localStorage.setItem("addCard", "true");
      window.location.href = "CrearCupon.html";
    });
  }
*/
  const section = document.querySelector(".section");

  if (section && localStorage.getItem("addCard") === "true") {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = "Nueva Tarjeta";
    section.appendChild(newCard);
    localStorage.removeItem("addCard");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.filter-pill');
  
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      pill.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    });
  });

  const filterScroll = document.querySelector('.filter-scroll');
  let startX;
  let scrollLeft;

  filterScroll.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - filterScroll.offsetLeft;
    scrollLeft = filterScroll.scrollLeft;
  });

  filterScroll.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - filterScroll.offsetLeft;
    const walk = (x - startX) * 2;
    filterScroll.scrollLeft = scrollLeft - walk;
  });
});