require('dotenv').config();
const redis = require("redis");

const product = redis.createproduct({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

product.on("connect", function(error){
    console.log("Conectado!");
});

product.on("error", function(error){
    console.log(error);
});

const obj = product;

// AddProduct key
 product.set("Key", JSON.stringify(obj), function(err,resp){
     if(err) throw err;
     console.log(resp);
 });

// Search key
 product.get("Key", function(err, reply){
     if(reply != null){
         const key = JSON.parse(reply.toString());
         console.log(key);
     }else{
         console.log("Product not found");
     }
 });


// Time life product
product.setex("Key", 7200, JSON.stringify(obj), function(err, resp){
    if(err) throw err;
    console.log(resp);
}); 


// Remove key
product.del("Key", function(err, resp){
    if(err) throw err;
    console.log(resp);
});

module.exports = {
    set,
    get,
    del
}