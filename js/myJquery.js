/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  'use strict';
  if ($(".home-header").length) {

    $(function () {
      $(document).scroll(function () {
        var headr = $(".home-header");
        headr.toggleClass('scrolled', $(this).scrollTop() > headr.height());
      });
    });
  }


  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

  });


  var swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    grabCursor: true,
    thumbs: {
      swiper: galleryThumbs
    }
  });


  if ($(".spinner").length) {

    $(function () {

      $('.spinner').niceNumber();

    });
  }




  if ($("#rateYo").length) {
    $("#rateYo").rateYo({
      rating: 0,
      starWidth: "22px",
      halfStar: true,
      spacing: "4px",
      normalFill: "#A0A0A0",
      ratedFill: "#FADC13"


    });
  }


  if ($("#datetimepicker5").length) {

    $(function () {
      $('#datetimepicker5').datetimepicker({
        format: 'L',
        defaultDate: "",

      });
    });

  }

  if ($("#sidetoggler").length) {

    $('#sidetoggler').on('click', function () {
      $('#sidefilter').addClass('active');
    });

    $(".side-remove").on('click', function () {
      $('#sidefilter').removeClass('active');

    });

  }
  if ($("#slider-range").length) {

    $('#price-range-submit').hide();

    $("#min_price,#max_price").on('change', function () {

      // $('#price-range-submit').show();

      var min_price_range = parseInt($("#min_price").val());

      var max_price_range = parseInt($("#max_price").val());

      if (min_price_range > max_price_range) {
        $('#max_price').val(min_price_range);
      }

      $("#slider-range").slider({
        values: [min_price_range, max_price_range]
      });

    });


    $("#min_price,#max_price").on("paste keyup", function () {

      $('#price-range-submit').show();

      var min_price_range = parseInt($("#min_price").val());

      var max_price_range = parseInt($("#max_price").val());

      if (min_price_range == max_price_range) {

        max_price_range = min_price_range + 100;

        $("#min_price").val(min_price_range);
        $("#max_price").val(max_price_range);
      }

      $("#slider-range").slider({
        values: [min_price_range, max_price_range]
      });

    });


    $(function () {
      $("#slider-range").slider({
        range: true,
        orientation: "horizontal",
        min: 10,
        max: 10000,
        values: [0, 10000],
        step: 1000,

        slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
            return false;
          }

          $("#min_price").val(ui.values[0]);
          $("#max_price").val(ui.values[1]);
        }
      });

      $("#min_price").val($("#slider-range").slider("values", 0));
      $("#max_price").val($("#slider-range").slider("values", 1));

    });

    $("#slider-range,#price-range-submit").click(function () {
      var min_price = $('#min_price').val();
      var max_price = $('#max_price').val();
    });
  }




  $(".change-view").on("click", function () {
    $(this).toggleClass('active').siblings().toggleClass('active');
    $(".cards-row").toggleClass('list-view')

  });







});