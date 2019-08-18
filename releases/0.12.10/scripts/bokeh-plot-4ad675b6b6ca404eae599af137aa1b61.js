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
      };var element = document.getElementById("597f24bd-4d30-480c-bdaf-6e25f4ee5ad2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '597f24bd-4d30-480c-bdaf-6e25f4ee5ad2' but no matching script tag was found. ")
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
                    var docs_json = {"af74cb30-33b4-4609-8854-9773858ed08e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]}},"id":"05af042c-ada7-4b2a-8102-84718c27442e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"327518d9-e564-43eb-b75b-1bf0f52d3bed","type":"Title"},{"attributes":{"formatter":{"id":"9f0e4c8e-f251-4cf5-ade2-3f280b7c496b","type":"BasicTickFormatter"},"plot":{"id":"43a00afe-8224-46c9-8c0e-720ec1d9e9f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbb3f74c-653e-499f-9701-ec4fef0c3f16","type":"BasicTicker"}},"id":"c87f71fb-bd91-444e-88b4-ac7adbe476fb","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"aa5e5fb7-c334-4e74-8ef7-4d6bba5966d6","type":"FactorRange"},{"attributes":{"below":[{"id":"b4cf1924-fb4f-4329-83ff-f26311e48242","type":"CategoricalAxis"}],"left":[{"id":"c87f71fb-bd91-444e-88b4-ac7adbe476fb","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"b4cf1924-fb4f-4329-83ff-f26311e48242","type":"CategoricalAxis"},{"id":"fd471165-cf7e-4db3-a5b2-2f91d4806df6","type":"Grid"},{"id":"c87f71fb-bd91-444e-88b4-ac7adbe476fb","type":"LinearAxis"},{"id":"82ecacab-e31f-48f5-9a67-e9ec301cb1cc","type":"Grid"},{"id":"7784f9c2-3b7f-4c37-84a8-0b07b1c8569c","type":"GlyphRenderer"}],"title":{"id":"327518d9-e564-43eb-b75b-1bf0f52d3bed","type":"Title"},"toolbar":{"id":"87e9ec44-1208-4a61-82ed-10685cf7a7c9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"aa5e5fb7-c334-4e74-8ef7-4d6bba5966d6","type":"FactorRange"},"x_scale":{"id":"cb43e588-4122-4a64-bcfd-ca6154674176","type":"CategoricalScale"},"y_range":{"id":"cc11a179-3f08-4b69-9d7f-5cd44e73a505","type":"DataRange1d"},"y_scale":{"id":"62749195-9e47-4b06-8a77-f0408acef92f","type":"LinearScale"}},"id":"43a00afe-8224-46c9-8c0e-720ec1d9e9f7","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"43a00afe-8224-46c9-8c0e-720ec1d9e9f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"da94f7cc-9075-4825-92a0-927b414d4990","type":"CategoricalTicker"}},"id":"fd471165-cf7e-4db3-a5b2-2f91d4806df6","type":"Grid"},{"attributes":{},"id":"9f0e4c8e-f251-4cf5-ade2-3f280b7c496b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"87e9ec44-1208-4a61-82ed-10685cf7a7c9","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"aa177301-a01a-45b1-bae6-3a85fe461ccf","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"cc11a179-3f08-4b69-9d7f-5cd44e73a505","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"6c3a4610-72b4-4e1d-a8c1-9e0b46acdcf0","type":"VBar"},{"attributes":{},"id":"da94f7cc-9075-4825-92a0-927b414d4990","type":"CategoricalTicker"},{"attributes":{},"id":"62749195-9e47-4b06-8a77-f0408acef92f","type":"LinearScale"},{"attributes":{},"id":"bbb3f74c-653e-499f-9701-ec4fef0c3f16","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"43a00afe-8224-46c9-8c0e-720ec1d9e9f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbb3f74c-653e-499f-9701-ec4fef0c3f16","type":"BasicTicker"}},"id":"82ecacab-e31f-48f5-9a67-e9ec301cb1cc","type":"Grid"},{"attributes":{"source":{"id":"05af042c-ada7-4b2a-8102-84718c27442e","type":"ColumnDataSource"}},"id":"ac243d2b-b5d7-4df1-a4db-14adb53f56b5","type":"CDSView"},{"attributes":{},"id":"cb43e588-4122-4a64-bcfd-ca6154674176","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"c24fc5b2-94a9-4248-8fe0-6861ef21fa7c","type":"CategoricalTickFormatter"},"plot":{"id":"43a00afe-8224-46c9-8c0e-720ec1d9e9f7","subtype":"Figure","type":"Plot"},"ticker":{"id":"da94f7cc-9075-4825-92a0-927b414d4990","type":"CategoricalTicker"}},"id":"b4cf1924-fb4f-4329-83ff-f26311e48242","type":"CategoricalAxis"},{"attributes":{},"id":"c24fc5b2-94a9-4248-8fe0-6861ef21fa7c","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"05af042c-ada7-4b2a-8102-84718c27442e","type":"ColumnDataSource"},"glyph":{"id":"aa177301-a01a-45b1-bae6-3a85fe461ccf","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c3a4610-72b4-4e1d-a8c1-9e0b46acdcf0","type":"VBar"},"selection_glyph":null,"view":{"id":"ac243d2b-b5d7-4df1-a4db-14adb53f56b5","type":"CDSView"}},"id":"7784f9c2-3b7f-4c37-84a8-0b07b1c8569c","type":"GlyphRenderer"}],"root_ids":["43a00afe-8224-46c9-8c0e-720ec1d9e9f7"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"af74cb30-33b4-4609-8854-9773858ed08e","elementid":"597f24bd-4d30-480c-bdaf-6e25f4ee5ad2","modelid":"43a00afe-8224-46c9-8c0e-720ec1d9e9f7"}];
                
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
