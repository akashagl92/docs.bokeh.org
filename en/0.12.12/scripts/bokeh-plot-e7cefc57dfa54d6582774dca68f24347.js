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
      };var element = document.getElementById("dae48d3f-7817-43a9-9047-2234a9a382c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dae48d3f-7817-43a9-9047-2234a9a382c3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"08184562-fc26-473a-b602-421fdd483e43":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"45f4b110-c835-444f-b1fa-18f1e5ea53d5","type":"VBar"},{"attributes":{},"id":"2cbee756-18aa-4878-8142-2f1e65a459fa","type":"LinearScale"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"d6106b26-2a5e-40b8-822a-236e01d4b403","type":"FactorRange"},{"attributes":{"callback":null,"start":0},"id":"65a17527-65a6-462d-a0a6-8d3811b20d2a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d9c8341f-3578-46a2-a700-528e26ee7624","type":"Toolbar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"3b7b34f9-9674-46bb-bae6-1b75759b1d56","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"5d47241d-7bb5-4346-bfff-ec3c808373ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"da90ced5-822d-4c2e-b644-d63f9f056609","type":"BasicTicker"}},"id":"f4bf6430-e10c-46aa-8ff3-028abb4498f7","type":"Grid"},{"attributes":{},"id":"58ea5062-2399-4b9c-aa0a-afc468805f8e","type":"CategoricalTicker"},{"attributes":{},"id":"da90ced5-822d-4c2e-b644-d63f9f056609","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"335f44e1-605f-438f-9ad0-d95274334d17","type":"VBar"},{"attributes":{"formatter":{"id":"4313e820-a41d-47cc-a9fc-f95d86f1aa30","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"5d47241d-7bb5-4346-bfff-ec3c808373ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"58ea5062-2399-4b9c-aa0a-afc468805f8e","type":"CategoricalTicker"}},"id":"1dd98df6-d10c-401c-86a5-33658584c2ee","type":"CategoricalAxis"},{"attributes":{},"id":"5dbd5bdf-9624-4f1f-b25e-8262bdf40ab1","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"53397843-25fb-4eee-8214-e065bfe89ea0","type":"ColumnDataSource"},"glyph":{"id":"335f44e1-605f-438f-9ad0-d95274334d17","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45f4b110-c835-444f-b1fa-18f1e5ea53d5","type":"VBar"},"selection_glyph":null,"view":{"id":"b153e5f6-c5ec-4fbe-b92a-30b4357e6a4b","type":"CDSView"}},"id":"61b237c8-fe7f-4de6-8601-cd01545d9fc3","type":"GlyphRenderer"},{"attributes":{"source":{"id":"53397843-25fb-4eee-8214-e065bfe89ea0","type":"ColumnDataSource"}},"id":"b153e5f6-c5ec-4fbe-b92a-30b4357e6a4b","type":"CDSView"},{"attributes":{},"id":"4313e820-a41d-47cc-a9fc-f95d86f1aa30","type":"CategoricalTickFormatter"},{"attributes":{},"id":"bf7179bf-36b6-494a-9573-0851b9bd0cee","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"53397843-25fb-4eee-8214-e065bfe89ea0","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5d47241d-7bb5-4346-bfff-ec3c808373ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"58ea5062-2399-4b9c-aa0a-afc468805f8e","type":"CategoricalTicker"}},"id":"b567108b-9121-4442-a3d3-d63eb4ca28f9","type":"Grid"},{"attributes":{"formatter":{"id":"5dbd5bdf-9624-4f1f-b25e-8262bdf40ab1","type":"BasicTickFormatter"},"plot":{"id":"5d47241d-7bb5-4346-bfff-ec3c808373ae","subtype":"Figure","type":"Plot"},"ticker":{"id":"da90ced5-822d-4c2e-b644-d63f9f056609","type":"BasicTicker"}},"id":"9408a259-29de-4797-9f69-477d59cfbd1e","type":"LinearAxis"},{"attributes":{"below":[{"id":"1dd98df6-d10c-401c-86a5-33658584c2ee","type":"CategoricalAxis"}],"left":[{"id":"9408a259-29de-4797-9f69-477d59cfbd1e","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1dd98df6-d10c-401c-86a5-33658584c2ee","type":"CategoricalAxis"},{"id":"b567108b-9121-4442-a3d3-d63eb4ca28f9","type":"Grid"},{"id":"9408a259-29de-4797-9f69-477d59cfbd1e","type":"LinearAxis"},{"id":"f4bf6430-e10c-46aa-8ff3-028abb4498f7","type":"Grid"},{"id":"61b237c8-fe7f-4de6-8601-cd01545d9fc3","type":"GlyphRenderer"}],"title":{"id":"3b7b34f9-9674-46bb-bae6-1b75759b1d56","type":"Title"},"toolbar":{"id":"d9c8341f-3578-46a2-a700-528e26ee7624","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d6106b26-2a5e-40b8-822a-236e01d4b403","type":"FactorRange"},"x_scale":{"id":"bf7179bf-36b6-494a-9573-0851b9bd0cee","type":"CategoricalScale"},"y_range":{"id":"65a17527-65a6-462d-a0a6-8d3811b20d2a","type":"DataRange1d"},"y_scale":{"id":"2cbee756-18aa-4878-8142-2f1e65a459fa","type":"LinearScale"}},"id":"5d47241d-7bb5-4346-bfff-ec3c808373ae","subtype":"Figure","type":"Plot"}],"root_ids":["5d47241d-7bb5-4346-bfff-ec3c808373ae"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"08184562-fc26-473a-b602-421fdd483e43","elementid":"dae48d3f-7817-43a9-9047-2234a9a382c3","modelid":"5d47241d-7bb5-4346-bfff-ec3c808373ae"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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