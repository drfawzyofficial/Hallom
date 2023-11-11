window.onload = function(){ 
    const toSouthLinks1 = document.querySelector("#toSouthLinks1")
    const toSouthLinks2 = document.querySelector("#toSouthLinks2")
    const south = document.querySelector("#south")
    const guide = document.querySelector("#guide")
    const guideContent = document.querySelector("#guideContent")
    const head1 = document.querySelector("#head1")
    const head2 = document.querySelector("#head2")
    const head3 = document.querySelector("#head3")
    const head4 = document.querySelector("#head4")
    const back = document.querySelector("#back")
    const southLinks = document.querySelector("#southLinks")
    const leftGuideGreen = document.getElementById("leftGuideGreen")
    const rightGuideBlue = document.querySelector("#rightGuideBlue")
    const leftGuideBlue = document.querySelector("#leftGuideBlue")
    const rightGuideGreen = document.querySelector("#rightGuideGreen")
    leftGuideGreen.onclick = function() {
        guide.className += " d-none";
        guideContent.className +=  "d-block";
        head1.textContent = "قصر ثربان"
        head2.textContent = "قصر المقر"
        head3.textContent = "القلعة الدوسرية"
        head4.textContent = "متحف العمدة"
    }
    rightGuideBlue.onclick = () => {
        guide.className += " d-none";
        guideContent.className +=  "d-block";
        head1.textContent = "برغر اوسيس"
        head2.textContent = "الناضج"
        head3.textContent = "مشويات نديم"
        head4.textContent = "دومنيوز"
    }
    leftGuideBlue.onclick = () => {
        guide.className += " d-none";
        guideContent.className +=  "d-block";
        head1.textContent = "مرجيحة جازان"
        head2.textContent = "الامير حسام"
        head3.textContent = "غابة سقام"
        head4.textContent = "وايلد بارك"
    }
    rightGuideGreen.onclick = () => {
        guide.className += " d-none";
        guideContent.className +=  "d-block";
        head1.textContent = "وتد"
        head2.textContent = "بيانولا"
        head3.textContent = "رفاه"
        head4.textContent = "وشل"
    }
    back.onclick = () => {
        guide.className += " d-block";
        guideContent.className += " d-none";
    }
    toSouthLinks1.onclick = () => {
       south.className += " d-none";
       southLinks.className += " d-block";
    }
    toSouthLinks2.onclick = () => {
        south.className += " d-none";
        southLinks.className += " d-block";
    }
};