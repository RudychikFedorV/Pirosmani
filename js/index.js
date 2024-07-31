// swiper welcome section START
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// swiper welcome section END

// swiper categories section START
const categoriesSwiper = new Swiper(".swiper-categories", {
  slidesPerView: "auto",
  spaceBetween: 90,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// swiper categories section END

// json products section START
function loadJSON(callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', './json/products.json', true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          try {
              const data = JSON.parse(xhr.responseText);
              callback(data);
          } catch (error) {
              console.error('Error parsing JSON:', error);
          }
      }
  };
  xhr.send(null);
}

function updateHTML(data) {
  console.log('Received data:', data); 
  if (!Array.isArray(data)) {
      console.error('Expected an array but got:', data);
      return;
  }
  const container = document.getElementById('products-container');
  data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('products-item');

      productItem.innerHTML = `
          <img src="${product.imgSrc}" alt="${product.title}" class="products-item__img">
          <a href="${product.linkTitle}" class="products-item__title"><strong>${product.title}</strong></a>
          <p class="products-desc">${product.desc}</p>
          <div class="products-item__rating">
              ${getRatingStars(product.rating)}
          </div>
          <div class="products-item__price">
              <p>${product.price}</p>
              <span>${product.weight}</span>
          </div>
          <a href="#!" class="products-item__btn pirosmani-btn">В корзину</a>
      `;

      container.appendChild(productItem);
  });
}

function getRatingStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
      if (i < rating) {
          stars += '<img src="./img/products/star-green.svg" alt="star green">';
      } else {
          stars += '<img src="./img/products/star-grey.svg" alt="star grey">';
      }
  }
  return stars;
}

loadJSON(updateHTML);
// json products section END