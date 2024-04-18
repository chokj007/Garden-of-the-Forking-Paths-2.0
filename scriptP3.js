
const paragraphs = [
    "I was going to the village of Ashgrove, but took a ticket for a station further on. The train would leave in a few minutes, at eight-fifty. I hurried, for the next would not go until half past nine. There was almost no one on the platform. I walked through the carriages. I remember some farmers, a woman dressed in mourning, a youth deep in Tacitus' Annals and a wounded, happy soldier.",
    "At last the train pulled out. A man I recognized ran furiously, but vainly, the length of the platform. It was Captain Richard Madden. Shattered, trembling, I huddled in the distant corner of the seat, as far as possible from the fearful window.",
    "From utter terror I passed into a state of almost abject happiness. I told myself that the duel had already started and that I had won the first encounter by besting my adversary in his first attack - even if it was only for forty minutes - by an accident of fate. I argued that so small a victory prefigured a total victory. I argued that it was not so trivial, that were it not for the precious accident of the train schedule, I would be in prison or dead. I argued, with no less sophism, that my timorous happiness was proof that I was man enough to bring this adventure to a successful conclusion. From my weakness I drew strength that never left me.",
    "I foresee that man will resign himself each day to new abominations, that soon only soldiers and bandits will be left. To them I offer this advice: Whosoever would undertake some atrocious enterprise should act as if it were already accomplished, should impose upon himself a future as irrevocable as the past.",
    "Thus I proceeded, while with the eyes of a man already dead, I contemplated the fluctuations of the day which would probably be my last, and watched the diffuse coming of night.",
    "The train crept along gently, amid ash trees. It slowed down and stopped, almost in the middle of a field. No one called the name of a station. 'Ashgrove?' I asked some children on the platform. 'Ashgrove,' they replied. I got out.",
    "A lamp lit the platform, but the children's faces remained in a shadow. One of them asked me: 'Are you going to Dr. Stephen Albert's house?' Without waiting for my answer, another said: 'The house is a good distance away but you won't get lost if you take the road to the left and bear to the left at every crossroad.' I threw them a coin (my last), went down some stone steps and started along a deserted road. At a slight incline, the road ran downhill. It was a plain dirt way, and overhead the branches of trees intermingled, while a round moon hung low in the sky as if to keep me company.",
    "For a moment I thought that Richard Madden might in some way have divined my desperate intent. At once I realized that this would be impossible. The advice about turning always to the left reminded me that such was the common formula for finding the central courtyard of certain labyrinths. I know something about labyrinths. Not for nothing am I the greatgrandson of Ts'ui Pen. He was Governor of Yunnan and gave up temporal power to write a novel with more characters than there are in the Hung Lou Meng, and to create a maze in which all men would lose themselves. He spent thirteen years on these oddly assorted tasks before he was assassinated by a stranger. His novel had no sense to it and nobody ever found his labyrinth.",
    "Under the trees of England I meditated on this lost and perhaps mythical labyrinth. I imagined it untouched and perfect on the secret summit of some mountain; I imagined it drowned under rice paddies or beneath the sea; I imagined it infinite, made not only of eight-sided pavilions and of twisting paths but also of rivers, provinces and kingdoms ... I thought of a maze of mazes, of a sinuous, ever growing maze which would take in both past and future and would somehow involve the stars.",
    "Lost in these imaginary illusions I forgot my destiny - that of the hunted. For an undetermined period of time I felt myself cut off from the world, an abstract spectator. The hazy and murmuring countryside, the moon, the decline of the evening, stirred within me. Going down the gently sloping road I could not feel fatigue. The evening was at once intimate and infinite.",
    "The road kept descending and branching off, through meadows misty in the twilight. A high-pitched and almost syllabic music kept coming and going, moving with the breeze, blurred by the leaves and by distance.",
    "I thought that a man might be an enemy of other men, of the differing moments of other men, but never an enemy of a country: not of fireflies, words, gardens, streams, or the West wind.",
    "Meditating thus I arrived at a high, rusty iron gate. Through the railings I could see an avenue bordered with poplar trees and also a kind of summer house or pavilion. Two things dawned on me at once, the first trivial and the second almost incredible: the music came from the pavilion and that music was Chinese. That was why I had accepted it fully, without paying it any attention. I do not remember whether there was a bell, a push-button, or whether I attracted attention by clapping my hands. The stuttering sparks of the music kept on.",
    "But from the end of the avenue, from the main house, a lantern approached; a lantern which alternately, from moment to moment, was crisscrossed or put out by the trunks of the trees; a paper lantern shaped like a drum and colored like the moon. A tall man carried it. I could not see his face for the light blinded me.",
    "He opened the gate and spoke slowly in my language.",
    "I see that the worthy Hsi P'eng has troubled himself to see to relieving my solitude. No doubt you want to see the garden?",
    "Recognizing the name of one of our consuls, I replied, somewhat taken aback.",
    "'The garden?'",
    "'The garden of forking paths.'",
    "Something stirred in my memory and I said, with incomprehensible assurance:",
    "'The garden of my ancestor, Ts'ui Pen.'",
    "'Your ancestor? Your illustrious ancestor? Come in.'"
  ];

  let currentIndex = 0;

  // Function to display current paragraph with random red letters
  function displayParagraph() {
    const paragraph = paragraphs[currentIndex];
    const textContainer = document.getElementById('text');
    const newParagraph = document.createElement('div');
    
    for (let i = 0; i < paragraph.length; i++) {
      const character = paragraph[i];
      const span = document.createElement('span');

      if (Math.random() < 0.03 && character !== " ") {
        span.classList.add('red');
      }

      span.textContent = character;
      newParagraph.appendChild(span);
    }

    textContainer.appendChild(newParagraph);
  }

  // Function to check input
  function checkInput() {
    const input = document.getElementById('input').value.toLowerCase();
    let correct = true;
    const redLetters = document.querySelectorAll('.red');
    const redLettersText = Array.from(redLetters).map(letter => letter.textContent.toLowerCase()).join('');

    if (input !== redLettersText) {
      correct = false;
    }

    if (correct) {
      currentIndex++;
    } else {
      currentIndex += 2; 
    }

    if (currentIndex < paragraphs.length) {
      displayParagraph();
    } else {
      document.getElementById('text').innerText = "Congratulations! You've reached the end.";
      document.getElementById('input').style.display = 'none';
      document.querySelector('button').style.display = 'none';
      document.getElementById('nextButton').style.display = 'block';
    }
  }

  function goToNextPage() {
    window.location.href = 'Page4.html';
  }

  // Initial display
  displayParagraph();