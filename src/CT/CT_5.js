import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-5
function CT_5() {
  const textStyle = {
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 1,
      lineHeight: 1.3,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      maxHeight: 170,
      maxWidth: 50,
      lineHeight: 1,
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
              <span style={{ fontSize: 12 }}>
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <span style={{ fontSize: 12 }}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 12 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ-5
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
                ТӨРӨЛТИЙН БҮРТГЭЛ
              </span>
            </div>
          </div>
          <Table bordered className="document">
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 30 } }}
                >
                  №
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 60 } }}
                >
                  Түүхийн №
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 100 } }}
                >
                  Эхийн эцэг/эх/-ийн нэр, Өөрийн нэр, Регистрийн дугаар
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 40 } }}
                >
                  Нас
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 40 } }}
                >
                  Хэд дэх жирэмслэлт
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 40 } }}
                >
                  Хэд дэх төрөлт
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 40 } }}
                >
                  Сүүлийн төрөлт хоорондын зай
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 100 } }}
                >
                  Төрсөн он, сар, өдөр
                </td>
                <td
                  colSpan={4}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Хүүхдийн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 150 } }}
                >
                  Тогтмол хаяг
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 70 } }}
                >
                  Онош
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 40 } }}
                >
                  Үзүүлж байсан эрүүл мэндийн төв, эмчийн нэр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 40 } }}
                >
                  Эх барьж авсан их эмч, эх баригч
                </td>
              </tr>
              <tr>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Хүйс
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Жин
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Өндөр
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Апгарын балл
                </td>
              </tr>
              <tr>
                {[...Array(16)].map((x, i) => (
                  <td style={textStyle.centerText}>{i + 1}</td>
                ))}
              </tr>
              {[...Array(15)].map((x, i) => (
                <tr key={i}>
                  {[...Array(16)].map((x, j) => (
                    <td style={textStyle.centerText}>&nbsp;</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_5;
