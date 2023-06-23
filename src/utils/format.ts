export const formatPhone = (phone: string): string => {
  // const grupos = phone.match(/.{1,3}/g);
  // const cadenaUnida = grupos.join(' ');
  return phone.replace(/(.{3})/g, '$1 ');
};