import Http from './utils/Http';

export function getArticles(){
    return Http.get('api/articles');
}

export function getUserArticles(){
    return Http.get(`api/articles/user`);
}

export function addArticle(data){
    return Http.post('api/articles/new', data);
}

export function editArticle(id, data){
    return Http.put(`api/articles/${id}`, data);
}

export function login(data){
    return Http.post('api/auth/login', data);
}

export function register(data){
    return Http.post('api/auth/createUser', data);
}

export function editUserDetails(data){
    return Http.put('api/auth/updateUser', data);
}