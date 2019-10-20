(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("bfcb5815-4b1f-4e32-ab32-af793d525d4d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bfcb5815-4b1f-4e32-ab32-af793d525d4d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"63d0ad7e-d934-4b66-b933-010978c28b43":{"roots":{"references":[{"attributes":{},"id":"12365","type":"UnionRenderers"},{"attributes":{},"id":"12322","type":"LinearScale"},{"attributes":{"gradient":2,"line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3.5},"plot":{"id":"12317","subtype":"Figure","type":"Plot"},"y_intercept":10},"id":"12356","type":"Slope"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12344","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"y":{"__ndarray__":"SJoRq3DLI0DjW7oP9nI0QGDSDQH9SzRARVC5/ATNKUAabb3ikyM0QCcVpKkNLjpAtR8AyUJmN0DM6K3Z/rk9QLVVmk9FcD1AvndvzG7IPEDz4goj5QA/QFjPbW5h8UNAXIg5WhH5Q0B9LkZv6BtAQIYWtKMKYUNAXDYXvhURREDBSSefsENKQNAqVJ7KbUZA8EEtfRqaQkD/3UGri/RJQA==","dtype":"float64","shape":[20]}},"selected":{"id":"12364","type":"Selection"},"selection_policy":{"id":"12365","type":"UnionRenderers"}},"id":"12351","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"12358","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"12353","type":"Circle"},{"attributes":{},"id":"12340","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"12317","subtype":"Figure","type":"Plot"},"ticker":{"id":"12332","type":"BasicTicker"}},"id":"12335","type":"Grid"},{"attributes":{},"id":"12364","type":"Selection"},{"attributes":{},"id":"12341","type":"HelpTool"},{"attributes":{},"id":"12336","type":"PanTool"},{"attributes":{},"id":"12360","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"12352","type":"Circle"},{"attributes":{"callback":null,"end":57.78171032295419},"id":"12320","type":"Range1d"},{"attributes":{"axis_label":"x","formatter":{"id":"12360","type":"BasicTickFormatter"},"plot":{"id":"12317","subtype":"Figure","type":"Plot"},"ticker":{"id":"12327","type":"BasicTicker"}},"id":"12326","type":"LinearAxis"},{"attributes":{"plot":{"id":"12317","subtype":"Figure","type":"Plot"},"ticker":{"id":"12327","type":"BasicTicker"}},"id":"12330","type":"Grid"},{"attributes":{},"id":"12327","type":"BasicTicker"},{"attributes":{"source":{"id":"12351","type":"ColumnDataSource"}},"id":"12355","type":"CDSView"},{"attributes":{"overlay":{"id":"12344","type":"BoxAnnotation"}},"id":"12338","type":"BoxZoomTool"},{"attributes":{},"id":"12362","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"12351","type":"ColumnDataSource"},"glyph":{"id":"12352","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12353","type":"Circle"},"selection_glyph":null,"view":{"id":"12355","type":"CDSView"}},"id":"12354","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"12326","type":"LinearAxis"}],"left":[{"id":"12331","type":"LinearAxis"}],"plot_height":450,"plot_width":450,"renderers":[{"id":"12326","type":"LinearAxis"},{"id":"12330","type":"Grid"},{"id":"12331","type":"LinearAxis"},{"id":"12335","type":"Grid"},{"id":"12344","type":"BoxAnnotation"},{"id":"12354","type":"GlyphRenderer"},{"id":"12356","type":"Slope"}],"title":{"id":"12358","type":"Title"},"toolbar":{"id":"12342","type":"Toolbar"},"x_range":{"id":"12318","type":"DataRange1d"},"x_scale":{"id":"12322","type":"LinearScale"},"y_range":{"id":"12320","type":"Range1d"},"y_scale":{"id":"12324","type":"LinearScale"}},"id":"12317","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"12318","type":"DataRange1d"},{"attributes":{"axis_label":"y","formatter":{"id":"12362","type":"BasicTickFormatter"},"plot":{"id":"12317","subtype":"Figure","type":"Plot"},"ticker":{"id":"12332","type":"BasicTicker"}},"id":"12331","type":"LinearAxis"},{"attributes":{},"id":"12332","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12336","type":"PanTool"},{"id":"12337","type":"WheelZoomTool"},{"id":"12338","type":"BoxZoomTool"},{"id":"12339","type":"SaveTool"},{"id":"12340","type":"ResetTool"},{"id":"12341","type":"HelpTool"}]},"id":"12342","type":"Toolbar"},{"attributes":{},"id":"12337","type":"WheelZoomTool"},{"attributes":{},"id":"12339","type":"SaveTool"},{"attributes":{},"id":"12324","type":"LinearScale"}],"root_ids":["12317"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"63d0ad7e-d934-4b66-b933-010978c28b43","roots":{"12317":"bfcb5815-4b1f-4e32-ab32-af793d525d4d"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();