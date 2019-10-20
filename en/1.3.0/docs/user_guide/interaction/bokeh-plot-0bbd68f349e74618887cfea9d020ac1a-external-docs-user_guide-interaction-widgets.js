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
      };var element = document.getElementById("de75283f-9985-4312-9cd1-8ffacd537e36");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'de75283f-9985-4312-9cd1-8ffacd537e36' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"923bf62b-101b-4fc4-b453-16fb6907d0c9":{"roots":{"references":[{"attributes":{"callback":null,"tabs":[{"id":"26477","type":"Panel"},{"id":"26515","type":"Panel"}]},"id":"26516","type":"Tabs"},{"attributes":{},"id":"26485","type":"LinearScale"},{"attributes":{},"id":"26488","type":"BasicTicker"},{"attributes":{"text":""},"id":"26518","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26473","type":"Circle"},{"attributes":{"ticker":{"id":"26488","type":"BasicTicker"}},"id":"26491","type":"Grid"},{"attributes":{},"id":"26460","type":"WheelZoomTool"},{"attributes":{},"id":"26455","type":"BasicTicker"},{"attributes":{"text":""},"id":"26520","type":"Title"},{"attributes":{"formatter":{"id":"26528","type":"BasicTickFormatter"},"ticker":{"id":"26493","type":"BasicTicker"}},"id":"26492","type":"LinearAxis"},{"attributes":{},"id":"26464","type":"HelpTool"},{"attributes":{"callback":null},"id":"26479","type":"DataRange1d"},{"attributes":{},"id":"26522","type":"BasicTickFormatter"},{"attributes":{},"id":"26493","type":"BasicTicker"},{"attributes":{"below":[{"id":"26487","type":"LinearAxis"}],"center":[{"id":"26491","type":"Grid"},{"id":"26496","type":"Grid"}],"left":[{"id":"26492","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26513","type":"GlyphRenderer"}],"title":{"id":"26520","type":"Title"},"toolbar":{"id":"26503","type":"Toolbar"},"x_range":{"id":"26479","type":"DataRange1d"},"x_scale":{"id":"26483","type":"LinearScale"},"y_range":{"id":"26481","type":"DataRange1d"},"y_scale":{"id":"26485","type":"LinearScale"}},"id":"26478","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26459","type":"PanTool"},{"attributes":{},"id":"26524","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"26493","type":"BasicTicker"}},"id":"26496","type":"Grid"},{"attributes":{"formatter":{"id":"26526","type":"BasicTickFormatter"},"ticker":{"id":"26488","type":"BasicTicker"}},"id":"26487","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26443","type":"DataRange1d"},{"attributes":{},"id":"26526","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"26512","type":"Line"},{"attributes":{"source":{"id":"26472","type":"ColumnDataSource"}},"id":"26476","type":"CDSView"},{"attributes":{},"id":"26528","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"26511","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26474","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26529","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"26510","type":"ColumnDataSource"},"glyph":{"id":"26511","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26512","type":"Line"},"selection_glyph":null,"view":{"id":"26514","type":"CDSView"}},"id":"26513","type":"GlyphRenderer"},{"attributes":{},"id":"26497","type":"PanTool"},{"attributes":{},"id":"26530","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26531","type":"Selection"},"selection_policy":{"id":"26530","type":"UnionRenderers"}},"id":"26472","type":"ColumnDataSource"},{"attributes":{},"id":"26498","type":"WheelZoomTool"},{"attributes":{},"id":"26531","type":"Selection"},{"attributes":{"data_source":{"id":"26472","type":"ColumnDataSource"},"glyph":{"id":"26473","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26474","type":"Circle"},"selection_glyph":null,"view":{"id":"26476","type":"CDSView"}},"id":"26475","type":"GlyphRenderer"},{"attributes":{},"id":"26445","type":"LinearScale"},{"attributes":{"overlay":{"id":"26532","type":"BoxAnnotation"}},"id":"26499","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26532","type":"BoxAnnotation"},{"attributes":{},"id":"26462","type":"SaveTool"},{"attributes":{},"id":"26500","type":"SaveTool"},{"attributes":{"child":{"id":"26478","subtype":"Figure","type":"Plot"},"title":"line"},"id":"26515","type":"Panel"},{"attributes":{},"id":"26533","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"26450","type":"BasicTicker"}},"id":"26453","type":"Grid"},{"attributes":{},"id":"26483","type":"LinearScale"},{"attributes":{},"id":"26450","type":"BasicTicker"},{"attributes":{},"id":"26501","type":"ResetTool"},{"attributes":{},"id":"26534","type":"Selection"},{"attributes":{},"id":"26463","type":"ResetTool"},{"attributes":{},"id":"26502","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"26455","type":"BasicTicker"}},"id":"26458","type":"Grid"},{"attributes":{"callback":null},"id":"26481","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26497","type":"PanTool"},{"id":"26498","type":"WheelZoomTool"},{"id":"26499","type":"BoxZoomTool"},{"id":"26500","type":"SaveTool"},{"id":"26501","type":"ResetTool"},{"id":"26502","type":"HelpTool"}]},"id":"26503","type":"Toolbar"},{"attributes":{"callback":null},"id":"26441","type":"DataRange1d"},{"attributes":{"child":{"id":"26440","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"26477","type":"Panel"},{"attributes":{"overlay":{"id":"26529","type":"BoxAnnotation"}},"id":"26461","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"26449","type":"LinearAxis"}],"center":[{"id":"26453","type":"Grid"},{"id":"26458","type":"Grid"}],"left":[{"id":"26454","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26475","type":"GlyphRenderer"}],"title":{"id":"26518","type":"Title"},"toolbar":{"id":"26465","type":"Toolbar"},"x_range":{"id":"26441","type":"DataRange1d"},"x_scale":{"id":"26445","type":"LinearScale"},"y_range":{"id":"26443","type":"DataRange1d"},"y_scale":{"id":"26447","type":"LinearScale"}},"id":"26440","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"26522","type":"BasicTickFormatter"},"ticker":{"id":"26450","type":"BasicTicker"}},"id":"26449","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26534","type":"Selection"},"selection_policy":{"id":"26533","type":"UnionRenderers"}},"id":"26510","type":"ColumnDataSource"},{"attributes":{"source":{"id":"26510","type":"ColumnDataSource"}},"id":"26514","type":"CDSView"},{"attributes":{},"id":"26447","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26459","type":"PanTool"},{"id":"26460","type":"WheelZoomTool"},{"id":"26461","type":"BoxZoomTool"},{"id":"26462","type":"SaveTool"},{"id":"26463","type":"ResetTool"},{"id":"26464","type":"HelpTool"}]},"id":"26465","type":"Toolbar"},{"attributes":{"formatter":{"id":"26524","type":"BasicTickFormatter"},"ticker":{"id":"26455","type":"BasicTicker"}},"id":"26454","type":"LinearAxis"}],"root_ids":["26516"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"923bf62b-101b-4fc4-b453-16fb6907d0c9","roots":{"26516":"de75283f-9985-4312-9cd1-8ffacd537e36"}}];
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