function total(){
    let c = document.getElementById("capital").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let m = 0;
    for(let i = 1; i <= t; i++){
         m = c * (1 + (j/100));
         document.write("Valor no mês " + i  + " = " + m + "<br>");
         c = m;
    }
    
    document.write("Montante:" + m);
}
function soma () {
    let val1 = document . getElementById ("v1") . value ;
    let val2 = document . getElementById ("v2") . value ;
    let r = Number ( val1 ) + Number ( val2 ) ;
    document . getElementById (" resultado ") . innerHTML = r ;
   
    }



    function subtracao(){
        let val1 = document.getElementById("v1").value;
        let val2 = document.getElementById("v2").value;
        let r = Number(val1) - Number(val2);
        document.getElementById("resultado").innerHTML =r;
        }
      
        function divisao(){
          let val1 = document.getElementById("v1").value;
          let val2 = document.getElementById("v2").value;
          let r = Number(val1) / Number(val2);
          document.getElementById("resultado").innerHTML =r;
          }
        
          function multiplicacao(){
            let val1 = document.getElementById("v1").value;
            let val2 = document.getElementById("v2").value;
            let r = Number(val1) * Number(val2);
            document.getElementById("resultado").innerHTML =r;
            }
            function porcentagem(){
              let val1 = document.getElementById("v1").value;
              let val2 = document.getElementById("v2").value;
              let c = 100
              let p = Number(val2)  / Number(c)
              let r = Number(val1) * Number(p);
              document.getElementById("resultado").innerHTML =r;
              }
