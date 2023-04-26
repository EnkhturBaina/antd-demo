import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-21Б
function CT_21B() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    rowStyle: {
      fontSize: 12,
      lineHeight: 1.2,
      marginTop: 15,
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
  };
  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-21Б
            </div>
          </div>
          <div style={styles.rowStyle}>
            Эмнэлгийн нэр _____________________________
          </div>
          <div style={styles.rowStyle}>
            Тасгийн нэр ________________________________
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              ЦУС, ЦУСАН БҮТЭЭГДЭХҮҮН СЭЛБЭЛТТЭЙ ХОЛБООТОЙ УРВАЛ ХҮНДРЭЛИЙГ
              БҮРТГЭХ МАЯГТ
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td rowSpan={2} style={styles.centerText}>
                  №
                </td>
                <td rowSpan={2} style={styles.centerText}>
                  Эцэг /эх/-ийн нэр, Өөрийн нэр
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Нас хүйс
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Цусны АВО, резус бүлэг
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Онош
                </td>
                <td colSpan={3} style={styles.centerText}>
                  Сэлбэсэн ЦЦБний
                </td>
                <td colSpan={2} style={styles.centerText}>
                  Тохироо
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Цус, цусан бүтээгдэхүүнийг сэлбэсэн протокол хөтөлсөн (+),
                  хөтлөөгүй (-)
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Сэлбэсэн ЦЦБ-ний үлдэгдлийн хэмжээ, дагавар бичиг илгээсэн
                </td>
                <td colSpan={3} style={styles.centerText}>
                  Сорьц, дагавар бичиг
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Сэлбэсэн протоколийн хуулбар илгээсэн (тийм, үгүй)
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Урвал хүндрэлийн хуудсаар мэдээлэгдсэн (тийм, үгүй)
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Урвал хүндрэлийн төрөл
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Дээж хадгалагдсан нөхцөл
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Шинжилсэн лаборант, эмч
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Шинжилгээний дүгнэлт
                </td>
                <td rowSpan={2} style={styles.verticalText}>
                  Шалтгаан судлах хуудас ирсэн
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}>Нэр</td>
                <td style={styles.verticalText}>Цусны бүлэг</td>
                <td style={styles.verticalText}>Хэмжээ</td>
                <td style={styles.verticalText}>
                  Биологийн тохироо шалгасан (+),
                </td>
                <td style={styles.verticalText}>
                  Хувийн тохироо үзсэн (+), үзээгүй (-)
                </td>
                <td style={styles.verticalText}>Сэлбэлтийн өмнөх</td>
                <td style={styles.verticalText}>Сэлбэлтийн дараах</td>
                <td style={styles.verticalText}>Шинжилгээнд явуулсан</td>
              </tr>
              {[...Array(22)].map((x, i) => (
                <tr key={i}>
                  {[...Array(22)].map((x, j) => (
                    <td style={styles.centerText} key={j}>
                      &nbsp;
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Тайлбар: </b>Эмнэлгийн тасаг нэгжид хөтлөн, мэдээг цусны нөөц
            зохицуулах нэгж, цусны салбар төвд тайланг илгээнэ.
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_21B;
