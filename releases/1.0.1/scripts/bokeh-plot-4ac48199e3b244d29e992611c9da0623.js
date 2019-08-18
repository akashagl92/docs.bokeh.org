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
      };var element = document.getElementById("9048bfc2-b28a-4aa7-9a00-76cdac0bb1b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9048bfc2-b28a-4aa7-9a00-76cdac0bb1b9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"bdce51ef-9bdb-477b-a0e0-715e3167ae71":{"roots":{"references":[{"attributes":{},"id":"19484","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"19503","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19505","type":"VBar"},{"attributes":{},"id":"19524","type":"UnionRenderers"},{"attributes":{},"id":"19480","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19523","type":"Selection"},"selection_policy":{"id":"19524","type":"UnionRenderers"}},"id":"19467","type":"ColumnDataSource"},{"attributes":{},"id":"19489","type":"WheelZoomTool"},{"attributes":{},"id":"19511","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"19511","type":"CategoricalTickFormatter"},"plot":{"id":"19469","subtype":"Figure","type":"Plot"},"ticker":{"id":"19480","type":"CategoricalTicker"}},"id":"19479","type":"CategoricalAxis"},{"attributes":{},"id":"19493","type":"HelpTool"},{"attributes":{"items":[{"id":"19516","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"19469","subtype":"Figure","type":"Plot"}},"id":"19515","type":"Legend"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"19469","subtype":"Figure","type":"Plot"},"ticker":{"id":"19480","type":"CategoricalTicker"}},"id":"19482","type":"Grid"},{"attributes":{},"id":"19513","type":"BasicTickFormatter"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"19503","type":"CategoricalColorMapper"},{"attributes":{},"id":"19492","type":"ResetTool"},{"attributes":{},"id":"19475","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"19468","type":"Title"},{"attributes":{},"id":"19523","type":"Selection"},{"attributes":{},"id":"19477","type":"LinearScale"},{"attributes":{"overlay":{"id":"19496","type":"BoxAnnotation"}},"id":"19490","type":"BoxZoomTool"},{"attributes":{"source":{"id":"19467","type":"ColumnDataSource"}},"id":"19508","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"19507","type":"GlyphRenderer"}]},"id":"19516","type":"LegendItem"},{"attributes":{"data_source":{"id":"19467","type":"ColumnDataSource"},"glyph":{"id":"19505","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19506","type":"VBar"},"selection_glyph":null,"view":{"id":"19508","type":"CDSView"}},"id":"19507","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":9,"start":0},"id":"19473","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19488","type":"PanTool"},{"id":"19489","type":"WheelZoomTool"},{"id":"19490","type":"BoxZoomTool"},{"id":"19491","type":"SaveTool"},{"id":"19492","type":"ResetTool"},{"id":"19493","type":"HelpTool"}]},"id":"19494","type":"Toolbar"},{"attributes":{},"id":"19488","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19506","type":"VBar"},{"attributes":{"formatter":{"id":"19513","type":"BasicTickFormatter"},"plot":{"id":"19469","subtype":"Figure","type":"Plot"},"ticker":{"id":"19484","type":"BasicTicker"}},"id":"19483","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19471","type":"FactorRange"},{"attributes":{"below":[{"id":"19479","type":"CategoricalAxis"}],"left":[{"id":"19483","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19479","type":"CategoricalAxis"},{"id":"19482","type":"Grid"},{"id":"19483","type":"LinearAxis"},{"id":"19487","type":"Grid"},{"id":"19496","type":"BoxAnnotation"},{"id":"19515","type":"Legend"},{"id":"19507","type":"GlyphRenderer"}],"title":{"id":"19468","type":"Title"},"toolbar":{"id":"19494","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19471","type":"FactorRange"},"x_scale":{"id":"19475","type":"CategoricalScale"},"y_range":{"id":"19473","type":"DataRange1d"},"y_scale":{"id":"19477","type":"LinearScale"}},"id":"19469","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19491","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19496","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"19469","subtype":"Figure","type":"Plot"},"ticker":{"id":"19484","type":"BasicTicker"}},"id":"19487","type":"Grid"}],"root_ids":["19469"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"bdce51ef-9bdb-477b-a0e0-715e3167ae71","roots":{"19469":"9048bfc2-b28a-4aa7-9a00-76cdac0bb1b9"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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