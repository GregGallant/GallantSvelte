// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

/** @type {import('.$types').PageLoad} */
export const load = async ( {data, url, route, params, parent, fetch, depends, setHeaders}) => {
    console.log('Loading data...');

    console.log(data);
    console.log('url...');
    console.log(url);
    console.log('route...');
    console.log(route);
    console.log('params...');
    console.log(params);
    console.log('parent()...');
    console.log(await parent());
    console.log('setHeaders()...');
    setHeaders({
        age: '100',
        'cache-control': 'max-age:604800'
    });

    const products = await (await import('$lib/dummy-products.json')).default; // default also needs await
    //console.log(products);
    return {
        products: products,
        title: "GallantOne Datastore Tests"
    };
};