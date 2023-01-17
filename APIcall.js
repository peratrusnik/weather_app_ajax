class APIcall{
    static getData = (cityName) => {
        const apiKey = `40eb24f0f19eccfff6c979d1ca87e2fd`;
        
        return new Promise((resolve, reject) => {
            let xml = new XMLHttpRequest();
            let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`
            xml.open('get', url);
            xml.onreadystatechange = () => {
                if (xml.readyState === 4 && xml.status === 200) {
                    resolve(JSON.parse(xml.responseText));
                } else if (!cityName) {
                    reject('You must input city name!');
                } else if (xml.status === 404) {
                    reject('Wrong city name!');                    
                }
            }
            xml.send();
            
        })
    }
    static getData2 = (cityName) => {
        const apiKey = `40eb24f0f19eccfff6c979d1ca87e2fd`;
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

        return fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();                    
                } else if (res.status === 404) {
                    return false;
                }                
            })
 }}