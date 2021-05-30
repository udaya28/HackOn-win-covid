const dev = {
   url: {
    baseBackendURL: 'https://win-covid19.herokuapp.com',
    baseAPIURL: 'https://win-covid19.herokuapp.com/api/v2',
  }
};

const prod = {
   url: {
     baseBackendURL: 'https://win-covid19.herokuapp.com',
     baseAPIURL: 'https://win-covid19.herokuapp.com/api/v2',
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;