export function addElem(obj){
    let canvas1 = document.createElement('canvas')
    canvas1.id = 'canvas1'
    canvas1.width = 500
    canvas1.height = 200
    canvas1.style = "border:1px solid #d3d3d3"
    document.body.appendChild(canvas1);

    let c = document.getElementById('canvas1')
    let ctx = c.getContext('2d')
    ctx.beginPath();

    if(obj.rotate !== 0){
        ctx.rotate(obj.rotate)
    }

    if(obj.width !== 0 && obj.height !== 0){
        ctx.rect(20, 20, obj.width, obj.height);
    }
    else throw 'Помилка створення!'
    if(obj.color !== 0){
        ctx.fillStyle = obj.color
        ctx.fill()
    }
    if(obj.text !== 0){
        ctx.fillStyle = 'black'
        ctx.fillText(obj.text, 50, 50)
    }
    ctx.stroke();
}