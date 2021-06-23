/**
 * Total merupakan uang yang diharapkan
 * jumlah20 merupakan jumlah pecahan 20 ribu
 * jumlah50 merupakan jumlah pecahan 50 ribu
 * jumlah100 merupakan jumlah pecahan 100 ribu
 */
function count(total, jumlah20, jumlah50, jumlah100) {
    const pecahan20 = 20000
    const pecahan50 = 50000
    const pecahan100 = 100000

    let procPecahan20 = 0
    let procPecahan50 = 0
    let procPecahan100 = 0

    let sisa100 = 0
    let sisa50 = 0
    let sisa20 = 0
    let totalSisa = 0

    if(total < pecahan20) {
        totalSisa = total
    } else if(total < pecahan50) {
        procPecahan20 = getMax(total, pecahan20, jumlah20)
        totalSisa = total - procPecahan20 * pecahan20 
    } else if(total < pecahan100) {
        procPecahan50 = getMax(total, pecahan50, jumlah50)

        sisa50 = total - procPecahan50 * pecahan50
        procPecahan20 = getMax(sisa50, pecahan20, jumlah20)

        if(sisa50 >= pecahan20) {
            sisa20 = sisa50 - procPecahan20 * pecahan20
        }

        totalSisa = sisa20
    } else {
        procPecahan100 = getMax(total, pecahan100, jumlah100)

        sisa100 = total - procPecahan100 * pecahan100
        
        if(sisa100 >= pecahan50) {
            procPecahan50 = getMax(sisa100, pecahan50, jumlah50)
            sisa50 = sisa100 - procPecahan50 * pecahan50
        } else {
            sisa50 = sisa100
        }

        if(sisa50 >= pecahan20) {
            procPecahan20 = getMax(sisa50, pecahan20, jumlah20)
            sisa20 = sisa50 - procPecahan20 * pecahan20
        } else {
            sisa20 = sisa50
        }

        totalSisa = sisa20
    }

    const data = {
        totalSisa, procPecahan20, procPecahan50, procPecahan100
    }

    return data
}

function getMax(total, nominal, jumlah) {
    let batas = jumlah
    
    if(Math.floor(total / nominal) < jumlah) {
        batas = Math.floor(total / nominal)
    }

    return batas
}
