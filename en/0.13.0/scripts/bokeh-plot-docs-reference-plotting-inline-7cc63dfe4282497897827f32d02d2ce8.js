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
      };var element = document.getElementById("f4981b9b-8f61-436c-a7d9-c3dd8a23a95d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4981b9b-8f61-436c-a7d9-c3dd8a23a95d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e3466be6-a0a1-4908-a0a7-19b8ff2220d5":{"roots":{"references":[{"attributes":{"below":[{"id":"99516a74-8b48-4680-a18a-ec3210c503af","type":"LinearAxis"}],"left":[{"id":"a157d4eb-e163-4274-a369-eef8dc81de78","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"99516a74-8b48-4680-a18a-ec3210c503af","type":"LinearAxis"},{"id":"1cb7d732-dd00-41aa-8508-83386e550209","type":"Grid"},{"id":"a157d4eb-e163-4274-a369-eef8dc81de78","type":"LinearAxis"},{"id":"92ad8058-fb4d-416b-ba87-3f6f31898e8f","type":"Grid"},{"id":"bc2a9b51-bb1f-4d44-8d48-2fb1762f03f4","type":"BoxAnnotation"},{"id":"e3417111-7100-4d03-b9fe-71b182622552","type":"GlyphRenderer"}],"title":{"id":"51ad289f-5795-4464-b7be-469e0035983a","type":"Title"},"toolbar":{"id":"651a3ae2-8f00-4c1c-ab7e-fda0608cbc08","type":"Toolbar"},"x_range":{"id":"123a1839-9844-42af-b63c-96b644fd1628","type":"DataRange1d"},"x_scale":{"id":"ae4c675e-87b9-4276-bafc-df906312cc20","type":"LinearScale"},"y_range":{"id":"2809aa69-3a6f-4c13-afe8-0a6f26095b65","type":"DataRange1d"},"y_scale":{"id":"c90f6558-533d-4956-a6cf-57b5deeb1c4a","type":"LinearScale"}},"id":"39dd5bc8-7e20-468a-9b93-21119d3c876c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b18bd6b3-3cce-4b9d-b6ec-876065382fda","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"096b2b64-5a87-4077-9e61-2c1b02fdcb43","type":"PanTool"},{"id":"b18bd6b3-3cce-4b9d-b6ec-876065382fda","type":"WheelZoomTool"},{"id":"c5e4993c-b7af-455f-9b99-7a18a38d56ca","type":"BoxZoomTool"},{"id":"2d745c13-6cf1-4068-a67f-71f2c4fe88b9","type":"SaveTool"},{"id":"f1965388-271a-4980-a69b-7b3fdc88f786","type":"ResetTool"},{"id":"b0896013-6477-4069-ab12-332cd4a68fdb","type":"HelpTool"}]},"id":"651a3ae2-8f00-4c1c-ab7e-fda0608cbc08","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bc2a9b51-bb1f-4d44-8d48-2fb1762f03f4","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"123a1839-9844-42af-b63c-96b644fd1628","type":"DataRange1d"},{"attributes":{"overlay":{"id":"bc2a9b51-bb1f-4d44-8d48-2fb1762f03f4","type":"BoxAnnotation"}},"id":"c5e4993c-b7af-455f-9b99-7a18a38d56ca","type":"BoxZoomTool"},{"attributes":{},"id":"9933f833-b3f5-4dd3-860c-87a997383f58","type":"BasicTicker"},{"attributes":{},"id":"2d745c13-6cf1-4068-a67f-71f2c4fe88b9","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a81dc3b2-f884-485d-80c3-c3a565bee3a1","type":"InvertedTriangle"},{"attributes":{},"id":"f1965388-271a-4980-a69b-7b3fdc88f786","type":"ResetTool"},{"attributes":{"formatter":{"id":"8dbf59d1-ae3e-4405-a2b8-8ef9cdacd4c5","type":"BasicTickFormatter"},"plot":{"id":"39dd5bc8-7e20-468a-9b93-21119d3c876c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9933f833-b3f5-4dd3-860c-87a997383f58","type":"BasicTicker"}},"id":"99516a74-8b48-4680-a18a-ec3210c503af","type":"LinearAxis"},{"attributes":{},"id":"b0896013-6477-4069-ab12-332cd4a68fdb","type":"HelpTool"},{"attributes":{"callback":null},"id":"2809aa69-3a6f-4c13-afe8-0a6f26095b65","type":"DataRange1d"},{"attributes":{},"id":"8dbf59d1-ae3e-4405-a2b8-8ef9cdacd4c5","type":"BasicTickFormatter"},{"attributes":{},"id":"ae4c675e-87b9-4276-bafc-df906312cc20","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"51ad289f-5795-4464-b7be-469e0035983a","type":"Title"},{"attributes":{},"id":"c90f6558-533d-4956-a6cf-57b5deeb1c4a","type":"LinearScale"},{"attributes":{},"id":"2275c8df-865c-4b10-8453-486c9bc6477e","type":"Selection"},{"attributes":{"plot":{"id":"39dd5bc8-7e20-468a-9b93-21119d3c876c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9933f833-b3f5-4dd3-860c-87a997383f58","type":"BasicTicker"}},"id":"1cb7d732-dd00-41aa-8508-83386e550209","type":"Grid"},{"attributes":{},"id":"de932a83-f701-46a2-8939-11e9cb12689e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"de932a83-f701-46a2-8939-11e9cb12689e","type":"BasicTickFormatter"},"plot":{"id":"39dd5bc8-7e20-468a-9b93-21119d3c876c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f34a5003-86a6-4ee6-a83c-e7b6b98f2e0a","type":"BasicTicker"}},"id":"a157d4eb-e163-4274-a369-eef8dc81de78","type":"LinearAxis"},{"attributes":{},"id":"f34a5003-86a6-4ee6-a83c-e7b6b98f2e0a","type":"BasicTicker"},{"attributes":{},"id":"42aa0975-633e-4e07-887e-56c29fc9ac00","type":"UnionRenderers"},{"attributes":{"source":{"id":"634951f3-cab1-48f3-be2b-56ac630142bc","type":"ColumnDataSource"}},"id":"a4f732e0-5ad3-4cd8-bcaa-325aa111a839","type":"CDSView"},{"attributes":{},"id":"096b2b64-5a87-4077-9e61-2c1b02fdcb43","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"39dd5bc8-7e20-468a-9b93-21119d3c876c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f34a5003-86a6-4ee6-a83c-e7b6b98f2e0a","type":"BasicTicker"}},"id":"92ad8058-fb4d-416b-ba87-3f6f31898e8f","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d79ac42d-6564-4c23-831a-f662c2dab4a3","type":"InvertedTriangle"},{"attributes":{"data_source":{"id":"634951f3-cab1-48f3-be2b-56ac630142bc","type":"ColumnDataSource"},"glyph":{"id":"a81dc3b2-f884-485d-80c3-c3a565bee3a1","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d79ac42d-6564-4c23-831a-f662c2dab4a3","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"a4f732e0-5ad3-4cd8-bcaa-325aa111a839","type":"CDSView"}},"id":"e3417111-7100-4d03-b9fe-71b182622552","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"2275c8df-865c-4b10-8453-486c9bc6477e","type":"Selection"},"selection_policy":{"id":"42aa0975-633e-4e07-887e-56c29fc9ac00","type":"UnionRenderers"}},"id":"634951f3-cab1-48f3-be2b-56ac630142bc","type":"ColumnDataSource"}],"root_ids":["39dd5bc8-7e20-468a-9b93-21119d3c876c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e3466be6-a0a1-4908-a0a7-19b8ff2220d5","roots":{"39dd5bc8-7e20-468a-9b93-21119d3c876c":"f4981b9b-8f61-436c-a7d9-c3dd8a23a95d"}}];
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