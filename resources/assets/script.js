$(function() {
   $(document).scroll(function() {
      var $navigation = $(".navigation-container");
      $navigation.toggleClass('resized', $(this).scrollTop() > $navigation.height());
   });
});