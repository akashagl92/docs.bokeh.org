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
      };var element = document.getElementById("b21ade4e-a1d8-46ff-b296-f654153f1270");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b21ade4e-a1d8-46ff-b296-f654153f1270' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3ccaa3ce-b5c0-412b-997c-111f76da1d4f":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29604","type":"Selection"},"selection_policy":{"id":"29605","type":"UnionRenderers"}},"id":"29593","type":"ColumnDataSource"},{"attributes":{},"id":"29600","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"29570","type":"LinearAxis"}],"center":[{"id":"29574","type":"Grid"},{"id":"29579","type":"Grid"}],"left":[{"id":"29575","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29596","type":"GlyphRenderer"}],"title":{"id":"29598","type":"Title"},"toolbar":{"id":"29586","type":"Toolbar"},"x_range":{"id":"29562","type":"DataRange1d"},"x_scale":{"id":"29566","type":"LinearScale"},"y_range":{"id":"29564","type":"DataRange1d"},"y_scale":{"id":"29568","type":"LinearScale"}},"id":"29561","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29581","type":"WheelZoomTool"},{"attributes":{},"id":"29571","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29564","type":"DataRange1d"},{"attributes":{"text":""},"id":"29598","type":"Title"},{"attributes":{"callback":null},"id":"29562","type":"DataRange1d"},{"attributes":{},"id":"29585","type":"HelpTool"},{"attributes":{},"id":"29584","type":"ResetTool"},{"attributes":{},"id":"29580","type":"PanTool"},{"attributes":{},"id":"29604","type":"Selection"},{"attributes":{},"id":"29568","type":"LinearScale"},{"attributes":{"source":{"id":"29593","type":"ColumnDataSource"}},"id":"29597","type":"CDSView"},{"attributes":{"formatter":{"id":"29602","type":"BasicTickFormatter"},"ticker":{"id":"29571","type":"BasicTicker"}},"id":"29570","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29580","type":"PanTool"},{"id":"29581","type":"WheelZoomTool"},{"id":"29582","type":"BoxZoomTool"},{"id":"29583","type":"SaveTool"},{"id":"29584","type":"ResetTool"},{"id":"29585","type":"HelpTool"}]},"id":"29586","type":"Toolbar"},{"attributes":{"overlay":{"id":"29606","type":"BoxAnnotation"}},"id":"29582","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29595","type":"Oval"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29594","type":"Oval"},{"attributes":{},"id":"29576","type":"BasicTicker"},{"attributes":{},"id":"29605","type":"UnionRenderers"},{"attributes":{},"id":"29602","type":"BasicTickFormatter"},{"attributes":{},"id":"29583","type":"SaveTool"},{"attributes":{"formatter":{"id":"29600","type":"BasicTickFormatter"},"ticker":{"id":"29576","type":"BasicTicker"}},"id":"29575","type":"LinearAxis"},{"attributes":{"data_source":{"id":"29593","type":"ColumnDataSource"},"glyph":{"id":"29594","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29595","type":"Oval"},"selection_glyph":null,"view":{"id":"29597","type":"CDSView"}},"id":"29596","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"29571","type":"BasicTicker"}},"id":"29574","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"29576","type":"BasicTicker"}},"id":"29579","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29606","type":"BoxAnnotation"},{"attributes":{},"id":"29566","type":"LinearScale"}],"root_ids":["29561"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"3ccaa3ce-b5c0-412b-997c-111f76da1d4f","roots":{"29561":"b21ade4e-a1d8-46ff-b296-f654153f1270"}}];
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