# 2023 Svelte 4 version of GallantOne.com


<img width="500" height="144" alt="Image" src="https://github.com/user-attachments/assets/0521df9a-cf64-464f-bb35-d4b90247feb8" />

## SvelteJS with ThreeJS 
https://svelte.dev

In an attempt to use something other than React and React Router for the frontend, Svelte 4 was chosen and tested on the 2023 version of the Gallantone.com website. Svelte 4 on the frontend with a Go backend as an alternative to React before the version 19 release.  It lasted a year before returning to React which released a compiler with its version 19 update.  It's also the last time using Sass for CSS which is of course outdated now.
A Svelte calendar was created and used quill to edit tasks or whatever within each date.  ThreeJS components were created and Svelte made this very easy allowing for some very cool 3d mesh designs. 
<br/>
   <img width="480" height="300" alt="Image" src="https://github.com/user-attachments/assets/0e7720c5-9c63-4fea-a3b0-d77442e3a4ff" />
<hr/>
There were some downsides to Svelte despite the initial excitement in using something new.  Svelte uses plus signs in their filenames.  This was highly annoying especially when using Linux in terminals and shell commands that now had to deal with a special character.  For old school Unix and Linux heads, that alone can be a deal breaker.  Svelte 4, for some reason, had a security issue in regards to API handling: it could bypass CORS when calling from a website with a non-SSL protocol if the call was made from a Go binary within a networked docker container. A very specific bug sure, but the CORS bypassing while convenient was strange and inconsistent.  This was since fixed I think in Svelte 5.  Svelte also allowed for inline styling and even suggested this but this creates a CSS mess quickly.  Svelte's async methods were very streamlined but they could not compete with Tanstack Query (https://tanstack.com/query/latest) in the slightest, in my opinion (although Tanstack Query has support for Svelte 5 now). 
<br/>


<br/>   <br/>
While Svelte 4 was a very well designed framework, the lack of compound components while designing a calendar component was the first sign that it needed more functionality before being ready for primetime.  Svelte 5 brought about a lot of changes along with an update to handle compound components, however returning to React v19 proved much more reliable in the end.  Svelte was still a very good framework, but the return to React had to do with having more experience with React allowing for cleaner code and component organization.		
