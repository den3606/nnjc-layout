import '/src/styles/style.css';
import '/src/styles/battle.css';
import 'normalize.css';
import { setupScore } from './score';
import { setupPlayerName } from './name';
import { setupPlayerComment } from './comment';

setupPlayerName();
setupPlayerComment();
setupScore();
