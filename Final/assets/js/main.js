
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.classList('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Slider ucun

$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:`
        <button type="button" class="main-slider-prev"><i class="fa-solid fa-angle-left"></i></button>
        `,
        nextArrow:`
        <button type="button" class="main-slider-next"><i class="fa-solid fa-angle-right"></i></button>
        `,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
      });
      $('.newest-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $('.popular-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });
    

//Headerin top hissesindeki dropdownlari idare etmek ucun
let getMoneystate = document.getElementById("money");
let getSellwithus = document.getElementById("sell-with-us");

getMoneystate.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".sell-with-us").classList.remove("d-block");
  document.querySelector(".money-change").classList.toggle("d-block");
});
getSellwithus.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".money-change").classList.remove("d-block");
  document.querySelector(".sell-with-us").classList.toggle("d-block");
});
$(document).ready(function () {
  $(".button-all-categories").click(function (e) {
    e.preventDefault();
    $(".all-catogories-catalog").slideToggle();
  });

});


$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:false,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
     }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
   }
    }]
  });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


//Details Seyfesinde Mehsulun Sayini (+/-)
var minus=document.querySelector('#minus');
var plus=document.querySelector('#plus');
let changePraductCount=0
// minus.addEventListener('click',function(){
//   if(changePraductCount>1){
//     changePraductCount--;
//     document.querySelector("#PraductCount").value=changePraductCount
//   }
  
  

// })

// plus.addEventListener('click',function(){
//   changePraductCount++; 
//   document.querySelector("#PraductCount").value=changePraductCount;  

// })

//Details Seyfesinde Tab Menu
let btns=document.querySelectorAll("#btn-tab-menu");
let content =document.querySelectorAll(".content-nav div")

//Details Seyfesinde Tab Menu
for(var btn of btns){
  btn.addEventListener("click",function(e){
    let activ=document.querySelector('.active-tab')   
    activ.classList.remove('active-tab')
    e.target.classList.add("active-tab")    

    var index = e.target.getAttribute("data-id")
    for(var div of content){
      if(div.getAttribute('data-id')===index){
        div.classList.remove('d-none')
      }
      else{
        div.classList.add('d-none')
      }
    }

    
   

  })
}

//Basket---Local Storage 
let addToCartBtns = document.querySelectorAll("#add-to-basket");
let basketCount = document.querySelector("#shopping-count")

let products = JSON.parse(localStorage.getItem("products"));

if (products == null) {
    localStorage.setItem("products", JSON.stringify([]));
    products = [];
}


function updateBasketCount() {
    let products = JSON.parse(localStorage.getItem("products"));
    basketCount.innerText = products.length;
}

updateBasketCount();

function addToBasket(el) {
    let parent = el.parentElement.parentElement.parentElement.parentElement;
    let productId = parent.id;
    let productImage = parent.querySelector(".prodact-img").src;
    let productTitle = parent.querySelector(".prodact-name").innerText;
    let productPrice = parent.querySelector("span .prodact-price").innerText;
    console.log(productId);
    console.log(productImage);
    console.log(productTitle);
    console.log(productPrice);

    let product = products.find(p => p.id == productId);

    if (product === undefined) {
        products.push({
            id : productId,
            image: productImage,
            title: productTitle,
            price: productPrice,
            count: 1
        })
    }else {
        product.count = +product.count + 1;
    }

    localStorage.setItem("products", JSON.stringify(products));

    updateBasketCount();
}

addToCartBtns.forEach(cartBtn => {
    cartBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        addToBasket(ev.target)
    })
})
window.onscroll=function(){
if(document.body.scrollTop>400 || document.documentElement.scrollTop>400){
  
  document.querySelector(".arrow-for-down").classList.remove('active')
  document.querySelector(".buttom").classList.add('active-header')

  console.log('hello');
}
else{
  document.querySelector(".arrow-for-down").classList.add('active');
  document.querySelector(".buttom").classList.remove('active-header')
}
}
var sliderbar=document.querySelector(".slidebb");

sliderbar.addEventListener('click',function(){
  console.log('hello');
  document.querySelector('.siderbar').classList.add('active-slidebar')
})
var sliderbarclose=document.querySelector("#close-slidebar");

sliderbarclose.addEventListener('click',function(){
  document.querySelector('.siderbar').classList.remove('active-slidebar')
})

