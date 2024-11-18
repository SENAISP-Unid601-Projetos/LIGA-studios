let larguraPersonagem = 180;
let alturaPersonagem = 300;


let hidrante = new Image();
hidrante.src = 'IMG/hidrante.png'
const xHidrante = 400;
const yHidrante = 450;
const larguraHidrante = 120;
const alturaHidrante = 170;
hidrante.onload = function() {
  ATUALIZAR();  // Iniciar a função de atualização após o carregamento da imagem
}

let antena = new Image();
antena.src = 'IMG/antena.png'
const xAntena = 2180;
const yAntena = -10;
const larguraAntena = 400;
const alturaAntena = 800; 
antena.onload = function() {
  ATUALIZAR();  // Iniciar a f  unção de atualização após o carregamento da imagem
}

let loja = new Image();
loja.src = 'IMG/loja.png'
const xLoja = 8500;
const yLoja = 0 ;
const larguraLoja = 1000;
const alturaLoja = 620; 


let poste = new Image();
poste.src = 'IMG/poste.png'
const xPoste = 3610;
const yPoste = -375;
const larguraPoste = 400;
const alturaPoste = 1000; 
const realLarguraPoste = 300;


let PosteFase3 = new Image();
PosteFase3.src = 'IMG/poste.png'
const xPosteFase3 = 5630; 
const yPosteFase3 = -460;
const larguraPosteFase3 = 500;
const alturaPosteFase3 = 1400; 



let barracao = new Image();
barracao.src = 'IMG/barracao2.png'
const xBarracao = 3800;
const xPeBarracao = 3850;
const yBarracao = 0;
const larguraBarracao = 1700;
const larguraRealBarracao = 1700
const alturaBarracao = 850; 

let predio2 = new Image();
predio2.src = 'IMG/predio2.png'
const xPredio2 = 10400;
const yPredio2 = -600;
const larguraPredio2 = 1200;
const alturaPredio2 = 1250;

let predioLaranjAzul = new Image();
predioLaranjAzul.src = 'IMG/predio1.png'
const xPredioLaranjAzul = 4000;  
const yPredioLaranjAzul = -575;
const larguraPredioLaranjAzul = 1400;
const alturaPredioLaranjAzul = 1200;

let predioFinal1 = new Image();
predioFinal1.src = 'IMG/mapaFinal1.jpg';
const xPredioFinal1 = 3800;
const yPredioFinal1 = -601;
const larguraPredioFinal1 = 2400;
const alturaPredioFinal1 = 1250;

let guindaste = new Image();
guindaste.src = 'IMG/guindaste.png';
const xGuindaste = 75;
const yGuindaste = -1375;
const larguraGuindaste = 2800;
const alturaGuindaste = 2000;

let guindasteInvertido = new Image();
guindasteInvertido.src = 'IMG/guindasteInvertido.png';
const xGuindasteInvertido = 19400;
const yGuindasteInvertido = -1375;
const larguraGuindasteInvertido = 2800;
const alturaGuindasteInvertido = 2000;

let andaime = new Image();
andaime.src = 'IMG/andaime.png';
const xAndaime = 4800;
const yAndaime = -530 ;
const yRealAndaime = -150;
const larguraAndaime = 550;
const realLarguraAndaime = 300;
const alturaAndaime = 550;

let NpcLurdes = new Image();
NpcLurdes.src = 'IMG/lurdes.png';
const xNpcLurdes = 5900;
const yNpcLurdes = -560;
const larguraNpcLurdes = 300;
const alturaNpcLurdes = 300;

let NpcGoverndor = new Image();
NpcGoverndor.src = 'IMG/governador.png';
const xNpcGovernador = 11100;
const yNpcGovernador = -40;
const larguraNpcGovernador = 150;
const alturaNpcGovernador = 300;

let xGuindasteReal = 1410;
let yGuindasteReal = -90;
let larguraGuindasteReal = 500;
let alturaGuindasteReal = 20;




let semaforo = new Image();
semaforo.src = 'IMG/semáforo4.png';
const xSemaforo = 1080;
const ySemaforo = 50;
const larguraSemaforo = 70;
const alturaSemaforo = 570;

const xRealSemaforo = 1180;
const yRealSemaforo = 30;
const larguraRealSemaforo = 100;
const alturaRealSemaforo = 200;

const xPeSemaforo = 1417
const yPeSemaforo = -25
const larguraPeSemaforo = 27
const alturaPeSemaforo = 645

const xAndar2MeioDir = 10406
const yAndar2MeioDir = 257
const larguraAndar2MeioDir = 300
const alturaAndar2MeioDir = 30

const xAndar2Esq = 9200
const yAndar2Esq = 257
const larguraAndar2Esq = 460
const alturaAndar2Esq = 30

const xRack = 10880
const yRack = 470
const larguraRack =   100
const alturaRack = 145


//4320


let cameras = new Image();
cameras.src = 'IMG/cameras2.png';
const xCamera = 2200;
const xRealCamera = 2370;
const yCamera = -300;
const larguraCamera = 400;
const alturaCamera = 1075;

let mapaFase2 = new Image();
mapaFase2.src = 'IMG/mapaFase2.png';
const xMapa2 = 9200;
const yMapa2 = -925;
const larguraMapa2 = 2100;
const alturaMapa2 = 1575;

let rack2 = new Image();
rack2.src = 'IMG/rack.png';
const xRack2 = 10120;
const yRack2 = 125;
const larguraRack2 = 135;
const alturaRack2 = 130;

let arvore = new Image();
arvore.src = 'IMG/arvore2.png';
const xArvore = 1370;
const xRealArvore = 1550
const yArvore = -90;
const larguraArvore = 680;
const alturaArvore = 800;

const xArmario = 9900
const yArmario = -50
const larguraArmario = 210
const alturaArmario = 300

const xAbajur = 9305
const yAbajur = -350
const larguraAbajur = 70
const alturaAbajur = 210

let placa = new Image();
placa.src = 'IMG/placa.png';
const xPlaca = 720;
const yPlaca = 220;
const larguraPlaca = 150;
const alturaPlaca = 400;

let guindasteCortado = new Image();
guindasteCortado.src = 'IMG/guindasteCortado4.png';
const xGuindasteCortado = 2700;
const yGuindasteCortado = -1400;
const larguraGuindasteCortado = 900;
const alturaGuindasteCortado = 1300;


let predioBranco = new Image();
predioBranco.src = 'IMG/predioBranco.png';
const xPredioBranco = 6300;
const yPredioBranco = -465;
const larguraPredioBranco = 900;
const alturaPredioBranco = 1100;

let arvoreAlta = new Image();
arvoreAlta.src = 'IMG/arvoreAlta.png';
const xArvoreAlta = 7370;
const yArvoreAlta = -680;
const larguraArvoreAlta = 700;
const alturaArvoreAlta = 1300;

let predioLaranja = new Image();
predioLaranja.src = 'IMG/predioLaranja.png';
const xPredioLaranja = 8350;
const yPredioLaranja = -850;
const larguraPredioLaranja = 900;
const alturaPredioLaranja = 1480;

let Poste2Fase3 = new Image();
Poste2Fase3.src = 'IMG/poste.png'
const xPoste2Fase3 = 9600;
const yPoste2Fase3 = -780;
const largura2PosteFase3 = 500;
const alturaPoste2Fase3 = 1400; 

let predioAlto = new Image();
predioAlto.src = 'IMG/predio3.png';
const xPredioAlto = 10200;
const yPredioAlto = -850;
const larguraPredioAlto = 900;
const alturaPredioAlto = 1480;

let predioAzul = new Image();
predioAzul.src = 'IMG/predioAzul.png';
const xPredioAzul = 11240;
const yPredioAzul = -650;
const larguraPredioAzul = 900;
const alturaPredioAzul = 1280;

let mapa3 = new Image();
mapa3.src = 'IMG/mapaFase3.png';
const xMapa3 = 12500;
const yMapa3 = -1050;
const larguraMapa3 = 1600;
const alturaMapa3 = 1680;

let pedras = new Image();
pedras.src = 'IMG/pedras.png';
const xPedras = 13800;
const yPedras = 450;
const larguraPedras = 300;
const alturaPedras = 100;

let fundoFase3 = new Image();
fundoFase3.src = 'IMG/fundoFase3.png';
const xfundoFase3 = 12490;
const yfundoFase3 = -1050;
const largurafundoFase3 = 1600;
const alturafundoFase3 = 1680;

let capivara = new Image();
capivara.src = 'IMG/capivara.png';
const xCapivara = 12860;
const yCapivara = -220;
const larguraCapivara = 200;
const alturaCapivara = 200;

let janela = new Image();
janela.src = 'IMG/janela.png'

let derrota = new Image();
derrota.src = 'IMG/gameOver.png';

let vitoria = new Image();
vitoria.src = 'IMG/vitoria.png';

let fogo = new Image();
fogo.src = 'IMG/fogo.png';

let coracao = new Image();
coracao.src = 'IMG/coracao.png';

let coracao2 = new Image();
coracao2.src = 'IMG/coracao.png';

let coracao3 = new Image();
coracao3.src = 'IMG/coracao.png';

let vidas = 3;


// > maior que
// < menor que







// POSIÇÃO PERSONAEM







//2250, -330

//andaime: 2600
// posteA: 4200, -910

//x 1405, y -410 INICIAL FASE 2

//function FINAL DA FASE 1
function COLISAOpredioFinalPT2() {
  if (xPersonagem > 3990
    && xPersonagem < 4352
    && yPersonagem < 220
  )
  {
    velocidadeY = 2
  }

  //nao conseguir subir no segundo andar
  if (xPersonagem >= 3950
    && xPersonagem <= 3955
    && yPersonagem <= 180
    && yPersonagem > 20
          ) {
    xPersonagem = 3949
  }

  if(
    xPersonagem >= 4640
    && xPersonagem <= 4645
    && yPersonagem == 315)
    {
      xPersonagem = 4645
    }
}
function COLISAOguindaste() {

    

  
  
  // // COLISÃO LATERAL ESQUERDA
  //   if (xPersonagem + larguraPersonagem >= xHidrante
  //     && xPersonagem <= xHidrante - 150
  //     && yPersonagem + 290 >= yHidrante) 
  //     {
  //     xPersonagem = xHidrante - larguraPersonagem; 
  //     }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xGuindasteReal
      && xPersonagem < xGuindasteReal + larguraGuindasteReal
      && yPersonagem + 320 >= yGuindasteReal
      && yPersonagem + 320 <= -60
      && velocidadeY > 0)
      {
        
        yPersonagem = yGuindasteReal - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 1950 && yPersonagem <= -410
      && yPersonagem >= -415
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 1250 
      && xPersonagem >= 1240
      && yPersonagem <= -410){
      pulando = true;
      velocidadeX = -3;
    }
}
function COLISAOandaime() {

    

  
  
  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + larguraPersonagem >= xAndaime
      && xPersonagem <= xAndaime - 150
      && yPersonagem + 290 >= yRealAndaime)
      {
      xPersonagem = xAndaime - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xAndaime
      && xPersonagem < xAndaime + realLarguraAndaime
      && yPersonagem + 320 >= yRealAndaime
      && yPersonagem + 320 <= -60
      && velocidadeY > 0)
      {
        
        yPersonagem = yRealAndaime - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 3250 && yPersonagem <= -455
      && yPersonagem >= -470
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 2295
      && yPersonagem <= -455
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

    
}
function COLISAOHidrante() {

  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + larguraPersonagem >= xHidrante
      && xPersonagem <= xHidrante - 150
      && yPersonagem + 290 >= yHidrante) 
      {
      xPersonagem = xHidrante - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xHidrante
      && xPersonagem < 383
      && yPersonagem + 320 >= yHidrante
      && velocidadeY > 0)
      {
        
        yPersonagem = yHidrante - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 383 && yPersonagem == 130){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 229 && yPersonagem == 130){
      pulando = true;
      velocidadeX = -2
      velocidadeY = 10;
    }
}
function COLISAOAntena() {
  //COLISÃO LATERAL ESQUERDA
  if (xPersonagem + 130 >= xAntena
    && xPersonagem <= xAntena - 120
    && yPersonagem + 290 >= yAntena) 
    {
    xPersonagem = xAntena - 130; 
    }

    //COLISÃO CIMA
    if (xPersonagem > 2150
      && xPersonagem < 2345
      && yPersonagem + 320 >= yAntena
      && yPersonagem <= -10
      && velocidadeY > 0) 
      {
        
        yPersonagem = yAntena - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    //PARA CONSEGUIR DESCER
    if (xPersonagem >= 2335 && yPersonagem == -330){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 2150 && yPersonagem == -330){
      pulando = true;
      velocidadeY = 10;
    }
}
function COLISAOLoja() {
  
  //COLISÃO LATERAL ESQUERDA:
    if (xPersonagem + larguraPersonagem >= xLoja 
      && xPersonagem <= xLoja - 150
      && yPersonagem + 300 >= yLoja) 
      {
      xPersonagem = xLoja - larguraPersonagem; 
      }

  //COLISÃO CIMA:
    if (xPersonagem + larguraPersonagem > xLoja
      && xPersonagem < xLoja + larguraLoja
      && yPersonagem + 320 >= yLoja
      && yPersonagem + 320 <= yAntena + 5
      && velocidadeY > 0) 
      {
        
        yPersonagem = yLoja - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
  // PARA CONSEGUIR DESCER
    if (xPersonagem >= 1450 && yPersonagem == -90){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 618 && yPersonagem == -90){
      pulando = true;
      velocidadeY = 10;
    }
}
function COLISAOposteFase2() {
  
  // COLISÃO LATERAL ESQUERDA
  if (xPersonagem + larguraPersonagem >= xPoste 
      && xPersonagem <= xPoste - 150
      && yPersonagem + 300 >= yPoste) 
      {
      xPersonagem = xPoste - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPoste
      && xPersonagem < xPoste + 10
      && yPersonagem + 320 >= yPoste
      && yPersonagem + 320 <= -300
      && velocidadeY > 0) 
      {
        
        yPersonagem = yPoste - 325;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 3780 && yPersonagem == -700){
      pulando = true;
      velocidadeX = 1;
    }

    if (xPersonagem <= 3450 && yPersonagem == -700){
      pulando = true;
      velocidadeX = -3;
    }
}
function COLISAOpredioLaranjAzulFase2() {
  
  // COLISAO LATERAL ESQUERDA
    if (xPersonagem + 180 >= xPredioLaranjAzul 
      && xPersonagem <= xPredioLaranjAzul - 150
      && yPersonagem + 300 >= -650) 
      {
      xPersonagem = xPredioLaranjAzul - 180; 
      }

  // COLISÃO CIMA:
    if (xPersonagem + 180 > xPredioLaranjAzul + 200
      && xPersonagem < 5280
      && yPersonagem + 450 >= -400
      && yPersonagem < 0
      // && yPersonagem + 320 <= yAntena + 5
      && velocidadeY > 0) 
      {
        yPersonagem = yPredioLaranjAzul - 315;
        velocidadeY = 0;  
        pulando = false;
      }

// X personagem =  3815
// Y personagem =  -900
    
  // PARA CONSEGUIR DESCER
    if (xPersonagem + 180 >= 5420 && yPersonagem == -890
      && xPersonagem < 5600
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 3820 && yPersonagem == -890){
      pulando = true;
      velocidadeX = -3;
    }



  }
function COLISAOpredioFinal() {
  
  // LATERAL ESQUERDA DO PRÉDIO
  if (xPersonagem + 180 >= xPredioFinal1 
    && xPersonagem <= xPredioFinal1 - 150
    && yPersonagem + 300 >= -90) 
    {
    xPersonagem = xPredioFinal1 - 180; 
    }

// 4º ANDAR - LADO ESQUERDO
  if (
    yPersonagem > -225 - spriteHeight
    && yPersonagem < -600 // Ajuste o valor conforme necessário
    && xPersonagem < 4100
    && xPersonagem > 3640
    && yPersonagem >= -621) 
  {
    yPersonagem = -225 - spriteHeight;
    pulando = false;
    velocidadeY = 0;
    velocidadeX = 0;
  }

// cair pela borda esquerda
      if(
        xPersonagem < 3625
        && yPersonagem == -610
      ) {
        pulando = true;
        velocidadeY = 2;
        velocidadeX = -2;
        yPersonagem --}


//cair pela borda direita
  if(
    xPersonagem > 4100
    && yPersonagem >= -621
    && yPersonagem < -600
  ) {
    pulando = true;
    velocidadeX = +2
    yPersonagem+400;
  }

// 3º ANDAR - LADO ESQUERDO
  if (
    yPersonagem > -225 - spriteHeight
    && yPersonagem < -300 // Ajuste o valor conforme necessário
    && xPersonagem < 4700
    && xPersonagem > 4000
    && yPersonagem >= -321) 
  {
    yPersonagem = 60 - spriteHeight;
    pulando = false;
    velocidadeY = 0;
  }


//cair da borda esquerda do 3ºandar

    if(xPersonagem > 2500) 
    {
    if(
      xPersonagem <= 3960
      && yPersonagem > -335
      && yPersonagem < -314
    ) {
      pulando = true;
      velocidadeX = -2;
      xPersonagem -400
    }
}

  

  if(
    xPersonagem >= 4615
    && yPersonagem == -325
  )
    {
      xPersonagem = 4615
    }


    // 1º ANDAR ESQUERDO

    //parede esquerda
    if(
      xPersonagem <= 3762
      && xPersonagem >= 3755
      && yPersonagem == 315)
      {
        xPersonagem = 3762
      }

      //parede do meio
      //ir
      if(
        xPersonagem >= 4800
        && xPersonagem <= 4805
        && yPersonagem >=20
      )
        {
          xPersonagem = 4800
        }
        //voltar
        if(
          xPersonagem <= 4974
          && xPersonagem >= 4850
          && yPersonagem == 315)
          {
            xPersonagem = 4974
          }
      
//passar apenas deslizando
      if(
        xPersonagem >= 4351
        &&xPersonagem <= 4550
        && yPersonagem == 315
        && frameY !== 3
        && frameX !== 3
      ) {
        pulando = false
        xPersonagem = 4351
        frameY == 0
        frameX == 0
        velocidadeX == 0
        velocidadeY == 0

        if (frameX !== 3
          && frameY !== 3) {
            pulando=false

          }
        



//teto 1 andar esquerda
      if (xPersonagem > 3990
        && xPersonagem < 4352
        && yPersonagem < 100
      )
      {
        velocidadeY = 2
        console.log('colisao detectada aqui carai teto')
      }





// ultima parede direita primeiro andar
    if(
      xPersonagem >= 5955 
      && yPersonagem == 315
    )
      {
        xPersonagem = 5955
      }

      
// ???






// 2º ANDAR LADO DIREITO PISO
      if (
        yPersonagem > -225 - spriteHeight
        && yPersonagem < 300 // Ajuste o valor conforme necessário
        && xPersonagem > 5280
        && xPersonagem < 5300
        && yPersonagem >= -21) 
      {
        yPersonagem = 400 - spriteHeight;
        pulando = false;
        velocidadeY = 0;
        velocidadeX = 0;
        
      }

      if (
        xPersonagem > 5280
        && yPersonagem > 15
        && yPersonagem < 20
      ) {
        yPersonagem = 15
        pulando = false;
      }




// cair pela borda esquerda
      if(
        xPersonagem < 5190
        && yPersonagem == 15
      ) {
        pulando = true;
        velocidadeY = 2;
        velocidadeX = -2;
        yPersonagem --
      }


//------------------------------

// 3º ANDAR - LADO DIREITO

  if (yPersonagem > -225 - spriteHeight
  && yPersonagem + 180< -90   // Ajuste o valor conforme necessário
  && xPersonagem > 5545
  && xPersonagem < 5600
  && yPersonagem >= -321) 
{
  // alert('colisao detectada')
  yPersonagem = 75 - spriteHeight;
  pulando = false;
  velocidadeY = 0;
  velocidadeX = 0;
  
}

      // cair pela borda esquerda
      if(
        xPersonagem < 5555
        && yPersonagem == -310
      ) {
        pulando = true;
        velocidadeY = 2;
        velocidadeX = -2;
        // yPersonagem --
      }



















































//parede direita segundo andar da direita
      if(
        xPersonagem >= 5955
        && yPersonagem == 15
      )
        {
          xPersonagem = 5955
        }

//teto primeiro andar lado direito
      if (xPersonagem > 5200
        && yPersonagem <= 264
        && yPersonagem >= 220
      )
      {
        velocidadeY = 0.5
        xPersonagem = xPersonagem
      }



      // -------------------------------
      // -------------------------------
      // -------------------------------
      // -------------------------------

      // COLISAO ESCADA PRIMEIRO ANDAR

      // de baixo para cima






if (xPersonagem > 3990
  && xPersonagem < 4352
  && yPersonagem <= 264
)
{
  velocidadeY = 2
  xPersonagem = xPersonagem
}







                        

                      if (xPersonagem + 160 >= 4455
                        && xPersonagem + 160 <=4465
                        && yPersonagem + 300 >= 310
                        && yPersonagem + 300 <= 330
                        ) {
                          pulando = false
                          yPersonagem = 10
                          // alert('colisão detectada')
                          
                        } 

                        else if (xPersonagem + 160 >= 4485
                          && xPersonagem + 160 <= 4495
                          && yPersonagem + 300 >= 330
                          && yPersonagem + 300 <= 330
                         ) {
                            pulando = false
                            yPersonagem = 30
                            // alert('colisão detectada')
    
                          }

                          else if (xPersonagem + 160 >= 4515
                            && xPersonagem + 160 <= 4525
                            && yPersonagem + 300 >= 350
                            ) {
                              pulando = false
                              yPersonagem = 50
                              // alert('colisão detectada')
        
                            }

                            else if (xPersonagem + 160 >= 4545
                              && xPersonagem + 160 <= 4555
                              && yPersonagem + 300 >= 370
                             ) {
                                pulando = false
                                yPersonagem = 70
                                // alert('colisão detectada')
            
                              }

                                
                                else if (xPersonagem + 160 >= 4575
                                  && xPersonagem + 160 <= 4585
                                  && yPersonagem + 300 >= 390
                                  ) {
                                    pulando = false
                                    yPersonagem = 90
                                    // alert('colisão detectada')

                                  } 

                                  else if (xPersonagem + 160 >= 4605
                                    && xPersonagem + 160 <= 4615
                                    && yPersonagem + 300 >= 410
                                    ) {
                                      pulando = false
                                      yPersonagem = 110
                                      // alert('colisão detectada')
                                    }

                                      
                                        else if (xPersonagem + 160 >= 4635
                                          && xPersonagem + 160 <= 4645
                                          && yPersonagem + 300 >= 430
                                          ) {
                                            pulando = false
                                            yPersonagem = 130
                                            // alert('colisão detectada')

                                          }

                                          else if (xPersonagem + 160 >= 4665
                                            && xPersonagem + 160 <= 4670
                                            && yPersonagem + 300 >= 450
                                          ) {
                                              pulando = false
                                              yPersonagem = 150
                                              // alert('colisão detectada')
                                  
                                            }

                                            if (xPersonagem + 160 >= 4695
                                              && xPersonagem + 160 <= 4705
                                              
                                              && yPersonagem + 300 >= 470
                                              ) {
                                                pulando = false
                                                yPersonagem = 170
                                                // alert('colisão detectada')
                                      
                                              }







}


    }
function COLISAOsemaforo() {

      // COLISÃO LATERAL ESQUERDA
      if (xPersonagem + 220 >= xSemaforo
        && xPersonagem <= xSemaforo - 150
        && yPersonagem + 290 >= ySemaforo)
        {
        xPersonagem = xSemaforo - 220; 
        }


        //COLISAO  CIMA
        if (xPersonagem + larguraPersonagem > xSemaforo
          && xPersonagem < 1019 
          && yPersonagem + 320 >= ySemaforo
          && yPersonagem <= -10
          && velocidadeY > 0)
          {
            
            yPersonagem = ySemaforo - 320;
            velocidadeY = 0;  
            pulando = false; 
          }

        
        // PARA CONSEGUIR DESCER
        if (xPersonagem >= 1019 && yPersonagem <= -270
          && yPersonagem >= -270
        ){
          pulando = true;
          velocidadeX = 3;
        }
    
        if (xPersonagem <= 897
          && yPersonagem == -270
          && pulando == false 
        ){
          pulando = true;
          velocidadeX = -3;    }
    }
function COLISAOcameras() {

  // COLISÃO LATERAL ESQUERDA
  // if (xPersonagem + 220 >= xRealCamera
  //   && xPersonagem <= xRealCamera - 150
  //   && yPersonagem + 290 >= yCamera)
  //   {
  //   xPersonagem = xRealCamera - 220; 
  //   }


    //COLISAO  CIMA
    // if (xPersonagem + larguraPersonagem > 2020
    //   && xPersonagem < 2500
    //   && yPersonagem + 320 >= -100
    //   // && yPersonagem + 320 <= -60
    //   && velocidadeY > 0
    // && pulando == true)
    //   {
        
    //     yPersonagem = yCamera - 320;
    //     velocidadeY = 0;  
    //     pulando = false; 
    //   }

    
    // // PARA CONSEGUIR DESCER
    // if (xPersonagem >= 6600 
    //   && xPersonagem <= 6550
    //   && yPersonagem <= -620
    //   && yPersonagem >= -620
    // ){
    //   pulando = true;
    //   velocidadeX = 3;
    // }

    // if (xPersonagem <= 6165
    //   && xPersonagem >6145
    //   && yPersonagem == -620
    //   && pulando == false 
    // ){
    //   pulando = true;
    //   velocidadeX = -3;    }


}
function COLISAOposteFase3() {
  
  // COLISÃO LATERAL ESQUERDA
  if (xPersonagem + larguraPersonagem >= xPosteFase3 
      && xPersonagem <= xPosteFase3 - 150
      && yPersonagem + 300 >= yPosteFase3) 
      {
      xPersonagem = xPosteFase3 - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPosteFase3
      && xPersonagem < 5875
      && yPersonagem + 320 >= yPosteFase3
      && yPersonagem + 320 <= -300
      && velocidadeY > 0) 
      {
        
        yPersonagem = -770;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // // PARA CONSEGUIR DESCER
    // if (xPersonagem >= 7165 && yPersonagem == -785){
    //   pulando = true;
    //   velocidadeX = 1;
    // }

    if (xPersonagem <= 5470 
      && xPersonagem >= 5440
      && yPersonagem == -770
      && pulando == false
    ){
      pulando = true;
      velocidadeX = -3;
    }

    if (xPersonagem >= 5875 
      && xPersonagem <= 5900
      && yPersonagem == -770
      && pulando == false
    ){
      pulando = true;
      velocidadeX = 3;
    }
}
function COLISAObarracao() {

  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + larguraPersonagem >= xPeBarracao
      && xPersonagem <= xPeBarracao - 150
      && yPersonagem + 290 >= yBarracao)
      {
      xPersonagem = xPeBarracao - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xBarracao
      && xPersonagem < 5354
      && yPersonagem + 320 >= yBarracao
      && yPersonagem + 320 <= 20
      && velocidadeY > 0)
      {
        
        yPersonagem = yBarracao - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 5354 
      && xPersonagem <= 5390
      && yPersonagem <= -320
      && yPersonagem >= -320
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 3635
      && xPersonagem >= 3615
      && yPersonagem <= -320
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

    
}
function COLISAOmapaFase2(){
  // LATERAL ESQUERDA DO PRÉDIO
  if (xPersonagem + 180 >= xMapa2 
    && xPersonagem <= xMapa2 - 150
    && yPersonagem + 300 >= 230) 
    {
    xPersonagem = xMapa2 - 180; 
    }

    //PISO ANDAR 2 esq
  if (xPersonagem + larguraPersonagem > xAndar2Esq
    && xPersonagem < 9405 
    && yPersonagem + 320 >= yAndar2Esq
    && velocidadeY > 0)
    {
      
      // yPersonagem = yAndar2Esq - 320;
      // velocidadeY = 0;  
      pulando = false;
      yPersonagem = - 50 
    }

  // DESCER DO PISO ANDAR 2 esq
  if (xPersonagem >= 9535 && yPersonagem== -50
    && xPersonagem <= 9700
  ){
    pulando = true;
    velocidadeX = 3;
  }

  if (xPersonagem <= 9020 && xPersonagem >= 8950
    && yPersonagem == -50
  ) {
    pulando = true
    velocidadeX = -1
    velocidadeY = 1
  }




  // LATERAL DIREITA DO PREDIO
  if (xPersonagem + 180 >= 11220 
    && xPersonagem <= 11200 - 150
    && yPersonagem + 300 >= -900) 
    {
    xPersonagem = 11220 - 180; 
    }




  //teto 2 andar esquerda
  if (xPersonagem > 9095
    && xPersonagem < 9460
    && yPersonagem < -200
    && yPersonagem > -210
  )
  {
    velocidadeY = 2
  }

  //teto 1 andar meio esq
  if (xPersonagem > 9715
    && xPersonagem < 10120
    && yPersonagem > 0
    && yPersonagem < 200
  )
  {
    velocidadeY = 2
  }

  //teto 1 andar meio dir
  if (xPersonagem > 10245
    && xPersonagem < 10540
    && yPersonagem > 0
    && yPersonagem < 200
  )
  {
    velocidadeY = 2
  }



  // PAREDE À ESQUERDA DO ARMÁRIO
  if (xPersonagem >= 9650 
    && xPersonagem <= 9670
    && yPersonagem <= 160
    && yPersonagem >= -600
  ) {
    xPersonagem = 9650
  }

  // PAREDE À ESQUERDA DO GOVERNADOR
  if (xPersonagem >= 10820 
    // && yPersonagem >= 500
    && xPersonagem <= 10830){
    xPersonagem = 10820
  }

  // LATERAL DIREITA DO ARMÁRIO
  if (xPersonagem <= 10010 
    && xPersonagem >= 10005
    && yPersonagem >= -400
    && yPersonagem <=100
  ){
    xPersonagem = 10010
  }


    

    //------------------------

    // RACK
    if (xPersonagem + 220 >= xRack
      && xPersonagem <= xRack - 150
      && yPersonagem + 290 >= yRack)
      {
      xPersonagem = xRack - 220; 
      }

    
    if (xPersonagem + larguraPersonagem > xRack
      && xPersonagem < xRack
      && yPersonagem + 320 >= yRack
      && velocidadeY > 0)
      {
        
        yPersonagem = yRack - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    
    if (xPersonagem >= 10840 && yPersonagem <= 165
      && yPersonagem >= 150
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem > 10600) {
    if (xPersonagem <= 10683
      && yPersonagem <= 150
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }
    }
    //------------------------

    // // PISO ANDAR 2 MEIO DIREITA
    if (
      yPersonagem > 300 - spriteHeight
      && xPersonagem > 10250 
      && xPersonagem < 10545 
      && yPersonagem >= -151
      &&yPersonagem <= 100
      && velocidadeY > 0
    ) 
    { 
      yPersonagem = 335 - spriteHeight;
      pulando = false; 
      velocidadeY = 0;
      velocidadeX = 0;          
    }

    // descer:
    if (xPersonagem >= 10560 && yPersonagem== -50
      && xPersonagem <= 10600
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 10250 && yPersonagem== -50
      && xPersonagem >= 10240
    ){
      pulando = true;
      velocidadeX = -3;
    }

    // // PISO ANDAR 2 MEIO ESQUERDA
    if (
      yPersonagem > 300 - spriteHeight
      && yPersonagem < 0 
      && xPersonagem > 9680 // borda esquerda
      && xPersonagem < 9690   // borda direita
      && yPersonagem >= -151
      && velocidadeY > 0
    ) 
    { 
      yPersonagem = 350 - spriteHeight;
      pulando = false;    
      velocidadeX = 0
      velocidadeY = 0       
    }

    // // COLISÃO GUARDA ROUPA 
    // if (xPersonagem <= 10020
    //   && yPersonagem +320 <= 140
    // ){
    //   xPersonagem = 10020 
    // }

    // // PAREDE ESQUERDA TÉRREO
    if (xPersonagem >= 9145) {
    if (xPersonagem <= 9150
    ){
      xPersonagem = 9150
    }
  }

  // PISO ANDAR 3 ESQUERDA
    if (
      xPersonagem > 9000 // borda esquerda
      && xPersonagem < 9543 // borda direita
      && yPersonagem >= -435
      && yPersonagem <= -400
      && velocidadeY > 0
    ) 
    { 
      yPersonagem = -430
      pulando = false;           
    }

    // descer
    if (xPersonagem >= 9545 && yPersonagem== -430
      && xPersonagem <= 9560
    ){
      pulando = true;
      velocidadeX = 3;
    }




    //NO 151 = 116 NUMEROS NEGATIVOS AO VALOR DO Y DO ANDAR
    //NO 0 = 35 POSITIVO AO VALOR DO Y DO ANDAR
    



    // //---------------------------

    // RACK 2 (AZUL)
    // if (xPersonagem + larguraPersonagem > xRack2
    //   && xPersonagem < xRack2
    //   && yPersonagem + 320 >= yRack2
    //   && yPersonagem < -10
    //   && velocidadeY > 0)
    //   {
        
    //     // yPersonagem = yRack2 - 200;
    //     // velocidadeY = 0;  
    //     pulando = false; 
    //   }


      if (
        yPersonagem > 300 - spriteHeight
        && xPersonagem > 9990 
        && xPersonagem < 10090 
        && yPersonagem >= -151
        &&yPersonagem <= 100
        && velocidadeY > 0
      ) 
      { 
        yPersonagem = 200 - spriteHeight;
        pulando = false; 
        velocidadeY = 0;
        velocidadeX = 0;          
      }

      //descer pela direita
      if (xPersonagem >= 10110 && yPersonagem== -185
        && xPersonagem <= 10150
      ){
        pulando = true;
        velocidadeX = 3;
      }

    //   // --------------------------------

// ARMARIO

    if (
      yPersonagem > 1 - spriteHeight
      && xPersonagem > 9700 
      && xPersonagem < 9955 
      && yPersonagem >= -250 // estava -151
      &&yPersonagem <= 0
      && velocidadeY > 0
    ) 
    { 
      yPersonagem = 10 - spriteHeight;
      pulando = false; 
      velocidadeY = 0;
      velocidadeX = 0;          
    }

    //descer pela direita
    if (xPersonagem >= 9965 && yPersonagem== -375
      && xPersonagem <= 10005
    ){
      pulando = true;
      velocidadeX = 3;
    }

    //descer pela esquerda
    if (xPersonagem <= 9700 && xPersonagem >=9690
      && yPersonagem == -375
    ) {
      velocidadeX = -3
      pulando = true
    }

      // ----------------------------------

    // ABAJUR

    if (yPersonagem >= -680
      && velocidadeY > 0
      && xPersonagem <= 9206
    ) {
      yPersonagem == -680
      pulando = false
    }

    if (xPersonagem >= 9240
      && xPersonagem <= 9250
      && yPersonagem <= -660
      && pulando == false
    ) {
      velocidadeX = 3
      pulando = true
    }

    if (xPersonagem <= 9300){
      gravidade = 0.4
    }

    if (xPersonagem <= 9280
      && yPersonagem >= -670
      // && yPersonagem <= -790
      && yPersonagem != -800
    ) {
      xPersonagem = 9280
    }
    




    // if( yPersonagem < -400) {

      
    // if (xPersonagem  > xAbajur
      

    //   && yPersonagem + 400 >= yAbajur

    //   && velocidadeY > 0)
    //   {
 
    //     pulando = false;
    //     velocidadeY = 0
    //   }

    // }

    if (
      yPersonagem > 1 - spriteHeight
      && xPersonagem > 8900 
      && xPersonagem < 9280 
      && yPersonagem >= -450 // estava -151
      &&yPersonagem <= 0
      && velocidadeY > 0
    ) 
    { 
      yPersonagem = 10 - spriteHeight;
      pulando = false; 
      velocidadeY = 0;
      velocidadeX = 0;          
    }
    

    //   if (xPersonagem >= 9230 && yPersonagem <= -661
    //     && yPersonagem >= -660
    //   ){
    //     pulando = true;
    //     velocidadeX = 3;
    //   }

      // ULTIMO ANDAR ESQUERDA

      if (
        xPersonagem > 9460 // borda esquerda
        && xPersonagem < 9800// borda direita
        && yPersonagem >= -805
        && yPersonagem <= -770
        && velocidadeY > 0
      ) 
      { 
        yPersonagem = -800
        pulando = false;           
      }

      //descer
      if (xPersonagem <= 9480 && xPersonagem >= 9460
        && yPersonagem == -800
      ) {
        velocidadeX = -3    
        pulando = true    
      }   

      if (xPersonagem >= 9780 && yPersonagem== -800
        && xPersonagem <= 9880
      ){
        pulando = true;
        velocidadeX = 3;
      }


      // ULTIMO ANDAR MEIO
      if (
        xPersonagem > 9950 // borda esquerda
        && xPersonagem < 10440// borda direita
        && yPersonagem >= -805
        && yPersonagem <= -770
        && velocidadeY > 0
      ) 
      { 
        yPersonagem = -800
        pulando = false;           
      }

      //DANDO PROBLEMA

      // if (xPersonagem <= 9980 && xPersonagem >= 9960
      //   && yPersonagem == -800
      // ) {
      //   velocidadeX = -3
      //   pulando = true
      // }

      if (xPersonagem >= 10445 && yPersonagem== -800
        && xPersonagem <= 10555
      ){
        pulando = true;
        velocidadeX = 0.54;
      }






      
      // ULTIMO ANDAR DIREITA
      if (
        xPersonagem > 10600 // borda esquerda
        && xPersonagem < 10900// borda direita
        && yPersonagem >= -805
        && yPersonagem <= -770
        && velocidadeY > 0
      ) 
      { 
        yPersonagem = -800
        pulando = false;           
      }



      if (xPersonagem >= 10900
        && yPersonagem <= -800
        && pulando == false 
      ){
        pulando = true;
        gravidade = 0.3
          }

          //10900
          //-60

      // if (xPersonagem >= 10900
      //   && yPersonagem >= -60
      //   && yPersonagem <= 0
      //   && velocidadeY > 0
      // ) {
      //   pulando = false
      //   window.location.href = "fase3.html";
      // }


    
  
}
function COLISAOarvore() {

    // COLISÃO LATERAL ESQUERDA
      if (xPersonagem + larguraPersonagem >= xRealArvore
        && xPersonagem <= xRealArvore - 150
        && yPersonagem + 290 >= yArvore)
        {
        xPersonagem = xRealArvore - larguraPersonagem; 
        }
  
      // COLISÃO CIMA
      if (xPersonagem + larguraPersonagem > xArvore
        && xPersonagem < 1900
        && yPersonagem + 320 >= yArvore
        && yPersonagem + 320 <= -60
        && velocidadeY > 0)
        {
          
          yPersonagem = yArvore - 320;
          velocidadeY = 0;  
          pulando = false; 
        }
      
      // PARA CONSEGUIR DESCER
      if (xPersonagem >= 1900 
        && xPersonagem <= 1910 
        && yPersonagem <= -410
        // && yPersonagem >= -425
      ){
        pulando = true;
        velocidadeX = 3;
      }
  
      if (xPersonagem <= 1226
        && yPersonagem <= -410
        && pulando == false 
      ){
        pulando = true;
        velocidadeX = -3;    }
  
      
  }
function COLISAOplaca() {

    // COLISÃO LATERAL ESQUERDA
      if (xPersonagem + larguraPersonagem >= xPlaca
        && xPersonagem <= xPlaca - 150
        && yPersonagem + 290 >= yPlaca)
        {
        xPersonagem = xPlaca - larguraPersonagem; 
        }
  
      // COLISÃO CIMA
      if (xPersonagem + larguraPersonagem > xPlaca
        && xPersonagem < xPlaca + 10
        && yPersonagem + 320 >= yPlaca
        && yPersonagem <= -10
        && velocidadeY > 0)
        {
          
          yPersonagem = yPlaca - 320;
          velocidadeY = 0;  
          pulando = false; 
        }
      
      // PARA CONSEGUIR DESCER
      if (xPersonagem >= 8900 
        && xPersonagem <= 8950
        && yPersonagem <= -540
        && yPersonagem >= -555
      ){
        pulando = true;
        velocidadeX = 3;
      }
  
      if (xPersonagem <= 2295
        && yPersonagem <= -455
        && pulando == false 
      ){
        pulando = true;
        velocidadeX = -3;    }


      // CONSEGUIR DESCER
      if (xPersonagem <= 552 && yPersonagem == -100){
        pulando = true;
        velocidadeX = -2
        velocidadeY = 10;
      }

      if (xPersonagem >= 742 && yPersonagem == -100){
        pulando = true;
        velocidadeY = 10;
      }

      
  
      
  }
function COLISAOguindasteCortado() {
  if (yPersonagem >= -450
    && yPersonagem <= -420
    && velocidadeY > 0
    && xPersonagem >= 2600
    && xPersonagem <= 3260
  ) 
  
  {
    yPersonagem = -450
    pulando = false
    gravidade = 0.530
  }

          
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 3300 && yPersonagem <= -450
      && yPersonagem >= -450
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 2532
      && yPersonagem == -450
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -1;    }
}
function COLISAOandaimeTeto() {
  
  // ANDAR 1
  if (yPersonagem >= -595
    && yPersonagem <= -565
    && velocidadeY > 0
    && xPersonagem >= 4660
    && xPersonagem <= 5165
  ) 
  
  {
    yPersonagem = -595
    pulando = false
  }

  // ANDAR 2
  if (yPersonagem >= -770
    && yPersonagem <= -750
    && velocidadeY > 0
    && xPersonagem >= 4660
    && xPersonagem <= 5165
  ) 
  
  {
    yPersonagem = -770
    pulando = false
  }

    // PARA CONSEGUIR DESCER
    if (xPersonagem <= 4630
      && xPersonagem >= 4610
      && yPersonagem == -595
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

    if (xPersonagem <= 4630
      && xPersonagem >= 4610
      && yPersonagem == -770
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }



      if (xPersonagem >= 5195 
        && xPersonagem <= 5215
        && yPersonagem <= -770
        && yPersonagem >= -770
      ){
        pulando = true;
        velocidadeX = 3;
      }

      if (xPersonagem >= 5195 
        && xPersonagem <= 5215
        && yPersonagem <= -595
        && yPersonagem >= -595
      ){
        pulando = true;
        velocidadeX = 3;
      }




}
function COLISAOpredioBranco() {

  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + 140 >= xPredioBranco
      && xPersonagem <= xPredioBranco - 110
      && yPersonagem + 290 >= yPredioBranco)
      {
      xPersonagem = xPredioBranco - 140; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPredioBranco
      && xPersonagem < 7030
      && yPersonagem + 320 >= yPredioBranco
      && yPersonagem + 320 <= 100
      && velocidadeY > 0)
      {
        
        yPersonagem = yPredioBranco - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 7030
      && xPersonagem <= 7070
       && yPersonagem == -785
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 6150
      && xPersonagem >= 6100
      && yPersonagem == -785
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

    
}
function COLISAOpredioLaranja() {

  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + 140 >= xPredioLaranja
      && xPersonagem <= xPredioLaranja - 110
      && yPersonagem + 290 >= yPredioLaranja)
      {
      xPersonagem = xPredioLaranja - 140; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPredioLaranja
      && xPersonagem < 9106
      && yPersonagem + 320 >= yPredioLaranja
      && yPersonagem + 320 <= 100
      && velocidadeY > 0)
      {
        
        yPersonagem = yPredioLaranja - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 9106 
      && xPersonagem <= 9130
      && yPersonagem <= -1170
      && yPersonagem >= -1170
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 8180
      && xPersonagem >= 8160
      && yPersonagem <= -1170
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

    
}
function COLISAOarvoreAlta() {

  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + 5 >= xArvoreAlta
      && xPersonagem <= xArvoreAlta 
      && yPersonagem + 290 >= yArvoreAlta)
      {
      xPersonagem = xArvoreAlta - 5;
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > 7350
      && xPersonagem < 7903 
      && yPersonagem + 320 >= yArvoreAlta
      && yPersonagem + 320 <= -600
      && velocidadeY > 0)
      {
        
        yPersonagem = yArvoreAlta - 320;
        velocidadeY = 0;  
        pulando = false; 
      }



    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 7903 && yPersonagem <= -1000
      && yPersonagem >= -1000
    ){
      pulando = true;
      velocidadeX = 3;
    }

    // if (xPersonagem <= 7280
    //   && xPersonagem >= 7230
    //   && yPersonagem <= -1000
    //   && pulando == false 
    // ){
    //   pulando = true;
    //   velocidadeX = -3;    }

    
}
function COLISAOposte2Fase3() {
  
  // COLISÃO LATERAL ESQUERDA
  if (xPersonagem + larguraPersonagem >= xPoste2Fase3 
      && xPersonagem <= xPoste2Fase3 - 150
      && yPersonagem + 300 >= yPoste2Fase3) 
      {
      xPersonagem = xPoste2Fase3 - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPoste2Fase3
      && xPersonagem < 9855
      && yPersonagem + 320 >= yPoste2Fase3
      && yPersonagem + 320 <= -300
      && velocidadeY > 0) 
      {
        
        // yPersonagem = yPosteFase3 - 325;
        velocidadeY = 0; 
        yPersonagem = -1090 
        pulando = false; 
      }
    
    // // PARA CONSEGUIR DESCER
    if (xPersonagem >= 9855
      && xPersonagem <= 9895
       && yPersonagem == -1090){
      pulando = true;
      velocidadeX = 1;
    }

    if (xPersonagem <= 9420
      && xPersonagem >= 9408
      && yPersonagem == -1090
      && pulando == false
    ){
      pulando = true;
      velocidadeX = -3;
    }
}
function COLISAOpredioAzul() {

  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + 140 >= xPredioAzul
      && xPersonagem <= xPredioAzul - 110
      && yPersonagem + 290 >= yPredioAzul)
      {
      xPersonagem = xPredioAzul - 140; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPredioAzul
      && xPersonagem < 11992
      && yPersonagem + 320 >= yPredioAzul
      && yPersonagem + 320 <= -550
      && velocidadeY > 0)
      {
        
        yPersonagem = yPredioAzul - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 11992 
      && xPersonagem <= 12050
      && yPersonagem <= -950 
      && yPersonagem >= -970
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 11077
      && xPersonagem >= 11000
      && yPersonagem <= -970
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

    
}
function COLISAOpredioAlto() {
  
  // teto esquerdo
  if (xPersonagem >= 10055
    && xPersonagem <= 10355
    && velocidadeY > 0
    && yPersonagem >= -990
    && yPersonagem <= -900
  )
  {
    pulando = false
    yPersonagem = -990
  }

  if (xPersonagem <= 10040
    && xPersonagem >= 10000
    && yPersonagem == -990
    && pulando == false
  ){
    pulando = true;
    velocidadeX = -3;
  }

  if (xPersonagem >= 10675
    && xPersonagem <= 10699
     && yPersonagem == -1155){
    pulando = true;
    velocidadeX = 1;
  }



  //parede esquerda do teto
  if (xPersonagem >= 10150
    && xPersonagem <= 10200
    && yPersonagem >= -1160 
    && yPersonagem <= 900
  ) {
    xPersonagem = 10150
  }

  // teto meio
  if (xPersonagem >= 10230
    && xPersonagem <= 10680
    && velocidadeY > 0
    && yPersonagem >= -1160
    && yPersonagem <= 900
  )
  {
    pulando = false
    yPersonagem = -1155
  }

    // teto direito 
    if (xPersonagem >= 10690
      && xPersonagem <= 10834
      && velocidadeY > 0
      && yPersonagem >= -975
      && yPersonagem <= -900
    )
    {
      pulando = false
      yPersonagem = -960
    }

    if (xPersonagem >= 10818
      && xPersonagem <= 10840
       && yPersonagem == -960){
      pulando = true;
      velocidadeX = 1;
    }

    // parede direita do teto
    if (xPersonagem <= 10713
      && xPersonagem >= 10690
      && yPersonagem >= -975
      && yPersonagem <= -900
    ) {
      xPersonagem = 10713
    }

    if (xPersonagem >= 9970
      && yPersonagem >= -300
      && xPersonagem <= 9990) {
        xPersonagem = 9970
      } 



}




// 11700, -970


function COLISAOmapa3() {

  // PAREDE DIREITA DA ENTRADA DO PRÉDIO (ENTRAR APENAS NO BURACO)
  if (xPersonagem >= 12195
    && xPersonagem <= 12200
    && yPersonagem >= -20
  ) {
    xPersonagem = 12195
  }

  if (xPersonagem >= 12270
    && xPersonagem <= 12280
    && yPersonagem <= -130
  ) {
    xPersonagem = 12270
  }

  // ESCADA NA ENTRADA À ESQUERDA
    if (xPersonagem >= 12200
      && xPersonagem <= 12810
      && yPersonagem >= -20
      && velocidadeY > 0
    ) {
      pulando = false
      yPersonagem = -20
    }

    // cair pra esquerda da entrada
    if (xPersonagem <= 12200
      && xPersonagem >= 12180
      && yPersonagem == -20
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }

  
  if (xPersonagem >= 12810
    && xPersonagem <= 13116
    && yPersonagem <= 320
    && yPersonagem >= -30
    && movendoDireita
  ) {
    velocidadeX = 0.1
    velocidadeY = 0.1
    pulando = false
    xPersonagem++
    xPersonagem++
    xPersonagem++
    xPersonagem++
    xPersonagem++
    xPersonagem++
    xPersonagem++

    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
    yPersonagem++
  }

  if (xPersonagem <= 13116
    && xPersonagem >= 12600
    && yPersonagem >= -20
    && movendoEsquerda 
  ) {
    pulando = false
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--
    yPersonagem--

    xPersonagem--
    xPersonagem--
    xPersonagem--
    xPersonagem--
    xPersonagem--
    xPersonagem--
    xPersonagem--
    xPersonagem--
    xPersonagem--
  }

  // TETO ENTRADA (ANDAR 2, ESQUERDA)

  if (xPersonagem >= 12200
    && xPersonagem <= 13000
    && yPersonagem <= -120
    && yPersonagem >= -140
  ) {
      velocidadeY = 2
  }

  // TETO ANDAR 1, DIREITA

  if (xPersonagem >= 13192
    && xPersonagem <= 13633
    && yPersonagem >= 180
    && yPersonagem <= 190
  ) {
      velocidadeY = 2
  }

  // PEDRA À DIREITA, ANDAR 1
    if (yPersonagem >= 150
      && velocidadeY > 0
      && xPersonagem >= 13673
      && xPersonagem <= 13900
    ) 
    
    {
      yPersonagem = 150
      pulando = false
    }
    // cair esquerda da pedra
    
    if (xPersonagem <= 13673
      && xPersonagem >= 13643
      && yPersonagem == 150
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }



  // PAREDE À DIREITA
  if (xPersonagem >= 13832
  ) {
    xPersonagem = 13832
  }

  // ANDAR DO SOFÁ
  if (xPersonagem >= 13192
    && xPersonagem <= 13633
    && yPersonagem >= -40
    && yPersonagem <= 100
    // && yPersonagem <= -100
    && velocidadeY > 0
  ) {
      pulando = false
      yPersonagem = -40
  }

  // descer do andar do sofá
  if (xPersonagem >= 13625 && yPersonagem <= -40
    && yPersonagem >= -40
  ){
    pulando = true;
    velocidadeX = 3;
  }

  // LADO DIREITO DO SOFÁ
  if (xPersonagem <= 13550
    && xPersonagem >= 13540
    && yPersonagem == -40
  ) {
    xPersonagem = 13550
  }

  // PAREDE À ESQUERDA DO SOFÁ
  if (xPersonagem <= 13280
    && xPersonagem >= 13270
    && yPersonagem <= -40
    && yPersonagem >= -369

  ) {
    xPersonagem = 13280
  }

  // SUBIR NO SOFÁ
    if (yPersonagem >= -180
      && yPersonagem <= -160
      && velocidadeY > 0
      && xPersonagem >= 13192
      && xPersonagem <= 13490
    ) 
    
    {
      yPersonagem = -180
      pulando = false
    }

  // BATER A CABEÇA TETO EM CIMA DO SOFÁ
  if (xPersonagem <= 13408
    && xPersonagem >= 13398
    && yPersonagem >= -369
    && yPersonagem <= -300
  ) {
    xPersonagem = 13408
  }

  // ANDAR ACIMA DO SOFÁ
  if (yPersonagem >= -370
    && yPersonagem <= -350
    && velocidadeY > 0
    && xPersonagem >= 12400
    && xPersonagem <= 13320
  ) 
  
  {
    yPersonagem = -370
    pulando = false
  }

  // descer a direita do sofá
  if (xPersonagem >= 13550
    && xPersonagem <= 13580
    && yPersonagem == -180
  ) {
    velocidadeX = 3
    pulando = true
  }
// descer do 3 andar (acima do sofá)
  if (xPersonagem >= 13371
    && xPersonagem <= 13400
    && yPersonagem == -370
  ) {
    velocidadeX = 3
    pulando = true
  }

  // 3 andar a direita do sofa
  if (xPersonagem >= 13655
    && yPersonagem >= -370
    && yPersonagem <= -350
    && velocidadeY > 0
  ) {
    pulando = false
    yPersonagem = -370
  }

  if (xPersonagem >= 13685
    && yPersonagem == -370
  ) {
    xPersonagem = 13685
  }

  if (xPersonagem <= 13613
    && xPersonagem >= 13590
    && yPersonagem == -370
    && pulando == false

  ) {
    pulando = true
    velocidadeX = -3
  }

  // pedra andares de cima
  if (yPersonagem >= -490
    && yPersonagem <= -470
    && velocidadeY > 0
    && xPersonagem >= 12437
    && xPersonagem <= 12720
  ) 
  
  {
    yPersonagem = -490
    pulando = false
  }

  if (yPersonagem <= -410
    && xPersonagem <= 12432
    && xPersonagem >= 12422
  ) {
    xPersonagem = 12432
  }


}


let xPersonagem = 0;  
let yPersonagem = 315;









function DESENHAR() {

  // LIMPAR CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);



// Verifica se o personagem passou do ponto limite para remover o coração
if (xPersonagem >= 13500 
  && xPersonagem <= 13700
  && yPersonagem >= 430 
  && coracao !== null) {
  coracao = null; // Define a variável como null para não desenhar mais
  vidas = 0
}

// Verifica se o coração ainda deve ser desenhado
let desenharCoracao = coracao !== null;





  // TRANSLADA O CANVAS COM A CÂMERA
  ctx.save();
  ctx.translate(-deslocamentoCameraX, deslocamentoCameraY);
  
  //OBSTÁCULOS
  // (elemento, x, y, largura, altura)
  ctx.drawImage(predioBranco, xPredioBranco, yPredioBranco, larguraPredioBranco, alturaPredioBranco)

 ctx.drawImage(hidrante, xHidrante, yHidrante, larguraHidrante, alturaHidrante);
 ctx.drawImage(placa,xPlaca, yPlaca, larguraPlaca, alturaPlaca
  )
//  ctx.drawImage(poste, xPoste, yPoste, larguraPoste, alturaPoste);
 ctx.drawImage(PosteFase3, xPosteFase3, yPosteFase3, larguraPosteFase3, alturaPosteFase3);

 ctx.drawImage(Poste2Fase3, xPoste2Fase3, yPoste2Fase3, largura2PosteFase3, alturaPoste2Fase3);

 //  ctx.drawImage(cameras, xCamera, yCamera, larguraCamera, alturaCamera)
 ctx.drawImage(antena, xAntena, yAntena, larguraAntena, alturaAntena);
// //  ctx.drawImage(loja, xLoja, yLoja, larguraLoja, alturaLoja);
 ctx.drawImage(barracao, xBarracao, yBarracao, larguraBarracao, alturaBarracao);

 ctx.drawImage(predioAlto, xPredioAlto, yPredioAlto, larguraPredioAlto, alturaPredioAlto)
//  ctx.drawImage(predioLaranjAzul, xPredioLaranjAzul, yPredioLaranjAzul, larguraPredioLaranjAzul, alturaPredioLaranjAzul);
// //  ctx.drawImage(predio2, xPredio2, yPredio2, larguraPredio2, alturaPredio2)


 ctx.drawImage(semaforo, xSemaforo, ySemaforo, larguraSemaforo, alturaSemaforo)
    ctx.drawImage(arvore, xArvore, yArvore, larguraArvore, alturaArvore)
    ctx.drawImage(guindasteCortado, xGuindasteCortado, yGuindasteCortado, larguraGuindasteCortado, alturaGuindasteCortado)

    ctx.drawImage(predioLaranja, xPredioLaranja, yPredioLaranja, larguraPredioLaranja, alturaPredioLaranja)

    
    ctx.drawImage(arvoreAlta, xArvoreAlta, yArvoreAlta, larguraArvoreAlta, alturaArvoreAlta)

    ctx.drawImage(predioAzul, xPredioAzul, yPredioAzul, larguraPredioAzul, alturaPredioAzul)


    ctx.fillStyle = '#f0ede4'
    ctx.fillRect(xPredioAlto + 200, yPredioAlto, 400, 160)
    ctx.drawImage(janela, xPredioAlto + 300, yPredioAlto + 20, 150, 150)

    ctx.drawImage(fundoFase3, xfundoFase3, yfundoFase3, largurafundoFase3, alturafundoFase3)
    ctx.drawImage(mapa3, xMapa3, yMapa3, larguraMapa3, alturaMapa3)
    ctx.drawImage(pedras, xPedras, yPedras, larguraPedras, alturaPedras)
    ctx.drawImage(capivara, xCapivara, yCapivara, larguraCapivara, alturaCapivara)

    
    ctx.fillStyle = 'black'
    ctx.fillRect(xMapa3 - 70, 283, 100, 500  )

    ctx.fillStyle = '#999999'
    ctx.fillRect(13750, 281, 129, 30  )


//   // ctx.drawImage(predioFinal1, xPredioFinal1, yPredioFinal1, larguraPredioFinal1, alturaPredioFinal1);
//   // ctx.drawImage(NpcLurdes, xNpcLurdes, yNpcLurdes, larguraNpcLurdes, alturaNpcLurdes);
//   ctx.drawImage(NpcGoverndor, xNpcGovernador, yNpcGovernador, larguraNpcGovernador, alturaNpcGovernador)
  
  // fogo perto do guindaste
  ctx.drawImage(fogo, 2000, 430, 200, 200);
//   ctx.drawImage(fogo, 1840, 430, 200, 200);
//   ctx.drawImage(fogo, 1680, 430, 200, 200);
//   ctx.drawImage(fogo, 1520, 430, 200, 200);
//   ctx.drawImage(fogo, 1340, 430, 200, 200);
//   ctx.drawImage(fogo, 1180, 430, 200, 200);
//   ctx.drawImage(fogo, 1020, 430, 200, 200);

  // fogo em cima do BARRACAO
  // ctx.drawImage(fogo, 4700, -175, 180, 180);


  //haste semáforo
//   ctx.fillStyle = '#4d4d4d'
//   ctx.fillRect(xPeSemaforo - 2, -335, 27, 1500)


  // DICA ESCRITA NO BARRAÇÃO
  ctx.font = "30px VT323";
  ctx.fillStyle = "black";
  ctx.fillText(`DICA: UTILIZE O ANDAIME!`, 4100, 50);


//   ctx.drawImage(guindaste, xGuindaste, yGuindaste, larguraGuindaste, alturaGuindaste);
//   // ctx.drawImage(guindasteInvertido, xGuindasteInvertido, yGuindasteInvertido, larguraGuindasteInvertido, alturaGuindasteInvertido)
  ctx.drawImage (andaime, xAndaime, yAndaime, larguraAndaime, alturaAndaime)
//   ctx.drawImage (mapaFase2, xMapa2, yMapa2, larguraMapa2, alturaMapa2)
//   ctx.drawImage (rack2, xRack2, yRack2, larguraRack2, alturaRack2)
//   ctx.drawImage (NpcGoverndor, xNpcGovernador, yNpcGovernador, larguraNpcGovernador, alturaNpcGovernador)



  ctx.fillStyle = 'transparent';
  ctx.fillRect(1400,-90, 590, 20); // Calçada (pode ajustar a largura conforme o cenário)


  // abajur ref
  ctx.fillStyle = 'transparent';
  ctx.fillRect(xAbajur, yAbajur, larguraAbajur, alturaAbajur)
  
  // armario ref
  ctx.fillStyle = 'transparent';
  ctx.fillRect(xArmario, yArmario, larguraArmario, alturaArmario)




  //segundo andar esquerda
  ctx.fillStyle = 'transparent';
  ctx.fillRect(xAndar2Esq, yAndar2Esq, larguraAndar2Esq, alturaAndar2Esq)

  //segundo andar meio direita
  ctx.fillStyle = 'transparent';
  ctx.fillRect(xAndar2MeioDir, yAndar2MeioDir, larguraAndar2MeioDir, alturaAndar2MeioDir)

  ctx.fillStyle = 'transparent'
  ctx.fillRect(xRack, yRack,larguraRack, alturaRack)

  ctx.fillStyle = 'transparent';
  ctx.fillRect(xRealSemaforo, yRealSemaforo, larguraRealSemaforo, alturaRealSemaforo )

  ctx.fillStyle = 'transparent';
  ctx.fillRect(xPeSemaforo, yPeSemaforo, larguraPeSemaforo, alturaPeSemaforo )
  
  //barreira invisivel do segundo pro primeiro andar
  ctx.fillStyle = 'transparent';
  ctx.fillRect(
    4160 //x
    , 100 // y
    , 3.5 //largura
    , 240 //altura
  ) 

  // CALÇADA
  ctx.fillStyle = 'rgb(176,176,176)';
  ctx.fillRect(0, 620, 25000, 80); // Calçada (pode ajustar a largura conforme o cenário)

  // PERSONAGEM
  ctx.drawImage(spriteSheet, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, xPersonagem, yPersonagem, spriteWidth, spriteHeight);
  
  // COISAS FIXAS NA TELA
  ctx.restore();

  // x, y, largura, altura
  ctx.fillStyle = 'rgb(249,11,11)';
  ctx.fillRect(8, 8, 270, 45);
  ctx.fillStyle = 'yellow';
  ctx.fillRect(11, 13, 260, 35);
  ctx.font = "35px VT323";
  ctx.fillStyle = "black";
  ctx.fillText(`Tempo Restante: ${tempoRestante}`, 14, 40);

  ctx.fillStyle = 'rgb(249,11,11)';
  ctx.fillRect(1372, 8, 100, 45);
  ctx.fillStyle = 'yellow';
  ctx.fillRect(1375, 13, 95, 35);
  ctx.font = "35px VT323";
  ctx.fillStyle = "black";
  ctx.fillText(`FASE`, 1380, 40);
  ctx.fillText(`3`, 1450, 40);

  if (desenharCoracao) {
    ctx.drawImage(coracao, 10, 70, 50, 40);
}
  ctx.drawImage(coracao2, 70, 70, 50, 40);
  ctx.drawImage(coracao3, 130, 70, 50, 40);




}






function ATUALIZAR() {

  
  limparCanvas();
  COLISAOHidrante();
  COLISAOplaca();
  COLISAOsemaforo();
  COLISAOarvore();
  COLISAOAntena();
  COLISAOguindasteCortado();
  COLISAObarracao();
  COLISAOandaimeTeto();
  COLISAOposteFase3();
  COLISAOpredioBranco();
  COLISAOarvoreAlta();
  COLISAOpredioLaranja();
  COLISAOposte2Fase3()
  COLISAOpredioAlto();
  COLISAOpredioAzul();

  COLISAOmapa3();



  // COLISAOLoja();
  // COLISAOpredioFinal();
  // COLISAOpredioFinalPT2();
  // COLISAOguindaste(); // problema subir árvore
  // COLISAOandaime(); 
  // COLISAOposteFase2();
  // COLISAOpredioLaranjAzulFase2();
  // COLISAOcameras(); 
    
  



    //guindaste e andaime dando problema na colisao de cima do rack
  //barracao dando problema na colisao de cima do armario

  if (xPersonagem <= 10000) {
    gravidade = 0.4
  }

  if (xPersonagem <= 12880
    && xPersonagem >= 12850
    && yPersonagem == -370)
  {
    DESENHARvitoria(); // Desenha a mensagem de pausa
   botaoVitoria.style.display="block";
   botaoSairVitoria.style.display="block";
   audioTeste.pause();
   audioTeste.volume = 0.0
   return; // Não continua atualizando o restante do jogo enquanto pausado
  }

  // COLISAOmapaFase2()




    console.log("X  == ", xPersonagem)
      console.log("Y == ", yPersonagem)
  // console.log("vidas = ", vidas)

  // if
  //  (xPersonagem > 10200) {
  //   DESENHARMensagemPausa(); // Desenha a mensagem de pausa
  //   return; // Não continua atualizando o restante do jogo enquanto pausado
  // }

  if
  (tempoRestante == 0
    || vidas == 0
   
  ) {
   DESENHARderrotas(); // Desenha a mensagem de pausa
   audioTeste.pause();
   audioTeste.volume = 0.0
   botaoDerrota.style.display="block";
   botaoSair.style.display="block";
   return; // Não continua atualizando o restante do jogo enquanto pausado
 }




  if (movendoDireita && !pulando) {
    xPersonagem += 3.7;
    animacaoAndar();
  } else if (movendoEsquerda && !pulando) {
    xPersonagem -= 5;
    animacaoAndar();
  } else if (pulando) {
    yPersonagem += velocidadeY;
    xPersonagem += velocidadeX;
    velocidadeY += gravidade;
    if (Math.abs(velocidadeY) < 0.1) {
      velocidadeY = 1;
    }

    if (yPersonagem >= canvas.height - spriteHeight) {
      yPersonagem = canvas.height - spriteHeight;
      pulando = false;
      velocidadeY = 0;
      velocidadeX = 0;
    }

    animacaoPulo();
  } else if (deslizando) {
    animacaoDeslizar(); 
  } else {
    animacaoParado();
  }

  // if(xPersonagem >= 1) {
  //   iniciarMusica();
  // }

    
  // document.addEventListener('click', iniciarMusica);
  // document.addEventListener('keydown', iniciarMusica);

  

  if (xPersonagem > limiteDireita) {
    deslocamentoCameraX = xPersonagem - limiteDireita;
  }

  deslocamentoCameraY = Math.max(limiteCameraY - yPersonagem, 0);

  if (xPersonagem < -60) {
    xPersonagem = -60;
  }

  DESENHAR();



  requestAnimationFrame(ATUALIZAR);
  if (xPersonagem >= 10200) {
    
    ctx.fillStyle = "black"; // Retângulo preto com baixa opacidade
    ctx.fillRect(10200,200, 200, 200)
    console.log('teste')
  }
}















//-------------------------------------------------------------------------------------------------------------------------
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const spriteSheet = new Image();
spriteSheet.src = 'IMG/JoeSprite.png';

const spriteWidth = 400;  
const spriteHeight = 385; 
const qtdFramesAnimacaoParado = 2; // Quantidade de frames para a animação parado

let frameX = 0; 
let frameY = 0;

let movendoDireita = false;
let movendoEsquerda = false;
let pulando = false;
let deslizando = false;

let gravidade = 0.499;
let velocidadeY = 0;
let velocidadePulo = -15;
let velocidadeX = 15; // Velocidade horizontal durante o pulo

let frameCount = 0;
const fps = 20; // Taxa de frames por segundo para animação

const frequenciaPiscada = 90; 
let contadorAnimacaoParado = 0; 

let deslizandoAnimationActive = false;

let deslocamentoCameraX = 0; // Variável para controlar o deslocamento horizontal da câmera
const limiteDireita = canvas.width / 2; // Quando o personagem passar da metade da tela

// Controle da câmera (altura mínima antes da tela começar a subir)
let deslocamentoCameraY = 0; // Posição da "câmera"
let limiteCameraY = 200; // Quando o personagem passar desse limite, a tela sobe

let tempoRestante = 60; // Tempo inicial em segundos
let intervalo = 1000; // Intervalo de 1 segundo

var audioTeste = new Audio('AUDIO/trilha-sonora.mp3');
audioTeste.loop = true; // Para que a música toque em loop
audioTeste.volume = 0.2;

var audioPassos = new Audio('AUDIO/passos.mp3')


var passos = new Audio('AUDIO/passos.mp3');

let jogoPausado = false; // Controle de pausa

let animationInterval; // Variável para armazenar o intervalo da animação
let isPaused = false;  // Variável para controlar o estado de pausa

let botaoDerrota = document.getElementById('botaoDerrota')
let botaoSair = document.getElementById('botaoSair')

let botaoVitoria = document.getElementById('botaoVitoria')
let botaoSairVitoria = document.getElementById('botaoSairVitoria')


setInterval(atualizarCronometro, intervalo); // Atualiza o cronômetro a cada 1 segundo

function atualizarCronometro() {
  if (tempoRestante > 0) {
    tempoRestante--; // Decrementa o tempo
  }
}


function DESENHARderrotas() {
  
  // audioTeste.pause();
  // ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Retângulo preto com baixa opacidade
  // ctx.fillRect(0, 0, canvas.width, canvas.height); // Cobre todo o canvas

  // ctx.font = "40px Arial";
  // ctx.fillStyle = "white"; 
  // ctx.textAlign = "center";
  // ctx.fillText("Jogo Pausado", canvas.width / 2, canvas.height / 2 - 50);

  // ctx.font = "20px Arial";
  // ctx.fillText("Clique Enter para voltar", canvas.width / 2, canvas.height / 2 + 20);

  ctx.drawImage(derrota, 0, 0, canvas.width, canvas.height); // Cobre todo o canvas


  
}

function DESENHARvitoria() {
  ctx.drawImage(vitoria, 0, 0, canvas.width, canvas.height)
}

document.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    jogoPausado = !jogoPausado; // Alterna entre pausado e despausado
    // if (!jogoPausado) {
    //   ATUALIZAR();  // Reinicia o loop de animação quando despausar
    // }
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === "ArrowRight") {
    movendoDireita = false;
  } else if (event.key === "ArrowLeft") {
    movendoEsquerda = false;
  } else if (event.key === "ArrowDown") {
    deslizando = false;
    deslizandoAnimationActive = false;
  }
});


// ----------------------
// ----------------------
// ----------------------
// ----------------------


document
.addEventListener('click', iniciarMusica);
document.addEventListener('keydown', iniciarMusica);

// if (velocidadeX >  0) {
//   passos.play();
// }


function iniciarMusica() {
  audioTeste.play().catch(function(error) {
      console.log("Erro ao tentar tocar a música: ", error);
  });
}



function limparCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animacaoParado() {
  frameY = 0; // Linha 1 da spritesheet (parado)
  contadorAnimacaoParado++;

  if (contadorAnimacaoParado >= frequenciaPiscada) {
    frameX = (frameX + 1) % qtdFramesAnimacaoParado; // Alterna entre os dois frames parados
    contadorAnimacaoParado = 0;
  }
}

function animacaoAndar() {
  frameY = 1; // Linha 2 da spritesheet (andar)
  frameCount++;

  if (frameCount >= fps) {
    frameX = (frameX + 1) % 4; // Alterna entre os frames de andar
    frameCount = 0;
      }
}

function animacaoPulo() {
  frameY = 2; // Linha 3 da spritesheet (pulo)
  frameX = 0; // Frame de pulo estático
}

function animacaoDeslizar() {
  if (deslizandoAnimationActive) { 
    frameY = 3; // Linha 4 da spritesheet (deslizar)
    
    // Se estamos deslizando, fixa no último frame de deslizar
    frameX = 3; // Define o frameX para o último frame da animação de deslizar

    xPersonagem++
    xPersonagem++
  } else {
    // Coloque aqui a lógica para animação em pé se necessário
    frameX = 0; // Volta para a posição inicial ao parar de deslizar
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowRight") {
    movendoDireita = true;
  } else if (event.key === "ArrowLeft") {
    movendoEsquerda = true;
  } else if (event.key === "ArrowUp" && !pulando && !deslizando) {
    pulando = true;
    velocidadeY = velocidadePulo;

    if (movendoDireita) {
      velocidadeX = 5;  
    } else if (movendoEsquerda) {
      velocidadeX = -5;
    } else {
      velocidadeX = 0;
    }
  } else if (event.key === "ArrowDown" && !pulando) {
    deslizando = true;
    deslizandoAnimationActive = true; // Ativa a animação de deslizar
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === "ArrowRight") {
    movendoDireita = false;
  } else if (event.key === "ArrowLeft") {
    movendoEsquerda = false;
  } else if (event.key === "ArrowDown") {
    deslizando = false; // Para de deslizar quando a tecla for solta
    deslizandoAnimationActive = false; // Desativa a animação de deslizar
    frameX = 0; // Volta o personagem para a posição em pé
  }
});


ATUALIZAR();