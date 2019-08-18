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
      };var element = document.getElementById("e4d03054-9bde-450c-8fa6-bcf4e21f4eec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e4d03054-9bde-450c-8fa6-bcf4e21f4eec' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d2fffa76-afc5-49ee-b3ae-5bd2b5639c04":{"roots":{"references":[{"attributes":{"formatter":{"id":"efa8049a-8904-477c-a304-56fb89f77b66","type":"BasicTickFormatter"},"plot":{"id":"ce774dee-09da-42fa-b658-58d694492421","subtype":"Figure","type":"Plot"},"ticker":{"id":"2da2c629-7663-46b9-a5a6-1836afa816b2","type":"BasicTicker"}},"id":"40956a71-03df-4559-8b9e-df8f3978a93b","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"931b0401-df43-4d20-a403-516a5200d9c1","type":"Circle"},{"attributes":{},"id":"7ee7c61e-264e-4669-99f4-b49d50d69e89","type":"Selection"},{"attributes":{"source":{"id":"c6843fd4-627f-43de-b421-3a54f4c45b21","type":"ColumnDataSource"}},"id":"270a8252-a80d-47bb-9bb9-7804fb42c203","type":"CDSView"},{"attributes":{"formatter":{"id":"d14a4229-223f-402b-be24-e54484985e8b","type":"BasicTickFormatter"},"plot":{"id":"ce774dee-09da-42fa-b658-58d694492421","subtype":"Figure","type":"Plot"},"ticker":{"id":"b517b79a-1b1a-47ee-a93c-644f81ec0ce3","type":"BasicTicker"}},"id":"fb8cfa17-f8b4-4309-903b-63e47d5e2079","type":"LinearAxis"},{"attributes":{},"id":"19e1495e-f10f-47ea-9e07-2c1e715962aa","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"ce774dee-09da-42fa-b658-58d694492421","subtype":"Figure","type":"Plot"},"ticker":{"id":"b517b79a-1b1a-47ee-a93c-644f81ec0ce3","type":"BasicTicker"}},"id":"8fbf86e0-5fef-48c0-bce8-dfb7417e12e6","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"ffddf574-14a7-4234-8e39-8b504ac38135","type":"Title"},{"attributes":{},"id":"a02a0d4e-87f3-4078-a099-0e70b57676d0","type":"LinearScale"},{"attributes":{},"id":"d14a4229-223f-402b-be24-e54484985e8b","type":"BasicTickFormatter"},{"attributes":{},"id":"5e023892-5f46-4209-bea3-e09b86e706c4","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"c6843fd4-627f-43de-b421-3a54f4c45b21","type":"ColumnDataSource"},"glyph":{"id":"8841a031-62b5-44a6-bcbc-513409ab69a3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"931b0401-df43-4d20-a403-516a5200d9c1","type":"Circle"},"selection_glyph":null,"view":{"id":"270a8252-a80d-47bb-9bb9-7804fb42c203","type":"CDSView"}},"id":"84e56a94-d87f-4bd2-8b70-b194ca992982","type":"GlyphRenderer"},{"attributes":{},"id":"2da2c629-7663-46b9-a5a6-1836afa816b2","type":"BasicTicker"},{"attributes":{},"id":"efa8049a-8904-477c-a304-56fb89f77b66","type":"BasicTickFormatter"},{"attributes":{},"id":"70726655-1872-4c4d-9752-f58ffb19f8fc","type":"PanTool"},{"attributes":{"overlay":{"id":"6dd988f4-522e-4019-8fc9-f7849aa171e1","type":"BoxAnnotation"}},"id":"ccd4231b-7a79-449d-a6d9-2c0d8c5fc124","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"7ee7c61e-264e-4669-99f4-b49d50d69e89","type":"Selection"},"selection_policy":{"id":"4ead9d38-a7e9-49a1-95a9-dcef7333ac92","type":"UnionRenderers"}},"id":"c6843fd4-627f-43de-b421-3a54f4c45b21","type":"ColumnDataSource"},{"attributes":{},"id":"9798c982-eb6c-4c10-9324-2465055df4aa","type":"ResetTool"},{"attributes":{"callback":null},"id":"283a9109-b4f1-4596-8800-c9db5bc3f518","type":"DataRange1d"},{"attributes":{"below":[{"id":"40956a71-03df-4559-8b9e-df8f3978a93b","type":"LinearAxis"}],"left":[{"id":"fb8cfa17-f8b4-4309-903b-63e47d5e2079","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"40956a71-03df-4559-8b9e-df8f3978a93b","type":"LinearAxis"},{"id":"cb261ef7-f665-486f-97a4-2805e75f6e2b","type":"Grid"},{"id":"fb8cfa17-f8b4-4309-903b-63e47d5e2079","type":"LinearAxis"},{"id":"8fbf86e0-5fef-48c0-bce8-dfb7417e12e6","type":"Grid"},{"id":"6dd988f4-522e-4019-8fc9-f7849aa171e1","type":"BoxAnnotation"},{"id":"84e56a94-d87f-4bd2-8b70-b194ca992982","type":"GlyphRenderer"}],"title":{"id":"ffddf574-14a7-4234-8e39-8b504ac38135","type":"Title"},"toolbar":{"id":"3cf899b8-1815-4adb-97ab-64f767af572c","type":"Toolbar"},"x_range":{"id":"898add57-64bf-43ec-bd64-e84fa3aad5d0","type":"DataRange1d"},"x_scale":{"id":"19e1495e-f10f-47ea-9e07-2c1e715962aa","type":"LinearScale"},"y_range":{"id":"283a9109-b4f1-4596-8800-c9db5bc3f518","type":"DataRange1d"},"y_scale":{"id":"a02a0d4e-87f3-4078-a099-0e70b57676d0","type":"LinearScale"}},"id":"ce774dee-09da-42fa-b658-58d694492421","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"70726655-1872-4c4d-9752-f58ffb19f8fc","type":"PanTool"},{"id":"5e023892-5f46-4209-bea3-e09b86e706c4","type":"WheelZoomTool"},{"id":"ccd4231b-7a79-449d-a6d9-2c0d8c5fc124","type":"BoxZoomTool"},{"id":"0df6525a-f0fc-4efb-932e-38f5924516a6","type":"SaveTool"},{"id":"9798c982-eb6c-4c10-9324-2465055df4aa","type":"ResetTool"},{"id":"0093e547-1f66-4e9e-af47-247bcabd06c4","type":"HelpTool"}]},"id":"3cf899b8-1815-4adb-97ab-64f767af572c","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6dd988f4-522e-4019-8fc9-f7849aa171e1","type":"BoxAnnotation"},{"attributes":{},"id":"0093e547-1f66-4e9e-af47-247bcabd06c4","type":"HelpTool"},{"attributes":{},"id":"b517b79a-1b1a-47ee-a93c-644f81ec0ce3","type":"BasicTicker"},{"attributes":{},"id":"0df6525a-f0fc-4efb-932e-38f5924516a6","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8841a031-62b5-44a6-bcbc-513409ab69a3","type":"Circle"},{"attributes":{"callback":null},"id":"898add57-64bf-43ec-bd64-e84fa3aad5d0","type":"DataRange1d"},{"attributes":{"plot":{"id":"ce774dee-09da-42fa-b658-58d694492421","subtype":"Figure","type":"Plot"},"ticker":{"id":"2da2c629-7663-46b9-a5a6-1836afa816b2","type":"BasicTicker"}},"id":"cb261ef7-f665-486f-97a4-2805e75f6e2b","type":"Grid"},{"attributes":{},"id":"4ead9d38-a7e9-49a1-95a9-dcef7333ac92","type":"UnionRenderers"}],"root_ids":["ce774dee-09da-42fa-b658-58d694492421"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d2fffa76-afc5-49ee-b3ae-5bd2b5639c04","roots":{"ce774dee-09da-42fa-b658-58d694492421":"e4d03054-9bde-450c-8fa6-bcf4e21f4eec"}}];
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