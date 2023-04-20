import React from "react";
import { Table } from "react-bootstrap";

//маягт СТ-26
function СТ_26() {
  const styles = {
    rowCells: {
      borderWidth: 1,
      borderStyle: "solid",
      width: 15,
      height: 12,
      lineHeight: 1,
    },
    generalText: {
      fontSize: 11,
    },
    topText: {
      padding: 1,
      fontSize: 10,
    },
    blankSpaces: {
      fontSize: 11,
    },
    rowStyle: {
      fontSize: 11,
    },
    leftText: {
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    rightText: {
      textAlign: "right",
      padding: 1,
      verticalAlign: "middle",
      fontSize: 11,
    },
    centerText: {
      padding: 1,
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 11,
    },
    flexContainerTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 11,
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
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
      fontSize: 11,
      marginTop: 3,
    },
    verticalText: {
      writingMode: "vertical-rl",
      verticalAlign: "middle",
      padding: 4,
      rotate: "180deg",
      maxHeight: 130,
      maxWidth: 40,
      lineHeight: 1,
      fontSize: 11,
      textAlign: "center",
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
                  <span style={{ fontWeight: "bold", fontSize: 11 }}>
                    Эрүүл мэндийн бүртгэлийн маягт СТ-26
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
            <span style={{ fontWeight: "bold", fontSize: 13 }}>
              АЛСЫН ДУУДЛАГЫН ХУУДАС
            </span>
          </div>
          <div style={styles.rowStyle}>
            <b>А. Алсын дуудлага хүлээн авсан байдал</b>
          </div>
          <div style={styles.rowStyle}>
            1. Дуудлага хүлээн авсан
            ______он______сар_______өдөр______цаг______минут
          </div>
          <div style={styles.rowStyle}>
            2. Дуудлага хүлээн авсан хүний нэр, албан тушаал
            _________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            3. Дуудлага өгсөн эмнэлгийн байгууллага
            ___________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            4. Дуудлага өгсөн хүний нэр, албан тушаал
            _________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            5. Эмчлүүлэгчийн: Овог ___________________________________ Нэр:
            _____________________________ Нас__________ Хүйс __________
          </div>
          <div style={styles.rowStyle}>
            6. Үндсэн
            онош_______________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            7. Дуудсан шалтгаан : / зур / багаж, тоног төхөөрөмж, шинжилгээ,
            нарийн мэргэжлийн эмч, дутагдалтай, бусад{" "}
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            8.Бусад тодруулсан мэдээлэл
            ________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>Б. Дуудлага шийдвэрлэсэн байдал</b>
          </div>
          <div style={styles.rowStyle}>
            9. Эмнэлгийн байгууллагад дуудлагыг мэдээлсэн _____он_____
            сар_____өдөр____цаг_____минут
          </div>
          <div style={styles.rowStyle}>
            10. Дуудлагыг хүлээн авсан эмнэлгийн байгууллагын нэр{" "}
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            11. Хүлээн авсан хүний нэр, албан тушаал
            ___________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            12. Дуудлагад явсан{" "}
            <span style={{ marginLeft: 30 }}>
              ____он___сар___өдөр___цаг____минут
            </span>
          </div>
          <div style={styles.rowStyle}>
            13. Шийдвэрлэсэн байдал /албан тушаал, овог,
            нэр/________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            14. Телемедицинээр зөвлөгөө өгч шийдэх <b>/18-ыг бөглөх/</b>
          </div>
          <div style={styles.rowStyle}>
            15. Газар дээр нь очиж эмчилгээ, үйлчилгээ үзүүлэх /
          </div>
          <div style={styles.rowStyle}>
            16. Эмч, мэргэжилтний явсан тээвэр /зур/ машин, галт тэрэг, онгоц,
            бусад________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>
              Машинаар явсан тохиолдолд машины марк_____________ дугаар
              ___________
            </span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>
              Жолоочийн: Овог: _________________________ Нэр:
              _____________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            17. Дуудлагад явсан эмчийн нэр, албан тушаал
            ____________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            <b>В. Тусламж үйлчилгээ үзүүлсэн байдал</b>
          </div>
          <div style={styles.rowStyle}>
            18. Телемедицинээр зөвлөгөө өгсөн /зур /
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>
              а. Эмчилгээг хэвээр үргэлжлүүлсэн
            </span>
            <span style={{ marginLeft: 50 }}>в. Мэргэжлийн зөвлөгөө өгсөн</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>
              б. Эмчилгээний тактикийг өөрчилсөн
            </span>
            <span style={{ marginLeft: 35 }}>
              г. Бусад _________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            19. Эмч очиж тусламж үйлчилгээ үзүүлсэн /зур /
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>
              а. Эмчилгээг хэвээр үргэлжлүүлсэн
            </span>
            <span style={{ marginLeft: 50 }}>г. Давтан мэс засал хийсэн</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>
              б. Эмчилгээний тактикийг өөрчилсөн
            </span>
            <span style={{ marginLeft: 35 }}>д. Мэргэжлийн зөвлөгөө өгсөн</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>в. Мэс засал хийсэн</span>
            <span style={{ marginLeft: 125 }}>
              е. Бусад _________________________________
            </span>
          </div>
          <div style={styles.rowStyle}>
            20. Тусламж үзүүлсэн эмчийн онош:
            ________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            _________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            21. Онош зөрсөн бол түүний шалтгаан
            ______________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            22. Дуудлага шаардлагатай, шаардлагагүй байсан
            __________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>23. Эмчилгээний үр дүн / зур /</div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>а. Сайжирсан</span>
            <span style={{ marginLeft: 50 }}>в. Дордсон</span>
          </div>
          <div style={styles.rowStyle}>
            <span style={{ marginLeft: 50 }}>б. Хэвэндээ</span>
            <span style={{ marginLeft: 35 }}>г. Нас барсан</span>
          </div>
          <div style={styles.rowStyle}>24. Өвчтөн нас барсан бол шалтгаан</div>

          <div style={styles.rowStyle}>
            а. Дуудлага оройтсон
            <span style={{ marginLeft: 150 }}>
              г. Эмчилгээний тактикийг буруу сонгосон
            </span>
          </div>
          <div style={styles.rowStyle}>
            б. Өвчний оройтож хэвтсэн
            <span style={{ marginLeft: 120 }}>д. Эм, тариа дутагдсан</span>
          </div>
          <div style={styles.rowStyle}>
            в. Мэс засал оройтсон
            <span style={{ marginLeft: 145 }}>
              е. Багаж, тоног төхөөрөмж дутагдсан
            </span>
          </div>
          <div style={styles.rowStyle}>
            ё. Бусад
            _______________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            25. Дуудлагаар үйлчүүлсэн байгууллагын тэмдэг
            ___________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            26. Дуудлагад явсан эмчийн гарын
            үсэг_____________________________________________________________________________________
          </div>
          <div style={{ ...styles.centerText, ...{ marginTop: 50 } }}>
            <span>______он________сар____өдөр ____цаг _____минут</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default СТ_26;
