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
      };var element = document.getElementById("77b83e01-67f4-47ac-a127-fbc918a7de59");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77b83e01-67f4-47ac-a127-fbc918a7de59' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"d8af5da4-f30a-417d-816d-bcef4bce858b":{"roots":{"references":[{"attributes":{"callback":null,"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29683","type":"Selection"},"selection_policy":{"id":"29682","type":"UnionRenderers"}},"id":"29661","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"29667","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29668","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29665","type":"GlyphRenderer"},{"id":"29667","type":"LinearAxis"},{"id":"29668","type":"LinearAxis"},{"id":"29670","type":"Grid"},{"id":"29672","type":"Grid"}],"title":null,"toolbar":{"id":"29673","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29676","type":"DataRange1d"},"x_scale":{"id":"29674","type":"LinearScale"},"y_range":{"id":"29675","type":"DataRange1d"},"y_scale":{"id":"29677","type":"LinearScale"}},"id":"29662","type":"Plot"},{"attributes":{},"id":"29679","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"29675","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29673","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"29662","type":"Plot"},"ticker":{"id":"29671","type":"BasicTicker"}},"id":"29672","type":"Grid"},{"attributes":{"formatter":{"id":"29679","type":"BasicTickFormatter"},"plot":{"id":"29662","type":"Plot"},"ticker":{"id":"29669","type":"BasicTicker"}},"id":"29667","type":"LinearAxis"},{"attributes":{},"id":"29683","type":"Selection"},{"attributes":{},"id":"29682","type":"UnionRenderers"},{"attributes":{},"id":"29669","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29664","type":"Text"},{"attributes":{"formatter":{"id":"29681","type":"BasicTickFormatter"},"plot":{"id":"29662","type":"Plot"},"ticker":{"id":"29671","type":"BasicTicker"}},"id":"29668","type":"LinearAxis"},{"attributes":{},"id":"29677","type":"LinearScale"},{"attributes":{},"id":"29674","type":"LinearScale"},{"attributes":{"plot":{"id":"29662","type":"Plot"},"ticker":{"id":"29669","type":"BasicTicker"}},"id":"29670","type":"Grid"},{"attributes":{"data_source":{"id":"29661","type":"ColumnDataSource"},"glyph":{"id":"29664","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29666","type":"CDSView"}},"id":"29665","type":"GlyphRenderer"},{"attributes":{},"id":"29681","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"29676","type":"DataRange1d"},{"attributes":{"source":{"id":"29661","type":"ColumnDataSource"}},"id":"29666","type":"CDSView"},{"attributes":{},"id":"29671","type":"BasicTicker"}],"root_ids":["29662"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d8af5da4-f30a-417d-816d-bcef4bce858b","roots":{"29662":"77b83e01-67f4-47ac-a127-fbc918a7de59"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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