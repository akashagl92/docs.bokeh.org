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
      };var element = document.getElementById("8ab1083b-14ef-4734-8279-f96e8ae970fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ab1083b-14ef-4734-8279-f96e8ae970fe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1998e00e-c9e2-42eb-99bb-772c5fd3460b":{"roots":{"references":[{"attributes":{},"id":"876a0011-7b76-44bb-810c-5de7796a559f","type":"LinearScale"},{"attributes":{},"id":"3f5fccab-aa60-45fb-8402-42230cfd07ee","type":"Selection"},{"attributes":{},"id":"26375a27-7706-41ca-84d1-f9bd098770f8","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3fce9a9d-e5a4-46a8-bd40-492cf4faddc2","type":"ColumnDataSource"},"glyph":{"id":"1c87dc58-bcdd-4da0-8e95-7476a15f8ab8","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"1d636574-fb8b-47b7-a29d-5f0113857844","type":"CDSView"}},"id":"cfb0919a-4e48-4a54-b30a-88db2955d78e","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c87dc58-bcdd-4da0-8e95-7476a15f8ab8","type":"X"},{"attributes":{"formatter":{"id":"26375a27-7706-41ca-84d1-f9bd098770f8","type":"BasicTickFormatter"},"plot":{"id":"edee771d-2d65-4f29-be5a-cfe211d9a5b3","type":"Plot"},"ticker":{"id":"e0e6ad7d-860a-4059-b0c5-1e5865fa5416","type":"BasicTicker"}},"id":"0818bdea-bd2c-4ece-9f48-3fa1947831f1","type":"LinearAxis"},{"attributes":{},"id":"fb7d63ee-a81a-486c-bf38-129b537586bb","type":"LinearScale"},{"attributes":{},"id":"3bb89dcd-8651-4606-8fc1-091c9360bbb1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"913494ab-16c0-4054-950f-76f3f1465104","type":"Toolbar"},{"attributes":{},"id":"5a411cd5-34ac-4fc5-a5b7-f12600c550de","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"3f5fccab-aa60-45fb-8402-42230cfd07ee","type":"Selection"},"selection_policy":{"id":"5a411cd5-34ac-4fc5-a5b7-f12600c550de","type":"UnionRenderers"}},"id":"3fce9a9d-e5a4-46a8-bd40-492cf4faddc2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"edee771d-2d65-4f29-be5a-cfe211d9a5b3","type":"Plot"},"ticker":{"id":"3bb89dcd-8651-4606-8fc1-091c9360bbb1","type":"BasicTicker"}},"id":"6d18fbe0-c173-476d-b7de-2ceee951f499","type":"Grid"},{"attributes":{"below":[{"id":"6588155b-318b-4815-bcb0-66e8ba47e62a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0818bdea-bd2c-4ece-9f48-3fa1947831f1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"cfb0919a-4e48-4a54-b30a-88db2955d78e","type":"GlyphRenderer"},{"id":"6588155b-318b-4815-bcb0-66e8ba47e62a","type":"LinearAxis"},{"id":"0818bdea-bd2c-4ece-9f48-3fa1947831f1","type":"LinearAxis"},{"id":"6d18fbe0-c173-476d-b7de-2ceee951f499","type":"Grid"},{"id":"ed2ccd05-660e-455c-afe3-de9135375e24","type":"Grid"}],"title":null,"toolbar":{"id":"913494ab-16c0-4054-950f-76f3f1465104","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"bae6bd4c-577a-4ba9-aadb-24ac2ca1cc47","type":"DataRange1d"},"x_scale":{"id":"fb7d63ee-a81a-486c-bf38-129b537586bb","type":"LinearScale"},"y_range":{"id":"a2d63576-2e34-47ce-b3bd-1aa6231215c6","type":"DataRange1d"},"y_scale":{"id":"876a0011-7b76-44bb-810c-5de7796a559f","type":"LinearScale"}},"id":"edee771d-2d65-4f29-be5a-cfe211d9a5b3","type":"Plot"},{"attributes":{"formatter":{"id":"33d888e2-9c69-4e15-8447-babe47940bb7","type":"BasicTickFormatter"},"plot":{"id":"edee771d-2d65-4f29-be5a-cfe211d9a5b3","type":"Plot"},"ticker":{"id":"3bb89dcd-8651-4606-8fc1-091c9360bbb1","type":"BasicTicker"}},"id":"6588155b-318b-4815-bcb0-66e8ba47e62a","type":"LinearAxis"},{"attributes":{},"id":"33d888e2-9c69-4e15-8447-babe47940bb7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"bae6bd4c-577a-4ba9-aadb-24ac2ca1cc47","type":"DataRange1d"},{"attributes":{},"id":"e0e6ad7d-860a-4059-b0c5-1e5865fa5416","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a2d63576-2e34-47ce-b3bd-1aa6231215c6","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"edee771d-2d65-4f29-be5a-cfe211d9a5b3","type":"Plot"},"ticker":{"id":"e0e6ad7d-860a-4059-b0c5-1e5865fa5416","type":"BasicTicker"}},"id":"ed2ccd05-660e-455c-afe3-de9135375e24","type":"Grid"},{"attributes":{"source":{"id":"3fce9a9d-e5a4-46a8-bd40-492cf4faddc2","type":"ColumnDataSource"}},"id":"1d636574-fb8b-47b7-a29d-5f0113857844","type":"CDSView"}],"root_ids":["edee771d-2d65-4f29-be5a-cfe211d9a5b3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1998e00e-c9e2-42eb-99bb-772c5fd3460b","roots":{"edee771d-2d65-4f29-be5a-cfe211d9a5b3":"8ab1083b-14ef-4734-8279-f96e8ae970fe"}}];
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