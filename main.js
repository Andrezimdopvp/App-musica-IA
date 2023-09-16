som="";
function preload()
{
    som=loadSound("Me.mp3");
}
function setup()
{
    caixa=createCanvas(500,550);
    caixa.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,20,500,400);
}
function iniciar()
{
    som.play();
}