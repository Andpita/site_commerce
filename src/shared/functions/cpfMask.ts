export const cpfMask = (cpf: string) => {
  if (!cpf) {
    return '000.000.000-00';
  }
  const newCpf = cpf?.replace(/\D/g, '');

  if (newCpf.length !== 11) {
    return cpf;
  }

  return newCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};
