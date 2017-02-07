(function() {
  this.Dropshop = (function() {
    function Dropshop() {
      console.log('[Dropshop] Initialising...');
      this.$doc = $(document);
      this.$body = $('body');
      this.init();
    }

    Dropshop.prototype.init = function() {
      FastClick.attach(document.body);
      this.setWidths();
      this.onPageLoad();
      this.$doc.on('click', 'a#menu-toggle', function() {
        dropshop.$body.toggleClass('slide-from-right');
        return false;
      });
      this.$doc.on('click', '.share-fb', function() {
        var url;
        url = this.href;
        if (!url) {
          url = $(this).data('share-url');
        }
        if (!url) {
          url = window.location.href;
        }
        FB.ui({
          method: 'share',
          href: url
        }, function(response) {
          return console.log(response);
        });
        return false;
      });
      this.$doc.on('click', '.share-email', function() {
        var emailBody, url;
        url = this.href;
        if (!url) {
          url = window.location.href;
        }
        emailBody = 'I’ve just pledged! Join Me and Wear Your Support for this campaign! ' + url;
        return window.location = 'mailto:?subject=' + document.title + '&body=' + emailBody;
      });
      return this.$doc.on('click', '.share-twitter', function() {
        var popUp, url;
        url = this.href;
        if (!url) {
          url = window.location.href;
        }
        popUp = window.open('http://twitter.com/intent/tweet?text=I\’ve just pledged! Join Me and Wear Your Support for this campaign! via @wearsupport - ' + url + ' %23wearyoursupport', 'popupwindow', 'scrollbars=yes,width=600,height=400,top=150,left=150');
        popUp.focus();
        return false;
      });
    };

    Dropshop.prototype.onPageLoad = function() {
      console.log('[Dropshop] onPageLoad');
      return this.setEventListeners();
    };

    Dropshop.prototype.setWidths = function() {
      console.log('[Dropshop] setting page dims');
      this.sizes = {
        windowWidth: $(window).width(),
        windowHeight: $(window).height(),
        headerHeight: $('header.header').outerHeight()
      };
      return this.isMobile = this.sizes.windowWidth < 580;
    };

    Dropshop.prototype.onScroll = function() {
      window.ticking = false;
      if (window.latestKnownScrollY > dropshop.sizes.headerHeight) {
        dropshop.$body.addClass('scrolled');
      } else {
        dropshop.$body.removeClass('scrolled');
      }
      dropshop.$allMods.each(function(i, el) {
        el = $(el);
        if (el.visible(true)) {
          return el.addClass('animate');
        }
      });
    };

    Dropshop.prototype.setEventListeners = function() {
      console.log('[Dropshop] setting event listeners');
      return this.$doc.on('click', 'nav a', function() {
        var target;
        target = $(this).attr('href');
        console.log(target);
        $('body').scrollTo(target, 800);
        return false;
      });
    };

    return Dropshop;

  })();

}).call(this);
