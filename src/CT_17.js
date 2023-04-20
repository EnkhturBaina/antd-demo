import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-17
function CT_17() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      lineHeight: 1.2,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 40,
      lineHeight: 1,
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-17
            </div>
            <div style={styles.headerText}>(өвчний түүхэнд хавсаргана)</div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУС ЦУСАН БҮТЭЭГДЭХҮҮН ЗАХИАЛАХ МАЯГТ
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>Эмнэлгийн нэр:</b> ____________________________________
            <b>Тасгийн нэр:</b> ____________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Захиалсан:</b> _______он_____сар_______өдөр, <b>сэлбэлт хийх </b>
            _____ сар______ өдөр_____ цаг _____
          </div>
          <div style={styles.rowStyle}>
            <b>Өвчний түүхийн №</b>_______________________________
            <b>Регистерийн дугаар:</b>__________________
          </div>
          <div style={styles.rowStyle}>
            <b>Эцэг /эх/-ийн нэр: </b>_______________________ <b>Өөрийн нэр:</b>
            _________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Хүйс /зур/:</b> Эрэгтэй, Эмэгтэй Биеийн жин:______
          </div>
          <div style={styles.rowStyle}>
            <b>Онош:</b>
            ___________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>ЦЦБ сэлбэх заалт:</b>
            ______________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ___________________________________________________________________________________________________________________________
          </div>

          <div style={styles.flexContainer}>
            <div>
              <div style={styles.boldText}>Цусны бүлэг /дугуйлна уу/:</div>
              <div style={styles.centerText}>O</div>
              <div style={styles.centerText}>A</div>
              <div style={styles.centerText}>B</div>
              <div style={styles.centerText}>AB</div>
            </div>
            <div style={{ marginRight: 100 }}>
              <div style={styles.leftText}>
                <b>Резус фактор RhD /зур/:</b>
                <span style={{ marginLeft: 20 }}>Эерэг</span>
                <span style={{ marginLeft: 20 }}>Сөрөг</span>
              </div>
              <div style={styles.leftText}>
                <b>Өмнө нь цус сэлбүүлсэн /зур/:</b>
                <span style={{ marginLeft: 20 }}>Тийм</span>
                <span style={{ marginLeft: 20 }}>Үгүй</span>
              </div>
              <div style={styles.leftText}>
                <b>Урвал илэрсэн /зур/:</b>
                <span style={{ marginLeft: 20 }}>Тийм</span>
                <span style={{ marginLeft: 20 }}>Үгүй</span>
              </div>
              <div style={styles.leftText}>
                <b>Эсрэгбие илэрсэн /зур/: </b>
                <span style={{ marginLeft: 20 }}>Тийм</span>
                <span style={{ marginLeft: 20 }}>Үгүй</span>
              </div>
              <div style={styles.leftText}>
                <b>Жирэмслэлт:</b>
                <span style={{ marginLeft: 20 }}> ________ удаа</span>
              </div>
            </div>
          </div>
          <div style={styles.rowStyle}>
            <b>Захиалга:</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td rowSpan={2} style={styles.centerText}>
                  ЦЦБ-ний нэр
                </td>
                <td
                  colSpan={6}
                  style={{
                    ...styles.centerText,
                    ...{},
                  }}
                >
                  Шууд хүлээн авах
                </td>
                <td
                  colSpan={16}
                  style={{
                    ...styles.centerText,
                    ...{},
                  }}
                >
                  Захиалгат ЦЦБ /24-48 цаг/
                </td>
                <td
                  rowSpan={2}
                  style={{
                    ...styles.verticalText,
                    ...{},
                  }}
                >
                  Ст-Стандарт ийлдэс
                </td>
                <td
                  rowSpan={2}
                  style={{
                    ...styles.verticalText,
                    ...{},
                  }}
                >
                  Ст-Стандарт улаан эс
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Бүхэл цус</td>
                <td style={styles.verticalText}>Даршилсан улаан эс</td>
                <td style={styles.verticalText}>Улаан эсийн өтгөрүүлэг</td>
                <td style={styles.verticalText}>Хөлдөөсөн шинэ сийвэн</td>
                <td style={styles.verticalText}>К сийвэн</td>
                <td style={styles.verticalText}>
                  Эмгэгтөрүүлэгчийг идэвхгүйжүүлсэн
                </td>
                <td style={styles.verticalText}>Угаасан улаан эс</td>
                <td style={styles.verticalText}>ЦЭУЭ-Бүхэл цус</td>
                <td style={styles.verticalText}>ЦЭУЭ-Даршилсан улаан эс</td>
                <td style={styles.verticalText}>ЦЭУЭ-Улаан эсийн өтгөрүүлэг</td>
                <td style={styles.verticalText}>Туяагаар шарсан ДУЭ</td>
                <td style={styles.verticalText}>Туяагаар шарсан УЭӨ</td>
                <td style={styles.verticalText}>Хөлдөөж угаасан улаан эс</td>
                <td style={styles.verticalText}>Криопреципитат</td>
                <td style={styles.verticalText}>Ялтас эсийн өтгөрүүлэг</td>
                <td style={styles.verticalText}>Цитоферезээр бэлдсэн ЯЭӨ</td>
                <td style={styles.verticalText}>
                  Туяагаар шарсан ЯЭӨ/Бүхэл цус/
                </td>
                <td style={styles.verticalText}>
                  Туяагаар шарсан ЯЭӨ/Цитоферез/
                </td>
                <td style={styles.verticalText}>
                  Эмгэгтөрүүлэгчийг идэвхгүйжүүлсэн
                </td>
                <td style={styles.verticalText}>
                  Эмгэгтөрүүлэгчийг идэвхгүйжүүлсэн
                </td>
                <td style={styles.verticalText}>
                  Нэгтгэж савласан Криопреципитат /4,6,10
                </td>
                <td style={styles.verticalText}>
                  Нэгтгэж савласан Ялтас эсийн өтгөрүүлэг /4,6,10/
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хэмжээ</td>
                {[...Array(24)].map((x, i) => (
                  <td style={styles.leftText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>нэгж</td>
                {[...Array(24)].map((x, i) => (
                  <td style={styles.leftText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Захиалсан эмчийн овог нэр:</b>___________________,
            <b> Гарын үсэг:</b>
            ____________________
          </div>
          <div style={styles.rowStyle}>
            ________ он________ сар________ өдөр______ цаг
          </div>
          <div style={styles.rowStyle}>
            <b>
              Захиалга хүлээн авсан Цусны нөөц зохицуулах нэгжийн ажилтны нэр:
              _______________
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>Гарын үсэг</b>_______________________
          </div>
          <div style={styles.rowStyle}>
            ________ он________ сар________ өдөр______ цаг
          </div>
          <div
            style={{
              width: "100%",
              height: 3,
              backgroundColor: "#000",
              marginTop: 10,
            }}
          ></div>
          <div style={styles.rowStyle}>
            <b>Шинжилгээний сорьцыг авсан сувилагчийн нэр: </b>
            _____________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Сорьц авсан он сар өдөр</b>______________<b>Өвчтөний нэр:</b>
            ______________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Гуурсны код /Хүүдийний код/: </b>
            _____________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Лабораторид өгсөн ажилтны нэр:</b>______________
            <b> Гарын үсэг:</b>
            ______________________________
          </div>
          <div style={styles.rowStyle}>
            <b>
              Лабораторт өвчтөний сорьц, хувийн тохирооны гуурсыг хүлээн авсан:
            </b>
            _____ он______ сар өдөр__________, цаг минут______
          </div>
          <div style={{ ...styles.rowStyle, ...{ textAlign: "center" } }}>
            <b>
              Цусны хувийн тохироо тодорхойлох шинжилгээний хариу илгээх маягт
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>Шинжилгээний сорьц хүлээн авсан: </b>. . . .он . . . .сар . . .
            өдөр. .. цаг . . . минут
          </div>
          <div style={{ ...styles.rowStyle, ...{ textAlign: "center" } }}>
            Өвчтөний цусны АВО бүлэг . . . . <b>Резус бүлэг:</b>/зур/ эерэг,
            сөрөг Фенотип. . . .
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td colSpan={5} style={styles.centerText}>
                  Сэлбэх ЦЦБ-ний мэдээлэл
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Шинжилгээний хариу
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>ЦЦБ-ний нэр</td>
                <td style={styles.centerText}>Цус өгөлтийн код</td>
                <td style={styles.centerText}>Цуврал савлалтын №</td>
                <td style={styles.centerText}>Хүүдийний код</td>
                <td style={styles.centerText}>АВО, резус бүлэг</td>
              </tr>
              {[...Array(5)].map((x, i) => (
                <tr key={i}>
                  {[...Array(6)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Шинжилгээ хийсэн лаборант:</b>...............................
          </div>
          <div style={styles.rowStyle}>
            <b>Шинжилгээг хянасан эмч:</b>...............................
          </div>
          <div style={styles.rowStyle}>
            <b>Шинжилгээг хийсэн:</b> . . . он . . . сар . . . . өдөр. . . .цаг
            . . . минут
          </div>
          <div style={styles.rowStyle}>
            <b>Тайлбар:</b>Захиалгын маягтны эхний хэсгийг сэлбэлт хийх эмч,
            Бүлэг хувийн тохирооны хэсгийг сорьц авсан сувилагч нар, Хувийн
            тохирооны шинжилгээний хариуг лабораторийн эмч, лаборант нар тус тус
            хөтөлнө.
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_17;
