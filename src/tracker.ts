const Tracker = (params: any) => {
  const { collectorUrl, siteId } = params;

  const sendRequest = (data: any) => {
    console.log('send request data', data);
    console.log('send request with params ', params);
  };

  const trackSession = () => {
    console.log('start track session');
  };

  const trackPageView = () => {
    console.log('track page view');
  };

  const trackCustomEvent = () => {
    console.log('track custom event');
  };

  return {
    trackPageView,
    trackCustomEvent,
    trackSession,
  };
};

export default Tracker;
