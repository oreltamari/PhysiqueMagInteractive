$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  $(".sticky-content ").css({
    opacity: function () {
      var elementHeight = $(this).height(),
        opacity = (1 - (elementHeight - scrollTop) / elementHeight) * 0.15;
      return opacity;
    },
  });
});
