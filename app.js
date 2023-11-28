$(document).ready(function () {
  $('.slick-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '20px',
    pauseOnHover: false,
    prevArrow: '<i class="fa-solid fa-angle-left slick-prev py-1 px-2" ></i>',
    nextArrow: '<i class="fa-solid fa-angle-right slick-next  py-1 px-2" onclick="change()" ></i>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      }
      ,
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      }
      ,
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  });


  // change the initial slider
  function changeClass(classNameToRemove, newClassName) {
    // Find elements with the specified class
    var elements = $('.' + classNameToRemove);

    // Loop through each element
    elements.each(function (index, element) {
      // Remove the specified class

      // Add the new class to the very next sibling
      var nextSibling = $(element).next();
      if (nextSibling.length > 0) {
        nextSibling.addClass(newClassName);
      }
    });
  }
  // const changeSlickColor = () => {

  //   changeClass('slick-current', 'center-slider');
  // }
  // changeSlickColor()
  // changeClass('slick-current', 'center-slider');


  // var nextSibling = $('.slick-slide .slick-active').next();

  // // Add a class to the next sibling
  // nextSibling.addClass('center-slider');


  // var nextSibling = $('.slides .slick-slide.slick-current .slick-center').next();

  // // Add a class to the next sibling
  // nextSibling.addClass('slick-current');

  // // Log the content of the next sibling (for demonstration purposes)
  // console.log('Content of the Next Sibling:', nextSibling.text());


  $('.customer-logos').slick({
    prevArrow: "<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
  });



  $('.stats-counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 2000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });



  });


  $('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
    fade: false,
    infinite: false,
    speed: 1000,
    asNavFor: '.rightslider,.slider-thumb',


  });

  $('.rightslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: false,

    asNavFor: '.slider-thumb,.slider-content',
    speed: 1000,
    nextArrow: '<img src="../assets/icons/slider-right-icons.png" class="right-slider-icon" />',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1
        }
      },



    ]
  });


  $('.slider-thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-content,.rightslider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
    prevArrow: '<button type="button" data-role="none"  class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" id="changeslides" data-role="none"  class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
     
      ,
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }

    ]
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-content').slick('slickGoTo', slideno - 1);
  });




  $('.changeslides').on('click', function () {
    // Get the class of the clicked element
    var clickedClass = $('.ImageBox .slick-current');

    // Move the class to the next two siblings
    clickedClass.next().addClass('.slick-current');
    clickedClass.next().next().addClass('.slick-current');

    // Remove the class from the clicked element (optional)
    clickedClass.removeClass('.slick-current');
  });



  function updateSlickClasses(parentClassName, childClassName) {
    // Find the parent element
    var $parent = $('.' + parentClassName);

    // Find children with the specified class within the parent
    var $children = $parent.find('.' + childClassName);

    // Remove slick-current from the first child
    $children.first().removeClass('slick-current');

    // Calculate the index of the center child
    var centerIndex = Math.floor($children.length / 2);

    // Add slick-current to the center child
    $children.eq(centerIndex).addClass('slick-current');
  }
  updateSlickClasses('slick-carousel', 'slick-active');

  $('.slick-carousel').slick();

  

  const change = () => {
    updateSlickClasses('slick-carousel', 'slick-active');
  }


});


let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
