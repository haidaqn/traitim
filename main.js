var onMou = document.querySelector(".main");

onMou.onmousemove = (e) => {
    console.log(e.clientX,e.clientY);
    onMou.style.left = e.clientX;
    onMou.style.top = e.clientY;
}