const http = require("http");
const PORT = 3000;
const host = "localhost";
const url = `http://${host}:${PORT}`;
 
const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(`Requisição em ${url}`);


     const headers = { "Content-Type": "text/html; charset=utf-8" };

    switch (url) {
        case "/":
            res.writeHead(200, headers);
            res.write(`<h1>Status:200 <img src="https://http.cat/200" alt="200" /></h1>
                <p>Tudo certo!</p>
            `);
            break;
        case "/erro-interno":
            res.writeHead(500, headers);
            res.write(`<h1>Status:500 <img src="https://http.cat/500" alt="500" /></h1>
                <p>Erro Interno</p>
            `);
            break;
        
        default:
            res.writeHead(404, headers);
            res.write("<h1>Página Não Encontrada <img src=\"https://http.cat/404\" alt=\"404\" /></h1>");
            break;
    }
    res.write(`Rota atual: ${req.url}`);
    res.end();
});
 
server.listen(3000, () => {
  console.log(`Server is running on ${url}`);
  console.log(`Awating clicks/route changes...`);
});