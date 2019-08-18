(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("beac3583-a73f-45bd-a5a4-1fab80819f03");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'beac3583-a73f-45bd-a5a4-1fab80819f03' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"d10670b7-5219-4a66-a8bc-ee3e6db45b3f":{"roots":{"references":[{"attributes":{},"id":"61b44c2a-504e-4bce-a535-3c4509255f6d","type":"LinearScale"},{"attributes":{"plot":{"id":"ee607db6-9cc7-4983-a205-ce53b36763ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6a186d6-4993-4631-897f-a9cda92bf107","type":"BasicTicker"}},"id":"06b1631d-e900-47c6-8eaa-f12ef0e90dab","type":"Grid"},{"attributes":{"overlay":{"id":"4c300dd1-459e-4199-ac28-23a6c4ea6980","type":"BoxAnnotation"}},"id":"de671810-3634-43a7-b794-9d49799fb862","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"d76a1664-64f4-42e8-b131-af624993d973","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac2a0063-7998-4138-ac29-b2493ad9de84","type":"Line"},{"attributes":{"callback":null},"id":"ecd4a76b-168c-4e42-b586-061ea898f6ab","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"12835cb6-6c6f-4969-b725-bbea4ac7bb19","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4c300dd1-459e-4199-ac28-23a6c4ea6980","type":"BoxAnnotation"},{"attributes":{},"id":"dabbda68-4978-4dfb-8680-1a473e28b8b1","type":"LinearScale"},{"attributes":{},"id":"6aacf281-8ecf-4a59-b680-d46809f06d03","type":"WheelZoomTool"},{"attributes":{},"id":"e8008e40-41ea-4e35-b6e1-4782e31eb0a4","type":"PanTool"},{"attributes":{"formatter":{"id":"717e2fdb-fc5a-4584-8cc5-e2160236acba","type":"BasicTickFormatter"},"plot":{"id":"ee607db6-9cc7-4983-a205-ce53b36763ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6a186d6-4993-4631-897f-a9cda92bf107","type":"BasicTicker"}},"id":"0a8f544f-4c41-4de3-9d24-b7b1913930dc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"12835cb6-6c6f-4969-b725-bbea4ac7bb19","type":"ColumnDataSource"},"glyph":{"id":"ac2a0063-7998-4138-ac29-b2493ad9de84","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ddf00f0c-1b9f-4540-8eac-012689555ea1","type":"Line"},"selection_glyph":null,"view":{"id":"d353e6ef-e304-4c5b-ba3f-9f6b8d3a0c90","type":"CDSView"}},"id":"9ab37db6-f911-4e1b-991a-257dc1062678","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"23ca060f-e427-46bd-ac95-61cfa4ae3a21","type":"BasicTickFormatter"},"plot":{"id":"ee607db6-9cc7-4983-a205-ce53b36763ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1afb033-6307-4913-abd7-ac6e9620c2b6","type":"BasicTicker"}},"id":"94d51e78-cacc-4e5b-a9df-24d46896e3aa","type":"LinearAxis"},{"attributes":{},"id":"23ca060f-e427-46bd-ac95-61cfa4ae3a21","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"12835cb6-6c6f-4969-b725-bbea4ac7bb19","type":"ColumnDataSource"}},"id":"d353e6ef-e304-4c5b-ba3f-9f6b8d3a0c90","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"ee607db6-9cc7-4983-a205-ce53b36763ce","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1afb033-6307-4913-abd7-ac6e9620c2b6","type":"BasicTicker"}},"id":"312002e2-692e-4000-8ea8-47d404624a4d","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ddf00f0c-1b9f-4540-8eac-012689555ea1","type":"Line"},{"attributes":{},"id":"13acfa8d-6c5e-48db-a081-e9e462284370","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8008e40-41ea-4e35-b6e1-4782e31eb0a4","type":"PanTool"},{"id":"6aacf281-8ecf-4a59-b680-d46809f06d03","type":"WheelZoomTool"},{"id":"de671810-3634-43a7-b794-9d49799fb862","type":"BoxZoomTool"},{"id":"13acfa8d-6c5e-48db-a081-e9e462284370","type":"SaveTool"},{"id":"10eb946e-d860-44a5-8d3f-ec35b387704f","type":"ResetTool"},{"id":"48e27842-21af-479c-866b-9b8ca1ae2b5f","type":"HelpTool"}]},"id":"96ffa78e-6b3b-4a34-b766-c6519027fee0","type":"Toolbar"},{"attributes":{},"id":"48e27842-21af-479c-866b-9b8ca1ae2b5f","type":"HelpTool"},{"attributes":{},"id":"d6a186d6-4993-4631-897f-a9cda92bf107","type":"BasicTicker"},{"attributes":{},"id":"e1afb033-6307-4913-abd7-ac6e9620c2b6","type":"BasicTicker"},{"attributes":{},"id":"10eb946e-d860-44a5-8d3f-ec35b387704f","type":"ResetTool"},{"attributes":{"below":[{"id":"0a8f544f-4c41-4de3-9d24-b7b1913930dc","type":"LinearAxis"}],"left":[{"id":"94d51e78-cacc-4e5b-a9df-24d46896e3aa","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0a8f544f-4c41-4de3-9d24-b7b1913930dc","type":"LinearAxis"},{"id":"06b1631d-e900-47c6-8eaa-f12ef0e90dab","type":"Grid"},{"id":"94d51e78-cacc-4e5b-a9df-24d46896e3aa","type":"LinearAxis"},{"id":"312002e2-692e-4000-8ea8-47d404624a4d","type":"Grid"},{"id":"4c300dd1-459e-4199-ac28-23a6c4ea6980","type":"BoxAnnotation"},{"id":"9ab37db6-f911-4e1b-991a-257dc1062678","type":"GlyphRenderer"}],"title":{"id":"e02ce2d4-e690-4f90-a7e5-33fdd3b0fbd4","type":"Title"},"toolbar":{"id":"96ffa78e-6b3b-4a34-b766-c6519027fee0","type":"Toolbar"},"x_range":{"id":"ecd4a76b-168c-4e42-b586-061ea898f6ab","type":"DataRange1d"},"x_scale":{"id":"dabbda68-4978-4dfb-8680-1a473e28b8b1","type":"LinearScale"},"y_range":{"id":"d76a1664-64f4-42e8-b131-af624993d973","type":"DataRange1d"},"y_scale":{"id":"61b44c2a-504e-4bce-a535-3c4509255f6d","type":"LinearScale"}},"id":"ee607db6-9cc7-4983-a205-ce53b36763ce","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"717e2fdb-fc5a-4584-8cc5-e2160236acba","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"e02ce2d4-e690-4f90-a7e5-33fdd3b0fbd4","type":"Title"}],"root_ids":["ee607db6-9cc7-4983-a205-ce53b36763ce"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d10670b7-5219-4a66-a8bc-ee3e6db45b3f","elementid":"beac3583-a73f-45bd-a5a4-1fab80819f03","modelid":"ee607db6-9cc7-4983-a205-ce53b36763ce"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
