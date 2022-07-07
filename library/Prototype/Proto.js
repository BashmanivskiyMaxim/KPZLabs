export function MessageProto(proto){
    this.proto = proto
    this.clone = function(){
        let mess = new MessageElement()
        mess.message = proto.message
        return mess

    }
}

export class MessageElement{
    constructor(message) {
        this.message = message
    }
    send(){
        alert('Повідомлення: ' + this.message)
    }
}
