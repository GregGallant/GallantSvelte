import {redirect} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({parent}) => {
    const {user} = await parent();
    if (user) throw redirect(307, '/');
};

