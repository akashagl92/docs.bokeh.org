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
      };var element = document.getElementById("30086dd5-d4e1-4dbd-a262-3196c3d62483");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30086dd5-d4e1-4dbd-a262-3196c3d62483' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d349485e-f1ac-433c-b913-edd51e04fb74":{"roots":{"references":[{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"0cc6ca3b-4b87-4b23-96ef-72baeb5d55d2","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"d8212ad3-fa73-40a7-8571-a63609e71ade","type":"VBar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"956adf61-92ad-455c-b654-f766901b4c4d","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"23bc20f3-f623-40e3-b763-9922233e5dfa","type":"Toolbar"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"e31d8606-932c-4537-a397-26a07c165744","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"4058dfe8-f18e-4f4d-81cd-80451a41b53e","type":"VBar"},{"attributes":{"formatter":{"id":"b977b958-3cbf-4987-ad6c-f7d3137ebf79","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"b225024f-e617-4a5a-8cdc-b1b1fa2dd590","subtype":"Figure","type":"Plot"},"ticker":{"id":"04a6cd54-7126-46eb-b505-b3325acb015d","type":"CategoricalTicker"}},"id":"f9ad8629-7fc2-4346-9d0f-e594d50bf03a","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"45396cd8-1655-4d5d-b0a9-34d5c2b6188b","type":"ColumnDataSource"},"glyph":{"id":"4058dfe8-f18e-4f4d-81cd-80451a41b53e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d8212ad3-fa73-40a7-8571-a63609e71ade","type":"VBar"},"selection_glyph":null,"view":{"id":"506efe62-6b52-4e25-a228-127d08cd4ff6","type":"CDSView"}},"id":"665e480a-193a-4887-947f-323720f7e5af","type":"GlyphRenderer"},{"attributes":{},"id":"beed1c13-7c4e-4194-b47b-d24d350f4597","type":"BasicTicker"},{"attributes":{"source":{"id":"45396cd8-1655-4d5d-b0a9-34d5c2b6188b","type":"ColumnDataSource"}},"id":"506efe62-6b52-4e25-a228-127d08cd4ff6","type":"CDSView"},{"attributes":{"below":[{"id":"f9ad8629-7fc2-4346-9d0f-e594d50bf03a","type":"CategoricalAxis"}],"left":[{"id":"61f06f15-5846-4349-9d6c-ca16d050e1f0","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"f9ad8629-7fc2-4346-9d0f-e594d50bf03a","type":"CategoricalAxis"},{"id":"f076ec11-cd8c-428e-a249-1dba7a2fe776","type":"Grid"},{"id":"61f06f15-5846-4349-9d6c-ca16d050e1f0","type":"LinearAxis"},{"id":"8e7f627f-621d-4d0e-9ec0-015984016751","type":"Grid"},{"id":"665e480a-193a-4887-947f-323720f7e5af","type":"GlyphRenderer"}],"title":{"id":"0cc6ca3b-4b87-4b23-96ef-72baeb5d55d2","type":"Title"},"toolbar":{"id":"23bc20f3-f623-40e3-b763-9922233e5dfa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"956adf61-92ad-455c-b654-f766901b4c4d","type":"FactorRange"},"x_scale":{"id":"5e5ab9f7-60c8-472d-8ddb-9dfe0d4607d3","type":"CategoricalScale"},"y_range":{"id":"a52ed06c-6d8f-4de4-958a-7a8c97b7dce2","type":"DataRange1d"},"y_scale":{"id":"287c48a7-e028-4c0c-9649-b8f90b013be9","type":"LinearScale"}},"id":"b225024f-e617-4a5a-8cdc-b1b1fa2dd590","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"b225024f-e617-4a5a-8cdc-b1b1fa2dd590","subtype":"Figure","type":"Plot"},"ticker":{"id":"04a6cd54-7126-46eb-b505-b3325acb015d","type":"CategoricalTicker"}},"id":"f076ec11-cd8c-428e-a249-1dba7a2fe776","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"b225024f-e617-4a5a-8cdc-b1b1fa2dd590","subtype":"Figure","type":"Plot"},"ticker":{"id":"beed1c13-7c4e-4194-b47b-d24d350f4597","type":"BasicTicker"}},"id":"8e7f627f-621d-4d0e-9ec0-015984016751","type":"Grid"},{"attributes":{"formatter":{"id":"8a2f5db3-13cf-4f14-a64c-92e8f230f782","type":"BasicTickFormatter"},"plot":{"id":"b225024f-e617-4a5a-8cdc-b1b1fa2dd590","subtype":"Figure","type":"Plot"},"ticker":{"id":"beed1c13-7c4e-4194-b47b-d24d350f4597","type":"BasicTicker"}},"id":"61f06f15-5846-4349-9d6c-ca16d050e1f0","type":"LinearAxis"},{"attributes":{},"id":"287c48a7-e028-4c0c-9649-b8f90b013be9","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"45396cd8-1655-4d5d-b0a9-34d5c2b6188b","type":"ColumnDataSource"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"e31d8606-932c-4537-a397-26a07c165744","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"start":0},"id":"a52ed06c-6d8f-4de4-958a-7a8c97b7dce2","type":"DataRange1d"},{"attributes":{},"id":"8a2f5db3-13cf-4f14-a64c-92e8f230f782","type":"BasicTickFormatter"},{"attributes":{},"id":"b977b958-3cbf-4987-ad6c-f7d3137ebf79","type":"CategoricalTickFormatter"},{"attributes":{},"id":"04a6cd54-7126-46eb-b505-b3325acb015d","type":"CategoricalTicker"},{"attributes":{},"id":"5e5ab9f7-60c8-472d-8ddb-9dfe0d4607d3","type":"CategoricalScale"}],"root_ids":["b225024f-e617-4a5a-8cdc-b1b1fa2dd590"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"d349485e-f1ac-433c-b913-edd51e04fb74","elementid":"30086dd5-d4e1-4dbd-a262-3196c3d62483","modelid":"b225024f-e617-4a5a-8cdc-b1b1fa2dd590"}];
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