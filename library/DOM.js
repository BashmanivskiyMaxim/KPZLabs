export class DOM {
    static tag(params) {
        const element = document.createElement(params.name); //Створення тегу
        if (typeof params.class === 'string') { //Перевірка на тип даних елементу
            element.classList.add(params.class);
        }
        if (params.class instanceof Array) {  //Якщо елемент масив
            params.class.forEach(
                (elem) =>
                    element.classList.add(elem)
            )
        }
        if (params.attributes !== undefined) { //Чи є атрибути у елемента
            for(let attrName in params.attributes) {
                element.setAttribute(attrName, params.attributes[attrName]); // Додавання атрибуту
            }
        }
        if (typeof params.content === 'string') {
            element.innerHTML = params.content;
        }
        if (params.content instanceof Array) {
            params.content.forEach((elem) => {
                element.appendChild(elem);
            })
        }
        if (params.content instanceof HTMLElement) {
            element.appendChild(params.content);
        }
        return element;
    }
}