import HomeNews from "../../components/homeNews";
import imgNews from "../../assets/png/image 2.png";
import Search from "../../components/Search";

function Home() {
  return (
    <div>
      <h1>Is's my home page (main)</h1>
      <section className="homeBanner">
        <div>
          <h2>Карпати на всі часи !</h2>
          <p>
            У найкращому готелі LaTaras із 28 грудня по 14 січня доступні для
            бронювання
          </p>
          <button>Більше</button>
        </div>
      </section>
      <Search placeholder="Знайти готель" />
      <section
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          gap: 40,
          marginBottom: 30,
        }}
      >
        <div style={{ flex: "1 0 60%" }}>
          <div
            className="borderBottom"
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <HomeNews
              data="11 березня 1997"
              title="BVLGARI RESORT BALI"
              description="Програма від Bvlgari Resort Bali"
              // showBtn="true"
            />
            <div>
              <img src={imgNews} alt="imgNews" />
            </div>
          </div>
          <HomeNews
            data="01 грудня 2022"
            title="Туризм під час пандемії"
            description="Для подорожей потрібний сертифікат"
            showBtn="true"
            borderr={"borderBottom"}
          />
          <HomeNews
            data="01 грудня 2022"
            title="Туризм під час пандемії 2"
            description="Для подорожей потрібний сертифікат"
            showBtn="true"
          />
          <div className="pictureBlock" style={{ marginTop: 15 }}>
            <div>
              <data>1 грудня 2023</data>
              <h2> БУКОВЕЛЬ У ВСІ ЧАСИ!</h2>
              <p>
                Один із найкращих курортних містечок для Вашого відпочинку де
                можна чудово провести час!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRight: "1px solid #ccc",
            paddingRight: 60,
            flexBasis: "40%",
          }}
        >
          <HomeNews
            borderr={"borderBottom"}
            className="borderBottom"
            data="1 грудня 2023"
            title="Одеса цілий рік"
            description="Чекаємо Вас у нас у гості"
          />
          <HomeNews
            borderr={"borderBottom"}
            data="1 грудня 2023"
            title="Одеса цілий рік"
            description="Чекаємо Вас у нас у гості"
          />
          <HomeNews
            borderr={"borderBottom"}
            data="1 грудня 2023"
            title="Одеса цілий рік"
            description="Чекаємо Вас у нас у гості"
          />
          <HomeNews
            borderr={"borderBottom"}
            data="1 грудня 2023"
            title="Одеса цілий рік"
            description="Чекаємо Вас у нас у гості"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
