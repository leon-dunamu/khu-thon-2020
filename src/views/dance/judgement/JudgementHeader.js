import React, { useEffect } from 'react';
import Sketch from 'react-p5';

let x = 50;
let P5;
const y = 50;
let system;

// A simple Particle class
let Particle = function (position) {
  this.acceleration = P5.createVector(0, 0.1);
  this.velocity = P5.createVector(random(-5, 5), random(-5, 5));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function () {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 8;
};

// Method to display
Particle.prototype.display = function () {
  P5.stroke(200, this.lifespan);
  P5.strokeWeight(2);
  P5.fill(255, 204, 0, this.lifespan);
  P5.ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  return this.lifespan < 0;
};

let ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function () {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

const setup = (p5, canvasParentRef) => {
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  p5.createCanvas(1480, 200).parent(canvasParentRef);
  P5 = p5;
  system = new ParticleSystem(
    P5.createVector(random(P5.width / 2, P5.width / 2 + 20), random(30, 50)),
  );
};

const draw = (p5) => {
  p5.background(0);
  system.run();
};

const addParticles = () => {
  for (var i = 0; i < 50; i++) {
    system.addParticle();
  }
};

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default (props) => {
  useEffect(() => {
    setTimeout(() => {
      addParticles();
    }, 100);
  }, [props.grade]);

  return <Sketch setup={setup} draw={draw} />;
};
