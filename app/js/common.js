  $(document).ready(function() {

    $('.carusel2').slick({
      dots: true,
      dotsClass: "my-dots"
    });
    $('.carusel3').slick({
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      dotsClass: "my-dots2 my-dots"
    });
  });

  function hideshow1() {
    document.getElementById("hidde1").style = "visibility: hidden";
    document.getElementById("Infohidde1").style = "visibility: visible";
  };

  function hideshowPrew1() {
    document.getElementById("Infohidde1").style = "visibility: hidden";
    document.getElementById("hidde1").style = "visibility: visible";
  };

  function hideshow2() {
    document.getElementById("hidde2").style = "visibility: hidden";
    document.getElementById("Infohidde2").style = "visibility: visible";
  };

  function hideshowPrew2() {
    document.getElementById("Infohidde2").style = "visibility: hidden";
    document.getElementById("hidde2").style = "visibility: visible";
  };

  function hideshow3() {
    document.getElementById("hidde3").style = "visibility: hidden";
    document.getElementById("Infohidde3").style = "visibility: visible";
  };

  function hideshowPrew3() {
    document.getElementById("Infohidde3").style = "visibility: hidden";
    document.getElementById("hidde3").style = "visibility: visible";
  };

  function hideshow4() {
    document.getElementById("hidde4").style = "visibility: hidden";
    document.getElementById("Infohidde4").style = "visibility: visible";
  };

  function hideshowPrew4() {
    document.getElementById("Infohidde4").style = "visibility: hidden";
    document.getElementById("hidde4").style = "visibility: visible";
  };

  function hideshow5() {
    document.getElementById("hidde5").style = "visibility: hidden";
    document.getElementById("Infohidde5").style = "visibility: visible";
  };

  function hideshowPrew5() {
    document.getElementById("Infohidde5").style = "visibility: hidden";
    document.getElementById("hidde5").style = "visibility: visible";
  };

  function hideshow6() {
    document.getElementById("hidde6").style = "visibility: hidden";
    document.getElementById("Infohidde6").style = "visibility: visible";
  };

  function hideshowPrew6() {
    document.getElementById("Infohidde6").style = "visibility: hidden";
    document.getElementById("hidde6").style = "visibility: visible";
  };

  function reset($elem) {
    $elem.before($elem.clone(true));
    var $newElem = $elem.prev();
    $elem.remove();
    return $newElem;
  }
  $("#button1").click(function() {
    var $this = $('#Animate');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button2").click(function() {
    var $this = $('#Animate');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });

  $("#button3").click(function() {
    var $this = $('#Animate1');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button4").click(function() {
    var $this = $('#Animate1');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button5").click(function() {
    var $this = $('#Animate2');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button6").click(function() {
    var $this = $('#Animate2');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button7").click(function() {
    var $this = $('#Animate3');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button8").click(function() {
    var $this = $('#Animate3');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button9").click(function() {
    var $this = $('#Animate4');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button10").click(function() {
    var $this = $('#Animate4');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button11").click(function() {
    var $this = $('#Animate5');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  $("#button12").click(function() {
    var $this = $('#Animate5');
    $this.removeClass();
    $this = reset($this);
    $this.addClass("flipInY animated");
  });
  document.querySelector("#nav-toggle")
    .addEventListener("click", function() {
      this.classList.toggle("active");
    });

  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 40.7143528,
        lng: -74.0059731
      },
      zoom: 15,
    });
  }
