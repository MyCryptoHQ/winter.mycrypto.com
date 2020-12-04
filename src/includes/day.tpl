<section class="day__wrapper" id="@@id">

  <div class="day__modal">

      @@if ( company_banner != "" ) {
          <div class="company_banner">
            <img src="images/@@company_banner" height="80" width="auto" />
          </div>
      }

    <a class="day__close">
      <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.75 25.75"><title>icon--close</title><path d="M15.91,12.88l9.21-9.22a2.14,2.14,0,0,0-3-3L12.88,9.84,3.66.63a2.14,2.14,0,0,0-3,3l9.21,9.22L.63,22.09a2.14,2.14,0,1,0,3,3l9.22-9.21,9.21,9.21a2.14,2.14,0,0,0,3-3Z" style="fill:#fff"/></svg>
    </a>

    <div class="day__content">


      @@if ( company_banner != "" ) {
          <div class="company_banner_mobile">
            <img src="images/@@company_banner" height="80" width="auto" />
          </div>
      }


      @@if ( date != "" ) {
        <date class="day__date">@@date</date>
      }

      <h2 class="day__title">@@title</h2>

      <div class="day__desc">@@desc</div>

      @@if ( twitter_desc != "" ) {
        <div class="day__share">
          <a class="day__twitter-link" target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=@@twitter_desc">
            <img src="images/twitter-share.svg" />
          </a>
        </div>
      }


      @@if ( company_img != "" ) {
        <a href="@@company_url" class="company__section" target="_blank" rel="noopener">
          <p class="company__text">
            This tip brought<br /> to you by @@company_name!
          </p>
          <div class="company__logo">
            <img class="company__img" src="images/@@company_img" height="30" width="auto" />
          </div>
        </a>
      }

    </div>


  </div>

</section>
