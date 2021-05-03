// const assert = require("assert");
// const { assert: chaiAssert, expect } = require("chai");

// describe("Simple Math test", () => {
//     it("should return 2+2=4", () => {
//         assert.equal(2 + 2, 4);
//     });
//     it("should return null", () => {
//         assert.equal(1 + 0, null)
//     });
//     it("numbers sum should be above 5", () => {
//         let sum = () => 2 + 2;
//         chaiAssert.isAbove(sum(), 3)
//     })
// });
// describe("Array", () => {
//     describe("#indexOf()", () => {
//         it("should return -1 if value is not present", () => {
//             assert.equal([1, 2, 3].indexOf(4), -1)
//         })
//     })
// });
// describe("function", () => {
//     it("func hello should return hello", () => {
//         assert.equal(hello(), "hello");
//     })
// });

// const hello = () => {
//     return "hello"
// }
const assert = require("assert")
const Product = require("../app/models/ProductModel");
const connectDB = require("../config/connectDatabase").connectDB;
const mongoose = require("mongoose");
describe("Product", () => {
    before((done) => {
        connectDB().then(() => {
            done()
        });

    });
    describe("#save", () => {
        it("Add Product", (done) => {

            let u = new Product({ name: "abc", category: "Shoe", price: 100 });
            u.save().then(p => {
                assert(!p.isNew);
                done()
            })

        });
    });

    describe('#findOne', () => {
        it("Find Product with name abc", (done) => {
            new Promise(async (resolve, reject) => {
                let u = await Product.findOne({ name: "abc" });
                if (u) {
                    resolve();
                }
                else {
                    let e = new Error("Product with abc not found")
                    reject(e);
                }

            }).then(done).catch(e => {
                done(e)
            })


        })
    });
    describe("#findOneAndUpdate", () => {
        it("Update product category with name abc and now its category should be drink", (done) => {
            new Promise(async (resolve, reject) => {
                await Product.findOneAndUpdate({ name: "abc" }, {
                    $set: {
                        category: "drink"
                    }
                }).then(() => resolve()).catch(e => reject(e));
            }).then(done);
        })
        it("now reading abc name category", (done) => {
            new Promise(async (resolve, reject) => {
                let p = await Product.findOne({ name: "abc" });
                if (p && p.category == "drink") {
                    resolve();
                }
                else if (!p) reject("Product not found")
                else reject("Category not changed");
            }).then(done).catch(e => {
                done(e)
            })
        })
    });
    describe("#findOneAndRemove", () => {
        it("find product abc and remove", (done) => {

            Product.findOneAndRemove({ name: "abc" }).then((r) => {

                if (!r) done(new Error("Product not found"));
                else done();
            }).catch(err => {
                done(err);
            })
        })
    })

    after((done) => {
        mongoose.connection.collections['products'].drop(function (err) {

            if (err) done(err);
            else done()
        });
    })
})