const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.use(express.json());

app.listen(port, function() {
    console.log(`서버 실행중 : http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'main.html'));
});

app.post('/save', function(req, res) {
    const reservationInfo = req.body;
    console.log('예약 정보 도착:', reservationInfo);
    res.json({ message: '예약 정보 저장(현재 서버에 있음 DB에 넣든 결정)' });
});

app.post('/cancel', function(req, res) {
    res.json({ message: '예약이 취소되었습니다. '})
})

module.exports = app;