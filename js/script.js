//All Quotes

textAr = [
    "يمكنك البحث عن مصدر بديل  إعادة المحاولة لاحقًا.",
    "يتعذّر إرسال البيانات  حاليًا،",
    "حدث خطأ أثناء تمكين تسجيل دخول",
    "لا يمكن العثور على هذا الصفحه"
]

//Return Random Number
function randomN(){
    return Math.floor(Math.random()*textAr.length)
}

//Generate Quote
function text() {
    document.getElementById("bt").innerHTML = textAr[randomN()]
}