import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-1
function CT_1_NUD() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
      minWidth: 15,
    },
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    leftText: {
      padding: 0,
      verticalAlign: "middle",
      fontSize: 12,
      paddingLeft: 5,
    },
    centerText: {
      padding: 0,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      paddingLeft: 0,
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
    topText: {
      padding: 1,
      fontSize: 12,
    },
    rowCellWithText: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 12,
      padding: 0,
      lineHeight: 1,
      marginTop: 5,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 5,
      rotate: "180deg",
      lineHeight: 1,
      fontSize: 10,
      textAlign: "center",
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.centerText}>
            <b>НҮДНИЙ ЭМЧИЙН ҮЗЛЭГ</b>
          </div>
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.centerText}>
                  <b>Биеийн ерөнхий байдал</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Ухаан санаа</b>{" "}
                </td>
                <td style={styles.centerText}>
                  <b>Арьс салст</b>{" "}
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  □ Дунд □ Хүндэвтэр □ Хүнд
                  <div style={styles.topText}>□ Маш хүнд</div>
                </td>
                <td style={styles.topText}>
                  □ Саруул □ Бүдгэрсэн
                  <div style={styles.topText}>□ Ухаангүй</div>
                </td>
                <td style={styles.topText}>□ Хэвийн □ Хэвийн бус_________</td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Амьсгалын эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>Амьсгал 1 минутанд _____ удаа</td>
                <td style={styles.topText} colSpan={2}>
                  <b>Чагналтаар:</b> □ Хэржигнүүртэй
                  <div style={styles.topText}>
                    □ Уушги цулцангийн □ Амьсгал сулавтар
                  </div>
                  <div style={styles.topText}>
                    □ Гуурсан хоолойн (баруун, зүүн, 2 талдаа){" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Цусны эргэлтийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Судасны цохилт 1 минутанд_____ удаа
                  <div style={styles.topText}>Хүчдэл дүүрэлт______ </div>
                </td>
                <td style={styles.topText}>
                  <b>Тогшилтоор:</b>
                  <div style={styles.topText}>Зүрхний хил</div>
                  <div style={styles.topText}>□ Хэвийн</div>
                  <div style={styles.topText}>□ Томорсон (зүүн, баруун)</div>
                </td>
                <td style={styles.topText}>
                  <b>Чагналтаар:</b>
                  <div style={styles.topText}>Зүрхний авиа </div>
                  <div style={styles.topText}>
                    □ Тод □ Бүдэг □ Бүдгэвтэр □ Хэм жигд
                  </div>
                  <div style={styles.topText}>□ Жигд бус □ Хэм алдалттай</div>
                  <div style={styles.topText}>
                    АД баруун талд _____/____ Зүүн талд _____/______{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Хоол шингээх эрхтэн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText}>
                  Хэл
                  <div style={styles.topText}>□ Ердийн □ Хуурай</div>
                  <div style={styles.topText}>□ Өнгөргүй □ Өнгөртэй</div>
                </td>
                <td style={styles.topText} colSpan={2}>
                  Хэвлийн үзлэг:
                  <div style={styles.topText}>
                    □ Өнгөц тэмтрэлтээр □ Гүн тэмтрэлтээр □ Эмзэглэлтэй
                    (байрлал____)
                  </div>
                  <div style={styles.topText}>
                    □ Ердийн □ Зөөлөн гялтан цочрол үгүй □ Гялтан цочролын шинж
                    илэрсэн
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <b>Мэдрэлийн тогтолцоо</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={2}>
                  Сонсох чадвахи:
                  <div style={styles.topText}>
                    □ Хэвийн □ Буурсан (баруун, зүүн)
                  </div>
                </td>
                <td style={styles.topText}>
                  Рефлексүүд:
                  <div style={styles.topText}>
                    □ Хадгалагдана □ Хадгалагдахгүй
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  Бусад
                  _______________________________________________________________________________________________________________________________
                  <div style={styles.topText}>
                    Сэтгэцийн
                    байдал:_________________________________________________________________________________________________________________
                  </div>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText} colSpan={3}>
                  <b>НҮДНИЙ ҮЗЛЭГ</b>
                </td>
              </tr>
              <tr>
                <td style={styles.topText} colSpan={3}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          VOD
                        </td>
                        <td
                          style={{ ...styles.leftText, ...{ width: 120 } }}
                        ></td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          ph
                        </td>
                        <td style={styles.leftText}></td>
                      </tr>
                      <tr>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          VOD
                        </td>
                        <td
                          style={{ ...styles.leftText, ...{ width: 120 } }}
                        ></td>
                        <td style={{ ...styles.leftText, ...{ width: 100 } }}>
                          ph
                        </td>
                        <td style={styles.leftText}></td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Өнгө танилт:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Нүдний хөдөлгөөн:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Нулимсны зам:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Зовхи:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Салст:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Склер:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Эвэрлэг:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Өмнөд таславч:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Солонгон бүрхүүл:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText} colSpan={4}>
                          Хүүхэн хараа:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <Table
            bordered
            className="document"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            <tbody>
              <tr>
                <td style={styles.leftText}>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.leftText}>
                          Болор:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Шилэнцэр:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Нүдний уг:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
              <tr>
                <td style={styles.centerText}>
                  <b>НҮДНИЙ ШИНЖИЛГЭЭ</b>
                </td>
              </tr>
              <tr>
                <td>
                  <Table
                    bordered
                    className="document"
                    style={{ marginBottom: 0, marginTop: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={styles.leftText}>
                          Autorefractometer:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Tonometer:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Exophthalmometer:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Schirmer test:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          A scan:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div style={styles.topText}>B scan:</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          CCT:
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Gonioscopy:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          OCT (ONH):
                          <div style={styles.topText}>OCT (Macula):</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Humphrey:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          FFA:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          X-ray:
                          <div style={styles.topText}>CT:</div>
                          <div style={styles.topText}>MRI:</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                      <tr>
                        <td style={styles.leftText}>
                          Бусад:
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                          <div>&nbsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default CT_1_NUD;
