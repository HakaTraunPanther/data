const express = require('express');
const app = express();
const port = 3000;

// Beispiel-Daten für Produkte
const products = [
    { id: 1, name: 'Produkt 1', description: 'Beschreibung von Produkt 1', price: 10.00 },
    { id: 2, name: 'Produkt 2', description: 'Beschreibung von Produkt 2', price: 20.00 },
    { id: 3, name: 'Produkt 3', description: 'Beschreibung von Produkt 3', price: 30.00 }
];

// GET Endpoint, um die Produktliste zu erhalten
app.get('/api/products', (req, res) => {
    res.json(products);
});

// GET Endpoint, um ein spezifisches Produkt nach ID zu erhalten
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Produkt nicht gefunden');
    }
});

app.listen(port, () => {
    console.log(`Beispiel-API läuft auf http://localhost:${port}`);
});
