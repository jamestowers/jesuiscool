class @Dropshop

  constructor: ->
    console.log '[Dropshop] Initialising...'
    @$doc = $(document)
    @$body = $('body')
    @init()

  init: ->
    FastClick.attach(document.body);
    @setWidths()
    @onPageLoad()

    @$doc.on 'click', 'a#menu-toggle', ->
      dropshop.$body.toggleClass 'slide-from-right'
      false

    @$doc.on 'click', '.share-fb', ->
      url = this.href
      url = $(this).data 'share-url' unless url
      url = window.location.href unless url
      FB.ui {
        method: 'share'
        href: url
      }, (response) ->
        console.log (response)
      false

    @$doc.on 'click', '.share-email', ->
      url = this.href
      url = window.location.href unless url
      emailBody = 'I’ve just pledged! Join Me and Wear Your Support for this campaign! '+ url
      window.location = 'mailto:?subject=' + document.title + '&body=' +   emailBody;

    @$doc.on 'click', '.share-twitter', ->
      url = this.href
      url = window.location.href unless url
      popUp = window.open('http://twitter.com/intent/tweet?text=I\’ve just pledged! Join Me and Wear Your Support for this campaign! via @wearsupport - ' + url + ' %23wearyoursupport', 'popupwindow', 'scrollbars=yes,width=600,height=400,top=150,left=150')
      popUp.focus()
      false



  onPageLoad: ->
    console.log '[Dropshop] onPageLoad'
    @setEventListeners()
    #@$allMods = $("[data-animate]")

  setWidths:->
    console.log '[Dropshop] setting page dims'
    @sizes = 
      windowWidth: $(window).width()
      windowHeight: $(window).height()
      headerHeight: $('header.header').outerHeight()
    @isMobile = @sizes.windowWidth < 580







  ######################
  ## ON SCROLL
  ######################
  onScroll: ->
    window.ticking = false
    #unless dropshop.isMobile
    if window.latestKnownScrollY > dropshop.sizes.headerHeight
      dropshop.$body.addClass 'scrolled'
    else
      dropshop.$body.removeClass 'scrolled'

    # Animate elements on scroll when visible
    dropshop.$allMods.each (i, el) ->
      el = $(el)
      el.addClass 'animate' if el.visible(true)
    return




  ######################
  ## EVENT LISTENERS
  ######################
  setEventListeners: ->
    # Use this for setting new event listeners that need to be set after ajax page loads
    console.log '[Dropshop] setting event listeners'
    
    
    @$doc.on 'click', 'nav a', ->
      target = $(this).attr 'href'
      console.log target
      $('body').scrollTo(target, 800);
      false


