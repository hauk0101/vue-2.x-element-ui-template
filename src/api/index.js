import domain from './env.config';

export default {
    getUserInfo: {
        type: 'get',
        url: `${domain.domain}/getUserInfo`
    }
};