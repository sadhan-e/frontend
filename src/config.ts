const config = {
  development: {
    apiUrl: 'https://bakend-1-avw8.onrender.com/api',
  },
  production: {
    apiUrl: 'https://bakend-1-avw8.onrender.com/api',
  },
};

const env = process.env.NODE_ENV || 'development';
console.log('Current environment:', env);
console.log('Using API URL:', config[env].apiUrl);

export default config;