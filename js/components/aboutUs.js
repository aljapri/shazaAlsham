let aboutUsContent = `<div class="container">
    <div class="row g-5 align-items-center">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="about-img position-relative overflow-hidden p-5 pe-0">
                <img class="img-fluid w-100" src="img/about.jpg" alt="فواكه وخضروات عضوية">
            </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 class="display-5 mb-4">أفضل الفواكه والخضروات الطبيعية</h1>
            <p class="mb-4">نحن نقدم أفضل الفواكه والخضروات  التي تضمن لك طعماً لذيذاً وفوائد صحية مذهلة. منتجاتنا مصنوعة من أجود المكونات لضمان تلبية احتياجاتك الغذائية بطريقة صحية وطبيعية.</p>
            <p><i class="fa fa-check text-primary me-3"></i> أفضل جودة للفواكه والخضروات</p>
            <p><i class="fa fa-check text-primary me-3"></i> طبيعية 100% وخالية من المواد الكيميائية</p>
            <p><i class="fa fa-check text-primary me-3"></i> مصدر موثوق للمنتجات الطازجة</p>
        </div>
    </div>
</div>
`;



let aboutUs_section = document.getElementsByClassName("aboutUs__section");

for(let i = 0;i < aboutUsContent.length;i++){
    aboutUs_section[i].innerHTML += aboutUsContent;
}