document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); // Clear the form
                formMessage.textContent = '회원가입이 성공적으로 완료되었습니다!';
                formMessage.className = 'form-message success';
                formMessage.classList.remove('hidden');
            } else {
                const data = await response.json();
                if (data.errors) {
                    formMessage.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    formMessage.textContent = '회원가입 중 오류가 발생했습니다.';
                }
                formMessage.className = 'form-message error';
                formMessage.classList.remove('hidden');
            }
        });
    }
});
