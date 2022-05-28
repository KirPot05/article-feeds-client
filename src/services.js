import Http from './utils/Http';

export function getArticles(){
    return Http.get('api/articles');
}

export function getUserArticles(id){
    return Http.get(`api/articles?id=${id}`);
}

export function addArticle(data){
    return Http.post('api/articles/add', data);
}

export function editArticle(id, data){
    return Http.put(`api/articles/edit?id=${id}`, data);
}

export function login(data){
    return Http.post('api/auth/login', data);
}

export function register(data){
    return Http.post('api/auth/new', data);
}

export function editUserDetails(data){
    return Http.put('api/auth', data);
}