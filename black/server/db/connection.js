const mongoose = require('mongoose');

const url = `mongodb+srv://sarita5:<Kissu@0111>@cluster0.bqakv2w.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))