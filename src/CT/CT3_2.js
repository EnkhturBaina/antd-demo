import React from "react";
import { Table } from "react-bootstrap";

//маягт  СТ-3 Хавсралт 2

function CT3_2() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
      marginTop: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
    },
    leftBold: {
      fontWeight: "bold",
      fontSize: 12,
      marginTop: 10,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={styles.leftBold}></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ-3 Хавсралт 2
              </span>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              marginBottom: 15,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              УРГИЙН ЗҮРХНИЙ БИЧЛЭГИЙН ҮНЭЛГЭЭНИЙ ХУУДАС
            </span>
          </div>
          <div style={styles.leftText}>
            Эхийн овог, нэр
            ..................................................................
            нас.......... ............... он .......сар .......өдөр
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 150 } }}>
                  Жирэмсэн үеийн эрсдэлт хүчин зүйл
                </td>
                <td></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 150 } }}>
                  Төрлөгийн үеийн эрсдэлт хүчин зүйл
                </td>
                <td></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 150 } }}>
                  Умайн базлалт
                </td>
                <td style={styles.leftText}>10 хоромд ...........удаа</td>
              </tr>
            </tbody>
          </Table>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: 140 } }}
                >
                  <b>Үзүүлэлт</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 150 } }}>
                  <b>Хэвийн</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 180 } }}>
                  <b>Эргэлзээтэй</b>
                </td>
                <td style={{ ...styles.leftText, ...{ width: 220 } }}>
                  <b>Эмгэг</b>
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>1</td>
                <td style={styles.leftText}>Суурин давтамж /Baseline rate/</td>
                <td style={styles.leftText}>110-159</td>
                <td style={styles.leftText}>
                  100-109
                  <br />
                  160-180
                </td>
                <td style={styles.leftText}>&#60;100 эсвэл &#62; 180</td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>2</td>
                <td style={styles.leftText}>
                  Суурин давтамжийн хувьсал /Variability/
                </td>
                <td style={styles.leftText}>Далайц 5 ба түүнээс дээш</td>
                <td style={styles.leftText}>
                  40-90 хормын турш
                  <br />
                  &#60; 5
                </td>
                <td style={styles.leftText}>
                  90 хормоос дээш хугацаанд &#60; 5
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>3</td>
                <td style={styles.leftText}>Хурдсал /Accelerations/</td>
                <td style={styles.leftText}>Илэрсэн</td>
                <td style={styles.leftText}>Илрээгүй</td>
                <td style={styles.leftText}>3 удаагийн бичлэгт илрээгүй</td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>4</td>
                <td style={styles.leftText}>Удаашрал /Decelerations/</td>
                <td style={styles.leftText}>Илрээгүй</td>
                <td style={styles.leftText}>
                  Эрт удаашрал эсвэл 3 хормын дотор нэг хувьсах удаашрал
                </td>
                <td style={styles.leftText}>
                  Хожуу болон хувьсах удаашрал давтагдах эсвэл 3 хормоос дээш
                  үргэлжилсэн удааширсан удаашрал
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            Бүх үзүүлэлт хэвийн бол "Хэвийн УЗБ", нэг үзүүлэлт эргэлзээтэй бол
            "Эргэлзээтэй УЗБ", хоёр эсвэл түүнээс дээш үзүүлэлт эргэлзээтэй
            эсвэл нэг, түүнээс дээш үзүүлэлт эмгэг бол "Эмгэг УЗБ" гэж
            тэмдэглэнэ. Сонгосон үнэлгээг дугуйлж “○” тэмдэглэнэ үү. Тайлбар:
            Синусын хэм 20 хоромын турш илэрсэн тохиолдолд эмгэг гэж үнэлнэ.
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 10 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Үзүүлэлтүүд
                </td>
                <td style={styles.centerText} colSpan={4}>
                  <b>Хэвийн УЗБ</b>
                </td>
                <td style={styles.centerText} colSpan={4}>
                  <b> Эргэлзээтэй УЗБ</b>
                </td>
                <td style={styles.centerText} colSpan={4}>
                  <b>Эмгэг УЗБ</b>
                </td>
                <td style={styles.centerText} rowSpan={2}>
                  Үнэлгээ
                </td>
                <td
                  style={{ ...styles.centerText, ...{ width: 100 } }}
                  rowSpan={2}
                >
                  Үнэлсэн эмчийн нэр
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>Бичлэг</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Цаг</td>
                <td style={styles.centerText} colSpan={12}>
                  Тэмдэглэгээ
                </td>
              </tr>
              {[...Array(15)].map((x, i) => (
                <tr key={i}>
                  <td style={styles.leftText}>Бичлэг № {i + 1}</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}>1</td>
                  <td style={styles.centerText}>2</td>
                  <td style={styles.centerText}>3</td>
                  <td style={styles.centerText}>4</td>
                  <td style={styles.centerText}>1</td>
                  <td style={styles.centerText}>2</td>
                  <td style={styles.centerText}>3</td>
                  <td style={styles.centerText}>4</td>
                  <td style={styles.centerText}>1</td>
                  <td style={styles.centerText}>2</td>
                  <td style={styles.centerText}>3</td>
                  <td style={styles.centerText}>4</td>
                  <td style={styles.centerText}></td>
                  <td style={styles.centerText}></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT3_2;
