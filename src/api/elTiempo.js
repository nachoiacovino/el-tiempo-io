import axios from 'axios';

const elTiempo = axios.create({
  baseURL: 'https://www.el-tiempo.net/api/json/v2/',
});

export default elTiempo;
