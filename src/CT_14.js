import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-14
function CT_14() {
  const textStyle = {
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 2,
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
    },
  };
  return (
    <div className="page">
      <div className="subpage">
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-14
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 12,
            }}
          >
            <span>Эмнэлгийн нэр ________________________</span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 10, marginTop: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЭМЧЛҮҮЛЭГСДИЙН ӨДӨР ТУТМЫН ТООЦООНЫ БҮРТГЭЛ
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: 12,
              justifyContent: "space-between",
            }}
          >
            <span>Сар ________________________</span>
            <span>Орны тоо ________________________</span>
          </div>
        </div>
        <Table bordered className="document" style={{ marginTop: 10 }}>
          <tbody>
            <tr>
              <td
                rowSpan={2}
                style={{ ...textStyle.verticalText, ...{ width: 40 } }}
              >
                Өдөр
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 40 },
                }}
              >
                Эмчлүүлэгчийн тоо
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 40 },
                }}
              >
                Шинээр хэвтсэн эмчлүүлэгч
              </td>
              <td
                colSpan={2}
                style={{
                  ...textStyle.centerText,
                  ...{ height: 20 },
                }}
              >
                Дотоод хөдөлгөөн
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 40 },
                }}
              >
                Гарсан,шилжсэн
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 40 },
                }}
              >
                Нас барсан
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 40 },
                }}
              >
                Эцэст байгаа эмчлүүлэгчийн тоо
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 40 },
                }}
              >
                Хүнд өвчтөн
              </td>
            </tr>
            <tr>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 100 },
                }}
              >
                Өөр тасгаас ирсэн
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 100 },
                }}
              >
                Өөр тасагт очсон
              </td>
            </tr>
            {[...Array(31)].map((x, i) => (
              <tr key={i}>
                <td style={textStyle.centerText}>{i + 1}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CT_14;
