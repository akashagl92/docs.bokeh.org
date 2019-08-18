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
      };var element = document.getElementById("2e1217ba-77dc-4ec8-a362-250f765af659");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2e1217ba-77dc-4ec8-a362-250f765af659' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"56478bc1-fa60-4a72-b276-06df452edae1":{"roots":{"references":[{"attributes":{"fields":["2015","2016"]},"id":"abe48989-5dba-4e32-b2b3-32046f2d4cce","type":"Stack"},{"attributes":{"formatter":{"id":"bbcfbd5a-0251-4009-8f55-2ba7e7efb1e8","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2a4c1aba-9d34-4fff-a335-f153dfea488e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b157a95-46f1-4598-84c7-63e86584fa4b","type":"CategoricalTicker"}},"id":"ed9139b0-a06d-4e79-bd71-3846a51930ee","type":"CategoricalAxis"},{"attributes":{"items":[{"id":"cee01e82-3da2-4561-b0a6-93372b2f1185","type":"LegendItem"},{"id":"b5055664-7320-4926-b0bb-a7fd96ca3411","type":"LegendItem"},{"id":"52954911-4ead-4cc1-9437-7d81c94066e3","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"2a4c1aba-9d34-4fff-a335-f153dfea488e","subtype":"Figure","type":"Plot"}},"id":"58a7a950-0ea5-494d-a24d-2149990ba02a","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"8db5c8f3-e2d2-4018-9905-07be29649140","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"d1307808-31d2-4667-a6ee-c5bf547eba7e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"9dd139fe-079e-4253-94c5-43a9b6d1b8c4","type":"VBar"},{"attributes":{"source":{"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"}},"id":"1b0da5c4-c5a9-4fc1-83ba-de5dabf42914","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"8db5c8f3-e2d2-4018-9905-07be29649140","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"d1307808-31d2-4667-a6ee-c5bf547eba7e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0eb2f2b8-ce45-4313-b4e2-be7fdef921e6","type":"VBar"},{"attributes":{"fields":["2015"]},"id":"8db5c8f3-e2d2-4018-9905-07be29649140","type":"Stack"},{"attributes":{"data_source":{"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"},"glyph":{"id":"889e6133-e4c8-41a4-84ee-4182c97562bf","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3791e639-516c-4e8d-8b31-efb4eec08061","type":"VBar"},"selection_glyph":null,"view":{"id":"8a3e5194-2771-4d84-9ee5-1e6250a76134","type":"CDSView"}},"id":"93bf08b2-dafb-43ff-9113-60f1bdb844a9","type":"GlyphRenderer"},{"attributes":{},"id":"9b157a95-46f1-4598-84c7-63e86584fa4b","type":"CategoricalTicker"},{"attributes":{},"id":"bbcfbd5a-0251-4009-8f55-2ba7e7efb1e8","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"abe48989-5dba-4e32-b2b3-32046f2d4cce","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"0407735e-78ff-47a1-be97-7f0a7c98f968","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"412d87e7-a3df-4dba-a39a-39c9c85ba3ab","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"16a72a1b-31ea-4171-bbec-aa81c6cbff2d","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"667163c2-e527-45f9-bc38-0be8b523a07d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3791e639-516c-4e8d-8b31-efb4eec08061","type":"VBar"},{"attributes":{"source":{"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"}},"id":"863e876e-efa8-4e2f-b023-aa3811c154ce","type":"CDSView"},{"attributes":{"fields":[]},"id":"16a72a1b-31ea-4171-bbec-aa81c6cbff2d","type":"Stack"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"93bf08b2-dafb-43ff-9113-60f1bdb844a9","type":"GlyphRenderer"}]},"id":"cee01e82-3da2-4561-b0a6-93372b2f1185","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"},"glyph":{"id":"412d87e7-a3df-4dba-a39a-39c9c85ba3ab","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9790664a-28bb-4c80-839a-e0454eb74661","type":"VBar"},"selection_glyph":null,"view":{"id":"863e876e-efa8-4e2f-b023-aa3811c154ce","type":"CDSView"}},"id":"39f32523-7be4-4a02-af4f-b8975e589733","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6ac3cdac-051d-482c-9be8-869810000527","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2a4c1aba-9d34-4fff-a335-f153dfea488e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a44d02b-7fbd-4144-a093-b4475653c2b2","type":"BasicTicker"}},"id":"a4b7d1b0-c9b4-49f0-a6b3-d6bfa928be8d","type":"LinearAxis"},{"attributes":{"fields":["2015","2016","2017"]},"id":"0407735e-78ff-47a1-be97-7f0a7c98f968","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"d1307808-31d2-4667-a6ee-c5bf547eba7e","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"10acd2d9-2399-43bf-8ffb-269609013350","type":"Title"},{"attributes":{},"id":"6ac3cdac-051d-482c-9be8-869810000527","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"6c55e2a6-befd-4b77-9d2a-a43f8beb04fc","type":"GlyphRenderer"}]},"id":"b5055664-7320-4926-b0bb-a7fd96ca3411","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"667163c2-e527-45f9-bc38-0be8b523a07d","type":"Stack"},{"attributes":{"source":{"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"}},"id":"8a3e5194-2771-4d84-9ee5-1e6250a76134","type":"CDSView"},{"attributes":{"below":[{"id":"ed9139b0-a06d-4e79-bd71-3846a51930ee","type":"CategoricalAxis"}],"left":[{"id":"a4b7d1b0-c9b4-49f0-a6b3-d6bfa928be8d","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"ed9139b0-a06d-4e79-bd71-3846a51930ee","type":"CategoricalAxis"},{"id":"e271c238-451a-410e-b7ca-80b33cff56e4","type":"Grid"},{"id":"a4b7d1b0-c9b4-49f0-a6b3-d6bfa928be8d","type":"LinearAxis"},{"id":"be882092-cba2-4fde-96ea-300c9624dda7","type":"Grid"},{"id":"58a7a950-0ea5-494d-a24d-2149990ba02a","type":"Legend"},{"id":"93bf08b2-dafb-43ff-9113-60f1bdb844a9","type":"GlyphRenderer"},{"id":"6c55e2a6-befd-4b77-9d2a-a43f8beb04fc","type":"GlyphRenderer"},{"id":"39f32523-7be4-4a02-af4f-b8975e589733","type":"GlyphRenderer"}],"title":{"id":"10acd2d9-2399-43bf-8ffb-269609013350","type":"Title"},"toolbar":{"id":"55743431-553d-4f27-85c1-b9a386bbdce3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b709f0ae-0b39-419d-8f29-10ba73b1a2dd","type":"FactorRange"},"x_scale":{"id":"8b0152a5-46b0-43fd-b2ed-9b35ab24c67e","type":"CategoricalScale"},"y_range":{"id":"8755d5d2-bb62-443b-b0cd-2452748a9f7d","type":"DataRange1d"},"y_scale":{"id":"d704abfc-b635-49be-99f6-b76712cf87ff","type":"LinearScale"}},"id":"2a4c1aba-9d34-4fff-a335-f153dfea488e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"8755d5d2-bb62-443b-b0cd-2452748a9f7d","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"16a72a1b-31ea-4171-bbec-aa81c6cbff2d","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"667163c2-e527-45f9-bc38-0be8b523a07d","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"889e6133-e4c8-41a4-84ee-4182c97562bf","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"b709f0ae-0b39-419d-8f29-10ba73b1a2dd","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"55743431-553d-4f27-85c1-b9a386bbdce3","type":"Toolbar"},{"attributes":{},"id":"d704abfc-b635-49be-99f6-b76712cf87ff","type":"LinearScale"},{"attributes":{},"id":"6a44d02b-7fbd-4144-a093-b4475653c2b2","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2a4c1aba-9d34-4fff-a335-f153dfea488e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a44d02b-7fbd-4144-a093-b4475653c2b2","type":"BasicTicker"}},"id":"be882092-cba2-4fde-96ea-300c9624dda7","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"39f32523-7be4-4a02-af4f-b8975e589733","type":"GlyphRenderer"}]},"id":"52954911-4ead-4cc1-9437-7d81c94066e3","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"abe48989-5dba-4e32-b2b3-32046f2d4cce","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"0407735e-78ff-47a1-be97-7f0a7c98f968","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"9790664a-28bb-4c80-839a-e0454eb74661","type":"VBar"},{"attributes":{},"id":"8b0152a5-46b0-43fd-b2ed-9b35ab24c67e","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2a4c1aba-9d34-4fff-a335-f153dfea488e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b157a95-46f1-4598-84c7-63e86584fa4b","type":"CategoricalTicker"}},"id":"e271c238-451a-410e-b7ca-80b33cff56e4","type":"Grid"},{"attributes":{"data_source":{"id":"5373d6b4-6da2-40ac-bba6-a76ff79a84db","type":"ColumnDataSource"},"glyph":{"id":"9dd139fe-079e-4253-94c5-43a9b6d1b8c4","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0eb2f2b8-ce45-4313-b4e2-be7fdef921e6","type":"VBar"},"selection_glyph":null,"view":{"id":"1b0da5c4-c5a9-4fc1-83ba-de5dabf42914","type":"CDSView"}},"id":"6c55e2a6-befd-4b77-9d2a-a43f8beb04fc","type":"GlyphRenderer"}],"root_ids":["2a4c1aba-9d34-4fff-a335-f153dfea488e"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"56478bc1-fa60-4a72-b276-06df452edae1","elementid":"2e1217ba-77dc-4ec8-a362-250f765af659","modelid":"2a4c1aba-9d34-4fff-a335-f153dfea488e"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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