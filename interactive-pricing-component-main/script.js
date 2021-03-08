window.onload = function () {

    showResult()

};


function showResult() {
    let yBilling = document.getElementById('switch')
    const pageViews = document.getElementById('total-views')
    let newPrice = document.getElementById('new-price')

    const viewScale = document.getElementById('views')



//changes pageviews number to whatever the range slider changes to.  Only updates after change event has finished
    function setViewsEventListener () {

            viewScale.addEventListener('input', (e) => {
                let newViewValue = viewScale.value
                let price = Math.round(newViewValue)
                if (yBilling.checked) {
                    pageViews.innerText = "Page Views: " + newViewValue +"k"
                    newPrice.innerText = `$${viewScale.value * 0.75}/ month`
                }
                else {
                    pageViews.innerText = "Page Views: " + newViewValue +"k"
                    newPrice.innerText = `$${price}/ month`}
                })


    }

    function yearlyBilling () {
        yBilling.addEventListener('click', (e) => {
            if (yBilling.checked === true) {

                newPrice.innerText = `$${viewScale.value * 0.75}/ month`
            }
            else {
                newPrice.innerText = `$${viewScale.value * 1.0}/ month`
            }

        })
    }
    yearlyBilling()
    setViewsEventListener()

}



