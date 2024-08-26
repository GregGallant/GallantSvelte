<script>
    import {goto, invalidateAll} from '$app/navigation';

    let username = '';
    let password = '';

    /** @type {import('./$types').Snapshot<string, string>} */
    export const snapshot = {
        capture: () => {
            return {
                username,
                password
            }
        },
        restore: (value) => {
            username = value.username;
            password = value.password;
        }
    };

    /** @type {import('./$types').PageLoad} */
    const login = async () => {

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        const resJSON = await response.json();

        if (response.ok) {
            //goto('/', {invalidateAll: true});
            invalidateAll();
        } else {
            alert(resJSON.message);
        }

        //alert('static adapter')
    }

</script>
<form on:submit|preventDefault={login}>
    <label for="username">Username</label><br/>
    <input bind:value={username} type="text" id="username" name="username" placeholder="Username" />
    <br/><br/>
    <label for="password">Password</label><br/>
    <input bind:value={password} type="password" id="password" name="password" placeholder="Password" />
    <br/><br/>
    <button type="submit">Login</button>
</form>