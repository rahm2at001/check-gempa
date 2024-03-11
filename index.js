const axios = require('axios');

class CheckGempa {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json ;
    }
}

async gempa(Tanggal, Jam, DateTime, Magnitude) {
    try {
            const response = await axios.get(`${this.apiUrl}/gempa`, {
               param: {
                    Tanggal: Tanggal,
                    Jam: Jam,
                    Date: DateTime,
                    Magnitude: Magnitude,
               } 
            });

            if (response.data.succsess) {
                response.data.result;
            } else {
                throw new Error(response.data.Error);
            }
            catch (Error) {
                throw new Error(`Failed Input Data :{error.massage}`);
            }
    }
}

module.export = CheckGempa;