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
<div class="regcontent">
    <div id="contentPane" class="reghero">
        <div class="formWrap">
            <h1>Login</h1>
            <div class="validationBanner" id="validationBanner"></div>
            <div id="registerResults" class="subhed">
            <form on:submit|preventDefault={login}>
                <input class="form-control formy" bind:value={username} type="text" id="username" name="username" placeholder="Username" />
                <br/>
                <input class="form-control formy" bind:value={password} type="password" id="password" name="password" placeholder="Password" />
                <br/>
                <button id="loginButton" class="loginSubmit btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
            </div>
        </div>
    </div>
</div>
