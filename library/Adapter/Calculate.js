import CalculatorAdapter from "./Adapter.js";

export function getCalculate(){

    const calcAdapter = new CalculatorAdapter()

    let plus = document.getElementById('operation1')
    let minus = document.getElementById('operation2')
    let multiply = document.getElementById('operation3')
    let devi =  document.getElementById('operation4')
    let res_input = document.getElementById('Result_input')
    let Elem1 = document.getElementById('FirstEl')
    let undo = document.getElementById('undo')

    function get_res(){
        return (calcAdapter.operation(parseInt(Elem1.value), 'get_value')).toString()
    }

    plus.addEventListener('click', function getRes() {
        calcAdapter.operation(parseInt(Elem1.value), 'add')
        res_input.value = get_res()
    })
    minus.addEventListener('click', function getRes() {
        calcAdapter.operation(parseInt(Elem1.value), 'minus')
        res_input.value = get_res()
    })
    devi.addEventListener('click', function getRes() {
        calcAdapter.operation(parseInt(Elem1.value), 'division')
        res_input.value = get_res()
    })
    multiply.addEventListener('click', function getRes() {
        calcAdapter.operation(parseInt(Elem1.value), 'multiplication')
        res_input.value = get_res()
    })
    undo.addEventListener('click', function getRes(){
        calcAdapter.operation(parseInt(Elem1.value), 'undo')
        res_input.value = get_res()
    })
}
