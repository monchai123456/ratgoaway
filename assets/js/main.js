/* ==========================================================================
   RAT TERMINATOR - Interactive Scripts & Articles Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar & Active Section Highlighting
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = navLinks ? Array.from(navLinks.querySelectorAll('a[href^="#"]')) : [];
  const sections = navItems
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const updateActiveNav = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 160;
    let currentId = 'top';

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.id;
      }
    });

    navItems.forEach(link => {
      const hrefId = link.getAttribute('href').replace('#', '');
      if (hrefId === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. Hero Image Carousel Slider
  const heroSlider = document.getElementById('heroSlider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = heroSlider.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    let currentSlide = 0;
    let slideInterval = null;
    const INTERVAL_MS = 4500;

    const goToSlide = (index) => {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    const startAutoSlide = () => {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, INTERVAL_MS);
    };

    const stopAutoSlide = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoSlide();
      });
    });

    heroSlider.addEventListener('mouseenter', stopAutoSlide);
    heroSlider.addEventListener('mouseleave', startAutoSlide);

    // Touch swipe support for mobile
    let touchStartX = 0;
    heroSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) nextSlide();
        else prevSlide();
      }
      startAutoSlide();
    }, { passive: true });

    startAutoSlide();
  }

  // 3. Bye Bye Rat Product Image Gallery
  const mainProductImg = document.getElementById('mainProductImg');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const alt = btn.getAttribute('data-alt');
      if (mainProductImg && src) {
        mainProductImg.src = src;
        if (alt) mainProductImg.alt = alt;
      }
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // 3. Product Info Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');

    if (questionBtn && answerDiv) {
      // Open first item by default
      if (item.classList.contains('active')) {
        answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
      }

      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('active');
          answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
        }
      });
    }
  });

  // 5. Knowledge Base Articles Modal
  const articlesData = {
    article1: {
      title: 'สารพัดวิธีกำจัดหนูแบบไม่ต้องฆ่าแกงกัน เพื่อบ้านสวยๆ ของเรา',
      content: `
        <p>"หนูบุกบ้าน" คงเป็นปัญหาที่หนักอกหนักใจเจ้าของบ้านทุกๆ คนอย่างไม่ต้องสงสัย เพราะหนูเป็นพาหะของความสกปรกและเชื้อโรค และที่สำคัญทำให้บ้านสวยๆ ของเราเสียหาย วันนี้เรามีวิธีกำจัดและขับไล่หนูออกไปจากบ้านโดยไม่ต้องฆ่ามาฝากกันครับ</p>
        <h4>1. จัดบ้านให้ดูโล่ง ไม่มีจุดซอกหลืบหรือลับตา</h4>
        <p>เริ่มจากวิธีง่ายๆ เบสิคๆ คือจัดบ้านให้ดูโล่ง มีแต่เฟอร์นิเจอร์หรือของใช้ที่จำเป็น หลีกเลี่ยงจุดอับ จุดบอด หรือซอกหลืบต่างๆ ภายในบ้าน เพราะส่วนนั้นเป็นที่ที่หนูชอบอาศัยอยู่ที่สุด</p>
        <h4>2. เปิดไฟให้สว่าง</h4>
        <p>หนูชอบทำอะไรลับๆ ล่อๆ โดยเฉพาะในที่มืด การเปิดไฟให้สว่างในจุดเสี่ยงจะทำให้หนูไม่กล้าออกมาคุ้ยหาอาหารหรือแทะข้าวของเสียหาย</p>
        <h4>3. เก็บอาหารในที่มิดชิด</h4>
        <p>การที่หนูเข้ามาในบ้านก็เพราะเข้ามาหาอาหารกิน ดังนั้นควรตัดไฟตั้งแต่ต้นลมโดยการเก็บของกินภายในบ้านอย่างมิดชิดในภาชนะที่แข็งแรง รวมไปถึงเก็บทำความสะอาดเศษอาหารที่เหลือทิ้งเป็นประจำทุกวัน</p>
        <h4>4. ปิดทางเข้าบ้าน</h4>
        <p>สำรวจและปิดอุดรูรั่วตามส่วนต่างๆ ของบ้านให้ดี เช่น รอยต่อระหว่างกระเบื้องหลังคา รอยแยกบริเวณฝ้าเพดาน รูกำแพง หรือท่อน้ำ เพื่อป้องกันหนูเล็ดลอดเข้ามา</p>
        <h4>5. น้ำมันก๊าด หรือ ลูกเหม็น</h4>
        <p>กลิ่นฉุนของน้ำมันก๊าดและลูกเหม็นเป็นสิ่งที่หนูไม่ชอบ เหมาะสำหรับวางในจุดอับหรือโยนขึ้นบนฝ้าเพดาน แต่ควรระมัดระวังเรื่องกลิ่นฉุนสำหรับผู้อยู่อาศัยและเด็กเล็ก</p>
        <h4>6. สมุนไพรไล่หนู / ก้อนไล่หนูธรรมชาติ</h4>
        <p>ปลอดภัยต่อมนุษย์และสัตว์เลี้ยง เพราะสกัดจากพืชสมุนไพร เช่น สะระแหน่ (Peppermint) กะเพรา มะกรูด หรือใช้ก้อนไล่หนู Bye Bye Rat ที่ทนแดดทนฝนและให้กลิ่นยาวนานกว่าสเปรย์ทั่วไป</p>
        <h4>7. ดักด้วยกรง</h4>
        <p>ใช้กรงดักหนูพร้อมเหยื่อล่อ เมื่อติดกับก็นำไปปล่อยไกลบ้าน โดยหลังใช้งานควรล้างกรงให้สะอาดทุกครั้งเพื่อไม่ให้มีกลิ่นหนูตัวเดิมติดอยู่</p>
      `
    },
    article2: {
      title: '10 วิธีไล่หนูออกจากบ้านโดยไม่ต้องฆ่า',
      content: `
        <p>หลายบ้านอาจเคยได้ยินเสียงร้องจี๊ดๆ หรือเสียงฝีเท้าวิ่งไป-มาอยู่บนฝ้าเพดาน ลองมาดู 10 วิธีไล่หนูออกจากบ้านอย่างปลอดภัยกันครับ:</p>
        <ul>
          <li><strong>10. กำจัดแหล่งอาหาร:</strong> จัดการบ้านให้สะอาดหมดจด ไม่มีเศษอาหารตกค้าง และจัดบ้านให้โล่งไม่มีมุมอับ</li>
          <li><strong>9. ปิดทางเข้า:</strong> สำรวจซอกเล็กซอกน้อยบนหลังคา รอยแยกฝ้าเพดาน รูกำแพง ประตู-หน้าต่างห้องครัว แล้วปิดรอยรั่วให้หมดสิ้น</li>
          <li><strong>8. ทรายแมว:</strong> กลิ่นจากทรายแมวที่ใช้แล้วใส่ถุงผ้าวางเฉพาะจุดที่หนูเพ่นพ่าน จะทำให้หนูระแวงและไม่กล้าเข้าใกล้</li>
          <li><strong>7. เลี้ยงแมว หรือใช้กลิ่นธรรมชาติ:</strong> เพียงหนูได้กลิ่นศัตรูตามธรรมชาติอย่างแมว ก็ไม่กล้าเข้ามาอาศัยในบ้าน</li>
          <li><strong>6. สมุนไพรไล่หนู:</strong> สารสกัดจากธรรมชาติ เช่น สะระแหน่ (Peppermint), กะเพรา, มะกรูด ไม่มีพิษร้ายแรงและปลอดภัยต่อผู้ใช้</li>
          <li><strong>5. กรงดักหนู:</strong> วางกรงดักชิดริมกำแพงซึ่งเป็นทางเดินของหนู เมื่อจับได้ให้นำไปปล่อยห่างไกลชุมชน</li>
          <li><strong>4. เสียงดังรบกวน:</strong> หนูเป็นสัตว์ขี้ตกใจ การทำให้เกิดเสียงดังในจุดที่หนูซ่อนตัวจะช่วยให้หนูอพยพหนีออกไป</li>
          <li><strong>3. เปิดไฟให้สว่าง:</strong> แสงไฟทำให้หนูแสบตาและไม่กล้าออกมาหาอาหารในเวลากลางคืน</li>
          <li><strong>2. ลูกเหม็น:</strong> นำไปวางไว้ใกล้ถังขยะ ฝ้าเพดาน หรือมุมอับภายในครัว</li>
          <li><strong>1. น้ำมันก๊าด / น้ำมันสน:</strong> กลิ่นรุนแรงทำให้หนูเข็ดขยาด แต่ควรระวังในบ้านที่มีเด็กและต้องมีการระบายอากาศที่ดี</li>
        </ul>
      `
    },
    article3: {
      title: 'การควบคุมและกำจัดหนูอย่างถูกวิธี ตามหลักสุขาภิบาล',
      content: `
        <p>หนูเป็นสัตว์ค่อนข้างฉลาด เคลื่อนตัวรวดเร็ว หลบหลีกอันตรายได้เก่ง และแพร่พันธุ์ได้อย่างรวดเร็ว (หนูอายุประมาณ 3 เดือนสามารถผสมพันธุ์ ตั้งท้องนาน 19–21 วัน และออกลูกครอกละ 6–10 ตัว) การป้องกันและกำจัดให้ได้ผลจึงต้องดำเนินการควบคู่กัน 2 แนวทางหลัก คือ:</p>
        <h4>1. การปรับปรุงสุขาภิบาลสิ่งแวดล้อมในอาคารบ้านเรือน (วิธีที่ดีที่สุดในระยะยาว)</h4>
        <ul>
          <li><strong>1.1 ป้องกันไม่ให้หนูเข้าสู่อาคาร:</strong> ปิดช่องทางด้วยวัสดุที่ป้องกันการกัดแทะได้ เช่น ตาข่ายเหล็ก คอนกรีต อิฐ หิน หรือแผ่นโลหะหุ้มขอบประตูไม้ด้านล่าง</li>
          <li><strong>1.2 รวบรวมและกำจัดมูลฝอย:</strong> เก็บขยะเปียกและขยะแห้งในถังที่แข็งแรง มีฝาปิดมิดชิด และทำความสะอาดท่อน้ำทิ้งไม่ให้มีเศษอาหารค้าง</li>
          <li><strong>1.3 การเก็บอาหารแห้ง:</strong> วางบนชั้นหรือโต๊ะสูงจากพื้นอย่างน้อย 12–18 นิ้ว ไม่วางชิดข้างฝาหรือซ้อนกันจนถึงเพดาน เพราะหนูชอบวิ่งตามแนวข้างฝา</li>
        </ul>
        <h4>2. การจัดการและควบคุมประชากรหนูโดยตรง</h4>
        <ul>
          <li><strong>2.1 วิธีกล:</strong> ใช้กรงดักหรือกับดักวางชิดฝาผนังตามทางเดินของหนู</li>
          <li><strong>2.2 การใช้อาหารหนูสมุนไพรนาโนเทคโนโลยี (แนะนำ):</strong> เป็นวิธีที่ได้รับความนิยมสูงเพราะปลอดภัย 100% สำหรับมนุษย์และสัตว์เลี้ยง ไม่มีสารเคมีตกค้างในบ้าน โดยออกฤทธิ์ต่อระบบประสาทการรับรู้และระบบย่อยอาหารของหนู ทำให้หนูหนีออกจากบ้านและค่อยๆ สลบภายใน 7–10 วัน</li>
        </ul>
        <p><em>อ้างอิงข้อมูลพื้นฐาน: กรมอนามัย และทีมผู้เชี่ยวชาญ RAT TERMINATOR</em></p>
      `
    }
  };

  const modalBackdrop = document.getElementById('articleModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('[data-article]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-article');
      const data = articlesData[key];
      if (data && modalBackdrop && modalBody) {
        modalBody.innerHTML = `<h3>${data.title}</h3>${data.content}`;
        modalBackdrop.classList.add('open');
      }
    });
  });

  if (modalClose && modalBackdrop) {
    modalClose.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });
  }

  // 6. Contact Form Handler (Static GitHub Pages compatible -> Opens Line / Mailto / Summary)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const service = document.getElementById('custService').value;
      const msg = document.getElementById('custMsg').value.trim();

      const subject = encodeURIComponent(`ติดต่อสอบถาม ${service} - คุณ${name}`);
      const body = encodeURIComponent(
        `ชื่อผู้ติดต่อ: ${name}\nเบอร์โทรศัพท์: ${phone}\nบริการที่สนใจ: ${service}\nรายละเอียดเพิ่มเติม:\n${msg}`
      );

      // Show friendly feedback message and trigger email or copy
      const statusBox = document.getElementById('formStatus');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <strong>เตรียมข้อมูลเรียบร้อยแล้ว!</strong> กำลังเปิดโปรแกรมอีเมลของคุณเพื่อส่งถึง <code>greenprotechnature@gmail.com</code> หรือคุณสามารถโทรสายด่วน <a href="tel:0813440968" style="text-decoration:underline;font-weight:700;">081-344-0968</a> / แอดไลน์ <a href="https://line.me/ti/p/~greenprotect" target="_blank" style="text-decoration:underline;font-weight:700;">@greenprotect</a> ได้ทันทีครับ
        `;
      }
      window.location.href = `mailto:greenprotechnature@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
