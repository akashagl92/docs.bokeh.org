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
      };var element = document.getElementById("2bbc173a-3aa2-465d-bd8c-c745135e7acc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2bbc173a-3aa2-465d-bd8c-c745135e7acc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2d5bd7f9-491d-4518-bf26-7a44e14e3618":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26433","type":"PanTool"},{"id":"26434","type":"WheelZoomTool"},{"id":"26435","type":"BoxZoomTool"},{"id":"26436","type":"SaveTool"},{"id":"26437","type":"ResetTool"},{"id":"26438","type":"HelpTool"}]},"id":"26439","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"26485","type":"Line"},{"attributes":{},"id":"26499","type":"BasicTickFormatter"},{"attributes":{},"id":"26501","type":"BasicTickFormatter"},{"attributes":{},"id":"26472","type":"WheelZoomTool"},{"attributes":{"source":{"id":"26446","type":"ColumnDataSource"}},"id":"26450","type":"CDSView"},{"attributes":{},"id":"26503","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"26467","type":"BasicTicker"}},"id":"26470","type":"Grid"},{"attributes":{},"id":"26476","type":"HelpTool"},{"attributes":{},"id":"26504","type":"UnionRenderers"},{"attributes":{"child":{"id":"26414","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"26451","type":"Panel"},{"attributes":{},"id":"26438","type":"HelpTool"},{"attributes":{},"id":"26421","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26505","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"26461","type":"LinearAxis"}],"center":[{"id":"26465","type":"Grid"},{"id":"26470","type":"Grid"}],"left":[{"id":"26466","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26487","type":"GlyphRenderer"}],"title":{"id":"26493","type":"Title"},"toolbar":{"id":"26477","type":"Toolbar"},"x_range":{"id":"26453","type":"DataRange1d"},"x_scale":{"id":"26457","type":"LinearScale"},"y_range":{"id":"26455","type":"DataRange1d"},"y_scale":{"id":"26459","type":"LinearScale"}},"id":"26452","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"26497","type":"BasicTickFormatter"},"ticker":{"id":"26424","type":"BasicTicker"}},"id":"26423","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26471","type":"PanTool"},{"id":"26472","type":"WheelZoomTool"},{"id":"26473","type":"BoxZoomTool"},{"id":"26474","type":"SaveTool"},{"id":"26475","type":"ResetTool"},{"id":"26476","type":"HelpTool"}]},"id":"26477","type":"Toolbar"},{"attributes":{},"id":"26506","type":"Selection"},{"attributes":{"callback":null},"id":"26453","type":"DataRange1d"},{"attributes":{},"id":"26429","type":"BasicTicker"},{"attributes":{},"id":"26507","type":"UnionRenderers"},{"attributes":{},"id":"26424","type":"BasicTicker"},{"attributes":{"callback":null},"id":"26455","type":"DataRange1d"},{"attributes":{"source":{"id":"26484","type":"ColumnDataSource"}},"id":"26488","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26508","type":"BoxAnnotation"},{"attributes":{"child":{"id":"26452","subtype":"Figure","type":"Plot"},"title":"line"},"id":"26489","type":"Panel"},{"attributes":{},"id":"26457","type":"LinearScale"},{"attributes":{"ticker":{"id":"26424","type":"BasicTicker"}},"id":"26427","type":"Grid"},{"attributes":{},"id":"26459","type":"LinearScale"},{"attributes":{},"id":"26474","type":"SaveTool"},{"attributes":{"formatter":{"id":"26495","type":"BasicTickFormatter"},"ticker":{"id":"26429","type":"BasicTicker"}},"id":"26428","type":"LinearAxis"},{"attributes":{"formatter":{"id":"26501","type":"BasicTickFormatter"},"ticker":{"id":"26462","type":"BasicTicker"}},"id":"26461","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"26429","type":"BasicTicker"}},"id":"26432","type":"Grid"},{"attributes":{},"id":"26437","type":"ResetTool"},{"attributes":{"data_source":{"id":"26446","type":"ColumnDataSource"},"glyph":{"id":"26447","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26448","type":"Circle"},"selection_glyph":null,"view":{"id":"26450","type":"CDSView"}},"id":"26449","type":"GlyphRenderer"},{"attributes":{},"id":"26462","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26447","type":"Circle"},{"attributes":{"below":[{"id":"26423","type":"LinearAxis"}],"center":[{"id":"26427","type":"Grid"},{"id":"26432","type":"Grid"}],"left":[{"id":"26428","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26449","type":"GlyphRenderer"}],"title":{"id":"26491","type":"Title"},"toolbar":{"id":"26439","type":"Toolbar"},"x_range":{"id":"26415","type":"DataRange1d"},"x_scale":{"id":"26419","type":"LinearScale"},"y_range":{"id":"26417","type":"DataRange1d"},"y_scale":{"id":"26421","type":"LinearScale"}},"id":"26414","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"26462","type":"BasicTicker"}},"id":"26465","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26503","type":"Selection"},"selection_policy":{"id":"26504","type":"UnionRenderers"}},"id":"26446","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"26508","type":"BoxAnnotation"}},"id":"26473","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26499","type":"BasicTickFormatter"},"ticker":{"id":"26467","type":"BasicTicker"}},"id":"26466","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26448","type":"Circle"},{"attributes":{"callback":null},"id":"26415","type":"DataRange1d"},{"attributes":{},"id":"26433","type":"PanTool"},{"attributes":{},"id":"26467","type":"BasicTicker"},{"attributes":{"callback":null},"id":"26417","type":"DataRange1d"},{"attributes":{},"id":"26434","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"26491","type":"Title"},{"attributes":{},"id":"26419","type":"LinearScale"},{"attributes":{"overlay":{"id":"26505","type":"BoxAnnotation"}},"id":"26435","type":"BoxZoomTool"},{"attributes":{},"id":"26471","type":"PanTool"},{"attributes":{"data_source":{"id":"26484","type":"ColumnDataSource"},"glyph":{"id":"26485","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26486","type":"Line"},"selection_glyph":null,"view":{"id":"26488","type":"CDSView"}},"id":"26487","type":"GlyphRenderer"},{"attributes":{},"id":"26475","type":"ResetTool"},{"attributes":{"callback":null,"tabs":[{"id":"26451","type":"Panel"},{"id":"26489","type":"Panel"}]},"id":"26490","type":"Tabs"},{"attributes":{},"id":"26495","type":"BasicTickFormatter"},{"attributes":{},"id":"26436","type":"SaveTool"},{"attributes":{},"id":"26497","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"26493","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"26486","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26506","type":"Selection"},"selection_policy":{"id":"26507","type":"UnionRenderers"}},"id":"26484","type":"ColumnDataSource"}],"root_ids":["26490"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"2d5bd7f9-491d-4518-bf26-7a44e14e3618","roots":{"26490":"2bbc173a-3aa2-465d-bd8c-c745135e7acc"}}];
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