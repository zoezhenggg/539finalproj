document.addEventListener('DOMContentLoaded', function () {
    var filterButtons = document.querySelectorAll('.mixbutton');
    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var filterValue = this.getAttribute('data-filter');
            filterButtons.forEach(function (button) {
                button.classList.remove('mixitup-control-active');
            });
            this.classList.add('mixitup-control-active');
            var documentaries = document.querySelectorAll('.documentary');
            documentaries.forEach(function (doc) {
                if (filterValue === 'all') {
                    doc.style.display = '';
                } else {
                    if (doc.classList.contains(filterValue.substring(1))) {
                        doc.style.display = '';
                    } else {
                        doc.style.display = 'none';
                    }
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.getElementById('image-container');
    var images = imageContainer.getElementsByTagName('img');
    if (images.length > 0) {
        var imageWidth = images[0].clientWidth;

        document.getElementById('left-arrow').addEventListener('click', function () {
            imageContainer.scrollLeft -= imageWidth;
        });

        document.getElementById('right-arrow').addEventListener('click', function () {
            imageContainer.scrollLeft += imageWidth;
        });
    }
});
