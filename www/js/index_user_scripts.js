/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn-inicial */
    
    
        /* button  #btn-inicial */
    $(document).on("click", "#btn-inicial", function(evt)
    {
         /*global activate_page */
         activate_page("#menu_inicial"); 
         return false;
    });
    
        /* button  #btn-prancheta */
    $(document).on("click", "#btn-prancheta", function(evt)
    {
         /*global activate_page */
         activate_page("#prancheta"); 
         return false;
    });
    
        /* button  #btn-sist */
    $(document).on("click", "#btn-sist", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-sis6x0 */
    
    
        /* button  #btn-sis3x3 */
    
    
        /* button  #btn-sis4x2s */
    
    
        /* button  #btn-sis4x4i */
    
    
        /* button  #btn-sis5x1 */
    
    
        /* button  #btn-inicio */
    
    
        /* button  #btn-pg1-home */
    
    
        /* button  #btn-voltar-menusis */
    
    
        /* button  #btn-inicio */
    $(document).on("click", "#btn-inicio", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-pg1-home */
    
    
        /* button  #btn-pg1-home */
    
    
        /* button  #btn-pg1-home */
    
    
        /* button  #btn-pg1-home */
    
    
        /* button  #btn-pg1-home */
    $(document).on("click", "#btn-pg1-home", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-sis6x0 */
    
    
        /* button  #btn-sis3x3 */
    
    
        /* button  #btn-sis4x2s */
    
    
        /* button  #btn-sis4x4i */
    
    
        /* button  #btn-sis5x1 */
    
    
        /* button  #btn-home-menu-sis */
    $(document).on("click", "#btn-home-menu-sis", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-carregando */
    $(document).on("click", "#btn-carregando", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-menusis */
    
    
        /* button  #btn-voltar-menusis */
    
    
        /* button  #btn-voltar-menusis */
    
    
        /* button  #btn-voltar-menusis */
    
    
        /* button  #btn-voltar-menusis */
    $(document).on("click", "#btn-voltar-menusis", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-sair-home */
    
    
        /* button  #btn-sair-menusis */
    
    
        /* button  #btn-home-menu-sist */
    $(document).on("click", "#btn-home-menu-sist", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-sair-nao */
    
    
        /* button  #btn-sair-nao2 */
    
    
        /* button  #btn-sair-menusis */
    
    
        /* button  #btn-sair-nao-home */
    $(document).on("click", "#btn-sair-nao-home", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-sair-nao */
    
    
        /* button  #btn-sair-sis5x1 */
    $(document).on("click", "#btn-sair-sis5x1", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair1").modal("toggle");  
         return false;
    });
    
        /* button  #btn-home-menusis5x1 */
    $(document).on("click", "#btn-home-menusis5x1", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-menusis5x1 */
    $(document).on("click", "#btn-voltar-menusis5x1", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-sair-nao */
    $(document).on("click", "#btn-sair-nao", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis-5x1"); 
         return false;
    });
    
        /* button  #btn-sair-home */
    
    
        /* button  #btn-sair-home */
    
    
        /* button  #btn-sair-5x1 */
    $(document).on("click", "#btn-sair-5x1", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair1").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-menusis */
    $(document).on("click", "#btn-sair-menusis", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair2").modal("toggle");  
         return false;
    });
    
        /* button  #menusb1 */
    $(document).on("click", "#menusb1", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd1"));  
         return false;
    });
    
        /* button  #btn-home-4x2i */
    
    
        /* button  #btn-home-4x2i */
    $(document).on("click", "#btn-home-4x2i", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-4x2i */
    $(document).on("click", "#btn-voltar-4x2i", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-home-4x2s */
    $(document).on("click", "#btn-home-4x2s", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-4x2s */
    $(document).on("click", "#btn-voltar-4x2s", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-home-3x3 */
    $(document).on("click", "#btn-home-3x3", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-3x3 */
    $(document).on("click", "#btn-voltar-3x3", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-home-6x0 */
    $(document).on("click", "#btn-home-6x0", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-6x0 */
    $(document).on("click", "#btn-voltar-6x0", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-sair-home */
    $(document).on("click", "#btn-sair-home", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair3").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-pran */
    $(document).on("click", "#btn-sair-pran", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair7").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-4x2i */
    $(document).on("click", "#btn-sair-4x2i", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair4").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-4x2s */
    $(document).on("click", "#btn-sair-4x2s", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair5").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-3x3 */
    
    
        /* button  #btn-sair-6x0 */
    $(document).on("click", "#btn-sair-6x0", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair6").modal("toggle");  
         return false;
    });
    
        /* button  #btn-home-pran */
    $(document).on("click", "#btn-home-pran", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-voltar-pran */
    $(document).on("click", "#btn-voltar-pran", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btn-sair-3x3 */
    $(document).on("click", "#btn-sair-3x3", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair8").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao8 */
    $(document).on("click", "#btn-sair-nao8", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair8").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao7 */
    $(document).on("click", "#btn-sair-nao7", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair7").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao2 */
    $(document).on("click", "#btn-sair-nao2", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair2").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao6 */
    $(document).on("click", "#btn-sair-nao6", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair6").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao3 */
    
    
        /* button  #btn-sair-nao1 */
    $(document).on("click", "#btn-sair-nao1", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair1").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao4 */
    $(document).on("click", "#btn-sair-nao4", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair4").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao5 */
    $(document).on("click", "#btn-sair-nao5", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair5").modal("toggle");  
         return false;
    });
    
        /* button  #bt-5x1-recolhersd */
    $(document).on("click", "#bt-5x1-recolhersd", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd1"));  
         return false;
    });
    
        /* button  #menusb2 */
    $(document).on("click", "#menusb2", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd2"));  
         return false;
    });
    
        /* button  #bt-4x2i-recolhersd2 */
    $(document).on("click", "#bt-4x2i-recolhersd2", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd2"));  
         return false;
    });
    
        /* button  #bt-4x2s-recolhersd3 */
    $(document).on("click", "#bt-4x2s-recolhersd3", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd3"));  
         return false;
    });
    
        /* button  #bt-3x3-recolhersd4 */
    $(document).on("click", "#bt-3x3-recolhersd4", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd4"));  
         return false;
    });
    
        /* button  #bt-6x0-recolhersd5 */
    $(document).on("click", "#bt-6x0-recolhersd5", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd5"));  
         return false;
    });
    
        /* button  #menusb3 */
    $(document).on("click", "#menusb3", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd3"));  
         return false;
    });
    
        /* button  #menusb4 */
    $(document).on("click", "#menusb4", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd4"));  
         return false;
    });
    
        /* button  #menusb5 */
    $(document).on("click", "#menusb5", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd5"));  
         return false;
    });
    
        /* button  #bt-5x1-recolhersd1 */
    $(document).on("click", "#bt-5x1-recolhersd1", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd1"));  
         return false;
    });
    
        /* button  #btn-sair-home */
    $(document).on("click", "#btn-sair-home", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-nao3 */
    $(document).on("click", "#btn-sair-nao3", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim3 */
    $(document).on("click", "#btn-sair-sim3", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim1 */
    $(document).on("click", "#btn-sair-sim1", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair1").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim4 */
    $(document).on("click", "#btn-sair-sim4", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair4").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim5 */
    $(document).on("click", "#btn-sair-sim5", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair5").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim8 */
    $(document).on("click", "#btn-sair-sim8", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair8").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim6 */
    $(document).on("click", "#btn-sair-sim6", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair6").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim7 */
    $(document).on("click", "#btn-sair-sim7", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair7").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-sim2 */
    $(document).on("click", "#btn-sair-sim2", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair2").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sis6x0 */
    $(document).on("click", "#btn-sis6x0", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-6x0"); 
         return false;
    });
    
        /* button  #btn-sis3x3 */
    $(document).on("click", "#btn-sis3x3", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-3x3"); 
         return false;
    });
    
        /* button  #btn-sis4x2s */
    $(document).on("click", "#btn-sis4x2s", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-4x2s"); 
         return false;
    });
    
        /* button  #btn-sis4x4i */
    $(document).on("click", "#btn-sis4x4i", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-4x2i"); 
         return false;
    });
    
        /* button  #btn-sis5x1 */
    $(document).on("click", "#btn-sis5x1", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-5x1"); 
         return false;
    });
    
        /* button  #btn-voltar-6x3 */
    
    
        /* button  #bt-6x3-recolhersd4 */
    $(document).on("click", "#bt-6x3-recolhersd4", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd4"));  
         return false;
    });
    
        /* button  #btn-voltar-6x3 */
    $(document).on("click", "#btn-voltar-6x3", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-home-6x3 */
    $(document).on("click", "#btn-home-6x3", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #bt-6x6-recolhersd5 */
    $(document).on("click", "#bt-6x6-recolhersd5", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sd5"));  
         return false;
    });
    
        /* button  #btn-voltar-6x6 */
    $(document).on("click", "#btn-voltar-6x6", function(evt)
    {
         /*global activate_page */
         activate_page("#menu-sis"); 
         return false;
    });
    
        /* button  #btn-home-6x6 */
    $(document).on("click", "#btn-home-6x6", function(evt)
    {
         /*global activate_page */
         activate_page("#home"); 
         return false;
    });
    
        /* button  #btn-sis6x3 */
    $(document).on("click", "#btn-sis6x3", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-6x3"); 
         return false;
    });
    
        /* button  #btn-sis6x6 */
    $(document).on("click", "#btn-sis6x6", function(evt)
    {
         /*global activate_page */
         activate_page("#sis-6x6"); 
         return false;
    });
    
        /* button  #btn-sair-6x3 */
    $(document).on("click", "#btn-sair-6x3", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair8").modal("toggle");  
         return false;
    });
    
        /* button  #btn-sair-6x6 */
    $(document).on("click", "#btn-sair-6x6", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-up-sair6").modal("toggle");  
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
