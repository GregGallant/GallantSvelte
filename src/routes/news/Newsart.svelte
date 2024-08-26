<script>
import noimage from "$lib/images/noimage.gif";

export let newsObj;
let nnews;

// old
let newsid;
let newstextid;

nnews = {newsObj}.newsObj;

const highlightArticle = () => {
    newsid.style.setProperty('border', '2px solid #ffffff');
    newstextid.style.setProperty('background-color', '#303070');
 //   newsid.style.borderColor = "red";
//    newstextid.style.backgroundColor = "#ffffff";
};

const dimArticle = () => {
    newsid.style.setProperty('border', '2px inset #c3c3c3');
    newstextid.style.setProperty('background-color', '#202020');
}


</script>

<div class="articleBox">
    <div id="art_{nnews.thread.uuid}" class="articleOverlay" on:mouseover={()=> highlightArticle() } on:mouseout={()=>dimArticle() } bind:this={newsid} >
        {#if nnews.thread.main_image === ""}
            <a target="ggnews" href="{nnews.url}"><img alt="{nnews.title}" class="newsImg" src="{noimage}" /></a>
        {:else}
            <a target="ggnews" href="{nnews.url}"><img alt="{nnews.title}" class="newsImg" src="{nnews.thread.main_image}" /></a>
        {/if}
        <div class="newstitle" bind:this={newstextid} >
            <h3><a target="ggnews" href="{nnews.url}">{nnews.thread.title_full}</a></h3>
            <h6><a target="ggnewsmain" href="http://www.{nnews.thread.site}">{nnews.thread.site}</a></h6>
        </div>
    </div>
</div>

<style>
    .articleOverlay {
        border:2px inset #c3c3c3;
    }
</style>