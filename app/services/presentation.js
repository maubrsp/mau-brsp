import axios from 'axios';

const service = {
  getPresentations: () => axios.get('/presentation')
};

export default service;
