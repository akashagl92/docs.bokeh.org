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
      };var element = document.getElementById("44d5b180-2580-4172-a032-ef7b943006a9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '44d5b180-2580-4172-a032-ef7b943006a9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f4c1a0a-22ba-45a0-9557-b53205d3713a":{"roots":{"references":[{"attributes":{"end":{"id":"32887","type":"OpenHead"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"32888","type":"Arrow"},{"attributes":{"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"32898","type":"Label"},{"attributes":{"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"32894","type":"Label"},{"attributes":{},"id":"32902","type":"LinearScale"},{"attributes":{"end":{"id":"32891","type":"NormalHead"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"32892","type":"Arrow"},{"attributes":{},"id":"32891","type":"NormalHead"},{"attributes":{"center":[{"id":"32888","type":"Arrow"},{"id":"32890","type":"Label"},{"id":"32892","type":"Arrow"},{"id":"32894","type":"Label"},{"id":"32896","type":"Arrow"},{"id":"32898","type":"Label"}],"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"title":{"id":"32901","type":"Title"},"toolbar":{"id":"32899","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"32882","type":"Range1d"},"x_scale":{"id":"32900","type":"LinearScale"},"y_range":{"id":"32883","type":"Range1d"},"y_scale":{"id":"32902","type":"LinearScale"}},"id":"32884","type":"Plot"},{"attributes":{},"id":"32895","type":"VeeHead"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"32883","type":"Range1d"},{"attributes":{},"id":"32900","type":"LinearScale"},{"attributes":{"callback":null},"id":"32882","type":"Range1d"},{"attributes":{"end":{"id":"32895","type":"VeeHead"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"32896","type":"Arrow"},{"attributes":{},"id":"32887","type":"OpenHead"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"32899","type":"Toolbar"},{"attributes":{"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"32890","type":"Label"},{"attributes":{"text":""},"id":"32901","type":"Title"}],"root_ids":["32884"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"1f4c1a0a-22ba-45a0-9557-b53205d3713a","roots":{"32884":"44d5b180-2580-4172-a032-ef7b943006a9"}}];
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