const fs = require("fs")
const util = require("util")

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(fileName, data) {
        try {
            console.log("Criando Arquivo HTML...")
            await this.writer(fileName, data)
            console.log("Arquivo HTML criado!")
            console.log("Criando PDF...")
            return true
        } catch {
            return false
        }

    }


}

module.exports = Writer