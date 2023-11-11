window.onload = function () {
    const frames = document.getElementById("frames");
    const HeadquartersOpen = document.getElementById("HeadquartersOpen")
    const Headquarters = document.getElementById("Headquarters")
    const BahaOpen = document.getElementById("BahaOpen")
    const Baha = document.getElementById("Baha")
    const frameBack = document.getElementById("frameBack");
    HeadquartersOpen.onclick = () => {
        frames.style.display = "block";
        Headquarters.style.display = "block";
        Headquarters.src = "https://www.youtube-nocookie.com/embed/9Y4kyz2XBuk"
    }
    BahaOpen.onclick = () => {
        frames.style.display = "block";
        Baha.style.display = "block";
        Baha.src="https://orbix360.com/t/j15yxqNjvuNzoY0YXxKzeyNDFpo1/6060705925038080"
    }
    frameBack.onclick = () => {
        frames.style.display = "none";
        Headquarters.style.display = "none";
        Baha.style.display = "none";
        Baha.src="https://orbix360.com/t/j15yxqNjvuNzoY0YXxKzeyNDFpo1/6060705925038080"
    }
};