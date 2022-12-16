async function requestData() {
    const requestURL = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
    const request = new Request(requestURL)

    const response = await fetch(request)
    const cryptoInfo = await response.json()
    const body = document.querySelector('body')
    const cryptoCode = document.querySelector('.code')
    const cryptoPrice = document.querySelector('.price')

    cryptoCode.innerText = cryptoInfo.symbol
    cryptoPrice.innerText = cryptoInfo.price
    console.log(cryptoInfo.symbol, cryptoInfo.price)
}
requestData()
setInterval(requestData, 5000)
