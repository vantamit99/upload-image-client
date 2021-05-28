export const changeImage = (domId, file) => {
    let ele = document.getElementById(domId);
    let fileReader = new FileReader();
    fileReader.onload = function() {
        let src = fileReader.result;
        ele.setAttribute('src', src)
    }
    fileReader.readAsDataURL(file)
}