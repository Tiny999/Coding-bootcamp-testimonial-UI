const testimonial = document.getElementById('testimonial');


function loadNext(){
  testimonial.style.opacity = 0;

  setTimeout(function(){
    document.getElementById('testimonial').innerHTML = `
    <div id="testimonial">
      <div class="text-container">
        <p class="comment">"If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."</p>

        <p class="name">John Tarkpor <span class="position">Junior Front-end Developer</span></p>
      </div>
      <div class="image">
        <img src="./images/image-john.jpg" alt="john-image" id="main-img">


        <div class="buttons">
            <a href="#" id="previous" onclick="loadPrevious()" ><img src="./images/icon-prev.svg" alt="previous"></a>
            <a href="#" id="next" onclick="loadNext()" ><img src="./images/icon-next.svg" alt="next"></a>
        </div>
      </div>
    </div>
    `;

    testimonial.style.opacity = 1;
  }, 500);

};


function loadPrevious(){
  testimonial.style.opacity = 0

  setTimeout(function(){
    document.getElementById('testimonial').innerHTML = `
    <div id="testimonial" class="tanya">
      <div class="text-container">
        <p class="comment">"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."</p>

        <p class="name">Tanya Sinclaire <span class="position">UX Engineer</span></p>
      </div>
      <div class="image">
        <img src="./images/image-tanya.jpg" alt="tanya-image" id="main-img">


        <div class="buttons">
            <a href="#" id="previous" onclick="loadPrevious()" ><img src="./images/icon-prev.svg" alt="previous"></a>
            <a href="#" id="next" onclick="loadNext()" ><img src="./images/icon-next.svg" alt="next"></a>
        </div>
      </div>
    </div>
    `;

    testimonial.style.opacity = 1;
  }, 500);
};