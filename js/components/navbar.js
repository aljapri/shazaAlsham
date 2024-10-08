
let navbarContent = `        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                <small class="ms-4"><i class="fa fa-envelope me-2"></i>info@example.com</small>
            </div>
            <div class="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a class="text-body ms-3" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="text-body ms-3" href=""><i class="fab fa-twitter"></i></a>
                <a class="text-body ms-3" href=""><i class="fab fa-linkedin-in"></i></a>
                <a class="text-body ms-3" href=""><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="fw-bold text-primary m-0">Shaza<span class="text-secondary">Alsham</span></h1>
            </a>
            <button type="button" class="navbar-toggler me-4" title="nav" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="contact.html" class="nav-item nav-link"> عربي </a>
                    <a href="contact.html" class="nav-item nav-link"> أنجليزي </a>
                    <a href="product.html" class="nav-item nav-link">عملائنا</a>
                    <a href="contact.html" class="nav-item nav-link"> شهادة حلال</a>
                    <a href="contact.html" class="nav-item nav-link"> ادارة الشركة </a>
                    <a href="contact.html" class="nav-item nav-link">  فرص العمل</a>
                    <a href="contact.html" class="nav-item nav-link">  الدرة ماركت</a>
                    <a href="contact.html" class="nav-item nav-link">  سياسة الجودة</a>
                    <a href="contact.html" class="nav-item nav-link">  اتصل بنا</a>
                    <a href="about.html" class="nav-item nav-link">من نحن</a>
                    <a href="index.html" class="nav-item nav-link active">الرئيسية</a>

                </div>

            </div>
        </nav>`


let navbar__section = document.getElementsByClassName("navbar__section");


for (let i = 0; i < navbar__section.length; i++) {
    navbar__section[i].innerHTML += navbarContent
}
