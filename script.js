import {NewsElementCreator} from "./library/creators/NewsElementCreator.js";
import {UserElementCreator} from "./library/creators/UserElementCreator.js";
import {FormElementCreator} from "./library/creators/FormElementCreator.js";
import {AbstractElementFactory} from "./library/AbstractFactory/ElementFactory.js";
import {Singleton} from "./library/Singleton/Singleton.js";
import {CalculatorCreator} from "./library/creators/CalculatorCreator.js";
import {addElem} from "./library/Builder/addElem.js";
import {getCalculate} from "./library/Adapter/Calculate.js";
import {Director} from "./library/Builder/Director.js";
import {MessageElement} from "./library/Prototype/Proto.js";
import {MessageProto} from "./library/Prototype/Proto.js";
import {SearchCreator} from "./library/creators/SearchCreator.js";
import {getFetch} from "./library/Facade/Fetch.js";
import {dbBooksCreator} from "./library/creators/dbBooksCreator.js";
import {getBooks} from "./library/Flyweight && Decorator/db.js";
import {LocationCreator} from "./library/creators/LocationCreator.js";
import {GetLocation} from "./library/Proxy/Proxy.js";
import {GetDOM} from "./library/Composite/Composite.js";
import {Observer} from "./library/Observer/Observer.js";
import {ObserverCreator} from "./library/creators/ObserverCreator.js";
import {BankCreator} from "./library/creators/BankCreator.js";
import {Get_ResBunk} from "./library/Chain of Responsibility/ChainofResponsibility.js";
import {OrderCreator} from "./library/creators/OrderCreator.js";
import {GetOrder} from "./library/Strategy/Strategy.js";


client(new AbstractElementFactory('header'), {})


let butt = document.createElement('button')
butt.id = "time"
butt.innerHTML = "Скільки часу я знаходжусь на сайті?"
document.body.appendChild(butt);
let Singleton_time = new Singleton()
butt.addEventListener('click', function TimeGet() {
    let timeDiff = Math.abs(Singleton_time.GetTime - new Date().getTime())
    alert("Ви вже на сайті " + Math.ceil(timeDiff / (1000)) + " секунд")
})


client(new NewsElementCreator(), {
    title: 'Title of news',
    image: 'img/news.png',
    text: 'Text of news',
    link: '#'
});
client(new UserElementCreator(), {
    firstName: 'Ivan',
    lastName: 'Ivanenko',
    avatar: 'img/1.png'
});
client(new UserElementCreator(), {
    firstName: 'Ivan',
    lastName: 'Ivanenko1',
    avatar: 'img/1.png'
});

client(new FormElementCreator(), {});

function client(creator, params) {
    creator.createAndAppendTo(document.body, params);
}


client(new CalculatorCreator(), {})

//Builder
let square = new Director()
addElem(square.ConstructSquare())

//Prototype
let proto = new MessageElement('Привіт')
proto.send()
let prototype = new MessageProto(proto)
let newelement = prototype.clone()
newelement.send()

//Facade
client(new SearchCreator(), {})

client(new dbBooksCreator(), {})

client(new LocationCreator(), {})

client(new ObserverCreator(), {})

client(new BankCreator(), {})

client(new OrderCreator(), {})

client(new AbstractElementFactory('footer'), {})


//Adapter
getCalculate()

//
getFetch()

//
getBooks()

//Proxy
GetLocation()

//Composite
GetDOM()

//Observer
Observer()

//ChainOf...
Get_ResBunk()

//Strategy
GetOrder()