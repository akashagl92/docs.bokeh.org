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
      };var element = document.getElementById("0814d282-a862-4855-95d1-199216bedc4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0814d282-a862-4855-95d1-199216bedc4b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"2bebc009-c0ce-4e9c-a625-ad5766adb983":{"roots":{"references":[{"attributes":{},"id":"35476","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35488","type":"PanTool"},{"id":"35489","type":"WheelZoomTool"},{"id":"35490","type":"BoxZoomTool"},{"id":"35491","type":"SaveTool"},{"id":"35492","type":"ResetTool"},{"id":"35493","type":"HelpTool"}]},"id":"35494","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"35468","subtype":"Figure","type":"Plot"},"ticker":{"id":"35484","type":"BasicTicker"}},"id":"35487","type":"Grid"},{"attributes":{"items":[{"id":"35515","type":"LegendItem"}],"plot":{"id":"35468","subtype":"Figure","type":"Plot"}},"id":"35514","type":"Legend"},{"attributes":{"below":[{"id":"35478","type":"LinearAxis"}],"left":[{"id":"35483","type":"LinearAxis"}],"renderers":[{"id":"35478","type":"LinearAxis"},{"id":"35482","type":"Grid"},{"id":"35483","type":"LinearAxis"},{"id":"35487","type":"Grid"},{"id":"35496","type":"BoxAnnotation"},{"id":"35514","type":"Legend"},{"id":"35506","type":"GlyphRenderer"}],"title":{"id":"35467","type":"Title"},"toolbar":{"id":"35494","type":"Toolbar"},"x_range":{"id":"35470","type":"DataRange1d"},"x_scale":{"id":"35474","type":"LinearScale"},"y_range":{"id":"35472","type":"DataRange1d"},"y_scale":{"id":"35476","type":"LinearScale"}},"id":"35468","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35488","type":"PanTool"},{"attributes":{"axis_label":"y","formatter":{"id":"35512","type":"BasicTickFormatter"},"plot":{"id":"35468","subtype":"Figure","type":"Plot"},"ticker":{"id":"35484","type":"BasicTicker"}},"id":"35483","type":"LinearAxis"},{"attributes":{"source":{"id":"35503","type":"ColumnDataSource"}},"id":"35507","type":"CDSView"},{"attributes":{},"id":"35479","type":"BasicTicker"},{"attributes":{"plot":{"id":"35468","subtype":"Figure","type":"Plot"},"ticker":{"id":"35479","type":"BasicTicker"}},"id":"35482","type":"Grid"},{"attributes":{"axis_label":"x","formatter":{"id":"35510","type":"BasicTickFormatter"},"plot":{"id":"35468","subtype":"Figure","type":"Plot"},"ticker":{"id":"35479","type":"BasicTicker"}},"id":"35478","type":"LinearAxis"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"35506","type":"GlyphRenderer"}]},"id":"35515","type":"LegendItem"},{"attributes":{"overlay":{"id":"35496","type":"BoxAnnotation"}},"id":"35490","type":"BoxZoomTool"},{"attributes":{},"id":"35510","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35472","type":"DataRange1d"},{"attributes":{},"id":"35484","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"35523","type":"Selection"},"selection_policy":{"id":"35522","type":"UnionRenderers"}},"id":"35503","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"simple line example"},"id":"35467","type":"Title"},{"attributes":{"callback":null},"id":"35470","type":"DataRange1d"},{"attributes":{},"id":"35489","type":"WheelZoomTool"},{"attributes":{},"id":"35493","type":"HelpTool"},{"attributes":{},"id":"35512","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35504","type":"Line"},{"attributes":{},"id":"35522","type":"UnionRenderers"},{"attributes":{},"id":"35491","type":"SaveTool"},{"attributes":{},"id":"35523","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35496","type":"BoxAnnotation"},{"attributes":{},"id":"35492","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35505","type":"Line"},{"attributes":{"data_source":{"id":"35503","type":"ColumnDataSource"},"glyph":{"id":"35504","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35505","type":"Line"},"selection_glyph":null,"view":{"id":"35507","type":"CDSView"}},"id":"35506","type":"GlyphRenderer"},{"attributes":{},"id":"35474","type":"LinearScale"}],"root_ids":["35468"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"2bebc009-c0ce-4e9c-a625-ad5766adb983","roots":{"35468":"0814d282-a862-4855-95d1-199216bedc4b"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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