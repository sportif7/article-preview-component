const share_links_el = document.querySelector('.share-links');
const share_icon_el = document.querySelector(".share-icon");
const share_icon_active_el = document.querySelector('.share-icon-active');


      share_icon_el.addEventListener("click", ()=>{
           share_links_el.classList.toggle('hidden');
           share_icon_el.classList.toggle('share-icon-active');
      })

      share_icon_active_el.addEventListener("click", ()=>{
         share_links_el.classList.toggle('hidden');
         share_icon_el.classList.toggle('share-icon-active');
    })








