import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-4
function CT_4() {
  const textStyle = {
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 1,
      lineHeight: 1.3,
    },
    leftText: {
      textAlign: "left",
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
    topText: {
      padding: 1,
      fontSize: 12,
    },
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 18,
      height: 18,
    },
  };
  return (
    <>
      <div className="page-landscape">
        <div className="subpage-landscape">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ width: "50%" }}>
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
                    Эрүүл мэндийн бүртгэлийн маягт СТ-4
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
                    ТӨРСӨН ТУХАЙ ЭМНЭЛГИЙН ГЭРЧИЛГЭЭ
                  </span>
                </div>
              </div>
              <Table
                bordered
                className="document"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <tbody>
                  <tr>
                    <td style={textStyle.leftText}>Эмнэлгийн нэр, лого </td>
                    <td style={textStyle.centerText}>РД</td>
                    <td
                      style={{ ...textStyle.centerText, ...{ width: 200 } }}
                    ></td>
                  </tr>
                </tbody>
              </Table>
              <Table
                bordered
                className="document"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <tbody>
                  <tr>
                    <td style={{ ...textStyle.topText, ...{ width: "32%" } }}>
                      Эцэг /эх/-ийн нэр:
                    </td>

                    <td style={{ ...textStyle.topText, ...{ width: "32%" } }}>
                      Нэр:
                    </td>
                    <td style={{ ...textStyle.topText, ...{ width: "32%" } }}>
                      Нас: [ &nbsp; ]
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table
                bordered
                className="document"
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <tbody>
                  <tr>
                    <td style={{ ...textStyle.topText, ...{ width: "40%" } }}>
                      Эмнэлэгт хэвтсэн:
                      <div style={textStyle.leftText}>
                        он ______ сар ____ өдөр ____
                      </div>
                    </td>

                    <td
                      style={{ ...textStyle.topText, ...{ width: "20%" } }}
                      rowSpan={2}
                    >
                      Төрөх үеийн жирэмсний хугацаа (7х) [ &nbsp; ]
                    </td>
                    <td style={{ ...textStyle.topText, ...{ width: "40%" } }}>
                      Боловсрол 
                      <div style={textStyle.leftText}>Ажлын газар </div>
                      <div style={textStyle.leftText}>Ажил, мэргэжил </div>
                      <div style={textStyle.leftText}>Хөдөлмөр эрхлэлт </div>
                      <div style={textStyle.leftText}>
                        Хөдөлмөр эрхлээгүй /ш/ 
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...textStyle.topText, ...{ width: "40%" } }}>
                      Эмнэлгээс гарсан:
                      <div style={textStyle.leftText}>
                        он ______ сар ____ өдөр ____
                      </div>
                    </td>
                    <td style={{ ...textStyle.topText, ...{ width: "40%" } }}>
                      <b>Гэрлэлтийн байдал:</b>
                      <div style={textStyle.leftText}>
                        Огт гэрлээгүй  &nbsp; Батлуулсан 
                      </div>
                      <div style={textStyle.leftText}>
                        Батлуулаагүй  &nbsp; Цуцалсан 
                      </div>
                      <div style={textStyle.leftText}>
                        Тусгаарласан  &nbsp; Бэлбэсэн 
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={textStyle.topText}>
                      <b>Тогтмол хаяг:</b>
                      <div>&nbsp;</div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={textStyle.topText}>
                      <b>ХҮҮХДИЙН МЭДЭЭЛЭЛ</b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...textStyle.topText, ...{ width: "33%" } }}>
                      Төрсөн он ______ сар ____ өдөр ____
                      <div style={textStyle.leftText}>
                        цаг [ &nbsp; ] минут [ &nbsp; ]
                      </div>
                      <div>
                        <div style={{ display: "flex", marginTop: 5 }}>
                          <span style={textStyle.generalText}>РД:</span>
                          <div style={{ display: "flex", marginLeft: 15 }}>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                            <div style={textStyle.rowCells}></div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td style={{ ...textStyle.topText, ...{ width: "33%" } }}>
                      <b>Төрсөн газар:</b>
                      <div style={textStyle.leftText}> Эмнэлэгт</div>
                      <div style={textStyle.leftText}> Гэрт</div>
                      <div style={textStyle.leftText}> Бусад</div>
                    </td>
                    <td style={{ ...textStyle.topText, ...{ width: "33%" } }}>
                      <b>Ихэр эсэх:</b>
                      <div style={textStyle.leftText}> Ихэр биш</div>
                      <div style={textStyle.leftText}> 2 ихэр</div>
                      <div style={textStyle.leftText}> 3 ихэр</div>
                      <div style={textStyle.leftText}> 4 ба түүнээс дээш</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ ...textStyle.topText, ...{ width: "33%" } }}>
                      <b>Төрлөгийн хэлбэр:</b>
                      <div style={textStyle.leftText}> Өөрөө</div>
                      <div style={textStyle.leftText}> Хавчуураар</div>
                      <div style={textStyle.leftText}> Кесар хагалгаагаар</div>
                      <div style={textStyle.leftText}> Вакум</div>
                    </td>

                    <td style={{ ...textStyle.topText, ...{ width: "33%" } }}>
                      <b>Хүүхэд:</b>
                      <div style={textStyle.leftText}> Амьд</div>
                      <div style={textStyle.leftText}> Амьгүй</div>
                      <b>Хүйс:</b>
                      <div style={textStyle.leftText}> Эрэгтэй</div>
                      <div style={textStyle.leftText}> Эмэгтэй</div>
                    </td>
                    <td style={{ ...textStyle.topText, ...{ width: "33%" } }}>
                      <b>Төрөх үеийн:</b>
                      <div style={textStyle.leftText}>Жин ______ грамм</div>
                      <div style={textStyle.leftText}>Өндөр ______ см</div>
                      <div style={textStyle.leftText}>
                        Толгойн бүслүүр ______ см
                      </div>
                      <div style={textStyle.leftText}>
                        Мөрний бүслүүр ______ см
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={textStyle.leftText}>
                      <b>Эмнэлэгт төрсөн тухай тэмдэглэл</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={textStyle.leftText}>
                      Эцэг /Эх/-ийн нэр: _____________________ нь Нас ____
                      <div style={textStyle.leftText}>
                        Жирэмслэлт_____, төрөлт______ , 20___ оны ____ -р сарын
                        ____-ний өдрийн
                      </div>
                      <div style={textStyle.leftText}>
                        ____ цаг _____ минутанд _______ жинтэй ______ см
                        өндөртэй хүү, охин /зур/
                      </div>
                      <div style={textStyle.leftText}>
                        хэвийн, хагалгаагаар /зур/ төрүүлсэн нь үнэн болно.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={textStyle.leftText}>
                      <b>Гэрчилгээ олгосон:</b>
                    </td>
                    <td style={textStyle.leftText}>
                      он ______ сар ____ өдөр ____
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} style={textStyle.leftText}>
                      Тамга
                    </td>
                    <td style={textStyle.leftText}>Гэрчилгээ олгосон эмч:</td>
                    <td style={textStyle.leftText}>
                      Нэр <span style={{ marginLeft: 60 }}>Гарын үсэг</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={textStyle.leftText} colSpan={2}>
                      Тэмдэглэгээ:
                      <div>&nbsp;</div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div style={textStyle.leftText}>
                <b>
                  Хүүхдээ төрснөөс хойш 14 хоногийн дотор бүртгүүлж Төрсний
                  гэрчилгээ авах ёстой
                </b>
              </div>
            </div>
            <div style={{ width: "50%" }}>2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_4;
