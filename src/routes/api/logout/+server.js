import {json} from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const POST = ({cookies}) => {
   cookies.delete('token', {path:'/', secure:false});
   return json({sucess:true});
}

