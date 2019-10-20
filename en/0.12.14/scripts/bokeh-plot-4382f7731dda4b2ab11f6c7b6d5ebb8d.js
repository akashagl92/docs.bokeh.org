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
      };var element = document.getElementById("d70b8d07-17ab-439c-8932-78e98c637542");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd70b8d07-17ab-439c-8932-78e98c637542' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f6a93e3-aa17-487b-99ca-029b4237589a":{"roots":{"references":[{"attributes":{"formatter":{"id":"d8aa6ff8-6a73-4299-9719-f31fc2d79744","type":"BasicTickFormatter"},"plot":{"id":"3d92e27d-2def-4175-9549-3b4241577ac2","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb63b540-0a76-4dac-b553-6b3cee366877","type":"BasicTicker"}},"id":"8aa56de5-4f23-4236-b53e-86f331571ac5","type":"LinearAxis"},{"attributes":{},"id":"53663952-d694-45ef-adef-4a6443f18763","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9},"id":"69326980-9f8f-4913-84d0-a335898ddc23","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"3d92e27d-2def-4175-9549-3b4241577ac2","subtype":"Figure","type":"Plot"},"ticker":{"id":"eb63b540-0a76-4dac-b553-6b3cee366877","type":"BasicTicker"}},"id":"7c205e68-cd6d-44ec-a534-b5fd11ae740f","type":"Grid"},{"attributes":{},"id":"dae24ccf-753c-4780-8ed4-3eb302129e40","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"0df4b951-71f8-4b17-af0f-f18a6294ac1b","type":"VBar"},{"attributes":{"formatter":{"id":"b05f72cb-523d-4945-98fc-58758d5099af","type":"CategoricalTickFormatter"},"plot":{"id":"3d92e27d-2def-4175-9549-3b4241577ac2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f996729-720d-4c7d-accd-fd3911ff056c","type":"CategoricalTicker"}},"id":"2c50ce76-5bfc-45de-8ce6-b5f86025497d","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"3d92e27d-2def-4175-9549-3b4241577ac2","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f996729-720d-4c7d-accd-fd3911ff056c","type":"CategoricalTicker"}},"id":"02fed31a-cb74-4714-8bfe-9a94665b054e","type":"Grid"},{"attributes":{},"id":"3f996729-720d-4c7d-accd-fd3911ff056c","type":"CategoricalTicker"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"faa2f28a-08bd-4aad-ad90-d1c4b9b4e814","type":"VBar"},{"attributes":{},"id":"eb63b540-0a76-4dac-b553-6b3cee366877","type":"BasicTicker"},{"attributes":{"items":[{"id":"1d78b5ca-3a19-48ea-956f-be4da4fde84e","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"3d92e27d-2def-4175-9549-3b4241577ac2","subtype":"Figure","type":"Plot"}},"id":"e22189f1-bfb1-4d83-babf-4ad9ff388240","type":"Legend"},{"attributes":{},"id":"b05f72cb-523d-4945-98fc-58758d5099af","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"d0cf7db8-e371-46b1-bdd3-0ad48f381aff","type":"ColumnDataSource"},"glyph":{"id":"faa2f28a-08bd-4aad-ad90-d1c4b9b4e814","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0df4b951-71f8-4b17-af0f-f18a6294ac1b","type":"VBar"},"selection_glyph":null,"view":{"id":"93399a6f-dc93-4179-8077-79200484fbd7","type":"CDSView"}},"id":"476f3305-d306-4c17-a89f-28effe95943d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d0cf7db8-e371-46b1-bdd3-0ad48f381aff","type":"ColumnDataSource"}},"id":"93399a6f-dc93-4179-8077-79200484fbd7","type":"CDSView"},{"attributes":{"callback":null,"column_names":["fruits","counts","color"],"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"d0cf7db8-e371-46b1-bdd3-0ad48f381aff","type":"ColumnDataSource"},{"attributes":{},"id":"d8aa6ff8-6a73-4299-9719-f31fc2d79744","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"2c50ce76-5bfc-45de-8ce6-b5f86025497d","type":"CategoricalAxis"}],"left":[{"id":"8aa56de5-4f23-4236-b53e-86f331571ac5","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"2c50ce76-5bfc-45de-8ce6-b5f86025497d","type":"CategoricalAxis"},{"id":"02fed31a-cb74-4714-8bfe-9a94665b054e","type":"Grid"},{"id":"8aa56de5-4f23-4236-b53e-86f331571ac5","type":"LinearAxis"},{"id":"7c205e68-cd6d-44ec-a534-b5fd11ae740f","type":"Grid"},{"id":"e22189f1-bfb1-4d83-babf-4ad9ff388240","type":"Legend"},{"id":"476f3305-d306-4c17-a89f-28effe95943d","type":"GlyphRenderer"}],"title":{"id":"a8793def-6ec5-4947-a5fc-492c6b49d996","type":"Title"},"toolbar":{"id":"d7461ae5-cf57-4fcf-8ad0-5e160d009207","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"60dcb06b-ce5a-4c88-9ec1-a09e4f2825d2","type":"FactorRange"},"x_scale":{"id":"53663952-d694-45ef-adef-4a6443f18763","type":"CategoricalScale"},"y_range":{"id":"69326980-9f8f-4913-84d0-a335898ddc23","type":"Range1d"},"y_scale":{"id":"dae24ccf-753c-4780-8ed4-3eb302129e40","type":"LinearScale"}},"id":"3d92e27d-2def-4175-9549-3b4241577ac2","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"476f3305-d306-4c17-a89f-28effe95943d","type":"GlyphRenderer"}]},"id":"1d78b5ca-3a19-48ea-956f-be4da4fde84e","type":"LegendItem"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"a8793def-6ec5-4947-a5fc-492c6b49d996","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"60dcb06b-ce5a-4c88-9ec1-a09e4f2825d2","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d7461ae5-cf57-4fcf-8ad0-5e160d009207","type":"Toolbar"}],"root_ids":["3d92e27d-2def-4175-9549-3b4241577ac2"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"1f6a93e3-aa17-487b-99ca-029b4237589a","elementid":"d70b8d07-17ab-439c-8932-78e98c637542","modelid":"3d92e27d-2def-4175-9549-3b4241577ac2"}];
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