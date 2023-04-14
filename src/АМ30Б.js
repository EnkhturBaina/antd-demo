import React from "react";
import { Table } from "react-bootstrap";

//маягт АМ-30Б
function АМ30Б() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 15,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 12,
    },
    rightText: {
      padding: 1,
      textAlign: "right",
      verticalAlign: "middle",
      fontSize: 12,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 12,
      padding: 0,
      lineHeight: 1,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div></div>
            <div>
              <span
                style={{
                  ...styles.generalText,
                  ...{ textAlign: "right", display: "block" },
                }}
              >
                Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
              </span>
              <div style={styles.flexRow}>
                <span style={styles.generalText}>&nbsp;</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={styles.generalText}>
                    A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: 12 }}>
                    Эрүүл мэндийн бүртгэлийн маягт АМ-30Б
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 14 }}>
              ӨДРИЙН ЭМЧИЛГЭЭНИЙ БҮРТГЭЛ /Насанд хүрэгчид/
            </span>
          </div>
          <div
            style={{
              ...styles.rowStyle,
              ...{ display: "flex", flexDirection: "row" },
            }}
          >
            Эцэг /эх/ийн нэр: . . . . . . . . . . . . . . . . . . . . . . . . .
            . нэр. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            огноо: . . . . . . . . ./ . . . . . . ./ . . . .
          </div>
          <div style={styles.rowStyle}>
            РД. . . . . . . . . . . . . . . . . . . . . . . . . нас. . . . . . .
            . . . . . . эр / эм
            <span style={{ marginLeft: 20 }}>
              ӨЭ Хуудас №. . . . . . . . . . . . . . . . . . . . . . . . . .
            </span>
          </div>
          <div style={styles.rowStyle}>
            Мэс заслын өмнөх өрөөнд ирсэн: . . . . . . . цаг. . . . . . . . .
            минут.
            <span style={{ marginLeft: 100 }}>
              Сувилагч. . . . . . . . . . . . .
            </span>
          </div>

          <Table bordered className="document" style={{ marginBottom: 0 }}>
            <tbody>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Мэс заслын өмнөх
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
                <td style={styles.centerText}>Илэрсэн шинж</td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Мэс заслын дараах
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
                <td style={styles.leftText} rowSpan={9}>
                  <div style={styles.leftText}>1. ( ) чичрэх</div>
                  <div style={styles.leftText}>2. ( ) өвдөх</div>
                  <div style={styles.leftText}>3. ( ) тайван бус</div>
                  <div style={styles.leftText}>4. ( ) хөхрөх</div>
                  <div style={styles.leftText}>5. ( ) цус шүүрэх</div>
                  <div style={styles.leftText}>6. ( ) огих, бөөлжих</div>
                  <div style={styles.leftText}>7. ( ) амьсгал өөрч-х</div>
                  <div style={styles.leftText}>8. ( ) эмийн гаж нөлөө</div>
                  <div style={styles.leftText}>9. ( ) булчин сулрах</div>
                  <div style={styles.leftText}>
                    10. ( ) . . . . . . . . . . . . . .
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Цаг/ минут
                </td>
                {[...Array(10)].map((x, i) => (
                  <td style={styles.centerText} key={i} colSpan={2}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>ЗЦ</td>
                <td style={styles.leftText}>А</td>
                <td style={styles.leftText}>t°</td>
                <td style={styles.leftText}>АД</td>
                <td style={styles.leftText}>SpO2</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>150</td>
                <td style={styles.leftText}>55</td>
                <td style={styles.leftText}>40,5</td>
                <td style={styles.leftText}>140</td>
                <td style={styles.leftText}>100</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>140</td>
                <td style={styles.leftText}>50</td>
                <td style={styles.leftText}>40</td>
                <td style={styles.leftText}>130</td>
                <td style={styles.leftText}>98</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>130</td>
                <td style={styles.leftText}>45</td>
                <td style={styles.leftText}>39,5</td>
                <td style={styles.leftText}>120</td>
                <td style={styles.leftText}>96</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>120</td>
                <td style={styles.leftText}>40</td>
                <td style={styles.leftText}>39</td>
                <td style={styles.leftText}>110</td>
                <td style={styles.leftText}>94</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>110</td>
                <td style={styles.leftText}>35</td>
                <td style={styles.leftText}>38,5</td>
                <td style={styles.leftText}>100</td>
                <td style={styles.leftText}>92</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>100</td>
                <td style={styles.leftText}>30</td>
                <td style={styles.leftText}>38</td>
                <td style={styles.leftText}>90</td>
                <td style={styles.leftText}>90</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>90</td>
                <td style={styles.leftText}>25</td>
                <td style={styles.leftText}>37,5</td>
                <td style={styles.leftText}>80</td>
                <td style={styles.leftText}>88</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.centerText}>Авсан арга хэмжээ</td>
              </tr>
              <tr>
                <td style={styles.leftText}>80</td>
                <td style={styles.leftText}>20</td>
                <td style={styles.leftText}>37</td>
                <td style={styles.leftText}>70</td>
                <td style={styles.leftText}>86</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
                <td style={styles.leftText} rowSpan={10}>
                  <div style={styles.leftText}>1. ( ) хяналт</div>
                  <div style={styles.leftText}>2. ( ) нэмэлт О2 . . . л/м</div>
                  <div style={styles.leftText}>3. ( ) хэл дарагч</div>
                  <div style={styles.leftText}>4. ( ) соруулга</div>
                  <div style={styles.leftText}>5. ( ) ход/ гуурс</div>
                  <div style={styles.leftText}>6. ( ) шээс/гуурс</div>
                  <div style={styles.leftText}>7. ( ) боолт</div>
                  <div style={styles.leftText}>8. ( ) эмийн эмчилгээ</div>
                  <div style={styles.leftText}>9. ( ) эмчийн зөвлөгөө</div>
                  <div style={styles.leftText}>
                    10. ( ) . . . . . . . . . . . . . .
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.leftText}>70</td>
                <td style={styles.leftText}>15</td>
                <td style={styles.leftText}>36,5</td>
                <td style={styles.leftText}>60</td>
                <td style={styles.leftText}>84</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>60</td>
                <td style={styles.leftText}>10</td>
                <td style={styles.leftText}>36</td>
                <td style={styles.leftText}>50</td>
                <td style={styles.leftText}>82</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>50</td>
                <td style={styles.leftText}>5</td>
                <td style={styles.leftText}>35,5</td>
                <td style={styles.leftText}>40</td>
                <td style={styles.leftText}>80</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText}>40</td>
                <td style={styles.leftText}>0</td>
                <td style={styles.leftText}>35</td>
                <td style={styles.leftText}>30</td>
                <td style={styles.leftText}>78</td>
                {[...Array(20)].map((x, i) => (
                  <td
                    style={{ ...styles.centerText, ...{ width: 15 } }}
                    key={i}
                  ></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Хооллолт
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={5}>
                  Анхаарах асуудал
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={3} rowSpan={3}>
                  Ялгаруулалт /давтамж/
                </td>
                <td style={styles.leftText} colSpan={2}>
                  Өтгөн
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Шээс
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
              <tr>
                <td style={styles.leftText} colSpan={2}>
                  Боолт/гуурс
                </td>
                {[...Array(20)].map((x, i) => (
                  <td style={styles.centerText} key={i}></td>
                ))}
              </tr>
            </tbody>
          </Table>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгч, түүний ар гэрт асаргаа, сувилгааны зөвлөгөө өгсөн /
            өгөөгүй (зур). Өдрийн эмчилгээний
          </div>
          <div style={styles.rowStyle}>
            хуудсыг хааж үйлчлүүлэгчийг аав/ ээж/ асран хамгаалагч/ . . . . . .
            . . . . . . . .тасагт хүлээлгэн өгөв:
          </div>
          <div style={styles.rowStyle}>
            Амин үзүүлэлт: Биеийн байдал . . . . . . . . . . , Ухаан санаа . . .
            . . . . . . . . . . . . . . . . . , Амьсгал. . . . . . . . ,
          </div>
          <div style={styles.rowStyle}>
            Зүрхний цохилт. . . . . . . . . , Артерийн даралт. . . . . /. . . .
            . . / . . . . , Биеийн хэм. . . . . . . , FiO2 . . . . . . ,
          </div>
          <div style={styles.rowStyle}>
            Цусны хүчилтөрөгчийн хангамж. . . . . . . , Хялгасан судасны эргэн
            дүүрэлт. . . . . . . . , Шарх. . . . . . . . . .
          </div>
          <div style={styles.centerText}>
            Эмч................................................../
            <span style={{ marginLeft: 140 }}>/</span>
          </div>
          <div style={styles.centerText}>
            Сувилагч......................................./
            <span style={{ marginLeft: 140 }}>/</span>
          </div>

          <div style={styles.rowStyle}>
            Үйлчлүүлэгч............................-ны аав/ ээж/ асран
            хамгаалагч (.........................) би хүүхдийнхээ асаргаа
            сувилгааны зөвлөгөөг авсан / аваагүй (зур). Зөвлөгөөг зааврын дагуу
            сахих болно.
          </div>
          <div style={styles.rowStyle}>
            Асран хамгаалагч: аав/ ээж/ өвөө/ эмээ/ ах/ эгч/ төрөл
            ...................................../
            <span style={{ marginLeft: 140 }}>/</span>
          </div>
          <div style={styles.centerText}>
            .................он
            ...........сар............өдөр...........цаг.............минут.
          </div>
          <div style={styles.rowStyle}>
            Нэмэлт тэмдэглэл: . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            .
          </div>
          <div style={styles.rowStyle}>
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . .
          </div>
          <div style={styles.rowStyle}>
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . .
          </div>
          <div style={styles.rowStyle}>
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . .
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            Өдрийн эмчилгээний дараах хяналтын өрөөнд хийгдсэн эмчилгээ,
            сувилгааны зарлагын хуудас
          </div>
          <div style={styles.rightText}>
            огноо: . . . . . . . . ./ . . . . . . ./ . . . . . .
          </div>
        </div>
      </div>
    </>
  );
}

export default АМ30Б;
