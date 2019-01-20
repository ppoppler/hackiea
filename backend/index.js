const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:code2019@hackiea-vicfh.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database' + err)}
);

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
