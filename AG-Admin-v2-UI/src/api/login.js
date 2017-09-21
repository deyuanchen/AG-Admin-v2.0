import fetch from 'utils/fetch';

export function loginByEmail(username, password) {
  const data = {
    username,
    password
  };
  return fetch({
    url: '/jwt/token',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/jwt/invalid',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/jwt/user',
    method: 'get',
    params: { token }
  });
}