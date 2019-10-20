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
      };var element = document.getElementById("2e6cab7d-66c1-4b9f-ba67-aca456712e09");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2e6cab7d-66c1-4b9f-ba67-aca456712e09' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"7c0bd715-6fca-4cfd-82fd-085cea86ab93":{"roots":{"references":[{"attributes":{},"id":"27475","type":"BasicTickFormatter"},{"attributes":{},"id":"27455","type":"WheelZoomTool"},{"attributes":{},"id":"27445","type":"BasicTicker"},{"attributes":{},"id":"27477","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"27480","type":"BoxAnnotation"}},"id":"27456","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"27445","type":"BasicTicker"}},"id":"27448","type":"Grid"},{"attributes":{"below":[{"id":"27444","type":"LinearAxis"}],"center":[{"id":"27448","type":"Grid"},{"id":"27453","type":"Grid"}],"left":[{"id":"27449","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27470","type":"GlyphRenderer"}],"title":{"id":"27473","type":"Title"},"toolbar":{"id":"27460","type":"Toolbar"},"x_range":{"id":"27436","type":"DataRange1d"},"x_scale":{"id":"27440","type":"LinearScale"},"y_range":{"id":"27438","type":"DataRange1d"},"y_scale":{"id":"27442","type":"LinearScale"}},"id":"27435","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27457","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27480","type":"BoxAnnotation"},{"attributes":{},"id":"27450","type":"BasicTicker"},{"attributes":{},"id":"27458","type":"ResetTool"},{"attributes":{"source":{"id":"27467","type":"ColumnDataSource"}},"id":"27471","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"27469","type":"Rect"},{"attributes":{},"id":"27479","type":"Selection"},{"attributes":{"callback":null},"id":"27436","type":"DataRange1d"},{"attributes":{},"id":"27459","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27454","type":"PanTool"},{"id":"27455","type":"WheelZoomTool"},{"id":"27456","type":"BoxZoomTool"},{"id":"27457","type":"SaveTool"},{"id":"27458","type":"ResetTool"},{"id":"27459","type":"HelpTool"}]},"id":"27460","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"27450","type":"BasicTicker"}},"id":"27453","type":"Grid"},{"attributes":{"callback":null},"id":"27438","type":"DataRange1d"},{"attributes":{},"id":"27440","type":"LinearScale"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"27468","type":"Rect"},{"attributes":{},"id":"27442","type":"LinearScale"},{"attributes":{},"id":"27478","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"27479","type":"Selection"},"selection_policy":{"id":"27478","type":"UnionRenderers"}},"id":"27467","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"27467","type":"ColumnDataSource"},"glyph":{"id":"27468","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27469","type":"Rect"},"selection_glyph":null,"view":{"id":"27471","type":"CDSView"}},"id":"27470","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"27475","type":"BasicTickFormatter"},"ticker":{"id":"27450","type":"BasicTicker"}},"id":"27449","type":"LinearAxis"},{"attributes":{"text":""},"id":"27473","type":"Title"},{"attributes":{},"id":"27454","type":"PanTool"},{"attributes":{"formatter":{"id":"27477","type":"BasicTickFormatter"},"ticker":{"id":"27445","type":"BasicTicker"}},"id":"27444","type":"LinearAxis"}],"root_ids":["27435"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7c0bd715-6fca-4cfd-82fd-085cea86ab93","roots":{"27435":"2e6cab7d-66c1-4b9f-ba67-aca456712e09"}}];
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