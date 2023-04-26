import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-9
function CT_9() {
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
                Эрүүл мэндийн бүртгэлийн маягт СТ-9
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
                НЯРАЙН ВАКЦИН ХИЙСЭН ТУХАЙ БҮРТГЭЛ
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
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 25 } }}
                >
                  Нярайн түүх №
                </td>
                <td colSpan={13} style={textStyle.centerText}>
                  Эхийн талаарх мэдээлэл
                </td>
                <td colSpan={4} style={textStyle.centerText}>
                  Хүүхэд
                </td>
                <td colSpan={2} style={textStyle.centerText}>
                  Вакцин хийсэн
                </td>
                <td colSpan={2} style={textStyle.centerText}>
                  Сүрьеэ
                </td>
                <td colSpan={2} style={textStyle.centerText}>
                  Халдварт саа 0
                </td>
                <td colSpan={2} style={textStyle.centerText}>
                  саа 0 В гепатит
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 80 } }}>
                  Вакцинд хамрагдаагүй шалтгаан
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 30 } }}
                >
                  Иммуноглобулин
                </td>
              </tr>
              <tr>
                <td
                  colSpan={10}
                  style={{ ...textStyle.centerText, ...{ width: 100 } }}
                >
                  Овог нэр, регистер
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 50 } }}>
                  Утас (2 утасны дугаар)
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 30 } }}>
                  Үндсэн хаяг
                </td>
                <td style={{ ...textStyle.centerText, ...{ width: 80 } }}>
                  Одоо амьдарч байгаа хаяг
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Төрсөн сар, өдөр
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Төрсөн цаг минут
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Хүйс
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Жин (Грам)
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Сар, өдөр
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Цаг, минут
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Тун (мл)
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Сери №
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Тун
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Сери №
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Тун (мл)
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 40 } }}>
                  Сери №
                </td>
                <td style={textStyle.centerText}></td>
              </tr>
              {[...Array(6)].map((x, i) => (
                <>
                  <tr>
                    <td rowSpan={2} style={textStyle.centerText}>
                      {i + 1}
                    </td>
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
      <div className="page-landscape">
        <div className="subpage-landscape">
          <Table bordered className="document">
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 25 } }}
                >
                  №
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 25 } }}
                >
                  Нярайн түүхийн №
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 130 } }}
                >
                  Эхийн нэр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 50 } }}
                >
                  Төрсөн, сар,өдөр
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 25 } }}
                >
                  Хүйс
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.verticalText, ...{ width: 25 } }}
                >
                  Жин
                </td>
                <td
                  rowSpan={2}
                  style={{ ...textStyle.centerText, ...{ width: 150 } }}
                >
                  Тогтмол хаяг
                </td>
                <td style={textStyle.centerText} colSpan={2}>
                  Вакцин хийсэн
                </td>
                <td style={textStyle.centerText} colSpan={4}>
                  БЦЖ вакцин
                </td>
                <td style={textStyle.centerText} colSpan={4}>
                  САА-гийн вакцин
                </td>
                <td style={textStyle.centerText} colSpan={4}>
                  ВГВ вакцин
                </td>
              </tr>
              <tr>
                <td style={{ ...textStyle.verticalText, ...{ width: 80 } }}>
                  Сар өдөр
                </td>

                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Цаг минут
                </td>

                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Тун
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Сери №
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Аль улсын
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 50 } }}>
                  Дууссан хугацаа
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Тун
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Сери №
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Аль улсын
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 50 } }}>
                  Дууссан хугацаа
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Тун
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Сери №
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 25 } }}>
                  Аль улсын
                </td>
                <td style={{ ...textStyle.verticalText, ...{ width: 80 } }}>
                  Дууссан хугацаа
                </td>
              </tr>
              <tr>
                {[...Array(21)].map((x, i) => (
                  <td style={textStyle.centerText} key={i}>
                    {i + 1}
                  </td>
                ))}
              </tr>
              {[...Array(16)].map((x, i) => (
                <tr key={i}>
                  {[...Array(21)].map((x, j) => (
                    <td
                      style={{ ...textStyle.centerText, ...{ height: 30 } }}
                      key={j}
                    ></td>
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

export default CT_9;
