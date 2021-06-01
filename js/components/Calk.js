class Calk {
    constructor(selector) {
        this.DOM = document.querySelector(selector);
        this.buttonsData = [
            { title: 'C', color: 'pilkas' },
            { title: '+/-', color: 'pilkas' },
            { title: '%', color: 'pilkas' },
            { title: '/', color: 'tamsus' },
            { title: '1', color: 'baltas' },
            { title: '2', color: 'baltas' },
            { title: '3', color: 'baltas' },
            { title: 'x', color: 'tamsus' },
            { title: '4', color: 'baltas' },
            { title: '5', color: 'baltas' },
            { title: '6', color: 'baltas' },
            { title: '-', color: 'tamsus' },
            { title: '7', color: 'baltas' },
            { title: '8', color: 'baltas' },
            { title: '9', color: 'baltas' },
            { title: '+', color: 'tamsus' },
            { title: '0', color: 'baltas' },
            { title: '.', color: 'baltas' },
            { title: '<', color: 'baltas' },
            { title: '=', color: 'rau' },
        ];
        this.render();
    }
    render() {
        let HTML = `<main class="skaiciuotuvas">
        <div class="ekranas">000</div>
        <div class="ekranasMazas">4+5+9</div>
        <div class="mygtukas pilkas">C</div>
        <div class="mygtukas pilkas">+/-</div>
        <div class="mygtukas pilkas">%</div>
        <div class="mygtukas tamsus">/</div>
        <div class="mygtukas">1</div>
        <div class="mygtukas">2</div>
        <div class="mygtukas">3</div>
        <div class="mygtukas tamsus">x</div>
        <div class="mygtukas">4</div>
        <div class="mygtukas">5</div>
        <div class="mygtukas">6</div>
        <div class="mygtukas tamsus">-</div>
        <div class="mygtukas">7</div>
        <div class="mygtukas">8</div>
        <div class="mygtukas">9</div>
        <div class="mygtukas tamsus">+</div>
        <div class="mygtukas">0</div>
        <div class="mygtukas">.</div>
        <div class="mygtukas">&lt;</div>
        <div class="mygtukas rau">=</div>
        </main>`;

        this.DOM.innerHTML = HTML;
    }
}
export { Calk }