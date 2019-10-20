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
      };var element = document.getElementById("0dab43d1-ee2c-4a38-8b20-88c4e5194dbf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0dab43d1-ee2c-4a38-8b20-88c4e5194dbf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f71ad6dc-e1bb-47eb-9771-4eeee957f2c7":{"roots":{"references":[{"attributes":{"callback":null},"id":"29185","type":"DataRange1d"},{"attributes":{},"id":"29181","type":"LinearScale"},{"attributes":{},"id":"29177","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29169","type":"ColumnDataSource"},"glyph":{"id":"29172","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29174","type":"CDSView"}},"id":"29173","type":"GlyphRenderer"},{"attributes":{},"id":"29186","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"29170","type":"Plot"},"ticker":{"id":"29177","type":"BasicTicker"}},"id":"29178","type":"Grid"},{"attributes":{"below":[{"id":"29175","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29176","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29173","type":"GlyphRenderer"},{"id":"29175","type":"LinearAxis"},{"id":"29176","type":"LinearAxis"},{"id":"29178","type":"Grid"},{"id":"29180","type":"Grid"}],"title":null,"toolbar":{"id":"29184","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29182","type":"DataRange1d"},"x_scale":{"id":"29181","type":"LinearScale"},"y_range":{"id":"29185","type":"DataRange1d"},"y_scale":{"id":"29183","type":"LinearScale"}},"id":"29170","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"29170","type":"Plot"},"ticker":{"id":"29179","type":"BasicTicker"}},"id":"29180","type":"Grid"},{"attributes":{"callback":null},"id":"29182","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"29191","type":"Selection"},"selection_policy":{"id":"29190","type":"UnionRenderers"}},"id":"29169","type":"ColumnDataSource"},{"attributes":{},"id":"29191","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29184","type":"Toolbar"},{"attributes":{},"id":"29188","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29186","type":"BasicTickFormatter"},"plot":{"id":"29170","type":"Plot"},"ticker":{"id":"29179","type":"BasicTicker"}},"id":"29176","type":"LinearAxis"},{"attributes":{"formatter":{"id":"29188","type":"BasicTickFormatter"},"plot":{"id":"29170","type":"Plot"},"ticker":{"id":"29177","type":"BasicTicker"}},"id":"29175","type":"LinearAxis"},{"attributes":{},"id":"29190","type":"UnionRenderers"},{"attributes":{},"id":"29183","type":"LinearScale"},{"attributes":{"source":{"id":"29169","type":"ColumnDataSource"}},"id":"29174","type":"CDSView"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4daf4a"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"29172","type":"Quadratic"},{"attributes":{},"id":"29179","type":"BasicTicker"}],"root_ids":["29170"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"f71ad6dc-e1bb-47eb-9771-4eeee957f2c7","roots":{"29170":"0dab43d1-ee2c-4a38-8b20-88c4e5194dbf"}}];
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