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
      };var element = document.getElementById("eac732d1-b988-41c6-b204-564fc310be50");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eac732d1-b988-41c6-b204-564fc310be50' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a4c941b5-8899-4e60-87cc-f16b9d849c0e":{"roots":{"references":[{"attributes":{},"id":"30313","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30341","type":"Line"},{"attributes":{"dimension":1,"ticker":{"id":"30323","type":"BasicTicker"}},"id":"30326","type":"Grid"},{"attributes":{},"id":"30331","type":"ResetTool"},{"attributes":{"source":{"id":"30345","type":"ColumnDataSource"}},"id":"30349","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"30347","type":"Circle"},{"attributes":{},"id":"30328","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30360","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"30309","type":"DataRange1d"},{"attributes":{"ticker":{"id":"30318","type":"BasicTicker"}},"id":"30321","type":"Grid"},{"attributes":{"data_source":{"id":"30345","type":"ColumnDataSource"},"glyph":{"id":"30346","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30347","type":"Circle"},"selection_glyph":null,"view":{"id":"30349","type":"CDSView"}},"id":"30348","type":"GlyphRenderer"},{"attributes":{},"id":"30357","type":"UnionRenderers"},{"attributes":{},"id":"30318","type":"BasicTicker"},{"attributes":{"callback":null},"id":"30311","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30342","type":"Line"},{"attributes":{},"id":"30358","type":"Selection"},{"attributes":{"below":[{"id":"30317","type":"LinearAxis"}],"center":[{"id":"30321","type":"Grid"},{"id":"30326","type":"Grid"}],"left":[{"id":"30322","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30343","type":"GlyphRenderer"},{"id":"30348","type":"GlyphRenderer"}],"title":{"id":"30350","type":"Title"},"toolbar":{"id":"30333","type":"Toolbar"},"x_range":{"id":"30309","type":"DataRange1d"},"x_scale":{"id":"30313","type":"LinearScale"},"y_range":{"id":"30311","type":"DataRange1d"},"y_scale":{"id":"30315","type":"LinearScale"}},"id":"30308","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30330","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"30356","type":"Selection"},"selection_policy":{"id":"30357","type":"UnionRenderers"}},"id":"30340","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"30350","type":"Title"},{"attributes":{},"id":"30332","type":"HelpTool"},{"attributes":{},"id":"30356","type":"Selection"},{"attributes":{},"id":"30354","type":"BasicTickFormatter"},{"attributes":{},"id":"30352","type":"BasicTickFormatter"},{"attributes":{},"id":"30359","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"30358","type":"Selection"},"selection_policy":{"id":"30359","type":"UnionRenderers"}},"id":"30345","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30340","type":"ColumnDataSource"},"glyph":{"id":"30341","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30342","type":"Line"},"selection_glyph":null,"view":{"id":"30344","type":"CDSView"}},"id":"30343","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"30360","type":"BoxAnnotation"}},"id":"30329","type":"BoxZoomTool"},{"attributes":{},"id":"30315","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30327","type":"PanTool"},{"id":"30328","type":"WheelZoomTool"},{"id":"30329","type":"BoxZoomTool"},{"id":"30330","type":"SaveTool"},{"id":"30331","type":"ResetTool"},{"id":"30332","type":"HelpTool"}]},"id":"30333","type":"Toolbar"},{"attributes":{},"id":"30323","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"30346","type":"Circle"},{"attributes":{"formatter":{"id":"30354","type":"BasicTickFormatter"},"ticker":{"id":"30318","type":"BasicTicker"}},"id":"30317","type":"LinearAxis"},{"attributes":{"source":{"id":"30340","type":"ColumnDataSource"}},"id":"30344","type":"CDSView"},{"attributes":{},"id":"30327","type":"PanTool"},{"attributes":{"formatter":{"id":"30352","type":"BasicTickFormatter"},"ticker":{"id":"30323","type":"BasicTicker"}},"id":"30322","type":"LinearAxis"}],"root_ids":["30308"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"a4c941b5-8899-4e60-87cc-f16b9d849c0e","roots":{"30308":"eac732d1-b988-41c6-b204-564fc310be50"}}];
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