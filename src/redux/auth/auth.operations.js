import API from '../../api';

export const register = async (data = {}) => {
    const {
        nickname,
        password,
        email,
        firstname,
        lastname,
    } = data;

    const res = await API.post('/profile', {
        'user_name': nickname,
        'user_password': password,
        'user_email': email,
        'user_first_name': firstname,
        'user_last_name': lastname,
        'user_image_file': 'example.png'
    });

    console.log(res);
};

export const login = async (data  = {}) => {

   
    const {
        name,
        password
    } = data;
    
    const res = await API.post('/login', {
        'user_name': name,
        'user_password': password
    })
    

    return res.data['access_token'];
};

