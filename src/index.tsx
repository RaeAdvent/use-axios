import * as React from 'react'
import axios from 'axios'

type logging = Boolean

/**
 * @param logging <Boolean> - Enable logging for each request, default: false
 */

const useAxios: React.FC<logging> = (logging: logging = false) => {
  const initAxios = axios

  const source = initAxios.CancelToken.source()

  initAxios.interceptors.request.use(
    function (config: any) {
      config.cancelToken = source.token
      return config
    },
    function (err: any) {
      if (initAxios.isCancel(err)) {
        const cancelReport = {
          title: 'request aborted',
          err: err,
        }
        logging && console.table(cancelReport)
        return Promise.reject(cancelReport)
      } else {
        logging && console.error(err)
        return Promise.reject(err)
      }
    }
  )

  React.useEffect(() => {
    source.cancel()
  })

  return initAxios
}

export default useAxios
