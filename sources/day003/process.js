console.log(process.env);
console.log(process.argv);
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.memoryUsage());
console.log(process.hrtime());
console.log(process.uptime());

/**
process.env: um objeto que armazena todas as variáveis de ambiente definidas pelo usuário.
process.argv: um array que contém os argumentos da linha de comando.
process.cwd: o diretório atual do processo.
process.version: a versão do Node.js.
process.arch: a arquitetura do sistema operacional.
process.platform: a plataforma do sistema operacional.
process.memoryUsage: um objeto que fornece informações sobre o uso de memória do processo.
process.hrtime: um objeto que fornece informações sobre o tempo de execução do processo.
process.uptime: o tempo decorrido desde que o processo foi iniciado.
 */