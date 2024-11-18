let larguraPersonagem = 180;
let alturaPersonagem = 300;


let hidrante = new Image();
hidrante.src = 'IMG/hidrante.png'
const xHidrante = 350;
const yHidrante = 495;
const larguraHidrante = 100;
const alturaHidrante = 125;
hidrante.onload = function() {
  ATUALIZAR();  // Iniciar a função de atualização após o carregamento da imagem
}

let antena = new Image();
antena.src = 'IMG/antena.png'
const xAntena = 550;
const yAntena = 300;
const larguraAntena = 200;
const alturaAntena = 350; 
antena.onload = function() {
  ATUALIZAR();  // Iniciar a função de atualização após o carregamento da imagem
}

let loja = new Image();
loja.src = 'IMG/loja.png'
const xLoja = 800;
const yLoja = 230;
const larguraLoja = 800;
const alturaLoja = 420; 



let poste = new Image();
poste.src = 'IMG/poste.png'
const xPoste = 1810;
const yPoste = 30;
const larguraPoste = 400;
const alturaPoste = 700; 

let barracao = new Image();
barracao.src = 'IMG/barracao.png'
const xBarracao = 2300;
const yBarracao = -220;
const larguraBarracao = 1400;
const alturaBarracao = 850; 

let predioLaranjAzul = new Image();
predioLaranjAzul.src = 'IMG/predio1.png'
const xPredioLaranjAzul = 2300;  
const yPredioLaranjAzul = -220;
const larguraPredioLaranjAzul = 1400;
const alturaPredioLaranjAzul = 850;

let predioFinal1 = new Image();
predioFinal1.src = 'IMG/mapaFinal1.jpg';
const xPredioFinal1 = 3800;
const yPredioFinal1 = -601;
const larguraPredioFinal1 = 2400;
const alturaPredioFinal1 = 1250;

let NpcLurdes = new Image();
NpcLurdes.src = 'IMG/lurdes.png';
const xNpcLurdes = 5900;
const yNpcLurdes = -560;
const larguraNpcLurdes = 300;
const alturaNpcLurdes = 300;



let fogo1 = new Image();
fogo1.src = 'IMG/fogo.png';

let fogo2 = new Image();
fogo2.src = 'IMG/fogo.png';

let fogo3 = new Image();
fogo3.src = 'IMG/fogo.png';

let fogo4 = new Image();
fogo4.src = 'IMG/fogo.png';


let coracao = new Image();
coracao.src = 'IMG/coracao.png';

let coracao2 = new Image();
coracao2.src = 'IMG/coracao.png';

let coracao3 = new Image();
coracao3.src = 'IMG/coracao.png';

let vidas = 3;

const fogos = [];

let derrota = new Image();
derrota.src = 'IMG/gameOver.png';

// > maior que
// < menor que
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
















let xPersonagem = 0;  
let yPersonagem = 315; 
















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function COLISAOpredioFinalPT2() {

  if (xPersonagem > 3990
    && xPersonagem < 4352
    && yPersonagem <= 220
    && yPersonagem >= 200
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

  //nao conseguir voltar dps que passou da escada
  if(
    xPersonagem >= 4640
    && xPersonagem <= 4645
    && yPersonagem == 315)
    {
      xPersonagem = 4645
    }

    // 2º ANDAR LADO DIREITO PISO
    if (
      yPersonagem > -225 - spriteHeight
      && yPersonagem < 300 // Ajuste o valor conforme necessário
      && xPersonagem > 5280
      && xPersonagem < 5300
      && yPersonagem >= -21
    ) 
    {
      yPersonagem = 400 - spriteHeight;
      pulando = false;
      velocidadeY = 0;
      velocidadeX = 0;
      
    }





    // 3º ANDAR DIREITO PISO
    if (
      yPersonagem > -225 - spriteHeight
      && yPersonagem < 0 // Ajuste o valor conforme necessário
      && xPersonagem > 5570
      && xPersonagem < 5580
      && yPersonagem >= -321
    ) 
    {
      yPersonagem = 65 - spriteHeight;
      pulando = false;
      velocidadeY = 0;
      velocidadeX = 0;
      
    }

    //cair da borda esquerda do 3ºandar do lado direito
  if(
    xPersonagem < 5545
    && yPersonagem == -320
  ) {
    pulando = true;
    velocidadeY = 2;
    velocidadeX = -2;
    yPersonagem --
  }

  // nao ultrapassar o piso 3º andar quando pular
  if (
    xPersonagem > 5560
    && yPersonagem > -320
    && yPersonagem < 0
  ) {
    yPersonagem = -320
    pulando = false;
  }

  //parede da direita do terceiro andar À do lado direito
  if(
    xPersonagem >= 5955
    && yPersonagem >= -900
  )
    {
      xPersonagem = 5955
    }
 


  
    // let xPersonagem = 5750;  
    // let yPersonagem = -621; 

    // ULTIMO ANDAR (SENHORINHA LURDES)
    if (
      yPersonagem > -225 - spriteHeight
      && yPersonagem < -400 // Ajuste o valor conforme necessário
      && xPersonagem > 5750
      && xPersonagem < 5755
      && yPersonagem >= -595
    ) 
    {
      yPersonagem = -230 - spriteHeight;
      pulando = false;
      velocidadeY = 0;
      velocidadeX = 0;
      
    }

   //cair da borda esquerda do ULTIMO andar do lado direito
  if(
    xPersonagem < 5720
    && yPersonagem == -615
  ) {
    pulando = true;
    velocidadeY = 2;
    velocidadeX = -2;
    yPersonagem --
  }

  // nao ultrapassar o piso do ultimo andar da senhorinha quando pular
  if (
    xPersonagem > 5720
    && yPersonagem > -615
    && yPersonagem < -610
  ) {
    yPersonagem = -615
    pulando = false;
  }







// nao ultrapassar o piso do 2º andar direito quando pular
    if (
      xPersonagem > 5280
      && yPersonagem > 15
      && yPersonagem < 20
    ) {
      yPersonagem = 15
      pulando = false;
    }

      // cair pela borda esquerda do 2º andar do lado direito
      if(
        xPersonagem < 5240
        && yPersonagem == 15
      ) {
        pulando = true;
        velocidadeY = 2;
        velocidadeX = -2;
        yPersonagem --
      }

      // ultima parede direita primeiro andar
      if(
        xPersonagem >= 5955 
        && yPersonagem == 315
      )
        {
          xPersonagem = 5955
        }

      //parede direita segundo andar da direita
      if(
        xPersonagem >= 5955
        && yPersonagem == 15
      )
        {
          xPersonagem = 5955
        }

      //teto segundo andar lado direito
      if (xPersonagem > 5545
        && yPersonagem <= -53
        && yPersonagem >= -78
      )
      {
        velocidadeY = 0.5
        xPersonagem = xPersonagem
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

      //teto terceiro andar lado direito
      if (xPersonagem > 5740
        && yPersonagem <= -390
        && yPersonagem >= -410
      )
      {
        velocidadeY = 0.5
        xPersonagem = xPersonagem
      }

}

function COLISAOHidrante() {

    

  
  
  // COLISÃO LATERAL ESQUERDA
    if (xPersonagem + larguraPersonagem >= xHidrante
      && xPersonagem <= 200
      && yPersonagem + 290 >= yHidrante) 
      {
      xPersonagem = xHidrante - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xHidrante
      && xPersonagem < 300
      && yPersonagem + 320 >= yHidrante
      && velocidadeY > 0)
      {

        yPersonagem = yHidrante -310;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 300 && yPersonagem == 185){
      pulando = true;
      velocidadeX = 3;
    }

    if (xPersonagem <= 164 && yPersonagem == 185){
      pulando = true;
      velocidadeX = -3
    }
}

function COLISAOAntena() {


  // COLISAO SUPERIOR
  if (xPersonagem >= 453
    && xPersonagem <= 531
    && yPersonagem >= -20
    && yPersonagem <= -15
    && velocidadeY > 0
  ) {
    pulando = false
    yPersonagem = -20
  }

  // DESCER ESQUERDA
  if (xPersonagem <= 453
    && xPersonagem >= 433
    && yPersonagem == -20
    && pulando == false
  ) {
    pulando = true
    velocidadeX = -3
  }

  // DESCER DIREITA
  if (xPersonagem >= 531
    && xPersonagem <= 561
    && yPersonagem == -20
    && pulando == false
  ) {
    pulando = true
    velocidadeX = 3
  }






  //COLISÃO LATERAL ESQUERDA
  // if (xPersonagem + 210 >= 550
  //   && xPersonagem <= 550 - 150
  //   && yPersonagem + 300 >= yAntena) 
  //   {
  //   xPersonagem = xAntena -180; 
  //   }

    //COLISÃO CIMA
    // if (xPersonagem + larguraPersonagem > xAntena
    //   && xPersonagem < xAntena + larguraAntena
    //   && yPersonagem + 320 >= 300
    //   && velocidadeY > 0) 
    //   {
        
    //     yPersonagem = yAntena -320;
    //     velocidadeY = 0;  
    //     pulando = false; 
    //   }
    
    //PARA CONSEGUIR DESCER
    // if (xPersonagem >= 560 && yPersonagem == -20){
    //   pulando = true;
    //   velocidadeX = 3;
    // }

    // if (xPersonagem <= 370 && yPersonagem == -20){
    //   pulando = true;
    //   velocidadeX = 3;
    // }
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
        
        yPersonagem = yLoja -320;
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

function COLISAOPoste() {
  
  // COLISÃO LATERAL ESQUERDA
  if (xPersonagem + larguraPersonagem >= xPoste 
      && xPersonagem <= xPoste - 150
      && yPersonagem + 300 >= yPoste) 
      {
      xPersonagem = xPoste - larguraPersonagem; 
      }

    // COLISÃO CIMA
    if (xPersonagem + larguraPersonagem > xPoste
      && xPersonagem < 1980
      && yPersonagem + 320 >= yPoste
      && yPersonagem <= 10
      && velocidadeY > 0) 
      {
        
        yPersonagem = yPoste - 325;
        velocidadeY = 0;  
        pulando = false; 
      }
    
    // PARA CONSEGUIR DESCER
    if (xPersonagem >= 1980 && yPersonagem == -295){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 1600 && yPersonagem == -295){
      pulando = true;
      velocidadeY = 10;
    }
}

function COLISAOPredioLaranjAzul() {
  
  // COLISAO LATERAL ESQUERDA
    if (xPersonagem + 180 >= xPredioLaranjAzul 
      && xPersonagem <= xPredioLaranjAzul - 150
      && yPersonagem + 0 >= -90) 
      {
      xPersonagem = xPredioLaranjAzul - 180; 
      }

  // COLISÃO CIMA:
    if (xPersonagem >= 2168
      && xPersonagem <= 3477
      && yPersonagem >= -540
      && yPersonagem <= -520
      && velocidadeY > 0) 
      {
        yPersonagem = -540
        pulando = false; 
      }
    
  // PARA CONSEGUIR DESCER
    if (xPersonagem + 180 >= 3650 && yPersonagem == -540){
      pulando = true;
      velocidadeY = 10;
    }

    if (xPersonagem <= 2160 && yPersonagem == -540){
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
    && yPersonagem <= -500 // Ajuste o valor conforme necessário
    && xPersonagem <= 4100
    && xPersonagem >= 3640
    && yPersonagem >= -521) 
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
    && xPersonagem < 4500
    // && yPersonagem >= -621
    // && yPersonagem < -600
    && yPersonagem == -610
  ) {
    pulando = true;
    velocidadeX = 2
  }

// 3º ANDAR - LADO ESQUERDO
 
    if(yPersonagem > -225 - spriteHeight
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
    && xPersonagem <= 4635
    && yPersonagem <= -325
  )
    {
      xPersonagem = 4615
    }


    // 1º ANDAR ESQUERDO

    //parede esquerda
    if(
      xPersonagem <= 3762
      && xPersonagem >= 3755
      && yPersonagem >= 0)
      {
        xPersonagem = 3762
      }

      //parede do meio
      //ir
      if(
        xPersonagem >= 4800
        && xPersonagem <= 4805
        && yPersonagem >=50
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
        // velocidadeX == 0
        // velocidadeY == 0

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







      
// ???














//------------------------------

// 3º ANDAR - LADO DIREITO

//   if (yPersonagem > -225 - spriteHeight
//   && yPersonagem + 180< -90   // Ajuste o valor conforme necessário
//   && xPersonagem > 5545
//   && xPersonagem < 5600
//   && yPersonagem >= -321) 
// {
//   // alert('colisao detectada')
//   yPersonagem = 75 - spriteHeight;
//   pulando = false;
//   velocidadeY = 0;
//   velocidadeX = 0;
  
// }

//       // cair pela borda esquerda
//       if(
//         xPersonagem < 5555
//         && yPersonagem == -310
//       ) {
//         pulando = true;
//         velocidadeY = 2;
//         velocidadeX = -2;
//         // yPersonagem --
//       }























































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
  
        

      






function DESENHAR() {

  // LIMPAR CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);



  // TRANSLADA O CANVAS COM A CÂMERA
  ctx.save();
  ctx.translate(-deslocamentoCameraX, deslocamentoCameraY);
  
  let queimando = false

  if (xPersonagem >= 200 //"borda" esquerda do fogo
    && xPersonagem <= 750  // borda "direita" do fogo
    && yPersonagem >= 200 // deixa assim pra todos, só se MUDAR A ALTURA QUE O FOGO ESTÁ POSICIONADO
    && queimando == false) {
    queimando = true; 
    vidas--
  }
  
  if (xPersonagem >= 4525 //"borda" esquerda do fogo
    && xPersonagem <= 4750  // borda "direita" do fogo
    && yPersonagem >= -890 // deixa assim pra todos, só se MUDAR A ALTURA QUE O FOGO ESTÁ POSICIONADO
    && yPersonagem <= 0
    && coracao == false) {
    queimando = true; 
    vidas--
  }

  // Verifica se o coração ainda deve ser desenhado
let desenharCoracao = coracao !== null;


  // OBSTÁCULOS
  // (elemento, x, y, largura, altura)
  ctx.drawImage(hidrante, xHidrante, 495, 100, 125);
  ctx.drawImage(antena, 550, 300, 200, 350);
  ctx.drawImage(loja, 800, 230, 800, 420);
  ctx.drawImage(poste, 1810, 30, 400, 700);
  // ctx.drawImage(barracao, 2300, -220, 1400, 850);
  ctx.drawImage(predioLaranjAzul, xPredioLaranjAzul, yPredioLaranjAzul, larguraPredioLaranjAzul, alturaPredioLaranjAzul);
  ctx.drawImage(predioFinal1, xPredioFinal1, yPredioFinal1, larguraPredioFinal1, alturaPredioFinal1);
  ctx.drawImage(NpcLurdes, xNpcLurdes, yNpcLurdes, larguraNpcLurdes, alturaNpcLurdes);
  ctx.drawImage(fogo1, 300, 530, 100, 100);
  ctx.drawImage(fogo2, 500, 530, 100, 100);
  ctx.drawImage(fogo2, 510, 530, 100, 100);
  ctx.drawImage(fogo3, 715, 530, 100, 100)
  ctx.drawImage(fogo3, 750, 530, 100, 100)

  fogos.push({x:300,y:530,width:100,height:100});
  fogos.push({x:500,y:530,width:100,height:100});
  fogos.push({x:510,y:530,width:100,height:100});
  fogos.push({x:715,y:530,width:100,height:100});
  fogos.push({x:750,y:530,width:100,height:100});

  // DICA ESCRITA NO PREDIO FINAL
  ctx.font = "35px VT323";
  ctx.fillStyle = "black";
  ctx.fillText(`DICA`, 4350, 160);
  ctx.fillText(`segure o botão de deslizar`, 4200, 200);
  ctx.fillText(`por 3 segundos`, 4290, 235);
  ctx.fillStyle = 'black';
  ctx.fillRect(4350, 166, 55, 3.5); 

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
  ctx.drawImage(NpcLurdes, xNpcLurdes, yNpcLurdes, larguraNpcLurdes, alturaNpcLurdes);

  // CALÇADA
  ctx.fillStyle = 'rgb(176,176,176)';
  ctx.fillRect(0, 620, 9500, 80); // Calçada (pode ajustar a largura conforme o cenário)

  // PERSONAGEM
  ctx.drawImage(spriteSheet, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, xPersonagem, yPersonagem, spriteWidth, spriteHeight);
  
  // COISAS FIXAS NA TELA
  ctx.restore();

  // ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  // ctx.fillRect(0, 0, canvas.width, canvas.height)

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
  ctx.fillText(`1`, 1450, 40);


  if (desenharCoracao) {
    ctx.drawImage(coracao, 10, 70, 50, 40);
}
  ctx.drawImage(coracao2, 70, 70, 50, 40);
  ctx.drawImage(coracao3, 130, 70, 50, 40);


}

function CheckCollisions(){

  fogos.forEach(fogo => {
    if(xPersonagem>fogo.x+fogo.width&&
      xPersonagem+larguraPersonagem<fogo.x&&
      yPersonagem>fogo.y+fogo.height&&
      yPersonagem+alturaPersonagem<fogo.y
    ){
      vidas--;
    }
  })
}


function ATUALIZAR() {


  limparCanvas();
  COLISAOHidrante();
  COLISAOAntena();
  COLISAOLoja();
  COLISAOPoste();
  COLISAOPredioLaranjAzul();
      COLISAOpredioFinal();
  COLISAOpredioFinalPT2();


// console.log("X personagem = ", xPersonagem)
// console.log("Y personagem = ", yPersonagem)
  console.log("vidas = ", vidas)

  // if
  //  (jogoPausado) {
  //   DESENHARMensagemPausa(); // Desenha a mensagem de pausa
  //   return; // Não continua atualizando o restante do jogo enquanto pausado
  // }

  

  if
  (tempoRestante == 0
    || vidas == 0
   
  ) {
   DESENHARderrotas(); // Desenha a mensagem de pausa
   botaoDerrota.style.display="block";
   botaoSair.style.display="block";
   audioTeste.pause();
   audioTeste.volume = 0.0


   return; // Não continua atualizando o restante do jogo enquanto pausado
 }


  if (xPersonagem >= 5900
    && yPersonagem == -615
  ){
    window.location.href = "fase2.html";
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

let gravidade = 0.4;
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

let tempoRestante = 80; // Tempo inicial em segundos
let intervalo = 1000; // Intervalo de 1 segundo

// var audioTeste = new Audio('AUDIO/audio3.mp3');
// audioTeste.loop = true; // Para que a música toque em loop

let jogoPausado = false; // Controle de pausa

let animationInterval; // Variável para armazenar o intervalo da animação
let isPaused = false;  // Variável para controlar o estado de pausa

let botaoDerrota = document.getElementById('botaoDerrota')
let botaoSair = document.getElementById('botaoSair')

var audioTeste = new Audio('AUDIO/trilha-sonora.mp3');
audioTeste.loop = true; // Para que a música toque em loop
audioTeste.volume = 0.2;

document
.addEventListener('click', iniciarMusica);
document.addEventListener('keydown', iniciarMusica);


function iniciarMusica() {
  audioTeste.play().catch(function(error) {
      console.log("Erro ao tentar tocar a música: ", error);
  });
}


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