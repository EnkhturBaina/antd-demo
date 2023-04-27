import React from "react";

//маягт СТ2 Хавсралт-12
function CT2_12() {
  const styles = {
    generalText: {
      fontSize: 12,
    },
    rowStyle: {
      fontSize: 12,
      marginTop: 10,
    },
    leftText: {
      fontSize: 12,
    },
    centerText: {
      textAlign: "center",
      verticalAlign: "middle",
      fontSize: 12,
      padding: 0,
      marginTop: 10,
    },
    rightText: {
      textAlign: "right",
      fontSize: 12,
    },
  };
  return (
    <>
      <div className="page">
        <div className="subpage">
          <span
            style={{
              ...styles.generalText,
              ...{ textAlign: "right", display: "block" },
            }}
          >
            Эрүүл мэндийн сайдын 2019 оны 12 дугаар сарын 30-ны өдрийн
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "right",
              }}
            >
              <span style={styles.generalText}>
                A/611 дүгээр тушаалын арваннэгдүгээр хавсралт
              </span>
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                Эрүүл мэндийн бүртгэлийн маягт СТ2 Хавсралт-12
              </span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
            <span style={{ fontWeight: "bold", fontSize: 16 }}>
              ЭРҮҮЛ МЭНДИЙН ТУСЛАМЖ ҮЙЛЧИЛГЭЭНЭЭС ТАТГАЛЗСАН ТУХАЙ МЭДҮҮЛЭГ
            </span>
          </div>
          <div style={styles.rightText}>
            (Өвчтөний түүх/иргэний эрүүл мэндийн дэвтэрт хавсаргана)
          </div>
          <div style={styles.leftText}>
            Үйлчлүүлэгч ______________________________овогтой
            _____________________________ би эмнэлгийн тусламж
          </div>
          <div style={styles.leftText}>
            үйлчилгээнээс татгалзах нь ямар үр дагавартай болох тухай мэдээллийг
            эмчээсээ авсан боловч уг эмчилгээ үйлчилгээнээс ТАТГАЛЗАЖ БАЙНА.
          </div>
          <div style={styles.rowStyle}>
            Эрүүл мэндийн тусламж үйчилгээнээс татгалзаж буй шалтгаан:
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.generalText}>
            Эрүүл мэндийн тусламж үйлчилгээнээс татгалзснаар миний биед гарч
            болох хүндрэлүүдийн талаар дараах МЭДЭЭЛЛИЙГ БИ АВСАН.
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            [ &nbsp; ] Дээр дурдсан хүндрэлийн жагсаалт нь бүрэн бус гэдгийг БИ
            ОЙЛГОЖ БАЙГАА бөгөөд хэрвээ би хүссэн тохиолдолд нэмэлт мэдээлэл авч
            болно гэдгийг МЭДЭЖ БАЙНА.
          </div>
          <div style={styles.rowStyle}>
            [ &nbsp; ] Эрүүл мэндийн тусламж үйлчилгээнээс татгалзснаас гарч
            болох үр дагаварт эмчлэгч эмч, эмнэлгийг буруутгахгүй.
          </div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгчийн гарын үсэг
            ____________________________________/................................................/
          </div>
          <div style={styles.generalText}>
            Үйлчлүүлэгч гарын үсэг зурах эрх зүйн чадамжгүй бол:
          </div>
          <div style={styles.rowStyle}>
            Асран хамгаалагч/харгалзан дэмжигчийн гарын үсэг
            ____________________________________/................................................/
          </div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгчтэй холбоотой эсэх: _____________________________________
          </div>

          <div style={styles.rowStyle}>
            Үйлчлүүлэгч эрх зүйн чадамжгүй байгаа шалтгаан:
          </div>
          <div style={styles.rowStyle}>[ &nbsp; ] Насанд хүрээгүй</div>
          <div style={styles.rowStyle}>[ &nbsp; ] Ухаангүй</div>
          <div style={styles.rowStyle}>[ &nbsp; ] Сэтгэцийн эмгэгтэй</div>
          <div style={styles.rowStyle}>
            [ &nbsp; ] Бусад (тайлбарлана уу)
            ………………………………………………………………………………………………………………………………
          </div>
          <div style={styles.rowStyle}>Хэрэв өвчтөн жирэмсэн тохиолдолд:</div>
          <div style={styles.rowStyle}>
            Миний эхнэрийн хийлгэхээр зөвшөөрсөн мэс ажилбар/мэс заслын хагалгаа
            (аль нь болохыг сонгож доогуур нь зурах)-ыг би зөвшөөрч байна.
          </div>
          <div style={styles.rowStyle}>
            Нөхрийн (асран хамгаалагч/харгалзан дэмжигч) гарын үсэг:
            _______________________________/................................................./
          </div>
          <div style={styles.rowStyle}>
            Хэрэв нөхөр (асран хамгаалагч/харгалзан дэмжигч) нь зөвшөөрөөгүй бол
            тайлбарлана уу
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Энэхүү зөвшөөрлийн хуудасны загварыг 2 хувь үйлдсэн болно.
          </div>
          <div style={styles.centerText}>
            огноо: ________ он _______ сар _______
          </div>
        </div>
      </div>
      <div className="page">
        <div className="subpage">
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Эмчтэй холбоо барих утас:
            _____________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Би үйлчлүүлэгчдээ дээрх мэдээллүүдийг дэлгэрэнгүй, энгийн ойлгомжтой
            хэллэгээр тайлбарлаж өгсөн болно.
          </div>
          <div style={styles.rowStyle}>
            Эмчийн гарын үсэг
            _______________________________/................................................./
          </div>
          <div style={styles.rowStyle}>Б/ҮЙЛЧЛҮҮЛЭГЧИЙН ЗӨВШӨӨРӨЛ:</div>
          <div style={styles.rowStyle}>
            [ &nbsp; ] Надад шаардлагатай оношилгооны ажилбар/эмчилгээ (аль нь
            болохыг сонгож доогуур нь зурах)-ний талаар эмчийн өгсөн
            мэдээллүүдийг БИ ОЙЛГОСОН. Иймд
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.generalText}>хийлгэхийг ЗӨВШӨӨРЧ БАЙНА.</div>
          <div style={styles.generalText}>
            [ &nbsp; ] Эмчийн санал болгосон оношилгооны ажилбар/эмчилгээ
            (зурах)-аас гадна
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            зэрэг нэмэлт ажилбар болон орлуулах эмчилгээ нь зөвхөн миний амь
            насыг аврах болон миний биеийн байдлыг муудахаас сэргийлэхийн тулд
            хийнэ гэдгийг БИ ОЙЛГОЖ БАЙНА.
          </div>
          <div style={styles.generalText}>
            [ &nbsp; ] Харин дараах ажилбаруудыг ХИЙЛГЭХИЙГ БИ ЗӨВШӨӨРӨХГҮЙ
            БАЙНА
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгчийн гарын үсэг
            _______________________________/................................................./
          </div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгч гарын үсэг зурах эрх зүйн чадамжгүй бол:
          </div>
          <div style={styles.rowStyle}>
            Асран хамгаалагч/харгалзан дэмжигчийн гарын үсэг
            _______________________________/................................................./
          </div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгчтэй холбоотой эсэх: ___________________________
          </div>
          <div style={styles.rowStyle}>
            Үйлчлүүлэгч эрх зүйн чадамжгүй байгаа шалтгаан:
          </div>
          <div style={styles.rowStyle}>[ &nbsp; ] Насанд хүрээгүй</div>
          <div style={styles.rowStyle}>[ &nbsp; ] Ухаангүй</div>
          <div style={styles.rowStyle}>[ &nbsp; ] Сэтгэцийн эмгэгтэй</div>
          <div style={styles.rowStyle}>
            [ &nbsp; ] Бусад (тайлбарлана уу)
            ………………………………………………………………………………………………………………………………
          </div>
          <div style={styles.rowStyle}>Хэрэв өвчтөн жирэмсэн тохиолдолд:</div>
          <div style={styles.rowStyle}>
            Миний эхнэрийн хийлгэхээр зөвшөөрсөн мэс ажилбар/мэс заслын хагалгаа
            (аль нь болохыг сонгож доогуур нь зурах)-ыг би зөвшөөрч байна.
          </div>
          <div style={styles.rowStyle}>
            Нөхрийн (асран хамгаалагч/харгалзан дэмжигч) гарын үсэг:
            _______________________________/................................................./
          </div>
          <div style={styles.rowStyle}>
            Хэрэв нөхөр (асран хамгаалагч/харгалзан дэмжигч) нь зөвшөөрөөгүй бол
            тайлбарлана уу
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            ____________________________________________________________________________________________________________________________________________
          </div>
          <div style={styles.rowStyle}>
            Энэхүү зөвшөөрлийн хуудасны загварыг 2 хувь үйлдсэн болно.
          </div>
          <div style={styles.centerText}>
            огноо: ________ он _______ сар _______
          </div>
        </div>
      </div>
    </>
  );
}

export default CT2_12;