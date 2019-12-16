import { win } from 'alias';

const getQilinUttu = () => {
  const init = () => {
    console.log('init qilin uttu');
    console.log(win.QILIN_UTTU_APP_KEY);
    console.log(win.QILIN_UTTU_API_URL);
  };

  return {
    init,
  };
};

export default getQilinUttu();
