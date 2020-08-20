var paused=false;

function historiaBolo(){

    $("#textoHistoria").html("Quer saber a história desse bolo");

    $("#textoHistoria").click(function(){
         $("#textoHistoria").html("Esse bolo é incrivel");
        $("#textoHistoria").off("click");

    });
 
};

    $(".imagem-pequena").click(function(){
        $("#imagem-grande").attr('src',
        $(this).attr('src'));



    });
    
//função de contar números
    var contador = 1;
    $("#number").html(contador);
    function count(){
        if(contador < 10) {
       contador+=1;
        $("#number").html(contador)
        } 
    }

     setInterval(function() {
        $("#number").click();
         },50);


   // the counter variable that keeps
		// track of which image you are showing
		var counter = 1;
		// virtually click on the current
		// image to load it into the big image
		$("#image"+counter).click();

		// when you click on the backwards
		// button select the previous image
		$("#backward").click(function (){
			// go back one in the counter
			counter = counter - 1;
			// if we are below 1 (the first
			// image) loop round to 4 (the
			// last image)
			if(counter < 1){
				counter = 3;
			}
			// virtually click on the current
			// image to load it into the big image
			$("#image"+counter).click();
		});

        // when you click on the backwards
		// button select the next image
		$("#forward").click(function (){
			// go forward one in the counter
			counter = counter + 1;
			// if we are above 4 (the last
			// image) loop round to 1 (the
			// first image)
			if(counter > 3){
				counter = 1;
			}
			// virtually click on the current
			// image to load it into the big image
			$("#image"+counter).click();
        });
        
      
        $("#imagem-grande").click(function (){
			paused = !paused;
        });
        
        setInterval(function() {
          if(!paused){
          $("#forward").click();
          };
        },1000);


        