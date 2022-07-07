export class Element {
    constructor(id, width, height, color, text, rotate) {
        this.id = id
        this.width = width
        this.height = height
        this.color = color
        this.text = text
        this.rotate = rotate
    }

}

export class ElementBuilder {
    constructor(id) {
        this.id = id
    }

    setWidth(width) {
        this.width = width
        return this
    }

    setHeight(height) {
        this.height = height
        return this
    }

    setColor(color) {
        this.color = color
        return this
    }

    setText(text) {
        this.text = text
        return this
    }

    setRotate(rotate) {
        this.rotate = rotate * Math.PI / 180
        return this
    }

    build() {
        return new Element(this.id, this.width, this.height, this.color, this.text, this.rotate)
    }
}


