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
      };var element = document.getElementById("1d001712-52a4-49c5-8b7e-1c85e06f46dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d001712-52a4-49c5-8b7e-1c85e06f46dc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"c43cc68c-28bb-47c7-b36b-f896e7165244":{"roots":{"references":[{"attributes":{"items":[{"id":"35528","type":"LegendItem"}],"plot":{"id":"35481","subtype":"Figure","type":"Plot"}},"id":"35527","type":"Legend"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"35519","type":"GlyphRenderer"}]},"id":"35528","type":"LegendItem"},{"attributes":{"plot":null,"text":"simple line example"},"id":"35480","type":"Title"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35517","type":"Line"},{"attributes":{"data_source":{"id":"35516","type":"ColumnDataSource"},"glyph":{"id":"35517","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35518","type":"Line"},"selection_glyph":null,"view":{"id":"35520","type":"CDSView"}},"id":"35519","type":"GlyphRenderer"},{"attributes":{},"id":"35492","type":"BasicTicker"},{"attributes":{"below":[{"id":"35491","type":"LinearAxis"}],"left":[{"id":"35496","type":"LinearAxis"}],"renderers":[{"id":"35491","type":"LinearAxis"},{"id":"35495","type":"Grid"},{"id":"35496","type":"LinearAxis"},{"id":"35500","type":"Grid"},{"id":"35509","type":"BoxAnnotation"},{"id":"35527","type":"Legend"},{"id":"35519","type":"GlyphRenderer"}],"title":{"id":"35480","type":"Title"},"toolbar":{"id":"35507","type":"Toolbar"},"x_range":{"id":"35483","type":"DataRange1d"},"x_scale":{"id":"35487","type":"LinearScale"},"y_range":{"id":"35485","type":"DataRange1d"},"y_scale":{"id":"35489","type":"LinearScale"}},"id":"35481","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35506","type":"HelpTool"},{"attributes":{},"id":"35501","type":"PanTool"},{"attributes":{},"id":"35524","type":"BasicTickFormatter"},{"attributes":{"axis_label":"x","formatter":{"id":"35524","type":"BasicTickFormatter"},"plot":{"id":"35481","subtype":"Figure","type":"Plot"},"ticker":{"id":"35492","type":"BasicTicker"}},"id":"35491","type":"LinearAxis"},{"attributes":{"plot":{"id":"35481","subtype":"Figure","type":"Plot"},"ticker":{"id":"35492","type":"BasicTicker"}},"id":"35495","type":"Grid"},{"attributes":{},"id":"35502","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"35481","subtype":"Figure","type":"Plot"},"ticker":{"id":"35497","type":"BasicTicker"}},"id":"35500","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"35535","type":"Selection"},"selection_policy":{"id":"35534","type":"UnionRenderers"}},"id":"35516","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35518","type":"Line"},{"attributes":{"overlay":{"id":"35509","type":"BoxAnnotation"}},"id":"35503","type":"BoxZoomTool"},{"attributes":{},"id":"35534","type":"UnionRenderers"},{"attributes":{},"id":"35487","type":"LinearScale"},{"attributes":{"callback":null},"id":"35483","type":"DataRange1d"},{"attributes":{"callback":null},"id":"35485","type":"DataRange1d"},{"attributes":{},"id":"35522","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35501","type":"PanTool"},{"id":"35502","type":"WheelZoomTool"},{"id":"35503","type":"BoxZoomTool"},{"id":"35504","type":"SaveTool"},{"id":"35505","type":"ResetTool"},{"id":"35506","type":"HelpTool"}]},"id":"35507","type":"Toolbar"},{"attributes":{"source":{"id":"35516","type":"ColumnDataSource"}},"id":"35520","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35509","type":"BoxAnnotation"},{"attributes":{"axis_label":"y","formatter":{"id":"35522","type":"BasicTickFormatter"},"plot":{"id":"35481","subtype":"Figure","type":"Plot"},"ticker":{"id":"35497","type":"BasicTicker"}},"id":"35496","type":"LinearAxis"},{"attributes":{},"id":"35489","type":"LinearScale"},{"attributes":{},"id":"35504","type":"SaveTool"},{"attributes":{},"id":"35497","type":"BasicTicker"},{"attributes":{},"id":"35505","type":"ResetTool"},{"attributes":{},"id":"35535","type":"Selection"}],"root_ids":["35481"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c43cc68c-28bb-47c7-b36b-f896e7165244","roots":{"35481":"1d001712-52a4-49c5-8b7e-1c85e06f46dc"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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