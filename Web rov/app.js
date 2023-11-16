
// show line process on the top bar
const progressEl = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    //0 - 1
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop/pageHeight)*100
    progressEl.style.visibility="visible"
    progressEl.style.width=scrollPercentage+"%"
}

// show arrow and click to the top when scroll down
const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener("click",scrollToTop)

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal>0.3){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}
function scrollToTop(){
    rootEl.scrollTo({
        top:0,
        behavior: "smooth"
    })
}