//https://www.youtube.com/watch?v=jQaiwCopzBk&t=8s

var x = 110;
var y = 130;
var tela=0;
var perguntaAtual = 0;
var opcao=1;
var vida=3;
var nivel =0;
let img;
let img2;
var perguntas;
var totalPerguntas = 14;

function preload() {
  img = loadImage('atividades-de-matematica-1-5-ano.jpg');
 img2 = loadImage('matematica-educaco-infantil.png');
  //perguntaAtual: 0 - 13
  //perguntas[perguntaAtual][1] - listas de respostas
  //perguntas[perguntaAtual][1][0] - lista da resposta
  //perguntas[perguntaAtual][1][0][1] - valor da resposta
  perguntas = [
    [
      '5 + 5 + 7',
      [
        ['10', false],
        ['16', false],
        ['17', true]
      ]
    ],

    [
      '4 + 3 + 8',
      [
        ['15', true],
        ['16', false],
        ['14', false]
      ]
    ],

    [
      '9 + 9 + 7',
      [
        ['15', false],
        ['25', true],
        ['14', false]
      ]
    ],

    [
      '4 + 3 + 7',
      [
        ['16', false],
        ['25', false],
        ['14', true]
      ]
    ],

    [
      '20 + 3 + 7',
      [
        ['30', true],
        ['27', false],
        ['31', false]
      ]
    ],

    [
      '20 + 3 + 25',
      [
        ['47', false],
        ['48', true],
        ['52', false]
      ]
    ],

    [
      '(20 + 8) - 25',
      [
        ['2', false],
        ['4', false],
        ['3', true]
      ]
    ],

    [
      '(25 + 14) - 19',
      [
        ['20', true],
        ['19', false],
        ['15', false]
      ]
    ],

    [
      '(90 -40) + 10 +5',
      [
        ['50', false],
        ['65', true],
        ['75', false]
      ]
    ],

    [
      '7 + 9 + 62',
      [
        ['80', false],
        ['79', false],
        ['78', true]
      ]
    ],

    [
      '(3 * 5) + 5',
      [
        ['25', false],
        ['20', true],
        ['35', false]
      ]
    ],

    [
      '(4 * 3) + (4/2)',
      [
        ['14', true],
        ['16', false],
        ['12', false]
      ]
    ],

    [
      '(60/3)-5',
      [
        ['35', false],
        ['20', false],
        ['15', true]
      ]
    ],

    [
      '20 + (90*1) - 10',
      [
        ['110', false],
        ['100', true],
        ['90', false]
      ]
    ]

  ]

}

function setup() {
  createCanvas(400, 400);
}
function draw() {

  background(0,125,225);
  image(img, 0,0)
   
  
  if(tela==0){
  menu();
  }
  if (tela==1){
    
  fase1();
  }
  if (tela==2){
  instrucoes();
  }
  if (tela==3){
  creditos();
  }
   if (tela==4){
  prejogo();
  }
}
function menu(){
  
  rect(x, y, 180 ,  45);
  
  textSize(40);
  text ('QUIZ\n MATEMÁTICA',70, 50);
  textSize(30);
  text ('Play', 170, 160)
  text ('Instruções', 140, 240);
  text ('Créditos',150, 325);
  
  if(mouseX>111 && mouseX<289 && mouseY>130 && mouseY<174 && mouseIsPressed){  
	//Fase 1    
    tela=4;
  }
  
  if(mouseX>111 && mouseX<289 && mouseY>209 && mouseY<254 && mouseIsPressed){  
    //Instruções
	tela=2;
  }  
  if(mouseX>111 && mouseX<289 && mouseY>292 && mouseY<335 && mouseIsPressed){  
    //Créditos
	tela=3;
  }
  
}
function prejogo(){
  //tela que vai aparecer depois que apertar play
  background(205,255,250);
  image(img2, 55,0,300,200)
   
   textSize(16); 
  text('Agora vamos resolver as questões de matemática!', 25,230)
  text( 'Use seus conhecimentos para resolver as perguntas\n a seguir, vamos começar a diverção?!',25,280)
  textSize(20); 
  text('Pressione espaço para começar o jogo', 30,380)
  
}

function fase1(){
  
  
  rect(x, y, 190 ,  90);
  
  //diz quantas vidas o jogador tem
  textSize(20);
  text ('Vidas: '+ vida,15, 20);
  text ('Nível: ' + nivel, 310, 20);
  
  //vai determinar se venceu ou perdeu
  if(totalPerguntas == 0){
    alert('Voce venceu!\n O jogo se reiniciará, pressione Esc para voltar para o menu.');
    vida=3;
    totalPerguntas = 14;
    perguntaAtual = 0;
    
  }else{
    if(vida <= 0){
      alert('Você perdeu, suas vidas acabaram!\n O jogo se reiniciará, pressione Esc para voltar para o menu.')
      
      tela=0;
      vida=3;
      perguntaAtual = 0;

    }
  }
  //vai determinar o nivel do jogo
  if(perguntaAtual >= 0 && perguntaAtual < 5){
     nivel = 1;
     }
  if(perguntaAtual >= 5 && perguntaAtual < 9){
     nivel = 2;
     }
  if(perguntaAtual >= 9 && perguntaAtual < 14){
     nivel = 3;
     } 
  //texto do jogo
  textSize(32);
  var pergunta = perguntas[perguntaAtual]
  text(pergunta[0], 150,100)
  text(pergunta[1][0][0], 190,190)
  text(pergunta[1][1][0], 190,260)
  text(pergunta[1][2][0], 190,330)

}

function instrucoes(){
  textSize(32);
  text('Instruções', 130,90)
  textSize(22);
  text('Use seus conhecimentos de soma,\n divisão, multiplicação e subitração\n para resolver os probleminhas de\n matematica.\n Use as setas para cima e para baixo\n para selecionar as questões corretas\n e aperte Enter para selecionar.\n Pressione Esc para voltar.\nProjeto voltado para o ensino\n fundamental II', 30,150)
  
  
}

function creditos(){
  
  textSize(32);
  text('Creditos', 160,90)
  textSize(25);
  text('Programadora:\n Adriane Alisandra rocha da Silva.\n Turma 01A.', 10,150)
  
}

function keyPressed(){

  if(key == "ArrowUp" && y > 160){
    y=y-80
    opcao=opcao-1
  }

  if(key == "ArrowDown" && y < 250){
    y=y+80
    opcao=opcao+1
  }
  if(key=='Enter'){
    
    if(tela == 0){
      if(opcao == 1){
        tela=4  
      }else{
        tela=opcao
      }
    
    }else{
        
      if(tela == 1){
      if(perguntas[perguntaAtual][1][opcao-1][1]){        
        perguntaAtual += 1;        
        totalPerguntas -= 1; 
       
      }else{
        alert('Resposta errada, tente novamente!');
        vida = vida - 1;
      }
      }
    }  
  }
  if(key=="Escape"){
    tela=0
  }
  
  if(key == " "){
    if(tela == 4){
      tela=1
    }
  }
   
}

