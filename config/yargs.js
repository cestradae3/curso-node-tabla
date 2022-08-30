const { describe, options } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default: false,
        describe:'Muestra la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Hasta que número quiere multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .check((argv,options)=>{
        if(isNaN(argv.h)){
            throw 'El hasta debe ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;