03.18.:
about.html;
about-box--1;
sticky--1;
sticky. header {height: 9rem -> height: 10rem};
sticky .section-hero {margin-top: 9.64rem -> margin-top: 9.64rem};
queries/sticky--1 {height: 8.64rem};

03.19.:
main-heading {transition}

/_ @keyframes slidetop {
from {
margin-top: 100%;
/_ width: 50%; \*/
}

to {
margin-top: 0%;
/_ width: auto; _/
}
}

<style>
div.slide-left {
  width:100%;
  overflow:hidden;
}
div.slide-left div.inner {
  animation: slide-left 10s;
  margin-top:0%;
}

@keyframes slide-left {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}
</style>

<div class="slide-left">
<div class="inner">
<img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif" alt="Swimming fish">
</div>
</div>

const check = document.getElementById('check');
function checkChecked() {
if (check.checked) {
console.log('Checked')
} else {
console.log('Unchecked')
}
checkChecked();
}
