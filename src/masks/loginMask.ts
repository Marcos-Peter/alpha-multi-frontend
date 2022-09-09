function loginMask(value: string) {
  return value.replace(/[!@#$%^&*()+\-=[\]{};':"\\|,<>/?]/g, '');
}

export { loginMask };
