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
      };var element = document.getElementById("685718be-4546-47d5-a524-11bafaa372b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '685718be-4546-47d5-a524-11bafaa372b5' but no matching script tag was found. ")
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
                    var docs_json = {"99263a80-5224-48a0-b2c1-2f2f1f27e6de":{"roots":{"references":[{"attributes":{"data_source":{"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"},"glyph":{"id":"cc67c388-37b0-465f-96b3-ebdc65257436","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"001fdcc8-61cc-4f97-b3e6-82d929cc446c","type":"VBar"},"selection_glyph":null,"view":{"id":"597a4270-8061-49fc-a132-633f28284ec7","type":"CDSView"}},"id":"9c0cb008-2cd9-4ed6-abc7-091ad1ee77d5","type":"GlyphRenderer"},{"attributes":{},"id":"3bb39ef8-811a-4a10-90d2-ea96a74becca","type":"CategoricalTickFormatter"},{"attributes":{"range":{"id":"b437a72f-4191-49cd-9aea-e066d6bc66a4","type":"FactorRange"},"value":0.25},"id":"15d67061-ce2f-4384-ad29-74fe6a1859b3","type":"Dodge"},{"attributes":{"source":{"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"}},"id":"e1e0a553-10ec-4a9a-b7ba-ac53e35840b3","type":"CDSView"},{"attributes":{},"id":"36b6edcb-efe8-4c72-ac71-df650e6f1784","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5f9ced08-0eed-4e5a-bbb0-c4f74ade9352","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"15d67061-ce2f-4384-ad29-74fe6a1859b3","type":"Dodge"}}},"id":"65450f8f-f1d9-42d8-aec4-f89aa72adf89","type":"VBar"},{"attributes":{"data_source":{"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"},"glyph":{"id":"ad76b9b2-1abc-4cb2-bfa6-86e19e492884","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8a8886c6-0c18-420d-ad43-6091a73ef97c","type":"VBar"},"selection_glyph":null,"view":{"id":"e1e0a553-10ec-4a9a-b7ba-ac53e35840b3","type":"CDSView"}},"id":"5b7b9f5c-d7e1-4ba7-9e11-70f3617492bc","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"},"glyph":{"id":"65450f8f-f1d9-42d8-aec4-f89aa72adf89","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e3af1903-5558-4a6c-85f6-fd196a136ea7","type":"VBar"},"selection_glyph":null,"view":{"id":"7d5c1824-2c37-4a6d-8bda-8c76b8b1dbe0","type":"CDSView"}},"id":"e45219cf-305a-443a-8dac-d9180a0416fb","type":"GlyphRenderer"},{"attributes":{"source":{"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"}},"id":"597a4270-8061-49fc-a132-633f28284ec7","type":"CDSView"},{"attributes":{"items":[{"id":"eb9cf5a4-fc32-47cd-aa35-1b34ebc45ade","type":"LegendItem"},{"id":"97b54ba1-bd77-46cd-85a9-2843112a8785","type":"LegendItem"},{"id":"3c1ce6b2-267b-4d2b-8774-201faab90fe9","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"c3416242-72c2-431e-9501-5101e539a0f6","subtype":"Figure","type":"Plot"}},"id":"62ac649e-bcd1-4ea5-90af-426afc1e5301","type":"Legend"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"e45219cf-305a-443a-8dac-d9180a0416fb","type":"GlyphRenderer"}]},"id":"3c1ce6b2-267b-4d2b-8774-201faab90fe9","type":"LegendItem"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"b437a72f-4191-49cd-9aea-e066d6bc66a4","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"4ceddb11-aed8-4029-b8e6-f710db7be2c9","type":"Dodge"}}},"id":"001fdcc8-61cc-4f97-b3e6-82d929cc446c","type":"VBar"},{"attributes":{"callback":null,"end":10},"id":"d35f29db-552e-4b09-a7a9-6517cea1f660","type":"Range1d"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"64ce2099-103d-4d18-bfe9-43e755ed0625","type":"Title"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"9c0cb008-2cd9-4ed6-abc7-091ad1ee77d5","type":"GlyphRenderer"}]},"id":"eb9cf5a4-fc32-47cd-aa35-1b34ebc45ade","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"a733778e-b644-492c-874c-c59ca78bf7a8","type":"Dodge"}}},"id":"8a8886c6-0c18-420d-ad43-6091a73ef97c","type":"VBar"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"a733778e-b644-492c-874c-c59ca78bf7a8","type":"Dodge"}}},"id":"ad76b9b2-1abc-4cb2-bfa6-86e19e492884","type":"VBar"},{"attributes":{},"id":"c38f4e80-ccb2-46b3-b4ab-ac88463be73c","type":"CategoricalScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c3416242-72c2-431e-9501-5101e539a0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"722b0d27-90ba-4d26-aff9-6ddae84134ef","type":"CategoricalTicker"}},"id":"8182a5fb-9c5d-489d-acb7-935f4860b4f3","type":"Grid"},{"attributes":{"range":{"id":"b437a72f-4191-49cd-9aea-e066d6bc66a4","type":"FactorRange"}},"id":"a733778e-b644-492c-874c-c59ca78bf7a8","type":"Dodge"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"4ceddb11-aed8-4029-b8e6-f710db7be2c9","type":"Dodge"}}},"id":"cc67c388-37b0-465f-96b3-ebdc65257436","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"15d67061-ce2f-4384-ad29-74fe6a1859b3","type":"Dodge"}}},"id":"e3af1903-5558-4a6c-85f6-fd196a136ea7","type":"VBar"},{"attributes":{"below":[{"id":"c8c61221-fa00-46f2-846c-0b7302d1fc66","type":"CategoricalAxis"}],"left":[{"id":"34198ec7-be4c-4f21-8607-4656a05462f6","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"c8c61221-fa00-46f2-846c-0b7302d1fc66","type":"CategoricalAxis"},{"id":"8182a5fb-9c5d-489d-acb7-935f4860b4f3","type":"Grid"},{"id":"34198ec7-be4c-4f21-8607-4656a05462f6","type":"LinearAxis"},{"id":"a9a8188c-770e-46fe-9296-42f527500b32","type":"Grid"},{"id":"62ac649e-bcd1-4ea5-90af-426afc1e5301","type":"Legend"},{"id":"9c0cb008-2cd9-4ed6-abc7-091ad1ee77d5","type":"GlyphRenderer"},{"id":"5b7b9f5c-d7e1-4ba7-9e11-70f3617492bc","type":"GlyphRenderer"},{"id":"e45219cf-305a-443a-8dac-d9180a0416fb","type":"GlyphRenderer"}],"title":{"id":"64ce2099-103d-4d18-bfe9-43e755ed0625","type":"Title"},"toolbar":{"id":"5f9ced08-0eed-4e5a-bbb0-c4f74ade9352","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b437a72f-4191-49cd-9aea-e066d6bc66a4","type":"FactorRange"},"x_scale":{"id":"c38f4e80-ccb2-46b3-b4ab-ac88463be73c","type":"CategoricalScale"},"y_range":{"id":"d35f29db-552e-4b09-a7a9-6517cea1f660","type":"Range1d"},"y_scale":{"id":"f5ed6b5a-f5be-40ce-819a-4c4d353af0bd","type":"LinearScale"}},"id":"c3416242-72c2-431e-9501-5101e539a0f6","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"5b7b9f5c-d7e1-4ba7-9e11-70f3617492bc","type":"GlyphRenderer"}]},"id":"97b54ba1-bd77-46cd-85a9-2843112a8785","type":"LegendItem"},{"attributes":{},"id":"df5a8bad-4287-4c77-b411-880b8f2629cb","type":"BasicTicker"},{"attributes":{"source":{"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"}},"id":"7d5c1824-2c37-4a6d-8bda-8c76b8b1dbe0","type":"CDSView"},{"attributes":{},"id":"f5ed6b5a-f5be-40ce-819a-4c4d353af0bd","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"c3416242-72c2-431e-9501-5101e539a0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"df5a8bad-4287-4c77-b411-880b8f2629cb","type":"BasicTicker"}},"id":"a9a8188c-770e-46fe-9296-42f527500b32","type":"Grid"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"b04e94b6-fb94-453f-baa8-2ffadcb9f67e","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3bb39ef8-811a-4a10-90d2-ea96a74becca","type":"CategoricalTickFormatter"},"plot":{"id":"c3416242-72c2-431e-9501-5101e539a0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"722b0d27-90ba-4d26-aff9-6ddae84134ef","type":"CategoricalTicker"}},"id":"c8c61221-fa00-46f2-846c-0b7302d1fc66","type":"CategoricalAxis"},{"attributes":{"range":{"id":"b437a72f-4191-49cd-9aea-e066d6bc66a4","type":"FactorRange"},"value":-0.25},"id":"4ceddb11-aed8-4029-b8e6-f710db7be2c9","type":"Dodge"},{"attributes":{},"id":"722b0d27-90ba-4d26-aff9-6ddae84134ef","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"36b6edcb-efe8-4c72-ac71-df650e6f1784","type":"BasicTickFormatter"},"plot":{"id":"c3416242-72c2-431e-9501-5101e539a0f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"df5a8bad-4287-4c77-b411-880b8f2629cb","type":"BasicTicker"}},"id":"34198ec7-be4c-4f21-8607-4656a05462f6","type":"LinearAxis"}],"root_ids":["c3416242-72c2-431e-9501-5101e539a0f6"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"99263a80-5224-48a0-b2c1-2f2f1f27e6de","elementid":"685718be-4546-47d5-a524-11bafaa372b5","modelid":"c3416242-72c2-431e-9501-5101e539a0f6"}];
                
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
