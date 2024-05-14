    let nomeClientes = [];
    let telefoneClientes = [];
    let emailClientes = [];
    let enderecoClientes = [];
    let numeroClientes = [];
    let cepClientes = [];
    let jogos = [];



function formatarTelefone(input) {

    let telefone = input.value.replace(/\D/g, '');
  
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
  
    input.value = telefone;
  }

function cadatrarAluguel(){

    
    let nomeCliente = document.getElementById('nomeCliente').value;
    let telefoneCliente = document.getElementById('telefoneCliente').value;
    let emailCliente = document.getElementById('emailCliente').value;
    let enderecoCliente = document.getElementById('enderecoCliente').value;
    let numeroCliente = document.getElementById('numeroCliente').value;
    let cepCliente = document.getElementById('cepCliente').value;


       if(nomeCliente == ''){
            
            document.getElementById('nomeCliente').style.border = '1px solid #ff0000';
            alert('Por favor, preencha o nome');
            
        } else if(telefoneCliente == '' ){

            document.getElementById('telefoneCliente').style.border = '1px solid #ff0000';
            alert('Por favor, preencha o Telefone/Celular');

        }else if (telefoneCliente.replace(/\D/g, '').length !== 11) {

            document.getElementById('telefoneCliente').style.border = '1px solid #ff0000';
            alert('Por favor, insira um número de telefone/celular válido com 9 dígitos.');

        } else if(emailCliente == '' ){

            document.getElementById('emailCliente').style.border = '1px solid #ff0000';
            alert('Por favor, preencha o E-mail');

        }else if(enderecoCliente == '' ){

            document.getElementById('enderecoCliente').style.border = '1px solid #ff0000';
            alert('Por favor, preenchao Endereço');
            
        }else if(numeroCliente == '' ){

            document.getElementById('numeroCliente').style.border = '1px solid #ff0000';
            alert('Por favor, preencha o Numero do endereço');
            
        }else if(cepCliente == '' ){

            document.getElementById('cepCliente').style.border = '1px solid #ff0000';
            alert('Por favor, preencha o CEP do endereço');
            
        } else{
           
            
            nomeClientes.push(nomeCliente);
            telefoneClientes.push(telefoneCliente);
            emailClientes.push(emailCliente);
            enderecoClientes.push(enderecoCliente);
            numeroClientes.push(numeroCliente);
            cepClientes.push(cepCliente);


            statusCadastrarAluguelJogo();

            let inputItemBtn = document.getElementById('inputItemBtn');
            inputItemBtn.style.cursor = 'pointer';
            inputItemBtn.setAttribute('onclick', 'formAlugado(1)');

            let inputItemBtn_two = document.getElementById('inputItemBtn_two');
            inputItemBtn_two.style.cursor = 'pointer';
            inputItemBtn_two.setAttribute('onclick', 'formAlugado(2)');

            let inputItemBtn_tree = document.getElementById('inputItemBtn_tree');
            inputItemBtn_tree.style.cursor = 'pointer';
            inputItemBtn_tree.setAttribute('onclick', 'formAlugado(3)');

            let inputItemBtn_alugar = document.getElementById('inputItemBtn_alugar');
            inputItemBtn_alugar.style.cursor = 'pointer';
            inputItemBtn_alugar.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(1)');

            let inputItemBtn_alugar_two = document.getElementById('inputItemBtn_alugar_two');
            inputItemBtn_alugar_two.style.cursor = 'pointer';
            inputItemBtn_alugar_two.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(2)');

            let inputItemBtn_alugar_tree = document.getElementById('inputItemBtn_alugar_tree');
            inputItemBtn_alugar_tree.style.cursor = 'pointer';
            inputItemBtn_alugar_tree.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(3)');

            return limparForm();
            
        }

    
        
    
}



function statusCadastrarAluguelJogo(){

    let inputItemBtn = document.getElementById('inputItemBtn');
    inputItemBtn.style.cursor = 'not-allowed';
    inputItemBtn.removeAttribute('onclick');

    let inputItemBtn_two = document.getElementById('inputItemBtn_two'); 
    inputItemBtn_two.style.cursor = 'not-allowed';
    inputItemBtn_two.removeAttribute('onclick');

    let inputItemBtn_tree = document.getElementById('inputItemBtn_tree');
    inputItemBtn_tree.style.cursor = 'not-allowed';
    inputItemBtn_tree.removeAttribute('onclick'); 

    let inputItemBtn_alugar = document.getElementById('inputItemBtn_alugar');
    inputItemBtn_alugar.style.cursor = 'not-allowed';
    inputItemBtn_alugar.removeAttribute('onclick');

    let inputItemBtn_alugar_two = document.getElementById('inputItemBtn_alugar_two');
    inputItemBtn_alugar_two.style.cursor = 'not-allowed';
    inputItemBtn_alugar_two.removeAttribute('onclick');

    let inputItemBtn_alugar_tree = document.getElementById('inputItemBtn_alugar_tree');
    inputItemBtn_alugar_tree.style.cursor = 'not-allowed';
    inputItemBtn_alugar_tree.removeAttribute('onclick');


    let abrirMenuAluguel = document.getElementById('menuAlguel')

    if (abrirMenuAluguel.style.display === 'block') {

        abrirMenuAluguel.style.display = 'none';
        
        
    } else {

        abrirMenuAluguel.style.display = 'block';
        

    };
    
}

function alterarStatus(id){
    
    
    let gameClicado = document.getElementById(`game-${id}`);


    let divImagem = gameClicado.querySelector('.dashboard__item__img');
    let btnAluga = gameClicado.querySelector('.dashboard__item__button');
    let btndevolver = gameClicado.querySelector('.dashboard__item__button--return');

if (gameClicado == document.getElementById(`game-1`)){
    
    let jogo1 = 'Monopoly';
    jogos.push(jogo1);
 

}else if (gameClicado == document.getElementById(`game-2`)){
    let jogo1 = 'Ticket to Ride';
    jogos.push(jogo1);

}else{
    let jogo1 = 'Takenoko';
    jogos.push(jogo1);
    
};


    if (btnAluga.style.display === 'block' || btnAluga.style.display === '') {
        btnAluga.style.display = 'none';
        btndevolver.style.display = 'block';
        divImagem.classList.add('dashboard__item__img--rented');
    } 

}

function formAlugado(id) {
   
    let inputItemBtn = document.getElementById('inputItemBtn');
    inputItemBtn.style.cursor = 'not-allowed';
    inputItemBtn.removeAttribute('onclick');

    let inputItemBtn_two = document.getElementById('inputItemBtn_two'); 
    inputItemBtn_two.style.cursor = 'not-allowed';
    inputItemBtn_two.removeAttribute('onclick');

    let inputItemBtn_tree = document.getElementById('inputItemBtn_tree');
    inputItemBtn_tree.style.cursor = 'not-allowed';
    inputItemBtn_tree.removeAttribute('onclick'); 

    let inputItemBtn_alugar = document.getElementById('inputItemBtn_alugar');
    inputItemBtn_alugar.style.cursor = 'not-allowed';
    inputItemBtn_alugar.removeAttribute('onclick');

    let inputItemBtn_alugar_two = document.getElementById('inputItemBtn_alugar_two');
    inputItemBtn_alugar_two.style.cursor = 'not-allowed';
    inputItemBtn_alugar_two.removeAttribute('onclick');

    let inputItemBtn_alugar_tree = document.getElementById('inputItemBtn_alugar_tree');
    inputItemBtn_alugar_tree.style.cursor = 'not-allowed';
    inputItemBtn_alugar_tree.removeAttribute('onclick');




    let menuAlugado = document.getElementById('menuAlugado');
    

    if (menuAlugado.style.display !== 'block') {
        menuAlugado.style.display = 'block';
    } else {
        menuAlugado.style.display = 'none';
    }

    let gameAlugado = document.getElementById(`game-${id}`);

    if (gameAlugado == document.getElementById(`game-1`)){

        let gameUm = jogos.indexOf("Monopoly");
        console.log(gameUm);

        let clienteNome = nomeClientes[gameUm];
        let clienteTelefone = telefoneClientes[gameUm];
        let clienteEmail = emailClientes[gameUm];
        let clienteEndereco = enderecoClientes[gameUm];
        let clienteNum = numeroClientes[gameUm];
        let clienteCep = cepClientes[gameUm];

        let formDadosCliente = document.getElementById('formAlugado'); 
        formDadosCliente.innerHTML =  `<label class="textoAlugado">Nome Completo: ${clienteNome}</label><br>

        <label class="textoAlugado">Telefone Contato: ${clienteTelefone}</label><br>

        <label class="textoAlugado">E-mail: ${clienteEmail}</label><br>

        <label class="textoAlugado">Endereço: ${clienteEndereco}, ${clienteNum}</label><br>

        <label class="textoAlugado">CEP: ${clienteCep}</label><br><br>

        <button onclick="devolverJogo()" href="" class="btnFormDevolver">Devolver</button><br>`;
    
    }else if (gameAlugado == document.getElementById(`game-2`)){
        
        let gameUm = jogos.indexOf("Ticket to Ride");
        console.log(gameUm);

        let clienteNome = nomeClientes[gameUm];
        let clienteTelefone = telefoneClientes[gameUm];
        let clienteEmail = emailClientes[gameUm];
        let clienteEndereco = enderecoClientes[gameUm];
        let clienteNum = numeroClientes[gameUm];
        let clienteCep = cepClientes[gameUm];

        let formDadosCliente = document.getElementById('formAlugado'); 
        formDadosCliente.innerHTML =  `<label class="textoAlugado">Nome Completo: ${clienteNome}</label><br>

        <label class="textoAlugado">Telefone Contato: ${clienteTelefone}</label><br>

        <label class="textoAlugado">E-mail: ${clienteEmail}</label><br>

        <label class="textoAlugado">Endereço: ${clienteEndereco}, ${clienteNum}</label><br>

        <label class="textoAlugado">CEP: ${clienteCep}</label><br><br>

        <button onclick="devolverJogo()" href="" class="btnFormDevolver">Devolver</button><br>`;

    }else{
        
        let gameUm = jogos.indexOf("Takenoko");
        console.log(gameUm);

        let clienteNome = nomeClientes[gameUm];
        let clienteTelefone = telefoneClientes[gameUm];
        let clienteEmail = emailClientes[gameUm];
        let clienteEndereco = enderecoClientes[gameUm];
        let clienteNum = numeroClientes[gameUm];
        let clienteCep = cepClientes[gameUm];

        let formDadosCliente = document.getElementById('formAlugado'); 
        formDadosCliente.innerHTML =  `<label class="textoAlugado">Nome Completo: ${clienteNome}</label><br>

        <label class="textoAlugado">Telefone Contato: ${clienteTelefone}</label><br>

        <label class="textoAlugado">E-mail: ${clienteEmail}</label><br>

        <label class="textoAlugado">Endereço: ${clienteEndereco}, ${clienteNum}</label><br>

        <label class="textoAlugado">CEP: ${clienteCep}</label><br><br>

        <button onclick="devolverJogo()" href="" class="btnFormDevolver">Devolver</button><br>`;


    }
    
    idGlobal = gameAlugado.id;
};

function devolverJogo(){

    console.log(idGlobal);

    if(idGlobal == `game-1`){

        let gameUm = jogos.indexOf("Monopoly");
        console.log(gameUm);

        nomeClientes.splice(gameUm,1);
        telefoneClientes.splice(gameUm,1);
        emailClientes.splice(gameUm,1);
        enderecoClientes.splice(gameUm,1);
        numeroClientes.splice(gameUm,1);
        cepClientes.splice(gameUm,1);
        jogos.splice(gameUm,1);

        let menuAlugado = document.getElementById('menuAlugado');
    

        if (menuAlugado.style.display !== 'block') {
            menuAlugado.style.display = 'block';
        } else {
            menuAlugado.style.display = 'none';
        }

            let gameClicado = document.getElementById('game-1');

            let btnAluga = gameClicado.querySelector('.dashboard__item__button');
            let btndevolver = gameClicado.querySelector('.dashboard__item__button--return');
            let divImagem = gameClicado.querySelector('.dashboard__item__img');

        if (btnAluga.style.display === 'none' || btnAluga.style.display === '') {
                btnAluga.style.display = 'block';
                btndevolver.style.display = 'none';
                divImagem.classList.remove('dashboard__item__img--rented');
        } 

        
            let inputItemBtn = document.getElementById('inputItemBtn');
            inputItemBtn.style.cursor = 'pointer';
            inputItemBtn.setAttribute('onclick', 'formAlugado(1)');

            let inputItemBtn_two = document.getElementById('inputItemBtn_two');
            inputItemBtn_two.style.cursor = 'pointer';
            inputItemBtn_two.setAttribute('onclick', 'formAlugado(2)');

            let inputItemBtn_tree = document.getElementById('inputItemBtn_tree');
            inputItemBtn_tree.style.cursor = 'pointer';
            inputItemBtn_tree.setAttribute('onclick', 'formAlugado(3)');

            let inputItemBtn_alugar = document.getElementById('inputItemBtn_alugar');
            inputItemBtn_alugar.style.cursor = 'pointer';
            inputItemBtn_alugar.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(1)');

            let inputItemBtn_alugar_two = document.getElementById('inputItemBtn_alugar_two');
            inputItemBtn_alugar_two.style.cursor = 'pointer';
            inputItemBtn_alugar_two.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(2)');

            let inputItemBtn_alugar_tree = document.getElementById('inputItemBtn_alugar_tree');
            inputItemBtn_alugar_tree.style.cursor = 'pointer';
            inputItemBtn_alugar_tree.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(3)');

    }else if(idGlobal == `game-2`){

        let gameUm = jogos.indexOf("Ticket to Ride");
        console.log(gameUm);

        nomeClientes.splice(gameUm,1);
        telefoneClientes.splice(gameUm,1);
        emailClientes.splice(gameUm,1);
        enderecoClientes.splice(gameUm,1);
        numeroClientes.splice(gameUm,1);
        cepClientes.splice(gameUm,1);
        jogos.splice(gameUm,1);

        let menuAlugado = document.getElementById('menuAlugado');
    

        if (menuAlugado.style.display !== 'block') {
            menuAlugado.style.display = 'block';
        } else {
            menuAlugado.style.display = 'none';
        }

            let gameClicado = document.getElementById('game-2');

            let btnAluga = gameClicado.querySelector('.dashboard__item__button');
            let btndevolver = gameClicado.querySelector('.dashboard__item__button--return');
            let divImagem = gameClicado.querySelector('.dashboard__item__img');

        if (btnAluga.style.display === 'none' || btnAluga.style.display === '') {
                btnAluga.style.display = 'block';
                btndevolver.style.display = 'none';
                divImagem.classList.remove('dashboard__item__img--rented');
        } 

        
            let inputItemBtn = document.getElementById('inputItemBtn');
            inputItemBtn.style.cursor = 'pointer';
            inputItemBtn.setAttribute('onclick', 'formAlugado(1)');

            let inputItemBtn_two = document.getElementById('inputItemBtn_two');
            inputItemBtn_two.style.cursor = 'pointer';
            inputItemBtn_two.setAttribute('onclick', 'formAlugado(2)');

            let inputItemBtn_tree = document.getElementById('inputItemBtn_tree');
            inputItemBtn_tree.style.cursor = 'pointer';
            inputItemBtn_tree.setAttribute('onclick', 'formAlugado(3)');

            let inputItemBtn_alugar = document.getElementById('inputItemBtn_alugar');
            inputItemBtn_alugar.style.cursor = 'pointer';
            inputItemBtn_alugar.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(1)');

            let inputItemBtn_alugar_two = document.getElementById('inputItemBtn_alugar_two');
            inputItemBtn_alugar_two.style.cursor = 'pointer';
            inputItemBtn_alugar_two.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(2)');

            let inputItemBtn_alugar_tree = document.getElementById('inputItemBtn_alugar_tree');
            inputItemBtn_alugar_tree.style.cursor = 'pointer';
            inputItemBtn_alugar_tree.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(3)');

    }else{

        let gameUm = jogos.indexOf("Takenoko");
        console.log(gameUm);

        nomeClientes.splice(gameUm,1);
        telefoneClientes.splice(gameUm,1);
        emailClientes.splice(gameUm,1);
        enderecoClientes.splice(gameUm,1);
        numeroClientes.splice(gameUm,1);
        cepClientes.splice(gameUm,1);
        jogos.splice(gameUm,1);

        let menuAlugado = document.getElementById('menuAlugado');
    

        if (menuAlugado.style.display !== 'block') {
            menuAlugado.style.display = 'block';
        } else {
            menuAlugado.style.display = 'none';
        }

            let gameClicado = document.getElementById('game-3');

            let btnAluga = gameClicado.querySelector('.dashboard__item__button');
            let btndevolver = gameClicado.querySelector('.dashboard__item__button--return');
            let divImagem = gameClicado.querySelector('.dashboard__item__img');

        if (btnAluga.style.display === 'none' || btnAluga.style.display === '') {
                btnAluga.style.display = 'block';
                btndevolver.style.display = 'none';
                divImagem.classList.remove('dashboard__item__img--rented');
        } 

        
            let inputItemBtn = document.getElementById('inputItemBtn');
            inputItemBtn.style.cursor = 'pointer';
            inputItemBtn.setAttribute('onclick', 'formAlugado(1)');

            let inputItemBtn_two = document.getElementById('inputItemBtn_two');
            inputItemBtn_two.style.cursor = 'pointer';
            inputItemBtn_two.setAttribute('onclick', 'formAlugado(2)');

            let inputItemBtn_tree = document.getElementById('inputItemBtn_tree');
            inputItemBtn_tree.style.cursor = 'pointer';
            inputItemBtn_tree.setAttribute('onclick', 'formAlugado(3)');

            let inputItemBtn_alugar = document.getElementById('inputItemBtn_alugar');
            inputItemBtn_alugar.style.cursor = 'pointer';
            inputItemBtn_alugar.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(1)');

            let inputItemBtn_alugar_two = document.getElementById('inputItemBtn_alugar_two');
            inputItemBtn_alugar_two.style.cursor = 'pointer';
            inputItemBtn_alugar_two.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(2)');

            let inputItemBtn_alugar_tree = document.getElementById('inputItemBtn_alugar_tree');
            inputItemBtn_alugar_tree.style.cursor = 'pointer';
            inputItemBtn_alugar_tree.setAttribute('onclick', 'statusCadastrarAluguelJogo(); alterarStatus(3)');

    };

};

function limparForm(){

    document.getElementById('nomeCliente').value = '';
    document.getElementById('telefoneCliente').value = '';
    document.getElementById('emailCliente').value = '';
    document.getElementById('enderecoCliente').value = '';
    document.getElementById('numeroCliente').value = '';
    document.getElementById('cepCliente').value = '';

};