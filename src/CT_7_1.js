import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-7 Хавсралт 1
function CT_7_1() {
  const styles = {
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 3,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 50,
      lineHeight: 1,
      fontSize: 12,
      textAlign: "center",
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
      display: "inline-flex",
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 10,
      marginTop: 3,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 9,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
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
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <span style={{ fontSize: 10 }}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 10 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ-7 Хавсралт 1
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                НЯРАЙН ЭРЧИМТ ЭМЧИЛГЭЭНИЙ ХЯНАЛТЫН ХУУДАС
              </span>
            </div>
          </div>
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                >
                  Цаг
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Биеийн байдал
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                >
                  t0
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                >
                  АД
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                >
                  П
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                >
                  А
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 50 } }}
                >
                  Sao2
                </td>
                <td colSpan={6} style={styles.centerText}>
                  Зохиомол амьсгал
                </td>
                <td colSpan={3} style={styles.centerText}>
                  Хооллосон хэмжээ /мл/
                </td>
                <td colSpan={3} style={styles.centerText}>
                  Гуурсаар гарсан шингэн /мл/
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Кувез t0
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Шээс /мл/
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Өтгөн
                </td>
                <td
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 120 } }}
                >
                  Эмчилгээ, сувилгаанд гарсан онцлог байдал
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>PIP</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>RR</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Flow</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>PEEP</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>FIO2</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>I:E</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>Хөх</td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Гуурс
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Бусад
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Хэвлийн
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Цээжний
                </td>
                <td style={{ ...styles.centerText, ...{ width: 50 } }}>
                  Бусад
                </td>
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>09</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>10</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>11</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>12</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>13</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>14</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>15</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>16</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>17</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>18</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>19</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>20</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>21</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>22</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>23</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>00</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>01</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>02</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>03</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>04</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>05</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(23)].map((x, i) => (
                  <td
                    style={styles.centerText}
                    key={i}
                    rowSpan={i == 22 ? 3 : null}
                  >
                    {i == 0 ? <>06</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>07</> : null}
                  </td>
                ))}
              </tr>
              <tr>
                {[...Array(22)].map((x, i) => (
                  <td style={styles.centerText} key={i}>
                    {i == 0 ? <>08</> : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="page-landscape">
        <div className="subpage-landscape">
          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td colSpan={2} style={styles.centerText}>
                  Эмчилгээний нэр / цаг
                </td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  >
                    {i >= 15 ? i - 15 : i + 9}
                  </td>
                ))}
                <td colSpan={3} style={styles.centerText}>
                  Баланс
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={5}
                  style={{ ...styles.verticalText, ...{ width: 50 } }}
                >
                  Шахуурга
                </td>
                <td style={{ ...styles.centerText, ...{ width: 100 } }}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td colSpan={3} style={styles.centerText}>
                  Хийсэн шингэн
                </td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Амаар</td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>
                  Судсаар
                </td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Бүгд</td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}>
                  &nbsp;
                </td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td colSpan={3} style={styles.centerText}></td>
              </tr>
              <tr>
                <td
                  rowSpan={11}
                  style={{ ...styles.verticalText, ...{ width: 50 } }}
                >
                  Судсаар
                </td>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td colSpan={3} style={styles.centerText}>
                  Ялгарсан шингэн
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 15 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{
                      ...styles.centerText,
                      ...{ width: 30, height: 15 },
                    }}
                    key={i}
                  ></td>
                ))}
                <td
                  style={{ ...styles.leftText, ...{ width: 80, height: 15 } }}
                >
                  Шээс
                </td>
                <td
                  colSpan={2}
                  style={{ ...styles.centerText, ...{ height: 15 } }}
                ></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>
                  Бөөлжилт
                </td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Өтгөн</td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>
                  Гуурсаар
                </td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Бусад</td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Бүгд</td>
                <td colSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}>
                  &nbsp;
                </td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td colSpan={3} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}>
                  &nbsp;
                </td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td colSpan={3} style={styles.centerText}>
                  Зөрүү
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                  rowSpan={2}
                >
                  Бүгд
                </td>
                <td colSpan={2} rowSpan={2} style={styles.centerText}></td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td
                  rowSpan={8}
                  style={{ ...styles.verticalText, ...{ width: 50 } }}
                >
                  Булчинд, арьсанд, бусад
                </td>
                <td style={styles.verticalText}></td>

                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  colSpan={3}
                  style={{ ...styles.centerText, ...{ height: 18 } }}
                ></td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  colSpan={3}
                  rowSpan={2}
                  style={{ ...styles.centerText, ...{ width: 80 } }}
                >
                  Эмчид мэдэгдэх хяналтын карт
                </td>
              </tr>
              <tr>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.verticalText}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.centerText, ...{ width: 80 } }}></td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Дээд</td>
                <td style={{ ...styles.centerText, ...{ width: 80 } }}>Доод</td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>АД</td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Пульс</td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>Sao2</td>
              </tr>
              <tr>
                <td style={styles.verticalText}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td style={{ ...styles.leftText, ...{ width: 80 } }}>
                  Дундаж АД
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={4}
                  style={{ ...styles.verticalText, ...{ width: 50 } }}
                >
                  Амаар
                </td>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
                <td
                  colSpan={3}
                  rowSpan={14}
                  style={{ ...styles.centerText, ...{ height: 18 } }}
                ></td>
              </tr>
              {[...Array(3)].map((x, i) => (
                <tr key={i}>
                  <td
                    style={{ ...styles.verticalText, ...{ height: 18 } }}
                  ></td>
                  {[...Array(24)].map((x, i) => (
                    <td
                      style={{ ...styles.centerText, ...{ width: 30 } }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td
                  rowSpan={8}
                  style={{ ...styles.verticalText, ...{ width: 50 } }}
                >
                  Сувилгаа, өдрийн дэглэм
                </td>
                <td style={{ ...styles.verticalText, ...{ height: 18 } }}></td>
                {[...Array(24)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 30 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              {[...Array(7)].map((x, i) => (
                <tr key={i}>
                  <td
                    style={{ ...styles.verticalText, ...{ height: 18 } }}
                  ></td>
                  {[...Array(24)].map((x, i) => (
                    <td
                      style={{ ...styles.centerText, ...{ width: 30 } }}
                      key={i}
                    ></td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Хооллолт
                </td>
                <td style={styles.centerText} colSpan={24}></td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={2}>
                  Сувилагчийн нэр
                </td>
                <td style={styles.centerText} colSpan={8}></td>
                <td style={styles.centerText} colSpan={16}></td>
              </tr>
            </tbody>
          </Table>
          <div style={styles.leftText}>
            Эмчлэгч эмч <span style={{ marginLeft: 300 }}>Жижүүрийн эмч</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_7_1;
