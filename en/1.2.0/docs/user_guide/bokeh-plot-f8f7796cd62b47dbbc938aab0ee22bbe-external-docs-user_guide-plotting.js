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
      };var element = document.getElementById("a9e4fe8c-57cc-4102-a3b7-e1dc559a922c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a9e4fe8c-57cc-4102-a3b7-e1dc559a922c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"f11133cd-b229-42d8-ab06-5969a1d79440":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.8},"left":{"expr":{"id":"28408","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"28409","type":"Stack"}},"y":{"field":"y"}},"id":"28414","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28430","type":"BoxAnnotation"},{"attributes":{},"id":"28426","type":"BasicTickFormatter"},{"attributes":{},"id":"28386","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28395","type":"PanTool"},{"id":"28396","type":"WheelZoomTool"},{"id":"28397","type":"BoxZoomTool"},{"id":"28398","type":"SaveTool"},{"id":"28399","type":"ResetTool"},{"id":"28400","type":"HelpTool"}]},"id":"28401","type":"Toolbar"},{"attributes":{},"id":"28391","type":"BasicTicker"},{"attributes":{},"id":"28398","type":"SaveTool"},{"attributes":{},"id":"28428","type":"Selection"},{"attributes":{"fill_color":{"value":"grey"},"height":{"value":0.8},"left":{"expr":{"id":"28408","type":"Stack"}},"line_color":{"value":"grey"},"right":{"expr":{"id":"28409","type":"Stack"}},"y":{"field":"y"}},"id":"28413","type":"HBar"},{"attributes":{"fields":["x1","x2"]},"id":"28411","type":"Stack"},{"attributes":{"fields":["x1"]},"id":"28409","type":"Stack"},{"attributes":{"formatter":{"id":"28426","type":"BasicTickFormatter"},"ticker":{"id":"28386","type":"BasicTicker"}},"id":"28385","type":"LinearAxis"},{"attributes":{},"id":"28381","type":"LinearScale"},{"attributes":{"text":""},"id":"28422","type":"Title"},{"attributes":{},"id":"28400","type":"HelpTool"},{"attributes":{"fill_color":{"value":"lightgrey"},"height":{"value":0.8},"left":{"expr":{"id":"28410","type":"Stack"}},"line_color":{"value":"lightgrey"},"right":{"expr":{"id":"28411","type":"Stack"}},"y":{"field":"y"}},"id":"28418","type":"HBar"},{"attributes":{"formatter":{"id":"28424","type":"BasicTickFormatter"},"ticker":{"id":"28391","type":"BasicTicker"}},"id":"28390","type":"LinearAxis"},{"attributes":{"ticker":{"id":"28386","type":"BasicTicker"}},"id":"28389","type":"Grid"},{"attributes":{"fields":["x1"]},"id":"28410","type":"Stack"},{"attributes":{"below":[{"id":"28385","type":"LinearAxis"}],"center":[{"id":"28389","type":"Grid"},{"id":"28394","type":"Grid"}],"left":[{"id":"28390","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28415","type":"GlyphRenderer"},{"id":"28420","type":"GlyphRenderer"}],"title":{"id":"28422","type":"Title"},"toolbar":{"id":"28401","type":"Toolbar"},"x_range":{"id":"28377","type":"DataRange1d"},"x_scale":{"id":"28381","type":"LinearScale"},"y_range":{"id":"28379","type":"DataRange1d"},"y_scale":{"id":"28383","type":"LinearScale"}},"id":"28376","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28429","type":"UnionRenderers"},{"attributes":{"source":{"id":"28375","type":"ColumnDataSource"}},"id":"28421","type":"CDSView"},{"attributes":{},"id":"28396","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x1":[1,2,4,3,4],"x2":[1,4,2,2,3],"y":[1,2,3,4,5]},"selected":{"id":"28428","type":"Selection"},"selection_policy":{"id":"28429","type":"UnionRenderers"}},"id":"28375","type":"ColumnDataSource"},{"attributes":{},"id":"28399","type":"ResetTool"},{"attributes":{"data_source":{"id":"28375","type":"ColumnDataSource"},"glyph":{"id":"28413","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"x1","nonselection_glyph":{"id":"28414","type":"HBar"},"selection_glyph":null,"view":{"id":"28416","type":"CDSView"}},"id":"28415","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"28408","type":"Stack"},{"attributes":{"callback":null},"id":"28377","type":"DataRange1d"},{"attributes":{"overlay":{"id":"28430","type":"BoxAnnotation"}},"id":"28397","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"28379","type":"DataRange1d"},{"attributes":{},"id":"28383","type":"LinearScale"},{"attributes":{},"id":"28424","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"28391","type":"BasicTicker"}},"id":"28394","type":"Grid"},{"attributes":{"source":{"id":"28375","type":"ColumnDataSource"}},"id":"28416","type":"CDSView"},{"attributes":{},"id":"28395","type":"PanTool"},{"attributes":{"data_source":{"id":"28375","type":"ColumnDataSource"},"glyph":{"id":"28418","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"x2","nonselection_glyph":{"id":"28419","type":"HBar"},"selection_glyph":null,"view":{"id":"28421","type":"CDSView"}},"id":"28420","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.8},"left":{"expr":{"id":"28410","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"28411","type":"Stack"}},"y":{"field":"y"}},"id":"28419","type":"HBar"}],"root_ids":["28376"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"f11133cd-b229-42d8-ab06-5969a1d79440","roots":{"28376":"a9e4fe8c-57cc-4102-a3b7-e1dc559a922c"}}];
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