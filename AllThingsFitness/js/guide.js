document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const nextBtn = slider.parentElement.querySelector('.next-btn');
        const prevBtn = slider.parentElement.querySelector('.prev-btn');
        let index = 0;

        function showSlide(newIndex) {
            if (newIndex >= slides.length) {
                index = 0;
            } else if (newIndex < 0) {
                index = slides.length - 1;
            } else {
                index = newIndex;
            }
            slider.style.transform = `translateX(-${index * 101}%)`;
        }

        nextBtn.addEventListener('click', () => {
            showSlide(index + 1);
        });

        prevBtn.addEventListener('click', () => {
            showSlide(index - 1);
        });

        showSlide(index); // Initialize the first slide
    });
});

(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '66c50a6c85bb03dcd77f1706' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');