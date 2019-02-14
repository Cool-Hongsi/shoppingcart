const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  "id": {
    "type" : String,
    "unique" : true // unique value is mandatory
  },
  "name" : String,
  "picURL" : String,
  "quantity" : Number,
  "price" : Number,
  "description" : String
  },
  {versionKey : false}
);

let product;
let db = mongoose.createConnection("mongodb://kh0626:alclsajdrn0626@ds161794.mlab.com:61794/ecommerce", 
    { useNewUrlParser: true,
      useCreateIndex: true, }
);
db.on('error', (err) => {
    console.log(err);
});
db.once('open', () => {
    product = db.model("products", productSchema); // put -s
    console.log('Connected Database');
});

module.exports.selectAllProduct = () => {
    return new Promise((resolve, reject) => {
        product.find({}).sort({ id : 0 }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
};

// module.exports.selectOneProduct = (productData) => {
//     return new Promise((resolve, reject) => {
//         product.find({id : productData.id}).exec().then((data) => {
//             resolve(data);
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// };

module.exports.insertProduct = (productData) => {
    return new Promise((resolve, reject) => {
        product.create(productData).then(() => { // without exec()
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.updateProduct = (productData) => {
    return new Promise((resolve, reject) => {
        product.updateOne(
            {id : productData.id},
            {$set : 
                {name : productData.name, picURL : productData.picURL, quantity : productData.quantity, price : productData.price,
                description : productData.description}
            }).exec().then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            })
    })
}

module.exports.deleteProduct = (productData) => {
    return new Promise((resolve, reject) => {
        product.deleteOne({id : productData.id}).exec().then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}

module.exports.shoppingCart = (productId) => {
    return new Promise((resolve, reject) => {
        product.findById(productId, (err, product) => {
            if(err) {
                reject(err);
            }
            resolve(product);
        })
    })
}

