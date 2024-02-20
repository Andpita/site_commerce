export const dataModify = (data: string) => {
  const dataN = data.split(' ');
  const DataFinal = `${dataN[2]}/${dataMouth(dataN[1])}/${dataN[3]}`;
  return DataFinal;
};

export const hourModify = (data: string) => {
  const dataN = data.split(' ');
  const horaFinal = `${dataN[4]}`;
  return horaFinal;
};

export const dataMouth = (mouth: string) => {
  switch (mouth) {
    case 'Jan':
      return '01';
    case 'Feb':
      return '02';
    case 'Mar':
      return '03';
    case 'Apr':
      return '04';
    case 'May':
      return '05';
    case 'June':
      return '06';
    case 'Jul':
      return '07';
    case 'Aug':
      return '08';
    case 'Sept':
      return '09';
    case 'Oct':
      return '10';
    case 'Nov':
      return '11';
    case 'Dec':
      return '12';

    default:
      return '??';
  }
};
