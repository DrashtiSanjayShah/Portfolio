const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const form = documnet.getElementbyId('contactFor');

// Form starts here
<form action="" class="contact-form" id="contactForm">
                <div class="input-control i-c-2">
                  <input type="text" id='name' required placeholder="YOUR NAME" />
                  <input type="text" id='mail' required placeholder="YOUR EMAIL" />
                </div>
                <div class="input-control">
                  <input type="text" id='subject' required placeholder="ENTER SUBJECT" />
                </div>
                <div class="input-control">
                  <textarea
                    name="text"
                    id="message"
                    cols="25"
                    rows="8"
                
                    placeholder="WRITE YOUR MESSAGE HERE"
                  ></textarea>
                
                </div>
                <div class="submit-btn">
                  <a href="Drashti_Shah_Resume.pdf" target="_blank" download class="main-btn">
                    <span class="btn-text">Download CV</span>
                    <span class="btn-icon"
                      ><i class="fas fa-download"></i
                    ></span>
                  </a>
                </div>
              </form>

// form ends here

form.addEventListener('submit',()=>{
    e.preventdefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    form.reset()
})

function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btn
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

// toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() => {
        let element = document.body;
        element.classList.toggle('dark-mode')
    })

}

PageTransitions();
