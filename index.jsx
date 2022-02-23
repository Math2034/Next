import Image from 'next/image'

export default ()=>{
    return(
        <>
        <head>
            <title>Página JSX</title>
        </head>
        <h1>Página inicial</h1>
        <Image src="/imagem.jpg" alt="" width={300} height={300}/>

        <h3>Links</h3>
        <a href="/contato">Contato</a>
        </>
    )
}