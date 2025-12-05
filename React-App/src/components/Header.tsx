function Header(){
    return (
        <header className="header d-flex justify-content-between align-items-center p-2 bg-dark padding-30px 25px">
            
           <nav className="navbar navbar-expand-lg navbar-dark  ">
            <img className="navbar-brand" src="/src/assets/react.svg" alt="" />
            <span className="custom">ReactFacts</span>
           </nav>
        </header>
    );
}

export default Header;