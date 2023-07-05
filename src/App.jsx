import { useState, useEffect, useRef, useCallback } from "preact/hooks";
import { Event } from "./Event.jsx";
import { TabItems } from "./TabItems";
import { TABS_KEYS, TABS } from "./constants.js";

function App() {
  const ref = useRef();
  const [activeTab, setActiveTab] = useState(
    new URLSearchParams(location.search).get("tab") || "all"
  );
  const [hasRightScroll, setHasRightScroll] = useState(false);

  let sizes = [];

  const onSize = useCallback(
    (size) => {
      sizes.push(size);
    },
    [sizes]
  );

  const onSelectInput = (event) => {
    setActiveTab(event.target.value);
  };

  const onArrowCLick = () => {
    const scroller = ref.current.querySelector(
      ".section__panel:not(.section__panel_hidden)"
    );
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0);

    const newHasRightScroll = sumWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  }, [sizes, hasRightScroll]);

  return (
    <main className="main">
      <section className="section main__general">
        <h2 className="section__title section__title-header section__main-title">
          Главное
        </h2>
        <div className="hero-dashboard">
          <div className="hero-dashboard__primary">
            <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
            <p className="hero-dashboard__subtitle">
              Двери и окна закрыты, сигнализация включена.
            </p>
            <ul className="hero-dashboard__info">
              <li className="hero-dashboard__item">
                <div className="hero-dashboard__item-title">Дома</div>
                <div className="hero-dashboard__item-details">
                  +23
                  <span className="a11y-hidden">°</span>
                </div>
              </li>
              <li className="hero-dashboard__item">
                <div className="hero-dashboard__item-title">За окном</div>
                <div className="hero-dashboard__item-details">
                  +19
                  <span className="a11y-hidden">°</span>
                  <div
                    className="hero-dashboard__icon hero-dashboard__icon_rain"
                    role="img"
                    aria-label="Дождь"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="hero-dashboard__schedule">
            <Event
              icon="temp"
              iconLabel="Температура"
              title="Philips Cooler"
              subtitle="Начнет охлаждать в 16:30"
            />
            <Event
              icon="light"
              iconLabel="Освещение"
              title="Xiaomi Yeelight LED Smart Bulb"
              subtitle="Включится в 17:00"
            />
            <Event
              icon="light"
              iconLabel="Освещение"
              title="Xiaomi Yeelight LED Smart Bulb"
              subtitle="Включится в 17:00"
            />
          </ul>
        </div>
      </section>

      <section className="section main__scripts">
        <h2 className="section__title section__title-header">
          Избранные сценарии
        </h2>

        <ul className="event-grid">
          <Event
            slim={true}
            icon="light2"
            iconLabel="Освещение"
            title="Выключить весь свет в доме и во дворе"
          />
          <Event
            slim={true}
            icon="schedule"
            iconLabel="Расписание"
            title="Я ухожу"
          />
          <Event
            slim={true}
            icon="light2"
            iconLabel="Освещение"
            title="Включить свет в коридоре"
          />
          <Event
            slim={true}
            icon="temp2"
            iconLabel="Температура"
            title="Набрать горячую ванну"
            subtitle="Начнётся в 18:00"
          />
          <Event
            slim={true}
            icon="temp2"
            iconLabel="Температура"
            title="Сделать пол тёплым во всей квартире"
          />
        </ul>
      </section>

      <section className="section main__devices">
        <div className="section__title">
          <h2 className="section__title-header">Избранные устройства</h2>

          <select
            className="section__select"
            defaultValue="all"
            onInput={onSelectInput}
          >
            {TABS_KEYS.map((key) => (
              <option key={key} value={key}>
                {TABS[key].title}
              </option>
            ))}
          </select>

          <ul role="tablist" className="section__tabs">
            {TABS_KEYS.map((key) => (
              <li
                key={key}
                role="tab"
                aria-selected={key === activeTab ? "true" : "false"}
                tabIndex={key === activeTab ? "0" : undefined}
                className={
                  "section__tab" +
                  (key === activeTab ? " section__tab_active" : "")
                }
                id={`tab_${key}`}
                aria-controls={`panel_${key}`}
                onClick={() => setActiveTab(key)}
              >
                {TABS[key].title}
              </li>
            ))}
          </ul>
        </div>

        <div className="section__panel-wrapper" ref={ref}>
          <div role="tabpanel" className="section__panel">
            <ul className="section__panel-list">
              <TabItems tabItems={TABS[activeTab].items} onSize={onSize} />
            </ul>
          </div>
          {hasRightScroll && (
            <div className="section__arrow" onClick={onArrowCLick}></div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
