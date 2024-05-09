import dayjs from 'dayjs';

export const getUuid = () => {
  return (
    dayjs().format('YYYYMMDDHHmmss') +
    pad(Math.floor(Math.random() * 1000000), 6)
  );
};

const pad = (number: number, targetLength: number) => {
  let result = number + '';
  while (result.length < targetLength) {
    result = '0' + result;
  }
  return result;
};
