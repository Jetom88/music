import SpotifySvg from "@/public/SpotifySvg"
import "@/styles/login.scss"

const LoginPage = () => {
  return (
    <section className="loginWrapper">
      <article className="loginContainer">
        <header className="loginTitle">
          <h2>
            안녕하세요
            <br />
            Toy music입니다 :)
          </h2>
          <p>spotify api를 이용한 토이 프로젝트입니다.</p>
        </header>

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
          <li>
            <button className="loginButton">
              <SpotifySvg />

              <span className="text"> Spotify로 계속하기 </span>
            </button>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default LoginPage
