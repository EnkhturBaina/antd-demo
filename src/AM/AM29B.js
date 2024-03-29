import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-29Б
function AM29B() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexCotnainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };
  return (
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
          <span style={styles.generalText}>
            Эмнэлгийн нэр ____________________
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={styles.generalText}>
              A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
            </span>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              Эрүүл мэндийн бүртгэлийн маягт АМ-29Б
            </span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <span style={styles.generalText}>Эмнэлгийн код:</span>
          <div style={{ display: "flex", marginLeft: 5 }}>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
            <div style={styles.rowCells}></div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: 16 }}>
            БАРИА ЗАСАЛ ЭМЧИЛГЭЭНИЙ КАРТ
          </span>
        </div>
        <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
          <div>Өрөөний №</div>
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
          </div>
          <div style={{ display: "flex", marginTop: 5 }}>
            <span style={styles.generalText}>ЭМД:</span>
            <div style={{ display: "flex", marginLeft: 5 }}>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
              <div style={styles.rowCells}></div>
            </div>
          </div>
        </div>
        <div style={styles.rowStyle}>
          1. Эцэг /эх/-ийн нэр __________________________
          <span style={{ marginLeft: 50 }}>Нэр __________________________</span>
        </div>
        <div style={styles.rowStyle}>
          2. Нас ______
          <span style={{ marginLeft: 50 }}>Хүйс: /зур/ эрэгтэй, эмэгтэй</span>
        </div>
        <div style={styles.rowStyle}>
          3. Үндсэн онош: ________________________________________
        </div>
        <div style={styles.flexCotnainer}>
          <div style={styles.rowStyle}>4. Барианы төрөл ________________</div>
          <div>
            <div style={styles.rowStyle}>
              <span>Бүтэн биеийн бариа :</span>
            </div>
            <div style={styles.generalText}>
              <span>1. Бүтэн биеийн зөөлөн бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>2. Халуун тосон бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>3. Сүүн бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>4. Шөлөн бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>5. Арвайн бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>6. Бусад бариа ..................</span>
            </div>
            <div style={styles.generalText}>
              <span>............................................</span>
            </div>
          </div>
          <div>
            <div style={styles.rowStyle}>
              <span>Хэсэгчилсэн бариа:</span>
            </div>
            <div style={styles.generalText}>
              <span>1. Толгой, хүзүү, нуруу</span>
            </div>
            <div style={styles.generalText}>
              <span>2. Нүүрний хэсэг</span>
            </div>
            <div style={styles.generalText}>
              <span>3. Гарын /мөр, бугалга, шуу, тохой, сарвууны хэсэг/</span>
            </div>
            <div style={styles.generalText}>
              <span>4. Сээр бүсэлхий ууц нуруу</span>
            </div>
            <div style={styles.generalText}>
              <span>5. Хөлийн /түнх, гуя, өвдөг, шилбэ, тавхайн хэсэг/</span>
            </div>
            <div style={styles.generalText}>
              <span>6. 4 тольтын бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>7. Даран бариа</span>
            </div>
            <div style={styles.generalText}>
              <span>8. Бусад бариа</span>
            </div>
          </div>
        </div>
        <div style={styles.rowStyle}>
          5. Анхаарах
          зүйл:_______________________________________________________________
        </div>
        <div style={styles.rowStyle}>
          Эмчийн нэр: __________________________
        </div>
        <div style={{ ...styles.generalText, ...{ marginLeft: 450 } }}>
          <span style={{ fontWeight: "bold", fontSize: 14 }}>
            Маягтын ар тал
          </span>
          <br />
          <span style={{ fontWeight: "bold", fontSize: 14 }}>Б тал</span>
        </div>
        <Table bordered className="document" style={{ marginTop: 10 }}>
          <tbody>
            <tr>
              <td style={{ ...styles.centerText, ...{ width: 40 } }}>№</td>
              <td style={{ ...styles.centerText, ...{ width: 70 } }}>
                Он сар өдөр
              </td>
              <td style={styles.centerText}>Барианы төрөл</td>
              <td style={styles.centerText}>Хийгдсэн хугацаа</td>
              <td style={styles.centerText}>Сувилагчийн нэр</td>
            </tr>
            {[...Array(10)].map((x, i) => (
              <tr key={i}>
                <td style={styles.centerText}>{i + 1}</td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
                <td style={styles.centerText}></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AM29B;
