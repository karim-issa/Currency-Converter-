function api()
{
      const FROM = document.getElementById("from").value ;
      const TO = document.getElementById("to").value ;
      const AMOUNT = document.getElementById("amount").value ;
      const url = "https://api.apilayer.com/exchangerates_data/convert?to="+TO+"&from="+FROM+"&amount="+AMOUNT ; 
      console.log(FROM);
      console.log(TO);
      console.log(AMOUNT);
      var myHeaders = new Headers();
      myHeaders.append("apikey", "BiZaHIen6GUiI9bNr8KUHfC5fCm0rY1s");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    } ;
    
    fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => { var res = result.split(',')[7] ; FINAL = res.substr(14,8) ; 
    document.getElementById("final").innerText = AMOUNT + " " + FROM + " = " + FINAL + " " + TO ;    })
    .catch(error => console.log('error', error));
}   