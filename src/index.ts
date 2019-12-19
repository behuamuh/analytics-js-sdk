import { windowAlias } from 'alias';

import QilinUttu from './qilinUttu';

if (windowAlias.quNamespace && windowAlias.quNamespace.length > 0) {
  const holderName = windowAlias.quNamespace.shift();
  const holder = windowAlias[holderName];

  holder.q = QilinUttu(holder.q);
}
