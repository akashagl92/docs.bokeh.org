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
      };var element = document.getElementById("85f723a8-7258-469e-a7f6-b268813bbc63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85f723a8-7258-469e-a7f6-b268813bbc63' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4b705212-d9dd-485c-befe-3fc0cbbc4bc4":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8c1cbcc6-743d-4648-bc7e-ac1164a032ff","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"61e76ea8-e47a-43c4-8b83-ea2fa5d1da4e","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"6bd20c0f-e62d-4766-ae30-b23c9cd84c99","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"fb490d01-1c01-4421-b7cf-35ee1fe0e93e","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"11094d2d-17d1-4ad2-b849-23e035016a8e","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"0fb0702e-5b19-439a-80b0-d50a7f6faa7a","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b2bf45f8-c47e-477e-97cc-7610ce33d47f","type":"VBar"},{"attributes":{},"id":"c9059416-bb8e-47b7-90e8-458cdbe15487","type":"LinearScale"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"c6e330d2-c303-4996-9989-4a29272349e3","type":"GlyphRenderer"}]},"id":"42ebd310-b670-432a-8de2-7de74d7ca384","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"6bd20c0f-e62d-4766-ae30-b23c9cd84c99","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"11094d2d-17d1-4ad2-b849-23e035016a8e","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"0fb0702e-5b19-439a-80b0-d50a7f6faa7a","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"c49614f9-8c5d-4538-bd2b-513c28ff4416","type":"VBar"},{"attributes":{},"id":"42c517fd-45a5-4cc4-b0d8-b1df255365f6","type":"Selection"},{"attributes":{},"id":"2a6801a4-993d-46f4-a116-47c591e92c2e","type":"BasicTicker"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"3d3e41a3-bb8d-4bb6-80b5-2ccfe890d823","type":"GlyphRenderer"}]},"id":"27b4f1fd-a3f5-4566-a2d5-5394e62b5afe","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"61e76ea8-e47a-43c4-8b83-ea2fa5d1da4e","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"6bd20c0f-e62d-4766-ae30-b23c9cd84c99","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"662e2ed1-a671-4a55-ae57-aa13687f3746","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"61e76ea8-e47a-43c4-8b83-ea2fa5d1da4e","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"83d2ac8b-3525-4927-833f-3059d38e5143","type":"Stack"},{"attributes":{"items":[{"id":"27b4f1fd-a3f5-4566-a2d5-5394e62b5afe","type":"LegendItem"},{"id":"29b704f2-6af8-4fdf-a78a-eb8c4056ab85","type":"LegendItem"},{"id":"42ebd310-b670-432a-8de2-7de74d7ca384","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8","subtype":"Figure","type":"Plot"}},"id":"676b03ae-6bfc-4723-b94d-99874cc57861","type":"Legend"},{"attributes":{"source":{"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"}},"id":"8173a36d-fdfd-41fc-8b7c-fbd4e7357aab","type":"CDSView"},{"attributes":{"source":{"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"}},"id":"e28c3247-d8f9-44ca-9ef1-189a3b9ca223","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"0fb0702e-5b19-439a-80b0-d50a7f6faa7a","type":"Stack"},{"attributes":{"below":[{"id":"83fd6813-94a8-4623-a26d-6c52f47d2107","type":"CategoricalAxis"}],"left":[{"id":"cfdeaef2-151f-42fc-88e9-fb08242bad3d","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"83fd6813-94a8-4623-a26d-6c52f47d2107","type":"CategoricalAxis"},{"id":"5ece9f80-ca66-4191-b6a3-2febd22611c9","type":"Grid"},{"id":"cfdeaef2-151f-42fc-88e9-fb08242bad3d","type":"LinearAxis"},{"id":"da6352f3-b26a-455d-aedb-a9a859220655","type":"Grid"},{"id":"676b03ae-6bfc-4723-b94d-99874cc57861","type":"Legend"},{"id":"3d3e41a3-bb8d-4bb6-80b5-2ccfe890d823","type":"GlyphRenderer"},{"id":"b343585f-86f9-4010-8c70-a244d67c114a","type":"GlyphRenderer"},{"id":"c6e330d2-c303-4996-9989-4a29272349e3","type":"GlyphRenderer"}],"title":{"id":"6e8e0fa0-cf8c-4e1a-9ad0-6a3f599ef6dc","type":"Title"},"toolbar":{"id":"8c1cbcc6-743d-4648-bc7e-ac1164a032ff","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4aea7577-47ad-4be2-9a9c-3760c4c03853","type":"FactorRange"},"x_scale":{"id":"6803f29f-8eb8-4e97-afec-cb91f0496d12","type":"CategoricalScale"},"y_range":{"id":"ab9a208b-fa18-4e20-b59c-ec10a3eee4cf","type":"DataRange1d"},"y_scale":{"id":"c9059416-bb8e-47b7-90e8-458cdbe15487","type":"LinearScale"}},"id":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"},"glyph":{"id":"c49614f9-8c5d-4538-bd2b-513c28ff4416","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b2bf45f8-c47e-477e-97cc-7610ce33d47f","type":"VBar"},"selection_glyph":null,"view":{"id":"1c4954e6-d289-4e40-9906-e0e7c3e7dc62","type":"CDSView"}},"id":"b343585f-86f9-4010-8c70-a244d67c114a","type":"GlyphRenderer"},{"attributes":{},"id":"77c8705a-251c-43c3-8e55-00e470fd0a3f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"},"glyph":{"id":"28bae14b-bbab-4812-9199-c5e9285252c0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ed4f022f-2287-424b-98f8-de4bc08c8090","type":"VBar"},"selection_glyph":null,"view":{"id":"e28c3247-d8f9-44ca-9ef1-189a3b9ca223","type":"CDSView"}},"id":"3d3e41a3-bb8d-4bb6-80b5-2ccfe890d823","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"b343585f-86f9-4010-8c70-a244d67c114a","type":"GlyphRenderer"}]},"id":"29b704f2-6af8-4fdf-a78a-eb8c4056ab85","type":"LegendItem"},{"attributes":{},"id":"5a7893e5-efc6-4907-9305-3375212b9b24","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"5a7893e5-efc6-4907-9305-3375212b9b24","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3736b46d-2326-4e60-8c40-cf367ab97504","type":"CategoricalTicker"}},"id":"83fd6813-94a8-4623-a26d-6c52f47d2107","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"e4c34697-3574-407f-96be-edfaefcc2ee1","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"83d2ac8b-3525-4927-833f-3059d38e5143","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ed4f022f-2287-424b-98f8-de4bc08c8090","type":"VBar"},{"attributes":{},"id":"6803f29f-8eb8-4e97-afec-cb91f0496d12","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"e4c34697-3574-407f-96be-edfaefcc2ee1","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"83d2ac8b-3525-4927-833f-3059d38e5143","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"28bae14b-bbab-4812-9199-c5e9285252c0","type":"VBar"},{"attributes":{},"id":"d0eaa8d5-2075-49ee-bef9-1180144c0e01","type":"UnionRenderers"},{"attributes":{"source":{"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"}},"id":"1c4954e6-d289-4e40-9906-e0e7c3e7dc62","type":"CDSView"},{"attributes":{"formatter":{"id":"77c8705a-251c-43c3-8e55-00e470fd0a3f","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a6801a4-993d-46f4-a116-47c591e92c2e","type":"BasicTicker"}},"id":"cfdeaef2-151f-42fc-88e9-fb08242bad3d","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"6e8e0fa0-cf8c-4e1a-9ad0-6a3f599ef6dc","type":"Title"},{"attributes":{"fields":[]},"id":"e4c34697-3574-407f-96be-edfaefcc2ee1","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"11094d2d-17d1-4ad2-b849-23e035016a8e","type":"Stack"},{"attributes":{"callback":null,"start":0},"id":"ab9a208b-fa18-4e20-b59c-ec10a3eee4cf","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"4aea7577-47ad-4be2-9a9c-3760c4c03853","type":"FactorRange"},{"attributes":{"data_source":{"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"},"glyph":{"id":"662e2ed1-a671-4a55-ae57-aa13687f3746","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb490d01-1c01-4421-b7cf-35ee1fe0e93e","type":"VBar"},"selection_glyph":null,"view":{"id":"8173a36d-fdfd-41fc-8b7c-fbd4e7357aab","type":"CDSView"}},"id":"c6e330d2-c303-4996-9989-4a29272349e3","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"42c517fd-45a5-4cc4-b0d8-b1df255365f6","type":"Selection"},"selection_policy":{"id":"d0eaa8d5-2075-49ee-bef9-1180144c0e01","type":"UnionRenderers"}},"id":"4298c173-e058-45a8-b21a-07ac304a9fe3","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a6801a4-993d-46f4-a116-47c591e92c2e","type":"BasicTicker"}},"id":"da6352f3-b26a-455d-aedb-a9a859220655","type":"Grid"},{"attributes":{},"id":"3736b46d-2326-4e60-8c40-cf367ab97504","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8","subtype":"Figure","type":"Plot"},"ticker":{"id":"3736b46d-2326-4e60-8c40-cf367ab97504","type":"CategoricalTicker"}},"id":"5ece9f80-ca66-4191-b6a3-2febd22611c9","type":"Grid"}],"root_ids":["2f00b271-7a34-4c6c-a9ab-caafde98dbb8"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"4b705212-d9dd-485c-befe-3fc0cbbc4bc4","elementid":"85f723a8-7258-469e-a7f6-b268813bbc63","modelid":"2f00b271-7a34-4c6c-a9ab-caafde98dbb8"}];
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