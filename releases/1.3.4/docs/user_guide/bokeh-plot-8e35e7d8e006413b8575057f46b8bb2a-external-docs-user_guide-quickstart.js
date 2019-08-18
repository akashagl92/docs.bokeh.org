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
      };var element = document.getElementById("ecbc8283-688a-4528-8aae-1bbd0d03ab48");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ecbc8283-688a-4528-8aae-1bbd0d03ab48' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"506477bb-99fe-4bd3-9ebd-526d7e5b28ea":{"roots":{"references":[{"attributes":{},"id":"30959","type":"LinearScale"},{"attributes":{},"id":"31002","type":"Selection"},{"attributes":{},"id":"30971","type":"PanTool"},{"attributes":{"text":"simple line example"},"id":"30951","type":"Title"},{"attributes":{"axis_label":"x","formatter":{"id":"30993","type":"BasicTickFormatter"},"ticker":{"id":"30962","type":"BasicTicker"}},"id":"30961","type":"LinearAxis"},{"attributes":{},"id":"30972","type":"WheelZoomTool"},{"attributes":{},"id":"30962","type":"BasicTicker"},{"attributes":{},"id":"30993","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30953","type":"DataRange1d"},{"attributes":{"overlay":{"id":"30994","type":"BoxAnnotation"}},"id":"30973","type":"BoxZoomTool"},{"attributes":{},"id":"31003","type":"UnionRenderers"},{"attributes":{},"id":"30967","type":"BasicTicker"},{"attributes":{},"id":"30957","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30985","type":"Line"},{"attributes":{"ticker":{"id":"30962","type":"BasicTicker"}},"id":"30965","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30994","type":"BoxAnnotation"},{"attributes":{},"id":"30974","type":"SaveTool"},{"attributes":{"data_source":{"id":"30984","type":"ColumnDataSource"},"glyph":{"id":"30985","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30986","type":"Line"},"selection_glyph":null,"view":{"id":"30988","type":"CDSView"}},"id":"30987","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30986","type":"Line"},{"attributes":{"axis_label":"y","formatter":{"id":"30991","type":"BasicTickFormatter"},"ticker":{"id":"30967","type":"BasicTicker"}},"id":"30966","type":"LinearAxis"},{"attributes":{"source":{"id":"30984","type":"ColumnDataSource"}},"id":"30988","type":"CDSView"},{"attributes":{},"id":"30975","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"30967","type":"BasicTicker"}},"id":"30970","type":"Grid"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"30987","type":"GlyphRenderer"}]},"id":"30996","type":"LegendItem"},{"attributes":{"below":[{"id":"30961","type":"LinearAxis"}],"center":[{"id":"30965","type":"Grid"},{"id":"30970","type":"Grid"},{"id":"30995","type":"Legend"}],"left":[{"id":"30966","type":"LinearAxis"}],"renderers":[{"id":"30987","type":"GlyphRenderer"}],"title":{"id":"30951","type":"Title"},"toolbar":{"id":"30977","type":"Toolbar"},"x_range":{"id":"30953","type":"DataRange1d"},"x_scale":{"id":"30957","type":"LinearScale"},"y_range":{"id":"30955","type":"DataRange1d"},"y_scale":{"id":"30959","type":"LinearScale"}},"id":"30950","subtype":"Figure","type":"Plot"},{"attributes":{"items":[{"id":"30996","type":"LegendItem"}]},"id":"30995","type":"Legend"},{"attributes":{"callback":null},"id":"30955","type":"DataRange1d"},{"attributes":{},"id":"30991","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"31002","type":"Selection"},"selection_policy":{"id":"31003","type":"UnionRenderers"}},"id":"30984","type":"ColumnDataSource"},{"attributes":{},"id":"30976","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30971","type":"PanTool"},{"id":"30972","type":"WheelZoomTool"},{"id":"30973","type":"BoxZoomTool"},{"id":"30974","type":"SaveTool"},{"id":"30975","type":"ResetTool"},{"id":"30976","type":"HelpTool"}]},"id":"30977","type":"Toolbar"}],"root_ids":["30950"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"506477bb-99fe-4bd3-9ebd-526d7e5b28ea","roots":{"30950":"ecbc8283-688a-4528-8aae-1bbd0d03ab48"}}];
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
        
        
        }
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