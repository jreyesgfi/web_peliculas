export default function Pelicula(props) {
    function nombrarActores() {   
    {props.actores.split(",").forEach((actor)=>console.log(actor));}}
    {nombrarActores();}
    return(
        <div className="movie-item-style-2">
            <img src= {props.img} alt="" />
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html">
                        {props.titulo}
                        <span> {props.year}</span>
                    </a>
                </h6>
                <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>{props.calificacion}</span> /10</p>
                <p className="describe">{props.children}</p>
                <p className="run-time">{props.duraracion}<span>MMPA: PG-13 </span>    .     
                <span>Release: {props.fecha}</span></p>
                <p>Director: <a href="#">{props.director}</a></p>
                <p>Stars: <a href="#">{props.actores}</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>
            </div>
        </div>
    )
}