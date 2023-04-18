class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      nav {
        position: fixed;
        // box-sizing: border-box;
        z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141313;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.logo img {
  height: 65px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.2s ease-in-out;
}

.nav-links a:hover {
  border-bottom-color: #fff;
}

@media (max-width: 768px) {
  .logo {
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    margin-bottom: 10px;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .nav-links li {
    margin-right: 0;
    margin-bottom: 10px;
  }
}

#stocksense {
  position: absolute;
  width: auto;
  left: 6.5rem;
  top: 1.5rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 42px;

  background: linear-gradient(
      180deg,
      rgba(59, 130, 246, 0) 31.94%,
      rgba(59, 130, 246, 0.35) 63.72%
    ),
    linear-gradient(180deg, #17ead9 30.79%, rgba(234, 234, 234, 0) 100%),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 9.55%,
      rgba(96, 120, 234, 0.5) 65.28%
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
    </style>
    </header>
      <nav>
            <div class="logo">
                <img src="../images/logo.png" alt="Logo">
                <header id="stocksense">STOCKSENSE</header>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="subs.html">Subscription</a></li>
                <li><a href="stocks.html">Stocks</a></li>
            </ul>
        </nav>
      </header> `;
  }
}
customElements.define("header-component", Header);
