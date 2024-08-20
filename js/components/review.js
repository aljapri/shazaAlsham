let commentContent = `  
        
                <!-- Testimonial 1 -->
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">المنتجات التي قدمتموها لنا كانت فوق توقعاتنا. الجودة العالية والخدمة الممتازة تجعلنا نوصي بشدة بشركتكم.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="Client Image">
                        <div class="ms-3">
                            <h5 class="mb-1">أحمد العلي</h5>
                            <span>مدير تسويق</span>
                        </div>
                    </div>
                </div>
                <!-- Testimonial 2 -->
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">تجربتنا مع شركتكم كانت رائعة. اهتمامكم بالتفاصيل وسرعة الاستجابة أضافا قيمة كبيرة لتعاوننا.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="Client Image">
                        <div class="ms-3">
                            <h5 class="mb-1">سارة محمد</h5>
                            <span>مستشارة أعمال</span>
                        </div>
                    </div>
                </div>
                <!-- Testimonial 3 -->
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">إن جودة المنتجات التي توفرونها لا تضاهى. الخدمة كانت محترفة وسريعة، وسنواصل التعامل معكم بكل تأكيد.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt="Client Image">
                        <div class="ms-3">
                            <h5 class="mb-1">يوسف حسن</h5>
                            <span>رجل أعمال</span>
                        </div>
                    </div>
                </div>
                <!-- Testimonial 4 -->
                <div class="testimonial-item position-relative bg-white p-5 mt-4">
                    <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                    <p class="mb-4">منذ أن بدأنا العمل معكم، لاحظنا تحسناً كبيراً في جودة المواد التي نستخدمها. شكراً لدعمكم المتواصل.</p>
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt="Client Image">
                        <div class="ms-3">
                            <h5 class="mb-1">منى السيد</h5>
                            <span>مدير عمليات</span>
                        </div>
                    </div>
                </div>
    `;
// استدعاء العنصر
const commentsSection = document.getElementsByClassName('comment__section');

console.log(commentsSection);
// توليد HTML وإدراجه
for(let i = 0;i < commentsSection.length;i++ ){
    commentsSection[i].innerHTML += commentContent;
}