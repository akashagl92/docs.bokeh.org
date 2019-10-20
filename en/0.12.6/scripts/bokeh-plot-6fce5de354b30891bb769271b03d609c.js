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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("2b0ebba3-4af8-423d-ae18-a75ffe83218c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b0ebba3-4af8-423d-ae18-a75ffe83218c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"daa4560a-8878-4242-9bb7-d7e9d7038821":{"roots":{"references":[{"attributes":{"below":[{"id":"61841995-a70a-40a7-9c9e-a05ae87337ca","type":"LinearAxis"}],"left":[{"id":"fc4d3872-34a6-46b6-b8c8-6b1539dd126e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"61841995-a70a-40a7-9c9e-a05ae87337ca","type":"LinearAxis"},{"id":"e2c91186-02ab-4bce-ad1e-1b6df79abd97","type":"Grid"},{"id":"fc4d3872-34a6-46b6-b8c8-6b1539dd126e","type":"LinearAxis"},{"id":"e1e2699b-5f49-4eb0-b1ae-f9d5b727fdab","type":"Grid"},{"id":"4c12d951-6a1f-4dc8-a379-55b9ce87eb68","type":"BoxAnnotation"},{"id":"41115153-4297-409e-b0a0-e91e57b004cf","type":"GlyphRenderer"}],"title":{"id":"163d34a1-3f02-4825-a1bd-2dad69b4c7ff","type":"Title"},"tool_events":{"id":"77453efd-1d41-4746-b59c-6eb9863ce3e9","type":"ToolEvents"},"toolbar":{"id":"46c826cf-1233-4029-bfea-a23e7c5a8110","type":"Toolbar"},"x_range":{"id":"451d1620-bd6a-4ab4-bb38-c915d1d5935b","type":"DataRange1d"},"x_scale":{"id":"db0bb4d4-60de-4c66-8023-b96f87101a56","type":"LinearScale"},"y_range":{"id":"174fdb7d-d5d3-476b-a1aa-e7c611464362","type":"DataRange1d"},"y_scale":{"id":"79a9bc71-8aef-450e-a38c-8ef3fb6e6ee1","type":"LinearScale"}},"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"}},"id":"ed848b5e-ce82-445a-be02-392d408ec2bc","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed848b5e-ce82-445a-be02-392d408ec2bc","type":"PanTool"},{"id":"da9fc595-7483-4844-9e87-221d47d3063a","type":"WheelZoomTool"},{"id":"6892f9c5-1910-483c-b621-30430307f4d9","type":"BoxZoomTool"},{"id":"43fd52af-222e-46be-9e2e-5b7aefc7710e","type":"SaveTool"},{"id":"b4d80bea-1db7-405d-ae7e-192a80ee796c","type":"ResetTool"},{"id":"987c3ead-8648-4a27-9a2a-58d62d8023f1","type":"HelpTool"}]},"id":"46c826cf-1233-4029-bfea-a23e7c5a8110","type":"Toolbar"},{"attributes":{"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"}},"id":"b4d80bea-1db7-405d-ae7e-192a80ee796c","type":"ResetTool"},{"attributes":{},"id":"77453efd-1d41-4746-b59c-6eb9863ce3e9","type":"ToolEvents"},{"attributes":{},"id":"49280e56-8f9e-40ed-84cb-b9ee32f628f7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f28bffc2-ee5a-4718-8044-878ea8fe881a","type":"BasicTickFormatter"},"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"},"ticker":{"id":"c606ed9b-c160-4b5c-aa3b-2ea2c63792b9","type":"BasicTicker"}},"id":"61841995-a70a-40a7-9c9e-a05ae87337ca","type":"LinearAxis"},{"attributes":{"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"}},"id":"43fd52af-222e-46be-9e2e-5b7aefc7710e","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4c12d951-6a1f-4dc8-a379-55b9ce87eb68","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"}},"id":"987c3ead-8648-4a27-9a2a-58d62d8023f1","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"},"ticker":{"id":"49280e56-8f9e-40ed-84cb-b9ee32f628f7","type":"BasicTicker"}},"id":"e1e2699b-5f49-4eb0-b1ae-f9d5b727fdab","type":"Grid"},{"attributes":{"formatter":{"id":"1204a9a7-d307-4016-a0d2-237039905e59","type":"BasicTickFormatter"},"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"},"ticker":{"id":"49280e56-8f9e-40ed-84cb-b9ee32f628f7","type":"BasicTicker"}},"id":"fc4d3872-34a6-46b6-b8c8-6b1539dd126e","type":"LinearAxis"},{"attributes":{},"id":"f28bffc2-ee5a-4718-8044-878ea8fe881a","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"300be32e-345a-4e10-b16d-e3a64e25b9a8","type":"Quad"},{"attributes":{"data_source":{"id":"6540361f-a8b9-4343-a086-52065f7a93c2","type":"ColumnDataSource"},"glyph":{"id":"300be32e-345a-4e10-b16d-e3a64e25b9a8","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"54f11b4e-ca6b-4d74-b5e2-26ba316c8377","type":"Quad"},"selection_glyph":null},"id":"41115153-4297-409e-b0a0-e91e57b004cf","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"163d34a1-3f02-4825-a1bd-2dad69b4c7ff","type":"Title"},{"attributes":{},"id":"79a9bc71-8aef-450e-a38c-8ef3fb6e6ee1","type":"LinearScale"},{"attributes":{},"id":"db0bb4d4-60de-4c66-8023-b96f87101a56","type":"LinearScale"},{"attributes":{},"id":"c606ed9b-c160-4b5c-aa3b-2ea2c63792b9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"174fdb7d-d5d3-476b-a1aa-e7c611464362","type":"DataRange1d"},{"attributes":{"overlay":{"id":"4c12d951-6a1f-4dc8-a379-55b9ce87eb68","type":"BoxAnnotation"},"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"}},"id":"6892f9c5-1910-483c-b621-30430307f4d9","type":"BoxZoomTool"},{"attributes":{},"id":"1204a9a7-d307-4016-a0d2-237039905e59","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"}},"id":"da9fc595-7483-4844-9e87-221d47d3063a","type":"WheelZoomTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"54f11b4e-ca6b-4d74-b5e2-26ba316c8377","type":"Quad"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"6540361f-a8b9-4343-a086-52065f7a93c2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78","subtype":"Figure","type":"Plot"},"ticker":{"id":"c606ed9b-c160-4b5c-aa3b-2ea2c63792b9","type":"BasicTicker"}},"id":"e2c91186-02ab-4bce-ad1e-1b6df79abd97","type":"Grid"},{"attributes":{"callback":null},"id":"451d1620-bd6a-4ab4-bb38-c915d1d5935b","type":"DataRange1d"}],"root_ids":["3d2c9421-0207-4c45-bcb4-a2c78bed4c78"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"daa4560a-8878-4242-9bb7-d7e9d7038821","elementid":"2b0ebba3-4af8-423d-ae18-a75ffe83218c","modelid":"3d2c9421-0207-4c45-bcb4-a2c78bed4c78"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
