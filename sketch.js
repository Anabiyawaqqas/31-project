const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;


function preload() {
 
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(250,600,700,20)


    div1= new division (5,550,8,400)
    div2= new division (100,550,8,400)
    div3= new division (200,550,8,400)
    div4= new division (300,550,8,400)
    div5= new division (400,550,8,400)
    div6= new division (500,550,8,400)
    div7= new division (600,550,8,400)
   

    //level1

    ball1= new plinkos (50,50)
    ball2= new plinkos (100,50)
    ball3= new plinkos (150,50)
    ball4= new plinkos(200,50)
    ball5= new plinkos (250,50)
    ball6= new plinkos (300,50)
    ball7= new plinkos(350,50)
    ball8= new plinkos (400,50)
    ball9= new plinkos(450,50)
    ball10= new plinkos (500,50)
    ball11= new plinkos (250,50)
   
  //level2

 
  ball12= new plinkos (100,100)
  ball13= new plinkos (150,100)
  ball14= new plinkos (200,100)
  ball15= new plinkos (250,100)
  ball16= new plinkos (300,100)
  ball17= new plinkos(350,100)
  ball18= new plinkos (400,100)
  ball19= new plinkos(450,100)
  ball20= new plinkos (500,100)
  ball21= new plinkos (550,100)
  ball22= new plinkos (640,100)
  ball23= new plinkos (250,100)



  
    //level3

    ball24= new plinkos (50,150)
    ball25= new plinkos (100,150)
    ball26= new plinkos (150,150)
    ball27= new plinkos(200,150)
    ball28= new plinkos (250,150)
    ball29= new plinkos (300,150)
    ball30= new plinkos(350,150)
    ball31= new plinkos (400,150)
    ball32= new plinkos(450,150)
    ball33= new plinkos (500,150)
    ball34= new plinkos (250,150)
   


  //level4

 
  ball35= new plinkos (100,200)
  ball36= new plinkos (150,200)
  ball37= new plinkos (200,200)
  ball38= new plinkos (250,200)
  ball39= new plinkos (300,200)
  ball40= new plinkos(350,200)
  ball41= new plinkos (400,200)
  ball42= new plinkos(450,200)
  ball43= new plinkos (500,200)
  ball44= new plinkos (550,200)
  ball45= new plinkos (640,200)
  ball46= new plinkos (250,200)

  

}

function draw(){
    background("red");
    textSize(20)
    //text("Score : "+score,20,30);
    Engine.update(engine);

   
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  
    }


    
    ground1.display()
    div1.display()
    div2.display()
    div3.display()
    div4.display()
    div5.display()
    div6.display()
    div7.display()
    
  
    ball1 .display()
    ball2.display()
    ball3 .display()
    ball4.display()
    ball6 .display()
    ball7 .display()
    ball8 .display()
    ball9 .display()
    ball10 .display()
 ball11 .display()


  
 ball24 .display()
 ball25.display()
 ball26.display()
 ball27.display()
 ball28 .display()
 ball29 .display()
 ball30 .display()
 ball31.display()
 ball32 .display()
ball33 .display()
ball34 .display()



 ball22 .display()
 ball12.display()
 ball13 .display()
 ball14.display()
 ball16 .display()
 ball17 .display()
 ball18 .display()
 ball19 .display()
 ball20 .display()
 ball21 .display()
 ball23 .display()


 ball35 .display()
  ball36.display()
  ball37.display()
  ball38.display()
  ball39.display()
  ball40.display()
  ball41.display()
  ball42.display()
  ball43.display()
  ball44.display()
  ball45.display()
  ball46.display()
 

}






