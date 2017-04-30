import { Observable } from 'rxjs';
import axios from 'axios';

export default (params, method = 'get') => {
  const { action$, api, request, request_success, request_error } = params;
  return action$.ofType(request)
    .mergeMap((action) => {
      return Observable
        .fromPromise(axios({ method, url: api, params: action.payload }))
        .map(xhr => ({
          type: request_success,
          data: xhr.data,
        }))
        .catch((error) => {
          const data = {
            type: request_error,
            error,
          };
          return Observable.of(data);
        });
    });
};
