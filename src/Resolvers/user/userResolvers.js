
const Userinfo = {
  id: '5c18ffeedb96d35d1cd58cc6',
  name: 'Oyez',
  lastname: 'team',
  email: 'test@test.com',
  password: '123'
}

export const userResolvers = {
  user: (_, { email, password }) => {

    if (email === Userinfo.email && password === Userinfo.password) {
      return Userinfo
    }
    return {}
  }
}
