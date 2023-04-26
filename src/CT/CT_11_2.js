import React from "react";
//маягт  СТ-11 Хавсралт-2
function CT_11_2() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 14,
      marginTop: 15,
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
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <div style={styles.flexContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            ></div>
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
                    Эрүүл мэндийн бүртгэлийн маягт СТ-11 Хавсралт-2
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 45,
              marginBottom: 35,
              width: 500,
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              НЯРАЙН ТҮНХНИЙ ДУТУУ ХӨГЖЛИЙН ХЭТ АВИАН СКРИНИНГИЙН АСУУМЖ
            </span>
          </div>
          <div style={{ marginLeft: 60 }}>
            <div style={styles.rowStyle}>
              1. Эцэг /эх/-ийн нэр:_______________________________
            </div>
            <div style={styles.rowStyle}>
              2. Төрсөн газар: ___________________________________
            </div>
            <div style={styles.rowStyle}>
              3. Эхийн утасны дугаар: ___________________________
            </div>
            <div style={styles.rowStyle}>
              4. Хүүхдийн төрсөн сар, өдөр: ____________________
            </div>
            <div style={styles.rowStyle}>
              5. Хүүхдийн хүйс:{" "}
              <span style={{ marginLeft: 40 }}>□ Эрэгтэй </span>{" "}
              <span style={{ marginLeft: 40 }}>□ Эмэгтэй</span>
            </div>
            <div style={styles.rowStyle}>
              6. Үзлэгийн огноо: _____________________
            </div>
            <div style={styles.rowStyle}>7. Түнхний хэлбэр:</div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                Баруун түнх: а. А хэлбэр в. В хэлбэр с. С хэлбэр с. D хэлбэр
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                Зүүн түнх: а. А хэлбэр в. В хэлбэр с. С хэлбэр с. D хэлбэр
              </span>
            </div>
            <div style={styles.rowStyle}>8. Эмчилгээ:</div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                а. Гаргах в. Хяналт с. Эмчилгээ
              </span>
            </div>
            <div style={styles.rowStyle}>
              <b>Давтан үзлэг</b>
            </div>
            <div style={styles.rowStyle}>9. Үзлэгийн огноо:____________</div>
            <div style={styles.rowStyle}>10. Түнхний хэлбэр:</div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                Баруун түнх: а. А хэлбэр в. В хэлбэр с. С хэлбэр с. D хэлбэр
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                Зүүн түнх: а. А хэлбэр в. В хэлбэр с. С хэлбэр с. D хэлбэр
              </span>
            </div>
            <div style={styles.rowStyle}>11. Эмчилгээ:</div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                а. Гаргах в. Хяналт с. Эмчилгээ
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_11_2;
