export default function request(url, options) {
console.log(url,options)
  const defaultOptions = {

    credentials: 'include',

  };

  const newOptions = { ...defaultOptions, ...options };

  if (

    newOptions.method === 'POST' ||

    newOptions.method === 'PUT' ||

    newOptions.method === 'DELETE'

  ) {

    if (!(newOptions.body instanceof FormData)) {

      newOptions.headers = {

        Accept: 'application/json',

        'Content-Type': 'application/x-www-form-urlencoded',

        ...newOptions.headers,

      };

      newOptions.data = qs.stringify(newOptions.body);

      newOptions.body = JSON.stringify(newOptions.body);

    } else {

      // newOptions.body is FormData

      newOptions.headers = {

        Accept: 'application/json',

        ...newOptions.headers,

      };

    }

  }

 

  return axios(url, newOptions)

    .then(checkStatus)

    .then((response) => {

      // 成功的回调

      if (newOptions.method === 'DELETE' || response.status === 204) {

        return response.text();

      }

      return response.data;

    })

    .catch((e) => {

      // 失败的回调

      const { dispatch } = store;

      const status = e.name;

      if (status === 401) {

        dispatch({

          type: 'login/logout',

        });

        return;

      }

      if (status === 403) {

        dispatch(push('/exception/403'));

        return;

      }

      if (status <= 504 && status >= 500) {

        dispatch(push('/exception/500'));

        return;

      }

      if (status >= 404 && status < 422) {

        dispatch(push('/exception/404'));

      }

    });

}