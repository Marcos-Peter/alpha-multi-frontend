function currencyMask(value: string) {
  console.log(parseFloat(value).toFixed(2));
  return parseFloat(
    value
      .replace(/(.*){1}/, '0$1')
      .replace(/[^\d]/g, '')
      .replace(/(\d\d?)$/, '.$1'),
  ).toFixed(2);
}

export { currencyMask };
