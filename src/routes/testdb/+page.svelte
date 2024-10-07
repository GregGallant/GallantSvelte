<script>
    import {goto, invalidateAll} from '$app/navigation';

    let email = '';
    let firstname = '';
    let lastname = '';
    let password = '';
    let cpassword = '';

    /** @type {import('./$types').Snapshot<string, string>} */
    export const snapshot = {
        capture: () => {
            return {
                email,
                firstname,
                lastname,
                password,
                cpassword
            }
        },
        restore: (value) => {
            email = value.email;
            firstname = value.firstname;
            lastname = value.lastname;
            password = value.password;
        }
    };

    /** @type {import('./$types').PageLoad} */
    const register = async () => {

        let postURL = "http://127.0.0.1:8888/register";
        //let postURL = "http://golang-ggc:8888/register";

        let postReq = JSON.stringify({email,firstname, lastname, password, cpassword})

        console.log("POST REQ: " + postReq);


        const response = await fetch(postURL, {
            method: 'POST',
            body: JSON.stringify({email, firstname, lastname, password, cpassword})
        });
        const resJSON = await response.json();

        if (response.ok) {
            goto('/testdb/success', {invalidateAll: true});
           // invalidateAll();
        } else {
            console.log("POST method failed");
            alert(resJSON.message);
        }
    }

</script>
    <div class="regcontent">
        <div id="contentPane" class="reghero">
            <div class="formWrap">
            <h1>Testing</h1>
            <div class="validationBanner" id="validationBanner"></div>
            <div id="registerResults" class="subhed">
                <form method="post" on:submit|preventDefault={register}>
                    <input id="email" bind:value={email} onChange="" type="text" name="email" class="form-control formy" placeholder="Email" autoFocus="true"/>
                    <br/>
                    <input id="password" bind:value={password}  onChange="" type="password" name="password" class="form-control formy" placeholder="Password"/>
                    <br/>
                    <input id="cpassword" bind:value={cpassword} onChange="" type="password" name="confirmpassword" class="form-control formy" placeholder="Confirm your password"/>
                    <br/>
                    <input id="firstName" bind:value={firstname} onChange="" type="text" name="firstName" class="form-control formy" placeholder="First Name"/>
                    <br/>
                    <input id="lastName" bind:value={lastname} onChange="" type="text" name="lastName" class="form-control formy" placeholder="Last Name"/>
                    <br/>
                    <div class="checkboxFormy">
                        <input type="checkbox" id="newsletterWant" value=""> <div class="newsletter">Please send me occasional information about app updates and new features.</div>
                    </div>
                    <br/>
                    <button id="registerButton" class="loginSubmit btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
<!--
    <label for="username">Username</label><br/>
    <input ind:value={username} type="text" id="username" name="username" placeholder="Username" />
    <br/><br/>
    <label for="password">Password</label><br/>
    <input ind:value={password} type="password" id="password" name="password" placeholder="Password" />
    <br/><br/>
    <button type="submit">Login</button>
    -->

<style lang="scss">
  form {
    .checkboxFormy {
      margin:8px 0 0 24px;
      padding:10px 10px 10px 10px;
      text-align:left;
        div.newsletter {
          display:inline;
          font-family:Helvetica, Arial, sans-serif;
          font-style:italic;
          font-size:.85em;
          color:#222222;
          text-align:left;
        }
    }
  }
</style>