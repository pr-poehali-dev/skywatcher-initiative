import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">Паразитам.НЕТ</div>
        <nav>
          <a href="#about">История</a>
          <a href="#course">Программа</a>
          <a href="#results">Результаты</a>
          <a href="#buy">Кому подходит</a>
        </nav>
        <button className="btn-cta" onClick={() => document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })}>
          Купить доступ
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              УБЕРИ
              <br />
              ПРИЧИНУ, <span>а не симптом</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Личная схема избавления от паразитов от Марины Берг — клинического психолога и эксперта по психосоматике. Проверено на себе, без БАДов, только аптечные препараты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white" }}
                onClick={() => document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })}
              >
                Получить доступ
              </button>
              <button
                className="btn-cta"
                style={{ background: "white" }}
                onClick={() => document.getElementById("course")?.scrollIntoView({ behavior: "smooth" })}
              >
                Что внутри
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ДОСТУП
              <br />6 МЕСЯЦЕВ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #БЕЗ_БАДОВ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ПРОВЕРЕНО НА СЕБЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * 20+ ВИДОВ ПАРАЗИТОВ * ЛИЧНАЯ СХЕМА * ТОЛЬКО АПТЕЧНЫЕ ПРЕПАРАТЫ * ПСИХОСОМАТИКА * АНАЛИЗЫ ДО И ПОСЛЕ *
            20+ ВИДОВ ПАРАЗИТОВ * ЛИЧНАЯ СХЕМА * ТОЛЬКО АПТЕЧНЫЕ ПРЕПАРАТЫ * ПСИХОСОМАТИКА * АНАЛИЗЫ ДО И ПОСЛЕ
          </div>
        </div>

        <section id="course" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">КТО ЖИВЁТ ВНУТРИ</h2>
            <a
              href="#buy"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Вся программа
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Ленточные</span>
              <img
                src="https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/a5985a56-cad7-4823-b10b-53cd7b712a57.jpg"
                alt="Цестоды"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Цестоды</h3>
                  <span className="price">до 20 лет</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Широкий лентец, бычий и свиной цепень. Вырастают до 10 метров. Вызывают анемию, авитаминоз, кишечную непроходимость.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Сосальщики
              </span>
              <img
                src="https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/bucket/c5b4b2a5-d9e4-45d6-ad33-cb7cfd73f7e2.jpg"
                alt="Трематоды"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Трематоды</h3>
                  <span className="price">до 25 лет</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Описторхи, клонорхи, фасциолы. Живут в печени и протоках. Вызывают панкреатит, холангит, цирроз.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Круглые
              </span>
              <img
                src="https://cdn.poehali.dev/projects/e0f6b191-2506-4eb5-8f95-fd1e65f8f44c/files/602de184-ed9a-4231-9a5a-11ffb313c8d6.jpg"
                alt="Нематоды"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Нематоды</h3>
                  <span className="price">мигрируют</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Аскариды, острицы, токсокары, трихинеллы. Идут в лёгкие, сердце, мозг, глаза. Дают аллергии, астму, судороги.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="retro-vibe">
          <div>
            <h2 className="vibe-title">НЕСКОЛЬКО ЛЕТ АДА, КОТОРЫЕ ВЫ МОЖЕТЕ НЕ ПОВТОРЯТЬ.</h2>
            <p className="vibe-text">
              Я годами не могла решить проблемы с ЖКТ. Гастроэнтерологи лечили «гастрит» — без толку. Мой пытливый мозг вывел меня на паразитологию: я нашла действенную схему, которую не давали ни государственные, ни платные врачи. После антипаразитарки в ЖКТ наконец наступил покой. Я не фармацевт и не продаю БАДы — я человек, который прошёл этот ад и нашёл выход.
            </p>
            <button
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white", borderColor: "white" }}
              onClick={() => document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" })}
            >
              Пройти этим маршрутом
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section id="results" className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            РЕЗУЛЬТАТЫ ДО / ПОСЛЕ
          </h2>
          <div className="menu-grid">
            {[
              { icon: "BatteryCharging", text: "Ушла хроническая усталость, вернулась энергия" },
              { icon: "Wind", text: "Перестал пухнуть живот, ушла отёчность" },
              { icon: "Activity", text: "Снизился холестерин, нормализовался вес" },
              { icon: "HeartPulse", text: "Наступил покой в ЖКТ и снизилась тревожность" },
            ].map((item, i) => (
              <div key={i} className="menu-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span
                    style={{
                      background: "var(--accent)",
                      border: "var(--border)",
                      padding: "10px",
                      display: "inline-flex",
                    }}
                  >
                    <Icon name={item.icon} size={24} />
                  </span>
                  <p style={{ fontWeight: 700, fontSize: "15px" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="buy" className="retro-vibe" style={{ background: "var(--dark)", color: "white" }}>
          <div>
            <h2 className="vibe-title" style={{ color: "white" }}>
              ЗАБЕРИ ДОСТУП НА <span style={{ color: "var(--accent)" }}>6 МЕСЯЦЕВ</span>
            </h2>
            <p className="vibe-text" style={{ color: "#ccc" }}>
              Внутри — личная схема из 6 блоков: история, виды паразитов, пошаговая схема препаратов, психосоматика паразитоза, влияние на лишний вес и анализы до/после. Никакой теории «рекомендаций врачей» — только проверенный на себе протокол.
            </p>
            <div style={{ marginBottom: "24px" }}>
              {[
                "Проблемы с ЖКТ: вздутие, запоры, тошнота",
                "Аллергии и высыпания без причины",
                "Хроническая усталость и низкий гемоглобин",
                "Тянет на сладкое, скрипите зубами во сне",
                "Обходили врачей — без толку",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <Icon name="Check" size={20} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
            <button className="btn-cta" style={{ background: "var(--accent)", color: "var(--dark)", borderColor: "white" }}>
              Приобрести доступ
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">Паразитам.НЕТ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Автор — Марина Берг, клинический психолог, эксперт по доказательной психосоматике. Личный опыт и проверенная схема, а не БАДы.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
                История
              </a>
            </li>
            <li>
              <a href="#course" style={{ color: "inherit", textDecoration: "none" }}>
                Программа
              </a>
            </li>
            <li>
              <a href="#results" style={{ color: "inherit", textDecoration: "none" }}>
                Результаты
              </a>
            </li>
            <li>
              <a href="#buy" style={{ color: "inherit", textDecoration: "none" }}>
                Купить доступ
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Что внутри</h4>
          <ul>
            <li>20+ видов паразитов</li>
            <li>Схема препаратов</li>
            <li>Психосоматика паразитоза</li>
            <li>Анализы до и после</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 ПАРАЗИТам.НЕТ</span>
          <span>ДОСТУП 6 МЕСЯЦЕВ</span>
          <span>ПРОВЕРЕНО НА СЕБЕ</span>
        </div>
      </footer>
    </>
  );
}