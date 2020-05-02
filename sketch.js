let tabela; 

let linha; 
let coluna;
let ON1;
let OFF1;
let rectx;
let recty;
let add;

// posição x dos países
let xa; // posição x de a = portugal
let xb; // posição x de b = espanha
let xc; // ...
let xd;
let xe;
let xf;
let xg;
let xh;
let xi;
let xj;
let xk;

// posição y dos meses
let yj; // posição y de janeiro
let yf; // ...
let ym;
let ya;

let mes; //'mes'; 
let portugal;//
let espanha;
let franca;
let italia;
let alemanha;
let reino_unido;
let russia;
let e_u_a;
let coreia_sul;
let japao;
let china;
let titulo13;
let janeiro;
let fevereiro;
let marco;
let abril;

let aj; // a= portugal, j = janeiro
let af; //  
let am;
let ab;
let b;
let pt;
let dias;
let paises;

// Protugal a
// Espanha b
// França c
// Itália d
// Alemanha e
// Reino Unido f
// Rússia g
// EUA h
// Coreia do Sul i
// Japão j
// China k
// Todos l

function preload () {
  
tabela = loadTable ("covid.csv");
}
                   
function setup() {
  createCanvas(1200, 700);

   linha = 0;
  coluna = 0;
  add = 1;
  
  print (tabela.getRowCount ());
  print (tabela.getColumnCount ());
  
  

  
}

function draw() {
  background(255);

  
let mes = 'mes'; 
 text (mes, 20, 50);
let portugal = 'portugal';
      xa = 100;
      text (portugal, xa, 50);
let espanha = 'espanha';
      xb = 200;
      text (espanha, xb, 50);
let franca = 'franca';
       xc = 300;
      text (franca, xc, 50);
let italia = 'italia';
     xd = 400;
      text (italia, xd, 50);
let alemanha = 'alemanha';
     xe = 490;
      text (alemanha, xe, 50);
let reino_unido = 'reino_unido';
        xf = 600;
      text (reino_unido, xf, 50);
let russia = 'russia';
         xg = 700;
      text (russia, xg, 50);
let e_u_a = 'e_u_a';
       xh = 800;
      text (e_u_a, xh, 50);
let coreia_sul = 'coreia_sul';
         xi = 880;
      text (coreia_sul, xi, 50);
let japao = 'japao';
       xj = 1000;
      text (japao, xj, 50);
let china = 'china';
         xk = 1090;
      text (china, xk, 50);
      
let titulo13 = 'titulo13';
let janeiro = 'janeiro';
      yj = 100;
      text (janeiro, 10, yj);
let fevereiro = 'fevereiro';
          yf = 140;
      text (fevereiro, 10, yf);
let marco = 'marco';
             ym = 180;
      text (marco, 10, ym);
let abril= 'abril';
           ya = 220;
      text (abril, 10, ya);

let aj; // a= portugal, j = janeiro
let af; //  
let am;
let ab;
let b;
let pt;
let dias;
let paises;
  
    noStroke (); 
      fill (204, 102, 0);
      rect ((xa + 25), (yj - 5), 10, 10);
 
     noStroke ();
      fill (204, 100, 0);
      rect ((xb + 25), (yj - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xc + 22), (yj - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xd + 18), (yj - 5), 10, 10);
 
     noStroke ();
      fill (204, 102, 0);
  rect ((xe + 28), (yj - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xf + 32), (yj - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xg + 22), (yj - 5), 10, 10);

     noStroke ();
      fill (204, 102, 0);
  rect ((xh + 18), (yj - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xi + 38), (yj - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xj + 20), (yj - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xk + 23), (yj - 5), 10, 10);
 
  
  // círculos para o mês de fevereiro
  
        noStroke (); 
      fill (204, 102, 0);
  rect ((xa + 25), (yf - 5), 10, 10);
 
     noStroke ();
      fill (204, 100, 0);
  rect ((xb + 25), (yf - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xc + 22), (yf - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xd + 18), (yf - 5), 10, 10);
 
     noStroke ();
      fill (204, 102, 0);
  rect ((xe + 28), (yf - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xf + 32), (yf - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xg + 22), (yf - 5), 10, 10);

     noStroke ();
      fill (204, 102, 0);
  rect ((xh + 18), (yf - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xi + 38), (yf - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xj + 20), (yf - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xk + 23), (yf - 5), 10, 10);
  
  //círculos para o mês de março
  
           noStroke (); 
      fill (204, 102, 0);
  rect ((xa + 25), (ym - 5), 10, 10);
 
     noStroke ();
      fill (204, 100, 0);
  rect ((xb + 25), (ym - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xc + 22), (ym - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xd + 18), (ym - 5), 10, 10);
 
     noStroke ();
      fill (204, 102, 0);
  rect ((xe + 28), (ym - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xf + 32), (ym - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xg + 22), (ym - 5), 10, 10);

     noStroke ();
      fill (204, 102, 0);
  rect ((xh + 18), (ym - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xi + 38), (ym - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xj + 20), (ym - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xk + 23), (ym - 5), 10, 10);
  
  // círculo para o mês de abril
     
          noStroke (); 
      fill (204, 102, 0);
  rect ((xa + 25), (ya - 5), 10, 10);
 
     noStroke ();
      fill (204, 100, 0);
  rect ((xb + 25), (ya - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xc + 22), (ya - 5), 10, 10);
  
      noStroke ();
      fill (204, 102, 0);
  rect ((xd + 18), (ya - 5), 10, 10);
 
     noStroke ();
      fill (204, 102, 0);
  rect ((xe + 28), (ya - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xf + 32), (ya - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xg + 22), (ya - 5), 10, 10);

     noStroke ();
      fill (204, 102, 0);
  rect ((xh + 18), (ya - 5), 10, 10);
  
     noStroke ();
      fill (204, 102, 0);
  rect ((xi + 38), (ya - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xj + 20), (ya - 5), 10, 10);
  
       noStroke ();
      fill (204, 102, 0);
  rect ((xk + 23), (ya - 5), 10, 10);
  
  // clear
  
  noStroke ();
  fill (204, 102, 0);
  rectx = xk + 18;
  recty = 280;
  rect (rectx, recty, 20, 20);
  
  
  
  if (ON1 === 1)
  {
    frameRate (1);
    

  linha =  linha + add;
  coluna = 0;

 
  if (linha === 10) {
    linha = linha - add; 
    frameRate (10);}
  
     
     let aj = ((tabela.getString (linha, 0)) + (" ") + (tabela.getNum (linha, 1)));
     text (aj, xa, 600);
     
     
     if (tabela.getNum (linha, 1) === 0) {
      rect (xa + 20, (tabela.getNum (linha, 1) + 550), 20, 1);
     }
     


     
  }
   if (ON1 === 2)
  {
    frameRate (1);
    

  linha =  linha + add;
  coluna = 0;

 
  if (linha === 39) {
    linha = linha - add; 
    frameRate (10);}
    
     
     let af = ((tabela.getString (linha, 0)) + (" ") + (tabela.getNum (linha, 1)));
     text (af, xa, 600);
     
     
     if (tabela.getNum (linha, 1) === 0) {
        rect (xa + 20, (tabela.getNum (linha, 1)+ 550), 20, 1);
     }
     
  }
  
     if (ON1 === 3)
  {
    frameRate (1);
    

  linha =  linha + add;
  coluna = 0;

 
  if (linha == 38 + 31) {
    linha = linha - add; 
    frameRate (10);}
    
     
     let am = ((tabela.getString (linha, 0)) + (" ") + (tabela.getNum (linha, 1)));
     text (am, xa, 600);
     
     
     if (tabela.getNum (linha, 1) === 0) {
        rect (xa + 20, (tabela.getNum (linha, 1)+ 550), 20, 1);
     }
     
     if (tabela.getNum (linha, 1) > 0) {
       let proporcao;
       proporcao = tabela.getNum (linha, 1);
      rect (xa + 20, log (proporcao)* 20 * -1 + 550, 20, log (proporcao) * 20);
     }
  }
 
  
     if (ON1 === 4)
  {
    frameRate (1);
    

  linha =  linha + add;
  coluna = 0;

 
  if (linha ===  tabela.getRowCount ()) {
    linha = linha - add; 
    frameRate (10);}
    
     
     let ab = ((tabela.getString (linha, 0)) + (" ") + (tabela.getNum (linha, 1)));
     text (ab, xa, 600);
     
     
         
     if (tabela.getNum (linha, 1) > 0) {
       let proporcao;
       proporcao = tabela.getNum (linha, 1);
      rect (xa + 20, log (proporcao)* 20 * -1 + 550, 20, log (proporcao) * 20);
     }
  
  }
  

  
}


function mouseClicked () {
  if (
  (mouseX > (xa + 25)) &&
  (mouseX < (xa + 25 + 10)) &&
  (mouseY > (yj - 5)) &&
  (mouseY < (yj - 5 + 10)) === true)
  {
    ON1= 1;
    linha = 0;

}

if (
  (mouseX > (xa + 25)) &&
  (mouseX < (xa + 25 + 10)) &&
  (mouseY > (yf - 5)) &&
  (mouseY < (yf - 5 + 10)) === true)
  {
    ON1= 2;
    linha = 9;
  }



if (
  (mouseX > (xa + 25)) &&
  (mouseX < (xa + 25 + 10)) &&
  (mouseY > (ym - 5)) &&
  (mouseY < (ym - 5 + 10)) === true)
  {
    ON1= 3;
    linha = 38;
  }
  
  if (
  (mouseX > (xa + 25)) &&
  (mouseX < (xa + 25 + 10)) &&
  (mouseY > (ya - 5)) &&
  (mouseY < (ya - 5 + 10)) === true)
  {
    ON1= 4;
    linha = 69;
  }
if (
  (mouseX > (rectx)) &&
  (mouseX < (rectx + 20)) &&
  (mouseY > (recty)) &&
  (mouseY < (recty + 20)) === true)
  {
    ON1 = 0;
    linha = 0;
}

}