document.querySelectorAll(".timeline-icon").forEach(function (icon , index){
      icon.addEventListener('click' , function (){
             // Deactivate all icons and contents
            document.querySelectorAll('.timeline-icon').forEach(function(icon){
                  icon.classList.remove('active')
            })

            document.querySelectorAll('.timeline-content').forEach(function(content){
                  content.classList.remove('active');
            })

            //  Activate the corresponding icon and content
            this.classList.add('active');
            document.querySelectorAll('.timeline-content')[index].classList.add('active');
      })
})


document.querySelectorAll(".timeline-content").forEach(function (icon , index){
      icon.addEventListener('click' , function (){
             // Deactivate all icons and contents
            document.querySelectorAll('.timeline-icon').forEach(function(icon){
                  icon.classList.remove('active')
            })

            document.querySelectorAll('.timeline-content').forEach(function(content){
                  content.classList.remove('active');
            })

            //  Activate the corresponding icon and content
            this.classList.add('active');
            document.querySelectorAll('.timeline-icon')[index].classList.add('active');
      })
})