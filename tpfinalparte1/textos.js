//texto y rectangulo
function mostrartexto(i) {
  fill(51 ,88, 46, 100);
  rect(20, 280, 580, 100,10);
  fill(255);
  textAlign(LEFT, TOP);
  text(frases[i], 40, 300, 560, 200);
}

function narrativa() {
  frases = [
    'ALUMNAS: CARDOZO MICAELA. KAREN QUEVEDO. MATERIA: PROGRAMACIÓN PMIW COM 1, AÑO 2025. PROFESOR: JOSÉ LUIS BUGIOLACHI.',
    'Venus es un planeta en el cual siempre llueve, excepto una vez cada 7 años por un par de horas. Este se encuentra habitado por colonias humanas',
    'Margot y los demás niños colonos escuchan a los adultos hablando del día que el sol va a salir',
    'Los niños empiezan a hablar de lo que se imaginan del sol.',
    'Los niños siguen hablando del sol y Margot no les cuenta de cuando vivió en la tierra',
    'El día que sale el sol, Margot y los niños van a jugar todos juntos',
    'Los demás niños se sienten desconfiados y celosos porque Margot sí conoce el sol',
    'Los niños excluyen a Margot',
    'El día que sale el sol los niños encierran a Margot para que no lo vea',
    'Margot disfruta el sol sola, viéndolo y recordando su vida en la Tierra',
    'Al no querer volver con los demás niños, escapa de la colonia',
    'Los niños tristes integran a Margot y hacen planes para ver el sol en 7 años',
    '7 años después ya adolescentes comparten ese día con mucha felicidad en compañía de Margot',
    'Los niños empiezan a jugar felices bajo el sol olvidándose de Margot',
    'Cuando vuelve la lluvia, recuerdan lo que hicieron y se arrepienten',
    'Liberan a Margot que está muy triste por no haber podido ver el sol',
    'Pero, a pesar de la crueldad de los niños, Margot logra ver el sol que volvió a salir.'
  ];
}
