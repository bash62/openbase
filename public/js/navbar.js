<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script>
     
           $(document).ready(function () {
   
               var $window = $(window);
   
               function checkWindowWidth() {
                   
                   var windowsize = $window.width();
   
                   if (windowsize > 1000) {
   
                       $('#navbar').css('display','block');
   
                   } else {
   
                       $('#navbar').css('display','none');
   
                   }
               }
   
               checkWindowWidth();
   
               $(window).resize(checkWindowWidth);
   
           });
   
   
         $('#navbar-btn').click(function() {
           $('#navbar').toggle();
         });
       </script>