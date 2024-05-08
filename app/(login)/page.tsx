import "@/styles/login.scss"

const LoginPage = () => {
  return (
    <section className="loginWrapper">
      <article className="loginContainer">
        <h2>로그인하기</h2>

        <ul className="loginButtonWrapper">
          <li>
            <button className="loginButton">
              <span className="logo googleLogo"></span>
              <span className="text"> Google로 계속하기 </span>
            </button>
          </li>
          <li>
            <button className="loginButton">
              <span className="logo facebookLogo"></span>
              <span className="text"> Facebook으로 계속하기 </span>
            </button>
          </li>
        </ul>

        <div className="line" />
      </article>
    </section>
  )
}

export default LoginPage
