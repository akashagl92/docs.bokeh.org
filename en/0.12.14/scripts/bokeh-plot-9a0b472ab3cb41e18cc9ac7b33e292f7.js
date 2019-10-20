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
      };var element = document.getElementById("ebbc278f-62f2-41e7-afcb-db4007c718a9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ebbc278f-62f2-41e7-afcb-db4007c718a9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"ce9cb81e-7d12-49f4-8948-4f3521e7b737":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"d913018e-573b-4429-9517-2c016ec08a41","type":"FactorRange"},{"attributes":{"fields":["2015","2016"]},"id":"48bb348a-6c3c-4a6e-9508-67a3290c7027","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"86c0752d-e808-475b-bb24-b4c1f897201d","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"c8f80e8e-19e4-4029-9e6b-05db1e34bce6","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"fe604eac-3fd7-417f-8c22-265cbe8a4e9c","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"97a47060-a0a9-4f5a-b896-7c3c44f8f0f8","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"4968dad3-ac2d-4189-a414-f7befa65a450","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"d8acdabf-c138-4075-a0e4-da46a88aa0c8","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"f23cc069-3fa4-4183-bb45-a9406ae3759f","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"48bb348a-6c3c-4a6e-9508-67a3290c7027","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"535788b3-768f-4471-9bdc-355c6934b0ef","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"7dccd9f1-5b7a-45e8-bf3c-fed08d101761","type":"GlyphRenderer"}]},"id":"aac7b814-cba4-4545-bcef-2b1481612309","type":"LegendItem"},{"attributes":{"source":{"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"}},"id":"1b18a5ed-e391-42c9-a87f-b563c53b469b","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"d548572a-11a4-434b-a24c-f5d85921278e","type":"GlyphRenderer"}]},"id":"d717e2c3-3953-48a0-82d9-083dcc3d3290","type":"LegendItem"},{"attributes":{},"id":"4ed92792-47a5-4e4d-bd7d-4096c0ac34b1","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"},"glyph":{"id":"535788b3-768f-4471-9bdc-355c6934b0ef","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a34067ac-477e-4368-acea-5de7e819bbc5","type":"VBar"},"selection_glyph":null,"view":{"id":"f0efcf57-75b8-4a3a-915e-107494de96e6","type":"CDSView"}},"id":"d548572a-11a4-434b-a24c-f5d85921278e","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"aac7b814-cba4-4545-bcef-2b1481612309","type":"LegendItem"},{"id":"d717e2c3-3953-48a0-82d9-083dcc3d3290","type":"LegendItem"},{"id":"253173de-e9fe-4ee2-8ac7-aff77cf1ecbe","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"b7871e27-db86-4aeb-acc6-2631e72b65ab","subtype":"Figure","type":"Plot"}},"id":"43b48a09-c8b6-4729-9073-087d4a67c436","type":"Legend"},{"attributes":{"fields":["2015"]},"id":"f23cc069-3fa4-4183-bb45-a9406ae3759f","type":"Stack"},{"attributes":{"formatter":{"id":"96de2b4e-5ff0-43c9-a770-83fb636673bb","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"b7871e27-db86-4aeb-acc6-2631e72b65ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ed92792-47a5-4e4d-bd7d-4096c0ac34b1","type":"CategoricalTicker"}},"id":"ae49d6e1-ae80-4639-9fdf-6482ea139442","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"97a47060-a0a9-4f5a-b896-7c3c44f8f0f8","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"4968dad3-ac2d-4189-a414-f7befa65a450","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"94b6be52-1154-4419-a9d8-aaa5bf667a4b","type":"VBar"},{"attributes":{"source":{"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"}},"id":"f0efcf57-75b8-4a3a-915e-107494de96e6","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"b7871e27-db86-4aeb-acc6-2631e72b65ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed623bf2-cb65-4d69-a775-a170fd8cbf91","type":"BasicTicker"}},"id":"dc57251d-9de0-4f60-a3ed-73829df70bf6","type":"Grid"},{"attributes":{"fields":[]},"id":"97a47060-a0a9-4f5a-b896-7c3c44f8f0f8","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"4968dad3-ac2d-4189-a414-f7befa65a450","type":"Stack"},{"attributes":{"formatter":{"id":"3fa0d29a-064a-4cf4-ba8c-d0ee31a71990","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"b7871e27-db86-4aeb-acc6-2631e72b65ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed623bf2-cb65-4d69-a775-a170fd8cbf91","type":"BasicTicker"}},"id":"20a97542-0fd7-4dbe-bb36-37be3f2273a4","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"a3da95ce-8d08-42a6-a7bf-20900b146899","type":"DataRange1d"},{"attributes":{"fields":["2015","2016"]},"id":"86c0752d-e808-475b-bb24-b4c1f897201d","type":"Stack"},{"attributes":{},"id":"3fa0d29a-064a-4cf4-ba8c-d0ee31a71990","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"},"glyph":{"id":"bd2374ac-2329-4950-b80a-17d6f2d661ed","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fe604eac-3fd7-417f-8c22-265cbe8a4e9c","type":"VBar"},"selection_glyph":null,"view":{"id":"1b18a5ed-e391-42c9-a87f-b563c53b469b","type":"CDSView"}},"id":"74c4af6b-aefc-4ea6-ac9b-73f00d198e4e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"},"glyph":{"id":"d8acdabf-c138-4075-a0e4-da46a88aa0c8","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"94b6be52-1154-4419-a9d8-aaa5bf667a4b","type":"VBar"},"selection_glyph":null,"view":{"id":"c6d90dcf-de10-46b9-b11b-42a657fbd1b3","type":"CDSView"}},"id":"7dccd9f1-5b7a-45e8-bf3c-fed08d101761","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"f23cc069-3fa4-4183-bb45-a9406ae3759f","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"48bb348a-6c3c-4a6e-9508-67a3290c7027","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"a34067ac-477e-4368-acea-5de7e819bbc5","type":"VBar"},{"attributes":{"source":{"id":"c0dbba61-62c2-4ddc-9386-54411919eb73","type":"ColumnDataSource"}},"id":"c6d90dcf-de10-46b9-b11b-42a657fbd1b3","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"80388052-509b-48e7-bc7e-109d2f859137","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2992a91c-4508-4f59-9bba-fc3b7644d3b2","type":"Toolbar"},{"attributes":{},"id":"ed623bf2-cb65-4d69-a775-a170fd8cbf91","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"86c0752d-e808-475b-bb24-b4c1f897201d","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"c8f80e8e-19e4-4029-9e6b-05db1e34bce6","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"bd2374ac-2329-4950-b80a-17d6f2d661ed","type":"VBar"},{"attributes":{},"id":"96de2b4e-5ff0-43c9-a770-83fb636673bb","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b7871e27-db86-4aeb-acc6-2631e72b65ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ed92792-47a5-4e4d-bd7d-4096c0ac34b1","type":"CategoricalTicker"}},"id":"5bf857dd-8a11-416c-b8a2-eb3d46cc249a","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"74c4af6b-aefc-4ea6-ac9b-73f00d198e4e","type":"GlyphRenderer"}]},"id":"253173de-e9fe-4ee2-8ac7-aff77cf1ecbe","type":"LegendItem"},{"attributes":{"below":[{"id":"ae49d6e1-ae80-4639-9fdf-6482ea139442","type":"CategoricalAxis"}],"left":[{"id":"20a97542-0fd7-4dbe-bb36-37be3f2273a4","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"ae49d6e1-ae80-4639-9fdf-6482ea139442","type":"CategoricalAxis"},{"id":"5bf857dd-8a11-416c-b8a2-eb3d46cc249a","type":"Grid"},{"id":"20a97542-0fd7-4dbe-bb36-37be3f2273a4","type":"LinearAxis"},{"id":"dc57251d-9de0-4f60-a3ed-73829df70bf6","type":"Grid"},{"id":"43b48a09-c8b6-4729-9073-087d4a67c436","type":"Legend"},{"id":"7dccd9f1-5b7a-45e8-bf3c-fed08d101761","type":"GlyphRenderer"},{"id":"d548572a-11a4-434b-a24c-f5d85921278e","type":"GlyphRenderer"},{"id":"74c4af6b-aefc-4ea6-ac9b-73f00d198e4e","type":"GlyphRenderer"}],"title":{"id":"80388052-509b-48e7-bc7e-109d2f859137","type":"Title"},"toolbar":{"id":"2992a91c-4508-4f59-9bba-fc3b7644d3b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d913018e-573b-4429-9517-2c016ec08a41","type":"FactorRange"},"x_scale":{"id":"57fbf00a-3487-4c7a-9363-eb083abe4f15","type":"CategoricalScale"},"y_range":{"id":"a3da95ce-8d08-42a6-a7bf-20900b146899","type":"DataRange1d"},"y_scale":{"id":"7436aeb2-b5bd-451d-9bdd-d1122bed1e76","type":"LinearScale"}},"id":"b7871e27-db86-4aeb-acc6-2631e72b65ab","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7436aeb2-b5bd-451d-9bdd-d1122bed1e76","type":"LinearScale"},{"attributes":{},"id":"57fbf00a-3487-4c7a-9363-eb083abe4f15","type":"CategoricalScale"},{"attributes":{"fields":["2015","2016","2017"]},"id":"c8f80e8e-19e4-4029-9e6b-05db1e34bce6","type":"Stack"}],"root_ids":["b7871e27-db86-4aeb-acc6-2631e72b65ab"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"ce9cb81e-7d12-49f4-8948-4f3521e7b737","elementid":"ebbc278f-62f2-41e7-afcb-db4007c718a9","modelid":"b7871e27-db86-4aeb-acc6-2631e72b65ab"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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