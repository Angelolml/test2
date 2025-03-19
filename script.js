document.getElementById('yes').onclick = () => {
    document.getElementById('main-content').style.display = "none";
    document.getElementById('response').style.display = "block";
};

document.getElementById('no').onmouseover = () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    document.getElementById('no').style.left = `${x}px`;
    document.getElementById('no').style.top = `${y}px`;
};
