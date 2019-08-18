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
      };var element = document.getElementById("7bd3c8a9-f05c-4d99-963c-2484b3060430");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7bd3c8a9-f05c-4d99-963c-2484b3060430' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"af64567c-ebc6-49e7-9173-0d4a92eba955":{"roots":{"references":[{"attributes":{"bottom":{"expr":{"id":"ea9d4b04-6ca5-4a8d-8373-0df34d4aaf2b","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"348186be-05c7-475e-900f-7a0c5aec30bc","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"74982c0b-1199-4912-9c89-48ca066432f4","type":"VBar"},{"attributes":{},"id":"ac3ee936-9036-47c1-a9c7-a631da13e4e2","type":"BasicTicker"},{"attributes":{"bottom":{"expr":{"id":"a904ef01-a8fb-4393-82bc-82040709d169","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"305f852a-1311-49eb-b93e-c1e878fe00e8","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"7e659430-6e5c-45ba-8d33-577c3617250d","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"d14e2225-a989-4d2a-84d4-a648a640f733","type":"DataRange1d"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"a59bbf34-2db6-4970-a1c0-8a8f80262a94","type":"GlyphRenderer"}]},"id":"1a18c706-e0d2-43f7-8e6e-3b24d3722c87","type":"LegendItem"},{"attributes":{"data_source":{"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"},"glyph":{"id":"27c85de7-48ec-4f8e-95cf-c39cca490a19","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45e3df95-062e-4403-8a40-b74b67481c73","type":"VBar"},"selection_glyph":null,"view":{"id":"6203476f-6e11-428b-a261-771b2ce10eb2","type":"CDSView"}},"id":"d37859b4-c2d8-4301-b1c9-a3e0886790e1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"},"glyph":{"id":"74982c0b-1199-4912-9c89-48ca066432f4","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cbf0c5eb-3608-4c48-a461-7d1d9c2783bf","type":"VBar"},"selection_glyph":null,"view":{"id":"39b9f45b-0d07-414c-a9c8-76551fcfc451","type":"CDSView"}},"id":"22fe2b3d-db62-49cc-85b2-e1ec18c12058","type":"GlyphRenderer"},{"attributes":{},"id":"e4e1866e-7c59-46f6-a835-3aa81192b017","type":"CategoricalTicker"},{"attributes":{"fields":["2015"]},"id":"ea9d4b04-6ca5-4a8d-8373-0df34d4aaf2b","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"6c8f28de-1ce7-4ce4-b8c5-524a37ad525a","type":"Title"},{"attributes":{},"id":"f1b4f32d-07f5-44ed-bf29-f3713fc6caf9","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"}},"id":"6203476f-6e11-428b-a261-771b2ce10eb2","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"4ea563b2-d506-44b0-99b5-549bb05083ab","type":"FactorRange"},{"attributes":{"bottom":{"expr":{"id":"5b5ee82b-bc54-4d91-9130-1ce15ef4fc44","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1425e610-8d52-4842-a896-c6bbbf5c05d5","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"45e3df95-062e-4403-8a40-b74b67481c73","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"d37859b4-c2d8-4301-b1c9-a3e0886790e1","type":"GlyphRenderer"}]},"id":"a8d2ff94-a3dc-4953-ab9b-47f7489b830e","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"a904ef01-a8fb-4393-82bc-82040709d169","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"1425e610-8d52-4842-a896-c6bbbf5c05d5","type":"Stack"},{"attributes":{"source":{"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"}},"id":"2f11f4c1-cbeb-4d47-a9d2-f105f4cc7d4f","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"5b5ee82b-bc54-4d91-9130-1ce15ef4fc44","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"1425e610-8d52-4842-a896-c6bbbf5c05d5","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"27c85de7-48ec-4f8e-95cf-c39cca490a19","type":"VBar"},{"attributes":{},"id":"0ba80172-1f38-4711-a2ea-5c787247519b","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac3ee936-9036-47c1-a9c7-a631da13e4e2","type":"BasicTicker"}},"id":"152bc2dd-a3a1-43c3-a0f8-5a1804df2e2e","type":"Grid"},{"attributes":{"formatter":{"id":"0ba80172-1f38-4711-a2ea-5c787247519b","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4e1866e-7c59-46f6-a835-3aa81192b017","type":"CategoricalTicker"}},"id":"b651d858-59a6-48e3-a00a-660b0cdc9b03","type":"CategoricalAxis"},{"attributes":{"source":{"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"}},"id":"39b9f45b-0d07-414c-a9c8-76551fcfc451","type":"CDSView"},{"attributes":{"items":[{"id":"a8d2ff94-a3dc-4953-ab9b-47f7489b830e","type":"LegendItem"},{"id":"ab60881e-c720-4de0-bc35-952eddf94a8e","type":"LegendItem"},{"id":"1a18c706-e0d2-43f7-8e6e-3b24d3722c87","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd","subtype":"Figure","type":"Plot"}},"id":"cbb922c3-ea1f-4052-a8e4-afd84f7b921f","type":"Legend"},{"attributes":{"data_source":{"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"},"glyph":{"id":"94309514-48f1-4fe5-bdf6-c7039714252e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7e659430-6e5c-45ba-8d33-577c3617250d","type":"VBar"},"selection_glyph":null,"view":{"id":"2f11f4c1-cbeb-4d47-a9d2-f105f4cc7d4f","type":"CDSView"}},"id":"a59bbf34-2db6-4970-a1c0-8a8f80262a94","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"50bcd42a-9baa-4892-b512-e983c9b48aa5","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"b651d858-59a6-48e3-a00a-660b0cdc9b03","type":"CategoricalAxis"}],"left":[{"id":"2518bd40-26e4-471d-9cef-d89dc095d0f1","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"b651d858-59a6-48e3-a00a-660b0cdc9b03","type":"CategoricalAxis"},{"id":"d295e2c2-03df-4c71-a765-170a2c1904e9","type":"Grid"},{"id":"2518bd40-26e4-471d-9cef-d89dc095d0f1","type":"LinearAxis"},{"id":"152bc2dd-a3a1-43c3-a0f8-5a1804df2e2e","type":"Grid"},{"id":"cbb922c3-ea1f-4052-a8e4-afd84f7b921f","type":"Legend"},{"id":"d37859b4-c2d8-4301-b1c9-a3e0886790e1","type":"GlyphRenderer"},{"id":"22fe2b3d-db62-49cc-85b2-e1ec18c12058","type":"GlyphRenderer"},{"id":"a59bbf34-2db6-4970-a1c0-8a8f80262a94","type":"GlyphRenderer"}],"title":{"id":"6c8f28de-1ce7-4ce4-b8c5-524a37ad525a","type":"Title"},"toolbar":{"id":"bb6a5ca4-3a85-43f4-b87f-0364f2b28da6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4ea563b2-d506-44b0-99b5-549bb05083ab","type":"FactorRange"},"x_scale":{"id":"2a71d1e2-bfeb-473a-a3db-4ff9f69c37cf","type":"CategoricalScale"},"y_range":{"id":"d14e2225-a989-4d2a-84d4-a648a640f733","type":"DataRange1d"},"y_scale":{"id":"ce183940-6aa9-4747-8f3f-dd315a1ac007","type":"LinearScale"}},"id":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bb6a5ca4-3a85-43f4-b87f-0364f2b28da6","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"a904ef01-a8fb-4393-82bc-82040709d169","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"305f852a-1311-49eb-b93e-c1e878fe00e8","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"94309514-48f1-4fe5-bdf6-c7039714252e","type":"VBar"},{"attributes":{"formatter":{"id":"f1b4f32d-07f5-44ed-bf29-f3713fc6caf9","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac3ee936-9036-47c1-a9c7-a631da13e4e2","type":"BasicTicker"}},"id":"2518bd40-26e4-471d-9cef-d89dc095d0f1","type":"LinearAxis"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"22fe2b3d-db62-49cc-85b2-e1ec18c12058","type":"GlyphRenderer"}]},"id":"ab60881e-c720-4de0-bc35-952eddf94a8e","type":"LegendItem"},{"attributes":{"fields":[]},"id":"5b5ee82b-bc54-4d91-9130-1ce15ef4fc44","type":"Stack"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4e1866e-7c59-46f6-a835-3aa81192b017","type":"CategoricalTicker"}},"id":"d295e2c2-03df-4c71-a765-170a2c1904e9","type":"Grid"},{"attributes":{},"id":"ce183940-6aa9-4747-8f3f-dd315a1ac007","type":"LinearScale"},{"attributes":{},"id":"2a71d1e2-bfeb-473a-a3db-4ff9f69c37cf","type":"CategoricalScale"},{"attributes":{"bottom":{"expr":{"id":"ea9d4b04-6ca5-4a8d-8373-0df34d4aaf2b","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"348186be-05c7-475e-900f-7a0c5aec30bc","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"cbf0c5eb-3608-4c48-a461-7d1d9c2783bf","type":"VBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"305f852a-1311-49eb-b93e-c1e878fe00e8","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"348186be-05c7-475e-900f-7a0c5aec30bc","type":"Stack"}],"root_ids":["2aefb6bb-47b2-4857-b0eb-99c8cf2311cd"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"af64567c-ebc6-49e7-9173-0d4a92eba955","elementid":"7bd3c8a9-f05c-4d99-963c-2484b3060430","modelid":"2aefb6bb-47b2-4857-b0eb-99c8cf2311cd"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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