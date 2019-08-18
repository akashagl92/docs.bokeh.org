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
      };var element = document.getElementById("1a64f603-44e1-48c4-9476-0d0695c399a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a64f603-44e1-48c4-9476-0d0695c399a0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"8185ccda-898c-4add-a260-a2a10286c302":{"roots":{"references":[{"attributes":{"callback":null},"id":"0206b897-636d-49a0-b66c-b1f2bd6f4de4","type":"DataRange1d"},{"attributes":{},"id":"719fe866-4e1f-460e-a946-5ed6512ba626","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"62e84496-5204-4c89-bc05-ef7980a86967","type":"Selection"},"selection_policy":{"id":"c28b41c9-934d-4669-a830-8b1219b12ddd","type":"UnionRenderers"}},"id":"05e86a84-535b-47ec-91be-c8c15a5241f2","type":"ColumnDataSource"},{"attributes":{},"id":"6bba42e7-d701-409f-b1da-9a69952c1e10","type":"BasicTicker"},{"attributes":{},"id":"c28b41c9-934d-4669-a830-8b1219b12ddd","type":"UnionRenderers"},{"attributes":{"source":{"id":"05e86a84-535b-47ec-91be-c8c15a5241f2","type":"ColumnDataSource"}},"id":"270ab404-255b-48d8-b967-6dfc449145bc","type":"CDSView"},{"attributes":{},"id":"14009068-67c1-451c-8cdf-aa887e8a9550","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b7c35706-fdf2-420e-b804-a34ff7437825","type":"Plot"},"ticker":{"id":"14009068-67c1-451c-8cdf-aa887e8a9550","type":"BasicTicker"}},"id":"61ca6d5b-ac60-4e35-a663-b3be6f924571","type":"Grid"},{"attributes":{"formatter":{"id":"a4f5aaf4-1e65-4e72-b483-e68cb87de841","type":"BasicTickFormatter"},"plot":{"id":"b7c35706-fdf2-420e-b804-a34ff7437825","type":"Plot"},"ticker":{"id":"6bba42e7-d701-409f-b1da-9a69952c1e10","type":"BasicTicker"}},"id":"7f93d893-9996-48fd-ae96-000e48ed1c39","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"74f6dae2-5ae8-4500-952e-66d2a22c926f","type":"Toolbar"},{"attributes":{},"id":"3b8257a8-06cf-4e86-be01-997513a23faa","type":"LinearScale"},{"attributes":{},"id":"a4f5aaf4-1e65-4e72-b483-e68cb87de841","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"293fd708-d1a3-4e76-bbd8-21a9baf9edfa","type":"BasicTickFormatter"},"plot":{"id":"b7c35706-fdf2-420e-b804-a34ff7437825","type":"Plot"},"ticker":{"id":"14009068-67c1-451c-8cdf-aa887e8a9550","type":"BasicTicker"}},"id":"4b493595-a42e-4074-92e5-38843fa695f7","type":"LinearAxis"},{"attributes":{"below":[{"id":"7f93d893-9996-48fd-ae96-000e48ed1c39","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4b493595-a42e-4074-92e5-38843fa695f7","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"895e9928-e281-4dfc-9334-c0bdfb016bfd","type":"GlyphRenderer"},{"id":"7f93d893-9996-48fd-ae96-000e48ed1c39","type":"LinearAxis"},{"id":"4b493595-a42e-4074-92e5-38843fa695f7","type":"LinearAxis"},{"id":"459dc99f-66bf-46a0-984b-3aa866e73f31","type":"Grid"},{"id":"61ca6d5b-ac60-4e35-a663-b3be6f924571","type":"Grid"}],"title":null,"toolbar":{"id":"74f6dae2-5ae8-4500-952e-66d2a22c926f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0206b897-636d-49a0-b66c-b1f2bd6f4de4","type":"DataRange1d"},"x_scale":{"id":"719fe866-4e1f-460e-a946-5ed6512ba626","type":"LinearScale"},"y_range":{"id":"f1344901-82b0-4770-b43d-3355bbbabb30","type":"DataRange1d"},"y_scale":{"id":"3b8257a8-06cf-4e86-be01-997513a23faa","type":"LinearScale"}},"id":"b7c35706-fdf2-420e-b804-a34ff7437825","type":"Plot"},{"attributes":{"plot":{"id":"b7c35706-fdf2-420e-b804-a34ff7437825","type":"Plot"},"ticker":{"id":"6bba42e7-d701-409f-b1da-9a69952c1e10","type":"BasicTicker"}},"id":"459dc99f-66bf-46a0-984b-3aa866e73f31","type":"Grid"},{"attributes":{},"id":"62e84496-5204-4c89-bc05-ef7980a86967","type":"Selection"},{"attributes":{"data_source":{"id":"05e86a84-535b-47ec-91be-c8c15a5241f2","type":"ColumnDataSource"},"glyph":{"id":"fef1c6ae-a3da-4ebf-bc8c-0fdfea85a9a6","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"270ab404-255b-48d8-b967-6dfc449145bc","type":"CDSView"}},"id":"895e9928-e281-4dfc-9334-c0bdfb016bfd","type":"GlyphRenderer"},{"attributes":{},"id":"293fd708-d1a3-4e76-bbd8-21a9baf9edfa","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"fef1c6ae-a3da-4ebf-bc8c-0fdfea85a9a6","type":"VBar"},{"attributes":{"callback":null},"id":"f1344901-82b0-4770-b43d-3355bbbabb30","type":"DataRange1d"}],"root_ids":["b7c35706-fdf2-420e-b804-a34ff7437825"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8185ccda-898c-4add-a260-a2a10286c302","roots":{"b7c35706-fdf2-420e-b804-a34ff7437825":"1a64f603-44e1-48c4-9476-0d0695c399a0"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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