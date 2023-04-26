import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-13Б
function CT_13B() {
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
              Эрүүл мэндийн бүртгэлийн маягт СТ-13Б
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Эмнэлгийн нэр: </span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЯАРАЛТАЙ ТУСЛАМЖ, ҮЙЛЧИЛГЭЭ ҮЗҮҮЛЭГЧДИЙН БҮРТГЭЛ
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
                д/д
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.verticalText, ...{ width: 40 } }}
              >
                Сар, өдөр, цаг, минут
              </td>
              <td
                rowSpan={2}
                colSpan={10}
                style={{
                  ...textStyle.centerText,
                  ...{ width: 100 },
                }}
              >
                Эмчлүүлэгчийн Эцэг /эх/-ийн нэр Нэр, Регистрийн дугаар
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 40 } }}
              >
                Нас, хүйс
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 60 } }}
              >
                Тогтмол хаяг Утасны дугаар
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 60 } }}
              >
                Онош
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.verticalText, ...{ width: 100 } }}
              >
                Эрэмбийн ангилал /кодлох/
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 100 } }}
              >
                Үзүүлсэн тусламж, үйлчилгээ
              </td>
              <td colSpan={6} style={textStyle.centerText}>
                Шийдвэрлэсэн байдал
              </td>
              <td
                rowSpan={2}
                style={{ ...textStyle.centerText, ...{ width: 100 } }}
              >
                Яаралтай тусламж үзүүлсэн эмч, сувилагч
              </td>
            </tr>
            <tr>
              <td style={{ ...textStyle.verticalText, ...{ width: 60 } }}>
                Ажиглалт
              </td>
              <td style={{ ...textStyle.verticalText, ...{ width: 60 } }}>
                Эрчим эмчилгээний
              </td>
              <td style={{ ...textStyle.verticalText, ...{ width: 60 } }}>
                Бусад тасагт
              </td>
              <td style={{ ...textStyle.verticalText, ...{ width: 60 } }}>
                Буцсан
              </td>
              <td style={{ ...textStyle.verticalText, ...{ width: 60 } }}>
                Бусад эмнэлэгрүү шилжүүлсэн
              </td>
              <td style={{ ...textStyle.verticalText, ...{ width: 60 } }}>
                Нас барсан
              </td>
            </tr>
            <tr style={{ width: 30 }}>
              {[...Array(15)].map((x, i) => (
                <td
                  key={i}
                  colSpan={i == 2 ? 10 : null}
                  style={{
                    ...textStyle.centerText,
                    ...{},
                  }}
                >
                  {i + 1}
                </td>
              ))}
            </tr>
            <tr>
              <td rowSpan={2} style={textStyle.centerText}></td>
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
            </tr>
            <tr>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
              <td style={{ height: 25, width: 25 }}></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CT_13B;
