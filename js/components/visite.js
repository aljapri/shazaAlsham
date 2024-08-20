let visiteContent = `<div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                    <h1 class="display-5 text-white mb-3">قم بزيارتنا</h1>
                    <p class="text-white mb-0">نرحب بكم في زيارة شركتنا للتعرف على عملياتنا ومنتجاتنا عن كثب. نحن هنا لنقدم لكم تجربة مباشرة حول جودة خدماتنا ومنتجاتنا..</p>
                </div>
                <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                    <a class="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">زرنا </a>
                </div>
            </div>
        </div>`;


let visit_section = document.getElementsByClassName("visit__section");

for(let i = 0;i < visit_section.length;i++){
    visit_section[i].innerHTML += visiteContent;
}