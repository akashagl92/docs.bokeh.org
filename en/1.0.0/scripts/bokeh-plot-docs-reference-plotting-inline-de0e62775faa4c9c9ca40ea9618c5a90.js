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
      };var element = document.getElementById("e4c6e522-1fb8-48c7-a5bf-93de7efe38bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e4c6e522-1fb8-48c7-a5bf-93de7efe38bc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"5db6f320-c964-447f-ac6a-a8f4b4ec22b9":{"roots":{"references":[{"attributes":{"callback":null},"id":"33075","type":"DataRange1d"},{"attributes":{"formatter":{"id":"33116","type":"BasicTickFormatter"},"plot":{"id":"33074","subtype":"Figure","type":"Plot"},"ticker":{"id":"33084","type":"BasicTicker"}},"id":"33083","type":"LinearAxis"},{"attributes":{"plot":{"id":"33074","subtype":"Figure","type":"Plot"},"ticker":{"id":"33084","type":"BasicTicker"}},"id":"33087","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"33074","subtype":"Figure","type":"Plot"},"ticker":{"id":"33089","type":"BasicTicker"}},"id":"33092","type":"Grid"},{"attributes":{},"id":"33079","type":"LinearScale"},{"attributes":{},"id":"33120","type":"Selection"},{"attributes":{},"id":"33098","type":"HelpTool"},{"attributes":{},"id":"33084","type":"BasicTicker"},{"attributes":{"overlay":{"id":"33101","type":"BoxAnnotation"}},"id":"33095","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33093","type":"PanTool"},{"id":"33094","type":"WheelZoomTool"},{"id":"33095","type":"BoxZoomTool"},{"id":"33096","type":"SaveTool"},{"id":"33097","type":"ResetTool"},{"id":"33098","type":"HelpTool"}]},"id":"33099","type":"Toolbar"},{"attributes":{},"id":"33121","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33110","type":"Ellipse"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33109","type":"Ellipse"},{"attributes":{"callback":null},"id":"33077","type":"DataRange1d"},{"attributes":{},"id":"33097","type":"ResetTool"},{"attributes":{"formatter":{"id":"33118","type":"BasicTickFormatter"},"plot":{"id":"33074","subtype":"Figure","type":"Plot"},"ticker":{"id":"33089","type":"BasicTicker"}},"id":"33088","type":"LinearAxis"},{"attributes":{},"id":"33116","type":"BasicTickFormatter"},{"attributes":{},"id":"33094","type":"WheelZoomTool"},{"attributes":{},"id":"33081","type":"LinearScale"},{"attributes":{},"id":"33096","type":"SaveTool"},{"attributes":{"source":{"id":"33108","type":"ColumnDataSource"}},"id":"33112","type":"CDSView"},{"attributes":{"data_source":{"id":"33108","type":"ColumnDataSource"},"glyph":{"id":"33109","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33110","type":"Ellipse"},"selection_glyph":null,"view":{"id":"33112","type":"CDSView"}},"id":"33111","type":"GlyphRenderer"},{"attributes":{},"id":"33118","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33120","type":"Selection"},"selection_policy":{"id":"33121","type":"UnionRenderers"}},"id":"33108","type":"ColumnDataSource"},{"attributes":{},"id":"33093","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"33114","type":"Title"},{"attributes":{"below":[{"id":"33083","type":"LinearAxis"}],"left":[{"id":"33088","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33083","type":"LinearAxis"},{"id":"33087","type":"Grid"},{"id":"33088","type":"LinearAxis"},{"id":"33092","type":"Grid"},{"id":"33101","type":"BoxAnnotation"},{"id":"33111","type":"GlyphRenderer"}],"title":{"id":"33114","type":"Title"},"toolbar":{"id":"33099","type":"Toolbar"},"x_range":{"id":"33075","type":"DataRange1d"},"x_scale":{"id":"33079","type":"LinearScale"},"y_range":{"id":"33077","type":"DataRange1d"},"y_scale":{"id":"33081","type":"LinearScale"}},"id":"33074","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33101","type":"BoxAnnotation"},{"attributes":{},"id":"33089","type":"BasicTicker"}],"root_ids":["33074"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"5db6f320-c964-447f-ac6a-a8f4b4ec22b9","roots":{"33074":"e4c6e522-1fb8-48c7-a5bf-93de7efe38bc"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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