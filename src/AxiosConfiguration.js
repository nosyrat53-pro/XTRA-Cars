import axios from 'axios';

// setting up the axios configuration
const CodeChallengeAPI = axios.create({
    baseURL: 'https://easybooks.me/codechallenge' ,
    headers: {
        Accept: 'application/json',
        "Content-type": "application/json"
    }
  });

export default CodeChallengeAPI;