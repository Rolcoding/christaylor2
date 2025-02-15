'use strict';

// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Smooth scrolling animation

// const allLinks = document.querySelectorAll('a:link');
// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     // Scroll back to top
//     if (href === '#')
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     // Scroll to other links
//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Close mobile navigation
//     if (link.classList.contains('main-nav-link'))
//       headerEl.classList.toggle('nav-open');
//   });
// });

// Sticky navigation Section-hero
// const sectionHeroEl = document.querySelector('.section-hero');

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       document.body.classList.add('sticky');
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove('sticky');
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: '-80px',
//   }
// );
// obs.observe(sectionHeroEl);

// Scroll-activated sticky navigation
// const body = document.body;
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.pageYOffset;

//   if (currentScroll <= 0) {
//     body.classList.remove('scroll-up');
//   }

//   if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
//     body.classList.remove('scroll-up');
//     body.classList.add('scroll-down');
//   }

//   if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
//     body.classList.remove('scroll-down');
//     body.classList.add('scroll-up');
//   }

//   lastScroll = currentScroll;
// });

// Opened mobile nav disappearing when scroll down
const navEl = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  let lastScroll = 0;
  if (currentScroll > lastScroll) {
    navEl.classList.remove('nav-open');
  }

  lastScroll = currentScroll;
});

// Email sender form
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const birthName = document.getElementById('birthname');
const birthPlace = document.getElementById('birthplace');
const birthDate = document.getElementById('birthdate');
const motherName = document.getElementById('mothername');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const billName = document.getElementById('billname');
const billAddress = document.getElementById('billaddress');
const mess = document.getElementById('message');
let checkbox = document.querySelector('#terms');

function sendEmail() {
  const bodyMessage = `Teljes név: ${fullName.value}<br> Születési név: ${birthName.value}<br> Születési hely: ${birthPlace.value}<br> Születési dátum: ${birthDate.value}<br> Anyja neve: ${motherName.value}<br> Email: ${email.value}<br> Telefonszám: ${phone.value}<br> Számlázási név: ${billName.value}<br> Számlázási cím: ${billAddress.value}<br> Üzenet: ${mess.value}`;

  Email.send({
    SecureToken: '1888f01d-8a5c-4f02-a884-668367ec45bc',
    To: 'christaylorhajszalon@gmail.com',
    From: 'christaylorhajszalon@gmail.com',
    Subject: 'Oktatás jelentkezés',
    Body: bodyMessage,
  }).then(message => {
    if (message == 'OK') {
      const swalWithBootstrapButtons = Swal.fire({
        customClass: {
          confirmButton: 'btn btn-lg btn-success',
          popup: 'border-radius-0',
        },
        buttonsStyling: false,
        position: 'center',
        title: 'Jelentkezés elküldve',
        icon: 'success',
        iconColor: '#db7158',
        background: '#f8e3de',
        confirmButtonText: 'Rendben',
      });
      // Swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   iconColor: '#db7158',
      //   background: '#f8e3de',
      //   color: '#444',
      //   title: 'Jelentkezés elküldve',
      //   showConfirmButton: true,
      //   confirmButtonColor: '#db7158',
      //   confirmButtonText: 'Köszi',
      // });

      // const Toast = Swal.mixin({
      //   toast: true,
      //   position: 'center',
      //   showConfirmButton: false,
      //   timer: 2000,
      //   timerProgressBar: true,
      //   didOpen: toast => {
      //     toast.onmouseenter = Swal.stopTimer;
      //     toast.onmouseleave = Swal.resumeTimer;
      //   },
      // });
      // Toast.fire({
      //   icon: 'success',
      //   title: 'Üzenet elküldve',
      // });
    }
  });
}

// Checkbox checking
// function checking() {
//   let checkBox = document.getElementById('check');
//   const errorTxtCheck = document.querySelector('.error-txt.check');
//   if (checkBox.checked == true) {
//     console.log('Checked');
//     check.classList.remove('error');
//     check.parentElement.classList.remove('error');
//   } else {
//     console.log('Unchecked');
//     check.classList.add('error');
//     check.parentElement.classList.add('error');
//   }
// }

function checkInputs() {
  const items = document.querySelectorAll('.item');
  const TxtCheckbox = document.querySelector('#terms');

  for (const item of items) {
    if (item.value == '') {
      item.classList.add('error');
      item.parentElement.classList.add('error');
    }

    if (items[1].value != '') {
      checkEmail();
    }

    items[1].addEventListener('keyup', () => {
      checkEmail();
    });

    item.addEventListener('keyup', () => {
      if (item.value != '') {
        item.classList.remove('error');
        item.parentElement.classList.remove('error');
      } else {
        item.classList.add('error');
        item.parentElement.classList.add('error');
      }
    });
    errorCheck();
    // TxtCheckbox.addEventListener('click', errorCheck());
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector('.error-txt.email');

  if (!email.value.match(emailRegex)) {
    email.classList.add('error');
    email.parentElement.classList.add('error');

    if (email.value != '') {
      errorTxtEmail.innerText = 'Adj meg egy valós email címet';
    } else {
      errorTxtEmail.innerText = 'Email cím mező nem lehet üres';
    }
  } else {
    email.classList.remove('error');
    email.parentElement.classList.remove('error');
  }
}

function errorCheck() {
  const errorTxtCheckbox = document.querySelector('.error-txt.check');

  if (!checkbox.checked) {
    terms.classList.add('error');
    terms.parentElement.classList.add('error');
  } else {
    terms.classList.remove('error');
    terms.parentElement.classList.remove('error');
  }
}

// Form check for errors
form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains('error') &&
    !birthName.classList.contains('error') &&
    !birthPlace.classList.contains('error') &&
    !birthDate.classList.contains('error') &&
    !motherName.classList.contains('error') &&
    !email.classList.contains('error') &&
    !phone.classList.contains('error') &&
    !billName.classList.contains('error') &&
    !billAddress.classList.contains('error') &&
    !mess.classList.contains('error') &&
    checkbox.checked
  ) {
    sendEmail();
    // console.log('OK');
    form.reset();
    return false;
  }
});

//Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement('div');
//   flex.style.display = 'flex';
//   flex.style.flexDirection = 'column';
//   flex.style.rowGap = '1px';

//   flex.appendChild(document.createElement('div'));
//   flex.appendChild(document.createElement('div'));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);

//   if (!isSupported) document.body.classList.add('no-flexbox-gap');
// }
// checkFlexGap();

/*
<p><a onclick="javascript:ShowHide('HiddenDiv')">Read more</a></p>
<div class="mid" id="HiddenDiv" style="display: none;">
    <font face="Arial" size="+2" color="#306Eff" align="right">YOUR REST OF THE TEXT HERE YOUR REST OF THE TEXT HERE
 YOUR REST OF THE TEXT HERE YOUR REST OF THE TEXT HERE YOUR REST OF THE TEXT HERE YOUR REST OF THE TEXT HERE YOUR REST OF THE TEXT HERE YOUR REST OF THE TEXT HERE
</div>
<script type="text/javascript">// <![CDATA[
function ShowHide(divId)
{
    if(document.getElementById(divId).style.display == 'none')
    {
        document.getElementById(divId).style.display='block';
    }
    else
    {
        document.getElementById(divId).style.display = 'none';
    }
}
// ]]></script>

*/

// const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
