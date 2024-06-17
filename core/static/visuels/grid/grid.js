//-------------------------------------//

let grid = document.querySelector('.grid');







//-------------------------------------//
// init Infinte Scroll

let infScroll = new InfiniteScroll( grid, {
  path: getPath,
  append: '.grid__item',
});

const copyLink = document.querySelector(".copy-img");

copyLink.addEventListener('click', e => {
  if(e.target.classList.contains('btn-copy')) {
    const link = window.location.origin + e.target.dataset.link;
    e.target.classList.add('copied');
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      e.target.classList.remove('copied');
    }, 1000);
  }
})
