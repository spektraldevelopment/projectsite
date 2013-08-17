(function(){

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

    console.log('Init Spektral Projects');
})();
