class EventObserver {
    constructor () {
        this.observers = []
    }

    subscribe (fn) {
        this.observers.push(fn)
    }

    unsubscribe (fn) {
        this.observers = this.observers.filter(
            subscriber => subscriber !== fn
        )
    }

    broadcast (data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

export function Observer(){
    const blogObserver = new EventObserver()

    const Obs_res = document.getElementById('Obs_res')
    const Result_textarea3 = document.getElementById('Result_textarea3')

    const getWordsCount = text =>
        text ? text.trim().split(/\s+/).length : 0

    blogObserver.subscribe(text => {
        Obs_res.value = getWordsCount(text)
    })

    Result_textarea3.addEventListener('keyup', () => {
        blogObserver.broadcast(Result_textarea3.value)
    })
}
