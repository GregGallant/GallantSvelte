# 2023 Svelte 4 version of GallantOne.com


<img width="500" height="144" alt="Image" src="https://github.com/user-attachments/assets/0521df9a-cf64-464f-bb35-d4b90247feb8" />

## SvelteJS with ThreeJS 
https://svelte.dev

In an attempt to use something other than React and React Router for the frontend, Svelte 4 was chosen and tested on the 2023 version of the Gallantone.com website. Svelte 4 on the frontend with a Go backend as an alternative to React before the version 19 release.  It lasted a year before returning to React which released a compiler with its version 19 update.  It's also the last time using Sass for CSS which is of course outdated now.
The Svelte calendar used quill to edit tasks or whatever within each date.
<br/>
   <img width="480" height="300" alt="Image" src="https://github.com/user-attachments/assets/0e7720c5-9c63-4fea-a3b0-d77442e3a4ff" />
<br/>

 The ThreeJS components were just that. I created small, quick Svelte components with Animated keyframed 3D meshes. This allows meshes or even mini-games rendered exactly like a simple HTML call,  with the ability to load animations or meshes the same way you'd load an image along with parameters like speed, rotation and size as well as styles.
			In regards to memory, their were a few issues to keep in mind.
			<br/> 
   <br/>
			While Svelte 4 was a very well designed framework, the lack of compound components while designing a calendar component was the first sign that it needed more functionality before being ready for primetime.  Svelte 5 brought about a lot of changes along with an update to handle compound components, however returning to React v19 proved much more reliable in the end.  This was not because Svelte was not a good framework, it was great.  This more had to do with having more experience with React allowing for cleaner code and component organization.		
