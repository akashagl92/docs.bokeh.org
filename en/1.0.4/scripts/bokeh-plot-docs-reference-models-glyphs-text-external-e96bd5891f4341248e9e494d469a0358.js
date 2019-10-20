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
      };var element = document.getElementById("a5a817b1-1989-4cd3-b049-cb10a4f8fd57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5a817b1-1989-4cd3-b049-cb10a4f8fd57' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"daf47d2c-83b7-49a1-997e-71301cdccbc8":{"roots":{"references":[{"attributes":{},"id":"29692","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29673","type":"Text"},{"attributes":{"callback":null,"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29692","type":"Selection"},"selection_policy":{"id":"29691","type":"UnionRenderers"}},"id":"29670","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"29689","type":"BasicTickFormatter"},"plot":{"id":"29671","type":"Plot"},"ticker":{"id":"29678","type":"BasicTicker"}},"id":"29676","type":"LinearAxis"},{"attributes":{"below":[{"id":"29676","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29677","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29674","type":"GlyphRenderer"},{"id":"29676","type":"LinearAxis"},{"id":"29677","type":"LinearAxis"},{"id":"29679","type":"Grid"},{"id":"29681","type":"Grid"}],"title":null,"toolbar":{"id":"29685","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29683","type":"DataRange1d"},"x_scale":{"id":"29682","type":"LinearScale"},"y_range":{"id":"29686","type":"DataRange1d"},"y_scale":{"id":"29684","type":"LinearScale"}},"id":"29671","type":"Plot"},{"attributes":{"source":{"id":"29670","type":"ColumnDataSource"}},"id":"29675","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"29671","type":"Plot"},"ticker":{"id":"29680","type":"BasicTicker"}},"id":"29681","type":"Grid"},{"attributes":{},"id":"29682","type":"LinearScale"},{"attributes":{"formatter":{"id":"29687","type":"BasicTickFormatter"},"plot":{"id":"29671","type":"Plot"},"ticker":{"id":"29680","type":"BasicTicker"}},"id":"29677","type":"LinearAxis"},{"attributes":{"callback":null},"id":"29683","type":"DataRange1d"},{"attributes":{"data_source":{"id":"29670","type":"ColumnDataSource"},"glyph":{"id":"29673","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29675","type":"CDSView"}},"id":"29674","type":"GlyphRenderer"},{"attributes":{},"id":"29680","type":"BasicTicker"},{"attributes":{},"id":"29691","type":"UnionRenderers"},{"attributes":{},"id":"29687","type":"BasicTickFormatter"},{"attributes":{},"id":"29678","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29685","type":"Toolbar"},{"attributes":{},"id":"29684","type":"LinearScale"},{"attributes":{"callback":null},"id":"29686","type":"DataRange1d"},{"attributes":{"plot":{"id":"29671","type":"Plot"},"ticker":{"id":"29678","type":"BasicTicker"}},"id":"29679","type":"Grid"},{"attributes":{},"id":"29689","type":"BasicTickFormatter"}],"root_ids":["29671"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"daf47d2c-83b7-49a1-997e-71301cdccbc8","roots":{"29671":"a5a817b1-1989-4cd3-b049-cb10a4f8fd57"}}];
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