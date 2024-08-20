
let companyFeatures = [
    {
      "title": "من نحن",
      "description": "شذا الشام هي شركة رائدة في تقديم أفضل المواد الغذائية المستوردة والمحلية. نحرص على توفير منتجات عالية الجودة تلبّي احتياجات عملائنا."
    },
    {
      "title": "رؤيتنا",
      "description": "نسعى لأن نكون الخيار الأول لكل من يبحث عن الجودة والموثوقية في عالم الأغذية، مع التزامنا بتقديم أفضل المنتجات بأسعار تنافسية."
    },
    {
      "title": "قيمنا",
      "description": "التميز في الخدمة، المصداقية في التعامل، الالتزام بالجودة، الابتكار والتطوير المستمر."
    },
    {
      "title": "ماذا نقدم",
      "description": "نوفر مجموعة متنوعة من المنتجات الغذائية تشمل الحبوب، البقوليات، التوابل، والزيوت، وغيرها من المواد الأساسية التي تلبي احتياجات كل بيت."
    }
  ]

featureContent = `<div class="container">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                <h1 class="display-5 mb-3">Our Features</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div class="row g-4 makeit_flex">
                
                ${companyFeatures.map((el)=>{
                    return(
                        `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="bg-white text-center h-100 p-4 p-xl-5">
                        <img class="img-fluid mb-4" src="img/icon-1.png" alt="">
                        <h4 class="mb-3">${el.title}</h4>
                        <p class="mb-4">${el.description}</p>
                    </div>
                </div>`
                    )
                })}
            </div>
        </div>
        `;


let feature_section = document.getElementsByClassName("feature__section");

for(let i = 0;i < feature_section.length;i++){
    feature_section[i].innerHTML += featureContent
}