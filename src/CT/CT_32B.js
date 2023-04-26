import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-32Б
function CT_32B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
      display: "inline-flex",
    },
    generalText: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
      marginTop: 5,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topText: {
      padding: 1,
      fontSize: 11,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      padding: 0,
      lineHeight: 1,
      marginTop: 1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
      fontSize: 11,
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
                  ...{ textAlign: "right", display: "block", lineHeight: 1 },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1,
                  }}
                >
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-32Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЯАРАЛТАЙ ТУСЛАМЖИЙН ХУУДАС /Хүүхдийн/
            </span>
          </div>
          <div style={styles.leftText}>
            Яаралтай тусламжид ирсэн огноо . . . . он . . . сар . . . өдөр ....
            цаг.... минут
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={4}>
                  <b>Ерөнхий мэдээлэл</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Эцэг/эх/-ийн нэр: ________________ Нэр: __________________
                </td>
                <td style={styles.topText}>
                  Регистрийн дугаар:
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
                </td>
                <td style={styles.topText}>Нас:</td>
                <td style={styles.topText}>
                  <div style={styles.rowCellWithText}>
                    Хүйс:
                    <span style={styles.rowCells}></span>&nbsp;Эрэгтэй
                    <span style={styles.rowCells}></span>&nbsp;Эмэгтэй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Тогтмол хаяг</td>
                <td style={styles.topText} colSpan={2}>
                  Холбоо барих утас: ___________________
                </td>
                <td style={styles.topText}>
                  Давтан ирсэн хугацаа
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp; 24 цаг
                    <span style={styles.rowCells}></span>&nbsp; 48 цаг
                    <span style={styles.rowCells}></span>&nbsp; 72 цаг
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginTop: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  ЯТТ-т ирсэн цаг
                  <div style={styles.centerText}>....цаг ....минут</div>
                </td>
                <td style={styles.centerText}>
                  Эрэмбэлсэн
                  <div style={styles.centerText}>....цаг ....минут</div>
                </td>
                <td style={styles.centerText}>
                  ЯТТ-ийн эмч үзсэн
                  <div style={styles.centerText}>....цаг ....минут</div>
                </td>
                <td style={styles.centerText}>
                  Шийдвэрлэсэн
                  <div style={styles.centerText}>....цаг ....минут</div>
                </td>
                <td style={styles.centerText}>
                  ЯТТ-т байсан нийт цаг
                  <div style={styles.centerText}>....цаг ....минут</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  ЯТТ-т ирсэн хэлбэр
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;Өөрөө&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;103&nbsp;
                    <span style={styles.rowCells}></span>
                    &nbsp;Амбулаториос&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;Бусад
                    эмнэлгээс&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;Бусад
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хэн авчирсан:
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  Гол зовиур
                </td>
                <td style={styles.leftText} rowSpan={2}>
                  Харшил
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp; Эм тариа &nbsp;
                    <span style={styles.rowCells}></span>&nbsp; Бусад
                  </div>
                </td>
                <td style={styles.leftText} rowSpan={2}>
                  Биеийн жин ________ кг
                  <div style={styles.leftText}>Өндөр _______ см</div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <div style={styles.centerText}>&nbsp;</div>
                  <div style={styles.centerText}>&nbsp;</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: "35%" } }}>
                  <b>Анхны үзлэг</b>
                </td>
                <td style={{ ...styles.centerText, ...{ width: "40%" } }}>
                  <b>Эрт сэрэмжлүүлэх үнэлгээ</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: "25%" } }}>
                  <b>Урьд өвчилсөн байдал</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  <div style={styles.flexRow}>
                    <div style={styles.leftText}>Амьсгалын зам</div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;чөлөөтэй&nbsp;
                    </div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;саадтай&nbsp;
                    </div>
                  </div>
                  <div style={styles.flexRow}>
                    <div style={styles.leftText}>Амьсгал</div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн&nbsp;
                    </div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн бус&nbsp;
                    </div>
                  </div>
                  <div style={styles.flexRow}>
                    <div style={styles.leftText}>Цус эргэлт</div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн&nbsp;
                    </div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн бус&nbsp;
                    </div>
                  </div>
                  <div style={styles.flexRow}>
                    <div style={styles.leftText}>Арьсны өнгө </div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн&nbsp;
                    </div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн бус&nbsp;
                    </div>
                  </div>
                  <div style={styles.flexRow}>
                    <div style={styles.leftText}>Пульс</div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн&nbsp;
                    </div>
                    <div style={styles.leftText}>
                      <span style={styles.rowCells}></span>
                      &nbsp;хэвийн бус&nbsp;
                    </div>
                  </div>
                  <div style={styles.leftText}> Хялгасан судасны дүүрэлт</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;2 сек&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;&#62;2 сек&nbsp;
                  </div>
                  <div style={styles.leftText}> Ухаан санааны байдал</div>
                  <div style={styles.rowCellWithText}>
                    A&nbsp;&nbsp;<span style={styles.rowCells}></span>&nbsp;
                    V&nbsp;&nbsp;<span style={styles.rowCells}></span>&nbsp;
                    P&nbsp;&nbsp;<span style={styles.rowCells}></span>&nbsp;
                    U&nbsp;&nbsp;<span style={styles.rowCells}></span>
                  </div>
                  <div style={styles.leftText}>Булчингийн хүч</div>
                  <div style={styles.rowCellWithText}>
                    &nbsp;<span style={styles.rowCells}></span>
                    &nbsp;&nbsp;Хэвийн&nbsp;&nbsp;
                    <span style={styles.rowCells}></span>
                    &nbsp;&nbsp;Суларсан&nbsp;&nbsp;
                  </div>
                  <div style={styles.rightText}>□ Баруун&nbsp;&nbsp;□ Зүүн</div>
                  <div style={styles.rightText}>
                    □ Дээд мөч&nbsp;&nbsp;□ Доод мөч
                  </div>
                </td>
                <td style={{ ...styles.topText, ...{ padding: 5 } }}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ width: 100 }}>
                          <div style={styles.rightText}>Хугацаа</div>
                          <div style={styles.leftText}>Үзүүлэлт</div>
                        </td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>Биеийн температур</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>Зүрхний цохилт</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>Артерийн даралт</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>Амьсгалын тоо</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>SpO2 %</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>Fi O2</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                    </tbody>
                  </Table>
                  <div style={styles.leftText}>Өвдөлт</div>
                  <div style={styles.rightText}>□ Тийм&nbsp;&nbsp;□ Үгүй</div>
                  <div style={styles.rightText}>
                    □ Архаг&nbsp;&nbsp;□ Цочмог
                  </div>
                  <div style={styles.topText}>Өвдөлтийн хугацаа: </div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.leftText}>Амьсгалын эрхтэний эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.leftText}>Зүрх судасны эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.leftText}>Хоол боловсруулах эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.leftText}>Цусны эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.leftText}>Бөөр дотоод шүүрлийн эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.leftText}>Мэдрэлийн эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    Удамшил&nbsp;<span style={styles.rowCells}></span>
                    &nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    Гэмтэл&nbsp;<span style={styles.rowCells}></span>
                    &nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.leftText}>Мэс заслын эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    Суурь өвчин&nbsp;<span style={styles.rowCells}></span>
                    &nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  Хүүхдийн яаралтай тусламжийн эрэмбэлэл
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                      }}
                    >
                      <div style={styles.centerText}>Яаралтай шинж</div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Амьсгалын замын
                        бөглөршил
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Амьсгал зогсох
                      </div>
                      <div style={styles.centerText}>
                        • Хүнд хэлбэрийн амьсгалын дутал
                      </div>
                      <div style={styles.centerText}>Төвийн хөхрөлт</div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Цохиулалт
                        /circulation- shok/
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Судасны цохилт
                        олширсон ба цөөрсөн
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Оврого /coma/
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Таталттай
                        /convultion/
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Шингэн их
                        алдалттай суулгалт
                      </div>
                      <div
                        style={{ ...styles.leftText, ...{ marginLeft: 50 } }}
                      >
                        • Нүд хонхойх
                      </div>
                      <div
                        style={{ ...styles.leftText, ...{ marginLeft: 50 } }}
                      >
                        • Унтаарах
                      </div>
                      <div
                        style={{ ...styles.leftText, ...{ marginLeft: 50 } }}
                      >
                        • Арьсны хуниас маш удаан арилах
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                      }}
                    >
                      <div style={styles.centerText}>Тулгамдсан шинж</div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;2 сар хүртэлх
                        хүүхэд
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Өндөр халуунтай
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Гэмтэлтэй ба
                        яаралтай мэс заслын өвчинтэй
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хувхай цайсан
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хордолттой
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хүчтэй
                        өвдөлттэй
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Амьсгалын
                        хямралтай
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хэт цочромтгой
                        байдал, эсвэл унтаа байдал
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Яаралтай
                        илгээсэн бичигтэй
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Хүнд тураал
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;2 хөлийн хаван
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Түлэгдэлт,
                        хөлдөлт
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <div style={styles.rowCellWithText}>
                    Эрэмбэлэн ангилалтын үнэлгээ&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;Улаан&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;Шар&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;Ногоон
                  </div>
                  <div style={{ ...styles.leftText, ...{ marginLeft: 50 } }}>
                    Сувилагчийн нэр ____________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Тархвар судлалын асуумж: Сүүлийн 1 сард</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <div style={styles.rowCellWithText}>
                    1. Тууралтат өвчтэй хүнтэй хамт байсан
                    эсэх:&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;тийм&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    2. Гадаад оронд зорчсон эсэх : &nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;тийм&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    3. Дархлаажуулалтанд хамрагдсан
                    эсэх:&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;тийм&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    4. Халдварт өвчтэй хүнтэй хавьталтай
                    эсэх:&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;тийм&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;үгүй&nbsp;
                  </div>
                </td>
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
                <td style={styles.centerText} colSpan={5}>
                  <b>Яаралтай тусламжийн тасгийн эмчийн үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Үндсэн зовиур:
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Одоогийн өвчний түүх:
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.topText, ...{ width: 300 } }}>
                  <b>Бодит үзлэг</b>
                </td>
                <td style={styles.topText} colSpan={3}>
                  <b>Шинжилгээний төлөвлөгөө</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} rowSpan={2}>
                  <div style={styles.leftText}>
                    Биеийн байдал
                    .................................................
                  </div>
                  <div style={styles.rowCellWithText}>
                    Ухаан санаа: Глазго үнэлгээ
                  </div>
                  <div style={styles.rowCellWithText}>
                    <span style={{ marginLeft: 50 }}>Нүд</span>
                    <div style={styles.rowCells}></div>
                    <span style={{ marginLeft: 10 }}>&nbsp;</span>
                    Хөдөлгөөн<span style={{ marginLeft: 10 }}>&nbsp;</span>
                    <div style={styles.rowCells}></div>
                    Яриа<span style={{ marginLeft: 10 }}>&nbsp;</span>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div style={styles.leftText}>
                    Арьс
                    салст...................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Тунгалгийн
                    булчирхай..................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Хүүхэн
                    хараа........................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Зүрх.........................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ..............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Уушиг.....................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Хэвлийн тойм
                    үзлэг..................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Хэсэг газрын
                    үзлэг......................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ...............................................................................................................
                  </div>
                </td>
                <td style={styles.topText}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Цусны сахарын
                    түргэвчилсэн үнэлгээ
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;ЦЕШ&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;УТХ&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;Лейкограмм
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>Коагулограмм</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>ШЕШ</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>ЗЦБ</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>ДОХ, В, С вирус</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>Бактериологи</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>ЭХО</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>Дуран</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>Рентгенскопи</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>КТГ</div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div
                    style={{
                      ...styles.flexRow,
                      ...{ marginLeft: 10, marginRight: 10 },
                    }}
                  >
                    <div style={styles.leftText}>Бусад</div>
                    <div style={styles.rowCells}></div>
                  </div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.centerText}>Биохимийн шинжилгээ</div>
                  <div style={styles.leftText}>□ Нийт билирубин</div>
                  <div style={styles.leftText}>
                    □ Нийт уураг &nbsp; □ Альбумин
                  </div>
                  <div style={styles.leftText}>
                    □ Алат &nbsp;&nbsp;&nbsp;&nbsp; □ Асат
                  </div>
                  <div style={styles.leftText}>
                    □ Амилаза &nbsp; □ Креатинин
                  </div>
                  <div style={styles.leftText}>
                    □ Мочевин &nbsp;&nbsp; □ Үлдэгдэл азот
                  </div>
                  <div style={styles.leftText}>
                    □ Сахар &nbsp;&nbsp;&nbsp;&nbsp; □ ШФ
                  </div>
                  <div style={styles.leftText}>
                    □ ЛДГ &nbsp; □ КФК &nbsp; □ ПКТ
                  </div>
                  <div style={styles.leftText}>□ Na &nbsp;&nbsp; □ K</div>
                  <div style={styles.leftText}>□ Ca &nbsp;&nbsp; □ Mg</div>
                  <div style={styles.leftText}>□ CI &nbsp;&nbsp; □ Бусад</div>
                </td>
              </tr>
              <tr>
                <td colSpan={3} style={styles.leftText}>
                  Дүрс оношилгооны эмчийн дүгнэлт<div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Мэс заслын эмчийн үзлэг, онош
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Эмчилгээ:
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Урьдчилсан онош:
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  ӨОУА код
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                  <div style={styles.leftText}>&nbsp;</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Шийдвэрлэсэн байдал: /ЯТТ-ийн эмч/
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    ......................................................................................................................................................................................
                  </div>
                </td>
                <td colSpan={2} style={styles.topText}>
                  Эмчилгээ:
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                  <div style={styles.leftText}>
                    .........................................................................
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={5} style={styles.leftText}>
                  Шийдвэрлэсэн байдал:
                  <div style={styles.leftText}>
                    □ Ажиглалт
                    <span style={{ marginLeft: 50 }}>□ Тасагт хэвтсэн</span>
                    <span style={{ marginLeft: 50 }}>□ Буцсан</span>
                    <span style={{ marginLeft: 50 }}>□ Нас барсан</span>
                  </div>
                  <div style={styles.leftText}>
                    □ Бусад эмнэлэг рүү илгээсэн
                    <span style={{ marginLeft: 50 }}>□ Бусад</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Шийдвэрлэсэн ............ он ........... сар ......... өдөр.........
            цаг ........ минут
            <span style={{ marginLeft: 50 }}>
              Шийдвэрлэсэн ЯТТ-ийн
              эмч.................................................
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_32B;
