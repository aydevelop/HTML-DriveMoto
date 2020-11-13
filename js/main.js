$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnprev">
     <img src="images/arrow-left.svg" >  
    </bottom>`,
    nextArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnnext">
     <img src="images/arrow-right.svg" >  
    </bottom>`,
  })
})

$('.search__tabs-item').on('click', function (e) {
  e.preventDefault()

  $('.search__tabs-item').removeClass('search__tabs-item--active')
  $('.search__content-item').removeClass('search__content-item--active')

  $(this).addClass('search__tabs-item--active')
  let id = $(this).attr('href')
  $(id).addClass('search__content-item--active')
})

$('.product-item__favorite').on('click', function (e) {
  e.preventDefault()

  $('.product-item__favorite').removeClass('product-item__favorite--active')
  $(this).addClass('product-item__favorite--active')
})

$('.product-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  dots: true,
  prevArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnprev banner-section__slider-btnprev--product">
   <img src="images/arrow4.svg" >  
  </bottom>`,
  nextArrow: `<bottom class="banner-section__slider-btn banner-section__slider-btnnext banner-section__slider-btnnext--product">
   <img src="images/arrow3.svg" >  
  </bottom>`,
})
