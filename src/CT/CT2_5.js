import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-2 Хавсралт 5

function CT2_5() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
    },
    generalText: {
      fontSize: 10,
    },
    rowStyle: {
      fontSize: 10,
      marginTop: 5,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 10,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 10,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 0,
      fontSize: 10,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      padding: 0,
      lineHeight: 1,
      marginTop: 5,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 10,
      textAlign: "center",
    },
    rowFlex: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowFlexStart: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div style={{ display: "flex" }}></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 10 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-2 Хавсралт 5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              Мэдээгүйжүүлгийн эмчийн мэс заслын өмнөх үзлэг, мэдээгүйжүүлэлтийн
              явц, сэрээх үеийн хяналтын хуудас /хүүхэд/
            </span>
          </div>
          <div style={styles.rowCellWithText}>
            Овог
            ................................................................Регистр
            №
            <div style={{ display: "flex", marginLeft: 15 }}>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
            <span style={{ marginLeft: 40 }}>Түүх №</span>
          </div>
          <div style={styles.leftText}>
            Нэр......................................................................Нас..................
            <span style={{ marginLeft: 40 }}>Хүйс: Эр /Эм</span>
          </div>
          <div style={styles.leftText}>
            Тасаг.....................................
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 300 } }}>
                  Үзсэн:
                  ......../........./........../............цаг/...........мин
                </td>
                <td style={styles.leftText} colSpan={2}>
                  <b>Ерөнхий үзлэг:</b> Биеийн байдал: □ дунд □ хүндэвтэр □ хүнд
                  □ маш хүнд
                </td>
              </tr>
              <tr>
                <td>
                  <div style={styles.topText}>
                    Онош:................................................................
                  </div>
                  <div style={styles.topText}>
                    ..............................................................................
                  </div>
                  <div style={styles.topText}>
                    Төлөвлөгөөт / Яаралтай / Хойшлуулшгүй
                  </div>
                  <div style={styles.topText}>
                    Төлөвлөж буй мэс засал...............................
                  </div>
                  <div style={styles.topText}>
                    ...................................................................................
                  </div>
                </td>
                <td colSpan={2} rowSpan={2}>
                  <div style={styles.topText}>
                    Жин............кг Өндөр...........см Бялдар: □ Туранхай □
                    Хэвийн □ Тарган
                  </div>
                  <div style={styles.topText}>
                    Амьс/Тоо............ Зүрх/Цохилт............ Бие/to
                    .............. О2Sat…......
                  </div>
                  <div style={styles.topText}>
                    АД.................. АДД ............. Цусны бүлэг:
                  </div>
                  <div style={styles.topText}>
                    Зах/хял/суд/эр/дүүрэлт: ..........сек.
                  </div>
                  <div style={styles.topText}>
                    Сэтгэц: □ Тайван □ Тайван бус □ Глазго
                    үнэлгээ..........................
                  </div>
                  <div style={styles.topText}>
                    Арьсны өнгө,
                    байдал:..............................................................................
                  </div>
                  <div style={styles.topText}>Шингэн алдалт: □ Үгүй □Тийм</div>
                  <div style={styles.topText}>
                    Зэрэг...............................................................
                  </div>
                  <div style={styles.topText}>
                    Амьсгалын зам: Маллампати I II III IV
                  </div>
                  <div style={styles.topText}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>Эрүү бамбайн зай</div>
                        <div style={styles.topText}>&#62;6 см</div>
                        <div style={styles.topText}>&#60;6 см</div>
                      </div>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>Ам ангайлт</div>
                        <div style={styles.topText}>&#62;3 см</div>
                        <div style={styles.topText}>&#60;3 см</div>
                      </div>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>Хамар сарталзах</div>
                        <div style={styles.topText}>□ Тийм</div>
                        <div style={styles.topText}>□ Үгүй</div>
                      </div>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>Өвчүү татагдах</div>
                        <div style={styles.topText}>□ Тийм</div>
                        <div style={styles.topText}>□ Үгүй</div>
                      </div>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>Хүзүүний/хөд чөлөөтэй</div>
                        <div style={styles.topText}>□ Тийм</div>
                        <div style={styles.topText}>□ Үгүй</div>
                      </div>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>
                          Хэцүү интубаци болзошгүй
                        </div>
                        <div style={styles.topText}>□ Тийм</div>
                        <div style={styles.topText}>□ Үгүй</div>
                      </div>
                      <div style={styles.rowFlex}>
                        <div style={styles.topText}>
                          Хиймэл а/ зам: □ ЦХГ№.........
                        </div>
                        <div style={styles.topText}>□ Трахеостоми</div>
                        <div style={styles.topText}>□ Үгүй</div>
                      </div>
                    </div>
                  </div>
                  <div style={styles.topText}>
                    Хүчилтөрөгч эмчилгээ: □ Гуурс □ Маск □ Маск хүүдий □
                    FiO2..........
                  </div>
                  <div style={styles.topText}>
                    Хараа: □ Хэвийн □
                    Эмгэг......................................................................
                  </div>
                  <div style={styles.topText}>
                    Шүд: □ Хэвийн □ Кариес □ Шүдгүй □ Хөдөлсөн □ Хиймэл
                  </div>
                  <div style={styles.topText}>
                    Зүрх...........................................................................................................
                  </div>
                  <div style={styles.topText}>
                    Судасны
                    лугшилт.....................................................................................
                  </div>
                  <div style={styles.topText}>
                    Уушги.........................................................................................................
                  </div>
                  <div style={styles.topText}>
                    Хэвлий.......................................................................................................
                  </div>
                  <div style={styles.topText}>
                    Мэдрэл......................................................................................................
                  </div>
                  <div style={styles.topText}>
                    Мөч............................................................................................................
                  </div>
                  <div style={styles.topText}>
                    Хэс/мэд хийх хэсэг: □ Хэвийн □ Халдварын шинж □ Хэвийн бус
                  </div>
                  <div style={styles.topText}>
                    Судасны байдал: □ Хангалттай □Хангалтгүй □ ТВГ
                    ..........................
                  </div>
                  <div style={styles.topText}>
                    □ судасны
                    хүрц.......................................................................................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} rowSpan={3}>
                  <div style={styles.topText}>
                    <b>Анамнез:</b>
                    Зовиур:......................................................
                  </div>
                  <div style={styles.topText}>
                    .............................................................................................
                  </div>
                  <div style={styles.topText}>
                    Өвчний
                    эхлэл................................................................
                  </div>
                  <div style={styles.topText}>
                    Өвдсөн
                    өвчин...............................................................
                  </div>
                  <div style={styles.topText}>
                    Харшил............................................................................
                  </div>
                  <div style={styles.topText}>
                    Халдварт/ө ба
                    вакцин..............................................
                  </div>
                  <div style={styles.topText}>
                    Удамшил.........................................................................
                  </div>
                  <div style={styles.topText}>
                    Өмнөх хагалгаа мэдээгүйжүүлэг.
                  </div>
                  <div style={styles.topText}>
                    .............................................................................................
                  </div>
                  <div style={styles.topText}>
                    Хүндрэл............................................................................
                  </div>
                  <div style={styles.topText}>
                    .............................................................................................
                  </div>
                  <div style={styles.topText}>
                    .............................................................................................
                  </div>
                  <div style={styles.topText}>
                    Осол
                    гэмтэл...................................................................
                  </div>
                  <div style={styles.topText}>
                    Хэрэглэж байсан эм, цус цусан бүтээгдэхүүн
                  </div>
                  <div style={styles.topText}>
                    .............................................................................................
                  </div>
                  <div style={styles.topText}>
                    Хорт
                    зуршил.................................................................
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={styles.rowFlexStart}>
                      <div style={styles.verticalText}>ТМС</div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Уналт таталт</div>
                        <div style={styles.topText}>□ Толгой өвдөлт</div>
                        <div style={styles.topText}>□ Ухаан балартах</div>
                      </div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Бадайрах/сульдах</div>
                        <div style={styles.topText}>□ Тархины даралт</div>
                        <div style={styles.topText}>
                          ...............................
                        </div>
                      </div>
                    </div>
                    <div style={styles.rowFlexStart}>
                      <div style={styles.verticalText}>ЗСС</div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Зүрх дэлсэх</div>
                        <div style={styles.topText}>□ Цээжээр өвдөх</div>
                        <div style={styles.topText}>□ Албад/байрлал</div>
                      </div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Хөхрөх</div>
                        <div style={styles.topText}>□ Хаван</div>
                        <div style={styles.topText}>
                          ...............................
                        </div>
                      </div>
                    </div>
                    <div style={styles.rowFlexStart}>
                      <div style={styles.verticalText}>АС</div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ АДэЗХ</div>
                        <div style={styles.topText}>□ Ханиах</div>
                        <div style={styles.topText}>□ Цэр</div>
                      </div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Амьсгаадах</div>
                        <div style={styles.topText}>□ Хөхрөх</div>
                        <div style={styles.topText}>
                          ...............................
                        </div>
                      </div>
                    </div>
                    <div style={styles.rowFlexStart}>
                      <div style={styles.verticalText}>ХБС</div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Шарлалт</div>
                        <div style={styles.topText}>□ Цирроз</div>
                        <div style={styles.topText}>□ Суулгалт</div>
                      </div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>□ Хоолны дуршил /-/</div>
                        <div style={styles.topText}>
                          □ Парез.................
                        </div>
                      </div>
                    </div>
                    <div style={styles.rowFlexStart}>
                      <div style={styles.verticalText}>ШЯС</div>
                      <div style={styles.topText}>
                        <div style={styles.topText}>
                          □ Цус гоожимхой □ Тууралт гардаг
                        </div>
                        <div style={styles.topText}>
                          □ Хөхрөлт үүсэх хандлагатай
                        </div>
                        <div style={styles.topText}>
                          □
                          .................................................................
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={styles.topText}>
                    Төрөлт:......................................................................................
                  </div>
                  <div style={styles.topText}>
                    ......................................................................................................
                  </div>
                  <div style={styles.topText}>
                    Өсвөр охид:
                    ССТ...................................................................
                  </div>
                  <div style={styles.topText}>
                    Хооллосон
                    байдал...............................................................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Лабораторийн шинжилгээ</td>
                <td>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.verticalText}></div>
                    <div style={styles.topText}>□Хэвийн □Хэвийн бус</div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>ЦЕШ</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>ШЕШ</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>ЦС/ билируб</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Уураг</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Моч/креат</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>К, Na, Ca, P</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Асат, Алат</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Бүлэгнэлт</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Бак/серологи</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Рентген</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>ЭКГ</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>ЭХО</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                  <div style={styles.rowFlexStart}>
                    <div style={styles.leftText}>Бусад</div>
                    <div style={styles.topText}>
                      □..........................................................................
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Мэдээгүйжүүлгийн төлөвлөгөө</td>
                <td style={styles.leftText}>
                  ASA ангилал: 1 2 3 4 5 6 Е Эрсдэл: I II III IV
                  <div style={styles.leftText}>
                    Эрсдэл...........................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ........................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Мэд/хэлбэр,
                    ажилбар.........................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Бэлтгэл..........................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ........................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ........................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Урьдал
                    эмжүүлэлт.....................................................................
                  </div>
                  <div style={styles.leftText}>
                    ЦЦБ бэлдсэн: □Үгүй □Тийм................................. □
                    тохирсон □тохироогүй
                  </div>
                  <div style={styles.leftText}>
                    Эрсдэл танилцуулж, мэдээгүйжүүлгийг тайлбарлаж □ өгсөн □
                    үгүй болно
                  </div>
                  <div style={styles.leftText}>
                    Мэдээгүйжүүлэг өгөхийг □ зөвшөөрсөн / □ зөвшөөрөөгүй болно.
                  </div>
                  <div style={styles.leftText}>
                    Үйлчлүүлэгчийн гарын
                    үсэг..................................................
                  </div>
                  <div style={styles.leftText}>
                    Мэдээгүйжүүлгийн
                    эмч..........................................................
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>МЭДЭЭГҮЙЖҮҮЛЭЛТИЙН ЯВЦ БА СЭРЭЭХ ӨРӨӨНИЙ ХЯНАЛТ</b>
          </div>
          <div style={styles.leftText}>
            Сар .......өдөр........цаг.........минут
            <span style={{ marginLeft: 50 }}>
              Овог
              нэр...............................................................
            </span>
            <span style={{ marginLeft: 50 }}> Биеийн жин............кг </span>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText} colSpan={15}>
                  Мэдээгүйжүүлгийн эмч:
                </td>
                <td style={styles.topText} colSpan={12}>
                  Мэдээгүйжүүлгийн сувилагч:
                </td>
                <td style={styles.topText} colSpan={6}>
                  Мэдээгүжүүлгийн хугацаа:
                </td>
                <td style={styles.topText} colSpan={2}>
                  Эх:
                </td>
                <td style={styles.topText}>Ду: </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={15}>
                  Мэс заслын эмч:
                </td>
                <td style={styles.topText} colSpan={12}>
                  Мэс заслын сувилагч:
                </td>
                <td style={styles.topText} colSpan={6}>
                  Мэс заслын хугацаа:
                </td>
                <td style={styles.topText} colSpan={2}>
                  Эх:
                </td>
                <td style={styles.topText}>Ду: </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={27}>
                  МЗ-ын дараах онош:
                </td>
                <td style={styles.topText} colSpan={9}>
                  Хоол сойсон цаг:
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хэрэглэсэн эм \ Цаг</b>
                </td>
                <td style={styles.topText} colSpan={24}></td>
                <td style={styles.topText} colSpan={3}>
                  Нийт:
                </td>
                <td style={styles.topText} colSpan={5} rowSpan={22}>
                  Тэмдэглэл:
                </td>
                <td style={styles.verticalText} colSpan={2} rowSpan={22}>
                  Фентанил / Морфин: Сери.......... ...................
                  Хэмжээ.........мл
                  <div style={styles.leftText}>
                    Гарын үсэг........................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  О2: л/мин
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  NO2/агаар: л/мин
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Halotan/Sevofluran эз/%
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Isofluran эз/%
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={8}>
                  <b>Эмийн нэр /мг/</b>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Тио/Проп
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Тр/Сук/...............
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Фен/Суфен/Мо/
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Кет/Сед/Мид
                </td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}></td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}></td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}></td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}></td>
                {[...Array(8)].map((x, i) => (
                  <td style={styles.topText} colSpan={3} key={i}>
                    ............
                  </td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={7}>
                  <b> Сэлбэсэн шингэн</b>
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Natrii Chloridi 0.9%.......
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Ringer Lactat……….....
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Glucosae……%........
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  &nbsp;
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  &nbsp;
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Цус __________ /мл/
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Сийвэн __________ /мл/
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Алдсан цус /мл/
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Шээс ялгаралт /мл/
                </td>
                {[...Array(4)].map((x, i) => (
                  <td style={styles.topText} colSpan={6} key={i}></td>
                ))}
                <td style={styles.topText} colSpan={3}></td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Амьсгалын хэлбэр
                </td>
                <td style={styles.topText} colSpan={25}>
                  □ Автомат (ТV........мл;АТ........./мин;Рaw........ см Н2О;
                  PEEP....... см Н2О) □ Дэмжсэн □Өөрийн
                </td>
                <td style={styles.topText} colSpan={9}>
                  <b>Сэрээх өрөөнд:</b>
                </td>
              </tr>
              <tr>
                <td rowSpan={22} style={styles.leftText} colSpan={2}>
                  АД
                  <div style={styles.leftText}>↨</div>
                  <div style={styles.leftText}>Пульс</div>
                  <div style={styles.leftText}>•</div>
                  <div style={styles.leftText}>Мэд/ эхлэх</div>
                  <div style={styles.leftText}>Х</div>
                  <div style={styles.leftText}>Мэд/ дуусах</div>
                  <div style={styles.leftText}>ЦХГ тавьсан </div>
                  <div style={styles.leftText}>↓</div>
                  <div style={styles.leftText}>ЦХГ авсан</div>
                  <div style={styles.leftText}>↑</div>
                  <div style={styles.leftText}>МЗ эхлэх</div>
                  <div style={styles.leftText}>˅</div>
                  <div style={styles.leftText}>МЗ дуусах</div>
                  <div style={styles.leftText}>˄</div>
                  <div style={styles.leftText}>Биеийн хэм</div>
                  <div style={styles.leftText}>Δ</div>
                  <div style={styles.leftText}>
                    <b>Хяналт:</b>
                  </div>
                  <div style={styles.leftText}>□ Даралт</div>
                  <div style={styles.leftText}>/NIBP/</div>
                  <div style={styles.leftText}>□ ЭКГ</div>
                  <div style={styles.leftText}>□ О2 Sat</div>
                  <div style={styles.leftText}>□ ETCO2</div>
                  <div style={styles.leftText}>□ Paw</div>
                  <div style={styles.leftText}>□ Температур</div>
                  <div style={styles.leftText}>□ Прек/эзоф</div>
                  <div style={styles.leftText}>стетос</div>
                  <div style={styles.leftText}>□ А-line /IBP/</div>
                  <div style={styles.leftText}>□ BIS</div>
                  <div style={styles.leftText}>□ ТВД</div>
                  <div style={styles.leftText}>□ ХШТ</div>
                  <div style={styles.leftText}>□ Шээс</div>
                  <div style={styles.leftText}>ялгаралт</div>
                  <div style={styles.leftText}>Байрлал:</div>
                  <div style={styles.leftText}>...........................</div>
                </td>
                <td style={styles.leftText}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.topText, ...{ width: 15 } }}></td>
                <td style={styles.topText} colSpan={7}></td>
                <td style={styles.topText}>Шилж -үүлэг</td>
              </tr>
              <tr>
                <td style={styles.leftText}>200</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  style={{ ...styles.verticalText, ...{ width: 15 } }}
                  rowSpan={21}
                >
                  Шилжин ирсэн .......цаг.......мин Хүлээн
                </td>
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  style={{ ...styles.verticalText, ...{ width: 15 } }}
                  rowSpan={21}
                >
                  Хяналт: □ Даралт /NIBP/ □ ЭКГ □ О2 Sat ;
                </td>
                <td
                  style={{ ...styles.verticalText, ...{ width: 15 } }}
                  rowSpan={21}
                >
                  ийгдсэн эмчилгээ: ...тасагт шилжүүлжсэн....цаг.....мин
                  Амьс/чөл-х хэрэгсэл +
                  <div style={styles.leftText}>
                    / -АТ....ЗЦ.....АД....О2Sat/FiO2....../..... Хэм.. RT...
                  </div>
                  <div style={styles.leftText}>
                    Хүлээлгэн өгсөн:............................Хүлээн
                    авсан......................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>180</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>40 160</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>39 140</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>38 120</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>37 100</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>36 80</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>35 60</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>34 40</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>20</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>&nbsp;</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ height: 100 } }}>0</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.verticalText} rowSpan={5}>
                  Үзүүлэлт:
                </td>

                <td style={styles.topText}>О2 Sat</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  style={{ ...styles.topText, ...{ width: 15 } }}
                  rowSpan={5}
                ></td>
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  style={{ ...styles.topText, ...{ width: 15 } }}
                  rowSpan={5}
                ></td>
                <td
                  style={{ ...styles.topText, ...{ width: 15 } }}
                  rowSpan={5}
                ></td>
              </tr>
              <tr>
                <td style={styles.topText}>ETCO2</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText}>ТВД</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText}>BIS</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText}>CO2 хийн даралт</td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                {[...Array(6)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText} rowSpan={2}>
                  Мэдээгүйжүүлгийн ажилбарууд:
                </td>
                <td style={styles.topText} colSpan={25}>
                  □ ЕМ: ( )Маск ( )LMA #............ ( )ЦХГ ( )RAE ( ) Cпираль:
                  Ам / Хамар ( )
                  <div style={styles.leftText}>
                    D/Lumen ( )Трахеостоми Шууд/Харанхуй/Дуран ( ) Селикийн арга
                  </div>
                  <div style={styles.leftText}>
                    ( ) Сэрүүн интубаци ( ) Хэцүү/интубаци
                  </div>
                  <div style={styles.leftText}>
                    Оролдлого........ Чиглүүлэгч + / - Манжет + / -
                    №...............
                  </div>
                  <div style={styles.leftText}>Гүн................ см </div>
                  <div style={styles.leftText}>
                    □ Хавсарсан: □ ЕМ+ТМХ □ ЕМ+ЗМХ □ Судсаар (TIVA) □ Амьсгал
                  </div>
                  <div style={styles.leftText}>чөлөөлөх хэрэгслүүд +/-</div>
                  <div style={styles.leftText}>
                    □ ТВГ-ыг
                    ....................................................судсанд
                    .......... оролдлогоор хатган
                  </div>
                  <div style={styles.leftText}>
                    оруулж.................см-т бэхлэв.
                  </div>
                  <div style={styles.leftText}>
                    □ хяналт: Эхо / Rc. Хүндрэл + / - (
                    ..............................................................)
                  </div>
                  <div style={styles.leftText}>Тусгай техник:</div>
                  <div style={styles.leftText}>
                    ...................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...................................................................................................................................................
                  </div>
                </td>
                <td style={styles.topText} colSpan={9}>
                  □ ТМХ: ( ) Нугас ( )
                  <div style={styles.leftText}>Нугас/гадна ( ) Ууцны</div>
                  <div style={styles.leftText}>Хатгасан цэг........... Нэг</div>
                  <div style={styles.leftText}>удаа/Тасралтгүй</div>
                  <div style={styles.leftText}>Мэдээгүйжүүлгийн түвшин</div>
                  <div style={styles.leftText}>
                    ...............................
                  </div>
                  <div style={styles.leftText}>Зүү №................ </div>
                  <div style={styles.leftText}>Кат/урт..............см </div>
                  <div style={styles.leftText}>□ ЗМХ: ( )BPB ( ) FNB ( )</div>
                  <div style={styles.leftText}>TAP ( ) IOB</div>
                  <div style={styles.leftText}> ( ) IINB ( ) Penile/b ( )</div>
                  <div style={styles.leftText}>digitalis/b ( ) Trigem/b</div>
                  <div style={styles.leftText}> ( ) ………………………………</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={25}>
                  Хүндрэл:
                  <span style={{ marginLeft: 100 }}>□ Үгүй</span>
                  <span style={{ marginLeft: 100 }}>□ Тийм</span>
                </td>
                <td style={styles.topText} colSpan={9}>
                  Эмийн бодис...........................
                  <div style={styles.leftText}>
                    Хэмжээ:................%.............мл
                  </div>
                  <div style={styles.leftText}>
                    Эхо хяналт: □ Тийм
                    <span style={{ marginLeft: 30 }}>□ Үгүй</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT2_5;
