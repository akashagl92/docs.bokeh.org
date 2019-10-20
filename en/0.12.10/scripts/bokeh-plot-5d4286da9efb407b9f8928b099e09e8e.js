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
      };var element = document.getElementById("4c156ede-5962-4bf5-a0c7-3f1a27e02960");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c156ede-5962-4bf5-a0c7-3f1a27e02960' but no matching script tag was found. ")
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
                    var docs_json = {"a2907764-33ac-41ab-a5d0-c9de020083a7":{"roots":{"references":[{"attributes":{"formatter":{"id":"ff518140-3ada-490b-8ebf-063bc742d13f","type":"BasicTickFormatter"},"plot":{"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8c591e4-aa9e-4589-b6c9-61f044813d5f","type":"BasicTicker"}},"id":"4b920c6b-b204-4bcb-a038-b31415063fd2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"9261917e-2527-4ad4-8826-5b91a1f38959","type":"ColumnDataSource"},"glyph":{"id":"17549acb-a5f2-45e4-9e08-d2454a1a12f3","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e782c30f-c515-4e80-95e0-6b0abc134b28","type":"Line"},"selection_glyph":null,"view":{"id":"b6027127-cb13-47ec-b213-82a1222d8a06","type":"CDSView"}},"id":"1de3bc7b-ca38-42b9-b939-3d2c980a0c38","type":"GlyphRenderer"},{"attributes":{},"id":"ff518140-3ada-490b-8ebf-063bc742d13f","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"fae2f9ae-5454-4ec3-940c-e056a74b1972","type":"Row"},{"id":"0ac44a4b-83f8-4069-ae96-31f26a863f95","type":"Row"}]},"id":"0fd86e1d-93a0-461a-8f05-64ebecab5690","type":"Column"},{"attributes":{},"id":"d8c591e4-aa9e-4589-b6c9-61f044813d5f","type":"BasicTicker"},{"attributes":{"args":{"object":{"id":"b4026c3f-baa0-48e1-8b35-0f717ad717a3","type":"BoxAnnotation"},"toggle":{"id":"1311a3cb-ab3b-4cd6-a7b5-248d9cf45135","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"04bba544-8dd4-4dd8-8328-3b3c12448085","type":"CustomJS"},{"attributes":{"plot":{"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8c591e4-aa9e-4589-b6c9-61f044813d5f","type":"BasicTicker"}},"id":"1b0ea90e-744e-4e13-9136-ed5b8bb27a9c","type":"Grid"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17549acb-a5f2-45e4-9e08-d2454a1a12f3","type":"Line"},{"attributes":{"callback":null},"id":"d1aea50f-6f07-4371-a001-cdc2305785c2","type":"DataRange1d"},{"attributes":{"button_type":"success","callback":{"id":"b01fa04e-1ef0-45ba-b73d-3db616c57e24","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"9097fbad-6a14-4475-9041-588ab5c103a0","type":"Toggle"},{"attributes":{"below":[{"id":"4b920c6b-b204-4bcb-a038-b31415063fd2","type":"LinearAxis"}],"left":[{"id":"cdde82f7-5527-4ba9-be89-03ddfd9a0988","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"4b920c6b-b204-4bcb-a038-b31415063fd2","type":"LinearAxis"},{"id":"1b0ea90e-744e-4e13-9136-ed5b8bb27a9c","type":"Grid"},{"id":"cdde82f7-5527-4ba9-be89-03ddfd9a0988","type":"LinearAxis"},{"id":"ed5c8164-40e9-4232-93a7-95eec9d41de2","type":"Grid"},{"id":"2f1d1f8d-01fa-4126-b5f1-698ae0b53e20","type":"GlyphRenderer"},{"id":"1de3bc7b-ca38-42b9-b939-3d2c980a0c38","type":"GlyphRenderer"},{"id":"b4026c3f-baa0-48e1-8b35-0f717ad717a3","type":"BoxAnnotation"}],"title":{"id":"07ec4843-da4c-45ef-acf4-f5aba451695d","type":"Title"},"toolbar":{"id":"3d8f257c-f900-4ef0-ab14-3fa5e313cea6","type":"Toolbar"},"x_range":{"id":"35d8c1e8-e498-41ca-910e-30518773e1a5","type":"DataRange1d"},"x_scale":{"id":"b0fa86a5-f5a7-469d-98d2-467631e29a73","type":"LinearScale"},"y_range":{"id":"d1aea50f-6f07-4371-a001-cdc2305785c2","type":"DataRange1d"},"y_scale":{"id":"acd277a9-d7ad-41e8-bbc3-61423a77b2f5","type":"LinearScale"}},"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"799606e5-ca0c-45fb-9d70-4e46b7e0f709","type":"BasicTicker"}},"id":"ed5c8164-40e9-4232-93a7-95eec9d41de2","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"10dc4f74-6aea-4ba8-91d8-a509799a7aae","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9261917e-2527-4ad4-8826-5b91a1f38959","type":"ColumnDataSource"}},"id":"b6027127-cb13-47ec-b213-82a1222d8a06","type":"CDSView"},{"attributes":{"button_type":"success","callback":{"id":"04bba544-8dd4-4dd8-8328-3b3c12448085","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"1311a3cb-ab3b-4cd6-a7b5-248d9cf45135","type":"Toggle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3d8f257c-f900-4ef0-ab14-3fa5e313cea6","type":"Toolbar"},{"attributes":{"args":{"object":{"id":"1de3bc7b-ca38-42b9-b939-3d2c980a0c38","type":"GlyphRenderer"},"toggle":{"id":"9097fbad-6a14-4475-9041-588ab5c103a0","type":"Toggle"}},"code":"object.visible = toggle.active;\n"},"id":"b01fa04e-1ef0-45ba-b73d-3db616c57e24","type":"CustomJS"},{"attributes":{},"id":"b0fa86a5-f5a7-469d-98d2-467631e29a73","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"},"right":2.5},"id":"b4026c3f-baa0-48e1-8b35-0f717ad717a3","type":"BoxAnnotation"},{"attributes":{"source":{"id":"10dc4f74-6aea-4ba8-91d8-a509799a7aae","type":"ColumnDataSource"}},"id":"4cbbe261-1ab0-4936-aae5-0b02006a93bf","type":"CDSView"},{"attributes":{"children":[{"id":"9097fbad-6a14-4475-9041-588ab5c103a0","type":"Toggle"}]},"id":"b5d63066-29e9-4056-87d0-589749d2037b","type":"WidgetBox"},{"attributes":{"formatter":{"id":"d963c554-5991-450e-bf1e-13b77fe4a40e","type":"BasicTickFormatter"},"plot":{"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"799606e5-ca0c-45fb-9d70-4e46b7e0f709","type":"BasicTicker"}},"id":"cdde82f7-5527-4ba9-be89-03ddfd9a0988","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df8a3369-3e7c-4e44-be8c-77435abb2dc3","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e782c30f-c515-4e80-95e0-6b0abc134b28","type":"Line"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c78da2f3-6077-4baf-9b02-db5769d58819","type":"Line"},{"attributes":{"children":[{"id":"8698299f-d530-4bbc-8ec7-50fc53769e0a","type":"WidgetBox"},{"id":"b5d63066-29e9-4056-87d0-589749d2037b","type":"WidgetBox"}]},"id":"0ac44a4b-83f8-4069-ae96-31f26a863f95","type":"Row"},{"attributes":{},"id":"799606e5-ca0c-45fb-9d70-4e46b7e0f709","type":"BasicTicker"},{"attributes":{},"id":"d963c554-5991-450e-bf1e-13b77fe4a40e","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"7d4e05be-d105-40ba-a56a-cda410f454a9","subtype":"Figure","type":"Plot"}]},"id":"fae2f9ae-5454-4ec3-940c-e056a74b1972","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"07ec4843-da4c-45ef-acf4-f5aba451695d","type":"Title"},{"attributes":{"children":[{"id":"1311a3cb-ab3b-4cd6-a7b5-248d9cf45135","type":"Toggle"}]},"id":"8698299f-d530-4bbc-8ec7-50fc53769e0a","type":"WidgetBox"},{"attributes":{"data_source":{"id":"10dc4f74-6aea-4ba8-91d8-a509799a7aae","type":"ColumnDataSource"},"glyph":{"id":"c78da2f3-6077-4baf-9b02-db5769d58819","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df8a3369-3e7c-4e44-be8c-77435abb2dc3","type":"Line"},"selection_glyph":null,"view":{"id":"4cbbe261-1ab0-4936-aae5-0b02006a93bf","type":"CDSView"}},"id":"2f1d1f8d-01fa-4126-b5f1-698ae0b53e20","type":"GlyphRenderer"},{"attributes":{},"id":"acd277a9-d7ad-41e8-bbc3-61423a77b2f5","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"9261917e-2527-4ad4-8826-5b91a1f38959","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35d8c1e8-e498-41ca-910e-30518773e1a5","type":"DataRange1d"}],"root_ids":["0fd86e1d-93a0-461a-8f05-64ebecab5690"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a2907764-33ac-41ab-a5d0-c9de020083a7","elementid":"4c156ede-5962-4bf5-a0c7-3f1a27e02960","modelid":"0fd86e1d-93a0-461a-8f05-64ebecab5690"}];
                
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
