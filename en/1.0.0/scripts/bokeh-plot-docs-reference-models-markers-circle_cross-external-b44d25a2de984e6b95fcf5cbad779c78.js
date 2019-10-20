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
      };var element = document.getElementById("e18f1124-373b-44e3-9faf-e8e0d44a31fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e18f1124-373b-44e3-9faf-e8e0d44a31fa' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"031d2517-7601-4f23-8d5b-80a6639f914a":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"30265","type":"Plot"},"ticker":{"id":"30274","type":"BasicTicker"}},"id":"30275","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30277","type":"Toolbar"},{"attributes":{"formatter":{"id":"30282","type":"BasicTickFormatter"},"plot":{"id":"30265","type":"Plot"},"ticker":{"id":"30272","type":"BasicTicker"}},"id":"30270","type":"LinearAxis"},{"attributes":{},"id":"30282","type":"BasicTickFormatter"},{"attributes":{},"id":"30278","type":"LinearScale"},{"attributes":{"formatter":{"id":"30284","type":"BasicTickFormatter"},"plot":{"id":"30265","type":"Plot"},"ticker":{"id":"30274","type":"BasicTicker"}},"id":"30271","type":"LinearAxis"},{"attributes":{"callback":null},"id":"30276","type":"DataRange1d"},{"attributes":{},"id":"30272","type":"BasicTicker"},{"attributes":{},"id":"30285","type":"Selection"},{"attributes":{},"id":"30274","type":"BasicTicker"},{"attributes":{"plot":{"id":"30265","type":"Plot"},"ticker":{"id":"30272","type":"BasicTicker"}},"id":"30273","type":"Grid"},{"attributes":{},"id":"30284","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30280","type":"DataRange1d"},{"attributes":{},"id":"30279","type":"LinearScale"},{"attributes":{},"id":"30286","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"30285","type":"Selection"},"selection_policy":{"id":"30286","type":"UnionRenderers"}},"id":"30264","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30267","type":"CircleCross"},{"attributes":{"data_source":{"id":"30264","type":"ColumnDataSource"},"glyph":{"id":"30267","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30269","type":"CDSView"}},"id":"30268","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"30270","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"30271","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"30268","type":"GlyphRenderer"},{"id":"30270","type":"LinearAxis"},{"id":"30271","type":"LinearAxis"},{"id":"30273","type":"Grid"},{"id":"30275","type":"Grid"}],"title":null,"toolbar":{"id":"30277","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30280","type":"DataRange1d"},"x_scale":{"id":"30279","type":"LinearScale"},"y_range":{"id":"30276","type":"DataRange1d"},"y_scale":{"id":"30278","type":"LinearScale"}},"id":"30265","type":"Plot"},{"attributes":{"source":{"id":"30264","type":"ColumnDataSource"}},"id":"30269","type":"CDSView"}],"root_ids":["30265"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"031d2517-7601-4f23-8d5b-80a6639f914a","roots":{"30265":"e18f1124-373b-44e3-9faf-e8e0d44a31fa"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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