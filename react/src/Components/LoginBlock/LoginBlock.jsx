import './LoginBlock.css'


function LoginBlock() {

    function clicarEmConcluir(){
        const Nome = document.querySelector('input[placeholder="Nome"]').value.trim();

        const Idade = document.getElementById('iage').value.trim();

        const Email = document.querySelector('input[type="email"]').value.trim();

        const Senha = document.querySelector('input[type="password"]').value.trim();


        let Age = window.document.getElementById('iage').value

        let password = window.document.getElementById('isenha').value

        let ValorInput = window.document.querySelector("input").value

        if (!Nome || !Idade || !Email || !Senha) {
        alert('Por favor, preencha todos os campos antes de concluir o login.');
        return;
        } 

        if(Number(Age) <= 5){
            alert('Você não tem idade suficiente para fazer o login.')

        } 
        
        if(password.length <= 4 ) {
            alert('A sua senha precisa ter mais de 4 digitos.')

        } 
        
        
        if (!Email.endsWith('@gmail.com')) {
        alert('O e-mail precisa terminar com @gmail.com');
        return;
        }

    }

    return (
        <div>
            <form className='dev-elementor-input'>
                <h1>Faça seu login</h1>

                <input type="text" placeholder='Nome' required/>

                <input type="number" name="age" id="iage" placeholder='Idade' required/>

                <input type="email" placeholder='E-mail' pattern=".+@gmail\.com" required/>

                <input type="password" placeholder='Senha' id='isenha' required/>

                <input className='input-button' onClick={clicarEmConcluir} type="button"  value="Concluir" />
            </form>
        </div>
    )
}

export default LoginBlock;
