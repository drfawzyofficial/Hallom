window.onload = () => {
    new StarRating('.star-rating', {
        tooltip: false
    });
    const reviews = document.getElementById("reviews");
    const opinions = JSON.parse(localStorage.getItem("opinions"));
    if(opinions) {
        opinions.forEach((opinion) => {
            reviews.innerHTML += `
            <div class="review">
                <div class="name"><span>${ opinion.name }</span></div>
                <div class="comment">
                    <p>${ opinion.opinion }</p>
                    <div class="star">
                        <span style="font-family: sans-serif"> ${ opinion.stars } </span>
                        <img src="../media/images/star.png">
                    </div>
                </div>
            </div>
            `
        })
    }
  
   
    const form = document.getElementById("form");
    const subscribe = document.getElementById("subscribe");
    const sendOpinion = document.getElementById("sendOpinion");
    const cancelForm = document.getElementById("cancelForm");
    subscribe.onclick = () => {
        form.style.display = "block";
    }
    sendOpinion.onclick = () => {
        const opinions = JSON.parse(localStorage.getItem("opinions"));
        var list = [];
        if(opinions) list = opinions;
        else list = [];
        const stars = document.querySelector(".star-rating").value
        const name = document.getElementById("name").value
        const opinion = document.getElementById("opinion").value
        reviews.innerHTML += `
        <div class="review">
            <div class="name"><span>${ name }</span></div>
            <div class="comment">
                <p>${ opinion }</p>
                <div class="star">
                    <span style="font-family: sans-serif"> ${ stars } </span>
                    <img src="../media/images/star.png">
                </div>
            </div>
        </div>
        `
        list.push({ stars: stars, name: name, opinion: opinion })
        localStorage.setItem("opinions", JSON.stringify(list));
    }
    cancelForm.onclick = () => {
        form.style.display = "none";
    }
}