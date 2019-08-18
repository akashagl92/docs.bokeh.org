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
      };var element = document.getElementById("7439150a-596a-492e-bccf-bf103b1cf4c5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7439150a-596a-492e-bccf-bf103b1cf4c5' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"57e49887-283c-4fb1-a856-6631cda68bfe":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"26456","type":"BasicTicker"}},"id":"26459","type":"Grid"},{"attributes":{},"id":"26499","type":"WheelZoomTool"},{"attributes":{},"id":"26456","type":"BasicTicker"},{"attributes":{},"id":"26463","type":"SaveTool"},{"attributes":{"overlay":{"id":"26535","type":"BoxAnnotation"}},"id":"26500","type":"BoxZoomTool"},{"attributes":{},"id":"26451","type":"BasicTicker"},{"attributes":{},"id":"26501","type":"SaveTool"},{"attributes":{},"id":"26464","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"26494","type":"BasicTicker"}},"id":"26497","type":"Grid"},{"attributes":{},"id":"26502","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"26513","type":"Line"},{"attributes":{},"id":"26465","type":"HelpTool"},{"attributes":{},"id":"26503","type":"HelpTool"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"26512","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26460","type":"PanTool"},{"id":"26461","type":"WheelZoomTool"},{"id":"26462","type":"BoxZoomTool"},{"id":"26463","type":"SaveTool"},{"id":"26464","type":"ResetTool"},{"id":"26465","type":"HelpTool"}]},"id":"26466","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26498","type":"PanTool"},{"id":"26499","type":"WheelZoomTool"},{"id":"26500","type":"BoxZoomTool"},{"id":"26501","type":"SaveTool"},{"id":"26502","type":"ResetTool"},{"id":"26503","type":"HelpTool"}]},"id":"26504","type":"Toolbar"},{"attributes":{},"id":"26531","type":"Selection"},{"attributes":{"source":{"id":"26473","type":"ColumnDataSource"}},"id":"26477","type":"CDSView"},{"attributes":{"callback":null},"id":"26444","type":"DataRange1d"},{"attributes":{"data_source":{"id":"26511","type":"ColumnDataSource"},"glyph":{"id":"26512","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26513","type":"Line"},"selection_glyph":null,"view":{"id":"26515","type":"CDSView"}},"id":"26514","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26534","type":"Selection"},"selection_policy":{"id":"26533","type":"UnionRenderers"}},"id":"26511","type":"ColumnDataSource"},{"attributes":{},"id":"26446","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26532","type":"BoxAnnotation"},{"attributes":{},"id":"26534","type":"Selection"},{"attributes":{"source":{"id":"26511","type":"ColumnDataSource"}},"id":"26515","type":"CDSView"},{"attributes":{},"id":"26448","type":"LinearScale"},{"attributes":{"child":{"id":"26441","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"26478","type":"Panel"},{"attributes":{"child":{"id":"26479","subtype":"Figure","type":"Plot"},"title":"line"},"id":"26516","type":"Panel"},{"attributes":{},"id":"26526","type":"BasicTickFormatter"},{"attributes":{},"id":"26530","type":"UnionRenderers"},{"attributes":{"below":[{"id":"26488","type":"LinearAxis"}],"center":[{"id":"26492","type":"Grid"},{"id":"26497","type":"Grid"}],"left":[{"id":"26493","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26514","type":"GlyphRenderer"}],"title":{"id":"26520","type":"Title"},"toolbar":{"id":"26504","type":"Toolbar"},"x_range":{"id":"26480","type":"DataRange1d"},"x_scale":{"id":"26484","type":"LinearScale"},"y_range":{"id":"26482","type":"DataRange1d"},"y_scale":{"id":"26486","type":"LinearScale"}},"id":"26479","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"tabs":[{"id":"26478","type":"Panel"},{"id":"26516","type":"Panel"}]},"id":"26517","type":"Tabs"},{"attributes":{"callback":null},"id":"26480","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"26531","type":"Selection"},"selection_policy":{"id":"26530","type":"UnionRenderers"}},"id":"26473","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"26450","type":"LinearAxis"}],"center":[{"id":"26454","type":"Grid"},{"id":"26459","type":"Grid"}],"left":[{"id":"26455","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"26476","type":"GlyphRenderer"}],"title":{"id":"26518","type":"Title"},"toolbar":{"id":"26466","type":"Toolbar"},"x_range":{"id":"26442","type":"DataRange1d"},"x_scale":{"id":"26446","type":"LinearScale"},"y_range":{"id":"26444","type":"DataRange1d"},"y_scale":{"id":"26448","type":"LinearScale"}},"id":"26441","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26528","type":"BasicTickFormatter"},{"attributes":{},"id":"26498","type":"PanTool"},{"attributes":{"text":""},"id":"26518","type":"Title"},{"attributes":{"formatter":{"id":"26522","type":"BasicTickFormatter"},"ticker":{"id":"26451","type":"BasicTicker"}},"id":"26450","type":"LinearAxis"},{"attributes":{},"id":"26494","type":"BasicTicker"},{"attributes":{"text":""},"id":"26520","type":"Title"},{"attributes":{},"id":"26484","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26475","type":"Circle"},{"attributes":{},"id":"26533","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26474","type":"Circle"},{"attributes":{},"id":"26486","type":"LinearScale"},{"attributes":{},"id":"26522","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"26473","type":"ColumnDataSource"},"glyph":{"id":"26474","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26475","type":"Circle"},"selection_glyph":null,"view":{"id":"26477","type":"CDSView"}},"id":"26476","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"26526","type":"BasicTickFormatter"},"ticker":{"id":"26489","type":"BasicTicker"}},"id":"26488","type":"LinearAxis"},{"attributes":{},"id":"26524","type":"BasicTickFormatter"},{"attributes":{},"id":"26460","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26535","type":"BoxAnnotation"},{"attributes":{},"id":"26489","type":"BasicTicker"},{"attributes":{},"id":"26461","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"26442","type":"DataRange1d"},{"attributes":{"ticker":{"id":"26489","type":"BasicTicker"}},"id":"26492","type":"Grid"},{"attributes":{"overlay":{"id":"26532","type":"BoxAnnotation"}},"id":"26462","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"26451","type":"BasicTicker"}},"id":"26454","type":"Grid"},{"attributes":{"formatter":{"id":"26528","type":"BasicTickFormatter"},"ticker":{"id":"26494","type":"BasicTicker"}},"id":"26493","type":"LinearAxis"},{"attributes":{"callback":null},"id":"26482","type":"DataRange1d"},{"attributes":{"formatter":{"id":"26524","type":"BasicTickFormatter"},"ticker":{"id":"26456","type":"BasicTicker"}},"id":"26455","type":"LinearAxis"}],"root_ids":["26517"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"57e49887-283c-4fb1-a856-6631cda68bfe","roots":{"26517":"7439150a-596a-492e-bccf-bf103b1cf4c5"}}];
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