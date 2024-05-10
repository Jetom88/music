import "@/styles/card.scss"

const Card = () => {
  return (
    <section className="albumWrapper">
      <article className="thumbnail">
        <img src="https://i.scdn.co/image/ab67616d00004851d49090ccded888b4c3fa0e0f" />
      </article>
      <article className="albumInfo">
        <p className="albumTitle">Love U Like That (Korean Version)</p>
        <p className="artistInfo">노래 • Lauv</p>
      </article>
    </section>
  )
}

export default Card
