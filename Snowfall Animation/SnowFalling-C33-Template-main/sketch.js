const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var world;
var snowFlakes,snow

function preload() {
  bg = loadImage("snow3.jpg");
  snowFlakes = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  
  snow = new Snow(400,5,30,50)
 
 }

function draw() {
  background(bg);  
  drawSprites();
  snow.display();
}

























