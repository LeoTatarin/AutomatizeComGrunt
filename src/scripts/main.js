document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(event){
        event.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        
        numeroAleatorio = Math.round(numeroAleatorio);
        if(numeroAleatorio == 0){
            numeroAleatorio = numeroAleatorio + 1;
            }
        
        document.getElementById('resultado-valor').innerHTML = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'; 
    })
})