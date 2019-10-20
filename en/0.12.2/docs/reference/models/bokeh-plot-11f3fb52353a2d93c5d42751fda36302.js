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
      };var element = document.getElementById("fce344c3-9af2-4600-b88e-7473d5cdfc6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fce344c3-9af2-4600-b88e-7473d5cdfc6d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"515fc6a4-785b-455f-9f5a-87ff7c23fff9":{"roots":{"references":[{"attributes":{"below":[{"id":"ba70b496-33d5-40f8-8bbb-54c35c0087b3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"24358605-757f-4790-8ae6-d895c1469177","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"0d85d040-401b-4b40-8cf7-1e2cea7a34b3","type":"GlyphRenderer"},{"id":"ba70b496-33d5-40f8-8bbb-54c35c0087b3","type":"LinearAxis"},{"id":"24358605-757f-4790-8ae6-d895c1469177","type":"LinearAxis"},{"id":"fde3c3c2-e696-4593-a63f-8e1ed7064093","type":"Grid"},{"id":"0a1c56e6-5e4d-497e-bdb7-2415bf98eedb","type":"Grid"}],"title":null,"tool_events":{"id":"2c1ffb7e-0e77-4c71-bab1-37c6e57cef7a","type":"ToolEvents"},"toolbar":{"id":"b82067dc-c582-46b9-ac17-e1aa7a7fbeaa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11e04d9a-94e5-411f-9221-f0938b9f69cb","type":"DataRange1d"},"y_range":{"id":"d805b2c2-f485-4132-b0d5-a550233248ec","type":"DataRange1d"}},"id":"c864f7b4-5d49-41b0-b7af-6f7b61ddb095","type":"Plot"},{"attributes":{"plot":{"id":"c864f7b4-5d49-41b0-b7af-6f7b61ddb095","type":"Plot"},"ticker":{"id":"56762a76-c700-4f16-9b50-751bb072d12f","type":"BasicTicker"}},"id":"fde3c3c2-e696-4593-a63f-8e1ed7064093","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b82067dc-c582-46b9-ac17-e1aa7a7fbeaa","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"c864f7b4-5d49-41b0-b7af-6f7b61ddb095","type":"Plot"},"ticker":{"id":"0b0ae1f4-e7fc-4674-834d-9b6436bead36","type":"BasicTicker"}},"id":"0a1c56e6-5e4d-497e-bdb7-2415bf98eedb","type":"Grid"},{"attributes":{},"id":"2c1ffb7e-0e77-4c71-bab1-37c6e57cef7a","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"03ea4eed-8f5a-43d8-b033-97e3e88f1e31","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"03ea4eed-8f5a-43d8-b033-97e3e88f1e31","type":"ColumnDataSource"},"glyph":{"id":"7e9241bd-a7cf-4b2d-97bd-b39212b26f1f","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0d85d040-401b-4b40-8cf7-1e2cea7a34b3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d805b2c2-f485-4132-b0d5-a550233248ec","type":"DataRange1d"},{"attributes":{},"id":"56762a76-c700-4f16-9b50-751bb072d12f","type":"BasicTicker"},{"attributes":{},"id":"f3be85d5-f155-40c3-a3dd-73c7f437991e","type":"BasicTickFormatter"},{"attributes":{},"id":"f1134046-ff67-44bc-9f5f-98b1b58101a0","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f1134046-ff67-44bc-9f5f-98b1b58101a0","type":"BasicTickFormatter"},"plot":{"id":"c864f7b4-5d49-41b0-b7af-6f7b61ddb095","type":"Plot"},"ticker":{"id":"0b0ae1f4-e7fc-4674-834d-9b6436bead36","type":"BasicTicker"}},"id":"24358605-757f-4790-8ae6-d895c1469177","type":"LinearAxis"},{"attributes":{},"id":"0b0ae1f4-e7fc-4674-834d-9b6436bead36","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f3be85d5-f155-40c3-a3dd-73c7f437991e","type":"BasicTickFormatter"},"plot":{"id":"c864f7b4-5d49-41b0-b7af-6f7b61ddb095","type":"Plot"},"ticker":{"id":"56762a76-c700-4f16-9b50-751bb072d12f","type":"BasicTicker"}},"id":"ba70b496-33d5-40f8-8bbb-54c35c0087b3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11e04d9a-94e5-411f-9221-f0938b9f69cb","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e9241bd-a7cf-4b2d-97bd-b39212b26f1f","type":"X"}],"root_ids":["c864f7b4-5d49-41b0-b7af-6f7b61ddb095"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"515fc6a4-785b-455f-9f5a-87ff7c23fff9","elementid":"fce344c3-9af2-4600-b88e-7473d5cdfc6d","modelid":"c864f7b4-5d49-41b0-b7af-6f7b61ddb095"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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