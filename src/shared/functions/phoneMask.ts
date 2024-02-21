export const phoneMask = (phone: string | undefined) => {
  if (!phone) {
    return '(00)00000000';
  }

  const noMask = phone.replace(/\D/g, '');
  const { length } = noMask;
  if (length <= 11) {
    return noMask
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
  }
  return phone;
};