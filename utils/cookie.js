export function getCookieField(name, strCookie) {
  const arrCookie = strCookie.split(';')
  const cookie = arrCookie.find(item => item.split('=')[0] === name)
  return cookie ? cookie.split('=')[1] : ''
}
