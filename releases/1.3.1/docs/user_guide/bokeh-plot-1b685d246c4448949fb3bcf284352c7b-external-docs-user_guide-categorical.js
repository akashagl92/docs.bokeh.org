(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("75944572-3f39-426a-8568-99867b10797e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '75944572-3f39-426a-8568-99867b10797e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"f7bc2a68-b205-46bb-beb2-1af18897bb1e":{"roots":{"references":[{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"20059","type":"CategoricalColorMapper"},{"attributes":{},"id":"20046","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20046","type":"PanTool"},{"id":"20047","type":"WheelZoomTool"},{"id":"20048","type":"BoxZoomTool"},{"id":"20049","type":"SaveTool"},{"id":"20050","type":"ResetTool"},{"id":"20051","type":"HelpTool"}]},"id":"20052","type":"Toolbar"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20038","type":"CategoricalTicker"}},"id":"20040","type":"Grid"},{"attributes":{},"id":"20051","type":"HelpTool"},{"attributes":{"source":{"id":"20025","type":"ColumnDataSource"}},"id":"20064","type":"CDSView"},{"attributes":{"below":[{"id":"20037","type":"CategoricalAxis"}],"center":[{"id":"20040","type":"Grid"},{"id":"20045","type":"Grid"},{"id":"20071","type":"Legend"}],"left":[{"id":"20041","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20063","type":"GlyphRenderer"}],"title":{"id":"20027","type":"Title"},"toolbar":{"id":"20052","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20029","type":"FactorRange"},"x_scale":{"id":"20033","type":"CategoricalScale"},"y_range":{"id":"20031","type":"DataRange1d"},"y_scale":{"id":"20035","type":"LinearScale"}},"id":"20026","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":9,"start":0},"id":"20031","type":"DataRange1d"},{"attributes":{},"id":"20042","type":"BasicTicker"},{"attributes":{"formatter":{"id":"20066","type":"BasicTickFormatter"},"ticker":{"id":"20042","type":"BasicTicker"}},"id":"20041","type":"LinearAxis"},{"attributes":{},"id":"20050","type":"ResetTool"},{"attributes":{},"id":"20033","type":"CategoricalScale"},{"attributes":{},"id":"20066","type":"BasicTickFormatter"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"20063","type":"GlyphRenderer"}]},"id":"20072","type":"LegendItem"},{"attributes":{"dimension":1,"ticker":{"id":"20042","type":"BasicTicker"}},"id":"20045","type":"Grid"},{"attributes":{"formatter":{"id":"20068","type":"CategoricalTickFormatter"},"ticker":{"id":"20038","type":"CategoricalTicker"}},"id":"20037","type":"CategoricalAxis"},{"attributes":{},"id":"20038","type":"CategoricalTicker"},{"attributes":{},"id":"20035","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20062","type":"VBar"},{"attributes":{},"id":"20047","type":"WheelZoomTool"},{"attributes":{},"id":"20049","type":"SaveTool"},{"attributes":{"overlay":{"id":"20070","type":"BoxAnnotation"}},"id":"20048","type":"BoxZoomTool"},{"attributes":{},"id":"20079","type":"Selection"},{"attributes":{"items":[{"id":"20072","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"20071","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20070","type":"BoxAnnotation"},{"attributes":{},"id":"20080","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"20059","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"20061","type":"VBar"},{"attributes":{},"id":"20068","type":"CategoricalTickFormatter"},{"attributes":{"text":"Fruit Counts"},"id":"20027","type":"Title"},{"attributes":{"data_source":{"id":"20025","type":"ColumnDataSource"},"glyph":{"id":"20061","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20062","type":"VBar"},"selection_glyph":null,"view":{"id":"20064","type":"CDSView"}},"id":"20063","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20079","type":"Selection"},"selection_policy":{"id":"20080","type":"UnionRenderers"}},"id":"20025","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"20029","type":"FactorRange"}],"root_ids":["20026"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"f7bc2a68-b205-46bb-beb2-1af18897bb1e","roots":{"20026":"75944572-3f39-426a-8568-99867b10797e"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();