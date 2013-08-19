(function(){

    //Vars

    //AddEventListeners

    //Initialize Functions
    initCopyright();

    function initCopyright()
    {
       var d = new Date();
       var y = d.getFullYear();

       var currentYear = document.getElementById("copyright");
       var copyString = "Copyright &copy; " + y;
       currentYear.innerHTML = copyString;
    }

    $(document).ready(function() {
        $('logo').click(function(){
            $('html, body').animate({scrollTop : 0},800, done());
            return false;
        });
        console.log( "ready!" );
    });

    function done()
    {
        console.log("Animation Complete");
    }

    console.log('Init Spektral Projects');
})();


