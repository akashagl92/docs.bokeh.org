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
      };var element = document.getElementById("89651007-a9d6-4710-9b19-7e8bb2a6b86d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '89651007-a9d6-4710-9b19-7e8bb2a6b86d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7711e982-a60e-4861-b905-b8e399f669ba":{"roots":{"references":[{"attributes":{},"id":"679ff572-59ba-4fe4-ae4b-f557502605b9","type":"Selection"},{"attributes":{},"id":"68a576d4-53af-4323-a8cd-2a3e22fdb28b","type":"LinearScale"},{"attributes":{},"id":"b829c114-b1c2-45e7-a851-9e6e71cfbf3c","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"a223cf9e-0c35-4193-bb69-adea5551435c","type":"CategoricalAxis"}],"left":[{"id":"545d8d16-a1d7-4351-8105-9ac66430c31b","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"a223cf9e-0c35-4193-bb69-adea5551435c","type":"CategoricalAxis"},{"id":"d59ed40d-c88e-4b39-8a8f-e01428ffb3ca","type":"Grid"},{"id":"545d8d16-a1d7-4351-8105-9ac66430c31b","type":"LinearAxis"},{"id":"81751853-fc05-403c-9676-54f876978fe4","type":"Grid"},{"id":"70c7b8a6-a3e7-4ec6-b3e7-b5b4ef2a69f0","type":"GlyphRenderer"},{"id":"0f8d212a-0214-4c66-909b-9238b62542d8","type":"GlyphRenderer"}],"title":{"id":"8b2c78bf-d9b9-4b16-a66e-386cdc5f0560","type":"Title"},"toolbar":{"id":"8b4bd6b3-2e97-487a-acfb-61ac1004663e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b9b76583-18bc-4a7a-95cc-b831be749b52","type":"FactorRange"},"x_scale":{"id":"5b21bed4-e1da-4a79-9429-d7c3d82736f0","type":"CategoricalScale"},"y_range":{"id":"739aca38-cecf-4122-a857-988100a53bd4","type":"DataRange1d"},"y_scale":{"id":"68a576d4-53af-4323-a8cd-2a3e22fdb28b","type":"LinearScale"}},"id":"d26e7419-c07e-41c2-af47-3121e6202866","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"8b4bd6b3-2e97-487a-acfb-61ac1004663e","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6ad1287d-b1b6-47a1-b4cf-ee0d338d668e","type":"Line"},{"attributes":{},"id":"e517a5fb-d021-4924-9fa4-bc3dc91e59e2","type":"UnionRenderers"},{"attributes":{},"id":"34f6cdab-2744-40f7-9804-e8c4413bcf83","type":"Selection"},{"attributes":{},"id":"4f1b7fcd-e431-4049-b6e1-1c6bb236b74b","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"92841508-a3c5-4284-9a77-058302de68ee","type":"ColumnDataSource"},"glyph":{"id":"194079f3-c2dc-40ca-818d-c1ff5169be59","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e7eea5bb-052c-4c5a-aa83-650b0b1d285f","type":"VBar"},"selection_glyph":null,"view":{"id":"41ae819d-4e94-4e3f-9fe5-bc11a9885b4a","type":"CDSView"}},"id":"70c7b8a6-a3e7-4ec6-b3e7-b5b4ef2a69f0","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"34f6cdab-2744-40f7-9804-e8c4413bcf83","type":"Selection"},"selection_policy":{"id":"4f1b7fcd-e431-4049-b6e1-1c6bb236b74b","type":"UnionRenderers"}},"id":"c9817221-85c0-4f13-9223-1e8899066ad9","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c9817221-85c0-4f13-9223-1e8899066ad9","type":"ColumnDataSource"}},"id":"dc39a793-b942-4fe3-bec9-4f3122e4f01f","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"8b2c78bf-d9b9-4b16-a66e-386cdc5f0560","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"739aca38-cecf-4122-a857-988100a53bd4","type":"DataRange1d"},{"attributes":{},"id":"21eebceb-9601-4db5-9928-a092a082a75f","type":"BasicTicker"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"0db441aa-0036-4b07-8813-e998fc37c124","type":"Line"},{"attributes":{"source":{"id":"92841508-a3c5-4284-9a77-058302de68ee","type":"ColumnDataSource"}},"id":"41ae819d-4e94-4e3f-9fe5-bc11a9885b4a","type":"CDSView"},{"attributes":{},"id":"934defbe-73ef-49b6-8d6c-d7c501845fd5","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"d26e7419-c07e-41c2-af47-3121e6202866","subtype":"Figure","type":"Plot"},"ticker":{"id":"21eebceb-9601-4db5-9928-a092a082a75f","type":"BasicTicker"}},"id":"81751853-fc05-403c-9676-54f876978fe4","type":"Grid"},{"attributes":{"formatter":{"id":"4f0f1c74-3d1d-4d0e-ad74-8a6f36cd2fd6","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"d26e7419-c07e-41c2-af47-3121e6202866","subtype":"Figure","type":"Plot"},"ticker":{"id":"b829c114-b1c2-45e7-a851-9e6e71cfbf3c","type":"CategoricalTicker"}},"id":"a223cf9e-0c35-4193-bb69-adea5551435c","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"194079f3-c2dc-40ca-818d-c1ff5169be59","type":"VBar"},{"attributes":{},"id":"4f0f1c74-3d1d-4d0e-ad74-8a6f36cd2fd6","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"d26e7419-c07e-41c2-af47-3121e6202866","subtype":"Figure","type":"Plot"},"ticker":{"id":"b829c114-b1c2-45e7-a851-9e6e71cfbf3c","type":"CategoricalTicker"}},"id":"d59ed40d-c88e-4b39-8a8f-e01428ffb3ca","type":"Grid"},{"attributes":{"formatter":{"id":"934defbe-73ef-49b6-8d6c-d7c501845fd5","type":"BasicTickFormatter"},"plot":{"id":"d26e7419-c07e-41c2-af47-3121e6202866","subtype":"Figure","type":"Plot"},"ticker":{"id":"21eebceb-9601-4db5-9928-a092a082a75f","type":"BasicTicker"}},"id":"545d8d16-a1d7-4351-8105-9ac66430c31b","type":"LinearAxis"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"b9b76583-18bc-4a7a-95cc-b831be749b52","type":"FactorRange"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"679ff572-59ba-4fe4-ae4b-f557502605b9","type":"Selection"},"selection_policy":{"id":"e517a5fb-d021-4924-9fa4-bc3dc91e59e2","type":"UnionRenderers"}},"id":"92841508-a3c5-4284-9a77-058302de68ee","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c9817221-85c0-4f13-9223-1e8899066ad9","type":"ColumnDataSource"},"glyph":{"id":"0db441aa-0036-4b07-8813-e998fc37c124","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6ad1287d-b1b6-47a1-b4cf-ee0d338d668e","type":"Line"},"selection_glyph":null,"view":{"id":"dc39a793-b942-4fe3-bec9-4f3122e4f01f","type":"CDSView"}},"id":"0f8d212a-0214-4c66-909b-9238b62542d8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"e7eea5bb-052c-4c5a-aa83-650b0b1d285f","type":"VBar"},{"attributes":{},"id":"5b21bed4-e1da-4a79-9429-d7c3d82736f0","type":"CategoricalScale"}],"root_ids":["d26e7419-c07e-41c2-af47-3121e6202866"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7711e982-a60e-4861-b905-b8e399f669ba","roots":{"d26e7419-c07e-41c2-af47-3121e6202866":"89651007-a9d6-4710-9b19-7e8bb2a6b86d"}}];
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