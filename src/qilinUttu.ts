import getTracker from './tracker';

const QilinUttu = (beforeInitQueue: any) => {
  let tracker: any;

  const callFunc = (i: IArguments) => {
    const args = [].slice.call(i);
    const methodName = args.shift();

    if (methodName === 'init') {
      tracker = getTracker(args[0]);
    }

    if (methodName === 'trackPageView') {
      tracker.trackPageView();
    }

    if (methodName === 'trackSession') {
      tracker.trackSession();
    }

    if (methodName === 'trackCustomEvent') {
      tracker.trackCustomEvent();
    }

  };

  beforeInitQueue.forEach((i: IArguments) => callFunc(i));

  beforeInitQueue = {
    push: callFunc,
  };
};

export default QilinUttu;
