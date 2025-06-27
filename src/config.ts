const config = {
  development: {
    apiUrl: 'https://bakend-k6wm.onrender.com/',
  },
  production: {
    apiUrl: 'https://bakend-k6wm.onrender.com/',
  },
};

const env = process.env.NODE_ENV || 'development';
console.log('Current environment:', env);
console.log('Using API URL:', config[env].apiUrl);

export default config;
