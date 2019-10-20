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
      };var element = document.getElementById("a164f160-06e2-4846-bfb7-c03a79720426");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a164f160-06e2-4846-bfb7-c03a79720426' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"27aadaff-09b3-464b-98e5-bae4db0fc9c7":{"roots":{"references":[{"attributes":{},"id":"15521","type":"ResetTool"},{"attributes":{"text":""},"id":"15536","type":"Title"},{"attributes":{},"id":"15520","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"15532","type":"Oval"},{"attributes":{},"id":"15538","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15499","type":"DataRange1d"},{"attributes":{"overlay":{"id":"15543","type":"BoxAnnotation"}},"id":"15519","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15517","type":"PanTool"},{"id":"15518","type":"WheelZoomTool"},{"id":"15519","type":"BoxZoomTool"},{"id":"15520","type":"SaveTool"},{"id":"15521","type":"ResetTool"},{"id":"15522","type":"HelpTool"}]},"id":"15523","type":"Toolbar"},{"attributes":{},"id":"15505","type":"LinearScale"},{"attributes":{},"id":"15540","type":"BasicTickFormatter"},{"attributes":{},"id":"15518","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"15531","type":"Oval"},{"attributes":{"formatter":{"id":"15540","type":"BasicTickFormatter"},"ticker":{"id":"15508","type":"BasicTicker"}},"id":"15507","type":"LinearAxis"},{"attributes":{},"id":"15541","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"15501","type":"DataRange1d"},{"attributes":{},"id":"15517","type":"PanTool"},{"attributes":{"data_source":{"id":"15530","type":"ColumnDataSource"},"glyph":{"id":"15531","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15532","type":"Oval"},"selection_glyph":null,"view":{"id":"15534","type":"CDSView"}},"id":"15533","type":"GlyphRenderer"},{"attributes":{},"id":"15508","type":"BasicTicker"},{"attributes":{},"id":"15542","type":"Selection"},{"attributes":{},"id":"15503","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15542","type":"Selection"},"selection_policy":{"id":"15541","type":"UnionRenderers"}},"id":"15530","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"15508","type":"BasicTicker"}},"id":"15511","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15543","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"15538","type":"BasicTickFormatter"},"ticker":{"id":"15513","type":"BasicTicker"}},"id":"15512","type":"LinearAxis"},{"attributes":{},"id":"15513","type":"BasicTicker"},{"attributes":{"source":{"id":"15530","type":"ColumnDataSource"}},"id":"15534","type":"CDSView"},{"attributes":{},"id":"15522","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"15513","type":"BasicTicker"}},"id":"15516","type":"Grid"},{"attributes":{"below":[{"id":"15507","type":"LinearAxis"}],"center":[{"id":"15511","type":"Grid"},{"id":"15516","type":"Grid"}],"left":[{"id":"15512","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15533","type":"GlyphRenderer"}],"title":{"id":"15536","type":"Title"},"toolbar":{"id":"15523","type":"Toolbar"},"x_range":{"id":"15499","type":"DataRange1d"},"x_scale":{"id":"15503","type":"LinearScale"},"y_range":{"id":"15501","type":"DataRange1d"},"y_scale":{"id":"15505","type":"LinearScale"}},"id":"15498","subtype":"Figure","type":"Plot"}],"root_ids":["15498"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"27aadaff-09b3-464b-98e5-bae4db0fc9c7","roots":{"15498":"a164f160-06e2-4846-bfb7-c03a79720426"}}];
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