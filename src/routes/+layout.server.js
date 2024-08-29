
/** @type {import('./$types').LayoutServerLoad} */
export const load = ({cookies}) => {

    const token = cookies.get('token');
    const userz = { name: 'TestUser', id: 444}
    return {user: token ? userz : null};
};

//export const prerender = true;
export const trailingSlash = 'never';