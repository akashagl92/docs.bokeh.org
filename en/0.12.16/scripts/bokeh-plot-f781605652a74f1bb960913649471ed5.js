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
      };var element = document.getElementById("1d2b66be-4235-42db-b75e-13b1671af7f6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d2b66be-4235-42db-b75e-13b1671af7f6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"2413382d-4a26-4524-aa78-36d15a98be97":{"roots":{"references":[{"attributes":{"fill_color":{"field":"x","transform":{"id":"8b877e6b-b659-4d7f-9419-ba18da6cae41","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"7f01f072-0b22-4b31-b485-a67894fca60d","type":"VBar"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"8b877e6b-b659-4d7f-9419-ba18da6cae41","type":"CategoricalColorMapper"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"442a8f6b-2a62-4494-bdfd-880f91c09e45","type":"VBar"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"77e1d35d-06b6-45b9-b6d4-9f919be20d54","type":"Selection"},"selection_policy":{"id":"ce08dd63-7fe8-4d31-b4d5-db20128d1299","type":"UnionRenderers"}},"id":"20fee8c6-5fdc-438a-9631-40c2c12f688b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"20fee8c6-5fdc-438a-9631-40c2c12f688b","type":"ColumnDataSource"},"glyph":{"id":"7f01f072-0b22-4b31-b485-a67894fca60d","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"442a8f6b-2a62-4494-bdfd-880f91c09e45","type":"VBar"},"selection_glyph":null,"view":{"id":"ea43ec81-f4b6-4c26-93f4-7077da2d785f","type":"CDSView"}},"id":"48783dc6-9bb3-4b98-87dc-0e0d9e7f32c5","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"72e8ff74-d083-4bf8-88b7-4ae679defa13","type":"FactorRange"},{"attributes":{"source":{"id":"20fee8c6-5fdc-438a-9631-40c2c12f688b","type":"ColumnDataSource"}},"id":"ea43ec81-f4b6-4c26-93f4-7077da2d785f","type":"CDSView"},{"attributes":{"below":[{"id":"8cb1cd36-3e88-4b40-9077-f06a3e89715d","type":"CategoricalAxis"}],"left":[{"id":"906aa00d-0696-4ff4-b978-06c4c8033cf0","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"8cb1cd36-3e88-4b40-9077-f06a3e89715d","type":"CategoricalAxis"},{"id":"4f20643c-32fc-4a59-abe8-9a9874369e0e","type":"Grid"},{"id":"906aa00d-0696-4ff4-b978-06c4c8033cf0","type":"LinearAxis"},{"id":"39a43b1b-eeb7-45f7-bacb-4dcd9ada321e","type":"Grid"},{"id":"48783dc6-9bb3-4b98-87dc-0e0d9e7f32c5","type":"GlyphRenderer"}],"title":{"id":"89f788a7-1fbc-4d6b-a335-25a49f381114","type":"Title"},"toolbar":{"id":"c948b8c8-70c3-43d9-bde4-0f227d6e6b78","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"72e8ff74-d083-4bf8-88b7-4ae679defa13","type":"FactorRange"},"x_scale":{"id":"164f820a-0380-4c0d-b8a9-d05d584c94d7","type":"CategoricalScale"},"y_range":{"id":"d0108fda-4ada-4daf-8780-66fb9c5f1a5a","type":"DataRange1d"},"y_scale":{"id":"21b983ba-4772-4ffc-97f9-5e8cd7f44203","type":"LinearScale"}},"id":"8567a86f-e0a7-4985-bd65-01a1b7ddac8f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95ee24d2-ed7a-4f01-8f05-cdd9db2bb111","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"89f788a7-1fbc-4d6b-a335-25a49f381114","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"d0108fda-4ada-4daf-8780-66fb9c5f1a5a","type":"DataRange1d"},{"attributes":{},"id":"77e1d35d-06b6-45b9-b6d4-9f919be20d54","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c948b8c8-70c3-43d9-bde4-0f227d6e6b78","type":"Toolbar"},{"attributes":{"formatter":{"id":"95ee24d2-ed7a-4f01-8f05-cdd9db2bb111","type":"BasicTickFormatter"},"plot":{"id":"8567a86f-e0a7-4985-bd65-01a1b7ddac8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d4b6e75-d20a-43bf-82cf-55e087631041","type":"BasicTicker"}},"id":"906aa00d-0696-4ff4-b978-06c4c8033cf0","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8567a86f-e0a7-4985-bd65-01a1b7ddac8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d4b6e75-d20a-43bf-82cf-55e087631041","type":"BasicTicker"}},"id":"39a43b1b-eeb7-45f7-bacb-4dcd9ada321e","type":"Grid"},{"attributes":{},"id":"21b983ba-4772-4ffc-97f9-5e8cd7f44203","type":"LinearScale"},{"attributes":{},"id":"164f820a-0380-4c0d-b8a9-d05d584c94d7","type":"CategoricalScale"},{"attributes":{},"id":"fdc5deae-efb1-4929-97b7-18e0485c1032","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8567a86f-e0a7-4985-bd65-01a1b7ddac8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"04c8a00e-54be-42e6-827e-da92d46d4f3d","type":"CategoricalTicker"}},"id":"4f20643c-32fc-4a59-abe8-9a9874369e0e","type":"Grid"},{"attributes":{"formatter":{"id":"fdc5deae-efb1-4929-97b7-18e0485c1032","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"8567a86f-e0a7-4985-bd65-01a1b7ddac8f","subtype":"Figure","type":"Plot"},"ticker":{"id":"04c8a00e-54be-42e6-827e-da92d46d4f3d","type":"CategoricalTicker"}},"id":"8cb1cd36-3e88-4b40-9077-f06a3e89715d","type":"CategoricalAxis"},{"attributes":{},"id":"04c8a00e-54be-42e6-827e-da92d46d4f3d","type":"CategoricalTicker"},{"attributes":{},"id":"ce08dd63-7fe8-4d31-b4d5-db20128d1299","type":"UnionRenderers"},{"attributes":{},"id":"5d4b6e75-d20a-43bf-82cf-55e087631041","type":"BasicTicker"}],"root_ids":["8567a86f-e0a7-4985-bd65-01a1b7ddac8f"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"2413382d-4a26-4524-aa78-36d15a98be97","elementid":"1d2b66be-4235-42db-b75e-13b1671af7f6","modelid":"8567a86f-e0a7-4985-bd65-01a1b7ddac8f"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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