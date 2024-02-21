export const cepMask = (cep: string | undefined) => {
  if (!cep) {
    return '00000-000';
  }

  return cep.replace(/(\d{5})(\d)/, '$1-$2');
};
