

function Footer(){
    return(
        <footer className="text-center text-white" style={{"backgroundColor": "#f1f1f1"}}>
        <div className="container pt-4">
            <div
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                data-mdb-ripple-color="dark"
                ><i className="bi bi-facebook"></i
            ></div>

            <div
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                data-mdb-ripple-color="dark"
                ><i className="bi bi-twitter"></i
            ></div>

            <div
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                data-mdb-ripple-color="dark"
                ><i className="bi bi-google"></i
            ></div>

            <div
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                data-mdb-ripple-color="dark"
                ><i className="bi bi-instagram"></i
            ></div>

            <div
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                data-mdb-ripple-color="dark"
                ><i className="bi bi-linkedin"></i
            ></div>
            <div
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                data-mdb-ripple-color="dark"
                ><i className="bi bi-github"></i
            ></div>

        </div>

        <div className="text-center text-dark p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    </footer>
    )
}

export default Footer