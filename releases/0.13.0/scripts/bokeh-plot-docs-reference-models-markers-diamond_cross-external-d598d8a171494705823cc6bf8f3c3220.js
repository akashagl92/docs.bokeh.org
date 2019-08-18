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
      };var element = document.getElementById("971cce9d-b856-4498-9639-c0dcf4e3c77d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '971cce9d-b856-4498-9639-c0dcf4e3c77d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"26e2b9b3-15e1-4eaf-9dee-599dc313a3f4":{"roots":{"references":[{"attributes":{},"id":"c9922be0-7066-40a4-830e-800e9ede2bfd","type":"BasicTicker"},{"attributes":{},"id":"375a8217-b192-4a60-ba37-ecb1edfd8846","type":"LinearScale"},{"attributes":{"data_source":{"id":"2191c0e2-095d-434c-976f-b4e4165f4cba","type":"ColumnDataSource"},"glyph":{"id":"c408bb67-3506-430f-83f3-e9c468426c7e","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c376787e-4eb0-436c-a640-d4eddb11ae49","type":"CDSView"}},"id":"9d10d05e-5d5a-484a-9aff-bd25b6969013","type":"GlyphRenderer"},{"attributes":{},"id":"9b50a451-37aa-44df-beb2-d4e22f434696","type":"Selection"},{"attributes":{},"id":"1b70c621-686f-450a-b395-531fed808b0d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"779110b4-7688-4623-bfea-515782100c14","type":"Plot"},"ticker":{"id":"94c3bb92-d007-4aa7-9d44-6f0e28a66791","type":"BasicTicker"}},"id":"cfcd1fb4-6ccc-4942-9256-dba319b8da94","type":"Grid"},{"attributes":{"formatter":{"id":"6968aa46-4962-479e-87f8-d92b2c6ab45c","type":"BasicTickFormatter"},"plot":{"id":"779110b4-7688-4623-bfea-515782100c14","type":"Plot"},"ticker":{"id":"94c3bb92-d007-4aa7-9d44-6f0e28a66791","type":"BasicTicker"}},"id":"8bf99d53-8940-42a0-962b-59cae802bbd5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"779110b4-7688-4623-bfea-515782100c14","type":"Plot"},"ticker":{"id":"c9922be0-7066-40a4-830e-800e9ede2bfd","type":"BasicTicker"}},"id":"09a54231-7112-48fb-9f62-ea8db32ec8a7","type":"Grid"},{"attributes":{},"id":"a00fae04-ae25-404a-9962-d632d6d86188","type":"UnionRenderers"},{"attributes":{"below":[{"id":"8bf99d53-8940-42a0-962b-59cae802bbd5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2aee5e20-cf4e-4e85-a62a-32bb1573cdf3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9d10d05e-5d5a-484a-9aff-bd25b6969013","type":"GlyphRenderer"},{"id":"8bf99d53-8940-42a0-962b-59cae802bbd5","type":"LinearAxis"},{"id":"2aee5e20-cf4e-4e85-a62a-32bb1573cdf3","type":"LinearAxis"},{"id":"cfcd1fb4-6ccc-4942-9256-dba319b8da94","type":"Grid"},{"id":"09a54231-7112-48fb-9f62-ea8db32ec8a7","type":"Grid"}],"title":null,"toolbar":{"id":"efed0edc-a5e2-41ba-a4a2-eaf43611a6da","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8af9e280-fae0-407a-8f1c-494637362dee","type":"DataRange1d"},"x_scale":{"id":"82081bd0-5487-4288-ba4c-c3101e37792b","type":"LinearScale"},"y_range":{"id":"04e5ed54-ad3d-4588-9298-5a0d99399efc","type":"DataRange1d"},"y_scale":{"id":"375a8217-b192-4a60-ba37-ecb1edfd8846","type":"LinearScale"}},"id":"779110b4-7688-4623-bfea-515782100c14","type":"Plot"},{"attributes":{},"id":"94c3bb92-d007-4aa7-9d44-6f0e28a66791","type":"BasicTicker"},{"attributes":{"source":{"id":"2191c0e2-095d-434c-976f-b4e4165f4cba","type":"ColumnDataSource"}},"id":"c376787e-4eb0-436c-a640-d4eddb11ae49","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c408bb67-3506-430f-83f3-e9c468426c7e","type":"DiamondCross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"efed0edc-a5e2-41ba-a4a2-eaf43611a6da","type":"Toolbar"},{"attributes":{},"id":"82081bd0-5487-4288-ba4c-c3101e37792b","type":"LinearScale"},{"attributes":{"formatter":{"id":"1b70c621-686f-450a-b395-531fed808b0d","type":"BasicTickFormatter"},"plot":{"id":"779110b4-7688-4623-bfea-515782100c14","type":"Plot"},"ticker":{"id":"c9922be0-7066-40a4-830e-800e9ede2bfd","type":"BasicTicker"}},"id":"2aee5e20-cf4e-4e85-a62a-32bb1573cdf3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"04e5ed54-ad3d-4588-9298-5a0d99399efc","type":"DataRange1d"},{"attributes":{},"id":"6968aa46-4962-479e-87f8-d92b2c6ab45c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"9b50a451-37aa-44df-beb2-d4e22f434696","type":"Selection"},"selection_policy":{"id":"a00fae04-ae25-404a-9962-d632d6d86188","type":"UnionRenderers"}},"id":"2191c0e2-095d-434c-976f-b4e4165f4cba","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"8af9e280-fae0-407a-8f1c-494637362dee","type":"DataRange1d"}],"root_ids":["779110b4-7688-4623-bfea-515782100c14"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"26e2b9b3-15e1-4eaf-9dee-599dc313a3f4","roots":{"779110b4-7688-4623-bfea-515782100c14":"971cce9d-b856-4498-9639-c0dcf4e3c77d"}}];
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