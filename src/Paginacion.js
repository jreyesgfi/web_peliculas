export default function Paginacion(props) {
    //Función que genera hiperbículos a las páginas
    const getPaginas = () => {
        const resultado = [];
        for (var i = 0; i < props.total; i++){
            let pagina = i + 1;
            resultado.push(<a 
                onClick = {() => props.onChange(pagina)}
                className = {props.pagina === (pagina) ? 'active': ''}
                href = '#'>{pagina}{/*nos lleva a la parte superior de la página*/}
                </a>);
        }
        return resultado
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página {props.pagina} de {props.total}:</span>

                {getPaginas()}
                {/*Array.apply(0, Array(props.total)).map(value=>
                    <a onClick={props.onChange} className="active" href='#'>{(value.indexOf()+1)}</a>)*/}



                
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    )

}