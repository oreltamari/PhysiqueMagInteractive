if (
  (window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth) < 767
) {
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
