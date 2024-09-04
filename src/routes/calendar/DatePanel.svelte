<script>
    import {onMount, beforeUpdate} from 'svelte';

    let now = new Date();
    let arDay = now.getDay() + 1;

    let eachDatePanel;

    export let posX = {posX}.posX;
    export let posY = {posY}.posY;

    export let theDay = {theDay}.theDay;

    export let dData = {dData}.dData;

    let pData = JSON.parse(dData);
    let oData = '0h' + theDay + 'z0g' + pData.month + 'y0x' + pData.year
    // 0h z0g y0x


    let dayOfMonth = theDay;

    //console.log("FromDatePanel: " + posX + " " + posY);

    onMount( () => {
        eachDatePanel.style.setProperty('left', posX+"px");
        eachDatePanel.style.setProperty('top', posY+"px");

        // TODO: and is current month and year
        if (arDay === dayOfMonth) {
            eachDatePanel.style.setProperty('background-color', '#dfffef');
            eachDatePanel.style.setProperty('font-weight', 'bold');
            eachDatePanel.style.setProperty('font-size', '1.3em');
        }

    });

    const highlightArticle = () => {
        eachDatePanel.style.setProperty('border', '1px solid #3f9fff');
        eachDatePanel.style.setProperty('background-color', '#cfefff');
    };

    const dimArticle = () => {
        eachDatePanel.style.setProperty('border', '1px inset #333333');
        eachDatePanel.style.setProperty('background-color', '#ffffff');
        if (arDay === dayOfMonth) {
            eachDatePanel.style.setProperty('background-color', '#dfffef');
        }
    }

</script>

<div class="datePanel" on:mouseover={()=> highlightArticle() } on:mouseout={()=>dimArticle() } on:click={ () => location.href='/calendar/edit?dT='+oData}  bind:this={eachDatePanel}>
    <div class="dayOfMonth">{dayOfMonth}</div>
</div>