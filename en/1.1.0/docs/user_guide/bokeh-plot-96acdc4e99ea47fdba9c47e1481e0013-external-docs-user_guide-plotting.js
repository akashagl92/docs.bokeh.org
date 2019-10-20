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
      };var element = document.getElementById("71c65beb-492c-49cf-a310-d56ececbc6f1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '71c65beb-492c-49cf-a310-d56ececbc6f1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"570f7438-e41f-4bad-9143-a372fceea5a3":{"roots":{"references":[{"attributes":{"source":{"id":"27135","type":"ColumnDataSource"}},"id":"27139","type":"CDSView"},{"attributes":{"formatter":{"id":"27145","type":"BasicTickFormatter"},"ticker":{"id":"27113","type":"BasicTicker"}},"id":"27112","type":"LinearAxis"},{"attributes":{},"id":"27125","type":"SaveTool"},{"attributes":{},"id":"27113","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27104","type":"DataRange1d"},{"attributes":{"below":[{"id":"27112","type":"LinearAxis"}],"center":[{"id":"27116","type":"Grid"},{"id":"27121","type":"Grid"}],"left":[{"id":"27117","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27138","type":"GlyphRenderer"}],"title":{"id":"27141","type":"Title"},"toolbar":{"id":"27128","type":"Toolbar"},"x_range":{"id":"27104","type":"DataRange1d"},"x_scale":{"id":"27108","type":"LinearScale"},"y_range":{"id":"27106","type":"DataRange1d"},"y_scale":{"id":"27110","type":"LinearScale"}},"id":"27103","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"27148","type":"BoxAnnotation"}},"id":"27124","type":"BoxZoomTool"},{"attributes":{},"id":"27126","type":"ResetTool"},{"attributes":{},"id":"27123","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"27141","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"27118","type":"BasicTicker"}},"id":"27121","type":"Grid"},{"attributes":{},"id":"27146","type":"UnionRenderers"},{"attributes":{},"id":"27110","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27148","type":"BoxAnnotation"},{"attributes":{},"id":"27145","type":"BasicTickFormatter"},{"attributes":{},"id":"27118","type":"BasicTicker"},{"attributes":{"formatter":{"id":"27143","type":"BasicTickFormatter"},"ticker":{"id":"27118","type":"BasicTicker"}},"id":"27117","type":"LinearAxis"},{"attributes":{"ticker":{"id":"27113","type":"BasicTicker"}},"id":"27116","type":"Grid"},{"attributes":{},"id":"27143","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"27136","type":"Step"},{"attributes":{},"id":"27122","type":"PanTool"},{"attributes":{},"id":"27127","type":"HelpTool"},{"attributes":{"data_source":{"id":"27135","type":"ColumnDataSource"},"glyph":{"id":"27136","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27137","type":"Step"},"selection_glyph":null,"view":{"id":"27139","type":"CDSView"}},"id":"27138","type":"GlyphRenderer"},{"attributes":{},"id":"27147","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27147","type":"Selection"},"selection_policy":{"id":"27146","type":"UnionRenderers"}},"id":"27135","type":"ColumnDataSource"},{"attributes":{},"id":"27108","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27122","type":"PanTool"},{"id":"27123","type":"WheelZoomTool"},{"id":"27124","type":"BoxZoomTool"},{"id":"27125","type":"SaveTool"},{"id":"27126","type":"ResetTool"},{"id":"27127","type":"HelpTool"}]},"id":"27128","type":"Toolbar"},{"attributes":{"callback":null},"id":"27106","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"27137","type":"Step"}],"root_ids":["27103"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"570f7438-e41f-4bad-9143-a372fceea5a3","roots":{"27103":"71c65beb-492c-49cf-a310-d56ececbc6f1"}}];
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