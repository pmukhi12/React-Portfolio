const Header = () => {
    return (
        <div class="jumbotron jumbotron-fluid h-100">
            <div class="container" style={{height: '500px'}}>
                <div class="row" style={{height: '100%'}}>
                    <div style={{position: 'webkit-sticky', backgroundImage: "url('/assets/profile-pic.jpeg')", backgroundSize: '100%', backgroundRepeat: 'False'}} class="col-3 profile-pic"></div>
                    <div class="col-8"style={{paddingTop:'12%'}}>
                        <h1 class="display-4">Prav Mukhi</h1>
                        <p class="lead">Prav is a Full Stack Software Developer with a history of process automation and data analysis.</p>
                    </div>
                </div>
            </div>
        </div>
                )
}

export default Header
