import "@/styles/home.scss"
import Card from "./components/Card"

const HomePage = () => {
  return (
    <section className="homeWapper">
      <article className="recommend">
        <div>
          <h3>jetom님을 위한 추천음악</h3>
          <div className="cardWapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>아티스트 추천</h3>
          <div className="cardWapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>아티스트 추천</h3>
          <div className="cardWapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>아티스트 추천</h3>
          <div className="cardWapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>아티스트 추천</h3>
          <div className="cardWapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
    </section>
  )
}

export default HomePage
