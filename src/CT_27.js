import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-27
function CT_27() {
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
    leftText: {
      fontSize: 12,
    },
  };
  return (
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-27
            </span>
          </div>
          <div style={textStyle.leftText}>
            <span>Эмнэлгийн нэр ________________________</span>
          </div>
          <div style={textStyle.leftText}>
            <span>Тасгийн нэр ________________________</span>
          </div>
          <div style={textStyle.leftText}>
            <span>Өвчтөний нэр ________________________</span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 10, marginTop: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЭМИЙН ЗАХИАЛГЫН ТҮҮВЭР
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
            <span></span>
            <span>201.....оны ..... сарын .... өдөр</span>
          </div>
        </div>
        <Table bordered className="document" style={{ marginTop: 10 }}>
          <tbody>
            <tr>
              <td
                rowSpan={2}
                style={{ ...textStyle.verticalText, ...{ width: 40 } }}
              >
                Палатны дугаар
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 120 },
                }}
              ></td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Нас
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Хүйс
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Ор хоног
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Түүхийн №
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Хоолны №
              </td>
              <td
                colSpan={20}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 40 },
                }}
              ></td>
              <td
                colSpan={4}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 40 },
                }}
              >
                Хатгалтын тооцоо
              </td>
              <td
                rowSpan={2}
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20, fontWeight: "bold" },
                }}
              >
                Нийт
              </td>
              <td
                colSpan={7}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 40 },
                }}
              >
                Зарцуулсан тариур /гр/
              </td>
            </tr>
            <tr>
              {[...Array(20)].map((x, i) => (
                <td
                  key={i}
                  style={{
                    ...textStyle.centerText,
                    ...{ width: 20 },
                  }}
                ></td>
              ))}
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Дусал
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Судас
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Булчин
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Арьсан дор
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                20,0
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                10,0
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                5,0
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                3,0
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                1,0
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Уян зүү
              </td>
              <td
                style={{
                  ...textStyle.verticalText,
                  ...{ width: 20 },
                }}
              >
                Систем
              </td>
            </tr>
            {[...Array(22)].map((x, i) => (
              <tr key={i}>
                <td style={textStyle.centerText}></td>
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
            <tr>
              <td style={textStyle.centerText}></td>
              <td
                style={{ fontWeight: "bold", padding: 0, textAlign: "center" }}
              >
                Нийт
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CT_27;
