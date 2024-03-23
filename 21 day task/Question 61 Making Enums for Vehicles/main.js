var vehicletype;
(function (vehicletype) {
    vehicletype[vehicletype["car"] = 0] = "car";
    vehicletype[vehicletype["truck"] = 1] = "truck";
    vehicletype[vehicletype["train"] = 2] = "train";
})(vehicletype || (vehicletype = {}));
console.log(vehicletype.train);
