import {json,error} from '@sveltejs/kit';

/** @type{import('./$types').RequestHandler} */
export const POST = async ({request, cookies}) => {

    const data = await request.json();

    if (!data.username) {
        throw error(400, 'Username required')
    }

    if (!data.password) {
        throw error(400, 'Password required')
    }

    cookies.set('token', 'token_value', {path:'/', secure: false});

    return json( {user: data.username, id: 1});
}