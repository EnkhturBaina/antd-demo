import React from "react";
import { Table } from "react-bootstrap";

//маягт СҮ-1
function CY_1() {
  const styles = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 3,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 50,
      lineHeight: 0.8,
      fontSize: 12,
    },
    centerText: {
      padding: 2,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      lineHeight: 1,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
    },
  };

  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <span style={{ fontSize: 10 }}>
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны
              </span>
              <span style={{ fontSize: 10 }}>
                өдрийн A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 10 }}>
                Эрүүл мэндийн бүртгэлийн маягт СҮ-1
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                СҮРЬЕЭГИЙН ТОХИОЛДЛЫН БҮРТГЭЛ
              </span>
            </div>
          </div>
          <div style={styles.leftText}>
            Сүрьеэгийн тусламж үйлчилгээ үзүүлэгч
            байгууллага:..........................................................
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 5 }}
          >
            <tbody>
              <tr>
                <td
                  rowSpan={4}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Бүртгэлийн дугаар
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Бүртгэлд авсан огноо
                </td>
                <td rowSpan={4} colSpan={10} style={styles.centerText}>
                  Эцэг /эх/-ийн нэр, Өөрийн нэр Регистрийн дугаар
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Нас
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Хүйс
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Оршин суугаа хаяг
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Сүрьеэгийн хэлбэр
                </td>
                <td colSpan={7} style={styles.centerText}>
                  Тохиолдлын тодорхойлолт
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.centerText, ...{ width: 60 } }}
                >
                  Онош кодоор ӨОУА
                </td>
                <td colSpan={4} rowSpan={2} style={styles.centerText}>
                  Эмчилгээний бүлэг
                </td>
                <td colSpan={2} rowSpan={2} style={styles.centerText}>
                  Хаана эмчлэгдэх
                </td>
                <td colSpan={13} style={styles.centerText}>
                  Цэрний ба бусад шинжилгээний хариу
                </td>
                <td colSpan={2} rowSpan={2} style={styles.centerText}>
                  Сүрьеэ, ХДХВ
                </td>
                <td colSpan={9} style={styles.centerText}>
                  Эмчилгээний үр дүн (огноо)
                </td>
                <td
                  rowSpan={4}
                  style={{ ...styles.centerText, ...{ width: 70 } }}
                >
                  Тайлбар
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={3}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Шинэ
                </td>
                <td colSpan={4} style={styles.centerText}>
                  Өмнө нь эмчлэгдсэн
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Өмнөх эмчилгээний түүх тодорхойгүй
                </td>
                <td
                  rowSpan={3}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Шилжиж ирсэн
                </td>
                <td colSpan={5} style={styles.centerText}>
                  Оношлогдох үеийн /0 сар/
                </td>
                <td colSpan={2} style={styles.centerText}>
                  2 дахь сар
                </td>
                <td colSpan={2} style={styles.centerText}>
                  3 дахь сар
                </td>
                <td colSpan={2} style={styles.centerText}>
                  5 дахь сар
                </td>
                <td colSpan={2} style={styles.centerText}>
                  Эмчилгээний төгсгөлд
                </td>
                <td colSpan={6} style={styles.centerText}>
                  Үр дүн тооцсон
                </td>
                <td colSpan={3} style={styles.centerText}>
                  Үр дүн тооцоогүй
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Дахилт
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эмчилгээ үр дүнгүй болсоны дараах
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Хяналт алдагдсаны дараах
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Бусад (Өмнөх эмчилгээний үр дүн тодорхойгүй)
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 20 } }}
                >
                  1,3-р бүлэг
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 20 } }}
                >
                  2-р бүлэг
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 20 } }}
                >
                  Өвөрмөц горим
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 20 } }}
                >
                  Эхэлсэн огноо
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эрчимт шат
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Үргэлжлэх шат
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  ХДХВ халдвар (Т,Ү,М)
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  ЭМЧТШ (Т,Ү,М)
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тү</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Өс</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                  Xpert
                </td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тү</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Өс</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тү</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Өс</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тү</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Өс</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Тү</td>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>Өс</td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  РВЭ (Т,Ү)
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  КС (Т,Ү)
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эдгэрсэн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эмчилгээ дуусгасан
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Нас барсан
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Үр дүнгүй
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Хяналт алдагдсан
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Дүгнэгдээгүй
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  ЭТС-д шилжсэн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Онош өөрчлөгдсөн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.verticalText, ...{ width: 30 } }}
                >
                  Эм тохироогүй
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 30 } }}>
                  (У,УБ)
                </td>
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Лаб.№, огноо
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Лаб.№, огноо
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Лаб.№, огноо
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Лаб.№, огноо
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ width: 30 } }}
                >
                  Лаб.№, огноо
                </td>
              </tr>
              {[...Array(10)].map((x, i) => (
                <>
                  <tr>
                    <td rowSpan={2}></td>
                    <td rowSpan={2}></td>
                    <td colSpan={10}></td>

                    {[...Array(20)].map((x, i) => (
                      <td
                        rowSpan={2}
                        key={i}
                        style={{
                          ...styles.centerText,
                          ...{ height: 15, width: 15 },
                        }}
                      ></td>
                    ))}
                    {[...Array(11)].map((x, i) => (
                      <td
                        key={i}
                        style={{
                          ...styles.centerText,
                          ...{ height: 15, width: 15 },
                        }}
                      ></td>
                    ))}
                    {[...Array(12)].map((x, i) => (
                      <td
                        rowSpan={2}
                        key={i}
                        style={{
                          ...styles.centerText,
                          ...{ height: 15, width: 15 },
                        }}
                      ></td>
                    ))}
                  </tr>
                  <tr>
                    {[...Array(21)].map((x, i) => (
                      <td
                        key={i}
                        style={{
                          ...styles.centerText,
                          ...{ height: 15, width: 15 },
                        }}
                      ></td>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <div style={styles.leftText}>Товчилсон үгийн тайлбар:</div>
              <div style={styles.leftText}>У - Уушгины сүрьеэ</div>
              <div style={styles.leftText}>УБ - Уушгины бус сүрьеэ</div>
              <div style={styles.leftText}>
                ӨОУА - Өвчний олон улсын 10-р ангилал
              </div>
              <div style={styles.leftText}>Т - Тийм</div>
              <div style={styles.leftText}>Ү - Үгүй</div>
            </div>
            <div style={{ marginLeft: 60 }}>
              <div style={styles.leftText}>М - Мэдэхгүй, тодорхойгүй</div>
              <div style={styles.leftText}>Тү - Түрхцийн шинжилгээ</div>
              <div style={styles.leftText}>Өс - Өсгөвөрлөх шинжилгээ</div>
              <div style={styles.leftText}>
                Xpert - GeneXpert MTB/RIF шинжилгээ
              </div>
              <div style={styles.leftText}>
                Лаб.№ - Лабораторийн шинжилгээний дугаар
              </div>
            </div>
            <div style={{ marginLeft: 60 }}>
              <div style={styles.leftText}>
                РВЭ - Ретровирусийн эсрэг эмчилгээ
              </div>
              <div style={styles.leftText}>КС - Котримиксазолын эмчилгээ</div>
              <div style={styles.leftText}>
                ЭМЧТШ– Эмэнд мэдрэг чанар тодорхойлох шинжилгээ
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CY_1;
