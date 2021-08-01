window.onload = () =>{
    // elements
    const btn1 = document.querySelector('#btn1')
    const btn2= document.querySelector('#btn2')
    const text1 = document.querySelector('.text1')
    const text2 = document.querySelector('.text2')
    const alert = document.querySelector('.alert')

    // copy to clipboard 
    function copy(copyId) {
        let inputElement = document.createElement('input')
        inputElement.type = 'text'
        let copyText = copyId.innerText
        inputElement.value = copyText
        document.body.appendChild(inputElement)
        inputElement.select()
        document.execCommand('copy')
        document.body.removeChild(inputElement)
        // show alert
        alert.style.display = 'block'
        // hide alert
        setTimeout(()=>{
            alert.style.display = 'none'
        }, 1000)
    }

    // btn click action
    btn1.addEventListener('click',()=>copy(text1))
    btn2.addEventListener('click', ()=>copy(text2))
}