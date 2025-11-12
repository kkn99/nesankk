// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
    }
});

// CTA Button - smooth scroll to contact
const ctaBtn = document.getElementById('ctaBtn');
ctaBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Handler
// const contactForm = document.getElementById('contactForm');
// const formMessage = document.getElementById('formMessage');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const formData = new FormData(contactForm);
//     const name = contactForm.children[0].value;
//     const email = contactForm.children[1].value;
//     const message = contactForm.children[2].value;
    
//     // Simulate form submission
//     if (name && email && message) {
//         formMessage.textContent = '✓ Message sent successfully! Thank you for contacting us.';
//         formMessage.classList.add('success');
//         formMessage.classList.remove('error');
//         contactForm.reset();
        
//         setTimeout(() => {
//             formMessage.textContent = '';
//             formMessage.classList.remove('success');
//         }, 3000);
//     } else {
//         formMessage.textContent = '✗ Please fill out all fields.';
//         formMessage.classList.add('error');
//         formMessage.classList.remove('success');
//     }
// });

// Scroll animation for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('✓ App initialized successfully!');

// var mouse = {
//       X   : 0,
//       Y   : 0,
//       CX  : 0,
//       CY  : 0
//     },
//     block = {
//       X   : mouse.X,
//       Y   : mouse.Y,
//       CX  : mouse.CX,
//       CY  : mouse.CY
//     },
//     imags = [
//       './images/img1.jpeg',
//       'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//       'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
//       'https://images.pexels.com/photos/210546/pexels-photo-210546.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
//       'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     ];

// $('.block').on('mousemove', function(e) {
//   mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
//   mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
// })

// $('.block').on('mouseleave', function(e) {
//   mouse.X   = mouse.CX;
//   mouse.Y   = mouse.CY;
// })

// setInterval(function(){

//   block.CY   += (mouse.Y - block.CY) / 12;
//   block.CX   += (mouse.X - block.CX) / 12;

//   $('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
//   $('.block').css({
//     transform : 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
//   })

// }, 20);

// Skills slider population and linear scrolling
;(function(){
    // images to show in skills slider (local first)
    const skillsImgs = [
        './images/html.svg',
        './images/css.svg',
        './images/react.svg',
        './images/javascript.svg',
        './images/sass.svg',
        './images/github.svg'
    ];

    $(function(){
        const $track = $('.skills-slider .track');
        if(!$track.length) {
            console.log('Skills slider not found');
            return;
        }

        console.log('Populating skills slider...');

        // clear any existing
        $track.empty();

        // append images
        skillsImgs.forEach((src, idx) => {
            const $img = $('<img>').attr('src', src).attr('alt', 'skill-' + idx);
            $track.append($img);
        });

        console.log('Appended ' + skillsImgs.length + ' images');

        // duplicate content for seamless scroll
        $track.append($track.html());

        // ensure images have some time to load/layout before starting animation
        let loaded = 0;
        const $imgs = $track.find('img');
        console.log('Total images in track: ' + $imgs.length);

        $imgs.each(function(){
            $(this).on('load error', () => {
                loaded++;
                console.log('Image loaded/errored: ' + loaded + '/' + $imgs.length);
                if(loaded >= $imgs.length){
                    // start scrolling
                    console.log('Starting scroll animation');
                    $track.addClass('scrolling');
                }
            });
        });

        // fallback: start after 1.5s if load events don't fire
        setTimeout(()=>{ 
            if(!$track.hasClass('scrolling')){
                console.log('Timeout: starting scroll via fallback');
                $track.addClass('scrolling'); 
            }
        }, 1500);
    });
})();
