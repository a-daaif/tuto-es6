function createRow(entree) {
    // entree : {ref, prix, qte}
    const tr = document.createElement('tr')

    const tdRef = document.createElement('td')
    tdRef.classList.add('ref')
    tdRef.innerText = entree.ref
    tr.appendChild(tdRef)
    
    const tdPrix = document.createElement('td')
    tdPrix.innerText = entree.prix.toFixed(2)
    tdPrix.classList.add('prix')
    tr.appendChild(tdPrix)
    
    const tdQte = document.createElement('td')
    tdQte.innerText = entree.qte
    tdQte.classList.add('qte')
    tr.appendChild(tdQte)
    
    const tdSt = document.createElement('td')
    tdSt.classList.add('st')
    tdSt.innerText = entree.st.toFixed(2)
    tr.appendChild(tdSt)

    return tr    
}

function createTable(entrees) {
    const tbody = document.querySelector('.facture tbody')
    const totalCell = document.querySelector('.facture .total')

    const rows = entrees.map(e => ({...e, st: e.prix * e.qte}))

    rows.forEach(entree => tbody.appendChild(createRow(entree)))

    const total = rows.reduce((acc, entree) => acc + entree.st, 0)

    totalCell.innerText = total.toFixed(2)
}

const sortUp = (e1, e2) => {
    if(e1.prix > e2.prix) return -1
    if(e1.prix === e2.prix) return 0
    return 1
}
const sortDown = (e1, e2) => {
    if(e1.prix > e2.prix) return 1
    if(e1.prix === e2.prix) return 0
    return -1
}
// createTable(facture.sort(sortDown))
createTable(facture)