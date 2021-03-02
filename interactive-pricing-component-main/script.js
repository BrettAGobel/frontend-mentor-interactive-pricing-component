// const toggle = document.querySelector('[aria-pressed]');
//
// toggle.addEventListener('click', (e) => {
//     let pressed = e.target.getAttribute('aria-pressed') === 'true';
//     e.target.setAttribute('aria-pressed', String(!pressed));
// });
window.onload = function () {
    showResult()
};

// function amIOn() {
//     alert('is this thing on?')
// };




function showResult() {
    const pageViews = document.getElementById('total-views')
    pageViews.style.color = 'yellow'
    const viewScale = document.getElementById('views')
    function setViewsEventListener () {

            viewScale.addEventListener('change', () => {
                console.log('page views: ', viewScale.value)
                pageViews.innerText = "Page Views: " + viewScale.value

        })
    }
    setViewsEventListener()

}



