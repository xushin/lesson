import Matter from 'matter-js'

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    showVelocity: true
});

// create two boxes and a ground
var boxA = Bodies.circle(400, 200, 32, 80);
var boxB = Bodies.rectangle(450, 50, 50, 80);
var boxC = Bodies.rectangle(500, 50, 21, 52)
var stage1 = Bodies.rectangle(520, 270, 700, 20, {isStatic: true})
var stage2 = Bodies.rectangle(0, 420, 700, 20, {isStatic: true})
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

Body.setAngularVelocity(boxA, -0.5)
Body.rotate(stage1, -0.12)
Body.rotate(stage2, 0.12)
// 重力を0にする
//engine.world.gravity.y = 1

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB,boxC, stage1, stage2, ground]);

setInterval(()=>{
    var c = Bodies.circle(470, 200, 32);
    World.add(engine.world, [c])
}, 1000)

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);