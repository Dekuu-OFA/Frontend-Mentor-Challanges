$(window).resize(function() {
  if ($(window).width() <= 768) {
    $('.second').remove().insertAfter($('.third'));
  } else {
    $('.third').remove().insertBefore($('.second'));
  }
})