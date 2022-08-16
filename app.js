function showTable() {
    var tableOf = document.getElementById("getNumberOfTable").value;
    for (var i = 1; i < 11; i++) {
        // document.write(tableOf + " x " + i + " = " + i * tableOf + "<br>")
        document.write(`${tableOf} x ${i} = ${i*tableOf} <br> `)
    }
}