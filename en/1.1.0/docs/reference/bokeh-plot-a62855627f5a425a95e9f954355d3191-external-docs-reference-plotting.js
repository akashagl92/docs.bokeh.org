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
      };var element = document.getElementById("3e5fb453-189a-4550-8eed-ecc0522370bf");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3e5fb453-189a-4550-8eed-ecc0522370bf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc2de8c5-281d-44fd-9a22-33605bb3dc76":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15460","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"15416","type":"DataRange1d"},{"attributes":{},"id":"15422","type":"LinearScale"},{"attributes":{},"id":"15457","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15449","type":"MultiPolygons"},{"attributes":{"text":""},"id":"15453","type":"Title"},{"attributes":{"formatter":{"id":"15455","type":"BasicTickFormatter"},"ticker":{"id":"15430","type":"BasicTicker"}},"id":"15429","type":"LinearAxis"},{"attributes":{},"id":"15425","type":"BasicTicker"},{"attributes":{},"id":"15459","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"15430","type":"BasicTicker"}},"id":"15433","type":"Grid"},{"attributes":{"callback":null},"id":"15418","type":"DataRange1d"},{"attributes":{"below":[{"id":"15424","type":"LinearAxis"}],"center":[{"id":"15428","type":"Grid"},{"id":"15433","type":"Grid"}],"left":[{"id":"15429","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15450","type":"GlyphRenderer"}],"title":{"id":"15453","type":"Title"},"toolbar":{"id":"15440","type":"Toolbar"},"x_range":{"id":"15416","type":"DataRange1d"},"x_scale":{"id":"15420","type":"LinearScale"},"y_range":{"id":"15418","type":"DataRange1d"},"y_scale":{"id":"15422","type":"LinearScale"}},"id":"15415","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15437","type":"SaveTool"},{"attributes":{"callback":null,"data":{"fill_color":["red","green"],"line_color":["red","green"],"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]]]},"selected":{"id":"15459","type":"Selection"},"selection_policy":{"id":"15458","type":"UnionRenderers"}},"id":"15447","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15434","type":"PanTool"},{"id":"15435","type":"WheelZoomTool"},{"id":"15436","type":"BoxZoomTool"},{"id":"15437","type":"SaveTool"},{"id":"15438","type":"ResetTool"},{"id":"15439","type":"HelpTool"}]},"id":"15440","type":"Toolbar"},{"attributes":{},"id":"15455","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"15457","type":"BasicTickFormatter"},"ticker":{"id":"15425","type":"BasicTicker"}},"id":"15424","type":"LinearAxis"},{"attributes":{},"id":"15439","type":"HelpTool"},{"attributes":{},"id":"15435","type":"WheelZoomTool"},{"attributes":{},"id":"15434","type":"PanTool"},{"attributes":{},"id":"15420","type":"LinearScale"},{"attributes":{"data_source":{"id":"15447","type":"ColumnDataSource"},"glyph":{"id":"15448","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15449","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"15451","type":"CDSView"}},"id":"15450","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"15425","type":"BasicTicker"}},"id":"15428","type":"Grid"},{"attributes":{"source":{"id":"15447","type":"ColumnDataSource"}},"id":"15451","type":"CDSView"},{"attributes":{},"id":"15438","type":"ResetTool"},{"attributes":{},"id":"15430","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15448","type":"MultiPolygons"},{"attributes":{"overlay":{"id":"15460","type":"BoxAnnotation"}},"id":"15436","type":"BoxZoomTool"},{"attributes":{},"id":"15458","type":"UnionRenderers"}],"root_ids":["15415"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"cc2de8c5-281d-44fd-9a22-33605bb3dc76","roots":{"15415":"3e5fb453-189a-4550-8eed-ecc0522370bf"}}];
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