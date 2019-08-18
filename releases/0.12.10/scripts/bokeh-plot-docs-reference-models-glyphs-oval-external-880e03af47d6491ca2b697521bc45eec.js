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
      };var element = document.getElementById("318011f6-b89b-498b-9c7f-719480fce1b9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '318011f6-b89b-498b-9c7f-719480fce1b9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"9b373e8a-7012-46be-9536-8d59795aad2b":{"roots":{"references":[{"attributes":{"callback":null},"id":"869cdb8e-6f18-4553-86d6-471a308a9715","type":"DataRange1d"},{"attributes":{"plot":{"id":"e033b863-e74f-40f6-9924-a477d02fcd64","type":"Plot"},"ticker":{"id":"714dd737-fa96-4ef5-8149-6412f0bb084e","type":"BasicTicker"}},"id":"fab18a36-4f93-415c-b651-a6af79304bec","type":"Grid"},{"attributes":{},"id":"714dd737-fa96-4ef5-8149-6412f0bb084e","type":"BasicTicker"},{"attributes":{},"id":"4c937182-063a-43b9-811d-de8eccddf9be","type":"LinearScale"},{"attributes":{"below":[{"id":"39d63058-076f-4efc-b1a5-a2c0442f2501","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"80a7e8e5-fa4d-4395-b896-cf649234596c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4f0f4dbc-5dc5-4328-ad3a-2eab6cd061e1","type":"GlyphRenderer"},{"id":"39d63058-076f-4efc-b1a5-a2c0442f2501","type":"LinearAxis"},{"id":"80a7e8e5-fa4d-4395-b896-cf649234596c","type":"LinearAxis"},{"id":"fab18a36-4f93-415c-b651-a6af79304bec","type":"Grid"},{"id":"e1c8f38e-60fa-4a8a-8533-0dfd47d8a473","type":"Grid"}],"title":null,"toolbar":{"id":"bb25b7a5-dab2-419f-8020-9da55d76c663","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"869cdb8e-6f18-4553-86d6-471a308a9715","type":"DataRange1d"},"x_scale":{"id":"4c937182-063a-43b9-811d-de8eccddf9be","type":"LinearScale"},"y_range":{"id":"ecebf108-0c73-43e1-842e-7e46301542fd","type":"DataRange1d"},"y_scale":{"id":"b952d5b1-f9c9-4954-9c73-10d501295ef4","type":"LinearScale"}},"id":"e033b863-e74f-40f6-9924-a477d02fcd64","type":"Plot"},{"attributes":{},"id":"8c7e331c-ea2d-4ce3-86ec-c851f85d1865","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bb25b7a5-dab2-419f-8020-9da55d76c663","type":"Toolbar"},{"attributes":{"data_source":{"id":"b8b7b649-3b02-4588-bb15-a87454e23cd5","type":"ColumnDataSource"},"glyph":{"id":"806f3723-37bf-47cb-abe9-c32d779c867a","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"d7abf283-e30e-4418-ace7-53158d39e79c","type":"CDSView"}},"id":"4f0f4dbc-5dc5-4328-ad3a-2eab6cd061e1","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"8c7e331c-ea2d-4ce3-86ec-c851f85d1865","type":"BasicTickFormatter"},"plot":{"id":"e033b863-e74f-40f6-9924-a477d02fcd64","type":"Plot"},"ticker":{"id":"ed955ae1-40ac-4570-b12f-9affa03489b4","type":"BasicTicker"}},"id":"80a7e8e5-fa4d-4395-b896-cf649234596c","type":"LinearAxis"},{"attributes":{},"id":"ed955ae1-40ac-4570-b12f-9affa03489b4","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ecebf108-0c73-43e1-842e-7e46301542fd","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e033b863-e74f-40f6-9924-a477d02fcd64","type":"Plot"},"ticker":{"id":"ed955ae1-40ac-4570-b12f-9affa03489b4","type":"BasicTicker"}},"id":"e1c8f38e-60fa-4a8a-8533-0dfd47d8a473","type":"Grid"},{"attributes":{},"id":"d916ba0b-a1be-4b70-97e1-3593094591df","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b8b7b649-3b02-4588-bb15-a87454e23cd5","type":"ColumnDataSource"}},"id":"d7abf283-e30e-4418-ace7-53158d39e79c","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"806f3723-37bf-47cb-abe9-c32d779c867a","type":"Oval"},{"attributes":{"formatter":{"id":"d916ba0b-a1be-4b70-97e1-3593094591df","type":"BasicTickFormatter"},"plot":{"id":"e033b863-e74f-40f6-9924-a477d02fcd64","type":"Plot"},"ticker":{"id":"714dd737-fa96-4ef5-8149-6412f0bb084e","type":"BasicTicker"}},"id":"39d63058-076f-4efc-b1a5-a2c0442f2501","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"b8b7b649-3b02-4588-bb15-a87454e23cd5","type":"ColumnDataSource"},{"attributes":{},"id":"b952d5b1-f9c9-4954-9c73-10d501295ef4","type":"LinearScale"}],"root_ids":["e033b863-e74f-40f6-9924-a477d02fcd64"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"9b373e8a-7012-46be-9536-8d59795aad2b","elementid":"318011f6-b89b-498b-9c7f-719480fce1b9","modelid":"e033b863-e74f-40f6-9924-a477d02fcd64"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
