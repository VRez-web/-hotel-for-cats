$('.rooms__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    appendArrows:('.rooms__arrows'),
    appendDots:('.rooms__dots')
  });

  $('.reviews__inner').slick({
    variableWidth:true,
    infinite: true,
    dots:true,
    appendArrows:('.reviews__arrows'),
    appendDots:('.reviews__dots')
  });

  