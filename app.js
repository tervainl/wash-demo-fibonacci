import init, { fibonacci as fibonacci } from "./pkg/hello_wasm.js";


const vm = new Vue( {
    data: {
        n: 41,
        ansJs: [],
        ansWasm: [],
        timeJs: 0,
        timeWasm: 0,
    },
    methods: {
        runInJs: runInJs,
        runInWasm: runInWasm,
    },
    mounted:function(){
        init()
    }
} );

vm.$mount( '#app' );

function runInJs() {
    const start = new Date();
    const ans = fibonacciJs( this.n );
    this.ansJs.unshift( ans );
    const end = new Date();
    this.timeJs = ( end - start ) / 1000;
}

function fibonacciJs( n ) {
    switch ( n ) {
        case 0:
            return 1;
        case 1:
            return 1;
        default:
            return fibonacciJs( n - 1 ) + fibonacciJs( n - 2 );
    }
}

function runInWasm() {
    const start = new Date();
    const ans = fibonacci( this.n );
    this.ansWasm.unshift( ans );
    const end = new Date();
    this.timeWasm = ( end - start ) / 1000;
}
