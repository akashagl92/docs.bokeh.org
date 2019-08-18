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
      };var element = document.getElementById("ec6c5a93-6fb7-410a-a442-f2d9babcad55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ec6c5a93-6fb7-410a-a442-f2d9babcad55' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"de182ccc-a39e-42e4-ab80-64060f2261eb":{"roots":{"references":[{"attributes":{"data_source":{"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"},"glyph":{"id":"52a95124-2da4-432e-9325-8de7aefc984d","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa7da84b-8e56-4078-9d38-40e8f14d4775","type":"VBar"},"selection_glyph":null,"view":{"id":"cbd8543b-442e-4db4-9404-8992e7237058","type":"CDSView"}},"id":"9356bead-3371-4c2e-80e1-309a3b14432d","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"f36c29d1-0305-43fc-8f66-fdd638cd5231","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"14e72a14-4a34-4d5c-94f1-8fd9845c4dce","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"d0d8e175-25af-412f-aca3-a0b387b53efa","type":"Stack"},{"attributes":{"source":{"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"}},"id":"151913bc-7809-4326-b1d6-3ac7288731b6","type":"CDSView"},{"attributes":{},"id":"43440678-b1d4-4fcd-a9b9-2cedba789ac4","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"cfb56f1f-45fd-47a9-90ae-6c34db1594b7","type":"Toolbar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"179d8f99-02e0-48b2-a1f6-c3f5a51630e6","type":"GlyphRenderer"}]},"id":"d28a4293-cffc-48a9-83fb-2dbb5e6f6b09","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"5eb66f1e-be6e-42b4-82fd-4cd6280eb45a","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"5e879246-b109-4337-bc25-bb276f88ec1e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"086d9253-053a-4995-bb56-bc4e47cac3ae","type":"VBar"},{"attributes":{"formatter":{"id":"01efb8f6-6023-4dd3-afb5-0a61165d1b79","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"9530329a-ef11-441c-92ca-cd01474136d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6714890-64a2-4dcb-9482-19fabd6a6df3","type":"CategoricalTicker"}},"id":"1426766a-fff0-47d8-8c1c-627d6f1f4792","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"9530329a-ef11-441c-92ca-cd01474136d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a143b9ee-84a2-4ad9-9bb5-cde06f20d467","type":"BasicTicker"}},"id":"d7ce6cad-bb7f-45eb-824a-47f0c6080a9b","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"071517eb-bc62-4c00-bb6c-df9b476b82b4","type":"DataRange1d"},{"attributes":{"items":[{"id":"75242ca8-9106-4afb-bf1c-849ade36a7c4","type":"LegendItem"},{"id":"6078d554-8320-4cff-8b93-165d2c802b3a","type":"LegendItem"},{"id":"d28a4293-cffc-48a9-83fb-2dbb5e6f6b09","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"9530329a-ef11-441c-92ca-cd01474136d2","subtype":"Figure","type":"Plot"}},"id":"06a0c92f-0e90-4b1e-ac94-0a84ba48353b","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"5eb66f1e-be6e-42b4-82fd-4cd6280eb45a","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"5e879246-b109-4337-bc25-bb276f88ec1e","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"ca05eef1-029c-4d1a-a682-3941e5ac5f06","type":"VBar"},{"attributes":{},"id":"a143b9ee-84a2-4ad9-9bb5-cde06f20d467","type":"BasicTicker"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"9356bead-3371-4c2e-80e1-309a3b14432d","type":"GlyphRenderer"}]},"id":"75242ca8-9106-4afb-bf1c-849ade36a7c4","type":"LegendItem"},{"attributes":{"source":{"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"}},"id":"cbd8543b-442e-4db4-9404-8992e7237058","type":"CDSView"},{"attributes":{"fields":["2015","2016","2017"]},"id":"5e879246-b109-4337-bc25-bb276f88ec1e","type":"Stack"},{"attributes":{"formatter":{"id":"43440678-b1d4-4fcd-a9b9-2cedba789ac4","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"9530329a-ef11-441c-92ca-cd01474136d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a143b9ee-84a2-4ad9-9bb5-cde06f20d467","type":"BasicTicker"}},"id":"1bcba684-eedc-4681-a93e-8cc5be5b0410","type":"LinearAxis"},{"attributes":{"source":{"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"}},"id":"a9556c5d-6b75-43bb-9876-11bde0c5e336","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"9530329a-ef11-441c-92ca-cd01474136d2","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6714890-64a2-4dcb-9482-19fabd6a6df3","type":"CategoricalTicker"}},"id":"fc262ea9-4013-4129-a322-b2c7cd82bb03","type":"Grid"},{"attributes":{"fields":[]},"id":"d1756d0c-8809-4cdf-a0ec-90dbb9a94f45","type":"Stack"},{"attributes":{},"id":"99ba6c38-caa3-4437-b78b-1b94352dfed5","type":"LinearScale"},{"attributes":{},"id":"01efb8f6-6023-4dd3-afb5-0a61165d1b79","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"5eb66f1e-be6e-42b4-82fd-4cd6280eb45a","type":"Stack"},{"attributes":{"data_source":{"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"},"glyph":{"id":"03b68b72-80af-422d-b740-867be3c318e3","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3eae1c16-4889-4b11-adc3-4f93125a3fe8","type":"VBar"},"selection_glyph":null,"view":{"id":"a9556c5d-6b75-43bb-9876-11bde0c5e336","type":"CDSView"}},"id":"e0c5f428-ab5e-4655-9b67-1f217ce228fd","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"f8b1b5d7-66e3-4312-8e31-569b031d6e42","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"85129641-759d-4475-bbfd-b6a9f606b03a","type":"FactorRange"},{"attributes":{"below":[{"id":"1426766a-fff0-47d8-8c1c-627d6f1f4792","type":"CategoricalAxis"}],"left":[{"id":"1bcba684-eedc-4681-a93e-8cc5be5b0410","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"1426766a-fff0-47d8-8c1c-627d6f1f4792","type":"CategoricalAxis"},{"id":"fc262ea9-4013-4129-a322-b2c7cd82bb03","type":"Grid"},{"id":"1bcba684-eedc-4681-a93e-8cc5be5b0410","type":"LinearAxis"},{"id":"d7ce6cad-bb7f-45eb-824a-47f0c6080a9b","type":"Grid"},{"id":"06a0c92f-0e90-4b1e-ac94-0a84ba48353b","type":"Legend"},{"id":"9356bead-3371-4c2e-80e1-309a3b14432d","type":"GlyphRenderer"},{"id":"e0c5f428-ab5e-4655-9b67-1f217ce228fd","type":"GlyphRenderer"},{"id":"179d8f99-02e0-48b2-a1f6-c3f5a51630e6","type":"GlyphRenderer"}],"title":{"id":"f8b1b5d7-66e3-4312-8e31-569b031d6e42","type":"Title"},"toolbar":{"id":"cfb56f1f-45fd-47a9-90ae-6c34db1594b7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"85129641-759d-4475-bbfd-b6a9f606b03a","type":"FactorRange"},"x_scale":{"id":"e661c5b7-9e3e-4b3e-8cca-b9652771f25f","type":"CategoricalScale"},"y_range":{"id":"071517eb-bc62-4c00-bb6c-df9b476b82b4","type":"DataRange1d"},"y_scale":{"id":"99ba6c38-caa3-4437-b78b-1b94352dfed5","type":"LinearScale"}},"id":"9530329a-ef11-441c-92ca-cd01474136d2","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"d0d8e175-25af-412f-aca3-a0b387b53efa","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"14e72a14-4a34-4d5c-94f1-8fd9845c4dce","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"3eae1c16-4889-4b11-adc3-4f93125a3fe8","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"d1756d0c-8809-4cdf-a0ec-90dbb9a94f45","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"f36c29d1-0305-43fc-8f66-fdd638cd5231","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"fa7da84b-8e56-4078-9d38-40e8f14d4775","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"d0d8e175-25af-412f-aca3-a0b387b53efa","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"14e72a14-4a34-4d5c-94f1-8fd9845c4dce","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"03b68b72-80af-422d-b740-867be3c318e3","type":"VBar"},{"attributes":{},"id":"a6714890-64a2-4dcb-9482-19fabd6a6df3","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"d1756d0c-8809-4cdf-a0ec-90dbb9a94f45","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"f36c29d1-0305-43fc-8f66-fdd638cd5231","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"52a95124-2da4-432e-9325-8de7aefc984d","type":"VBar"},{"attributes":{},"id":"e661c5b7-9e3e-4b3e-8cca-b9652771f25f","type":"CategoricalScale"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"e0c5f428-ab5e-4655-9b67-1f217ce228fd","type":"GlyphRenderer"}]},"id":"6078d554-8320-4cff-8b93-165d2c802b3a","type":"LegendItem"},{"attributes":{"data_source":{"id":"043d2419-497a-45b2-b8e7-778e91518378","type":"ColumnDataSource"},"glyph":{"id":"086d9253-053a-4995-bb56-bc4e47cac3ae","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ca05eef1-029c-4d1a-a682-3941e5ac5f06","type":"VBar"},"selection_glyph":null,"view":{"id":"151913bc-7809-4326-b1d6-3ac7288731b6","type":"CDSView"}},"id":"179d8f99-02e0-48b2-a1f6-c3f5a51630e6","type":"GlyphRenderer"}],"root_ids":["9530329a-ef11-441c-92ca-cd01474136d2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"de182ccc-a39e-42e4-ab80-64060f2261eb","elementid":"ec6c5a93-6fb7-410a-a442-f2d9babcad55","modelid":"9530329a-ef11-441c-92ca-cd01474136d2"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
