<script>
    import goodburger from '$lib/images/goodburger50.png';
    import gmedialogo from '$lib/images/gone_logo.png';
    import {page} from "$app/stores";
    import github from "$lib/images/github.svg";

    import {onMount} from 'svelte';

    let burgertime;
    let supermenu;
    let softclose;
    let menuShow = false;
    //const burgerMenu = $page.getElementById('burgermenu');

    export const createMenu = () => {
        if (menuShow === false) {
            supermenu.style.display = 'block';
            menuShow = true;
        } else {
            closeMenu();
        }
    };

    export const closeMenu = () => {
        supermenu.style.display = 'none';
        menuShow = false;
        cancelSoftClose();
    }

    export const softCloseMenu = () => {
        // also if mouse not over window
        if (menuShow === true) {
            softclose = setTimeout( () => { closeMenu(); }, 2500);
        }
    }

    export const cancelSoftClose = () => {
        if (typeof(softclose) != 'undefined') {
            clearTimeout(softclose);
        }
    }

    // TODO: Safari and older tablets/mobile handler

</script>
<!-- Menu Template -->
<div class="{$page.url.pathname === '/' ? 'gcontainer' : 'gsubcontainer'}">
    <div class="gcol-left logohead"><a href="/"><img class="img-fluid" src="{gmedialogo}" alt="GallantOne.com" /></a></div>
    <div class="gcol-right menuhead">
        <ul>
            <li on:click={()=>location.href='/'} aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">Home</a>
            </li>
            <li on:click={()=>location.href='/news' } aria-current={$page.url.pathname.match('\/news(\/)?(\d?)*') ? 'page' : undefined}>
                <a href="/news">Creative Links</a>
            </li>
            <li on:click={()=>location.href='/about'} aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
                <a href="/about">About</a>
            </li>
            <li class="corner">
                <a href="https://github.com/GregGallant">
                    <img src={github} alt="GitHub" />
                </a>
            </li>
        </ul>
    </div>
    <div class="burgerhead dropdown">
        <button class="burger-button dropdown-toggle" type="button" id="burgertime" on:click={() => createMenu() } bind:this={burgertime}>
            <img class="img-fluid theburger" src="{goodburger}" />
        </button>
        <div class="dropdown-menu">
            <ul id="burgermenu" aria-labelledby="burgertime" role="listbox" bind:this={supermenu}>
                <li on:mouseover={()=>{cancelSoftClose();}} on:mouseout={()=>{softCloseMenu();}} on:click={()=>  { location.href='/'; }  } class="dropdown-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                    <a href="/">Home</a>
                </li>
                <li on:mouseover={()=>{cancelSoftClose();}} on:mouseout={()=>{softCloseMenu();}} on:click={()=> { location.href='/news'; } } class="dropdown-item" aria-current={$page.url.pathname.match('\/news(\/)?(\d?)*') ? 'page' : undefined}>
                    <a href="/news" data-sveltekit-preload-data="hover">Creative Links</a>
                </li>
                <li on:mouseover={()=>{cancelSoftClose();}} on:mouseout={()=>{softCloseMenu();}} on:click={()=>{ location.href='/about';} } class="dropdown-item" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
                    <a href="/about">About</a>
                </li>
                <li on:mouseover={()=>{cancelSoftClose();}} on:mouseout={()=>{softCloseMenu();}} on:click={()=>{ location.href='https://github.com/GregGallant'; }} class="dropdown-item">
                    <a href="https://github.com/GregGallant">GitHub</a>
                </li>
            </ul>
        </div>
    </div>
</div>


<style>
    .corner {
        background: none;
        border: none;
        width: 3em;
        height: 3em;
    }

    .corner a {
        width: 100%;
        height: 100%;
    }

    .corner img {
        width: 3em;
        height: 3em;
        object-fit: contain;
    }

</style>