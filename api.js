import WPAPI from 'wpapi';

let endpoint = 'https://blog.mozilla.org/wp-json';

const api = new WPAPI({endpoint});
export default api;