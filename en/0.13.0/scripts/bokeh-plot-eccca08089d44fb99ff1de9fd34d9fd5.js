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
      };var element = document.getElementById("cc4628e6-bcf2-42da-8b39-aa91c7e4d1d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc4628e6-bcf2-42da-8b39-aa91c7e4d1d9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f783f1fd-61e1-42d9-8bf3-25faabead014":{"roots":{"references":[{"attributes":{"data_source":{"id":"c34ecf3d-e4ec-4557-97e2-9124318ada2a","type":"ColumnDataSource"},"glyph":{"id":"50d82eb9-5662-4468-80e4-a3def0cb6a06","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"28ed7d2a-1109-48aa-ae05-546d41690482","type":"VBar"},"selection_glyph":null,"view":{"id":"33f14061-c719-4a62-979c-0d5896e937ce","type":"CDSView"}},"id":"4f7a05cb-37e5-4f0c-b21a-f9d99e0f20c1","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"7984d9cd-963a-4b85-ae56-1521dd8f9b35","type":"DataRange1d"},{"attributes":{},"id":"a3acdeee-5a06-442e-b34c-4eb6518e69b7","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"ef58aa90-74af-4cbf-a055-00ec84c169b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5d3152c-3b39-4402-b82f-40d6844d14b3","type":"BasicTicker"}},"id":"7107aedf-e375-4732-babd-8dd5bf094834","type":"Grid"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"5ffd7b17-4ac1-4b41-b799-33c3b1ba8dac","type":"Title"},{"attributes":{"fields":["2015","2016"]},"id":"b459d0c3-f088-4f02-9003-11723a801c59","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"7a81fc2a-ab10-4294-b878-127426076af8","type":"Selection"},"selection_policy":{"id":"34965be2-34fa-44de-9b59-3debb1c38ef9","type":"UnionRenderers"}},"id":"c77638a4-e6c7-4fa9-a817-54d16bf7dcd3","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"0e407259-1260-47f5-b81b-fa05b2021df7","type":"FactorRange"},{"attributes":{},"id":"60402e31-1767-42bd-ab6b-9d0c71651941","type":"CategoricalTicker"},{"attributes":{"fields":["2015"]},"id":"dc863875-96cd-4fd5-97fc-533fce0b09f0","type":"Stack"},{"attributes":{"below":[{"id":"2a440fe7-d496-41da-a965-148a038a9bf7","type":"CategoricalAxis"}],"left":[{"id":"79de6c2e-73d2-4869-b97c-c63088349f5a","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"2a440fe7-d496-41da-a965-148a038a9bf7","type":"CategoricalAxis"},{"id":"e28972cf-2fbc-4ddf-9ae5-956130c85976","type":"Grid"},{"id":"79de6c2e-73d2-4869-b97c-c63088349f5a","type":"LinearAxis"},{"id":"7107aedf-e375-4732-babd-8dd5bf094834","type":"Grid"},{"id":"c05dc6d6-5154-40f0-af7b-7f43fcbac522","type":"Legend"},{"id":"edaabac5-c96d-4fc3-860b-d5aae5566a87","type":"GlyphRenderer"},{"id":"209e14ca-ad0b-4911-af66-b1bea4df59d5","type":"GlyphRenderer"},{"id":"4f7a05cb-37e5-4f0c-b21a-f9d99e0f20c1","type":"GlyphRenderer"}],"title":{"id":"5ffd7b17-4ac1-4b41-b799-33c3b1ba8dac","type":"Title"},"toolbar":{"id":"b1c8eb46-ca4b-4be1-a9bf-e3c66375111d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0e407259-1260-47f5-b81b-fa05b2021df7","type":"FactorRange"},"x_scale":{"id":"a3acdeee-5a06-442e-b34c-4eb6518e69b7","type":"CategoricalScale"},"y_range":{"id":"7984d9cd-963a-4b85-ae56-1521dd8f9b35","type":"DataRange1d"},"y_scale":{"id":"fe54dfb5-409d-4079-935b-7a3ea3df8d1e","type":"LinearScale"}},"id":"ef58aa90-74af-4cbf-a055-00ec84c169b0","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"e9e9ddba-185f-400d-b47a-94f8a5284710","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"ef58aa90-74af-4cbf-a055-00ec84c169b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5d3152c-3b39-4402-b82f-40d6844d14b3","type":"BasicTicker"}},"id":"79de6c2e-73d2-4869-b97c-c63088349f5a","type":"LinearAxis"},{"attributes":{"fields":["2015"]},"id":"f6f63652-0d64-4105-93f6-fa79466b6a56","type":"Stack"},{"attributes":{"items":[{"id":"c7de2890-d668-42e7-99fe-9a1b174078ad","type":"LegendItem"},{"id":"b767ec38-fd2d-4ea1-a4c7-f74d62772209","type":"LegendItem"},{"id":"d3512678-e573-4ef7-b78e-d6f2426f0ab7","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"ef58aa90-74af-4cbf-a055-00ec84c169b0","subtype":"Figure","type":"Plot"}},"id":"c05dc6d6-5154-40f0-af7b-7f43fcbac522","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"47726558-0dc9-494f-9396-06cc1472f1f2","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"df420b75-f9e2-49c1-953b-26629d21a407","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"28ed7d2a-1109-48aa-ae05-546d41690482","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"965cebec-390a-468f-8797-2f5d9aaf8c3d","type":"Selection"},"selection_policy":{"id":"a2076b3c-5c90-428a-b6c0-fcc06efa8a2c","type":"UnionRenderers"}},"id":"8cd83164-fd5a-46df-a079-715647774d2d","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c77638a4-e6c7-4fa9-a817-54d16bf7dcd3","type":"ColumnDataSource"}},"id":"e7b9d4de-fa81-4b36-abf6-acfd70023447","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"51a8ff34-a872-47f3-b602-05c3f046a691","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"dc863875-96cd-4fd5-97fc-533fce0b09f0","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"7c70b7c8-e765-414d-b651-f15b98db9361","type":"VBar"},{"attributes":{"source":{"id":"8cd83164-fd5a-46df-a079-715647774d2d","type":"ColumnDataSource"}},"id":"f6208558-a5fe-4c60-8f55-2f761c58415a","type":"CDSView"},{"attributes":{"source":{"id":"c34ecf3d-e4ec-4557-97e2-9124318ada2a","type":"ColumnDataSource"}},"id":"33f14061-c719-4a62-979c-0d5896e937ce","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21ea4257-ad35-487a-ab0d-1596c9caff71","type":"HoverTool"}]},"id":"b1c8eb46-ca4b-4be1-a9bf-e3c66375111d","type":"Toolbar"},{"attributes":{},"id":"a2076b3c-5c90-428a-b6c0-fcc06efa8a2c","type":"UnionRenderers"},{"attributes":{"fields":[]},"id":"51a8ff34-a872-47f3-b602-05c3f046a691","type":"Stack"},{"attributes":{},"id":"a5d3152c-3b39-4402-b82f-40d6844d14b3","type":"BasicTicker"},{"attributes":{"fields":["2015","2016","2017"]},"id":"df420b75-f9e2-49c1-953b-26629d21a407","type":"Stack"},{"attributes":{"data_source":{"id":"c77638a4-e6c7-4fa9-a817-54d16bf7dcd3","type":"ColumnDataSource"},"glyph":{"id":"a89d8d7f-d5a5-4b93-8303-85f0a995d62b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"7c70b7c8-e765-414d-b651-f15b98db9361","type":"VBar"},"selection_glyph":null,"view":{"id":"e7b9d4de-fa81-4b36-abf6-acfd70023447","type":"CDSView"}},"id":"edaabac5-c96d-4fc3-860b-d5aae5566a87","type":"GlyphRenderer"},{"attributes":{},"id":"34965be2-34fa-44de-9b59-3debb1c38ef9","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"f6f63652-0d64-4105-93f6-fa79466b6a56","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"b459d0c3-f088-4f02-9003-11723a801c59","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"94ba9415-5d1d-4b96-bf16-b820dec827c2","type":"VBar"},{"attributes":{},"id":"8bdd9499-2abb-469f-9dea-c3f96812d113","type":"Selection"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"edaabac5-c96d-4fc3-860b-d5aae5566a87","type":"GlyphRenderer"}]},"id":"c7de2890-d668-42e7-99fe-9a1b174078ad","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"f6f63652-0d64-4105-93f6-fa79466b6a56","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"b459d0c3-f088-4f02-9003-11723a801c59","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b6d2afb1-981c-47fc-9f9c-a59dd14dcfbd","type":"VBar"},{"attributes":{},"id":"fe54dfb5-409d-4079-935b-7a3ea3df8d1e","type":"LinearScale"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"8bdd9499-2abb-469f-9dea-c3f96812d113","type":"Selection"},"selection_policy":{"id":"977ba190-1a4b-4e7d-bd70-31b00e8258cd","type":"UnionRenderers"}},"id":"c34ecf3d-e4ec-4557-97e2-9124318ada2a","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"47726558-0dc9-494f-9396-06cc1472f1f2","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"df420b75-f9e2-49c1-953b-26629d21a407","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"50d82eb9-5662-4468-80e4-a3def0cb6a06","type":"VBar"},{"attributes":{},"id":"7a81fc2a-ab10-4294-b878-127426076af8","type":"Selection"},{"attributes":{},"id":"e9e9ddba-185f-400d-b47a-94f8a5284710","type":"BasicTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"47726558-0dc9-494f-9396-06cc1472f1f2","type":"Stack"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"4f7a05cb-37e5-4f0c-b21a-f9d99e0f20c1","type":"GlyphRenderer"}]},"id":"d3512678-e573-4ef7-b78e-d6f2426f0ab7","type":"LegendItem"},{"attributes":{"formatter":{"id":"0186687a-fe17-49bd-a9ed-56a3866f7a72","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"ef58aa90-74af-4cbf-a055-00ec84c169b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"60402e31-1767-42bd-ab6b-9d0c71651941","type":"CategoricalTicker"}},"id":"2a440fe7-d496-41da-a965-148a038a9bf7","type":"CategoricalAxis"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"209e14ca-ad0b-4911-af66-b1bea4df59d5","type":"GlyphRenderer"}]},"id":"b767ec38-fd2d-4ea1-a4c7-f74d62772209","type":"LegendItem"},{"attributes":{"data_source":{"id":"8cd83164-fd5a-46df-a079-715647774d2d","type":"ColumnDataSource"},"glyph":{"id":"b6d2afb1-981c-47fc-9f9c-a59dd14dcfbd","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"94ba9415-5d1d-4b96-bf16-b820dec827c2","type":"VBar"},"selection_glyph":null,"view":{"id":"f6208558-a5fe-4c60-8f55-2f761c58415a","type":"CDSView"}},"id":"209e14ca-ad0b-4911-af66-b1bea4df59d5","type":"GlyphRenderer"},{"attributes":{},"id":"965cebec-390a-468f-8797-2f5d9aaf8c3d","type":"Selection"},{"attributes":{},"id":"0186687a-fe17-49bd-a9ed-56a3866f7a72","type":"CategoricalTickFormatter"},{"attributes":{},"id":"977ba190-1a4b-4e7d-bd70-31b00e8258cd","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"$name @fruits: @$name"},"id":"21ea4257-ad35-487a-ab0d-1596c9caff71","type":"HoverTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ef58aa90-74af-4cbf-a055-00ec84c169b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"60402e31-1767-42bd-ab6b-9d0c71651941","type":"CategoricalTicker"}},"id":"e28972cf-2fbc-4ddf-9ae5-956130c85976","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"51a8ff34-a872-47f3-b602-05c3f046a691","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"dc863875-96cd-4fd5-97fc-533fce0b09f0","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"a89d8d7f-d5a5-4b93-8303-85f0a995d62b","type":"VBar"}],"root_ids":["ef58aa90-74af-4cbf-a055-00ec84c169b0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f783f1fd-61e1-42d9-8bf3-25faabead014","roots":{"ef58aa90-74af-4cbf-a055-00ec84c169b0":"cc4628e6-bcf2-42da-8b39-aa91c7e4d1d9"}}];
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