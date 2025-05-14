let cachedNavbar = null;

export async function loadNavbar(targetId) {
    const target = document.getElementById(targetId);
    if (!cachedNavbar) {
        const res = await fetch('navbar.html');
        cachedNavbar = await res.text();
    }
    target.innerHTML = cachedNavbar;

    const script = document.createElement('script');
    script.src = 'navbar.js';
    script.type='module'
    document.body.appendChild(script);
}

export function loadFooter(containerId){
    fetch('footer.html')
    .then(res=>res.text())
    .then(html=>{
        document.getElementById(containerId).innerHTML=html;
    })
}

