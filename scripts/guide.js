window.onload = function(){ 
    const guide = document.getElementById("guide")
    const guideContent = document.getElementById("guideContent")
    const head1 = document.getElementById("head1")
    const head2 = document.getElementById("head2")
    const head3 = document.getElementById("head3")
    const head4 = document.getElementById("head4")
    const back = document.getElementById("back")
    // const aiBack = document.getElementById("aiBack")
    const ai = document.getElementById("ai")
    const aiContent = document.getElementById("aiContent")
    const leftGuideGreen = document.getElementById("leftGuideGreen")
    const rightGuideBlue = document.getElementById("rightGuideBlue")
    const leftGuideBlue = document.getElementById("leftGuideBlue")
    const rightGuideGreen = document.getElementById("rightGuideGreen")
    const leftGuideGreenA = document.getElementById("leftGuideGreenA")
    const rightGuideBlueA = document.getElementById("rightGuideBlueA")
    const leftGuideBlueA = document.getElementById("leftGuideBlueA")
    const rightGuideGreenA = document.getElementById("rightGuideGreenA")
    // AI
    const category = document.getElementById("category");
    const country = document.getElementById("country");
    const type = document.getElementById("type");
    category.onchange = () => {
       if(category.value !== "selected" && country.value !== "selected" && type.value !== "selected") {
            window.open(`https://www.google.com/search?q=البلد+${country.value}+والنوع+${type.value}+والفئة+${category.value}`);
       }
    }
    country.onchange = () => {
        if(category.value !== "selected" && country.value !== "selected" && type.value !== "selected") {
             window.open(`https://www.google.com/search?q=البلد+${country.value}+والنوع+${type.value}+والفئة+${category.value}`);
        }
     }
     type.onchange = () => {
        if(category.value !== "selected" && country.value !== "selected" && type.value !== "selected") {
             window.open(`https://www.google.com/search?q=البلد+${country.value}+والنوع+${type.value}+والفئة+${category.value}`);
        }
     }
    leftGuideGreen.onclick = () => {
        guide.style.display = "none";
        guideContent.style.display = "block";
        head1.textContent = "قصر ثربان"
        head2.textContent = "قصر المقر"
        head3.textContent = "القلعة الدوسرية"
        head4.textContent = "متحف العمدة"
        leftGuideGreenA.href="https://www.google.com/maps?q=%D9%82%D8%B5%D8%B1+%D8%AB%D8%B1%D8%A8%D8%A7%D9%86%D8%8C+%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9+-+%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82%D8%A9+%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A%D8%A9+-+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5%D8%8C+15%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5&ftid=0x15e51a4e55dbd34f:0xd546f7e484a48c3&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic";
        rightGuideBlueA.href = "https://www.google.com/maps?q=4499+4JV+%D9%82%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D9%82%D8%B1+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67393&ftid=0x15e51a553677d259:0x683f3cc2db32ae0e&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic";
        leftGuideBlueA.href = "https://google.com/maps?q=VGQW+668+%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9+%D8%A7%D9%84%D8%AF%D9%88%D8%B3%D8%B1%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D9%82%D9%84%D8%B9%D8%A9%D8%8C+%D8%AC%D8%A7%D8%B2%D8%A7%D9%86+82714&ftid=0x16080825da8b9541:0x51ec5070f6ff8207&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideGreenA.href = "https://www.google.com/maps?q=%D9%85%D8%AA%D8%AD%D9%81+%D8%A7%D9%84%D8%B9%D9%85%D8%AF%D8%A9%D8%8C+%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1+%D9%81%D9%8A%D8%B5%D9%84+%D8%A8%D9%86+%D9%85%D8%AD%D9%85%D8%AF+%D8%A8%D9%86+%D8%B3%D8%B9%D9%88%D8%AF%D8%8C+%D9%88%D8%B3%D8%B7+%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%D8%8C+%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9+65522&ftid=0x15ef4595d956a905:0xf3998641c52a820a&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"

    }
    rightGuideBlue.onclick = () => {
        guide.style.display = "none";
        guideContent.style.display = "block";
        head1.textContent = "برغر اوسيس"
        head2.textContent = "الناضج"
        head3.textContent = "مشويات نديم"
        head4.textContent = "دومنيوز"
        leftGuideGreenA.href = "https://www.google.com/maps?q=%D8%A8%D8%B1%D8%BA%D8%B1+%D8%A7%D9%88%D8%B3%D9%8A%D8%B3+OASIS%D8%8C+%D8%B3%D9%84%D9%85%D8%A7%D9%86%D8%8C+%D8%B4%D8%B9%D9%81+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5%D8%8C+%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67389&ftid=0x15e51b6a16422c01:0xe39ad0def6117edd&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideBlueA.href="https://www.google.com/maps?q=%D9%85%D8%B7%D8%B9%D9%85+%D8%A7%D9%84%D9%86%D8%A7%D8%B6%D8%AC%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D9%81%D9%8A%D8%B5%D9%84%D8%8C+%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67389&ftid=0x15e51a4f9a2d076f:0x9835db40805c8ec0&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        leftGuideBlueA.href="https://www.google.com/maps?q=%D9%85%D8%B7%D8%B9%D9%85+%D9%85%D8%B4%D9%88%D9%8A%D8%A7%D8%AA+%D9%86%D8%AF%D9%8A%D9%85%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D9%81%D9%8A%D8%B5%D9%84%D8%8C+%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%8C+%D9%82%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84+%D8%B9%D9%85%D8%B1+67389&ftid=0x15e51a4481f5ad6f:0x8b321ada3ce6e764&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideGreenA.href="https://www.google.com/maps?q=%D8%AF%D9%88%D9%85%D9%8A%D9%86%D9%88%D8%B2+%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7%D8%8C+4372%D8%8C+%D8%A3%D8%A8%D9%87%D8%A7+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%D8%8C+%D8%A3%D8%A8%D9%87%D8%A7+62512+6445%D8%8C&ftid=0x15e35328552f0d7b:0x7bdbd86df55d5855&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
    }
    leftGuideBlue.onclick = () => {
        guide.style.display = "none";
        guideContent.style.display = "block";
        head1.textContent = "مرجيحة جازان"
        head2.textContent = "الامير حسام"
        head3.textContent = "غابة سقام"
        head4.textContent = "وايلد بارك"
        leftGuideGreenA.href = "https://www.google.com/maps?q=MWVG+FM+%D9%85%D8%B1%D8%AC%D9%8A%D8%AD%D9%87+%D9%81%D8%B1%D8%B3%D8%A7%D9%86%D8%8C+%D8%A7%D9%84%D8%AD%D9%8F%D8%B3%D9%8A%D9%91%D9%86+88481&ftid=0x160853d80ab7076b:0x5efc665c54e0a01d&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideBlueA.href = "https://www.google.com/maps?q=2F62+J34%D8%8C+%D8%A7%D9%84%D8%B2%D8%B1%D9%82%D8%A7%D8%A1%D8%8C+%D8%A7%D9%84%D8%A8%D8%A7%D8%AD%D8%A9+65522&ftid=0x15ef45814a56256f:0xbfd145a78a7208a6&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        leftGuideBlueA.href = "https://www.google.com/maps?q=%D8%BA%D8%A7%D8%A8%D8%A9+%D8%B3%D9%82%D8%A7%D9%85%D8%8C+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF+%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D8%B1+%D8%B3%D9%84%D8%B7%D8%A7%D9%86%D8%8C+%D9%86%D8%AC%D8%B1%D8%A7%D9%86+23618&ftid=0x15fee9a7c93a1c55:0x72007b318c052119&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideGreenA.href = "https://www.google.com/maps?q=53GR+7X+%D9%85%D8%AE%D9%8A%D9%85%D8%A7%D8%AA+%D9%88%D8%A7%D9%8A%D9%84%D8%AF+%D8%A8%D8%A7%D8%B1%D9%83%D8%8C+%D8%A7%D9%84+%D8%B2%D9%8A%D8%AF%D8%A7%D9%86+67342&ftid=0x15e5116f44790335:0x577932ee46d64c4a&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
    }
    rightGuideGreen.onclick = () => {
        guide.style.display = "none";
        guideContent.style.display = "block";
        head1.textContent = "وتد"
        head2.textContent = "بيانولا"
        head3.textContent = "رفاه"
        head4.textContent = "وشل"
        leftGuideGreenA.href = "https://www.google.com/maps?q=%D9%88%D8%AA%D8%AF+%D9%82%D9%87%D9%88%D8%A9+%D9%85%D8%AE%D8%AA%D8%B5%D8%A9+%7C+Wtd+coffee,+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D9%81%D9%8A%D8%B5%D9%84%D8%8C+%D8%A7%D9%84%D9%85%D8%B1%D9%88%D8%AC%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67397&ftid=0x15e51b0efc9d4021:0x44a4c09ccd79ff09&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideBlueA.href = "https://www.google.com/maps?q=Pianolla+Cafe+%7C+%D8%A8%D9%8A%D8%A7%D9%86%D9%88%D9%84%D8%A7+%D9%83%D8%A7%D9%81%D9%8A%D9%87%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D9%81%D9%8A%D8%B5%D9%84%D8%8C+mattal%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67389&ftid=0x15e51b29288634c7:0x1b2d9adfab2e35f9&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        leftGuideBlueA.href = "https://www.google.com/maps?q=%D8%B1%D9%81%D8%A7%D9%87+%7C+%D9%82%D9%87%D9%88%D8%A9+%D9%85%D8%AE%D8%AA%D8%B5%D8%A9%D8%8C+%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67387&ftid=0x15e51b388fe6c31d:0x7b91a555fbaffdfa&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
        rightGuideGreenA.href = "https://www.google.com/maps?q=%D9%85%D9%82%D9%87%D9%89+%D9%88%D8%B4%D9%84,+Abu+Bakr+Alsiddique%D8%8C+%D8%A7%D9%84%D8%B5%D8%AF%D9%8A%D9%82%D8%8C+%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5+67387&ftid=0x15e51bcaa782e9c1:0x6a1ee41463d34ba&hl=ar-SA&gl=sa&entry=gps&lucs=,47071704,47069508&g_ep=CAISDDYuOTAuMi4yMTg5MBgAIKzfASoSLDQ3MDcxNzA0LDQ3MDY5NTA4QgJTQQ%3D%3D&g_st=ic"
    }
    back.onclick = () => {
        guide.style.display = "block";
        guideContent.style.display = "none";
    }
    ai.onclick = () => {
        guide.style.display = "none";
        aiContent.style.display = "block";
    }
};