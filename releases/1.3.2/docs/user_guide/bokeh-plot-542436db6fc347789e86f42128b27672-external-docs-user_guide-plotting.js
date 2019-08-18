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
      };var element = document.getElementById("082160a0-7447-4582-94cd-c65ecf3b32e7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '082160a0-7447-4582-94cd-c65ecf3b32e7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5ac3a959-cba4-4b7c-abdc-54bc0b5630cb":{"roots":{"references":[{"attributes":{},"id":"30179","type":"BasicTicker"},{"attributes":{"text":""},"id":"30206","type":"Title"},{"attributes":{"ticker":{"id":"30179","type":"BasicTicker"}},"id":"30182","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30203","type":"AnnularWedge"},{"attributes":{},"id":"30192","type":"ResetTool"},{"attributes":{},"id":"30189","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"30208","type":"BasicTickFormatter"},"ticker":{"id":"30179","type":"BasicTicker"}},"id":"30178","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30214","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"30172","type":"DataRange1d"},{"attributes":{"data_source":{"id":"30201","type":"ColumnDataSource"},"glyph":{"id":"30202","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30203","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"30205","type":"CDSView"}},"id":"30204","type":"GlyphRenderer"},{"attributes":{},"id":"30210","type":"BasicTickFormatter"},{"attributes":{},"id":"30176","type":"LinearScale"},{"attributes":{},"id":"30174","type":"LinearScale"},{"attributes":{"overlay":{"id":"30214","type":"BoxAnnotation"}},"id":"30190","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"30178","type":"LinearAxis"}],"center":[{"id":"30182","type":"Grid"},{"id":"30187","type":"Grid"}],"left":[{"id":"30183","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30204","type":"GlyphRenderer"}],"title":{"id":"30206","type":"Title"},"toolbar":{"id":"30194","type":"Toolbar"},"x_range":{"id":"30170","type":"DataRange1d"},"x_scale":{"id":"30174","type":"LinearScale"},"y_range":{"id":"30172","type":"DataRange1d"},"y_scale":{"id":"30176","type":"LinearScale"}},"id":"30169","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30213","type":"Selection"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30202","type":"AnnularWedge"},{"attributes":{"callback":null},"id":"30170","type":"DataRange1d"},{"attributes":{},"id":"30188","type":"PanTool"},{"attributes":{"source":{"id":"30201","type":"ColumnDataSource"}},"id":"30205","type":"CDSView"},{"attributes":{},"id":"30184","type":"BasicTicker"},{"attributes":{},"id":"30191","type":"SaveTool"},{"attributes":{"formatter":{"id":"30210","type":"BasicTickFormatter"},"ticker":{"id":"30184","type":"BasicTicker"}},"id":"30183","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30188","type":"PanTool"},{"id":"30189","type":"WheelZoomTool"},{"id":"30190","type":"BoxZoomTool"},{"id":"30191","type":"SaveTool"},{"id":"30192","type":"ResetTool"},{"id":"30193","type":"HelpTool"}]},"id":"30194","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"30184","type":"BasicTicker"}},"id":"30187","type":"Grid"},{"attributes":{},"id":"30208","type":"BasicTickFormatter"},{"attributes":{},"id":"30212","type":"UnionRenderers"},{"attributes":{},"id":"30193","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30213","type":"Selection"},"selection_policy":{"id":"30212","type":"UnionRenderers"}},"id":"30201","type":"ColumnDataSource"}],"root_ids":["30169"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"5ac3a959-cba4-4b7c-abdc-54bc0b5630cb","roots":{"30169":"082160a0-7447-4582-94cd-c65ecf3b32e7"}}];
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