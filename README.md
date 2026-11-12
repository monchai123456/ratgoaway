# 🌿 RAT GO AWAY Website (Modernized Version)

เว็บไซต์ใหม่ของ **RAT GO AWAY (www.ratgoaway.com)** ออกแบบใหม่ให้ทันสมัย เรียบง่าย สบายตา รองรับทุกหน้าจอ (Responsive Mobile-First) และพร้อมใช้งานบน **GitHub Pages** ทันที

## ✨ จุดเด่นของเว็บไซต์ใหม่
- **ดีไซน์เรียบง่าย สบายตา (Soft Botanical Minimalist)**: ใช้โทนสีเขียวใบไม้ธรรมชาติและขาวครีมสบายตา อ่านง่ายด้วยฟอนต์ `Prompt` และ `Plus Jakarta Sans`
- **ข้อมูลและรูปภาพครบถ้วนจากเว็บเดิม + ภาพประกอบใหม่ความละเอียดสูง**:
  - บริการกำจัดหนูด้วยอาหารหนูสมุนไพรนาโนเทคโนโลยี (Nano Enzyme นำเข้าจาก USA)
  - ตารางเปรียบเทียบข้อแตกต่างระหว่าง **สมุนไพร VS เหยื่อสารเคมี**
  - โชว์เคสผลิตภัณฑ์จริง **ก้อนไล่หนู Bye Bye Rat** (Paraffin Wax & Peppermint) พร้อมแกลเลอรีรูปสินค้าจริง 4 มุม และแท็บคุณสมบัติ/วิธีใช้/ข้อควรระวัง
  - ขั้นตอนการปฏิบัติงาน 3 ขั้นตอน และเงื่อนไขการรับประกัน 1 เดือน
  - ลูกค้าของเรา (บุญถาวร / เวิลด์ เซรามิค เซ็นเตอร์, Thailand MOPH - U.S. CDC Collaboration, Reflection Jomtien Beach Pattaya)
  - คำถามที่พบบ่อย (FAQ Accordion) และคลังบทความสาระน่ารู้ (เปิดอ่านฉบับเต็มในหน้าเดียวด้วย Modal)
- **พร้อมขึ้น GitHub Pages 100%**: ใช้ Relative Paths ทั้งหมด มีไฟล์ `.nojekyll`, `CNAME` และ GitHub Actions Workflow อัตโนมัติ

---

## 🚀 วิธีนำขึ้นโฮสต์บน GitHub Pages

1. สร้าง Repository ใหม่บน GitHub (เช่น `ratgoaway`)
2. อัปโหลดหรือ Push โค้ดในโฟลเดอร์นี้ขึ้นไปยัง GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Modernized Ratgoaway website"
   git branch -M main
   git remote add origin https://github.com/<ชื่อผู้ใช้ของคุณ>/<ชื่อ-repo>.git
   git push -u origin main
   ```
3. ไปที่หน้า **Settings** ของ Repository บน GitHub -> เมนู **Pages** ด้านซ้าย
4. ในหัวข้อ **Build and deployment** -> **Source** เลือกเป็น:
   - **Deploy from a branch** (เลือก branch `main` และโฟลเดอร์ `/ (root)`) **หรือ**
   - **GitHub Actions** (มีไฟล์ `.github/workflows/deploy.yml` เตรียมไว้ให้แล้ว)
5. *(ตัวเลือกเสริม)* หากต้องการผูกโดเมน `www.ratgoaway.com` ให้ตั้งค่า DNS (CNAME Record) ชี้มาที่ `<ชื่อผู้ใช้ของคุณ>.github.io` (ไฟล์ `CNAME` ถูกเตรียมไว้แล้ว หากยังไม่ได้ผูกโดเมนสามารถลบไฟล์ `CNAME` ออกชั่วคราวได้)
