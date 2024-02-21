export const cpfMask = (cpf: string | undefined) => {
  if (!cpf) {
    return '000.000.000-00';
  }

  if (cpf.length !== 11) {
    return cpf;
  }
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};
