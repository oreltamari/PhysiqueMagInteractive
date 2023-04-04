if (
  (window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth) < 600
) {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".sticky-content ").css({
      opacity: function () {
        var elementHeight = $(this).height(),
          opacity = (1 - (elementHeight - scrollTop) / elementHeight) * 0.7;
        return opacity;
      },
    });
  });
} else {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".sticky-content ").css({
      opacity: function () {
        var elementHeight = $(this).height(),
          opacity = (1 - (elementHeight - scrollTop) / elementHeight) * 0.3;
        return opacity;
      },
    });
  });
}
