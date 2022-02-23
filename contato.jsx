import Link from "next/link"

export default ()=>{
    return(
        <>
        <h1>Contatos.jsx</h1>
        <h3>Links</h3>
        <Link href="/">
            <img src="/imagem.jpg" alt="" width={200} height={200}/>    
        </Link><br />
        <Link href="http://www.google.com">
            <button>Google</button>
        </Link>
        </>
    )
}