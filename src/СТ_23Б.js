import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-23Б
function СТ_23Б() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 11,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    blankSpaces: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
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
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
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
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 11,
      marginTop: 3,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div></div>
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
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-23Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              ХҮҮХДИЙН ТҮРГЭН ТУСЛАМЖИЙН ДУУДЛАГЫН ХУУДАС№
            </span>
          </div>
          <div style={styles.rowStyle}>
            Дуудлага авсан <span style={{ marginLeft: 50 }}>он</span>
            <span style={{ marginLeft: 50 }}>сар</span>
            <span style={{ marginLeft: 50 }}>өдөр</span>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>
              Дуудлага хүлээн авсан хүний нэр
              _________________________________________
            </div>
            <div style={styles.rowStyle}>
              <span>Яаралтай</span>
            </div>
          </div>
          <div style={styles.flexRow}>
            <div style={styles.rowStyle}>Дуудлага өгсөн утасны дугаар</div>
            <div style={styles.rowStyle}>
              <span>Яаралтай бус</span>
            </div>
          </div>
          <div style={styles.rowStyle}>
            Өвчтөний эцэг/эх/-ийн нэр: _________________________________________
            <span style={{ marginLeft: 100 }}>
              Нэр _________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            Нас
            <span style={{ marginLeft: 100 }}>
              Хүйс: /зур/ Эрэгтэй, Эмэгтэй
            </span>
          </div>
          <div style={styles.rowStyle}>
            Оршин суугаа
            хаяг___________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Хаягын
            тодотголын__________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Дуудлага өгсөн хүний нэр _________________________________________
            <span style={{ marginLeft: 100 }}>
              ажлын газар _________________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>Дуудсан шалтгаан</div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.centerText}>Үзүүлэлт</td>
                <td style={styles.centerText}>цаг</td>
                <td style={styles.centerText}>минут</td>
                <td style={styles.centerText}>Үзүүлэлт</td>
                <td style={styles.centerText}>цаг</td>
                <td style={styles.centerText}>минут</td>
              </tr>
              <tr>
                <td style={styles.leftText}>Дуудлага авсан</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Гарсан</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Хүлээгдсэн</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Айлд очсон</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.leftText}>Буцаж ирсэн</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.leftText}>Зарцуулсан</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Очихоос өмнөх тусламж: /зур/ аваагүй, авсан, хэрэглэсэн эм тариа:
            _______________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Зовиур:_________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            __________________________________________________________________________________________________________________________________________________
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={{ height: 30 }}></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default СТ_23Б;
