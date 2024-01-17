import axios from 'axios';

const baseUrl = '/api/users';

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/me`, {}, {
    auth: {
      username: credentials.username,
      password: credentials.password,
    },
  });

  console.log(response.status);
  if (response.status === 401) {
    console.log('invalid login');
    throw new Error('invalid login');
  }
  return response.data;
};

export default { login };
