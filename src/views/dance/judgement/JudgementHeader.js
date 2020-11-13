import React, { useEffect } from 'react';
import Sketch from 'react-p5';
import { colorData } from '../../../theme/color';
import { DeskTopWidth } from 'theme/width';

let P5;
let system;

const effectData = [
  {
    color: [169, 169, 169],
    vectorSize: 2,
    number: 20,
    text: 'Bad',
  },
  {
    color: [0, 255, 0],
    vectorSize: 3,
    number: 30,
    text: 'Good',
  },
  {
    color: [255, 204, 0],
    vectorSize: 5,
    number: 50,
    text: 'Perfect!',
  },
];

//effect state variables
let { color, vectorSize, number, text } = effectData[0];

let text_size = 48;
let fade = 255;
let fadeAmount = 1;

// A simple Particle class
let Particle = function (position) {
  this.acceleration = P5.createVector(0, 0.1);
  this.velocity = P5.createVector(
    random(-1 * vectorSize, vectorSize),
    random(-1 * vectorSize, vectorSize),
  );
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

  P5.fill(P5.color(color), this.lifespan);
  P5.ellipse(this.position.x, this.position.y, 8, 8);
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
  p5.createCanvas(1000, 100).parent(canvasParentRef);
  P5 = p5;
  P5.textAlign(P5.CENTER, P5.CENTER);
  system = new ParticleSystem(P5.createVector(P5.width / 2, 60));
};

const draw = (p5) => {
  p5.background(0);
  p5.fill(color[0], color[1], color[2], fade);

  p5.text(text, p5.width / 2, 60);

  if (text_size < 56) {
    text_size += 4;
  } else {
    fadeAmount = -2;
    fade += fadeAmount;
  }

  p5.textSize(text_size);

  system.run();
};

const addParticles = () => {
  for (var i = 0; i < number; i++) {
    system.addParticle();
  }
};

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const JudgementHeader = (props) => {
  useEffect(() => {
    color = effectData[props.grade].color;
    vectorSize = effectData[props.grade].vectorSize;
    number = effectData[props.grade].number;
    text = effectData[props.grade].text;

    setTimeout(() => {
      addParticles();
      fade = 255;
      text_size = 24;
    }, 200);
  }, [props.grade]);

  return <Sketch setup={setup} draw={draw} />;
};

export default JudgementHeader;
