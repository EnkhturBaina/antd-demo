import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-19Б
function CT_19B() {
  const styles = {
    headerText: {
      fontSize: 12,
      lineHeight: 1.1,
    },
    rowStyle: {
      fontSize: 12,
      lineHeight: 1.2,
      marginTop: 5,
    },
    leftText: {
      textAlign: "left",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
      lineHeight: 1.1,
      paddingLeft: 5,
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-19Б
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 12 }}>
              НОЦТОЙ ХҮНДРЭЛИЙГ МЭДЭЭЛЭХ МАЯГТ
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>
              Эрүүл мэндийн байгууллагын нэр:
              ........................................................................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>
              Эмч, мэргэжилтний /зур/: Эцэг/эх/-ийн нэр:
              ................................ Өөрийн нэр:
              .......................................
            </b>
          </div>
          <div style={styles.rowStyle}>
            <b>Огноо</b>(он/сар/өдөр/цаг/минут):
            ......................................................................................
          </div>
          <div style={styles.rowStyle}>
            <b>Сэлбэлт хийсэн </b>(он/сар/өдөр/цаг/минут):
          </div>
          <div style={styles.rowStyle}>
            ....................................................................................................................................................................................
          </div>
          <div style={styles.rowStyle}>
            <b>Сэлбэлт хийлгэсэн өвчтөний Нас: ............ Хүйс /зур/:</b>
            Эрэгтэй Эмэгтэй
          </div>
          <div style={styles.rowStyle}>
            <b>Ноцтой хүндрэл өгсөн огноо </b>(он/сар/өдөр/цаг/минут):
          </div>
          <div style={styles.rowStyle}>
            ....................................................................................................................................................................................
          </div>
          <div style={styles.rowStyle}>
            <b>Сэлбэсэн бүтээгдэхүүн:</b>
          </div>
          <div style={styles.rowStyle}>
            <b>Улаан эсийн бүтээгдэхүүн</b>
          </div>
          <div style={styles.rowStyle}>
            ....................................................................................................................................................................................
          </div>
          <div style={styles.rowStyle}>
            <b>Сийвэнгийн бүтээгдэхүүн</b>
          </div>
          <div style={styles.rowStyle}>
            ....................................................................................................................................................................................
          </div>
          <div style={styles.rowStyle}>
            <b>Эсийн бүтээгдэхүүн</b>
          </div>
          <div style={styles.rowStyle}>
            ....................................................................................................................................................................................
          </div>

          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  Цусны бүлэг, резус үл тохирлоос шалтгаалсан дархлалын гаралтай
                  цус задрал
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Өөрөө эсрэг бие үүссэнтэй холбоотой дархлалын бус цус задрал
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Дархлалын бус цус задрал</td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Сэлбэлттэй холбоотой үүссэн нянгийн халдвар
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>Анафилакси/ Хэт мэдрэгжилт</td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээс үүдсэн уушгины гэмтэл
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээр дамжсан В гепатит вирүсийн халдвар (HBV)
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээр дамжсан С гепатит вирүсийн халдвар (HСV)
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээр дамжсан ХДХВ вирүсийн халдвар (HIV-1/2)
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээр дамжсан тэмбүүгийн халдвар
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээр дамжсан бусад вирүсийн халдвар (тодорхой нэрлэж
                  бичих)
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтээр дамжсан бусад ын халдвар (тодорхой нэрлэж
                  бичих)
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Цус сэлбэлтийн дараах цусархаг тууралт
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>
                  Сэлбэсэн эс, эзэн биеийн эсрэг урвал (GVHD)
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            <b>Тайлбар: </b>ус, цусан бүтээгдэхүүн сэлбэлт хийсэн эмч,
            мэргэжилтэн бөглөж, Цусны салбар төв, ЦССҮТ-д тухай бүр мэдээлнэ.
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_19B;
