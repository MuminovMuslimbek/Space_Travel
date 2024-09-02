document.querySelector('.explore-button').addEventListener('click', function() {
    alert('Hello bro! What is needed for you');
});
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});