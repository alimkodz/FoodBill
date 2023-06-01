(function () {
    const comContents = document.querySelectorAll(".comm-content");
    const rtComBtn = document.getElementById("rtComBtn");
    const ltComBtn = document.getElementById("ltComBtn");

    let selectedIndex = 0;

    rtComBtn.addEventListener("click", (evt) => {
        evt.preventDefault();

        comContents[selectedIndex].style.display = "none";
        
        selectedIndex++;
        if (selectedIndex >= comContents.length) {
            selectedIndex = 0;
        }
        comContents[selectedIndex].style.display = "block";
        console.log("r");
    });

    ltComBtn.addEventListener("click", (evt) => {
        evt.preventDefault();

        comContents[selectedIndex].style.display = "none";
        
        selectedIndex--;
        if (selectedIndex < 0) {
            selectedIndex = comContents.length - 1;
        }
        comContents[selectedIndex].style.display = "block";
        console.log("l");
    });
}());