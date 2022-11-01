const envDomain = {
  dev: {
    API_DOMAIN: 'https://dev-xxx.com/'          
  },
  test: {
    API_DOMAIN: 'https://test-xxx.com/'  
  },
  pre: {
    API_DOMAIN: 'https://pre-xxx.com/'  
  },
  prod: {
    API_DOMAIN: 'https://xxx.com/'  
  }
};

const domain = envDomain[process.env.SCENCE_ENV] || envDomain['dev'];
export default domain;
