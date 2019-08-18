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
      };var element = document.getElementById("56af9df1-62dd-4ae7-a4a3-c0692e8738ed");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '56af9df1-62dd-4ae7-a4a3-c0692e8738ed' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"34457149-2bbc-47ae-9f73-5255c0019a26":{"roots":{"references":[{"attributes":{"callback":null},"id":"18751","type":"DataRange1d"},{"attributes":{},"id":"18801","type":"UnionRenderers"},{"attributes":{"end":{"id":"18791","type":"VeeHead"},"line_color":{"value":"red"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"18792","type":"Arrow"},{"attributes":{},"id":"18771","type":"ResetTool"},{"attributes":{},"id":"18799","type":"BasicTickFormatter"},{"attributes":{},"id":"18767","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18767","type":"PanTool"},{"id":"18768","type":"WheelZoomTool"},{"id":"18769","type":"BoxZoomTool"},{"id":"18770","type":"SaveTool"},{"id":"18771","type":"ResetTool"},{"id":"18772","type":"HelpTool"}]},"id":"18773","type":"Toolbar"},{"attributes":{},"id":"18763","type":"BasicTicker"},{"attributes":{"end":{"id":"18785","type":"OpenHead"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"18786","type":"Arrow"},{"attributes":{"ticker":{"id":"18758","type":"BasicTicker"}},"id":"18761","type":"Grid"},{"attributes":{"size":35},"id":"18791","type":"VeeHead"},{"attributes":{"data_source":{"id":"18780","type":"ColumnDataSource"},"glyph":{"id":"18781","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18782","type":"Circle"},"selection_glyph":null,"view":{"id":"18784","type":"CDSView"}},"id":"18783","type":"GlyphRenderer"},{"attributes":{},"id":"18768","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"18781","type":"Circle"},{"attributes":{},"id":"18770","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"18782","type":"Circle"},{"attributes":{},"id":"18755","type":"LinearScale"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4}},"id":"18785","type":"OpenHead"},{"attributes":{"source":{"id":"18780","type":"ColumnDataSource"}},"id":"18784","type":"CDSView"},{"attributes":{"below":[{"id":"18757","type":"LinearAxis"}],"center":[{"id":"18761","type":"Grid"},{"id":"18766","type":"Grid"},{"id":"18786","type":"Arrow"},{"id":"18789","type":"Arrow"},{"id":"18792","type":"Arrow"}],"left":[{"id":"18762","type":"LinearAxis"}],"renderers":[{"id":"18783","type":"GlyphRenderer"}],"title":{"id":"18795","type":"Title"},"toolbar":{"id":"18773","type":"Toolbar"},"x_range":{"id":"18749","type":"DataRange1d"},"x_scale":{"id":"18753","type":"LinearScale"},"y_range":{"id":"18751","type":"DataRange1d"},"y_scale":{"id":"18755","type":"LinearScale"}},"id":"18748","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18797","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"18795","type":"Title"},{"attributes":{},"id":"18772","type":"HelpTool"},{"attributes":{"formatter":{"id":"18799","type":"BasicTickFormatter"},"ticker":{"id":"18763","type":"BasicTicker"}},"id":"18762","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]},"selected":{"id":"18802","type":"Selection"},"selection_policy":{"id":"18801","type":"UnionRenderers"}},"id":"18780","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"18797","type":"BasicTickFormatter"},"ticker":{"id":"18758","type":"BasicTicker"}},"id":"18757","type":"LinearAxis"},{"attributes":{},"id":"18802","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"}},"id":"18788","type":"NormalHead"},{"attributes":{"end":{"id":"18788","type":"NormalHead"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"18789","type":"Arrow"},{"attributes":{"callback":null},"id":"18749","type":"DataRange1d"},{"attributes":{},"id":"18753","type":"LinearScale"},{"attributes":{"overlay":{"id":"18800","type":"BoxAnnotation"}},"id":"18769","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18800","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"18763","type":"BasicTicker"}},"id":"18766","type":"Grid"},{"attributes":{},"id":"18758","type":"BasicTicker"}],"root_ids":["18748"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"34457149-2bbc-47ae-9f73-5255c0019a26","roots":{"18748":"56af9df1-62dd-4ae7-a4a3-c0692e8738ed"}}];
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