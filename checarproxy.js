const axios = require('axios');

axios.get('https://api.ipify.org/?format=json',
    {
        proxy: {
            protocol: 'http',
            host: 'p.webshare.io',
            port: 80,
            auth: {
                username: 'lcmuzjvk-rotate',
                password: '3shsgvxj0i5d'
            }
        },
    }
)
    .then(res => {
        console.log(res.data)
    }).catch(err => console.error(err))