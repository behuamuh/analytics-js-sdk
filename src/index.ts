import { win } from 'alias';
import QilinUttu from './qilinUttu';

if (win.quNamespace && win.quNamespace.length > 0) {
  const holderName = win.quNamespace.shift();
  const holder = win[holderName];

  holder.q = QilinUttu(holder.q);
}
