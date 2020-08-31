# use-axios

> Simple React hooks for fetching data using axios with prepared axios cancel token already set

[![NPM](https://img.shields.io/npm/v/use-axios.svg)](https://www.npmjs.com/package/use-axios) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rad-use-axios
```

## Usage

You can use it as regular axios

```tsx

import axios from 'rad-use-axios'

//use it like a regular axios
axios({
  method:'post',
  url: 'url',
  data: data
})

//or
axios.post(url,{...})

// or
axios.get(url,{...})

```

## License

MIT © [Raeneldis A. Sadra](https://github.com/Raeneldis A. Sadra)
