
const uri = 'https://extensaoufsj.ga/cursinho_edluis'

function consulta( caminho , corpo ){
    return fetch(uri+caminho , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then((resp) => resp.json())
        .then((ret)=> ret)
        .catch((erro) => console.log(erro) )
}

export default consulta;