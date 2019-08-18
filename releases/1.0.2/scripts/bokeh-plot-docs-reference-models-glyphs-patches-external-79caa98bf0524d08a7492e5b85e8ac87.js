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
      };var element = document.getElementById("b98a8ad0-3f5e-44d8-bc4b-d917a14c2bce");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b98a8ad0-3f5e-44d8-bc4b-d917a14c2bce' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"63532f6e-38a3-4e1a-8b51-6e7b1de2f4d3":{"roots":{"references":[{"attributes":{},"id":"28978","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28965","type":"Patches"},{"attributes":{},"id":"28984","type":"Selection"},{"attributes":{"callback":null,"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]},"selected":{"id":"28984","type":"Selection"},"selection_policy":{"id":"28983","type":"UnionRenderers"}},"id":"28962","type":"ColumnDataSource"},{"attributes":{},"id":"28970","type":"BasicTicker"},{"attributes":{},"id":"28975","type":"LinearScale"},{"attributes":{"plot":{"id":"28963","type":"Plot"},"ticker":{"id":"28970","type":"BasicTicker"}},"id":"28971","type":"Grid"},{"attributes":{},"id":"28982","type":"BasicTickFormatter"},{"attributes":{},"id":"28980","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28980","type":"BasicTickFormatter"},"plot":{"id":"28963","type":"Plot"},"ticker":{"id":"28970","type":"BasicTicker"}},"id":"28968","type":"LinearAxis"},{"attributes":{"callback":null},"id":"28976","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28982","type":"BasicTickFormatter"},"plot":{"id":"28963","type":"Plot"},"ticker":{"id":"28972","type":"BasicTicker"}},"id":"28969","type":"LinearAxis"},{"attributes":{},"id":"28972","type":"BasicTicker"},{"attributes":{},"id":"28983","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"28963","type":"Plot"},"ticker":{"id":"28972","type":"BasicTicker"}},"id":"28973","type":"Grid"},{"attributes":{"source":{"id":"28962","type":"ColumnDataSource"}},"id":"28967","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28974","type":"Toolbar"},{"attributes":{"below":[{"id":"28968","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28969","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28966","type":"GlyphRenderer"},{"id":"28968","type":"LinearAxis"},{"id":"28969","type":"LinearAxis"},{"id":"28971","type":"Grid"},{"id":"28973","type":"Grid"}],"title":null,"toolbar":{"id":"28974","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28977","type":"DataRange1d"},"x_scale":{"id":"28975","type":"LinearScale"},"y_range":{"id":"28976","type":"DataRange1d"},"y_scale":{"id":"28978","type":"LinearScale"}},"id":"28963","type":"Plot"},{"attributes":{"data_source":{"id":"28962","type":"ColumnDataSource"},"glyph":{"id":"28965","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28967","type":"CDSView"}},"id":"28966","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"28977","type":"DataRange1d"}],"root_ids":["28963"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"63532f6e-38a3-4e1a-8b51-6e7b1de2f4d3","roots":{"28963":"b98a8ad0-3f5e-44d8-bc4b-d917a14c2bce"}}];
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