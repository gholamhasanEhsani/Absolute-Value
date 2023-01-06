const n = document.getElementById("num"),
   s = document.getElementById("sub"),
   r = document.getElementById("res"),
   e = document.getElementById("err"),
   pls = document.getElementById("pls"),
   mns = document.getElementById("mns"),
   i = document.getElementById("info");
// Main Function
const absoluteValue = x => x >= 0 ? x : -x;
pls.onclick = () => n.value = Number(n.value) + 1;
mns.onclick = () => n.value = Number(n.value) - 1;
s.onclick = () => {
   const a = n.value,
   reg = new RegExp(/\d/),
   b = reg.test(a);
   if (b) {
      const d = absoluteValue(Number(a));
      r.style.display = "block";
      e.style.display = "none";
      r.innerText = `|${Number(a)}| = ${d}`;
   } else {
      e.style.display = "block";
      r.style.display = "none";
   }
}

i.onclick = () => {
   Swal.fire({
      title: "قدر مطلق چیست؟",
      text: `قدر مطلق به زبون ساده یعنی این که هر عددی رو مثبت کنی. یا به زبون فنی تر این که اگر هر عدد حقیقی که بزرگ تر یا مساوی صفر باشه رو بهش بدی، همون رو بر می گردونه و اگر هر عدد حقیقی کوچک تر از صفر رو بهش بدی ضرب در منفی یک میشه و به عبارتی قرینه اش یا مثبت اون عدد برگشت داده میشه همیونو بس! تو ریاضی هم اگر بخوایم قدر مطلق عددی مثل یک رو نمایش بدیم این شکلی می نویسیم: |۱|`,
      icon: "success",
      confirmButtonText: "فهمیدم",
      footer: "<p dir='rtl'>طراحی شده توسط <a href='https://github.com/gholamhasanEhsani'>غلام حسن احسانی</a></p>"
   })
}