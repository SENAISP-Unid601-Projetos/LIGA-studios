let larguraPersonagem = 180;
let alturaPersonagem = 300;


let hidrante = new Image();
hidrante.src = 'IMG/hidrante.png'
const xHidrante = 8200;
const yHidrante = 425;
const larguraHidrante = 100;
const alturaHidrante = 200;
hidrante.onload = function() {
  ATUALIZAR();  // Iniciar a função de atualização após o carregamento da imagem
}

let antena = new Image();
antena.src = 'IMG/antena.png'
const xAntena = 9250;
const yAntena = -250;
const larguraAntena = 200;
const alturaAntena = 250; 
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


let posteB = new Image();
posteB.src = 'IMG/poste.png'
const xPosteB = 6970;
const yPosteB = -460;
const larguraPosteB = 400;
const alturaPosteB = 1400; 
const realLarguraPosteB = 300;

let barracao = new Image();
barracao.src = 'IMG/barracao2.png'
const xBarracao = 7300;
const xPeBarracao = 7340;
const yBarracao = -220;
const larguraBarracao = 1700;
const larguraRealBarracao = 1500
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
const xAndaime = 2460;
const yAndaime = -275 ;
const yRealAndaime = -150;
const larguraAndaime = 900;
const realLarguraAndaime = 750;
const alturaAndaime = 900;

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

let xGuindasteReal = 1450;
let yGuindasteReal = -90;
let larguraGuindasteReal = 500;
let alturaGuindasteReal = 20;

let semaforo = new Image();
semaforo.src = 'IMG/semáforo.png';
const xSemaforo = 5500;
const ySemaforo = -620;
const larguraSemaforo = 700;
const alturaSemaforo = 950;

const xRealSemaforo = 5800;
const yRealSemaforo = -615;
const larguraRealSemaforo = 100;
const alturaRealSemaforo = 200;

const xPeSemaforo = 5837
const yPeSemaforo = -25
const larguraPeSemaforo = 27
const alturaPeSemaforo = 645

let cameras = new Image();
cameras.src = 'IMG/cameras2.png';
const xCamera = 6340;
const xRealCamera = 6500;
const yCamera = -300;
const larguraCamera = 400;
const alturaCamera = 1075;

let lampada = new Image();
lampada.src = 'IMG/lampada.png';
const xLampada = 10000;
const yLampada = 250;
const larguraLampada = 200;
const alturaLampada = 200;

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

let escada = new Image();
escada.src = 'IMG/escada.png';
const xEscada = 1400;
const yEscada = -40;
const larguraEscada = 165;
const alturaEscada = 550;

const xArmario = 9900
const yArmario = -50
const larguraArmario = 210
const alturaArmario = 300

const xAbajur = 9305
const yAbajur = -350
const larguraAbajur = 70
const alturaAbajur = 210

let derrota = new Image();
derrota.src = 'IMG/gameOver.png';









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
let xPersonagem = 1405;  
let yPersonagem = -410;













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

    
  // escada pra ele
  if (xPersonagem <= 1334
    && xPersonagem >= 1200
    && yPersonagem <= 340
    && yPersonagem >= -400
  ) {
    yPersonagem--
  }
  
  
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
    if (xPersonagem >= 1960 
      && xPersonagem <= 1980
      && yPersonagem <= -410
      && yPersonagem >= -415
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 1190 && yPersonagem <= -410){
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
    if (xPersonagem >= 3250 
      && xPersonagem <= 3270
      && yPersonagem <= -455
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
      && xPersonagem < xHidrante + larguraHidrante
      && yPersonagem + 320 >= yHidrante
      && velocidadeY > 0)
      {
        
        yPersonagem = yHidrante - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 350 && yPersonagem == 175){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 224 && yPersonagem == 175){
      pulando = true;
      velocidadeX = -2
      velocidadeY = 10;
    }
}
function COLISAOAntena() {
  //COLISÃO LATERAL ESQUERDA
  if (xPersonagem + 210 >= xAntena
    && xPersonagem <= xAntena - 150
    && yPersonagem + 300 >= yAntena) 
    {
    xPersonagem = xAntena - 180; 
    }

    //COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xAntena
      && xPersonagem < xAntena + larguraAntena
      && yPersonagem + 320 >= yAntena
      && velocidadeY > 0) 
      {
        
        yPersonagem = yAntena - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    //PARA CONSEGUIR DESCER
    if (xPersonagem >= 560 && yPersonagem == -20){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 370 && yPersonagem == -20){
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
      if (xPersonagem + 220 >= xPeSemaforo
        && xPersonagem <= xPeSemaforo - 150
        && yPersonagem + 290 >= yPeSemaforo)
        {
        xPersonagem = xPeSemaforo - 220; 
        }


        //COLISAO  CIMA
        if (xPersonagem + larguraPersonagem > xRealSemaforo
          && xPersonagem < xRealSemaforo 
          && yPersonagem + 320 >= yRealSemaforo
          && yPersonagem + 320 <= -60
          && velocidadeY > 0)
          {
            
            yPersonagem = yRealSemaforo - 320;
            velocidadeY = 0;  
            pulando = false; 
          }

        
        // PARA CONSEGUIR DESCER
        if (xPersonagem >= 5750 && yPersonagem <= -935
          && yPersonagem >= -935
        ){
          pulando = true;
          velocidadeX = 3;
        }
    
        if (xPersonagem <= 5580
          && yPersonagem == -935
          && pulando == false 
        ){
          pulando = true;
          velocidadeX = -3;    }
    }
function COLISAOcameras() {

  // COLISÃO LATERAL ESQUERDA
  if (xPersonagem + 220 >= xRealCamera
    && xPersonagem <= xRealCamera - 150
    && yPersonagem + 290 >= yCamera)
    {
    xPersonagem = xRealCamera - 220; 
    }


    //COLISAO  CIMA
    if (xPersonagem + larguraPersonagem > 6350
      && xPersonagem < 6550 
      && yPersonagem + 320 >= yCamera
      && yPersonagem + 320 <= -60
      && velocidadeY > 0)
      {
        
        yPersonagem = yCamera - 320;
        velocidadeY = 0;  
        pulando = false; 
      }

    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 6600 && yPersonagem <= -620
      && yPersonagem >= -620
    ){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 6165
      && yPersonagem == -620
      && pulando == false 
    ){
      pulando = true;
      velocidadeX = -3;    }


}
function COLISAOposteB() {
  
  // COLISÃO LATERAL ESQUERDA
  if (xPersonagem + larguraPersonagem >= xPosteB 
      && xPersonagem <= xPosteB - 150
      && yPersonagem + 300 >= yPosteB) 
      {
      xPersonagem = xPosteB - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPosteB
      && xPersonagem < xPosteB + 10
      && yPersonagem + 320 >= yPosteB
      && yPersonagem + 320 <= -300
      && velocidadeY > 0) 
      {
        
        yPersonagem = yPosteB - 325;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // // PARA CONSEGUIR DESCER
    if (xPersonagem >= 7165 && yPersonagem == -785){
      pulando = true;
      velocidadeX = 1;
    }

    if (xPersonagem <= 6790 && yPersonagem == -785
      && pulando == false
    ){
      pulando = true;
      velocidadeX = -3;
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
      && xPersonagem < xBarracao + larguraRealBarracao
      && yPersonagem + 320 >= yBarracao
      && yPersonagem + 320 <= -60
      && velocidadeY > 0)
      {
        
        yPersonagem = yBarracao - 320;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 8900 
      && xPersonagem <= 8930
      && yPersonagem <= -540
      && yPersonagem >= -555
    ){
      pulando = true;
      velocidadeX = 3;
    }

    // if (xPersonagem <= 2295
    //   && yPersonagem <= -455
    //   && pulando == false 
    // ){
    //   pulando = true;
    //   velocidadeX = -3;    }

    
}
function COLISAOmapaFase2(){
  // LATERAL ESQUERDA DO PRÉDIO
  if (xPersonagem + 180 >= xMapa2 
    && xPersonagem <= xMapa2 - 150
    && yPersonagem + 300 >= 230) 
    {
    xPersonagem = xMapa2 - 180; 
    }

    if (xPersonagem >= 8968 
      && xPersonagem <= 8988
      && yPersonagem <= -500) 
      {
      xPersonagem = 8968; 
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

  // barreira invisivel pra subir no andar do lado do rack e armario
  if (xPersonagem >= 10161
    && xPersonagem <= 10166
    && yPersonagem <= 200
    && yPersonagem >= -300
    // && yPersonagem > 20
          ) {
    xPersonagem = 10161
  }

  10053
  10275

  if (xPersonagem >= 10053
    && xPersonagem <= 10275
    && yPersonagem >= 0
  ) {
    pulando = false
    yPersonagem = 315
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
    && yPersonagem >= -400
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

  // chao governador
  if (xPersonagem >= 10950
    && yPersonagem >= -60
    && velocidadeY > 0
  ) {
    pulando = false
    yPersonagem = - 60
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

    // // PAREDE ESQUERDA 
    if (xPersonagem >= 9145) {
    if (xPersonagem <= 9150
      && yPersonagem >= -10
    ){
      xPersonagem = 9150
    }
  }

  if (xPersonagem <= 9150
    && xPersonagem >= 9130
    && yPersonagem <= -420
  ){
    xPersonagem = 9150
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
      &&yPersonagem <= -230
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

    if (
      yPersonagem >= -660
      && yPersonagem <= -600
      && velocidadeY > 0
      && xPersonagem <= 9240
      && xPersonagem >= 9180
    ) {
      yPersonagem = -660
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
      && xPersonagem >= 9260
      && yPersonagem >= -670
      && yPersonagem <= -650
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

    // if (
    //   yPersonagem > 1 - spriteHeight
    //   && xPersonagem > 8900 
    //   && xPersonagem < 9280 
    //   && yPersonagem >= -450 // estava -151
    //   &&yPersonagem <= 0
    //   && velocidadeY > 0
    // ) 
    // { 
    //   yPersonagem = 10 - spriteHeight;
    //   pulando = false; 
    //   velocidadeY = 0;
    //   velocidadeX = 0;          
    // }
    

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



function DESENHAR() {

  // LIMPAR CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);


if (xPersonagem >= 850 //"borda" esquerda do fogo
  && xPersonagem <= 2050  // borda "direita" do fogo
  && yPersonagem >= 200 // deixa assim pra todos, só se MUDAR A ALTURA QUE O FOGO ESTÁ POSICIONADO
  && coracao !== null) {
  coracao = null; 
  vidas = 0
}

if (xPersonagem >= 4525 //"borda" esquerda do fogo
  && xPersonagem <= 4750  // borda "direita" do fogo
  && yPersonagem >= -890 // deixa assim pra todos, só se MUDAR A ALTURA QUE O FOGO ESTÁ POSICIONADO
  && yPersonagem <= 0
  && coracao !== null) {
  
  coracao = null; 
  vidas = 0
}

// Verifica se o coração ainda deve ser desenhado
let desenharCoracao = coracao !== null;


  // TRANSLADA O CANVAS COM A CÂMERA
  ctx.save();
  ctx.translate(-deslocamentoCameraX, deslocamentoCameraY);

  //OBSTÁCULOS
  // (elemento, x, y, largura, altura)
//  ctx.drawImage(hidrante, xHidrante, yHidrante, larguraHidrante, alturaHidrante);
 ctx.drawImage(poste, xPoste, yPoste, larguraPoste, alturaPoste);
 ctx.drawImage(posteB, xPosteB, yPosteB, larguraPosteB, alturaPosteB);
 ctx.drawImage(cameras, xCamera, yCamera, larguraCamera, alturaCamera)
//  ctx.drawImage(antena, xAntena, yAntena, larguraAntena, alturaAntena);
//  ctx.drawImage(loja, xLoja, yLoja, larguraLoja, alturaLoja);
 ctx.drawImage(barracao, xBarracao, yBarracao, larguraBarracao, alturaBarracao);
 ctx.drawImage(predioLaranjAzul, xPredioLaranjAzul, yPredioLaranjAzul, larguraPredioLaranjAzul, alturaPredioLaranjAzul);
//  ctx.drawImage(predio2, xPredio2, yPredio2, larguraPredio2, alturaPredio2)
 ctx.drawImage(semaforo, xSemaforo, ySemaforo, larguraSemaforo, alturaSemaforo)
  // ctx.drawImage(predioFinal1, xPredioFinal1, yPredioFinal1, larguraPredioFinal1, alturaPredioFinal1);
  // ctx.drawImage(NpcLurdes, xNpcLurdes, yNpcLurdes, larguraNpcLurdes, alturaNpcLurdes);
  ctx.drawImage(NpcGoverndor, xNpcGovernador, yNpcGovernador, larguraNpcGovernador, alturaNpcGovernador)
  ctx.drawImage(escada, xEscada, yEscada, larguraEscada, alturaEscada)


  ctx.drawImage(lampada, xLampada, yLampada, larguraLampada, alturaLampada)

  // fogo perto do guindaste
  ctx.drawImage(fogo, 2000, 430, 200, 200);
  ctx.drawImage(fogo, 1840, 430, 200, 200);
  ctx.drawImage(fogo, 1680, 430, 200, 200);
  ctx.drawImage(fogo, 1520, 430, 200, 200);
  ctx.drawImage(fogo, 1340, 430, 200, 200);
  ctx.drawImage(fogo, 1180, 430, 200, 200);
  ctx.drawImage(fogo, 1020, 430, 200, 200);

  // fogo em cima do predio laranjazul
  ctx.drawImage(fogo, 4700, -770, 200, 200);


  //haste semáforo
  ctx.fillStyle = '#4d4d4d'
  ctx.fillRect(xPeSemaforo - 2, -335, 27, 1500)


  ctx.drawImage(guindaste, xGuindaste, yGuindaste, larguraGuindaste, alturaGuindaste);
  // ctx.drawImage(guindasteInvertido, xGuindasteInvertido, yGuindasteInvertido, larguraGuindasteInvertido, alturaGuindasteInvertido)
  ctx.drawImage (andaime, xAndaime, yAndaime, larguraAndaime, alturaAndaime)
  ctx.drawImage (mapaFase2, xMapa2, yMapa2, larguraMapa2, alturaMapa2)
  ctx.drawImage (rack2, xRack2, yRack2, larguraRack2, alturaRack2)
  ctx.drawImage (NpcGoverndor, xNpcGovernador, yNpcGovernador, larguraNpcGovernador, alturaNpcGovernador)

  // ctx.drawImage(lampada, xLampada, yLampada, larguraLampada, alturaLampada)

  // DICA ESCRITA NO BARRAÇÃO
  ctx.font = "30px VT323";
  ctx.fillStyle = "black";
  ctx.fillText(`DICA: ENTRE PELO SEGUNDO ANDAR!`, 8130, -170);


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



  // REFERENCIAS ESCADA
  // de baixo pra cima
  // ctx.fillStyle = 'white';
  // ctx.fillRect(4695, 470, 25, 20); 

  // ctx.fillStyle = 'white';
  // ctx.fillRect(4665, 450, 25, 20); 
  
  // ctx.fillStyle = 'white';
  // ctx.fillRect(4635, 430, 25, 20); 
  
  // ctx.fillStyle = 'white';
  // ctx.fillRect(4605, 410, 25, 20); 

  // ctx.fillStyle = 'red';
  // ctx.fillRect(4575, 390, 25, 20); 

  // ctx.fillStyle = 'black';
  // ctx.fillRect(4545, 370, 25, 20); 

  // ctx.fillStyle = 'black';
  // ctx.fillRect(4515, 350, 25, 20); 

  // ctx.fillStyle = 'white';
  // ctx.fillRect(4485, 330, 25, 20); 

  // ctx.fillStyle = 'white';
  // ctx.fillRect(4455, 310, 25, 20); 

  // ctx.fillStyle = 'blue';
  // ctx.fillRect(xPersonagem + 160, 385, 25, 20); 
  


  // LURDES SENHORINHA
  // ctx.drawImage(NpcLurdes, xNpcLurdes, yNpcLurdes, larguraNpcLurdes, alturaNpcLurdes);

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
  ctx.fillText(`2`, 1450, 40);

  if (desenharCoracao) {
    ctx.drawImage(coracao, 130, 70, 50, 40);
}
  ctx.drawImage(coracao2, 70, 70, 50, 40);
  ctx.drawImage(coracao3, 10, 70, 50, 40);




}






function ATUALIZAR() {

  limparCanvas();
  // COLISAOHidrante();
  // COLISAOAntena();
  // COLISAOLoja();
  // // COLISAOpredioFinal();
  // COLISAOpredioFinalPT2();
  COLISAOguindaste();
  COLISAOandaime(); 
  COLISAOposteFase2();
  COLISAOpredioLaranjAzulFase2();
  COLISAOsemaforo();
  COLISAOcameras();
    COLISAOposteB();
  COLISAObarracao();
  //barracao dando problema na colisao de cima do armario

  if (xPersonagem <= 10000) {
    gravidade = 0.4
  }

  COLISAOmapaFase2()




    console.log("X  == ", xPersonagem)
    console.log("Y == ", yPersonagem)
  // console.log("vidas = ", vidas)

  // if
  //  (jogoPausado) {
  //   DESENHARderrotas(); // Desenha a mensagem de pausa
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

 if (xPersonagem >= 10500
  && yPersonagem == -60
){
  window.location.href = "fase3.html";
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

let tempoRestante = 70; // Tempo inicial em segundos
let intervalo = 1000; // Intervalo de 1 segundo

var audioTeste = new Audio('AUDIO/trilha-sonora.mp3');
audioTeste.loop = true; // Para que a música toque em loop
audioTeste.volume = 0.2;

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

// document.addEventListener('keydown', function(event) {
//   if (event.key === "Enter") {
//     jogoPausado = !jogoPausado; // Alterna entre pausado e despausado
//     if (!jogoPausado) {
//       ATUALIZAR();  // Reinicia o loop de animação quando despausar
//     }
//   }
// });

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