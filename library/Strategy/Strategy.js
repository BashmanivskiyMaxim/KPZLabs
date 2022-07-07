let Shipping = function () {
    this.company = "";
};

Shipping.prototype = {
    setStrategy: function (company) {
        this.company = company;
    },

    calculate: function (package1) {
        return this.company.calculate(package1);
    }
};
let company1 = function () {
    this.calculate = function (package1) {
        return 100 + (package1.dest * 0.25) + (package1.price * 0.3) + (package1.weight * 2);
    }
};
let company2 = function () {
    this.calculate = function (package1) {
        return 90 + (package1.dest * 0.55) + (package1.price * 0.8) + (package1.weight * 3);
    }
};
let company3 = function () {
    this.calculate = function (package1) {
        return 110 + (parseInt(package1.dest) * 0.1) + (parseInt(package1.price) * 0.4) + (parseInt(package1.weight))
    }
}

class Package {
    constructor(dest, weight, price) {
        this.dest = dest
        this.weight = weight
        this.price = price
    }
}


export function GetOrder() {

    let price = document.getElementById('price')
    let dest = document.getElementById('dest')
    let vag = document.getElementById('vag')

    let company1_v = document.getElementById('order1')
    let company2_v = document.getElementById('order2')
    let company3_v = document.getElementById('order3')

    let c1 = new company1()
    let c2 = new company2()
    let c3 = new company3()

    let res_text = document.getElementById('Result_textareaOrder')

    let shipping = new Shipping()
    shipping.setStrategy(company1)

    company1_v.addEventListener('click', function getRes() {
        let order = new Package(parseInt(dest.value), parseInt(vag.value), parseInt(price.value))
        shipping.setStrategy(c1)
        res_text.value = shipping.calculate(order)
    })
    company2_v.addEventListener('click', function getRes() {
        let order = new Package(parseInt(dest.value), parseInt(vag.value), parseInt(price.value))
        shipping.setStrategy(c2)
        res_text.value = shipping.calculate(order)
    })
    company3_v.addEventListener('click', function getRes() {
        let order = new Package(parseInt(dest.value), parseInt(vag.value), parseInt(price.value))
        shipping.setStrategy(c3)
        res_text.value = parseInt(shipping.calculate(order))
    })

}