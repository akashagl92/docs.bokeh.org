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
      };var element = document.getElementById("b52311dc-a2d2-467b-bc8b-e270f53b1da4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b52311dc-a2d2-467b-bc8b-e270f53b1da4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"0b776e05-c66e-4ee4-854e-51704d721307":{"roots":{"references":[{"attributes":{},"id":"68a62079-8fee-4847-a79f-28bd2c6f6b68","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8c73e58f-3fe6-4147-bf69-46b699c6a535","subtype":"Figure","type":"Plot"},"ticker":{"id":"34a6e909-f573-4fcf-b5d2-549c0abec100","type":"CategoricalTicker"}},"id":"3aab6535-9152-4c22-b298-ee68c988496b","type":"Grid"},{"attributes":{},"id":"9c007e11-715f-40f8-a708-ba2bbfeb9b97","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"75214e92-6d69-4821-83fe-abbb3d1117ad","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"be49185a-9602-454f-bafd-db1484aabb8e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"b1d53a48-c0b9-466d-b474-05f616951b98","type":"VBar"},{"attributes":{"formatter":{"id":"b239f3f9-b0ef-4556-b31c-690b49d29181","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"8c73e58f-3fe6-4147-bf69-46b699c6a535","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ab99f85-9886-4d0b-9587-a5c18993b361","type":"BasicTicker"}},"id":"b5eba2db-3a31-4861-9e0e-ac9f0a7c104d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"},"glyph":{"id":"26438a20-67ac-4a97-9670-132fa212a7af","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e28fe953-b95d-4ba4-bdf8-287b6737ab6e","type":"VBar"},"selection_glyph":null,"view":{"id":"281aa0a6-7c16-42ef-9ef3-44c5876064fe","type":"CDSView"}},"id":"7368ed4c-71dd-4dfb-976e-c3358dad075a","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"9971dc39-c8eb-4007-ab47-5728041a619e","type":"LegendItem"},{"id":"3ebf65a4-aa56-4975-8c1f-cfd49a426f12","type":"LegendItem"},{"id":"10ff948f-541a-42d5-b06f-f295ab63357e","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"8c73e58f-3fe6-4147-bf69-46b699c6a535","subtype":"Figure","type":"Plot"}},"id":"2831b2d6-a724-4327-9819-ec69bc647f0d","type":"Legend"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f0d0b957-3949-4473-843c-b3f1bf1f46c9","type":"Toolbar"},{"attributes":{"source":{"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"}},"id":"281aa0a6-7c16-42ef-9ef3-44c5876064fe","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"8c73e58f-3fe6-4147-bf69-46b699c6a535","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ab99f85-9886-4d0b-9587-a5c18993b361","type":"BasicTicker"}},"id":"9a4fe3fb-07fc-4826-8692-cd19bbf815e8","type":"Grid"},{"attributes":{"fields":[]},"id":"4f50213b-119e-4006-b104-b4efab1dca0e","type":"Stack"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"7368ed4c-71dd-4dfb-976e-c3358dad075a","type":"GlyphRenderer"}]},"id":"9971dc39-c8eb-4007-ab47-5728041a619e","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"982e4584-3e01-42b0-9e6a-8dba27822477","type":"Title"},{"attributes":{"data_source":{"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"},"glyph":{"id":"83c365c2-3605-446a-b309-c644a6751e1b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b1d53a48-c0b9-466d-b474-05f616951b98","type":"VBar"},"selection_glyph":null,"view":{"id":"40eac436-92cf-457d-be4e-a4229d204938","type":"CDSView"}},"id":"342cbe73-96ee-430f-9932-233f1e31ab27","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"230fb3b5-87a0-4456-955e-824440ea496a","type":"DataRange1d"},{"attributes":{},"id":"6ab99f85-9886-4d0b-9587-a5c18993b361","type":"BasicTicker"},{"attributes":{"below":[{"id":"cc9491ed-8bf3-4574-a929-386f608f942d","type":"CategoricalAxis"}],"left":[{"id":"b5eba2db-3a31-4861-9e0e-ac9f0a7c104d","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"cc9491ed-8bf3-4574-a929-386f608f942d","type":"CategoricalAxis"},{"id":"3aab6535-9152-4c22-b298-ee68c988496b","type":"Grid"},{"id":"b5eba2db-3a31-4861-9e0e-ac9f0a7c104d","type":"LinearAxis"},{"id":"9a4fe3fb-07fc-4826-8692-cd19bbf815e8","type":"Grid"},{"id":"2831b2d6-a724-4327-9819-ec69bc647f0d","type":"Legend"},{"id":"7368ed4c-71dd-4dfb-976e-c3358dad075a","type":"GlyphRenderer"},{"id":"342cbe73-96ee-430f-9932-233f1e31ab27","type":"GlyphRenderer"},{"id":"42675dd6-19ab-40c5-b372-838b4843e1b6","type":"GlyphRenderer"}],"title":{"id":"982e4584-3e01-42b0-9e6a-8dba27822477","type":"Title"},"toolbar":{"id":"f0d0b957-3949-4473-843c-b3f1bf1f46c9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b21cf12b-8544-49d2-838f-b596896bad2c","type":"FactorRange"},"x_scale":{"id":"319076f3-c56c-4606-b19e-7f8bdf2ea0dc","type":"CategoricalScale"},"y_range":{"id":"230fb3b5-87a0-4456-955e-824440ea496a","type":"DataRange1d"},"y_scale":{"id":"68a62079-8fee-4847-a79f-28bd2c6f6b68","type":"LinearScale"}},"id":"8c73e58f-3fe6-4147-bf69-46b699c6a535","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["2015","2016"]},"id":"5da02c19-2882-475b-89d4-539ca63738cf","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"b21cf12b-8544-49d2-838f-b596896bad2c","type":"FactorRange"},{"attributes":{"fields":["2015","2016","2017"]},"id":"ccffb014-5d45-4a4a-bd8c-1532382508f5","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"5da02c19-2882-475b-89d4-539ca63738cf","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"ccffb014-5d45-4a4a-bd8c-1532382508f5","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"99752b10-aa89-4f4b-a1f2-7a2b96de6270","type":"VBar"},{"attributes":{},"id":"319076f3-c56c-4606-b19e-7f8bdf2ea0dc","type":"CategoricalScale"},{"attributes":{"source":{"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"}},"id":"12aa3bb7-68f4-4a3c-8b78-3a7612bea20c","type":"CDSView"},{"attributes":{"source":{"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"}},"id":"40eac436-92cf-457d-be4e-a4229d204938","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"342cbe73-96ee-430f-9932-233f1e31ab27","type":"GlyphRenderer"}]},"id":"3ebf65a4-aa56-4975-8c1f-cfd49a426f12","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"75214e92-6d69-4821-83fe-abbb3d1117ad","type":"Stack"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"42675dd6-19ab-40c5-b372-838b4843e1b6","type":"GlyphRenderer"}]},"id":"10ff948f-541a-42d5-b06f-f295ab63357e","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"75214e92-6d69-4821-83fe-abbb3d1117ad","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"be49185a-9602-454f-bafd-db1484aabb8e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"83c365c2-3605-446a-b309-c644a6751e1b","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"be49185a-9602-454f-bafd-db1484aabb8e","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"04fc5707-7c4a-4b0f-90d8-fa818b9d3f6b","type":"Stack"},{"attributes":{"formatter":{"id":"9c007e11-715f-40f8-a708-ba2bbfeb9b97","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"8c73e58f-3fe6-4147-bf69-46b699c6a535","subtype":"Figure","type":"Plot"},"ticker":{"id":"34a6e909-f573-4fcf-b5d2-549c0abec100","type":"CategoricalTicker"}},"id":"cc9491ed-8bf3-4574-a929-386f608f942d","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"},"glyph":{"id":"99752b10-aa89-4f4b-a1f2-7a2b96de6270","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae479b30-6f9d-4ae6-8b9d-3ed65f6ac208","type":"VBar"},"selection_glyph":null,"view":{"id":"12aa3bb7-68f4-4a3c-8b78-3a7612bea20c","type":"CDSView"}},"id":"42675dd6-19ab-40c5-b372-838b4843e1b6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"dcbb3834-2190-4569-bb3f-fbbbfae007f4","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"4f50213b-119e-4006-b104-b4efab1dca0e","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"04fc5707-7c4a-4b0f-90d8-fa818b9d3f6b","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"e28fe953-b95d-4ba4-bdf8-287b6737ab6e","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"4f50213b-119e-4006-b104-b4efab1dca0e","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"04fc5707-7c4a-4b0f-90d8-fa818b9d3f6b","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"26438a20-67ac-4a97-9670-132fa212a7af","type":"VBar"},{"attributes":{},"id":"34a6e909-f573-4fcf-b5d2-549c0abec100","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"5da02c19-2882-475b-89d4-539ca63738cf","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"ccffb014-5d45-4a4a-bd8c-1532382508f5","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ae479b30-6f9d-4ae6-8b9d-3ed65f6ac208","type":"VBar"},{"attributes":{},"id":"b239f3f9-b0ef-4556-b31c-690b49d29181","type":"BasicTickFormatter"}],"root_ids":["8c73e58f-3fe6-4147-bf69-46b699c6a535"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"0b776e05-c66e-4ee4-854e-51704d721307","elementid":"b52311dc-a2d2-467b-bc8b-e270f53b1da4","modelid":"8c73e58f-3fe6-4147-bf69-46b699c6a535"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
