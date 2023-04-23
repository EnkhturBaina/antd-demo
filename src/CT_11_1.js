import React from "react";
//маягт СТ-11 Хавсралт-1

function CT_11_1() {
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
                    Эрүүл мэндийн бүртгэлийн маягт СТ-11 Хавсралт-1
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
              НЯРАЙН СОНСГОЛЫН СКРИНИНГИЙН АСУУМЖ
            </span>
          </div>
          <div style={{ marginLeft: 60 }}>
            <div style={styles.rowStyle}>
              1. Эцэг /эх/-ийн нэр:_______________________________
            </div>
            <div style={styles.rowStyle}>
              2. Гэрийн хаяг:
              ___________________________________________________________
            </div>
            <div style={styles.rowStyle}>
              3. Ээжийн утасны дугаар:_________________________
            </div>
            <div style={styles.rowStyle}>
              4. Хүүхдийн төрсөн сар, өдөр:______________________
            </div>
            <div style={styles.rowStyle}>5. Хүүхдийн жин:_________</div>
            <div style={styles.rowStyle}>6. Хүүхдийн хүйс: ______________</div>
            <div style={styles.rowStyle}>
              7. Хүүхэд дутуу төрсөн бол тээлтийн нас, долоо хоногоор
            </div>
            <div style={styles.rowStyle}>
              8. Үзлэгийн огноо: _______________
            </div>
            <div style={styles.rowStyle}>9. Сонсголын скринингийн хариу:</div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                Баруун чих:_________________
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                а. тэнцсэн (pass), в. давтах (refer), с. шалгуулаагүй (not
                measured)
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                Зүүн чих: __________________
              </span>
            </div>
            <div style={styles.rowStyle}>
              <span style={{ marginLeft: 15 }}>
                а. тэнцсэн (pass), в. давтах (refer), с. шалгуулаагүй (not
                measured)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CT_11_1;
