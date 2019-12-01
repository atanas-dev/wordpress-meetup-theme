import 'regenerator-runtime';
import TextScramble from './text-scramble';
import '../styles/index.scss';

const scramble = async (nodes) => {
  for (let i = 0; i < nodes.length; i++) {
    const effect = new TextScramble(nodes[i]);

    await effect.setText(nodes[i].innerText);
  }
};

scramble(document.querySelectorAll('#wrapper a'));
