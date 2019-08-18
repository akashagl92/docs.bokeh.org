(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("6dcf4fc7-f9a1-4aa2-8e2c-ef30390d9929");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6dcf4fc7-f9a1-4aa2-8e2c-ef30390d9929' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"187e1ef5-db79-4bcb-b6e3-e717d7085cd8":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"},"ticker":{"id":"7877ada4-4d65-4450-86e7-535ccb398ea1","type":"BasicTicker"}},"id":"ca1028b8-5e98-4436-b3cb-5685990ecbcd","type":"Grid"},{"attributes":{"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"},"ticker":{"id":"169d2523-6aa7-43b6-956e-62be343659ce","type":"BasicTicker"}},"id":"8d894c87-e411-4e1d-b234-1190ac8fb65b","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4d0a608-4c38-41e8-a5fa-93378baf0ec4","type":"Line"},{"attributes":{"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"}},"id":"34fcab89-e0fa-44b8-8b10-2c16ed283b95","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"64ca4cf7-d1ea-41e3-bc47-c01a80d8df18","type":"Line"},{"attributes":{},"id":"e36b880c-c891-4429-b712-72074c8d22d1","type":"ToolEvents"},{"attributes":{"data_source":{"id":"3012a4bf-6fc7-4a44-aa48-95ad8cbc2743","type":"ColumnDataSource"},"glyph":{"id":"d4d0a608-4c38-41e8-a5fa-93378baf0ec4","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"64ca4cf7-d1ea-41e3-bc47-c01a80d8df18","type":"Line"},"selection_glyph":null},"id":"0a99623e-3035-4533-ad02-f21dd680ce73","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"}},"id":"f8d5f10e-4e00-46e9-ba56-2f88b33519a7","type":"SaveTool"},{"attributes":{"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"}},"id":"8a4d8433-8c06-47c8-8874-be4f4a56e33f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1da17755-9560-4ba3-8de1-d89d63cef1e2","type":"BoxAnnotation"},"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"}},"id":"8be5dbd2-cbdb-4418-a0a5-48ea82e7193a","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"dd06c345-6b39-4ba7-be70-10c826d95222","type":"DataRange1d"},{"attributes":{},"id":"a8998458-89c2-48a5-8be6-677aafc73e87","type":"BasicTickFormatter"},{"attributes":{},"id":"212cc4e6-8ebc-474b-8c7c-98d0c5839d61","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"fadb896a-816a-4217-8e89-85529795a976","type":"LinearAxis"}],"left":[{"id":"4d98f9e1-8844-476e-82c7-da4679d17059","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fadb896a-816a-4217-8e89-85529795a976","type":"LinearAxis"},{"id":"8d894c87-e411-4e1d-b234-1190ac8fb65b","type":"Grid"},{"id":"4d98f9e1-8844-476e-82c7-da4679d17059","type":"LinearAxis"},{"id":"ca1028b8-5e98-4436-b3cb-5685990ecbcd","type":"Grid"},{"id":"1da17755-9560-4ba3-8de1-d89d63cef1e2","type":"BoxAnnotation"},{"id":"0a99623e-3035-4533-ad02-f21dd680ce73","type":"GlyphRenderer"}],"title":{"id":"0767394d-5e8b-4c89-8674-a9db363eecac","type":"Title"},"tool_events":{"id":"e36b880c-c891-4429-b712-72074c8d22d1","type":"ToolEvents"},"toolbar":{"id":"69de1d43-c52b-4aa8-8647-778835ee18b7","type":"Toolbar"},"x_range":{"id":"dd06c345-6b39-4ba7-be70-10c826d95222","type":"DataRange1d"},"y_range":{"id":"2694ed78-fcd0-4df4-9416-49667d1402bd","type":"DataRange1d"}},"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"a8998458-89c2-48a5-8be6-677aafc73e87","type":"BasicTickFormatter"},"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"},"ticker":{"id":"7877ada4-4d65-4450-86e7-535ccb398ea1","type":"BasicTicker"}},"id":"4d98f9e1-8844-476e-82c7-da4679d17059","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1da17755-9560-4ba3-8de1-d89d63cef1e2","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"line"},"id":"0767394d-5e8b-4c89-8674-a9db363eecac","type":"Title"},{"attributes":{"callback":null},"id":"2694ed78-fcd0-4df4-9416-49667d1402bd","type":"DataRange1d"},{"attributes":{},"id":"7877ada4-4d65-4450-86e7-535ccb398ea1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"212cc4e6-8ebc-474b-8c7c-98d0c5839d61","type":"BasicTickFormatter"},"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"},"ticker":{"id":"169d2523-6aa7-43b6-956e-62be343659ce","type":"BasicTicker"}},"id":"fadb896a-816a-4217-8e89-85529795a976","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"3012a4bf-6fc7-4a44-aa48-95ad8cbc2743","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"}},"id":"7f275536-6f38-4e6e-8648-cd0f8b42b9c8","type":"PanTool"},{"attributes":{},"id":"169d2523-6aa7-43b6-956e-62be343659ce","type":"BasicTicker"},{"attributes":{"plot":{"id":"b5e05677-850c-4663-8ab7-d74a23ac15be","subtype":"Figure","type":"Plot"}},"id":"241b911e-e643-4ebb-bbba-3a7c58aa05a6","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f275536-6f38-4e6e-8648-cd0f8b42b9c8","type":"PanTool"},{"id":"8a4d8433-8c06-47c8-8874-be4f4a56e33f","type":"WheelZoomTool"},{"id":"8be5dbd2-cbdb-4418-a0a5-48ea82e7193a","type":"BoxZoomTool"},{"id":"f8d5f10e-4e00-46e9-ba56-2f88b33519a7","type":"SaveTool"},{"id":"34fcab89-e0fa-44b8-8b10-2c16ed283b95","type":"ResetTool"},{"id":"241b911e-e643-4ebb-bbba-3a7c58aa05a6","type":"HelpTool"}]},"id":"69de1d43-c52b-4aa8-8647-778835ee18b7","type":"Toolbar"}],"root_ids":["b5e05677-850c-4663-8ab7-d74a23ac15be"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"187e1ef5-db79-4bcb-b6e3-e717d7085cd8","elementid":"6dcf4fc7-f9a1-4aa2-8e2c-ef30390d9929","modelid":"b5e05677-850c-4663-8ab7-d74a23ac15be"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
