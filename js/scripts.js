const done = [];

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('js-reload');
  const share = document.getElementById('js-share');
  const about = document.getElementById('js-about');
  const content = document.getElementById('js-content');
  const input = document.getElementById('js-link');
  const alert = document.getElementById('js-done');
  const allList = document.getElementById('js-all-list');
  const menu = document.getElementById('js-menu');
  const sidebar = document.getElementById('js-sidebar');

  btn.addEventListener('click', () => getCite());

  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
  });

  share.addEventListener('click', (e) => getLink(e));

  createList();
  checkLocation();

  window.addEventListener('hashchange', () => {
    const hash = parseInt(location.hash.match(/\d+/));
    return getCite(hash, true);
  });


  function createList() {
    let list = '';

    for (var i = 0; i < data.length; i++) {
      list +=  `<li><a href="#${i}">${data[i].about}</a></li>`;
    }

    allList.innerHTML = list;
  }

  function checkLocation() {
    const hash = parseInt(location.hash.match(/\d+/));
    return hash ? getCite(hash) : getCite();
  }

  function getCite(num, nostate) {
    let citeNum;

    num || num === 0 ? citeNum = num : citeNum = randomInteger(0, data.length - 1, done);

    about.innerHTML = data[citeNum].about;
    content.innerHTML = data[citeNum].text;
    share.href = `#cite-${citeNum}`;
    input.value = document.location;

    if (!nostate) {
      done.push(citeNum);
      history.pushState(null, null, `#cite-${citeNum}`);
    }

    if (done.length >= data.length) {
      btn.style.visibility = 'hidden';
      share.style.visibility = 'hidden';
      about.innerHTML = 'говорит';
      content.innerHTML = 'Всем мир!';
      history.pushState(null, null, '#');
      done.length = 0;
    } else {
      btn.style.visibility = 'visible';
      share.style.visibility = 'visible';
    }

    return citeNum;
  }

  function getLink(e) {
    const anchor = e.currentTarget.href;
    const url = document.location;

    input.select();
    document.execCommand('copy');

    alert.classList.add('is-visible');
    let timer = setTimeout(() => {
      alert.classList.remove('is-visible');
    }, 1000)
  }
});


function randomInteger(min, max, exp) {
    var n,
        exp = Array.isArray(exp) ? exp : [(isNaN(exp) ? min-1 : exp)];

    while(true) {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        if(exp.indexOf(n) < 0) return n;
    }
}