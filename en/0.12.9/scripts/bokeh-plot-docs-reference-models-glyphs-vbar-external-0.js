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
      };var element = document.getElementById("88306861-37ec-4305-9ad2-e2fff333f52e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '88306861-37ec-4305-9ad2-e2fff333f52e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"5fba2544-d07d-46de-a5ce-7f83970af2ea":{"roots":{"references":[{"attributes":{"callback":null},"id":"6196c971-3d29-4e21-a547-44268061aa13","type":"DataRange1d"},{"attributes":{},"id":"0e75b21e-3ef2-4af2-8b5c-94162501299a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e730b1de-7e10-4b6e-8768-74212bb3b68a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"85798849-5f93-4a80-89d5-b54d25b25e76","type":"ColumnDataSource"},"glyph":{"id":"bc3188e9-8c1f-46b3-82fe-81d2a50578a0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"282a49b8-e74e-4cd5-b85b-76285c874cc9","type":"CDSView"}},"id":"f12bccdf-e698-4c74-8812-d7787732893b","type":"GlyphRenderer"},{"attributes":{},"id":"6216c266-b517-4d69-b7b1-b2f49355b96f","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"599347c1-3b19-43d4-8fea-0895feb12b01","type":"Plot"},"ticker":{"id":"eb7a3e20-fd3a-4ad1-8b87-ba8f4f1b35a5","type":"BasicTicker"}},"id":"078ec9ab-7440-4fa7-9c5e-3949345e630e","type":"Grid"},{"attributes":{},"id":"5e37a3c2-d242-403f-adfb-7970ba3bb852","type":"LinearScale"},{"attributes":{},"id":"8060bc45-0c13-44e7-a126-926205834af8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"85798849-5f93-4a80-89d5-b54d25b25e76","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"599347c1-3b19-43d4-8fea-0895feb12b01","type":"Plot"},"ticker":{"id":"9be01589-5c99-4416-a883-adacfdc18ec8","type":"BasicTicker"}},"id":"c78d81dc-197b-46c6-803a-37b1edb2b80c","type":"Grid"},{"attributes":{},"id":"eb7a3e20-fd3a-4ad1-8b87-ba8f4f1b35a5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f8b5d49d-a610-4b99-a29a-cbf9023daf2d","type":"Toolbar"},{"attributes":{"source":{"id":"85798849-5f93-4a80-89d5-b54d25b25e76","type":"ColumnDataSource"}},"id":"282a49b8-e74e-4cd5-b85b-76285c874cc9","type":"CDSView"},{"attributes":{"formatter":{"id":"8060bc45-0c13-44e7-a126-926205834af8","type":"BasicTickFormatter"},"plot":{"id":"599347c1-3b19-43d4-8fea-0895feb12b01","type":"Plot"},"ticker":{"id":"eb7a3e20-fd3a-4ad1-8b87-ba8f4f1b35a5","type":"BasicTicker"}},"id":"e1cf1231-4f64-407a-ac32-66caf59b1b30","type":"LinearAxis"},{"attributes":{"formatter":{"id":"0e75b21e-3ef2-4af2-8b5c-94162501299a","type":"BasicTickFormatter"},"plot":{"id":"599347c1-3b19-43d4-8fea-0895feb12b01","type":"Plot"},"ticker":{"id":"9be01589-5c99-4416-a883-adacfdc18ec8","type":"BasicTicker"}},"id":"6a4fa485-3145-4db5-8e1e-a81f9a87785f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"bc3188e9-8c1f-46b3-82fe-81d2a50578a0","type":"VBar"},{"attributes":{"below":[{"id":"6a4fa485-3145-4db5-8e1e-a81f9a87785f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e1cf1231-4f64-407a-ac32-66caf59b1b30","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f12bccdf-e698-4c74-8812-d7787732893b","type":"GlyphRenderer"},{"id":"6a4fa485-3145-4db5-8e1e-a81f9a87785f","type":"LinearAxis"},{"id":"e1cf1231-4f64-407a-ac32-66caf59b1b30","type":"LinearAxis"},{"id":"c78d81dc-197b-46c6-803a-37b1edb2b80c","type":"Grid"},{"id":"078ec9ab-7440-4fa7-9c5e-3949345e630e","type":"Grid"}],"title":null,"toolbar":{"id":"f8b5d49d-a610-4b99-a29a-cbf9023daf2d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6196c971-3d29-4e21-a547-44268061aa13","type":"DataRange1d"},"x_scale":{"id":"5e37a3c2-d242-403f-adfb-7970ba3bb852","type":"LinearScale"},"y_range":{"id":"e730b1de-7e10-4b6e-8768-74212bb3b68a","type":"DataRange1d"},"y_scale":{"id":"6216c266-b517-4d69-b7b1-b2f49355b96f","type":"LinearScale"}},"id":"599347c1-3b19-43d4-8fea-0895feb12b01","type":"Plot"},{"attributes":{},"id":"9be01589-5c99-4416-a883-adacfdc18ec8","type":"BasicTicker"}],"root_ids":["599347c1-3b19-43d4-8fea-0895feb12b01"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5fba2544-d07d-46de-a5ce-7f83970af2ea","elementid":"88306861-37ec-4305-9ad2-e2fff333f52e","modelid":"599347c1-3b19-43d4-8fea-0895feb12b01"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
