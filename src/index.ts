import { win } from 'alias';
import getQilinUttu from './qilinUttu';

if (win.quNamespace && win.quNamespace.length > 0) {
  const holderName = win.quNamespace.shift();
  const holder = win[holderName];

  const qilinUttu = getQilinUttu();

  const applyFunc = (i: IArguments) => {
    const args = [].slice.call(i);
    const methodName = args.shift();

    if (methodName === 'init') {
      qilinUttu.init(args[0]);
    }

    if (methodName === 'trackPageView') {
      console.log('track page view');
    }

    if (methodName === 'trackSession') {
      console.log('track session');
    }

    if (methodName === 'trackCustomEvent') {
      console.log('track custom event');
    }

  };

  holder.q.forEach((i: IArguments) => applyFunc(i));

  holder.q = {
    push: applyFunc,
  };
}
