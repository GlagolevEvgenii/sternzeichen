const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {

        const menuBtnRef = document.querySelector("[data-menu-button]");
        const mobileMenuRef = document.querySelector("[data-menu]");
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.addEventListener("click", () => {
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
            document.body.classList.toggle("is-open");
        });
        mobileMenuRef.addEventListener("click", () => {
            menuBtnRef.classList.toggle("is-open");
            menuBtnRef.setAttribute("aria-expanded", !expanded);

            mobileMenuRef.classList.toggle("is-open");
            document.body.classList.toggle("is-open");
        });

        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 466 ||
                document.documentElement.scrollTop > 466
            ) {
                document.querySelector(".nav").classList.add("nav--sticky");
            } else {
                document.querySelector(".nav").classList.remove("nav--sticky");
            }
        }



        const buttons = document.querySelectorAll('.btn-acc');

        buttons.forEach(function(btn) {
            const hiddenContent = btn.closest('.block').querySelector('.block-content--hidden');
            const block = btn.closest('.block');

            btn.addEventListener('click', function() {
                if (hiddenContent.style.maxHeight) {
                    hiddenContent.style.maxHeight = null;
                    btn.classList.remove('active');
                    block.classList.remove('active');
                } else {
                    hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
                    btn.classList.add('active');
                    block.classList.add('active');
                }
            });
        });
    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
