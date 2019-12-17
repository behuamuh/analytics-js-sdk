import { win } from 'alias';
import getQilinUttu from './qilinUttu';

if (win.quNamespace && win.quNamespace.length > 0) {
  const holderName = win.quNamespace.shift();
  let holder = win[holderName];
  // queue.q = new QilinUttu(queue.q, queueName);
  const queue = holder.q || [];

  // UNDONE
  const tracker = getQilinUttu();

  const commands: any = {
    'init': tracker.init,
  };

  holder = function (...args: any) {
    const methodName = args.shift();
    commands[methodName].apply(tracker, args);
  };

  // process existing queue
  queue.forEach((i: IArguments) => {
    holder.apply(tracker, i);
  });
}
