let products = [{ id: 1, name: "Shoe", category: "shoes", price: 100 }];
module.exports = {
    listAllProds: (req, res, next) => {
        res.send(products);
    },
    listProdWithCat: (req, res, next) => {
        let p = products.filter((i) => i.category === req.query.category);
        if (p.length > 0) {
            res.send(p);
        }
        else res.status(400).send("Product not found")
    },
    postProduct: (req, res, next) => {
        products.push({ ...req.body });
        res.send({ ...req.body })
    },
    updateProduct: (req, res) => {
        let p = products.findIndex(i => i.id == req.params.id);
        if (p < 0) {
            res.status(400).send("Product not found")
        }
        else {
            products[p] = { ...req.body };
            res.send({ ...req.body })
        }
    }
};
