function currencyMask(value: string) {
  /* console.log(parseFloat(value).toFixed(2));
  return parseFloat(
    value
      .replace(/(.*){1}/, '0$1')
      .replace(/[^\d]/g, '')
      .replace(/(\d\d?)$/, '.$1'),
  ).toFixed(2); */
  value.replace('.', '').replace(',', '').replace(/\D/g, '');

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(value) / 100,
  );

  return `R$ ${result}`;
}

export { currencyMask };
