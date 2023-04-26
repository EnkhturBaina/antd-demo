import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-8
function CT_8() {
  const textStyle = {
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      lineHeight: 1.3,
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
              <span style={{ fontSize: 12 }}>
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <span style={{ fontSize: 12 }}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ-8
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Эмнэлгийн нэр: ________________________________</span>
            </div>
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <span style={{ fontWeight: "bold", fontSize: 16 }}>
                НЯРАЙ ХҮҮХДИЙН БҮРТГЭЛ
              </span>
            </div>
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 25 } }}
                >
                  №
                </td>
                <td colSpan={10} rowSpan={2} style={textStyle.centerText}>
                  Эхийн нэр Регистрийн дугаар
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Нас
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Нярайн түүхийн №
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Төрсөн он,сар, өдөр
                </td>
                <td
                  colSpan={6}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Төрсөн хүүхэд
                </td>

                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Үндсэн онош
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 80 } }}
                >
                  Гарсан-1 Шижсэн -2 Нас барсан -3
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Ор хоног
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 100 } }}
                >
                  Эх баригч, эмчлэгч эмчийн нэр
                </td>
              </tr>
              <tr>
                <td style={{ ...textStyle.centerText, ...{ width: 70 } }}>
                  Амьд (+) Амьгүй (-)
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 50 } }}>
                  Хүйс
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 70 } }}>
                  Жин ( гр )
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 80 } }}>
                  Өндөр (см)
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 100 } }}>
                  Төрснөөс хойш 1 цагийн дотор хөхөө амласан
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 80 } }}>
                  Төрөлхийн гажигтай
                </td>
              </tr>
              <tr>
                {[...Array(15)].map((x, i) => (
                  <td style={textStyle.centerText} colSpan={i == 1 ? 10 : 0}>
                    {i == 0 ? <>&nbsp;</> : i}
                  </td>
                ))}
              </tr>
              {[...Array(8)].map((x, i) => (
                <>
                  <tr>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td
                      colSpan={10}
                      style={{
                        ...textStyle.centerText,
                        ...{ height: 25 },
                      }}
                    ></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td
                      rowSpan={2}
                      style={{ ...textStyle.centerText, ...{ width: 30 } }}
                    ></td>
                    <td
                      rowSpan={2}
                      style={{ ...textStyle.centerText, ...{ width: 30 } }}
                    ></td>
                    <td
                      rowSpan={2}
                      style={{ ...textStyle.centerText, ...{ width: 30 } }}
                    ></td>
                    <td
                      rowSpan={2}
                      style={{ ...textStyle.centerText, ...{ width: 30 } }}
                    ></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                    <td rowSpan={2} style={textStyle.centerText}></td>
                  </tr>
                  <tr>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                    <td style={{ height: 30, width: 25 }}></td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_8;
