import "@/styles/home.scss"
import Card from "../components/Card"

const HomePage = () => {
  return (
    <section className="homeWrapper">
      <article className="recommend">
        <div>
          <h3>jetom님을 위한 추천음악</h3>
          <div className="cardWrapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>인기 라디오</h3>
          <div className="cardWrapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>오늘의 최고 히트곡</h3>
          <div className="cardWrapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </article>
      <article className="recommend">
        <div>
          <h3>오늘의 추천</h3>
          <div className="cardWrapper">
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
