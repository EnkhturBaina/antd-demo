import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ1-5
function СТ1_5() {
  const styles = {
    headerText: {
      fontSize: 10,
      lineHeight: 1.1,
    },
    generalText: {
      fontSize: 10,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 10,
      padding: 2,
      lineHeight: 1.1,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 10,
      padding: 2,
      lineHeight: 1.1,
    },
    rowStyle: {
      fontSize: 10,
      padding: 2,
      display: "flex",
      alignItems: "center",
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      // maxHeight: 130,
      lineHeight: 1,
      fontSize: 10,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 12,
      height: 12,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      marginTop: 3,
    },
    rowCellWithTextP2: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 8,
      marginTop: 2,
      paddingLeft: 5,
      paddingRight: 5,
      textAlign: "left",
    },
    rowCellWithTextP2Stat: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      marginTop: 20,
      justifyContent: "space-between",
      paddingLeft: 10,
      paddingRight: 10,
    },
    flexStyle: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: 10,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <div style={styles.headerText}>
              Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны
            </div>
            <div style={styles.headerText}>
              өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </div>
            <div style={{ ...styles.headerText, ...{ fontWeight: "bold" } }}>
              Эрүүл мэндийн бүртгэлийн маягт СТ-1 Хавсралт 5А
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 5,
              marginBottom: 5,
              lineHeight: 1.1,
              marginLeft: "auto",
              marginRight: "auto",
              width: "70% ",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              МЭДЭЭГҮЙЖҮҮЛЭГЧ ЭМЧИЙН ҮЗЛЭГ, МЭДЭЭ АЛДУУЛАЛТЫН ЯВЦ СЭРЭЭХ ҮЕИЙН
              ХЯНАЛТЫН ХУУДАС
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <div style={styles.rowStyle}>
                  Эцэг /эх/-ийн нэр _________________________ нэр
                  ___________________________________
                  <span style={{ marginLeft: 100 }}>
                    Тасаг ____________________________
                  </span>
                </div>
                <div style={styles.rowStyle}>
                  <div style={{ display: "flex" }}>
                    <span style={styles.generalText}>РД:</span>
                    <div style={{ display: "flex", marginLeft: 5 }}>
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
                    <span style={{ marginLeft: 50 }}>
                      нас _______ эрэгтэй, эмэгтэй
                    </span>
                    <span style={{ marginLeft: 50 }}>
                      Өвчний түүх № ________________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  Клиникийн онош:
                  _______________________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  Төлөвлөгөөт, яаралтай . Төлөвлөж байгаа хагалгаа
                  _________________________________________________________
                </div>
              </tr>
              <tr>
                <div style={styles.rowStyle}>
                  <b>Мэдээгүйжүүлгийн өмнөх үзлэг</b>
                  ___________________________________
                  <span style={{ marginLeft: 50 }}>
                    Үзсэн: ______ он _____ сар _____ өдөр _____ цаг ____ минут
                  </span>
                </div>
              </tr>
              <tr>
                <td style={{ padding: 1 }}>
                  <div style={styles.rowStyle}>
                    <b>Анамнез:</b>
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 50 }}>
                      Харшил
                      _________________________________________________________________
                    </span>
                  </div>
                  <div style={styles.rowStyle}>
                    Зовиур
                    ________________________________________________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    Урьд өвчилсөн өвчин
                    ____________________________________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    Урьд хийгдсэн хагалгаа, мэдээгүйжүүлэг
                    __________________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    &nbsp;гормон,
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 20 } }}
                    ></div>
                    &nbsp;цус
                    <div
                      style={{ ...styles.rowCells, ...{ marginLeft: 20 } }}
                    ></div>
                    &nbsp;сийвэн хийлгэж байсан. Гаж нөлөө
                    <span style={{ marginLeft: 50 }}>____________________</span>
                  </div>
                  <div style={styles.rowStyle}>
                    Байнга хэрэглэдэг эмийн бодис:
                    ___________________________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    _______________________________________________________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    Удмын онцлог байдал
                    ____________________________________________________________
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>&nbsp;Жирэмсний хугацаа
                    __________________________________________________________
                  </div>
                </td>
                <td>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 10 }}>Тамхи татдаг</span>
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 10 }}>&#60; 10 жил</span>
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 10 }}>&#62; 10 жил</span>
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 10 }}>
                      Архи Байнга хэрэглэдэг
                    </span>
                  </div>
                  <div style={styles.rowStyle}>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 10 }}>Үе үе хэт хэрэглэдэг</span>
                  </div>
                </td>
              </tr>
              <tr>
                <div style={styles.rowStyle}>
                  <b>Бодит үзлэг АД:</b>
                  <span style={{ marginLeft: 30 }}>
                    __________ Зүрхний цохилт _________ Амьсгалын тоо _______
                    Жин _______ t0 _______Өндөр________
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 10,
                  }}
                >
                  Таргалалт:
                  <div style={{ ...styles.rowStyle, ...{ marginLeft: 15 } }}>
                    <div style={styles.rowCells}></div>&nbsp;хэвийн
                  </div>
                  <div style={{ ...styles.rowStyle, ...{ marginLeft: 15 } }}>
                    <div style={styles.rowCells}></div>&nbsp;туранхай
                  </div>
                  <div style={{ ...styles.rowStyle, ...{ marginLeft: 15 } }}>
                    <div style={styles.rowCells}></div>&nbsp;тарган
                  </div>
                  <div style={{ ...styles.rowStyle, ...{ marginLeft: 15 } }}>
                    <div style={styles.rowCells}></div>&nbsp;хэт тарган
                  </div>
                  <div style={{ ...styles.rowStyle, ...{ marginLeft: 15 } }}>
                    <div style={styles.rowCells}></div>&nbsp;дегидратацтай
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  Арьс салстын өнгө
                  ___________________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  Зүрх
                  _______________________________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  Уушиг
                  ______________________________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  Мэдрэл
                  _____________________________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  Бусад өвчин
                  _________________________________________________________________________________________
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 10,
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: 10,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <div style={styles.rowCells}></div>&nbsp;ам ангайлт &#60;
                      2 хуруу
                    </div>
                    <div style={{ display: "flex", marginTop: 3 }}>
                      <div style={styles.rowCells}></div>&nbsp;хүзүүний
                      хөдөлгөөн муу
                    </div>
                    <div style={{ display: "flex", marginTop: 3 }}>
                      <div style={styles.rowCells}></div>&nbsp;нуруу сээрний
                      хэлбэр алдагдсан
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: 10,
                    }}
                  >
                    <div style={{ display: "flex" }}>Маллампати</div>
                    <div style={{ display: "flex", marginTop: 3 }}>
                      Эрүү бамбайн зай
                    </div>
                    <div style={{ display: "flex", marginTop: 3 }}>
                      Шүд&nbsp;&nbsp;<div style={styles.rowCells}></div>
                      &nbsp;хиймэл
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: 10,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      I &nbsp;&nbsp;&nbsp;II &nbsp;&nbsp;&nbsp;III
                      &nbsp;&nbsp;&nbsp;IV
                    </div>
                    <div style={{ display: "flex", marginTop: 3 }}>
                      <div style={styles.rowCells}></div>&nbsp; &#60; 6 см
                      <div
                        style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                      ></div>
                      &nbsp; см
                    </div>
                    <div style={{ display: "flex", marginTop: 3 }}>
                      <div style={styles.rowCells}></div>&nbsp;хөдөлгөөнтэй
                      <div
                        style={{ ...styles.rowCells, ...{ marginLeft: 10 } }}
                      ></div>
                      &nbsp;дорсгой
                    </div>
                  </div>
                </div>
              </tr>
              <tr>
                <div style={styles.rowStyle}>
                  <b>Лабораторийн шинжилгээнүүд</b>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      Цус:
                      <span style={{ marginLeft: 50 }}>
                        Ht _______Hb ________ Эр ______ Лей _____ Гром _____
                        Эртх _______
                      </span>
                    </div>
                    <span style={{ marginLeft: 55 }}>
                      ЭКГ _____________________________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      Шээс:
                      <span style={{ marginLeft: 50 }}>
                        Х/ж _____ Уураг __________ бусад
                        _______________________________
                      </span>
                    </div>
                    <span style={{ marginLeft: 60 }}>
                      _________________________________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      Эрдэс:
                      <span style={{ marginLeft: 50 }}>
                        Na _____ Креатинин ______ ГОТ___________Нийт
                        уураг__________
                      </span>
                    </div>
                    <span style={{ marginLeft: 55 }}>
                      _________________________________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <span style={{ marginLeft: 80 }}>
                        K ______ сахар __________
                        ГПТ___________Альбумин_________
                      </span>
                    </div>
                    <span style={{ marginLeft: 70 }}>
                      Цээжний рентген ______________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <span style={{ marginLeft: 80 }}>
                        CL _____ Билирубин _____________
                      </span>
                    </div>
                    <span style={{ marginLeft: 180 }}>
                      _________________________________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      Бүлэгнэлт:
                      <span style={{ marginLeft: 30 }}>
                        ABP _________APPT __________ Тр хугацаа ______ Фибр
                        ________
                      </span>
                    </div>
                    <span style={{ marginLeft: 60 }}>
                      _________________________________
                    </span>
                  </div>
                </div>
                <div style={styles.rowStyle}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      Бусад шинжилгээ
                      ______________________________________________________
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 0,
                  }}
                >
                  <div style={{ width: "48%" }}>
                    <div style={styles.rowStyle}>
                      Биеийн байдал: ASA ангиллаар
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontSize: 10,
                      }}
                    >
                      <b>Эрсдэл:</b>
                      <div style={{ flexDirection: "column", marginLeft: 50 }}>
                        <div>
                          I&nbsp; &nbsp;II&nbsp; &nbsp;III&nbsp; &nbsp;IV&nbsp;
                          &nbsp;V&nbsp; &nbsp;E
                        </div>
                        <div>
                          I&nbsp; &nbsp;II&nbsp; &nbsp;III&nbsp; &nbsp;IV&nbsp;
                          &nbsp;V&nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "48%" }}>
                    <div style={styles.rowStyle}>
                      <b>Мэдээгүйжүүлэлтийн төлөвлөгөө</b>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Ерөнхий
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Бүсчилсэн
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хавсарсан
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Бусад
                      </div>
                    </div>
                    <div
                      style={{ ...styles.rowCellWithText, ...{ marginTop: 5 } }}
                    >
                      <div style={styles.rowCells}></div>&nbsp;Интубац төвөгтэй
                      <span style={{ marginLeft: 30 }}>
                        Шаардагдах нэмэлт хэрэгсэл
                      </span>
                    </div>
                    <div style={styles.rowStyle}>
                      ___________________________________________
                    </div>
                  </div>
                </div>
              </tr>
              <tr>
                <div style={styles.rowStyle}>
                  <b>Урьдчилсан эмжүүлэлт</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "48%",
                      fontSize: 10,
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>Урьд орой нь:</div>
                      <div>1 _________________ </div>
                      <div>2 _________________ </div>
                      <div>3 _________________ </div>
                      <div>4 _________________ </div>
                      <div>Эмч: ________________ </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>Хагалгааны өмнө</div>
                      <div>1 _________________ </div>
                      <div>2 _________________ </div>
                      <div>3 _________________ </div>
                      <div>4 _________________ </div>
                      <div>Эмч: ________________ </div>
                    </div>
                  </div>
                  <div>
                    <Table
                      bordered
                      className="document"
                      style={{ marginBottom: 0, fontSize: 10 }}
                    >
                      <tbody>
                        <tr>
                          <td
                            colSpan={3}
                            style={{
                              width: 60,
                              padding: 1,
                              textAlign: "center",
                            }}
                          >
                            Цусны бүлэг
                          </td>
                          <td style={{ width: 60, padding: 1 }}>&nbsp;</td>
                        </tr>
                        <tr>
                          <td style={{ width: 60, padding: 1 }}>Захиалга</td>
                          <td style={{ width: 60, padding: 1 }}></td>
                          <td style={{ width: 60, padding: 1 }}>Цус</td>
                          <td style={{ width: 60, padding: 1 }}></td>
                        </tr>
                        <tr>
                          <td style={{ width: 60, padding: 1 }}></td>
                          <td style={{ width: 60, padding: 1 }}></td>
                          <td style={{ width: 60, padding: 1 }}>Сийвэн</td>
                          <td style={{ width: 60, padding: 1 }}></td>
                        </tr>
                      </tbody>
                    </Table>
                    <div style={styles.rowStyle}>
                      Мэдээгүйжүүлгийн тухай тайлбарлаж өгсөн
                    </div>
                    <div style={styles.rowStyle}>(ар гэр, эмчлүүлэгч)</div>
                    <div style={styles.rowStyle}>
                      Гарын үсэг __________________________________
                    </div>
                  </div>
                </div>
              </tr>
              <tr>
                <div style={styles.rowStyle}>
                  Мэс заслын дараах онош
                  _____________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  Хийгдсэн мэс засал
                  ___________________________________________________________________________________
                </div>
                <div style={styles.rowStyle}>
                  __________________________________________________________________________________________________________
                </div>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: 10,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 13, width: 280 }}>
              МЭДЭЭГҮЙЖҮҮЛЭЛТИЙН ЯВЦ
            </span>
            <span style={{ textAlign: "center" }}>
              Үзсэн ____ сар _____өдөр _____цаг
              <br />
              <span>____ минут</span>
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td colSpan={4} style={styles.centerText}>
                  Хэрэглэсэн эм \ цаг
                </td>
                <td colSpan={6} style={styles.centerText}>
                  10 20 30 40 50
                </td>
                <td colSpan={6} style={styles.centerText}>
                  10 20 30 40 50
                </td>
                <td colSpan={6} style={styles.centerText}>
                  10 20 30 40 50
                </td>
                <td colSpan={6} style={styles.centerText}>
                  10 20 30 40 50
                </td>
                <td colSpan={3} style={styles.centerText}>
                  Эмийн дүн
                </td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              {[...Array(11)].map((x, i) => (
                <tr key={i}>
                  <td colSpan={4} style={styles.centerText}>
                    {i == 7 ? (
                      <>
                        <div style={styles.flexStyle}>
                          <div>Хүчилтөрөгч</div>
                          <div> л/мин</div>
                        </div>
                      </>
                    ) : null}
                    {i == 8 ? (
                      <>
                        <div style={styles.flexStyle}>
                          <div>Галотан/изофлуран</div>
                          <div> эз%</div>
                        </div>
                      </>
                    ) : null}
                    {i == 9 ? (
                      <>
                        <div style={styles.flexStyle}>
                          <div>Азотын исэл</div>
                          <div> л/мин</div>
                        </div>
                      </>
                    ) : null}
                    {i == 10 ? (
                      <>
                        <div style={styles.flexStyle}>
                          <div>Агаар</div>
                          <div> л/мин</div>
                        </div>
                      </>
                    ) : null}
                  </td>
                  {[...Array(31)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td rowSpan={5} style={styles.verticalText}>
                  Сэлбэсэн шингэн
                </td>
                {[...Array(28)].map((x, i) => (
                  <td
                    rowSpan={i == 26 ? 5 : null}
                    colSpan={i == 26 ? 5 : null || i == 0 ? 3 : null}
                    style={styles.centerText}
                    key={i}
                  >
                    &nbsp;
                  </td>
                ))}
              </tr>
              {[...Array(4)].map((x, i) => (
                <tr key={i}>
                  {[...Array(27)].map((x, j) => (
                    <td
                      style={styles.centerText}
                      key={j}
                      colSpan={j == 0 ? 3 : null}
                    >
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
              {[...Array(2)].map((x, i) => (
                <tr key={i}>
                  {[...Array(28)].map((x, j) => (
                    <td
                      colSpan={j == 26 ? 5 : null || j == 0 ? 4 : null}
                      style={styles.centerText}
                      key={j}
                    >
                      {i == 0 && j == 0 ? (
                        <>
                          <div style={styles.flexStyle}>
                            <div>Алдсан цус</div>
                            <div> мл</div>
                          </div>
                        </>
                      ) : null}
                      {i == 1 && j == 0 ? (
                        <>
                          <div style={styles.flexStyle}>
                            <div>Шээс</div>
                            <div> мл</div>
                          </div>
                        </>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={3} rowSpan={7} style={styles.centerText}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>
                      <span>Судасны хатгалт</span>
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Төвийн вен
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Пульсоксиметр
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Зүрхний монитор
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>АД хэмжих
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Соруулга
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Нүд хамгаалсан
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Давсагт гуурс
                    </div>
                  </div>
                </td>
                <td
                  rowSpan={22}
                  style={{ ...styles.centerText, ...{ verticalAlign: "top" } }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>&nbsp;</div>
                      <span>200</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>Sa02&nbsp;</div>
                      <span>180</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>100</div>
                      <span>160</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>96</div>
                      <span>140</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>92</div>
                      <span>120</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>88</div>
                      <span>100</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>86</div>
                      <span>80</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div>84</div>
                      <span>60</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div></div>
                      <span>40</span>
                    </div>
                    <div style={styles.rowCellWithTextP2Stat}>
                      <div></div>
                      <span>20</span>
                    </div>
                  </div>
                </td>
                {[...Array(31)].map((x, j) => (
                  <td
                    style={styles.verticalText}
                    key={j}
                    rowSpan={j == 24 ? 22 : null || j == 30 ? 22 : null}
                  >
                    &nbsp;
                    {j == 24
                      ? "Сэрээх өрөөнд ирсэн _____ цаг ____ минут"
                      : null}
                    {j == 30 ? "Шилжсэн _____ цаг ____ минут" : null}
                  </td>
                ))}
              </tr>
              {[...Array(6)].map((x, i) => (
                <tr key={i}>
                  {[...Array(29)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.verticalText} rowSpan={15}>
                  Аппаратын төрөл __________________
                </td>
                <td style={styles.verticalText} rowSpan={15}>
                  Өвчтөний байрлал __________________
                </td>
                <td style={styles.verticalText} rowSpan={15}>
                  Онцгой аппарат __________________
                </td>
                {[...Array(29)].map((x, j) => (
                  <td style={styles.centerText} key={j}>
                    &nbsp;
                  </td>
                ))}
              </tr>
              {[...Array(14)].map((x, i) => (
                <tr key={i}>
                  {[...Array(29)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={36}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: 12,
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>Х мэдээгүйжүүлэлт эхэлсэн, дууссан: </div>
                      <div style={{ marginLeft: 30 }}>⇧ - интубац</div>
                      <div style={{ marginLeft: 30 }}>⇩ - экстубац</div>
                      <div style={{ marginLeft: 30 }}>▽ - хагалгаа эхэлсэн</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div style={{ marginLeft: 200 }}>△ - дууссан</div>
                      <div style={{ marginLeft: 30 }}>&#62; - &#62; - АД</div>
                      <div style={{ marginLeft: 30 }}>X - пульс</div>
                      <div style={{ marginLeft: 30 }}>• - SaO2</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Мэдээгүйжүүлэлтийн төрөл</td>
                <td colSpan={17}>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={styles.rowCells}></div>Ерөнхий унтуулга
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>ЭТМ
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Хошуувч
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Төвөнхийн хошуувч
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Судасны
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>&nbsp;У + дус
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={{ marginLeft: 13 }}></div>Интубац:
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>&nbsp;төвөгтэй
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>&nbsp;үгүй
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>&nbsp;ам
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>&nbsp;хамар
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={{ marginLeft: 13 }}></div>Цагаан хоолойн гуурс
                      ТХ #: ____ Хэмжээ ____ см
                    </div>
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={{ marginLeft: 100 }}></div>
                    Хий _____ мл
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={{ marginLeft: 100 }}></div>
                    Оролдлогын тоо: _________________________
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={{ marginLeft: 100 }}></div>
                    Тусгай аргачлал:
                  </div>
                </td>
                <td colSpan={18}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div></div>Бүсчилсэн:
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>НХМ
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>НГХМ
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>НГХГуурс
                    </div>
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={styles.rowCells}></div>Бусад хориг:
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={styles.rowCells}></div>Зүүний НГХГ#: _______G
                    гүн ____ см
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={{ marginLeft: 13 }}></div>Төрөл:
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>иртэй
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>үзүүртэй
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>Туохийн
                    </div>
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={styles.rowCells}></div>Хатгалтын түвшин: ______
                    чиглэл: ______
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={styles.rowCells}></div>Оролдлогын тоо: ______
                  </div>
                  <div style={styles.rowCellWithTextP2}>
                    <div style={styles.rowCells}></div>Мэдээгүйжүүлгийн түвшин:
                    __________
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={styles.rowCellWithTextP2}>
                      <div></div>Нугасны шингэний өнгө::
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>хэвийн
                    </div>
                    <div style={styles.rowCellWithTextP2}>
                      <div style={styles.rowCells}></div>цустай
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={18} style={styles.leftText}>
                  Тайлбар
                  <div>&nbsp;</div>
                </td>
                <td colSpan={18} style={styles.leftText}>
                  Хүндрэл
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={36} style={styles.leftText}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "48%",
                      }}
                    >
                      <div>
                        Мэс засал хийсэн эмч : _______________________________
                      </div>
                      <div>
                        Мэдээгүйжүүлэгч эмч: ________________________________
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "48%",
                      }}
                    >
                      <div>&nbsp;</div>
                      <div>Мэдээгүйжүүлэгийн сувилагч ______________</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={styles.rowCellWithTextP2}>
                <div></div>Шилжсэн
              </div>
              <div style={styles.rowCellWithTextP2}>
                <div style={styles.rowCells}></div>сэрээх өрөөнд
              </div>
              <div style={styles.rowCellWithTextP2}>
                <div style={styles.rowCells}></div>эрчимт эмчилгээнд
              </div>
              <div style={styles.rowCellWithTextP2}>
                <div style={{ marginLeft: 250 }}></div>Хүлээн авсан
                ______________________
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ1_5;
