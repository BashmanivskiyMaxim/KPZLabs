
export function Get_ResBunk() {

    let Request = function (amount) {
        this.amount = amount;
        return this.amount
    }

    Request.prototype = {
        get: function (bill) {
            let count = Math.floor(this.amount / bill);
            this.amount -= count * bill;
            text_res.value += "К-сть " + count + " " + bill + " грн" + '\n'
            return this
        }
    }

    let input = document.getElementById('SearchBank')
    let resb = document.getElementById('Result_Search')
    let text_res = document.getElementById('Result_Bank')

    resb.addEventListener('click', function Get_res(){
        let request = new Request(parseInt(input.value));
        request.get(100).get(50).get(20).get(10).get(5).get(1)
    })
}