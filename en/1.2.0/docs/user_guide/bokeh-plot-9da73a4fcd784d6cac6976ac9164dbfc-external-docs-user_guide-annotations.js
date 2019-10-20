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
      };var element = document.getElementById("299a5b25-30ed-4950-b64f-9e85af040572");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '299a5b25-30ed-4950-b64f-9e85af040572' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"8367d630-4015-44c2-bdcc-69dfb3c94324":{"roots":{"references":[{"attributes":{"below":[{"id":"18737","type":"LinearAxis"}],"center":[{"id":"18741","type":"Grid"},{"id":"18746","type":"Grid"},{"id":"18766","type":"Arrow"},{"id":"18769","type":"Arrow"},{"id":"18772","type":"Arrow"}],"left":[{"id":"18742","type":"LinearAxis"}],"renderers":[{"id":"18763","type":"GlyphRenderer"}],"title":{"id":"18774","type":"Title"},"toolbar":{"id":"18753","type":"Toolbar"},"x_range":{"id":"18729","type":"DataRange1d"},"x_scale":{"id":"18733","type":"LinearScale"},"y_range":{"id":"18731","type":"DataRange1d"},"y_scale":{"id":"18735","type":"LinearScale"}},"id":"18728","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18743","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"18743","type":"BasicTicker"}},"id":"18746","type":"Grid"},{"attributes":{},"id":"18748","type":"WheelZoomTool"},{"attributes":{},"id":"18780","type":"Selection"},{"attributes":{"callback":null},"id":"18731","type":"DataRange1d"},{"attributes":{},"id":"18752","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"18762","type":"Circle"},{"attributes":{"data_source":{"id":"18760","type":"ColumnDataSource"},"glyph":{"id":"18761","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18762","type":"Circle"},"selection_glyph":null,"view":{"id":"18764","type":"CDSView"}},"id":"18763","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"18774","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18747","type":"PanTool"},{"id":"18748","type":"WheelZoomTool"},{"id":"18749","type":"BoxZoomTool"},{"id":"18750","type":"SaveTool"},{"id":"18751","type":"ResetTool"},{"id":"18752","type":"HelpTool"}]},"id":"18753","type":"Toolbar"},{"attributes":{"size":35},"id":"18771","type":"VeeHead"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4}},"id":"18765","type":"OpenHead"},{"attributes":{},"id":"18733","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18782","type":"BoxAnnotation"},{"attributes":{},"id":"18750","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"18761","type":"Circle"},{"attributes":{"end":{"id":"18768","type":"NormalHead"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"18769","type":"Arrow"},{"attributes":{"end":{"id":"18771","type":"VeeHead"},"line_color":{"value":"red"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"18772","type":"Arrow"},{"attributes":{},"id":"18751","type":"ResetTool"},{"attributes":{},"id":"18747","type":"PanTool"},{"attributes":{"formatter":{"id":"18776","type":"BasicTickFormatter"},"ticker":{"id":"18743","type":"BasicTicker"}},"id":"18742","type":"LinearAxis"},{"attributes":{"end":{"id":"18765","type":"OpenHead"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"18766","type":"Arrow"},{"attributes":{},"id":"18778","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18760","type":"ColumnDataSource"}},"id":"18764","type":"CDSView"},{"attributes":{},"id":"18738","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18729","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18778","type":"BasicTickFormatter"},"ticker":{"id":"18738","type":"BasicTicker"}},"id":"18737","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"orange"}},"id":"18768","type":"NormalHead"},{"attributes":{},"id":"18735","type":"LinearScale"},{"attributes":{"ticker":{"id":"18738","type":"BasicTicker"}},"id":"18741","type":"Grid"},{"attributes":{"overlay":{"id":"18782","type":"BoxAnnotation"}},"id":"18749","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]},"selected":{"id":"18780","type":"Selection"},"selection_policy":{"id":"18781","type":"UnionRenderers"}},"id":"18760","type":"ColumnDataSource"},{"attributes":{},"id":"18776","type":"BasicTickFormatter"},{"attributes":{},"id":"18781","type":"UnionRenderers"}],"root_ids":["18728"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8367d630-4015-44c2-bdcc-69dfb3c94324","roots":{"18728":"299a5b25-30ed-4950-b64f-9e85af040572"}}];
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