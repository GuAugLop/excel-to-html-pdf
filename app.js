const Reader = require("./Reader");
const Writer = require("./Writer");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HTMLParser");
const PDFWriter = require("./PDFWriter")

const writer = new Writer();
const reader = new Reader();

async function main(){
    var data = await reader.Read("./data.csv")
    var dataProcess = Processor.Process(data)

    var users = new Table(dataProcess)
    var html = await HtmlParser.Parse(users)

    writer.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}main();

