import { win } from 'alias';

const getQilinUttu = () => {
  const init = (params: any) => {
    console.log('init qilin uttu', params);
  };

  return {
    init,
  };
};

export default getQilinUttu;
