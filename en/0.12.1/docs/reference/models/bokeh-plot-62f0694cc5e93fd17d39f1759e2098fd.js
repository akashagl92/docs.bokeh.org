document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("3aad1ee8-aad3-41ef-8e73-8133ee5d9500");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3aad1ee8-aad3-41ef-8e73-8133ee5d9500' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"7ce28693-111c-4801-a579-e9bef2ebf00f":{"roots":{"references":[{"attributes":{"callback":null},"id":"bd616941-7c8f-4319-84d0-cf012b438177","type":"DataRange1d"},{"attributes":{"below":[{"id":"64643448-a882-4533-b622-e63a05f17c8e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"209d2b93-4100-439f-a13f-9e6b66a3d8af","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c35ba132-6c5f-479c-a725-94fc3b35ecba","type":"GlyphRenderer"},{"id":"64643448-a882-4533-b622-e63a05f17c8e","type":"LinearAxis"},{"id":"209d2b93-4100-439f-a13f-9e6b66a3d8af","type":"LinearAxis"},{"id":"56d262d1-d050-47d3-a657-a945389f63ab","type":"Grid"},{"id":"b70fce53-cbb0-487c-b1af-1205dbe2cf59","type":"Grid"}],"title":null,"tool_events":{"id":"18c14961-abef-49c4-9368-42be5aa1d9d7","type":"ToolEvents"},"toolbar":{"id":"ce50afa3-2495-46f4-a953-da7222997f77","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"866e308c-488e-4c0b-b6a5-2bd04b89209d","type":"DataRange1d"},"y_range":{"id":"bd616941-7c8f-4319-84d0-cf012b438177","type":"DataRange1d"}},"id":"0624ce75-54b5-495e-a27f-ed481eca173d","type":"Plot"},{"attributes":{},"id":"07a983fa-488b-45d1-a70f-31ba1910284c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0624ce75-54b5-495e-a27f-ed481eca173d","type":"Plot"},"ticker":{"id":"7f0f536b-e9fc-42b5-906e-61450ca01d2f","type":"BasicTicker"}},"id":"56d262d1-d050-47d3-a657-a945389f63ab","type":"Grid"},{"attributes":{},"id":"effc5d6d-51c4-437b-b8f6-e17ba79b0576","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9d477b50-813d-4877-aa56-8555c864954c","type":"BasicTickFormatter"},"plot":{"id":"0624ce75-54b5-495e-a27f-ed481eca173d","type":"Plot"},"ticker":{"id":"7f0f536b-e9fc-42b5-906e-61450ca01d2f","type":"BasicTicker"}},"id":"64643448-a882-4533-b622-e63a05f17c8e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"e8bc6952-8aaf-4813-9a66-4e880c88bde6","type":"ColumnDataSource"},"glyph":{"id":"a20f41d2-4c16-4a62-b72e-7b23ab588f56","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c35ba132-6c5f-479c-a725-94fc3b35ecba","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"a20f41d2-4c16-4a62-b72e-7b23ab588f56","type":"Annulus"},{"attributes":{},"id":"7f0f536b-e9fc-42b5-906e-61450ca01d2f","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0624ce75-54b5-495e-a27f-ed481eca173d","type":"Plot"},"ticker":{"id":"effc5d6d-51c4-437b-b8f6-e17ba79b0576","type":"BasicTicker"}},"id":"b70fce53-cbb0-487c-b1af-1205dbe2cf59","type":"Grid"},{"attributes":{},"id":"18c14961-abef-49c4-9368-42be5aa1d9d7","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ce50afa3-2495-46f4-a953-da7222997f77","type":"Toolbar"},{"attributes":{"callback":null},"id":"866e308c-488e-4c0b-b6a5-2bd04b89209d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"07a983fa-488b-45d1-a70f-31ba1910284c","type":"BasicTickFormatter"},"plot":{"id":"0624ce75-54b5-495e-a27f-ed481eca173d","type":"Plot"},"ticker":{"id":"effc5d6d-51c4-437b-b8f6-e17ba79b0576","type":"BasicTicker"}},"id":"209d2b93-4100-439f-a13f-9e6b66a3d8af","type":"LinearAxis"},{"attributes":{},"id":"9d477b50-813d-4877-aa56-8555c864954c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"e8bc6952-8aaf-4813-9a66-4e880c88bde6","type":"ColumnDataSource"}],"root_ids":["0624ce75-54b5-495e-a27f-ed481eca173d"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"7ce28693-111c-4801-a579-e9bef2ebf00f","elementid":"3aad1ee8-aad3-41ef-8e73-8133ee5d9500","modelid":"0624ce75-54b5-495e-a27f-ed481eca173d"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
        }
      ];
    
      function run_inline_js() {
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});