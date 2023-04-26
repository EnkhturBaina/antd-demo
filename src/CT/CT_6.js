import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-6
function CT_6() {
  const textStyle = {
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      lineHeight: 1.3,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 100,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
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
                Эрүүл мэндийн бүртгэлийн маягт СТ-6
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <span style={{ fontWeight: "bold", fontSize: 16 }}>
                ЭХИЙН АМРАХ БАЙРААР ҮЙЛЧЛҮҮЛЭГЧДИЙН БҮРТГЭЛ
              </span>
            </div>
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td colSpan={10} rowSpan={2} style={textStyle.centerText}>
                  Эцэг/эх/-ийн нэр, Өөрийн нэр, Регистрийн дугаар
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Нас
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 100 } }}
                >
                  Тогтмол хаяг
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 60 } }}
                >
                  Ирсэн он, сар, өдөр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 80 } }}
                >
                  Ирэх үеийн жирэмсний хугацаа 7 хоногоор
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 60 } }}
                >
                  Төрсөн он, сар, өдөр
                </td>

                <td colSpan={2} style={textStyle.centerText}>
                  Оношийн хүндрэл
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 150 } }}
                >
                  Шалтгаан: алслагдсан -1 /км бичих/, унааны гачигдал-2, нэн
                  ядуу -3, цаг үеийн бэрхшээл-4, бусад /бичих/
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 60 } }}
                >
                  Амарсан хоног
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 70 } }}
                >
                  Гарсан он, сар, өдөр
                </td>
              </tr>
              <tr>
                <td style={{ ...textStyle.centerText, ...{ width: 70 } }}>
                  жирэмсэн үеийн
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 70 } }}>
                  төрөх, төрсний дараах үеийн
                </td>
              </tr>
              <tr>
                {[...Array(11)].map((x, i) => (
                  <td style={textStyle.centerText} colSpan={i == 0 ? 10 : 0}>
                    {i + 1}
                  </td>
                ))}
              </tr>
              {[...Array(8)].map((x, i) => (
                <>
                  <tr>
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

export default CT_6;
