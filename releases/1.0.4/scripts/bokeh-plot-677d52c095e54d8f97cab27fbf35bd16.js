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
      };var element = document.getElementById("b8306ca9-ae70-4524-b3d8-74abf5b9fa9e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b8306ca9-ae70-4524-b3d8-74abf5b9fa9e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"76ac0b1f-c375-4183-92c1-43edd25b71f7":{"roots":{"references":[{"attributes":{"plot":{"id":"13685","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"13699","type":"Label"},{"attributes":{"end":{"id":"13688","type":"OpenHead"},"plot":{"id":"13685","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"13689","type":"Arrow"},{"attributes":{"plot":{"id":"13685","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"13691","type":"Label"},{"attributes":{},"id":"13702","type":"LinearScale"},{"attributes":{"plot":null},"id":"13692","type":"NormalHead"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"13703","type":"Toolbar"},{"attributes":{"end":{"id":"13692","type":"NormalHead"},"plot":{"id":"13685","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"13693","type":"Arrow"},{"attributes":{"plot":{"id":"13685","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"13695","type":"Label"},{"attributes":{"callback":null},"id":"13683","type":"Range1d"},{"attributes":{"plot":null},"id":"13696","type":"VeeHead"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"13684","type":"Range1d"},{"attributes":{"end":{"id":"13696","type":"VeeHead"},"plot":{"id":"13685","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"13697","type":"Arrow"},{"attributes":{},"id":"13701","type":"LinearScale"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"13689","type":"Arrow"},{"id":"13691","type":"Label"},{"id":"13693","type":"Arrow"},{"id":"13695","type":"Label"},{"id":"13697","type":"Arrow"},{"id":"13699","type":"Label"}],"title":{"id":"13700","type":"Title"},"toolbar":{"id":"13703","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"13683","type":"Range1d"},"x_scale":{"id":"13701","type":"LinearScale"},"y_range":{"id":"13684","type":"Range1d"},"y_scale":{"id":"13702","type":"LinearScale"}},"id":"13685","type":"Plot"},{"attributes":{"plot":null},"id":"13688","type":"OpenHead"},{"attributes":{"plot":null,"text":""},"id":"13700","type":"Title"}],"root_ids":["13685"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"76ac0b1f-c375-4183-92c1-43edd25b71f7","roots":{"13685":"b8306ca9-ae70-4524-b3d8-74abf5b9fa9e"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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