const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: '60px'}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="">About Me</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/in/praveshmukhi/">Linkedin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">GitHub</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
