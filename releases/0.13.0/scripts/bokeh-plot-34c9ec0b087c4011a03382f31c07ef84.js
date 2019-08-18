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
      };var element = document.getElementById("35a2c9b6-e436-43b0-8b8c-c8fc6321974a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35a2c9b6-e436-43b0-8b8c-c8fc6321974a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"988949c2-c2f9-412f-a58a-45ee824edb27":{"roots":{"references":[{"attributes":{},"id":"a68089d8-9b28-4f20-ae84-c776e8e02bdb","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"c51f37a2-327c-4afe-99ca-a022287385c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ad081f6-25e7-45e1-99d8-b3bd76803bbe","type":"BasicTicker"}},"id":"ae8179ac-37f7-43f4-a007-7303fd05e040","type":"Grid"},{"attributes":{},"id":"38709f11-2277-41e4-8be1-c1227dc8d9a4","type":"BasicTicker"},{"attributes":{},"id":"6b143308-a3af-450c-81bb-dd3b189107dc","type":"WheelZoomTool"},{"attributes":{},"id":"bf267c24-f05c-495e-b78a-90536d4a5eff","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6772d70a-b361-4895-9b6e-4ad36bbc19f2","type":"BasicTickFormatter"},"plot":{"id":"c51f37a2-327c-4afe-99ca-a022287385c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"38709f11-2277-41e4-8be1-c1227dc8d9a4","type":"BasicTicker"}},"id":"2288a865-b9fb-4c9f-a4ae-862de6bc42ec","type":"LinearAxis"},{"attributes":{},"id":"ad881578-3d44-4d14-b657-66e3a29e41bd","type":"HelpTool"},{"attributes":{"formatter":{"id":"bf267c24-f05c-495e-b78a-90536d4a5eff","type":"BasicTickFormatter"},"plot":{"id":"c51f37a2-327c-4afe-99ca-a022287385c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ad081f6-25e7-45e1-99d8-b3bd76803bbe","type":"BasicTicker"}},"id":"059ceedb-a59e-410f-9ab7-dde850e8411a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4f8e172e-a846-4249-8c00-d0d44a609566","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]},"selected":{"id":"d8cccab0-689c-4370-b7c9-67aa442a6774","type":"Selection"},"selection_policy":{"id":"2a746b92-82b2-4e0c-8c85-20b2b92a8dc4","type":"UnionRenderers"}},"id":"d73c61e4-6b1b-4feb-af2a-b644a1298e2f","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ec487ee-f7c0-40e9-aca2-aa4319a343ce","type":"PanTool"},{"id":"6b143308-a3af-450c-81bb-dd3b189107dc","type":"WheelZoomTool"},{"id":"be646dbc-b2cf-4e6b-a4de-cd3777e34371","type":"BoxZoomTool"},{"id":"a68089d8-9b28-4f20-ae84-c776e8e02bdb","type":"SaveTool"},{"id":"624d45ee-dc1a-4b6e-8e63-a8d706f61ce9","type":"ResetTool"},{"id":"ad881578-3d44-4d14-b657-66e3a29e41bd","type":"HelpTool"}]},"id":"3fafd5f9-4074-4640-9a03-11d0bd922524","type":"Toolbar"},{"attributes":{"below":[{"id":"2288a865-b9fb-4c9f-a4ae-862de6bc42ec","type":"LinearAxis"}],"left":[{"id":"059ceedb-a59e-410f-9ab7-dde850e8411a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2288a865-b9fb-4c9f-a4ae-862de6bc42ec","type":"LinearAxis"},{"id":"516c6f0e-a831-47d2-b6d5-38a753e724a4","type":"Grid"},{"id":"059ceedb-a59e-410f-9ab7-dde850e8411a","type":"LinearAxis"},{"id":"ae8179ac-37f7-43f4-a007-7303fd05e040","type":"Grid"},{"id":"c92c3df8-8c7b-494a-a154-abccf01cddcf","type":"BoxAnnotation"},{"id":"0ff945d2-4ede-49e8-be55-71c9104f07a9","type":"GlyphRenderer"}],"title":{"id":"894c17b2-4eec-4e80-9ea9-da384b3908d8","type":"Title"},"toolbar":{"id":"3fafd5f9-4074-4640-9a03-11d0bd922524","type":"Toolbar"},"x_range":{"id":"4f8e172e-a846-4249-8c00-d0d44a609566","type":"DataRange1d"},"x_scale":{"id":"1278ea68-73b4-47e4-9a64-3677cb78f213","type":"LinearScale"},"y_range":{"id":"4f9b851f-ca17-43b5-91f9-5986092db897","type":"DataRange1d"},"y_scale":{"id":"4fa7c417-37f7-479c-adb3-5967a47878ab","type":"LinearScale"}},"id":"c51f37a2-327c-4afe-99ca-a022287385c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4ec487ee-f7c0-40e9-aca2-aa4319a343ce","type":"PanTool"},{"attributes":{},"id":"6772d70a-b361-4895-9b6e-4ad36bbc19f2","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d73c61e4-6b1b-4feb-af2a-b644a1298e2f","type":"ColumnDataSource"},"glyph":{"id":"2d622b27-a216-451f-a45e-8f40b477d2cf","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"77f142fc-6b49-4304-b73f-fdc79a5a9182","type":"VBar"},"selection_glyph":null,"view":{"id":"60bf8a9c-4512-4bf0-8800-10215c24bf73","type":"CDSView"}},"id":"0ff945d2-4ede-49e8-be55-71c9104f07a9","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2d622b27-a216-451f-a45e-8f40b477d2cf","type":"VBar"},{"attributes":{"callback":null},"id":"4f9b851f-ca17-43b5-91f9-5986092db897","type":"DataRange1d"},{"attributes":{},"id":"1278ea68-73b4-47e4-9a64-3677cb78f213","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"894c17b2-4eec-4e80-9ea9-da384b3908d8","type":"Title"},{"attributes":{},"id":"1ad081f6-25e7-45e1-99d8-b3bd76803bbe","type":"BasicTicker"},{"attributes":{"plot":{"id":"c51f37a2-327c-4afe-99ca-a022287385c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"38709f11-2277-41e4-8be1-c1227dc8d9a4","type":"BasicTicker"}},"id":"516c6f0e-a831-47d2-b6d5-38a753e724a4","type":"Grid"},{"attributes":{},"id":"4fa7c417-37f7-479c-adb3-5967a47878ab","type":"LinearScale"},{"attributes":{"source":{"id":"d73c61e4-6b1b-4feb-af2a-b644a1298e2f","type":"ColumnDataSource"}},"id":"60bf8a9c-4512-4bf0-8800-10215c24bf73","type":"CDSView"},{"attributes":{"overlay":{"id":"c92c3df8-8c7b-494a-a154-abccf01cddcf","type":"BoxAnnotation"}},"id":"be646dbc-b2cf-4e6b-a4de-cd3777e34371","type":"BoxZoomTool"},{"attributes":{},"id":"d8cccab0-689c-4370-b7c9-67aa442a6774","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"77f142fc-6b49-4304-b73f-fdc79a5a9182","type":"VBar"},{"attributes":{},"id":"624d45ee-dc1a-4b6e-8e63-a8d706f61ce9","type":"ResetTool"},{"attributes":{},"id":"2a746b92-82b2-4e0c-8c85-20b2b92a8dc4","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c92c3df8-8c7b-494a-a154-abccf01cddcf","type":"BoxAnnotation"}],"root_ids":["c51f37a2-327c-4afe-99ca-a022287385c8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"988949c2-c2f9-412f-a58a-45ee824edb27","roots":{"c51f37a2-327c-4afe-99ca-a022287385c8":"35a2c9b6-e436-43b0-8b8c-c8fc6321974a"}}];
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