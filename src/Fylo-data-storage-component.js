(function () {
  const data = {
    min: 0,
    max: 1000,
    used: 815,
    left: function() { return this.max - this.used },
  };

  const createContent = () => {
    document.querySelector('body').insertAdjacentHTML('beforeend',
      `<main class="main center">
        <section class="card-1">
          <img class="logo" src="./src/images/logo.svg" alt="logo"/>
          <div class="flex-row center">
            <img class="icon" src="./src/images/icon-document.svg" alt="icon document"/>
            <img class="icon" src="./src/images/icon-folder.svg" alt="icon folder"/>
            <img class="icon" src="./src/images/icon-upload.svg" alt="icon upload"/>
          </div>
        </section>
        <section class="card-2 rel">
          <form id="form-action" action="#" method="get" novalidate>
            <label class="label" for="gauge" form="form-action">You've used <span id="used">${data.used}</span> GB of your storage</label>
            <meter id="gauge" min=${data.min} max=${data.max} value=${data.used} form="form-action"></meter>
            <div class="popup abs center"><span id="left">${data.left()}</span> GB Left</div>
          </form>
        </section>
      </main>
      <footer class="attribution">
        Challenge by <a class="anchor" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a class="anchor" href="https://github.com/eserengo/" target="_blank">Federico Borzani</a>.
      </footer>`);
  }
  
  const displayOnResize = () => {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('main').classList.remove('flex-row');
      document.querySelector('main').classList.add('flex-col');
    }
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.remove('hidden');
      })
      document.querySelector('main').classList.remove('flex-col');
      document.querySelector('main').classList.add('flex-row');
    }
  }

  // ----- WINDOW ON RESIZE FUNCTION WITH TIMEOUT DEBOUNCING TECHNIQUE ------

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });

  // ------ FUNCTIONS TO EXECUTE AFTER THE CONTENT HAS BEEN INJECTED

  window.addEventListener('DOMContentLoaded', () => {
    // FUNCTIONS
    createContent();
    displayOnResize();   // MUST BE THE LAST FUNCTION TO LOAD
  })
})();