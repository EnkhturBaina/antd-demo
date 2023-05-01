import React from "react";
import { Table } from "react-bootstrap";
import CM_4_14_IMG from "./CM_4_14.PNG";

//маягт СМ-4-Хавсралт 14
function CM_4_14() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    leftText: {
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      paddingLeft: 5,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
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
            <b> СМ-4-Хавсралт 14</b>
          </span>
          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              marginBottom: 15,
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ӨВДӨЛТИЙГ ХЯНАХ ХУУДАС
            </span>
          </div>
          <div style={styles.centerText}>
            Эмчлүүлэгчийн овог, нэр:
            <span style={{ marginLeft: 100 }}>Өвчний түүх №</span>
            <span style={{ marginLeft: 100 }}>
              Нас: _____ Хүйс: _____ Тасаг: _____ Өрөө: _____
            </span>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginTop: 10, marginBottom: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Сар/Өдөр
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.cenleftTextterText} colSpan={2}>
                  Мэс заслын дараах хоног
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Цаг
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Өвдөлтийн байрлал
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 100 },
                  }}
                >
                  <img src={CM_4_14_IMG} width={120} />
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 100 },
                  }}
                >
                  <img src={CM_4_14_IMG} width={120} />
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 100 },
                  }}
                >
                  <img src={CM_4_14_IMG} width={120} />
                </td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 100 },
                  }}
                >
                  <img src={CM_4_14_IMG} width={120} />
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={10}>
                  Өвдөлтийн хүч*
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  1 – бага
                </td>
                <td style={{ ...styles.leftText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>2</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>3</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>4</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>5</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>6</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>7</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>8</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>9</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  10–маш хүчтэй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={4} colSpan={2}>
                  Ямар өвдөлт байгаа вэ? /Жишээ нь чинэрч өвдөх, хатгаж өвдөх/
                </td>
                <td
                  style={{ ...styles.leftText, ...{ width: 120, height: 15 } }}
                ></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ width: 120, height: 15 } }}
                ></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ width: 120, height: 15 } }}
                ></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td
                  style={{ ...styles.leftText, ...{ width: 120, height: 15 } }}
                ></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={3}>
                  Өвдөлтийн давтамж
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Босч явах үед
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Дандаа
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Өвдөөд унтаж чадахгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={4}>
                  Өвдөлт, үйл ажиллагааны байршлаар
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Хооллоход
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Ялгаруулалтын үед
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Сууж/босоход
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Бусад хөдөлгөөн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}>
                  Тийм / Үгүй
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} rowSpan={7}>
                  Эмийн бус аргууд
                </td>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Халуун
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Хүйтэн жин
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>Зүү</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Дасгал
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Массаж
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                  Физик эмчилгээ
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={{ ...styles.leftText, ...{ width: 100 } }}>Бусад</td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={6}>
                  Өвдөлт намдаах эмийн тун, хэрэглэх зам
                </td>
              </tr>
              {[...Array(7)].map((x, i) => (
                <tr>
                  <td style={styles.leftText} colSpan={2} key={i}></td>
                  <td
                    style={{
                      ...styles.centerText,
                      ...{ width: 120, height: 15 },
                    }}
                  ></td>
                  <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                  <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                  <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                </tr>
              ))}
              <tr>
                <td style={styles.leftText} rowSpan={3}></td>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 15 },
                  }}
                >
                  Өглөөний ээлж
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 15 },
                  }}
                >
                  Өдрийн ээлж
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
              <tr>
                <td
                  style={{
                    ...styles.centerText,
                    ...{ width: 120, height: 15 },
                  }}
                >
                  Оройн ээлж
                </td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 120 } }}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            * Өвдөлтийн хүчийг үнэлэхдээ өвчтөнөөс асуухаас гадна хавсаргасан
            өвдөлтийн хүч үнэлэх хуудсыг ашиглаж болно.
          </div>
        </div>
      </div>
    </>
  );
}

export default CM_4_14;
