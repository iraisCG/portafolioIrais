let app = document.getElementById('typewriter');



let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  
  .pauseFor(2500)
  .typeString('<span class="typewriter"> Diseñadora gráfica y programadora frontend Jr </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();



