<script>
import DatePanel from "./DatePanel.svelte";
import BlankPanel from "./BlankPanel.svelte";

const dwidth = 120;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthcodes = [-1,0,3,3,6,1,4,6,2,5,0,3,5];

const days_in_month = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

let now = new Date();

let today;
let calhead;
let arDay;
let arMonth;
let arYear;
let isLeapYear;

// From abstracted array
arDay = now.getDate();
arMonth = now.getMonth();
arYear = now.getFullYear();

const addCalendarButtons = () => {

    // Get local client time
    //console.log("Now obj: " + now);
    //console.log("Date: " + now.getDate());
    //console.log("Month: " + now.getMonth());
    //console.log("Day" + now.getDay());


    // Calendar Header
    calhead = months[arMonth] + " " + arYear;

}

// Determines if year is a leap year
const checkLeapYear = (year) => {

    if (year % 4 === 0 && (year % 100) !== 0 || year % 400 === 0)
    {
        days_in_month[1] = 29;
        return true;
    } else {
        days_in_month[1] = 28;
        return false;
    }
}

// Gets century positioned base year
const getYearCode = (year) => {
    let yc = 6;

    if (year <= 1600 && year >= 1699)
    {
        yc = 6;
    } else if (year <= 1700 && year >= 1799) {
        yc = 4;
    } else if (year <= 1800 && year >= 1899) {
        yc = 2;
    } else if (year <= 1900 && year >= 1999) {
        yc = 0;
    } else if (year <= 2000 && year >= 2099) {
        yc = 6;
    } else if (year <= 2100 && year >= 2199) {
        yc = 4;
    } else if (year <= 2200 && year >= 2299) {
        yc = 2;
    } else if (year <= 2300 && year >= 2399) {
        yc = 0;
    } else if (year <= 2400 && year >= 2499) {
        yc = 6;
    } else if (year <= 2500 && year >= 2599) {
        yc = 4;
    }

    return yc;
}


let daycode;

// Determines where day of week sits
// TODO: Confirm accurate
const getDayCode = () => {
    let isly = 0;

    let isleapyear = checkLeapYear(arYear);
    if (isleapyear)
    {
        isly = 1;
    }

    //double year = (double)mdate.Year;
    //let year =  arYear; // not sure if should be full year or 1900 + yearVal
//    console.log("MONTH NUM: " + arMonth);
    let month = arMonth ; // TODO: needs check

    let yearcode = getYearCode(arYear);

    //double twodigityear = year % 100;  // modulus
    let twodigityear = arYear % 100;

    let tdy = twodigityear;

    let d1 = (twodigityear / 4) ;

    let monthcode = monthcodes[month];

    daycode = (tdy + d1 + monthcode + yearcode - 2 - isly) % 7;

    //console.log("DAYCODE: " + daycode);

    return daycode;
}

let DayCode = getDayCode();

// Positioning code
/*
       int daycode = getDayCode(myDate);
        if (daycode != 0)
        {
            for (int dc = 0; dc <= daycode; dc++)
            {
                if (dc != (daycode))
                {
                    GameObject goop = Instantiate(blankPrefab) as GameObject;
                    goop.transform.SetParent(buttonContainer);
                } else {
                    break;
                }
            }
        }
 */

let daysForMonth = days_in_month[arMonth];
//console.log("DAYS FOR MONTH: " + daysForMonth);
let dfmArr = [];

for (let xxi = 0; xxi < daysForMonth; xxi++) {
    dfmArr.push(xxi);
    for ( let dci = 0; dci < daycode; dci++ ) {
        dfmArr.push(0);
    }
}

//console.log('dfm');
//console.log(dfmArr);

let test = addCalendarButtons();
//console.log(test);
let xi = 0;
let xj = 0;
let xk = 0;
let xm = 0;
let forEditor;
// Edit / Save data
today = months[arMonth] + " " + arDay + ", " + arYear;
forEditor = JSON.stringify({'day': arDay, 'month':arMonth, 'year':arYear});
//console.log('for Edit: ' + forEditor);

</script>

<h1>{calhead}</h1>

<div class="dayOfWeekHeader">
    {#each daysOfWeek as dw, i}
        <div class="dayOfWeek">{daysOfWeek[i]}</div>
    {/each}
</div>
<div class="calendarBoard"> <!-- TODO: leap year stuff -->
    <div class="calendarWrap">
        {#each dfmArr as dim, j}
            {#if j > 6 && j < 14}
                <DatePanel posX={xi*dwidth} posY="110" theDay={j+1-DayCode} dData={JSON.stringify({'month':arMonth, 'year':arYear}) } />
                <span>{xi = j - 7}</span>
            {:else if j > 13 && j < 21}
                <DatePanel posX={xj*dwidth} posY="220" theDay={j+1-DayCode} dData={JSON.stringify({'month':arMonth, 'year':arYear}) } />
                <span>{xj = j - 14}</span>
            {:else if j > 20 && j < 28}
                <DatePanel posX={xk*dwidth} posY="330" theDay={j+1-DayCode} dData={JSON.stringify({'month':arMonth, 'year':arYear}) } />
                <span>{xk = j - 21}</span>
            {:else if j > 27 && j < (daysForMonth+DayCode)}
                <DatePanel posX={xm*dwidth} posY="440" theDay={j+1-DayCode} dData={JSON.stringify({'month':arMonth, 'year':arYear}) } />
                <span>{xm = j - 28}</span>
            {:else}
                {#if j < DayCode}
                    <BlankPanel />
                {:else}
                    <DatePanel posX={j*dwidth} posY="0" theDay={j+1-DayCode} dData={JSON.stringify({'month':arMonth, 'year':arYear}) } />
                {/if}
            {/if}
        {/each}
    </div>

</div>

<style lang="scss">
    pre {
      color:#ffffff;
    }

    span {
      display:none;
    }
</style>