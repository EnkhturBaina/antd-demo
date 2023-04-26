import React from "react";
import { Table } from "react-bootstrap";
import img32A from "./32A.PNG";

//маягт СТ-32А
function CT_32A() {
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
      fontSize: 12,
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
                    Эрүүл мэндийн бүртгэлийн маягт СТ-32А
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЯАРАЛТАЙ ТУСЛАМЖИЙН ХУУДАС /НАСАНД ХҮРЭГЧИД/ №......
            </span>
          </div>
          <div style={styles.leftText}>
            Эмнэлгийн нэр:__________________________
            <span style={{ marginLeft: 100 }}>
              Яаралтай тусламжийн тасагт ирсэн..........он......сар.....өдөр
            </span>
          </div>
          <Table bordered className="document" style={{ marginTop: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={23}>
                  <b>Ерөнхий мэдээлэл</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2} rowSpan={2}>
                  Эцэг /эх/-ийн нэр:
                </td>
                <td style={styles.topText} colSpan={10}>
                  РЕГИСТРИЙН ДУГААР
                </td>
                <td style={styles.topText} rowSpan={2}>
                  ХҮЙС
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;ЭР
                    <span style={styles.rowCells}></span>&nbsp;ЭМ
                  </div>
                </td>
                <td style={styles.topText} rowSpan={2}>
                  НАС
                </td>
                <td style={styles.topText} colSpan={9}>
                  НАС ЭМДД
                </td>
              </tr>
              <tr>
                {[...Array(19)].map((x, i) => (
                  <td
                    style={{ ...styles.topText, ...{ width: 15, height: 15 } }}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Эцэг /эх/-ийн нэр:
                </td>
                <td style={styles.topText} colSpan={10}>
                  ХОЛБОГДОХ УТАС
                </td>
                <td style={styles.topText} colSpan={21}>
                  ДАВТАН ИРСЭН ХУГАЦАА: ....он....сар....өдөр
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;24 цаг
                    <span style={styles.rowCells}></span>&nbsp;48 цаг
                    <span style={styles.rowCells}></span>&nbsp;72 цаг
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  ЯТТ-т ирсэн цаг
                  <div style={styles.leftText}>....цаг ....минут</div>
                </td>
                <td style={styles.topText}>
                  Эрэмбэлсэн
                  <div style={styles.leftText}>....цаг ....минут</div>
                </td>
                <td style={styles.topText} colSpan={10}>
                  ЯТТ-ийн эмч үзсэн
                  <div style={styles.leftText}>....цаг ....минут</div>
                </td>
                <td style={styles.topText}>
                  Шийдвэрлэсэн
                  <div style={styles.leftText}>....цаг ....минут</div>
                </td>
                <td style={styles.topText} colSpan={11}>
                  ЯТТ-т байсан нийт цаг
                  <div style={styles.leftText}>....цаг ....минут</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} rowSpan={2}>
                  ОСОЛ ГЭМТЭЛ
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;Тийм
                    <span style={styles.rowCells}></span>&nbsp;Үгүй
                    <span style={styles.rowCells}></span>&nbsp;Мэдэхгүй
                  </div>
                </td>
                <td style={styles.topText} colSpan={5} rowSpan={2}>
                  ЦАГДААД МЭДЭГДСЭН
                  <div style={styles.rowCellWithText}>
                    ЭСЭХ:
                    <span style={styles.rowCells}></span>&nbsp;Тийм
                    <span style={styles.rowCells}></span>&nbsp;Үгүй
                  </div>
                </td>
                <td style={styles.topText} colSpan={8} rowSpan={2}>
                  ГЭМТСЭН ШАЛТГААН:
                </td>
                <td style={styles.topText} colSpan={9}>
                  Он, сар өдөр цаг минут
                  <div style={styles.leftText}>....цаг ....минут</div>
                </td>
              </tr>
              <tr>
                {[...Array(5)].map((x, i) => (
                  <td
                    key={i}
                    style={{
                      ...styles.topText,
                      ...{ width: 20, height: 15 },
                    }}
                    colSpan={i === 4 ? 1 : 2}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.topText} colSpan={10}>
                  ЯТТ-т ирсэн хэлбэр
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;Өөрөө&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;103&nbsp;
                    <span style={styles.rowCells}></span>
                    &nbsp;Амбулаториос&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;Бусад
                    эмнэлгээс&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;13А
                  </div>
                </td>
                <td style={styles.topText} colSpan={3}>
                  Хэн авчирсан:
                </td>
                <td style={styles.topText} colSpan={10}>
                  Асуумж өгсөн хүн:......................
                  <div style={styles.leftText}>Утас:.....................</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} rowSpan={2} colSpan={7}>
                  Ирэх үеийн зовиур:
                </td>
                <td style={styles.topText} colSpan={6}>
                  Биеийн жин........кг
                  <div style={styles.leftText}>Өндөр.............см</div>
                </td>
                <td style={styles.topText} colSpan={10}>
                  Сүүлийн сарын тэмдэг:
                  <div style={styles.leftText}>....сар....өдөр</div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={6}>
                  Цусны бүлэг: .....
                  <div style={styles.leftText}>Rh: ....</div>
                </td>
                <td style={styles.topText} colSpan={10}>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;Жирэмсэн&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;долоо хоног&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;Цэвэршсэн&nbsp;
                  </div>
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
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.topText, ...{ padding: 5 } }}
                >
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ width: 100 }}>
                          <div style={styles.rightText}>Хугацаа</div>
                          <div style={styles.centerText}>Үзүүлэлт</div>
                        </td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                      <tr>
                        <td style={styles.centerText}>
                          Ухаан санааны байдал (AVPU)
                        </td>
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
                        <td style={styles.centerText}>Зүрхний цохилтын тоо</td>
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
                        <td style={styles.centerText}>Биеийн хэм</td>
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
                      <tr>
                        <td style={styles.centerText}>Нийт оноо</td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                        <td style={styles.topText}></td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
                <td rowSpan={4} style={styles.topText}>
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
                  <div style={styles.leftText}>Бөөрний эмгэг</div>
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
                  <div style={styles.leftText}>Дотоод шүүрлийн эмгэг</div>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                  <div style={styles.rowCellWithText}>
                    Хавдар&nbsp;<span style={styles.rowCells}></span>
                    &nbsp;тийм&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;үгүй&nbsp;
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: "35%" } }}>
                  <b>Өвдөлтийн зэрэг</b>
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: "40%" } }}
                  rowSpan={2}
                >
                  <div style={styles.rowCellWithText}>
                    Өвдөлт&nbsp;&nbsp;<span style={styles.rowCells}></span>
                    &nbsp;Тийм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;Үгүй&nbsp;
                  </div>
                  <div
                    style={{ ...styles.rowCellWithText, ...{ marginLeft: 43 } }}
                  >
                    <span style={styles.rowCells}></span>
                    &nbsp;Цочмог&nbsp;&nbsp;
                    <span style={styles.rowCells}></span>&nbsp;Архаг
                  </div>
                  <div style={styles.leftText}>
                    <div style={styles.rowCellWithText}>
                      Өвдөлтийн хугацаа&nbsp;&nbsp;
                      <span style={styles.rowCells}></span>
                    </div>
                  </div>
                </td>
                <td style={{ ...styles.centerText, ...{ width: "25%" } }}>
                  <b>Эрэмбэлэн ялгалт</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}></td>
                <td style={styles.topText}>
                  <div style={styles.rowCellWithText}>
                    <span style={styles.rowCells}></span>&nbsp;ХАР
                    <span style={styles.rowCells}></span>&nbsp;УЛААН
                    <span style={styles.rowCells}></span>&nbsp;ШАР
                    <span style={styles.rowCells}></span>&nbsp;НОГООН
                  </div>
                  <div style={styles.leftText}>
                    Эрэмбэлэх мэргэжилтэн ........................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  <b>Тархвар судлалын асуумж</b>
                </td>
              </tr>
            </tbody>
          </Table>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.topText}>
                  Тууралтат өвчтэй хүнтэй хамт байсан эсэх:
                  <div style={styles.centerText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм
                    <span style={styles.rowCells}></span>&nbsp;үгүй
                  </div>
                  Гадаад оронд зорчсон эсэх:
                  <div style={styles.centerText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм
                    <span style={styles.rowCells}></span>&nbsp;үгүй
                  </div>
                </td>
                <td style={styles.topText}>
                  Дархлаажуулалтанд хамрагдсан эсэх:
                  <div style={styles.centerText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм
                    <span style={styles.rowCells}></span>&nbsp;үгүй
                  </div>
                  Халдварт өвчтэй хүнтэй хавьталтай эсэх:
                  <div style={styles.centerText}>
                    <span style={styles.rowCells}></span>&nbsp;тийм
                    <span style={styles.rowCells}></span>&nbsp;үгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Яаралтай тусламжийн тасгийн эмчийн үзлэг</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Үндсэн зовиур:
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                </td>
                <td style={styles.topText}>
                  Одоогийн өвчний түүх:
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .....................................................................................
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <b>Шийдвэрлэсэн байдал</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    &nbsp;АЖИГЛАЛТ&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;ЭЭТ&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>
                    &nbsp;АЖИГЛАЛТ&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;БУСАД&nbsp;&nbsp;
                    <div style={styles.leftText}>
                      ...............................................................&nbsp;&nbsp;
                    </div>
                    <div style={styles.rowCells}></div>&nbsp;БУЦСАН&nbsp;&nbsp;
                    <div style={styles.rowCells}></div>&nbsp;НАС БАРСАН
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    &nbsp;БУСАД ЭМНЭЛЭГРҮҮ ШИЛЖСЭН&nbsp;&nbsp;
                    <div style={styles.leftText}>
                      ...............................................................&nbsp;&nbsp;
                    </div>
                    <div style={styles.rowCells}></div>&nbsp;ЭМЧИЛГЭЭ
                    ҮЙЛЧИЛГЭЭНЭЭС ТАТГАЛЗСАН
                  </div>
                  <div style={styles.leftText}>
                    ШИЙДВЭРЛЭСЭН...............ОН............САР............ӨДӨР...........ЦАГ............МИНУТ
                    ШИЙДВЭРЛЭСЭН ЯТТ-Н ЭМЧ
                    /.........................................../
                  </div>
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>
                    &nbsp;БУСАД ЭМНЭЛЭГРҮҮ ШИЛЖСЭН&nbsp;&nbsp;
                    <div style={styles.leftText}>
                      ЭМИЙН
                      ҮНЭ:..............................................................................
                      /......................................................../
                    </div>
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
                    Ухаан санаа: Глазго үнэлгээ{" "}
                    <div style={styles.rowCells}></div>
                    <div style={styles.rowCells}></div>
                  </div>
                  <div style={styles.rowCellWithText}>
                    <span style={{ marginLeft: 50 }}>Нүд</span>{" "}
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
                    булчирхай..................................................................{" "}
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
                    ..............................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Уушиг.....................................................................................................{" "}
                  </div>
                  <div style={styles.leftText}>
                    .................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    .................................................................................................................
                  </div>
                  <div style={styles.leftText}>
                    Хэвлийн тойм
                    үзлэг..................................................................{" "}
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
                    Хэсэг газрын
                    үзлэг......................................................................{" "}
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
                    <div style={styles.leftText}>Рентген</div>
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
                  <div style={styles.rowCellWithText}>
                    <div style={styles.rowCells}></div>&nbsp;Биохимийн шинжилгээ
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Нийт бил
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Нийт уураг
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Алат
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Амилаза
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Аммони
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Тропинин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Мочевин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;СРБ
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Сахар
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;ЛДГ
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Na
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Ca
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;CI
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Шууд бил
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Альбумин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Асат
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Холестрин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Креатинин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Миоглобулин
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Үлдэгдэл азот
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;ШФ
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;КФК
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;K
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;Mg
                      </div>
                      <div style={styles.rowCellWithText}>
                        <div style={styles.rowCells}></div>&nbsp;бусад
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <img src={img32A} width={400} alt="34" />
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Урьдчилсан онош:
                  ..........................................................................................................................................
                  <div style={styles.leftText}>
                    ..................................................................................................................................................................................
                  </div>
                </td>
                <td style={styles.topText}>ӨОУА код</td>
                <td style={styles.topText} rowSpan={2}>
                  Эмчийн гарын үсэг
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Ялгах онош:
                  ........................................................................................................................................................
                  <div style={styles.leftText}>
                    ..................................................................................................................................................................................
                  </div>
                </td>
                <td style={styles.topText}></td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Төрөлжсөн мэргэжлийн эмчийн үзлэг, онош:
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
                    Төрөлжсөн нарийн мэргэжлийн эмчийн нэр{" "}
                    <span style={{ marginLeft: 100 }}>/</span>{" "}
                    <span style={{ marginLeft: 100 }}>/</span>
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
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={styles.topText}>
                  Шийдвэрлэсэн байдал
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
                  <div style={styles.leftText}>
                    Шийдвэрлэсэн эмчийн нэр
                    <span style={{ marginLeft: 100 }}>/</span>{" "}
                    <span style={{ marginLeft: 100 }}>/</span>
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
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_32A;
