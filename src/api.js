import axios from 'axios';

const makeRequest = (type, path, params) => {
  if (type === 'get') {
    return axios.get(`${process.env.REACT_APP_API_HOST}/${path}`, {
      params: {
        ...params,
      },
    });
  } else if (type === 'post') {
    return axios.post(`${process.env.REACT_APP_API_HOST}/${path}`, {
      ...params,
    });
  } else if (type === 'put') {
    return axios.put(`${process.env.REACT_APP_API_HOST}/${path}`, {
      ...params,
    });
  } else if (type === 'delete') {
    return axios.delete(`${process.env.REACT_APP_API_HOST}/${path}`, {
      params: {
        ...params,
      },
    });
  } else if (type === 'fileUpload') {
    // upload file
    return axios.post(`${process.env.REACT_APP_API_HOST}/${path}`, params);
  } else if (type === 'excelDownload' || type === 'zipDownload') {
    // download file
    return axios.get(`${process.env.REACT_APP_API_HOST}/${path}`, {
      type:
        type === 'excel'
          ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          : '.zip,.rar,.7zip',
      responseType: 'blob',
    });
  }
};

const getResults = async (type, path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(type, path, params);
    return [results || data, null];
  } catch (e) {
    console.error(e);
    return [null, e.response?.data, e.response?.status];
  }
};

// export const apiName = {
//   api: () =>
//     getResults('통신 종류', `주소`, 파라미터),
// };
