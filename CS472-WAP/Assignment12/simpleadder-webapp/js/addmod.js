/***
 * addmod.js
 * @author ashok
 * @since 2022-03-11
 */
exports.add=function(req,res,vals){
    const sum=parseFloat(vals.first)+parseFloat(vals.second);
    res.writeHead(200,{
        "Content-Type": "text/html"
    });
    const content = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Calculator webapp</title>
        <head>
        <body>
            <p>The sum is ${String(sum)}</p>
        </body>    
    </html>
    `;
    res.write(content);
    res.end();
}