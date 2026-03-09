const book001 = {
  id: 'book-001',
  title: 'La Familia Cuesta',
  coverImage: '/assets/images/book001/cover.png',
  coverColor: '#f5a623',
  ageRange: '8-12',
  economyTopic: 'ahorro y comercio',
  description: 'Acompaña a Chata y su familia en aventuras cotidianas donde aprenderás qué es la economía, el dinero y mucho más.',
  totalChapters: 1,
  chapters: [
    {
      id: 'ch-001-01',
      title: 'Capítulo 1: Una abuela genial',
      order: 1,
      coverImage: '/assets/images/book001/ch1_cover.png',
      estimatedMinutes: 10,
      sections: [
        {
          id: 'sec-story-01',
          type: 'story',
          title: 'La historia',
          content: {
            scenes: [
              {
                id: 'scene-001',
                backgroundImage: '/assets/images/book001/bg_colegio.png',
                character: '/assets/images/book001/char_chata.png',
                dialogue: [
                  {
                    characterName: 'Narrador',
                    text: 'El pueblo estaba tranquilo. Solo se oía el alegre canto de los pájaros y el graznido desagradable de un loro fastidioso.',
                    audioUrl: '/assets/audio/book001/ch1_s1_01.mp3',
                    duration: 4000
                  },
                  {
                    characterName: 'Narrador',
                    text: 'Acababa de terminar el primer día de cole y Chata se despidió de sus amigas con una sonrisa.',
                    audioUrl: '/assets/audio/book001/ch1_s1_02.mp3',
                    duration: 3500
                  },
                  {
                    characterName: 'Narrador',
                    text: 'Su profe de Ciencias Sociales les había hablado de Economía y, a pesar de que creía que iba a ser muy aburrida, a Chata le encantó.',
                    audioUrl: '/assets/audio/book001/ch1_s1_03.mp3',
                    duration: 4500
                  }
                ]
              },
              {
                id: 'scene-002',
                backgroundImage: '/assets/images/book001/bg_calle.png',
                character: '/assets/images/book001/char_chata.png',
                dialogue: [
                  {
                    characterName: 'Chata',
                    text: '«Yo pensaba que iba de números y fórmulas matemáticas, pero qué va. Todo lo que nos rodea tiene que ver con la economía.»',
                    audioUrl: '/assets/audio/book001/ch1_s2_01.mp3',
                    duration: 5000
                  },
                  {
                    characterName: 'Chata',
                    text: '«Cuando venimos al médico yo no veo que mis padres le paguen... ¿quién paga a los médicos y a los enfermeros?»',
                    audioUrl: '/assets/audio/book001/ch1_s2_02.mp3',
                    duration: 4500
                  },
                  {
                    characterName: 'Chata',
                    text: '«La verdad es que sí, casi todo lo que nos rodea depende de la economía y del dinero.»',
                    audioUrl: '/assets/audio/book001/ch1_s2_03.mp3',
                    duration: 4000
                  }
                ]
              },
              {
                id: 'scene-003',
                backgroundImage: '/assets/images/book001/bg_calle.png',
                character: '/assets/images/book001/char_quisqui.png',
                dialogue: [
                  {
                    characterName: 'Narrador',
                    text: 'Chata iba tan concentrada en sus reflexiones que se dio un susto tremendo cuando un loro multicolor aterrizó de repente encima de su cabeza.',
                    audioUrl: '/assets/audio/book001/ch1_s3_01.mp3',
                    duration: 5000
                  },
                  {
                    characterName: 'Quisqui',
                    text: '— Grrr, Grrr, me parto, me parto.',
                    audioUrl: '/assets/audio/book001/ch1_s3_02.mp3',
                    duration: 2500
                  },
                  {
                    characterName: 'Chata',
                    text: '— ¿Por qué eres así, Quisqui? ¡Siempre estás haciendo lo mismo y molestando a la gente!',
                    audioUrl: '/assets/audio/book001/ch1_s3_03.mp3',
                    duration: 4000
                  }
                ]
              },
              {
                id: 'scene-004',
                backgroundImage: '/assets/images/book001/bg_calle.png',
                character: '/assets/images/book001/char_tacho.png',
                dialogue: [
                  {
                    characterName: 'Narrador',
                    text: 'Justo en ese momento apareció Tacho haciendo derrapar su bicicleta y llenándola de tierra, a ella y a Quisqui.',
                    audioUrl: '/assets/audio/book001/ch1_s4_01.mp3',
                    duration: 4000
                  },
                  {
                    characterName: 'Tacho',
                    text: '— Hermana, me voy a entrenar con el equipo. ¿Me puedes dejar un par de monedas para comprarme un bocata?',
                    audioUrl: '/assets/audio/book001/ch1_s4_02.mp3',
                    duration: 4500
                  },
                  {
                    characterName: 'Chata',
                    text: '— Tienes un morro que te lo pisas. ¡Me debes ya 12 monedas! Anda, toma, pero la semana que viene me devuelves todo sin falta.',
                    audioUrl: '/assets/audio/book001/ch1_s4_03.mp3',
                    duration: 5000
                  }
                ]
              },
              {
                id: 'scene-005',
                backgroundImage: '/assets/images/book001/bg_casa.png',
                character: '/assets/images/book001/char_abuela.png',
                dialogue: [
                  {
                    characterName: 'Narrador',
                    text: 'Cuando estaba llegando a su casa se encontró a la abuela Patro. Iba con una bolsa repleta de tomates, pimientos y espárragos trigueros.',
                    audioUrl: '/assets/audio/book001/ch1_s5_01.mp3',
                    duration: 5000
                  },
                  {
                    characterName: 'Chata',
                    text: '— Abuela, hoy he tenido la primera clase de economía de mi vida y me ha encantado. Pero... ¿cuándo se inventó el dinero? Antes de que existiera, ¿no había economía?',
                    audioUrl: '/assets/audio/book001/ch1_s5_02.mp3',
                    duration: 6000
                  },
                  {
                    characterName: 'Abuela Patro',
                    text: '— ¡Uy, Chata! La economía existe desde la prehistoria, mucho antes de que se inventara el dinero. Es como una rueda en la que todos participamos para que pueda seguir girando.',
                    audioUrl: '/assets/audio/book001/ch1_s5_03.mp3',
                    duration: 6500
                  },
                  {
                    characterName: 'Abuela Patro',
                    text: '— Vamos a sentarnos en la cocina, que te voy a contar una maravillosa aventura del pasado mientras merendamos.',
                    audioUrl: '/assets/audio/book001/ch1_s5_04.mp3',
                    duration: 4500
                  }
                ]
              },
              {
                id: 'scene-006',
                backgroundImage: '/assets/images/book001/bg_prehistoria.png',
                character: '/assets/images/book001/char_abuela.png',
                dialogue: [
                  {
                    characterName: 'Abuela Patro',
                    text: '— Todo empezó hace miles y miles de años en la Prehistoria. Los primeros hombres no sabían cultivar. Estaban siempre viajando detrás de los animales para cazarlos.',
                    audioUrl: '/assets/audio/book001/ch1_s6_01.mp3',
                    duration: 6000
                  },
                  {
                    characterName: 'Chata',
                    text: '— O sea que estaban todo el día buscando comida para sobrevivir, ¿no, abu?',
                    audioUrl: '/assets/audio/book001/ch1_s6_02.mp3',
                    duration: 3500
                  },
                  {
                    characterName: 'Abuela Patro',
                    text: '— Exacto. Los expertos la llaman economía de subsistencia. Más adelante aprendieron a cultivar plantas y domesticar animales. Apareció la agricultura y la ganadería.',
                    audioUrl: '/assets/audio/book001/ch1_s6_03.mp3',
                    duration: 6000
                  }
                ]
              },
              {
                id: 'scene-007',
                backgroundImage: '/assets/images/book001/bg_trueque.png',
                character: '/assets/images/book001/char_abuela.png',
                dialogue: [
                  {
                    characterName: 'Abuela Patro',
                    text: '— Gracias a eso aparecieron los primeros poblados y el comercio. Si una persona cultivaba manzanas y otra criaba gallinas, se intercambiaban. A ese intercambio se le llamó trueque.',
                    audioUrl: '/assets/audio/book001/ch1_s7_01.mp3',
                    duration: 6500
                  },
                  {
                    characterName: 'Chata',
                    text: '— ¡Es como Amazon, que nos trae cosas desde China y más allá!',
                    audioUrl: '/assets/audio/book001/ch1_s7_02.mp3',
                    duration: 3000
                  },
                  {
                    characterName: 'Abuela Patro',
                    text: '— Ja, ja, ja... El trueque estaba bien, pero los intercambios cada vez eran más complicados, así que se inventó el dinero para simplificar las cosas.',
                    audioUrl: '/assets/audio/book001/ch1_s7_03.mp3',
                    duration: 5500
                  }
                ]
              },
              {
                id: 'scene-008',
                backgroundImage: '/assets/images/book001/bg_casa.png',
                character: '/assets/images/book001/char_familia.png',
                dialogue: [
                  {
                    characterName: 'Abuela Patro',
                    text: '— Después del dinero se inventaron los bancos, los préstamos, los impuestos y muchas más cosas. Pero se nos ha echado el tiempo encima, hay que hacer la cena.',
                    audioUrl: '/assets/audio/book001/ch1_s8_01.mp3',
                    duration: 6000
                  },
                  {
                    characterName: 'Narrador',
                    text: 'Chata cerró los ojos, sonrió y poco a poco se durmió, con Quisqui posado a su lado, por una vez en silencio.',
                    audioUrl: '/assets/audio/book001/ch1_s8_02.mp3',
                    duration: 5000
                  }
                ]
              }
            ]
          }
        },
        {
          id: 'sec-game-01',
          type: 'game',
          title: '¿Qué has aprendido?',
          content: {
            gameType: 'quiz',
            config: {
              title: '¿Qué has aprendido con la abuela Patro?',
              coinsReward: 30,
              questions: [
                {
                  id: 'q1',
                  text: '¿Cómo describe la abuela Patro la economía?',
                  options: [
                    'Como una montaña muy alta',
                    'Como una rueda en la que todos participamos',
                    'Como un juego de cartas',
                    'Como una receta de cocina'
                  ],
                  correctIndex: 1,
                  feedbackCorrect: '¡Exacto! La economía es como una rueda en la que todos participamos.',
                  feedbackWrong: 'Recuerda lo que dijo la abuela Patro en la cocina...'
                },
                {
                  id: 'q2',
                  text: '¿Cómo se llama el intercambio de cosas sin usar dinero?',
                  options: ['Comercio', 'Trueque', 'Préstamo', 'Ahorro'],
                  correctIndex: 1,
                  feedbackCorrect: '¡Muy bien! El trueque es intercambiar cosas sin dinero.',
                  feedbackWrong: 'La abuela lo explicó con las manzanas y las gallinas... ¡se llama trueque!'
                },
                {
                  id: 'q3',
                  text: 'Tacho se quedó sin dinero porque...',
                  options: [
                    'Se lo robaron',
                    'Lo perdió en el parque',
                    'Se lo fue gastando poco a poco en cromos, bocatas y chuches',
                    'Lo prestó a Chata'
                  ],
                  correctIndex: 2,
                  feedbackCorrect: '¡Correcto! Por eso es tan importante ahorrar.',
                  feedbackWrong: 'Piénsalo bien... ¿qué le dijo Tacho a la abuela?'
                },
                {
                  id: 'q4',
                  text: '¿Qué es la economía de subsistencia?',
                  options: [
                    'Ahorrar mucho dinero',
                    'Vivir solo buscando comida para sobrevivir',
                    'Comprar en el supermercado',
                    'Trabajar en una fábrica'
                  ],
                  correctIndex: 1,
                  feedbackCorrect: '¡Perfecto! Así vivían los hombres prehistóricos.',
                  feedbackWrong: 'La abuela explicó que así vivían en la prehistoria, buscando comida cada día.'
                }
              ]
            }
          }
        },
        {
          id: 'sec-game-02',
          type: 'game',
          title: '¡Decide como Chata!',
          content: {
            gameType: 'decision',
            config: {
              title: '¡Decide como Chata!',
              coinsReward: 25,
              scenario: 'Tienes 10 monedas ahorradas. Tu bici se rompe y arreglarla cuesta 8 monedas. ¿Qué haces?',
              scenarioImage: '/assets/images/book001/decision_bici.png',
              options: [
                {
                  text: 'Gasto todas mis monedas en chuches y no arreglo la bici',
                  outcome: 'Como Tacho, te quedas sin bici y sin dinero. ¡A veces hay que pensar antes de gastar!',
                  coins: 0,
                  stars: 1,
                  emoji: '😅'
                },
                {
                  text: 'Uso 8 monedas para arreglar la bici y guardo 2',
                  outcome: '¡Genial! Arreglaste la bici y además guardaste 2 monedas. ¡Eso es ser responsable!',
                  coins: 15,
                  stars: 3,
                  emoji: '🌟'
                },
                {
                  text: 'No gasto nada y espero a que alguien me ayude',
                  outcome: 'A veces pedir ayuda está bien, pero los ahorros están para momentos como este.',
                  coins: 5,
                  stars: 2,
                  emoji: '😊'
                }
              ]
            }
          }
        }
      ]
    }
  ]
}

export default book001