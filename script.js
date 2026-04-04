document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.btn-glow');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const scriptCode = button.getAttribute('data-script');

            navigator.clipboard.writeText(scriptCode).then(() => {
                const originalText = button.innerText;
                button.innerText = "COPIED!";
                button.style.boxShadow = "0 0 30px #ffffff";

                setTimeout(() => {
                    button.innerText = originalText;
                    button.style.boxShadow = "";
                }, 2000);
            }).catch(err => {
                alert("Error copying script.");
            });
        });
    });
});