export class Component {
    constructor() {
        this.value = "";
        this.elements = [];
        this.traversed = []
    }
    getResult() {
        throw "getResult method must be defined";
    }
}


export class Composite extends Component {
    constructor(value) {
        if (typeof value === "undefined") {
            throw "value must be defined";
        }
        super();
        this.value = value;


    }
    // добавление узла
    add(element) {
        if (!element instanceof Component) {
            throw "wrong type, must be Component";
        }
        this.elements.push(element);
    }
    getResult(agregator) {
        this.elements.forEach(element => {
            if (element instanceof Leaf) {
                agregator.push("лист " + this.value + ", зі значенням '" + element.getResult() + "'");
            } else {
                if (this.traversed.indexOf(this) < 0) {
                    agregator.push("вузол " + this.value);
                }
                this.traversed.push(this);
                element.getResult(agregator);
            }
        });
    }
}

export class Leaf extends Component {
    constructor(value) {
        if (typeof value === "undefined") {
            throw "value must be defined";
        }
        super();
        this.value = value;
    }
    getResult() {
        return this.value;
    }
}

// <html>
//     <head>
//         <body>
//             <div>
//                 <h1>JavaScript Bxnotes</h1>
//                 <p>
//                     Hello Composite!
//                 </p>
//             </div>
//         </body>
//    </head>
// </html>



export function GetDOM(){
    const html = new Composite("html");
    const head = new Composite("head");
    const body = new Composite("body");
    const div = new Composite("div");
    const h1 = new Composite("h1");
    const p = new Composite("p");

    const h1_value = new Leaf("Заголовок");
    const p_value = new Leaf("Текст");

    p.add(p_value);
    h1.add(h1_value);
    div.add(h1);
    div.add(p);
    body.add(div);
    head.add(body);
    html.add(head);

    const result = [];
    html.getResult(result);
    console.log(result);

}
