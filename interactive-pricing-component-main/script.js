// const toggle = document.querySelector('[aria-pressed]');
//
// toggle.addEventListener('click', (e) => {
//     let pressed = e.target.getAttribute('aria-pressed') === 'true';
//     e.target.setAttribute('aria-pressed', String(!pressed));
// });
window.onload = function () {

    showResult()
    pageViews.innerText = "Page Views: " + viewScale.value
};

// function amIOn() {
//     alert('is this thing on?')
// };




function showResult() {
    let yBilling = document.getElementById('switch')
    const pageViews = document.getElementById('total-views')
    let newPrice = document.getElementById('new-price')
    pageViews.style.color = 'yellow'
    const viewScale = document.getElementById('views')

    let newViewValue = viewScale.value

//changes pageviews number to whatever the range slider chages to
    function setViewsEventListener () {

            viewScale.addEventListener('change', (e) => {
                // console.log('page views: ', viewScale.value)
                let price = Math.round((viewScale.value * .0005))
                if (yBilling.checked == true) {
                    price = price * 0.75
                    newPrice.innerText = `$${price}/ month`
                }
                pageViews.innerText = "Page Views: " + viewScale.value
                newPrice.innerText = `$${price}/ month`


        })

        console.log(newViewValue)
    }

    // function updatePrice () {
    //
    //     yBilling.addEventListener('change', () => {
    //             if (yBilling.checked === true) {
    //                 newPrice.innerText =
    //             }
    //
    //     })
    // }

    setViewsEventListener()

}



