import {ElementBuilder} from "./Builder.js";

export class Director{
    ConstructSquare(){
        const square = (new ElementBuilder('elem1'))
            .setWidth(200)
            .setRotate(45)
            .setColor('blue')
            .setHeight(200)
            .setText('qwerty')
            .build()
        return square
    }

}