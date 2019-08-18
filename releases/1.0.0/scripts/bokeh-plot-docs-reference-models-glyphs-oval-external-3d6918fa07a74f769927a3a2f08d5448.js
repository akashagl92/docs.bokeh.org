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
      };var element = document.getElementById("b9413018-4f92-437b-9c83-b19d8ff4be4d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9413018-4f92-437b-9c83-b19d8ff4be4d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0b52997a-75ba-4376-8cef-4151b39b5fe3":{"roots":{"references":[{"attributes":{"callback":null},"id":"28774","type":"DataRange1d"},{"attributes":{},"id":"28782","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"28783","type":"Selection"},"selection_policy":{"id":"28784","type":"UnionRenderers"}},"id":"28762","type":"ColumnDataSource"},{"attributes":{},"id":"28770","type":"BasicTicker"},{"attributes":{"data_source":{"id":"28762","type":"ColumnDataSource"},"glyph":{"id":"28765","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28767","type":"CDSView"}},"id":"28766","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"28763","type":"Plot"},"ticker":{"id":"28772","type":"BasicTicker"}},"id":"28773","type":"Grid"},{"attributes":{},"id":"28784","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"28778","type":"DataRange1d"},{"attributes":{},"id":"28780","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28782","type":"BasicTickFormatter"},"plot":{"id":"28763","type":"Plot"},"ticker":{"id":"28772","type":"BasicTicker"}},"id":"28769","type":"LinearAxis"},{"attributes":{"plot":{"id":"28763","type":"Plot"},"ticker":{"id":"28770","type":"BasicTicker"}},"id":"28771","type":"Grid"},{"attributes":{"formatter":{"id":"28780","type":"BasicTickFormatter"},"plot":{"id":"28763","type":"Plot"},"ticker":{"id":"28770","type":"BasicTicker"}},"id":"28768","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28775","type":"Toolbar"},{"attributes":{},"id":"28776","type":"LinearScale"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"28765","type":"Oval"},{"attributes":{"below":[{"id":"28768","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28769","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28766","type":"GlyphRenderer"},{"id":"28768","type":"LinearAxis"},{"id":"28769","type":"LinearAxis"},{"id":"28771","type":"Grid"},{"id":"28773","type":"Grid"}],"title":null,"toolbar":{"id":"28775","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28778","type":"DataRange1d"},"x_scale":{"id":"28777","type":"LinearScale"},"y_range":{"id":"28774","type":"DataRange1d"},"y_scale":{"id":"28776","type":"LinearScale"}},"id":"28763","type":"Plot"},{"attributes":{},"id":"28772","type":"BasicTicker"},{"attributes":{},"id":"28777","type":"LinearScale"},{"attributes":{"source":{"id":"28762","type":"ColumnDataSource"}},"id":"28767","type":"CDSView"},{"attributes":{},"id":"28783","type":"Selection"}],"root_ids":["28763"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"0b52997a-75ba-4376-8cef-4151b39b5fe3","roots":{"28763":"b9413018-4f92-437b-9c83-b19d8ff4be4d"}}];
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