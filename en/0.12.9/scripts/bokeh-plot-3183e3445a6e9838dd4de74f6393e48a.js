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
      };var element = document.getElementById("7be6d94c-a968-4020-9295-c109bd48f0dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7be6d94c-a968-4020-9295-c109bd48f0dc' but no matching script tag was found. ")
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
                    var docs_json = {"0980fa24-3702-421e-86ae-69c83c8d8e4d":{"roots":{"references":[{"attributes":{"data_source":{"id":"be3c98a4-c715-42a3-9179-18c6774f2ecb","type":"ColumnDataSource"},"glyph":{"id":"1359a15b-97f3-413f-a385-76b131d4e6f0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ef582dfa-0736-40ff-afc9-926aa0d75357","type":"VBar"},"selection_glyph":null,"view":{"id":"c0034d2f-3154-49b2-a8f2-3aad4968365f","type":"CDSView"}},"id":"23a63aca-4906-4f7e-a8a7-f7a239149de2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7c24be2b-684f-467d-aa81-f61d3eb8705b","type":"Toolbar"},{"attributes":{"below":[{"id":"2537e554-556f-4da1-be43-1a7bab5874dc","type":"CategoricalAxis"}],"left":[{"id":"9da12ce6-dfe7-44cf-938c-af9aa28a79fe","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"2537e554-556f-4da1-be43-1a7bab5874dc","type":"CategoricalAxis"},{"id":"36aad3b5-89af-4e82-925e-d0ea2c4e9a78","type":"Grid"},{"id":"9da12ce6-dfe7-44cf-938c-af9aa28a79fe","type":"LinearAxis"},{"id":"5447eaa2-f6c6-4790-adef-fe83deb8980d","type":"Grid"},{"id":"63def397-4569-47f8-8f24-1ef062aec3b0","type":"Legend"},{"id":"23a63aca-4906-4f7e-a8a7-f7a239149de2","type":"GlyphRenderer"}],"title":{"id":"7f5b2093-bdd9-48c7-b38e-91e38aba540f","type":"Title"},"toolbar":{"id":"7c24be2b-684f-467d-aa81-f61d3eb8705b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d57bb6ce-9d11-478a-85a6-37a0af7b59d6","type":"FactorRange"},"x_scale":{"id":"57149018-8c4c-4d74-a38c-4671cc7f068b","type":"CategoricalScale"},"y_range":{"id":"ea6e8ebd-03ac-41b5-a0c7-7a24b0aa2135","type":"Range1d"},"y_scale":{"id":"ef10afa4-6f97-470a-ab19-4487e8d458f1","type":"LinearScale"}},"id":"e636e21b-d00c-4bad-82f7-0a87e674a894","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ef10afa4-6f97-470a-ab19-4487e8d458f1","type":"LinearScale"},{"attributes":{"source":{"id":"be3c98a4-c715-42a3-9179-18c6774f2ecb","type":"ColumnDataSource"}},"id":"c0034d2f-3154-49b2-a8f2-3aad4968365f","type":"CDSView"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"be3c98a4-c715-42a3-9179-18c6774f2ecb","type":"ColumnDataSource"},{"attributes":{},"id":"2f776eca-bbb3-457e-8ebd-ad5c27c1e51f","type":"BasicTicker"},{"attributes":{},"id":"c18db321-cd3f-4008-a00b-3dfe9db2852d","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"e636e21b-d00c-4bad-82f7-0a87e674a894","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f776eca-bbb3-457e-8ebd-ad5c27c1e51f","type":"BasicTicker"}},"id":"5447eaa2-f6c6-4790-adef-fe83deb8980d","type":"Grid"},{"attributes":{},"id":"04b62415-9b20-46d8-afc4-18e9a2e5addb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":9},"id":"ea6e8ebd-03ac-41b5-a0c7-7a24b0aa2135","type":"Range1d"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"23a63aca-4906-4f7e-a8a7-f7a239149de2","type":"GlyphRenderer"}]},"id":"9f87c2d6-6c1a-460c-be13-d45b731a88b5","type":"LegendItem"},{"attributes":{},"id":"0fb27271-2c94-4511-b1cb-7ea62a7b56f3","type":"CategoricalTickFormatter"},{"attributes":{},"id":"57149018-8c4c-4d74-a38c-4671cc7f068b","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ef582dfa-0736-40ff-afc9-926aa0d75357","type":"VBar"},{"attributes":{"formatter":{"id":"04b62415-9b20-46d8-afc4-18e9a2e5addb","type":"BasicTickFormatter"},"plot":{"id":"e636e21b-d00c-4bad-82f7-0a87e674a894","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f776eca-bbb3-457e-8ebd-ad5c27c1e51f","type":"BasicTicker"}},"id":"9da12ce6-dfe7-44cf-938c-af9aa28a79fe","type":"LinearAxis"},{"attributes":{"items":[{"id":"9f87c2d6-6c1a-460c-be13-d45b731a88b5","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"e636e21b-d00c-4bad-82f7-0a87e674a894","subtype":"Figure","type":"Plot"}},"id":"63def397-4569-47f8-8f24-1ef062aec3b0","type":"Legend"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"7f5b2093-bdd9-48c7-b38e-91e38aba540f","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"d57bb6ce-9d11-478a-85a6-37a0af7b59d6","type":"FactorRange"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1359a15b-97f3-413f-a385-76b131d4e6f0","type":"VBar"},{"attributes":{"formatter":{"id":"0fb27271-2c94-4511-b1cb-7ea62a7b56f3","type":"CategoricalTickFormatter"},"plot":{"id":"e636e21b-d00c-4bad-82f7-0a87e674a894","subtype":"Figure","type":"Plot"},"ticker":{"id":"c18db321-cd3f-4008-a00b-3dfe9db2852d","type":"CategoricalTicker"}},"id":"2537e554-556f-4da1-be43-1a7bab5874dc","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e636e21b-d00c-4bad-82f7-0a87e674a894","subtype":"Figure","type":"Plot"},"ticker":{"id":"c18db321-cd3f-4008-a00b-3dfe9db2852d","type":"CategoricalTicker"}},"id":"36aad3b5-89af-4e82-925e-d0ea2c4e9a78","type":"Grid"}],"root_ids":["e636e21b-d00c-4bad-82f7-0a87e674a894"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"0980fa24-3702-421e-86ae-69c83c8d8e4d","elementid":"7be6d94c-a968-4020-9295-c109bd48f0dc","modelid":"e636e21b-d00c-4bad-82f7-0a87e674a894"}];
                
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
