import Http from './utils/Http';

export function getArticles(){
    Http.defaults.headers['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('api/articles');
}

export function getUserArticles(){
    Http.defaults.headers['auth-token'] = localStorage.getItem('auth-token');
    return Http.get(`api/articles/user`);
}

export function addArticle(data){
    Http.defaults.headers['auth-token'] = localStorage.getItem('auth-token');
    return Http.post('api/articles/new', data);
}

export function editArticle(id, data){
    Http.defaults.headers['auth-token'] = localStorage.getItem('auth-token');
    return Http.put(`api/articles/${id}`, data);
}

export function login(data){
    return Http.post('api/auth/login', data);
}

export function register(data){
    return Http.post('api/auth/createUser', data);
}

export function editUserDetails(data){
    Http.defaults.headers['auth-token'] = localStorage.getItem('auth-token');
    return Http.put('api/auth/updateUser', data);
}

export function getUserInfo(){
    Http.defaults.headers['auth-token'] = localStorage.getItem('auth-token');
    return Http.get('api/auth/getUser');
}