// CAPTURANDO ELEMENTOS
const btnEnviar = document.getElementById('btn-enviar');
const email = document.getElementById('Email');
const senha = document.getElementById('password');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const formulario = document.getElementById('formulario');
const login = document.getElementById('trybewarts-login');
const ola = document.getElementById('ola');
const header = document.getElementById('header');
const informacoes = document.getElementById('form-data');

// Atualiza login
let loginBoolean = JSON.parse(localStorage.getItem('login'));
if (loginBoolean == null) {
  console.log('o');
  loginBoolean = false;
}

// Esconde Formulário, ola e campo de informações
formulario.style.display += 'none';
ola.style.display += 'none';
informacoes.style.display += 'none';

// Função que esconde o login e mostra ola e o formulário
const escondeloginEmostraOla = () => {
  login.style.display += 'none';
  ola.style.display = 'flex';
  //header.style.opacity = '1';
  formulario.style.display = 'flex';
};

if (loginBoolean) {
  escondeloginEmostraOla();
}

// Definindo valor inicial do contador
document.getElementById('counter').innerText = 'Restam 500 caracteres';

// Adiciona evento de click no checkbox agreement
agreement.addEventListener('change', () => {
  btnSubmit.disabled = false;
});

// Função salva login
const salvaLogin = () => {
  localStorage.setItem('login', JSON.stringify(loginBoolean));
  window.location.reload();
};

// Adiciona evento de click ao botão Entrar
btnEnviar.addEventListener('click', (event) => {
  if (email.value === 'tryber@teste.com' || senha.value === '12345') {
    event.preventDefault();
    loginBoolean = true;
    salvaLogin();
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Atualizando contador
document.getElementById('comments').addEventListener('input', () => {
  const textLength = document.getElementById('comments').value.length;
  document.getElementById('counter').innerText = `Restam ${500 - textLength} caracteres`;
});

// Preenchendo form-data
const nomeCompleto = document.getElementById('nomeCompleto');
const EMail = document.getElementById('e-mail');
const casa = document.getElementById('casa');
const Materias = document.getElementById('Materias');
const Avaliacao = document.getElementById('Avaliação');
const Observacoes = document.getElementById('Observações');

// Nome
document.getElementById('input-name').addEventListener('input', (event) => {
  nomeCompleto.innerText = `Nome: ${event.target.value} `;
});

const saveLastName = () => {
  nomeCompleto.innerText += `${
    document.getElementById('input-lastname').value
  }`;
};

// Email
document.getElementById('input-email').addEventListener('input', (event) => {
  EMail.innerText = `Email: ${event.target.value}`;
});

// Casa
document.getElementById('house').addEventListener('change', () => {
  casa.innerText = `Casa: ${document.getElementById('house').value}`;
});

// Família
const familia = document.getElementById('familia');
document.getElementsByName('family')[0].addEventListener('input', (event) => {
  familia.innerText = `Família: ${event.target.value}, `;
});
document.getElementsByName('family')[1].addEventListener('input', (event) => {
  familia.innerText = `Família: ${event.target.value}, `;
});
document.getElementsByName('family')[2].addEventListener('input', (event) => {
  familia.innerText = `Família: ${event.target.value}, `;
});

// Matérias
Materias.innerText = 'Matérias: ';
const saveMaterias = () => {
  const materias = document.querySelectorAll('.subject:checked');
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      Materias.innerText += `${materias[index].value}, `;
    }
  }
};

// Avaliação
const rates = document.getElementsByName('rate');
rates[0].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[1].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[2].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[3].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[4].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[5].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[6].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[7].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[8].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});
rates[9].addEventListener('change', (event) => {
  Avaliacao.innerText = `Avaliação: ${event.target.value}, `;
});

// Observações
document.getElementById('comments').addEventListener('input', (event) => {
  Observacoes.innerText = `Observações: ${event.target.value}`;
});

// Esconde formulário evaluation-form quando for submetido
btnSubmit.addEventListener('click', (event) => {
  saveLastName();
  saveMaterias();
  event.preventDefault();
  document.getElementById('evaluation-form').style.display += 'none';
  informacoes.style.display = 'flex';
  document.body.style.backgroundImage += "url('images/fundo\ final.png')";
  let main = document.querySelector('.container-principal').style;
  main.justifyContent += 'space-between';
  let header = document.querySelector('#header').style;
  header.height = '130px';
  header.opacity = '1';
  main.padding = '20px';
  document.querySelector('.footer').style.opacity = '1';
  main.width = '90%';
  main.marginLeft = '5%';
});
